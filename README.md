# voxel-webmcp

A browser voxel sandbox that exposes its world to an AI agent through
[WebMCP](https://webmachinelearning.github.io/webmcp/).

Built for the OpenAI WebMCP Challenge. The player builds by hand; the agent, running inside the
browser, reads the surrounding voxel geometry and edits it in response to natural language —
"add a second floor to this house", "replace the stone with planks", "dig a basement here".

The agent operates on voxel geometry, not on game objects. The world has no notion of a house,
a wall or a room. Those exist only in the model's reasoning.

Status: the WebMCP layer is not implemented yet. The repository currently holds the forked game
with its build migrated to Vite.

## Running

```bash
npm install
npm run dev      # builds workers, then starts the Vite dev server
```

```bash
npm run build    # production build into dist/
```

`npm run build:workers` must run before a bare `vite` invocation — the npm scripts do it for
you. See `context/build.md`.

## Documentation

Machine-oriented context for agents working on this repository lives in `AGENTS.md` and
`context/`. Start with `AGENTS.md`.

## Upstream

This is a fork of [VoxelSrv](https://github.com/VoxelSrv/voxelsrv) by
[Patbox](https://github.com/Patbox), a voxel game built on
[noa-engine](https://github.com/andyhall/noa) by Andy Hall. The upstream project is no longer
maintained. Its release history is in `CHANGELOG.md`.

## Assets

- Textures: [Pixel Perfection Community Edition](https://github.com/Athemis/PixelPerfectionCE)
  by XSSheep and others
- Models by [ewanhowell5195](https://www.curseforge.com/minecraft/texture-packs/template-cem)
- Minecraft Classic protocol support based on work by
  [rom1504 and mhsjlw](https://github.com/mhsjlw/minecraft-classic-protocol)

## Licence

MIT. See `LICENCE`.
