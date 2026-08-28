import { setupDebug, setupDot, debug, dot } from './ingame/debug';
import { inventory } from './ingame/inventory/main';
import { setupChat, chatContainer, input } from './ingame/chat';
import { setupTab, tabContainer } from './tab';
import { buildHotbar, hotbar } from './ingame/hotbar';
import { craftingInventory } from './ingame/inventory/crafting';
import { setupMcpBadge, destroyMcpBadge } from './ingame/mcpBadge';
import { cameraHint, setupCameraHint } from './ingame/cameraHint';

export function setupGuis(noa, socket) {
	buildHotbar(noa, socket);
	setupDot();
	setupDebug(noa, socket.server);
	setupChat();
	setupTab();
	setupMcpBadge();
	setupCameraHint();
}

export function destroyGuis() {
	if (inventory != null) inventory.dispose();
	if (craftingInventory != null) craftingInventory.dispose();
	if (hotbar != null) hotbar.dispose();
	if (chatContainer != null) chatContainer.dispose();
	if (input != null) input.dispose();
	if (tabContainer != null) tabContainer.dispose();
	if (debug != null) debug.dispose();
	if (dot != null) dot.dispose();
	if (cameraHint != null) cameraHint.dispose();
	destroyMcpBadge();
}
