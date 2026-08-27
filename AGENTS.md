# AGENTS.md

First read for any agent working in this repository.

## What this project is

A fork of VoxelSrv, a browser voxel game. Target: the **OpenAI WebMCP Challenge**. The game
declares WebMCP tools so an agent running inside the browser can edit the player's world from
natural-language requests ("build a second floor on this house").

The first singleplayer WebMCP layer exposes ten tools for world context, voxel editing, and
undo. The forked game's build runs on Vite.

## Read order

1. This file.
2. `context/architecture.md` — what the system is, how it runs, invariants.
3. The relevant module from the index below.

After AGENTS.md + architecture.md an agent should be able to make a small change correctly.

## Module index

| File | Domain |
| --- | --- |
| `context/architecture.md` | Topology, invariants, source map |
| `context/build.md` | Vite, workers, polyfills, build traps |
| `context/client-bootstrap.md` | `index.ts`, noa init, global mutable state |
| `context/networking.md` | Sockets, protocol, packet handling |
| `context/singleplayer-server.md` | Server in a Web Worker, patches, memfs |
| `context/world-chunks.md` | Client chunk store, block registry, id↔name |
| `context/player-input.md` | Controls, `targetedBlock`, player pose |
| `context/gui.md` | Babylon GUI, screens, menus |
| `context/webmcp.md` | Implemented WebMCP behavior, limits, and pending scenarios |

## WebMCP verification

`HANDOVER.md` holds the browser verification order and runtime traps. It is temporary — delete
it once the console and agent scenarios pass.

## Verification commands

```bash
npm run build:workers   # required before first dev run — public/*.js is gitignored
npm run dev             # vite dev server
npm run build           # production build into dist/
npx tsc --noEmit        # type check
```

There are no tests in this project.

## Hard constraints

1. **Never change `chunkSize: 32`** in `noaOpts()` (`src/values.ts`). The chunk size is
   hardcoded in dozens of places across client and server.
2. **Workers must stay IIFE**, not ESM. See `context/build.md`.
3. **`fs` resolves to `memfs`** via a Vite alias. There is no real filesystem in the browser.
4. **No comments in code written from now on.** Structural knowledge belongs in `context/`,
   not in a comment. Existing comments are left as they are — both VoxelSrv's and the Ukrainian
   ones in `vite.shared.mjs` and `build-workers.mjs`. Everything they say is already recorded
   in `context/build.md`, which is the authority if the two disagree.
5. **All code, identifiers, and documentation written from now on in English.**
6. `README.md` describes this fork. `CHANGELOG.md` is upstream VoxelSrv release history and is
   not maintained here.

## Acceptance criteria for every session

At the end of a session, once decisions are final, **update `context/`**:

- edit existing lines rather than appending new blocks;
- delete context describing code that no longer exists;
- never write history ("was X, now Y") — write the new state of X;
- skip the update only when the change provably alters nothing already written.

## Original idea sketch

The project author's initial idea document is absorbed into `context/webmcp.md`, which records
both what still holds and what the fork superseded (stack, world size, world model). Do not go
looking for the original file.
