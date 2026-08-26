# Singleplayer server

The full `voxelsrv-server` package runs inside a Web Worker in the same tab. It owns the
authoritative world.

## Spawn

`src/lib/singleplayer/setup.ts` → `createSingleplayerServer(worldname, settings, autoconnect)`:

1. Creates `toServer` / `toClient` `EventEmitter`s and a `VirtualSocket` over them.
2. `new Worker('./server.js')` — the IIFE bundle in `public/`.
3. Loads saved world data from IndexedDB, posts three messages:
   `SingleplayerViewDistance`, `SingleplayerWorldData`, `SingleplayerSettings`.
4. `server.onmessage` re-emits every worker message on `toClient`, intercepting
   `ServerStopped`, `ServerAutoSave` and `ServerStarted` for save and autoconnect handling.
5. `toServer.on('packet', ...)` forwards client packets into the worker.

## Worker entry

`src/lib/singleplayer/server/server.ts`. Applies patches, constructs `new Server(false)`,
creates a `BaseSocket('127.0.0.1')` and overrides `socket.send` to `self.postMessage`.

The server starts only once both `SingleplayerWorldData` and `SingleplayerSettings` have
arrived (`startServer()` guards on this).

Control messages handled in the worker's `self.onmessage`:

| Message | Effect |
| --- | --- |
| `SingleplayerJoin` / `SingleplayerConnectPlayer` | `server.connectPlayer(socket)` |
| `SingleplayerLeave` | `server.stopServer()`, once |
| `SingleplayerAutoSave` | `world.saveAll()` then post `ServerSave` with `vol.toJSON()` |
| `SingleplayerPregenerateWorld` | Generates every chunk inside the border, reporting progress |
| `SingleplayerViewDistance` | Updates `config.viewDistance` live |
| `SingleplayerMessage` | Broadcast chat |
| anything else | Re-emitted to the server's socket listeners |

## Persistence

`memfs` is aliased over `fs`. The server writes chunk files into the in-memory volume; the
whole volume is serialized with `vol.toJSON()` and stored in IndexedDB via
`src/lib/helpers/storage.ts` (Dexie).

Consequence: anything written into memfs inflates every world save. Transient state — an undo
journal, a copy buffer — belongs in worker RAM, not memfs.

Chunk files are pako-deflated protobuf, then base64'd, because memfs round-trips strings more
reliably than binary here (`worldPatches.ts`).

## Patches

Monkey-patches applied at worker start, before the server is constructed.

`serverPatches.ts`:

- `Server.prototype.heartbeatPing` → no-op. Kills outbound heartbeat traffic.
- `Server.prototype.authenticatePlayer` → always `{ valid: true, auth: false }`.

`worldPatches.ts`:

- `World.prototype.saveChunk` — writes base64 of deflated protobuf into memfs.
- `World.prototype.readChunk` — delegates to `readChunkSync`.
- `World.prototype.readChunkSync` — inflates and rebuilds an `ndarray`.

`operatorPermissionHolder.ts` — a `PlayerPermissionHolder` whose `check` and `checkStrict`
always return `true`. In creative mode it is assigned to any player whose `ipAddress` is
`127.0.0.1`, which in singleplayer is always the local player.

## Server configuration

Set in the `server-config-update` handler in `server.ts`:

`world.border = worldSettings.worldsize`, seed and generator from world settings,
`worldGenWorkers: 2`, `maxplayers: 1`, `public: false`, `consoleInput: false`,
`chunkTransportCompression: false`.

`server.overrides.worldGenWorkers = ['./', '.js']` makes the server spawn `./normalWorker.js`
from the site root.

## Player-authoritative block rules

`voxelsrv-server` `Player.action_blockplace` (`dist/lib/player/player.js:427`) requires all of:

- `world.isBlockInBounds(blockpos)`
- `vec.dist(playerPos, blockpos) < 14`
- the selected inventory slot holds an item mapped to a block

If any fails it silently returns. These rules apply to the player. Editing that must not obey
them writes through `World.setBlock` directly instead — see `context/webmcp.md`.

## World API in the worker

`voxelsrv-server/dist/lib/world/world.d.ts`:

| Method | Note |
| --- | --- |
| `getBlockSync(pos, allowgen?)` | Synchronous; returns a `Block` |
| `getBlock(pos, allowgen)` | Async; can generate the chunk if missing |
| `setBlock(pos, block, allowgen?)` | Gated by `isBlockInBounds` |
| `setRawBlock(pos, numericId)` | Bypasses block-object lookup |
| `isBlockInBounds(pos)` | Border check |
| `saveAll()` | Flush every loaded chunk to memfs |

`server.worlds.worlds` is the map of worlds; singleplayer has one.

## Traps

1. The worker cannot be debugged with `console.log` visible in the page's main console filter —
   messages appear under the worker context.
2. `SingleplayerLeave` is guarded by a `notLeft` flag; a second leave is a no-op.
3. `server.status` is `'initiating'` until both init messages arrive. Calls before that are
   dropped without error.
