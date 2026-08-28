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

Camera look also has a window-level keyboard fallback that does not require canvas focus or
pointer lock. Arrow left/right change heading and arrow up/down change pitch. A key tap rotates
15 degrees, while holding rotates continuously. It is intentionally fixed rather than stored
in `gameSettings.controls`, so browser agents can rely on the arrow keys in every session. The
handler is disabled while chat, an inventory, crafting, or a chest is open.

Every handler starts with `if (!serverSettings.ingame ...) return;`. World interaction remains
available without pointer lock while no inventory, crafting, chest, or chat GUI is open. This
supports embedded agent browsers that cannot retain relative mouse capture.

Pointer lock is requested only from a canvas click or an explicit input action because browsers
reject attempts made during bootstrap without a user gesture. Rejections are consumed because
embedded browsers can disallow pointer lock while world interaction remains available.

Window-level capture handlers normalize mouse and pointer button transitions before the legacy
input library handles them. Mouse releases are observed even when they occur outside the game
container. Window blur, document hiding, and pointer-lock changes clear the input library's
private key and binding counters as well as its public boolean state. This prevents missed
mouse-up and key-up events from leaving building or movement bindings permanently pressed after
returning to the page.

| Binding | Action |
| --- | --- |
| `fire` | Break the targeted block: `ActionClick` + `ActionBlockBreak` |
| `alt-fire` | Place at `targetedBlock.adjacent`: `ActionClick` + `ActionBlockPlace`, gated by `noa.ents.isTerrainBlocked` |
| `mid-fire` | Pick block: select or swap the matching hotbar slot |
| `inventory`, `chat`, `cmd`, `tab`, `zoom`, `screenshot`, `hide` | GUI toggles |
| `menu` | Escape closes an active GUI, otherwise toggles pointer lock |
| `numberkey` (1–9) | Hotbar selection |
| Arrow keys | Camera heading and pitch without pointer lock |

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
3. `testIsIn(noa)` deliberately allows world interaction without pointer lock but rejects it
   while an interactive GUI is open.
4. Hotbar wrap-around is hardcoded to 8 in one branch (`pickedID = 8`) while the upper bound
   uses `gameSettings.hotbarsize`. Non-default hotbar sizes wrap incorrectly.
