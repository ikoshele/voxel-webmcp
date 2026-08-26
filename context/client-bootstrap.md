# Client bootstrap

## Entry point

`src/index.ts`. One top-level `getSettings().then(async (data) => { ... })`. Everything runs
inside that callback; there is no module-level init and no framework.

Order that matters:

1. `updateSettings(data)` — must precede `new Engine2(noaOpts())`, because `noaOpts()` reads
   `gameSettings` for sensitivity, view distance, FOV and autostep.
2. `constructScreen(noa)` — creates the Babylon GUI layers.
3. `setNoa(noa)` — publishes the engine into `values.ts` for every module that imports it.
4. `createProtocolWorker()` and `createInflateWorker()` — awaited; both must resolve before any
   connection.
5. Route on URL params: `?server=<addr>` connects, `?debugWorld` starts an in-memory world,
   otherwise the main menu is built.

## Global mutable state

`src/values.ts` exports module-level `let` bindings mutated at runtime. Import the binding,
never destructure or cache the value.

| Export | Mutator | Meaning |
| --- | --- | --- |
| `noa` | `setNoa` | The engine instance |
| `gameSettings` | `updateSettings` | Persisted user settings; writes to IndexedDB |
| `serverSettings` | `updateServerSettings` | `{ cheats, control, ingame }` for the current session |
| `hostedOn` | — | Deployment label derived from `window.location.hostname` |

`serverSettings.ingame` gates almost every input handler and every in-game GUI. Code that runs
while not in-game must check it.

## noa options

`noaOpts()` in `src/values.ts`. Notable values:

| Option | Value | Note |
| --- | --- | --- |
| `chunkSize` | 32 | Do not change. Hardcoded across client and server |
| `blockTestDistance` | 7 | Raycast reach for `noa.targetedBlock` |
| `manuallyControlChunkLoading` | `true` | Chunks load only when `world.ts` calls `manuallyLoadChunk` |
| `tickRate` | 20 | Matches the server tick |
| `playerStart` | `[0, 100, 0]` | Overridden by the server on join |
| `stickyPointerLock` | `false` | Pointer lock is managed manually |

## Debug hooks on `window`

Set in `index.ts`, useful when driving the game from the console:

| Hook | Effect |
| --- | --- |
| `window.connect(addr)` | Connect to a server |
| `window.forceplay()` | Set `serverSettings.ingame = true` |
| `window.enableDebugSettings()` | Reveal hidden settings entries |

`gameSettings.debugSettings.printProtocolToConsole` logs every packet in both directions.

## Pointer lock

A `pointerlockchange` listener toggles `noa.ignorePointerLock` and the player's
`receivesInputs.ignore` state. On mobile the branch is empty — mobile input is wired separately
in `src/gui/mobile.ts`.

## Traps

1. `noa.ents.getPhysics(noa.playerEntity).body.airDrag = 9999` is set at boot and again on
   every disconnect path in `connect.ts`. It freezes the player during menus. `connect.ts:366`
   resets it to `-1` on spawn. This is client-side; no packet carries it.
2. A `beforeunload` handler blocks tab close with a confirm prompt.
3. Before joining a world, a `beforeRender` handler spins `noa.camera.heading` for the menu
   backdrop. It stops once `serverSettings.ingame` is true.
