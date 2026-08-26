# Handover — start of implementation

Design is finished. `context/webmcp.md` is authoritative for *what* to build and *why*; this
file is only the order to build it in and the traps to avoid. Delete it once the tools work.

## Where the code goes

| Path | Contents |
| --- | --- |
| `src/lib/mcp/index.ts` | Register and unregister tools, own the `AbortController` |
| `src/lib/mcp/tools/*.ts` | One file per tool: schema plus `execute` |
| `src/lib/mcp/bridge.ts` | Main-thread half of the `PluginMessage` request/response bridge |
| `src/lib/singleplayer/server/mcpHandler.ts` | Worker half: reads and writes against `World` |

## Order

**1. Bridge + console shim.** `PluginMessage` in both directions with a correlation id, plus
`window.__mcp.call(name, args)` on the main thread. Nothing else is testable until this exists,
and it is the only step with no visible payoff — do it anyway, first.

**2. `get_player`, `get_world_info`.** Main thread only, no worker hop. First real output, and
it proves the shim.

**3. Tool registration.** `document.modelContext.registerTool` for each tool when
`serverSettings.ingame` becomes true; abort the controller on disconnect. Registration is where
the `readOnlyHint` / `untrustedContentHint` annotations go.

**4. `scan_region`.** Worker read path via `World.getBlockSync`. Ship `summary` first, then
`heightmap`, then `slices`. Each mode is independently useful.

**5. `fill_region`.** Worker write path: `World.setBlock` in a loop, then broadcast one
`WorldMultiBlockUpdate`. First visible edit.

**6. Undo journal.** Add it before the remaining write tools, not after — every write tool has
to record into it, and retrofitting means touching all of them twice.

**7. The rest.** `replace_blocks`, `set_blocks`, `copy_region`, `move_region`, `stack_region`.

**8. Chat logging.** `addMessage` from `src/gui/ingame/chat.ts`.

## Traps

1. **Editing worker source needs a rebuild.** `src/lib/singleplayer/server/**` compiles into
   `public/server.js` via `npm run build:workers`, which runs once when `npm run dev` starts.
   Vite will not hot-reload it. Symptom: your change appears to do nothing.
2. **Do not write blocks through `ActionBlockPlace`.** It enforces reach and inventory and
   silently no-ops — `voxelsrv-server/dist/lib/player/player.js:427`. Use `World.setBlock`.
3. **A write is not visible until the client is told.** Broadcast `WorldMultiBlockUpdate`;
   `src/lib/gameplay/connect.ts:405` applies it to both the mesh and the chunk cache.
4. **Do not read volumes with `noa.getBlock`.** It returns air outside view distance and cannot
   say so. Worker only.
5. **Undo journal in worker RAM, never in memfs.** memfs is serialized into every world save.
6. **Expose block names, never numeric ids.** `blockIDmap[id]` → name, from
   `src/lib/gameplay/registry.ts`.
7. **Out-of-border writes are silently dropped** by `World.isBlockInBounds`. Report them in the
   tool result.

## Definition of done for step 1

In the browser console, while in a world:

```js
await window.__mcp.call('get_player', {})
```

returns the pose object from `context/webmcp.md`, and a round trip through the worker returns a
block name for a known coordinate.

## Open

Nothing blocking. The tool surface is a starting point — run real scenarios (second floor, copy
a window, basement, staircase, roof) and let the gaps show themselves rather than designing
more on paper.
