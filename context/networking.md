# Networking

The application is singleplayer-only, but the browser client still talks to the authoritative
server through a socket abstraction. The server runs in a Web Worker rather than on a network
host.

## Socket classes

`src/socket.ts` contains `BaseSocket` and `VirtualSocket`. `VirtualSocket` connects two
`EventEmitter`s to the server worker. Packets remain plain objects and never use protobuf
serialization on this path.

`VirtualSocket.send` emits both `(type, data)` and `('packet', type, data)`.
`src/lib/singleplayer/setup.ts` listens on `packet` and forwards it to the worker through
`postMessage`. Worker responses are re-emitted on the client-side emitter.

## Protocol

`voxelsrv-protocol` supplies packet names, TypeScript interfaces, registry definitions, and
constants shared with `voxelsrv-server`. Client→server packets are `Action*` and `Login*`;
server→client packets are `Player*`, `World*`, `Entity*`, `Chat*`, `Registry*`, and
`Environment*`.

### PluginMessage

`IPluginMessage` exists in both directions. `src/lib/mcp/bridge.ts` and
`src/lib/singleplayer/server/mcpHandler.ts` use key `voxel-webmcp`, version `1`, a JSON byte
payload, and a correlation id for WebMCP calls. Other plugin-message keys continue through the
normal server listener path.

## Packet handling

`src/lib/gameplay/connect.ts` registers the supported server→client handlers inside
`setupConnection`.

| Packet | Effect |
| --- | --- |
| `WorldBlockUpdate` | `noa.setBlock` plus `chunkSetBlock` |
| `WorldMultiBlockUpdate` | Same, looped over a block list |
| `WorldChunkLoad` | `setChunk` in `world.ts`, inflate if compressed |
| `RegistryUpdate` | `registerBlocks` and `registerItems` |
| `PlayerKick` | Tears down the local session |

`WorldMultiBlockUpdate` is the bulk-write channel. Region edits use it rather than emitting
thousands of single updates.

`PlayerEntity` and the `Entity*` rendering packets are intentionally not consumed. The client
keeps noa's invisible local player entity for physics, movement, camera position, and inventory,
but it does not load or render player or mob models.

`socketSend(type, data)` is the exported client→server helper; it no-ops when `socket` is null.

## Position reporting

`moveEvent` in `setupConnection` runs on every second noa tick and sends `ActionMoveLook`,
`ActionMove`, or `ActionLook` when the position has moved past 0.15 or the camera has turned.
`lastPos` starts as `null` and the first tick always sends, so the server tracks the player from
the spawn drop onward. Seeding it with an empty array instead makes `vec3.dist` return `NaN`,
which silences the position branch until the first camera turn — long enough for the fall from
`playerStart` to exceed the server's own movement gate. See `context/singleplayer-server.md`.

## Connection lifecycle

`src/index.ts` creates one `VirtualSocket` through `createSingleplayerServer`, then
`setupConnection` registers handlers and drives the local login handshake. The worker accepts
the generated local nickname without external authentication. `disconnect()` sends
`SingleplayerLeave`, waits for the worker to save the world, and tears down the session.

There are no WebSocket, remote server list, login, account, multiplayer, or Minecraft Classic
proxy paths in the application.

## Traps

1. `VirtualSocket.on` registers on `toClient`, not on `BaseSocket.listeners`.
2. Socket errors surface as a fake `PlayerKick` packet delayed 500 ms, not as an exception.
