# Networking

Every game session, singleplayer included, runs over a socket abstraction. There is no
"local mode" that bypasses it.

## Socket classes

`src/socket.ts`. All extend `BaseSocket`, which holds a `listeners` map and an `emit`/`on`
pair.

| Class | Transport | Serialization |
| --- | --- | --- |
| `VirtualSocket` | Two `EventEmitter`s bridged to a Web Worker via `postMessage` | None — plain objects |
| `MPSocket` | `WebSocket` | protobuf via `protocol.js` worker |
| `ProxySocket` | `WebSocket` to a proxy, wrapped by `ProxyHandler` | protobuf, double-wrapped |

`VirtualSocket.send` emits twice: once as `(type, data)` and once as `('packet', type, data)`.
`src/lib/singleplayer/setup.ts` listens on `'packet'` and forwards to the worker.

## Protocol

`voxelsrv-protocol` (GitHub `VoxelSrv/protocol#v3`). Client→server packets are `Action*` and
`Login*`; server→client are `Player*`, `World*`, `Entity*`, `Chat*`, `Registry*`,
`Environment*`.

`protocol.js` (a `threads.js` worker) does protobuf encoding. It is only used by `MPSocket` and
`ProxySocket`. Singleplayer never touches it, but the worker is still spawned at boot and
awaited in `index.ts`.

### PluginMessage

`IPluginMessage` exists in both directions in the protocol and is **handled nowhere** — not in
`connect.ts`, not in `voxelsrv-server`. It is a free, already-typed escape hatch for custom
request/response traffic that needs no protocol regeneration. See `context/webmcp.md`.

## Packet handling

`src/lib/gameplay/connect.ts` is the single sink for every server→client packet. 670 lines;
all handlers are registered inside `setupConnection`.

Handlers worth knowing:

| Packet | Effect | Location |
| --- | --- | --- |
| `WorldBlockUpdate` | `noa.setBlock` + `chunkSetBlock` | `connect.ts:412` |
| `WorldMultiBlockUpdate` | Same, looped over a block list | `connect.ts:405` |
| `WorldChunkLoad` | `setChunk` in `world.ts`, inflate if compressed | — |
| `RegistryUpdate` | `registerBlocks` / `registerItems` | — |
| `PlayerEntity` | Creates the local player entity | — |
| `PlayerKick` | Tears down and returns to the menu | — |

`WorldMultiBlockUpdate` is the existing bulk-write channel. Region edits should use it rather
than emitting thousands of single updates.

`socketSend(type, data)` is the exported client→server helper; it no-ops when `socket` is null.

## Connection lifecycle

`connect(noa, address)` picks a socket class from the server entry, then `setupConnection`
registers handlers and drives the login handshake. `disconnect()` closes the socket, deletes
entities, destroys GUIs, clears the chunk store and returns to the main menu. In singleplayer
it first sends `SingleplayerLeave` and waits for the world to save.

## Multiplayer: out of scope

The project targets singleplayer only. Multiplayer and the Minecraft Classic proxy are still
wired but not a target for the WebMCP work.

Files involved: `src/socket.ts` (`MPSocket`, `ProxySocket`), `src/lib/gameplay/proxyHandler.ts`,
`src/gui/menu/multiplayer.ts`, `src/gui/menu/login.ts`, `src/protocolWrappers/0.30c/**`, and
the server-list functions in `src/values.ts` (`fetchServers`, `getServerList`,
`heartbeatServer`, `proxyServer`).

Recommended sequencing: hide the menu entry points now, delete the code after the WebMCP tools
work. Deleting first is a wide refactor across `connect.ts` and `socket.ts` with no payoff for
the demo.

## Traps

1. Removing the `protocol.js` worker breaks boot even in singleplayer — `index.ts` awaits it
   unconditionally.
2. `VirtualSocket.on` registers on `toClient`, not on `BaseSocket.listeners`. It does not share
   the parent's listener map.
3. Socket errors surface as a fake `PlayerKick` packet delayed 500 ms, not as an exception.
