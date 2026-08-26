# World, chunks and registry

## Client chunk store

`src/lib/gameplay/world.ts`. A module-level `chunkStorage: { [id]: { chunk, light } }` keyed by
`"cx|cy|cz"` (chunk coordinates, not block coordinates). Values are `ndarray`s of shape
`[32, 32, 32]`.

This is a render cache, not a source of truth. It exists because noa loads chunks lazily and
asks for data through `worldDataNeeded`.

| Function | Purpose |
| --- | --- |
| `setChunk(data)` | Handles `WorldChunkLoad`; inflates if compressed, splits a tall column into 32³ chunks, emits `load` |
| `getChunkSync(id)` | Returns copies of the arrays, or `null` |
| `chunkSetBlock(id, x, y, z, light)` | Writes one block into the cache using **block** coordinates |
| `chunkExist(id)` | Presence check |
| `removeChunk(id)` / `clearStorage()` | Eviction |
| `setupWorld(noa)` | Wires `worldDataNeeded`, `playerEnteredChunk`, and a 500 ms recovery interval |
| `checkAndLoadChunks(noa, ci, cj, ck)` | Loads chunks in range, unloads out-of-range ones |

`chunkSetBlock` takes block coordinates and derives the chunk id itself. It handles negative
coordinates by adding 32 after `%`. It silently returns if the chunk is not cached.

Chunk loading is manual: `noaOpts()` sets `manuallyControlChunkLoading: true`, so nothing loads
unless `manuallyLoadChunk` is called from this file.

## Reading blocks

Three read paths, with different correctness:

| Path | Where | Correct when |
| --- | --- | --- |
| `noa.getBlock(x, y, z)` | main thread | Only inside loaded chunks. Returns **air** for anything outside view distance, indistinguishable from real air |
| `getChunkSync(id)` | main thread | Same limitation; raw cache access |
| `World.getBlockSync(pos)` / `getBlock(pos, allowgen)` | worker | Always. Can generate a missing chunk when `allowgen` is true |

Any read that must be trustworthy uses the worker path.

## Block registry and id mapping

`src/lib/gameplay/registry.ts`. Populated from the server's `RegistryUpdate` packet.

| Export | Shape | Use |
| --- | --- | --- |
| `blocks` | `{ [name]: BlockDef }` | Full definition by string name |
| `blockIDs` | `{ [name]: number }` | name → numeric id |
| `blockIDmap` | `{ [number]: name }` | numeric id → name |
| `items` | `{ [name]: ItemDef }` | Item definitions |

Numeric ids are server-assigned (`rawid`) and are not stable across registry changes. Anything
crossing a boundary — persisted data, agent-facing output — uses the string name. Id `0` is
air.

`BlockDef.options` carries flags read elsewhere: `fluid`, `opaque`, `color`, `material`.
`controls.ts` overrides `noa.blockTargetIdCheck` to skip fluids so raycasts pass through water.

`registerBlocks` also registers a `water` and a `barrier` material unconditionally, marked in
the source as temporary.

## Chunk format on the wire

`WorldChunkLoad` carries a column of `height` chunks as one `Uint16Array`, optionally deflated.
`setChunk` inflates via the `inflate.js` worker, wraps it in an `ndarray` of shape
`[32, 32*height, 32]`, then copies out each 32³ slice.

The copy is a triple-nested loop per chunk. It is a known hot path on world join.

## Traps

1. `chunkStorage` keys are chunk coordinates, `chunkSetBlock` arguments are block coordinates.
   Mixing them writes to the wrong chunk or silently no-ops.
2. `getChunkSync` returns `subarray(0)` views, not deep copies. Mutating the result mutates the
   cache.
3. `setChunk` uses `data.data.buffer` with a `byteOffset` — the payload is a view into a larger
   buffer, not a standalone array.
4. `setupWorld`'s 500 ms interval is never cleared. It runs for the lifetime of the page.
