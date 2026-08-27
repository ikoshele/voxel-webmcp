# Build

Vite 5.4.21 on Node 20.19.x and npm 10.x. All direct dependency versions are exact because the
abandoned game stack is not compatible with current releases selected from semver ranges. Two
separate builds produce the app bundle and the worker bundles.

## Commands

```bash
npm run build:workers   # node build-workers.mjs → public/*.js
npm run dev             # build:workers, then vite dev server on 0.0.0.0
npm run build           # build:workers, then vite build → dist/
docker build -t voxel-webmcp .
docker run --rm -p 8080:80 voxel-webmcp
```

`npm run dev` and `npm run build` both run `build:workers` first. A bare `npx vite` does not,
and the game will fail at startup with missing worker files.

The root `Dockerfile` is a multi-stage production build. Its Node 20.19 builder installs all
dependencies, builds the workers and app, and is discarded. The runtime image is Nginx with
only `dist/` copied into its static web root and listens on container port 80. Public GitHub
dependencies are pinned to immutable commits through HTTPS URLs, so Docker builds do not
require host SSH keys or copy the host `.npmrc`.

## Worker bundles

`build-workers.mjs` builds three entries into `public/` as **IIFE** libraries:

| Output | Entry |
| --- | --- |
| `public/inflate.js` | `src/lib/helpers/worldInflate.ts` |
| `public/server.js` | `src/lib/singleplayer/server/server.ts` |
| `public/normalWorker.js` | `node_modules/voxelsrv-server/dist/default/worldgen/normalWorker.js` |

They must stay IIFE. `threads.js` loads its workers through `importScripts()`, and
`voxelsrv-server` spawns `./normalWorker.js` with a plain `new Worker(url)`. ESM output breaks
both.

They live in `public/` so the same file is served identically in dev and in production.

`public/*.js` is in `.gitignore` — these are build artifacts. A fresh clone has no workers
until `build:workers` runs.

## Aliases

Set in `vite.shared.mjs`, shared by both builds:

| Alias | Target | Reason |
| --- | --- | --- |
| `fs` | `memfs` | `voxelsrv-server` writes chunk files; there is no filesystem in a browser |
| `readline` | `shims/readline.mjs` | Browser stub; the server's console input is unused |

## Plugins

**`noa-require-context`** (`vite.shared.mjs`). `noa-engine` loads its ECS components with
webpack's `require.context('../components/', false, /\.js$/)`. Production and worker builds
rewrite that call into an `import.meta.glob` shim. The dev dependency optimizer uses a matching
esbuild plugin that generates a static CommonJS module map before prebundling.

**`vite-plugin-node-polyfills`** with `exclude: ['fs']`. Without the exclusion the polyfill
silently overrides the `fs` → `memfs` alias, and the server worker starts with no filesystem —
world saving fails with no clear error.

## App build

`vite.config.ts`:

- `base: './'` — output is relocatable, works from a subdirectory or `file://`.
- Output is flattened: `bundle.js`, `[name].js`, `[name][extname]`.
- `@babylonjs` is split into a `babylon.js` chunk.
- `target: 'es2020'` for the current dependency graph and browser baseline.
- `commonjsOptions.include: [/node_modules/]` with `transformMixedEsModules: true` — several
  dependencies ship mixed CJS/ESM and fail to bundle without it.

Dev server binds `0.0.0.0` with permissive CORS headers and accepts Cloudflare Tunnel subdomains under `.trycloudflare.com` via `server.allowedHosts`.

## Traps

1. Running `vite` directly skips the worker build. Always use the npm scripts.
2. Adding a Node builtin polyfill can shadow an alias. Check `exclude` before adding one.
3. `dist/` and `public/*.js` are gitignored; a committed-looking `dist/` in a working tree is
   stale local output.
4. `npx tsc --noEmit` type-checks but does not build. It will not catch worker packaging bugs.
