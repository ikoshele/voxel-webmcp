# Handover — WebMCP verification

The ten-tool singleplayer implementation is present. `context/webmcp.md` is authoritative for
behavior and limits. Delete this file after the browser console and agent scenarios below pass.

## Verification order

1. Run `npx tsc --noEmit` and `npm run build`.
2. Restart `npm run dev`; worker source changes are not hot-reloaded.
3. Wait for the automatically opened local world and run `window.__mcp.list()` in the browser console.
4. Run `await window.__mcp.call('get_world_info', {})` and inspect `block_catalog`.
5. Run `await window.__mcp.call('get_player', {})`.
6. Scan a known block with `await window.__mcp.call('scan_region', { from: [x,y,z], to: [x,y,z] })`.
7. Confirm `fill_region` rejects `mode: 'walls'`, then place a reversible test with
   `shape: 'walls'`, verify it is hollow vertically, and call `undo`.
8. Copy a small asymmetric region with `mirror: 'x'` and `rotation: 90`, verify orientation,
   then rotate it in place with `move_region` and undo both calls.
9. Start several tool calls without awaiting between them and confirm their results and world
   revisions follow call order without overlapping edits.
10. Verify `document.modelContext` discovers all ten tools in a WebMCP-capable browser.
11. Run the second-floor, copied-window, basement, staircase, roof, and tower scenarios with an agent.

## Relevant paths

| Path | Contents |
| --- | --- |
| `src/lib/mcp/index.ts` | Registration lifecycle, player context, console shim |
| `src/lib/mcp/bridge.ts` | Main-thread `PluginMessage` bridge |
| `src/lib/mcp/tools/definitions.ts` | Tool metadata and JSON Schemas |
| `src/lib/singleplayer/server/mcpHandler.ts` | Worker reads, edits, catalog, undo |
| `src/lib/singleplayer/server/worldRevision.ts` | Mutation revision tracking |

## Traps

1. Editing worker source requires a dev-server restart because `public/server.js` is built once.
2. Agent writes go through `World.setBlock`, never `ActionBlockPlace`.
3. Visible writes require `WorldMultiBlockUpdate`; the handler emits batches of 1,000.
4. Authoritative scans run in the worker, never through `noa.getBlock`.
5. Undo state lives only in worker RAM and resets with the session.
6. `window.__mcp` appears after `LoginSuccess`, only in singleplayer.
7. All valid WebMCP requests are serialized in the worker, including reads.
