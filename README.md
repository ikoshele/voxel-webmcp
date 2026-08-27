# voxel-webmcp

A browser voxel sandbox that exposes its world to an AI agent through
[WebMCP](https://webmachinelearning.github.io/webmcp/).

Built for the OpenAI WebMCP Challenge. The player builds by hand; the agent, running inside the
browser, reads the surrounding voxel geometry and edits it in response to natural language —
"add a second floor to this house", "replace the stone with planks", "dig a basement here".

The agent operates on voxel geometry, not on game objects. The world has no notion of a house,
a wall or a room. Those exist only in the model's reasoning.

Status: the Vite-based singleplayer game exposes ten WebMCP tools for compact world inspection,
geometry editing, material discovery, and WorldEdit-style undo. Browser-agent scenario testing
is in progress.

## Running

```bash
nvm install 20.19.0
nvm use 20.19.0
npx --yes npm@10.9.2 install
npm run dev      # builds workers, then starts the Vite dev server
```

```bash
npm run build    # production build into dist/
```

`npm run build:workers` must run before a bare `vite` invocation — the npm scripts do it for
you. See `context/build.md`.

The app opens its persistent local world immediately. The same executors exposed to a browser
agent are available through a diagnostic console shim:

```javascript
window.__mcp.list()
await window.__mcp.call('get_world_info', {})
await window.__mcp.call('get_player', {})
```

In a WebMCP-capable browser they are also registered on `document.modelContext`. See
`context/webmcp.md` for the complete tool contract and `HANDOVER.md` for the verification
scenarios.

Arrow keys rotate the camera without mouse pointer lock: left/right turn, up/down look
vertically. A tap rotates 15 degrees and holding a key rotates continuously, which makes camera
control available in agent browsers that cannot drive relative mouse movement.

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

## Licence

MIT. See `LICENCE`.
