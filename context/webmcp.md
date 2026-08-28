# WebMCP layer

The eleven-tool first pass is implemented for singleplayer. This document defines its behavior,
constraints, and the scenario testing still required before the hackathon demo.

## What WebMCP is

Spec: <https://webmachinelearning.github.io/webmcp/>

A page declares tools on `document.modelContext`. An agent running inside the browser
discovers them through the browser's observation mechanism and calls them. There is no network
MCP server and no separate client.

```javascript
document.modelContext.registerTool({
  name,              // 1..128 chars, [A-Za-z0-9_.-]
  title,             // optional display label
  description,       // natural language
  inputSchema,       // JSON Schema object
  execute,           // async (input, { signal }) => any
  annotations,       // { readOnlyHint, untrustedContentHint }
}, { signal, exposedTo });
```

Facts that shape the design:

- `execute` may be async. The return value is `JSON.stringify`'d and handed to the agent, so
  **every byte returned is agent context**.
- Aborting the `AbortSignal` passed at registration unregisters the tool. This is the mechanism
  for registering tools on world join and dropping them on leave.
- `registerTool` rejects if a tool with the same name already exists.
- Tool names, descriptions and input schemas sit in the agent's context permanently, on every
  turn, before any world data. Tool count and schema verbosity are a fixed tax.
- Access is gated by the `"tools"` permissions policy, default allowlist `['self']`.

The agent cannot see inside the WebGL canvas. Its entire perception of the world is whatever
the read tools return.

## Decisions taken

1. **Fork VoxelSrv.** Not a from-scratch Three.js build.
2. **Normal generated terrain.** Not a fixed 128³ flat world. The agent is expected to inspect
   the space around it and flatten ground itself when needed.
3. **The agent is an operator around the player, not the player.** It does not act through the
   player entity, is not bound by reach distance or inventory, and has no skin or presence in
   the world.
4. **The agent cannot move or teleport the player.** Read and edit only.
5. **Singleplayer only.** Multiplayer is out of scope; see `context/networking.md` for the
   removal plan and file list.
6. **Geometry-level tools, not semantic ones.** `fill`, `replace`, `copy`, `paste` — never
   `build_house`. The world has no notion of a house, wall or room; a house is a block pattern
   the agent infers. The model does the reasoning.
7. **The game is the source of truth, the agent's context is scratch memory.** The agent
   re-queries the world instead of remembering it.
8. **Air is never serialized.** A voxel absent from a representation is air.
9. **Operation set for the first pass:** `set`/`fill`, `replace`, `walls`, `copy`/`paste`,
   `undo`. Plus read tools for player pose, target block, and region inspection.
10. **The engine never interprets the world for the model.** No feature lists, no detected
    structures, no flood-fill "this building" primitive. Read tools return geometry; deciding
    what counts as a wall, a room or a house is the model's job. This rules out
    `find_structure_bounds`, which was considered and rejected.
11. **Agent activity surfaces in the in-game chat.** It exists for the human watching, not for
    the agent — the agent already holds its own calls and their results in context. No
    `get_history` tool.
12. **Undo follows WorldEdit semantics exactly.** One tool call is one undo step. A step stores
    only the blocks it changed, as before/after pairs — not the whole region. Steps form a
    capped per-session stack. `undo(count = 1)` walks back that many steps. Rebuilding a house
    with five `fill` calls therefore takes `undo(5)` to remove entirely. The agent most likely
    already knows this semantics from WorldEdit's ubiquity, which is the point of copying it.
13. **Stable operating guidance is an explicit read tool.** `get_building_guide` explains the
    voxel sandbox, the agent's operator role, startup workflow, tool selection, construction
    principles, material usage, player traversal, parallel execution and undo ordering, fast
    versus animated build presentation, world rules, and editing limits. It is local to the
    main thread because its result does not depend on mutable world state.

## Consequences for the code

Decision 3 rules out the existing write path. `Player.action_blockplace` enforces
`vec.dist(playerPos, blockpos) < 14` and requires a matching item in the selected inventory
slot, then silently no-ops. An operator-level editor cannot use it.

Intended routing:

| Concern | Path |
| --- | --- |
| Player pose, camera, targeted block | Main thread through `src/lib/mcp/index.ts`. `noa.ents.getPosition`, `noa.camera.heading/pitch`, `noa.targetedBlock` |
| Volume reads | Worker only, via `World.getBlockSync` / `getBlock(pos, allowgen)` |
| Block writes | Worker, via `World.setBlock` directly, bypassing player rules |
| Applying writes to the client | Server emits `WorldMultiBlockUpdate`; `connect.ts:405` already handles it |

Volume reads go through the worker **even when the chunks are loaded locally**. `noa.getBlock`
returns air for anything outside view distance and cannot report that it did so, which makes a
client-side read path degrade invisibly at chunk edges. `execute` is async anyway, so the
`postMessage` round trip is free.

**Transport for the round trip:** `IPluginMessage` carries JSON request and response objects
under key `voxel-webmcp`, version `1`. `src/lib/mcp/bridge.ts` owns correlation ids, a 90-second timeout,
abort handling and pending promises. The worker intercepts the key before normal server packet
dispatch. The `window.__mcp.call(name, args)` shim uses the same executors and validates against
the same JSON Schemas as browser agents. Worker requests execute independently, and each
response is returned when its own operation completes.

**Undo journal:** worker RAM, never memfs. `vol.toJSON()` is what gets saved to IndexedDB;
a journal in memfs would inflate every world save.

## World inspection format

Settled. The read path is `scan_region`, progressive disclosure driven by the agent.

### Region selection

Two mutually exclusive selectors on the same tool:

| Selector | Use |
| --- | --- |
| `center` + `radius` | Exploration — the agent does not yet know the bounds |
| `from` + `to` | Precise inspection of a known box |

Passing both, or neither, is an error.

### Modes

`mode` is chosen by the agent. Default `summary`.

| Mode | Content | Cost on a 33×24×33 region |
| --- | --- | --- |
| `summary` | Block counts by type, bounding box of non-air | ~42 tokens |
| `heightmap` | Topmost non-air block per column | ~840 tokens |
| `slices` | ASCII grids along a chosen axis | ~300 tokens per slice |

`slices` supports all three axes. A `y` slice is a floor plan; `x` and `z` slices are
elevations, which is what reveals wall height, storeys and roofs.

### Slice format

A slice carries a header naming the axis directions explicitly, then a bare character grid, then
a legend. Nothing else.

```text
Slice y=63
Origin: x=40, z=20
Dims: 16 x 4
Columns: x increases →
Rows:    z increases ↓

....PoPPoPP.....
....P.....P.....
....P.....P.....
....PoPPoPP.....
```

Every cell has a deterministic coordinate: `x = originX + column`, `z = originZ + row`. The
header is load-bearing — without the axis directions, whether rows are `x` or `z` is ambiguous.

No coordinate rulers. They inflate the response and address a failure that has not been
observed yet. If testing shows the model miscounting on wide grids, add sparse markers every 5
or 10 cells at that point — do not pre-complicate the format.

No feature list accompanies the grid. See decision 10.

### Scans are stateless

No region ids, no server-side scan session. The agent already holds the origin from the scan
header it just read.

Write tools accept absolute coordinates. They may additionally accept an explicit `origin` plus
local coordinates, which must be named unambiguously — `localFrom` / `localTo` or `offset`,
never bare `from` / `to` in a call that also carries an `origin`. Local coordinates keep the
agent working with small numbers without the engine holding state.

## Tool surface

Eleven tools. WorldEdit is the reference for the *language* of geometric primitives, not for its
API or its stateful UX. Everything is stateless: no selection, no clipboard, no region ids.

### Read

| Tool | Returns |
| --- | --- |
| `get_building_guide` | Stable agent role, workflow, tool-selection, material, and traversal guidance |
| `get_world_info` | World bounds, generator, gamemode, current `world_revision` |
| `get_player` | Player pose and what they are looking at |
| `scan_region` | Region geometry in the requested mode |

`get_player` returns a coordinate basis rather than precomputed offsets, so the agent does
vector arithmetic instead of trigonometry:

```json
{
  "position": [117.4, 64.0, -23.7],
  "voxel_position": [117, 64, -24],
  "facing": "north",
  "forward": [0, 0, -1],
  "right": [1, 0, 0],
  "up": [0, 1, 0],
  "looking_at": {
    "position": [120, 65, -30],
    "block": "planks",
    "face_normal": [0, 0, 1],
    "adjacent_position": [120, 65, -29],
    "distance": 6.2
  }
}
```

"Five blocks in front of me" is `position + forward * 5`. `right` serves "continue to the
right"; `face_normal` and `adjacent_position` serve "put it on this surface". All of it comes
free from `noa.targetedBlock` and `noa.camera`.

### Write

| Tool | Operation |
| --- | --- |
| `fill_region` | Fill a box, `shape: solid \| walls \| shell` |
| `replace_blocks` | Swap one block type for another inside a box |
| `set_blocks` | Batch of explicit position/block pairs |
| `copy_region` | Copy `from`/`to` box to `destination`, optionally mirror and rotate, source untouched |
| `move_region` | Same, then fill the non-overlapping source with air |
| `stack_region` | Repeat a box N times along a direction |
| `undo` | Walk back `count` steps |

The six bulk write tools accept `delay_ms`, an integer from 0 to 100. Zero is the default and
uses the normal batched update path. A nonzero value reveals only genuinely changed blocks one
at a time in deterministic order; box-shaped operations proceed from lower to higher layers,
while `set_blocks` preserves input order. The exact change set is calculated before the first
write. An animation whose inter-block delays would exceed 60 seconds is rejected without
changing the world. The editing call remains active and returns its result only after the
animation completes.

`shape` values are defined as: `solid` fills the whole box (default); `walls` fills the four
vertical sides only, leaving floor and ceiling open; `shell` fills all six faces. These follow
WorldEdit's `//set`, `//walls` and `//faces`.

`set_blocks` is the escape hatch for geometry that boxes express badly — stairs, pitched roofs,
arches, diagonals, irregular window patterns. It carries a per-call cap in the low hundreds to
low thousands of voxels.

Deliberately absent for now: `sphere`, `cylinder`, `pyramid`, brushes, schematics, `get_block`,
`paste_region`, `get_history`. Anything the model can express through `set_blocks` does not get
a dedicated tool until testing shows it repeatedly spending many blocks on the same operation.

### Block names and material context

The registered block names ship as an `enum` in the `inputSchema` of every tool that takes a
block. The agent then cannot name a block that does not exist, instead of discovering it from
an error. The enum repeats across `fill_region`, `replace_blocks` and `set_blocks`; its fixed
schema cost is accepted. No `list_block_types` tool.

Material characteristics are centralized in `get_world_info.block_catalog`, not repeated in
write schemas. The catalog is generated from the authoritative server registry and gives each
block a human label, concise appearance, texture names, and traits such as solid, transparent,
fluid, or plant. `get_building_guide` supplies stable material-selection and traversal rules;
`get_world_info` supplies the dynamic catalog and world bounds. WebMCP has no page-level
system-instruction primitive, so the guide is an explicit read tool rather than a hidden global
prompt or duplicated text in every editing-tool description.

Real names are short and unprefixed: `stone`, `dirt`, `grass`, `cobblestone`, `log`, `sand`,
`leaves`, `water`, `bricks`, `planks`, `glass`, `gravel`, `snow`, `stonebrick`. Not
`oak_planks`. Source: `voxelsrv-server/dist/default/blocks.js`.

### World revision

A monotonic counter incremented on **every** world mutation, whether from the agent or from the
player's own hands. Read tools return it. It lets the agent notice that a snapshot it is
reasoning over is stale.

For the first pass it is returned only. Accepting `expected_revision` on write tools, to reject
an edit based on stale information, is a later addition if testing shows it is needed.

## Implementation notes

Decided details that are easy to get wrong:

1. **Overlapping and transformed copy and move.** `copy_region` and `move_region` snapshot the
   source before writing anything. Optional `mirror: x | z | xz` runs in source-local axes
   before a clockwise `rotation: 0 | 90 | 180 | 270` around y. `destination` is the minimum
   corner of the transformed output box.
2. **`move_region` clears the source with air,** minus any part of the source the destination
   overlaps.
3. **Undo covers every write tool uniformly,** including `copy_region`, `move_region` and
   `stack_region`. Each completed call is one step. Worker requests are not serialized;
   dependent edits and undo calls must await earlier results. Concurrent overlapping calls can
   race their before-state snapshots, and undo order follows completion order.
4. **A one-block scan must return that block.** `from == to`, or `radius: 0`, is a legitimate
   probe; it returns the block name, not a one-entry histogram. This is why no separate
   `get_block` tool exists.
5. **Every write result reports what actually happened** — blocks changed, and whether anything
   was skipped for being outside the world border. `World.isBlockInBounds` failures are silent
   at the engine level and must not be silent at the tool level.
6. **Operation limits are enforced in the worker, not only in JSON Schema.** Scans and edits
   are capped at 65,536 voxels, explicit `set_blocks` calls at 2,048 entries, slice requests at
   16 planes, stack count at 16, and scan radius at 19.
7. **Instant visible updates are packeted in groups of 1,000 blocks; animated updates emit one
   changed block per delay step.** One call remains one undo step in either mode. `move_region`
   writes its destination before clearing the non-overlapping source so gradual moves remain
   visually coherent.

## Open questions

Browser-agent verification is pending. Run real scenarios — second floor, copy a window to
another wall, basement, staircase, roof, tower — and let the gaps show themselves rather than
designing further on paper. The console shim is the deterministic diagnostic path when the
browser does not expose `document.modelContext`.

## Superseded by this repository

The project author's original idea sketch is absorbed here. These parts of it no longer
describe the project:

| Claim in that document | Actual |
| --- | --- |
| TypeScript + Vite + Three.js, written from scratch | Fork of VoxelSrv on noa-engine + Babylon.js |
| Fixed 128³ world | Procedurally generated terrain, 32³ chunks, a configurable border |
| Everything in the browser main thread | Client plus an authoritative server in a Web Worker |

Still valid from it: no semantic game objects, geometry-level tools, the game as source of
truth, air never serialized, inspect only the relevant region, hackathon scope.

## Appendix: measured representation sizes

Synthetic scene, region 33×24×33 = 26,136 blocks, containing a 9×5×7 hollow house with plank
walls and glass windows on flat ground. Sizes are `JSON.stringify` length; token estimates at
4 bytes per token.

| Representation | Bytes | ~Tokens |
| --- | ---: | ---: |
| Raw dump of non-air blocks (5,655 entries) | 197,546 | 49,400 |
| Counts by type + structure bounding box | 166 | 42 |
| 33×33 heightmap, nested arrays | 3,365 | 840 |
| 33×33 heightmap, single preformatted string | 3,346 | 840 |
| 5 ASCII y-slices 33×33 + legend | 5,968 | 1,490 |
| Palette + RLE over the full volume | 1,036 | 260 |

Two results worth keeping:

- The raw dump is not viable. One "look around" call would consume roughly 49k tokens.
- Reformatting nested numeric arrays as a preformatted string saved 0.6%, not the expected
  multiple, because two-digit values dominate and padding cancelled the punctuation savings.
  "Emit grids as strings" is a targeted optimization, not a general rule.

RLE is the most compact but requires the model to mentally expand runs into geometry, which
models do unreliably. ASCII slices are directly legible — walls and window openings are visible
without decoding:

```text
................PoPPoPP..........
................P.....P..........
................P.....P..........
................PoPPoPP..........
```

Legibility and compactness are different properties. Legibility won: RLE was rejected despite
being the most compact, because expanding runs into geometry is a step models get wrong.
