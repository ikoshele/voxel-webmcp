# Architecture

## What this is

A fork of [VoxelSrv](https://github.com/VoxelSrv/voxelsrv), a TypeScript voxel game running in
the browser on [noa-engine](https://github.com/andyhall/noa) with Babylon.js rendering.

The fork's purpose is the OpenAI WebMCP Challenge: expose the world to a browser-resident AI
agent through WebMCP tools so it can inspect and edit voxel geometry on the player's request.

Work completed in the fork so far: build migrated from webpack to Vite. No gameplay or
protocol changes yet.

## Runtime topology

Three JavaScript contexts, all inside one browser tab.

```text
┌─ main thread ───────────────────────────────────────────────┐
│  index.ts  →  noa-engine (Babylon.js render, physics, input) │
│  Babylon GUI overlay (menus, hotbar, chat, inventory)        │
│  client chunk store (src/lib/gameplay/world.ts)              │
│  BaseSocket subclass                                         │
└───────────────┬─────────────────────────────────────────────┘
                │ VirtualSocket over postMessage
┌───────────────▼─────────────────────────────────────────────┐
│  Web Worker: server.js                                       │
│  voxelsrv-server — authoritative World, players, registry    │
│  memfs volume holds chunk files                              │
│  spawns further workers for terrain generation               │
└──────────────────────────────────────────────────────────────┘

  Web Worker: protocol.js   protobuf encode/decode (multiplayer only)
  Web Worker: inflate.js    pako inflate for compressed chunk payloads
```

Singleplayer is not a special case that bypasses the network layer. The client always talks to
a server through a socket; in singleplayer that socket is `VirtualSocket`, which forwards
packets to a worker over `postMessage` instead of a WebSocket. Packets stay plain objects and
skip protobuf serialization on this path.

## Data flow: placing a block today

1. `controls.ts` reads `noa.targetedBlock`, sends `ActionBlockPlace` via `socketSend`.
2. `VirtualSocket.send` → `postMessage` → worker.
3. `voxelsrv-server` `Player.action_blockplace` validates, calls `World.setBlock`.
4. Server broadcasts `WorldBlockUpdate`.
5. `connect.ts` applies it: `noa.setBlock(...)` plus `chunkSetBlock(...)`.

Step 5 is the only place the client's visible world changes. Anything that writes blocks must
end up emitting `WorldBlockUpdate` or `WorldMultiBlockUpdate`, or the client will not re-mesh.

## Invariants

1. **The worker's `World` is the only source of truth.** The client chunk store
   (`src/lib/gameplay/world.ts`) is a render cache fed by server packets.
2. **Client block writes must be mirrored in both places.** `noa.setBlock` updates the mesh;
   `chunkSetBlock` updates the cache noa re-reads on chunk reload. Doing only one desyncs on
   the next chunk load.
3. **`noa.getBlock` returns air for unloaded chunks.** It cannot distinguish "air" from
   "outside view distance". Any read that must be correct goes through the worker's
   `World.getBlockSync` / `World.getBlock(pos, allowgen)`.
4. **Writes outside the world border silently no-op.** `World.isBlockInBounds` gates
   `setBlock`; the border is `config.world.border = worldSettings.worldsize`.
5. **`chunkSize` is 32 everywhere** and is not configurable in practice.
6. **`vol.toJSON()` from the worker's memfs is the saved world.** Anything placed in memfs is
   serialized into IndexedDB on every save.
7. **Workers are built as IIFE bundles into `public/`,** not imported as modules. See
   `context/build.md`.
8. **Global mutable singletons.** `noa`, `socket`, `gameSettings`, `blocks`, `blockIDmap` are
   module-level `let` exports mutated at runtime. Import them, do not snapshot them.

## Source map

| Path | Role |
| --- | --- |
| `src/index.ts` | Entry point, engine bootstrap |
| `src/values.ts` | Global settings, engine options, server list, splash text |
| `src/socket.ts` | `BaseSocket`, `MPSocket`, `ProxySocket`, `VirtualSocket` |
| `src/lib/gameplay/connect.ts` | Every server→client packet handler. 670 lines |
| `src/lib/gameplay/world.ts` | Client chunk store, noa chunk load/unload wiring |
| `src/lib/gameplay/registry.ts` | Block/item registration, `blockIDmap` lookups |
| `src/lib/gameplay/sky.ts` | Sky and cloud meshes |
| `src/lib/gameplay/sound.ts` | Sound playback |
| `src/lib/gameplay/proxyHandler.ts` | Minecraft Classic proxy bridge |
| `src/lib/player/controls.ts` | Input bindings, block break/place, hotbar |
| `src/lib/player/entity.ts` | Player entity setup, movement packets |
| `src/lib/player/gamepad.ts` | Gamepad input |
| `src/lib/singleplayer/setup.ts` | Spawns the server worker, wires `VirtualSocket` |
| `src/lib/singleplayer/server/server.ts` | Worker entry: hosts `voxelsrv-server` |
| `src/lib/singleplayer/server/*Patches.ts` | Monkey-patches over the server package |
| `src/lib/helpers/storage.ts` | Dexie/IndexedDB persistence |
| `src/lib/helpers/protocol.ts` | Protobuf worker entry |
| `src/lib/helpers/worldInflate.ts` | pako inflate worker entry |
| `src/gui/**` | Babylon GUI screens |
| `src/protocolWrappers/0.30c/**` | Minecraft Classic protocol client |
| `build-workers.mjs` | Builds the four worker bundles into `public/` |
| `vite.shared.mjs` | Shared plugins and aliases for both builds |

## Third-party packages that matter

| Package | Note |
| --- | --- |
| `noa-engine` | Forked to `VoxelSrv/noa-engine`, not upstream |
| `voxelsrv-server` | The full server, imported and run in-browser |
| `voxelsrv-protocol` | Packet definitions, protobuf schemas |
| `memfs` | Aliased over `fs` |
| `fakereadline` | Local stub in `fake_modules/`, aliased over `readline` |

## Dead or inert code

- `webpack.config.js` and the `build:webpack` script. The Vite pipeline replaced them. Kept
  only as reference for the original build.
- `src/gui/hand.ts` — `setupHand` is commented out at its only call site in `src/gui/setup.ts`.
- Multiplayer and proxy paths are live but out of scope. See `context/networking.md`.

## Open decisions

All WebMCP decisions live in `context/webmcp.md`, including the tool surface. Nothing there is
blocking. The next step is running real scenarios against a model rather than designing further
on paper.
