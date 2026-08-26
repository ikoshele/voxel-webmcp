# Player and input

## Where player state lives

| Value | Source | Meaning |
| --- | --- | --- |
| `noa.playerEntity` | engine | Entity id of the local player |
| `noa.ents.getPosition(noa.playerEntity)` | engine | `[x, y, z]` floats |
| `noa.camera.heading` | engine | Yaw in radians |
| `noa.camera.pitch` | engine | Pitch in radians |
| `noa.targetedBlock` | engine | `{ position, adjacent, normal, blockID }` or `undefined` |
| `noa.ents.getState(eid, 'inventory')` | custom component | `{ items, selected, tempslot, armor, crafting }` |

`noa.targetedBlock` is the raycast result at `blockTestDistance: 7`. `position` is the block
hit, `adjacent` is the empty cell in front of it — the cell a placement would fill. `blockID`
is a numeric registry id; map it through `blockIDmap` before exposing it anywhere.

All of these are main-thread reads with no worker round trip.

The `inventory` component is created in `index.ts`, not by noa.

## Input wiring

`src/lib/player/controls.ts`, `setupControls(noa)`. Bindings come from
`gameSettings.controls` and are applied by `rebindControls(noa, settings)`, which unbinds
everything first — bindings are stored in settings, not in `noaOpts()` (`bindings: {}` there).

Every handler starts with `if (!serverSettings.ingame ...) return;` and most also call
`testIsIn(noa)`, which checks pointer lock state.

| Binding | Action |
| --- | --- |
| `fire` | Break the targeted block: `ActionClick` + `ActionBlockBreak` |
| `alt-fire` | Place at `targetedBlock.adjacent`: `ActionClick` + `ActionBlockPlace`, gated by `noa.ents.isTerrainBlocked` |
| `mid-fire` | Pick block: select or swap the matching hotbar slot |
| `inventory`, `chat`, `cmd`, `menu`, `tab`, `zoom`, `screenshot`, `hide` | GUI toggles |
| `numberkey` (1–9) | Hotbar selection |

`castRay()` performs a separate Babylon `pickWithRay` against meshes named `hitbox-*` to detect
entity clicks. Its own comment marks it as possibly broken.

The `tick` handler reads `noa.inputs.state.scrolly` for hotbar scrolling and applies an upward
impulse when jumping inside a fluid block.

## Sending player actions

`socketSend(type, data)` from `src/lib/gameplay/connect.ts`. The client sends the intent; the
server decides. Client-side inventory selection is applied optimistically alongside the packet.

Server-side validation for placement is in `context/singleplayer-server.md`.

## Player entity

`src/lib/player/entity.ts` sets up the entity and movement packets. `src/lib/player/gamepad.ts`
adds gamepad input, enabled by `gameSettings.gamepad`.

## Traps

1. `noa.targetedBlock` is `undefined`, not `null`, when nothing is targeted.
2. `blockTargetIdCheck` is replaced in `controls.ts` to make fluids non-targetable. Raycasts
   pass through water.
3. `testIsIn(noa)` returns true when pointer lock is unsupported, so handlers can fire in
   contexts where the pointer is not locked.
4. Hotbar wrap-around is hardcoded to 8 in one branch (`pickedID = 8`) while the upper bound
   uses `gameSettings.hotbarsize`. Non-default hotbar sizes wrap incorrectly.
