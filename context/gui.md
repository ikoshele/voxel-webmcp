# GUI

Babylon.js GUI (`@babylonjs/gui`) drawn over the noa canvas. No DOM UI framework, no HTML for
game screens — `index.html` contains only the canvas mount and a script tag.

## Screen layers

`src/gui/main.ts` builds three fullscreen UIs in `constructScreen(noa)`, each with a root
`Rectangle` container at `zIndex: 1000`:

| Index | `AdvancedDynamicTexture` on | Typical use |
| --- | --- | --- |
| 0 | noa's own scene | Overlay drawn with the game |
| 1 | `layer0`, a separate `BABYLON.Scene` | In-game HUD; `getUI(1)` takes chat input focus |
| 2 | `layer1`, a separate `BABYLON.Scene` | Popups and loading screens. Rendered last, on top |

Accessors: `getUI(n)` and `getScreen(n)` take `0 | 1 | 2`. **`getLayer(n)` takes only `0 | 1`**
and returns the two extra scenes — its numbering is offset from the other two by one. All three
throw before `constructScreen` has run.

Both extra scenes have `autoClear = false` and their own `ArcRotateCamera`, and are rendered
from a noa `afterRender` hook.

`scale` and `setScale(x)` implement pixel-art UI scaling, driven by `gameSettings.scale` and
clamped by `maxScale`. `getEngine()` exposes the Babylon engine used by the GUI.

`src/gui/main.ts` exports an `EventEmitter` named `event` used for GUI-wide signals.

## Structure

| Path | Contents |
| --- | --- |
| `src/gui/main.ts` | Layers, scaling, engine access |
| `src/gui/setup.ts` | `setupGuis` / `destroyGuis` — builds and tears down every in-game GUI |
| `src/gui/ingame/hotbar.ts` | Hotbar |
| `src/gui/ingame/chat.ts` | Chat log and input; exports `input`, `chatContainer`, `changeState`, `addMessage` |
| `src/gui/ingame/debug.ts` | F3-style debug overlay and crosshair (`dot`) |
| `src/gui/ingame/inventory/*` | Main inventory, crafting, chest |
| `src/gui/parts/*` | Reusable widgets: window, menu item, item slot, toast, popup, formatted text |
| `src/gui/tab.ts` | Player list overlay |
| `src/gui/mobile.ts` | Touch controls, loaded only when `isMobile` |
| `src/gui/hand.ts` | Held-item render. Dead — `setupHand` is commented out in `setup.ts` |

## Lifecycle

`setupGuis(noa, socket, dataPlayer, dataLogin)` is called from `connect.ts` on join.
`destroyGuis()` disposes every container on disconnect. Both are all-or-nothing; there is no
per-GUI teardown.

In-game GUI singletons (`inventory`, `craftingInventory`, `chestInventory`, `hotbar`,
`chatContainer`, `input`, `tabContainer`, `debug`, `dot`) are module-level
exports, nullable, and checked for truthiness by input handlers to decide whether a key press
belongs to the game or to a GUI.

## Text formatting

`src/gui/parts/formtextblock.ts` defines `IFormatedText`: `{ text, color?, font?, url? }`.
Arrays of these are the standard rich-text payload for chat and popups.

## Toasts

`setupToasts()` is called once in `index.ts`. `addToast(...)` with `toastColors` from
`src/gui/parts/toastMessage.ts` is the notification path that does not require a GUI screen.

## Traps

1. `getLayer` is indexed `0 | 1` while `getUI` and `getScreen` are indexed `0 | 1 | 2`.
   `getLayer(1)` and `getUI(1)` refer to different scenes.
2. GUI singletons are `let` exports reassigned on open and set to `null` on close. Import the
   binding, do not cache it.
3. `destroyGuis` disposes but does not null the bindings; each module nulls its own.
4. Fonts are preloaded in `index.ts` from `defaultFonts` in `values.ts`. A font name not in
   that list renders as a fallback with no error.
5. Mobile loads `mobile.css` at runtime by injecting a `<link>` and requests fullscreen plus
   landscape lock on the first click.
