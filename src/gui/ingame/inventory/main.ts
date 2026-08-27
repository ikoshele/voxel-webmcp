import { getScreen, scale, event } from '../../main';
import * as GUI from '@babylonjs/gui/';
import { ActionInventoryClick } from 'voxelsrv-protocol/js/client';

import { ItemSlot, createSlot, updateSlot } from '../../parts/itemSlot';
import { defaultValues } from '../../../values';
import { getBaseInventory } from './base';
import { Engine } from 'noa-engine';
import { BaseSocket } from '../../../socket';
import { createItem } from '../../parts/menu';
import {
	downloadLocalWorld,
	installWorldArchive,
	readWorldArchive,
	requestWorldReset,
} from '../../../lib/singleplayer/worldLifecycle';
import type { WorldArchive } from '../../../lib/singleplayer/worldLifecycle';

export let inventory: GUI.Rectangle = null;

export function openInventory(noa: Engine, socket: BaseSocket) {
	function getInv() {
		return noa.ents.getState(noa.playerEntity, 'inventory');
	}

	const ui = getScreen(2);

	inventory = new GUI.Rectangle();
	inventory.zIndex = 15;
	inventory.verticalAlignment = 2;
	inventory.background = defaultValues.backgroundColor;
	inventory.thickness = 0;

	ui.addControl(inventory);

	const base = getBaseInventory(noa, socket);

	base.inventory.top = `${27 * scale}px`;


	const inventoryTexture = new GUI.Image('inventory', './textures/gui/container/inventory.png');
	inventoryTexture.width = `${180 * scale}px`;
	inventoryTexture.height = `${176 * scale}px`;
	inventoryTexture.zIndex = 18;

	inventory.addControl(inventoryTexture);

	base.inventory.zIndex = 19;

	inventory.addControl(base.inventory);
	inventory.addControl(base.tempslot.container);

	const saveWorld = createItem(110, 8, 18);
	saveWorld.item.zIndex = 80;
	saveWorld.item.top = `${108 * scale}px`;
	saveWorld.item.left = `${-58 * scale}px`;
	saveWorld.item.background = '#24613ddd';
	saveWorld.item.thickness = 1;
	saveWorld.item.color = '#3c9b63';
	saveWorld.text.text = [{ text: 'Save world', color: 'white', font: 'Lato' }];
	inventory.addControl(saveWorld.item);

	const exportWorld = createItem(110, 8, 18);
	exportWorld.item.zIndex = 80;
	exportWorld.item.top = `${108 * scale}px`;
	exportWorld.item.left = `${58 * scale}px`;
	exportWorld.item.background = '#28547add';
	exportWorld.item.thickness = 1;
	exportWorld.item.color = '#4287bd';
	exportWorld.text.text = [{ text: 'Export world', color: 'white', font: 'Lato' }];
	inventory.addControl(exportWorld.item);

	const importWorld = createItem(110, 8, 18);
	importWorld.item.zIndex = 80;
	importWorld.item.top = `${132 * scale}px`;
	importWorld.item.left = `${-58 * scale}px`;
	importWorld.item.background = '#5b477add';
	importWorld.item.thickness = 1;
	importWorld.item.color = '#8466ad';
	importWorld.text.text = [{ text: 'Import world', color: 'white', font: 'Lato' }];
	inventory.addControl(importWorld.item);

	const resetWorld = createItem(110, 8, 18);
	resetWorld.item.zIndex = 80;
	resetWorld.item.top = `${132 * scale}px`;
	resetWorld.item.left = `${58 * scale}px`;
	resetWorld.item.background = '#7a2020dd';
	resetWorld.item.thickness = 1;
	resetWorld.item.color = '#b84444';
	resetWorld.text.text = [{ text: 'New random world', color: 'white', font: 'Lato' }];
	inventory.addControl(resetWorld.item);

	const fileInput = document.createElement('input');
	fileInput.type = 'file';
	fileInput.accept = 'application/json,.json';
	fileInput.style.display = 'none';
	document.body.appendChild(fileInput);

	let saveTextTimer: ReturnType<typeof setTimeout> = null;
	let exportTextTimer: ReturnType<typeof setTimeout> = null;
	let importTimer: ReturnType<typeof setTimeout> = null;
	let exportPending = false;
	let pendingImport: WorldArchive = null;
	const saveStarted = () => {
		saveWorld.text.text = [{ text: 'Saving...', color: 'white', font: 'Lato' }];
	};
	const saveDone = async () => {
		saveWorld.text.text = [{ text: 'Saved', color: 'white', font: 'Lato' }];
		if (saveTextTimer != null) clearTimeout(saveTextTimer);
		saveTextTimer = setTimeout(() => {
			saveWorld.text.text = [{ text: 'Save world', color: 'white', font: 'Lato' }];
		}, 2000);
		if (!exportPending) return;
		exportPending = false;
		exportWorld.text.text = [{ text: 'Exporting...', color: 'white', font: 'Lato' }];
		try {
			await downloadLocalWorld();
			exportWorld.text.text = [{ text: 'Exported', color: 'white', font: 'Lato' }];
		} catch (error) {
			console.error(error);
			exportWorld.text.text = [{ text: 'Export failed', color: 'white', font: 'Lato' }];
		}
		if (exportTextTimer != null) clearTimeout(exportTextTimer);
		exportTextTimer = setTimeout(() => {
			exportWorld.text.text = [{ text: 'Export world', color: 'white', font: 'Lato' }];
		}, 2500);
	};
	socket.on('ServerSavingStarted', saveStarted);
	socket.on('ServerSavingDone', saveDone);
	saveWorld.item.onPointerClickObservable.add(() => {
		saveStarted();
		socket.send('SingleplayerAutoSave', {});
	});

	exportWorld.item.onPointerClickObservable.add(() => {
		if (exportPending) return;
		exportPending = true;
		exportWorld.text.text = [{ text: 'Saving...', color: 'white', font: 'Lato' }];
		socket.send('SingleplayerAutoSave', {});
	});

	fileInput.addEventListener('change', async () => {
		const file = fileInput.files?.[0];
		fileInput.value = '';
		if (file == undefined) return;
		try {
			pendingImport = await readWorldArchive(file);
			importWorld.text.text = [{ text: 'Click again: replace world', color: 'white', font: 'Lato' }];
			if (importTimer != null) clearTimeout(importTimer);
			importTimer = setTimeout(() => {
				pendingImport = null;
				importWorld.text.text = [{ text: 'Import world', color: 'white', font: 'Lato' }];
			}, 10000);
		} catch (error) {
			console.error(error);
			pendingImport = null;
			importWorld.text.text = [{ text: 'Invalid world file', color: 'white', font: 'Lato' }];
			if (importTimer != null) clearTimeout(importTimer);
			importTimer = setTimeout(() => {
				importWorld.text.text = [{ text: 'Import world', color: 'white', font: 'Lato' }];
			}, 2500);
		}
	});

	importWorld.item.onPointerClickObservable.add(async () => {
		if (pendingImport == null) {
			fileInput.click();
			return;
		}
		const archive = pendingImport;
		pendingImport = null;
		if (importTimer != null) clearTimeout(importTimer);
		importWorld.text.text = [{ text: 'Importing...', color: 'white', font: 'Lato' }];
		socket.terminate();
		try {
			await installWorldArchive(archive);
			window.location.reload();
		} catch (error) {
			console.error(error);
			importWorld.text.text = [{ text: 'Import failed', color: 'white', font: 'Lato' }];
			setTimeout(() => window.location.reload(), 1500);
		}
	});

	let resetArmed = false;
	let resetTimer: ReturnType<typeof setTimeout> = null;
	resetWorld.item.onPointerClickObservable.add(() => {
		if (resetArmed) {
			requestWorldReset();
			return;
		}
		resetArmed = true;
		resetWorld.text.text = [{ text: 'Click again: delete world', color: 'white', font: 'Lato' }];
		resetTimer = setTimeout(() => {
			resetArmed = false;
			resetWorld.text.text = [{ text: 'New random world', color: 'white', font: 'Lato' }];
		}, 4000);
	});

	const craftingSlots: Array<ItemSlot> = new Array(5);

	const armor = new GUI.Rectangle();
	armor.zIndex = 40;
	armor.verticalAlignment = 2;
	armor.top = `${-39 * scale}px`;
	armor.left = `${-72 * scale}px`;
	armor.height = `${72 * scale}px`;
	armor.width = `${18 * scale}px`;
	armor.thickness = 0;

	inventory.addControl(armor);

	const armorSlots = new Array(4);

	for (let x = 0; x < 4; x++) {
		armorSlots[x] = createSlot(scale);
		const container = armorSlots[x].container;
		container.zIndex = 50;
		container.verticalAlignment = 0;
		container.top = `${18 * scale * x}px`;
		container.onPointerClickObservable.add((e) => {
			let click = ActionInventoryClick.Type.LEFT;
			switch (e.buttonIndex) {
				case 0:
					click = ActionInventoryClick.Type.LEFT;
					break;
				case 1:
					click = ActionInventoryClick.Type.MIDDLE;
					break;
				case 2:
					click = ActionInventoryClick.Type.RIGHT;
					break;
			}
			socket.send('ActionInventoryClick', { slot: x, type: click, inventory: ActionInventoryClick.TypeInv.ARMOR });
		});

		container.onPointerEnterObservable.add((e) => {
			container.background = '#ffffff22';
		});

		container.onPointerOutObservable.add((e) => {
			container.background = '#00000000';
		});

		container.isPointerBlocker = true;
		armor.addControl(container);
	}

	const crafting = new GUI.Rectangle();
	crafting.zIndex = 40;
	crafting.verticalAlignment = 2;
	crafting.horizontalAlignment = 2;
	crafting.top = `${-47 * scale}px`;
	crafting.left = `${43 * scale}px`;
	crafting.height = `${35 * scale}px`;
	crafting.width = `${66 * scale}px`;
	crafting.thickness = 0;

	inventory.addControl(crafting);

	for (let x = 0; x < 5; x++) {
		craftingSlots[x] = createSlot(scale);
		const container = craftingSlots[x].container;
		container.zIndex = 50;
		container.verticalAlignment = 0;
		container.horizontalAlignment = 0;
		if (x == 4) {
			container.left = `${48 * scale}px`;
			container.top = `${10 * scale}px`;
		} else {
			if (x % 2 == 1) container.left = `${18 * scale}px`;
			if (x > 1) container.top = `${18 * scale}px`;
		}

		container.onPointerClickObservable.add((e) => {
			let click = ActionInventoryClick.Type.LEFT;
			switch (e.buttonIndex) {
				case 0:
					click = ActionInventoryClick.Type.LEFT;
					break;
				case 1:
					click = ActionInventoryClick.Type.MIDDLE;
					break;
				case 2:
					click = ActionInventoryClick.Type.RIGHT;
					break;
			}
			socket.send('ActionInventoryClick', { slot: x, type: click, inventory: ActionInventoryClick.TypeInv.CRAFTING });
		});
		container.onPointerEnterObservable.add((e) => {
			container.background = '#ffffff22';
		});

		container.onPointerOutObservable.add((e) => {
			container.background = '#00000000';
		});

		container.isPointerBlocker = true;
		crafting.addControl(container);
	}

	const update = async () => {
		if (inventory.isVisible == false) return;

		const inv = getInv();

		for (let x = 0; x < 4; x++) {
			const status = updateSlot(armorSlots[x], inv.armor.items[x]);
			if (status == false) {
				armorSlots[x].count.alpha = 0;
				let txt: string;
				switch (x) {
					case 0:
						txt = './textures/item/empty_armor_slot_helmet.png';
						break;
					case 1:
						txt = './textures/item/empty_armor_slot_chestplate.png';
						break;
					case 2:
						txt = './textures/item/empty_armor_slot_leggings.png';
						break;
					case 3:
						txt = './textures/item/empty_armor_slot_boots.png';
						break;
				}
				armorSlots[x].item.source = txt;
				armorSlots[x].count.text = '';
			}
		}

		for (let x = 0; x < 5; x++) {
			updateSlot(craftingSlots[x], inv.crafting[x]);
		}
	};

	noa.on('tick', update);

	const scaleEvent = (scale2) => {
		base.inventory.top = `${27 * scale}px`;

		inventoryTexture.width = `${180 * scale2}px`;
		inventoryTexture.height = `${176 * scale2}px`;
		saveWorld.item.top = `${108 * scale2}px`;
		saveWorld.item.left = `${-58 * scale2}px`;
		exportWorld.item.top = `${108 * scale2}px`;
		exportWorld.item.left = `${58 * scale2}px`;
		importWorld.item.top = `${132 * scale2}px`;
		importWorld.item.left = `${-58 * scale2}px`;
		resetWorld.item.top = `${132 * scale2}px`;
		resetWorld.item.left = `${58 * scale2}px`;
		armor.top = `${-39 * scale2}px`;
		armor.left = `${-72 * scale2}px`;
		armor.height = `${72 * scale2}px`;
		armor.width = `${18 * scale2}px`;

		for (let x = 0; x < armorSlots.length; x++) {
			armorSlots[x].container.height = `${16 * scale2}px`;
			armorSlots[x].container.width = `${16 * scale2}px`;
			armorSlots[x].item.width = `${16 * scale2}px`;
			armorSlots[x].item.height = `${16 * scale2}px`;
			armorSlots[x].count.fontSize = `${8 * scale2}px`;
			armorSlots[x].count.left = `${2 * scale2}px`;
			armorSlots[x].count.top = `${4 * scale2}px`;
			armorSlots[x].count.shadowOffsetX = scale2;
			armorSlots[x].count.shadowOffsetY = scale2;
		}

		crafting.top = `${-47 * scale}px`;
		crafting.left = `${43 * scale}px`;
		crafting.height = `${35 * scale}px`;
		crafting.width = `${66 * scale}px`;

		for (let x = 0; x < 5; x++) {
			if (x == 4) {
				craftingSlots[x].container.left = `${48 * scale2}px`;
				craftingSlots[x].container.top = `${10 * scale2}px`;
			} else {
				if (x % 2 == 1) craftingSlots[x].container.left = `${18 * scale2}px`;
				if (x > 1) craftingSlots[x].container.top = `${18 * scale2}px`;
			}

			craftingSlots[x].container.height = `${16 * scale2}px`;
			craftingSlots[x].container.width = `${16 * scale2}px`;
			craftingSlots[x].item.width = `${16 * scale2}px`;
			craftingSlots[x].item.height = `${16 * scale2}px`;
			craftingSlots[x].count.fontSize = `${8 * scale2}px`;
			craftingSlots[x].count.left = `${2 * scale2}px`;
			craftingSlots[x].count.top = `${4 * scale2}px`;
			craftingSlots[x].count.shadowOffsetX = scale2;
			craftingSlots[x].count.shadowOffsetY = scale2;
		}
	};

	event.on('scale-change', scaleEvent);

	inventory.onDisposeObservable.add(() => {
		socket.off('ServerSavingStarted', saveStarted);
		socket.off('ServerSavingDone', saveDone);
		if (saveTextTimer != null) clearTimeout(saveTextTimer);
		if (exportTextTimer != null) clearTimeout(exportTextTimer);
		if (importTimer != null) clearTimeout(importTimer);
		if (resetTimer != null) clearTimeout(resetTimer);
		fileInput.remove();
		event.off('scale-change', scaleEvent);
		noa.off('tick', update);
	});
}

export function closeInventory() {
	if (inventory != null) inventory.dispose();
	inventory = null;
}
