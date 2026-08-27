import { getScreen, scale, event } from '../../main';
import * as GUI from '@babylonjs/gui/';
import { ActionInventoryClick } from 'voxelsrv-protocol/js/client';

import { ItemSlot, createSlot, updateSlot } from '../../parts/itemSlot';
import { defaultValues } from '../../../values';
import { getBaseInventory } from './base';
import { Engine } from 'noa-engine';
import { BaseSocket } from '../../../socket';
import { createItem } from '../../parts/menu';
import { requestWorldReset } from '../../../lib/singleplayer/worldLifecycle';

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
	saveWorld.item.background = '#24613ddd';
	saveWorld.item.thickness = 1;
	saveWorld.item.color = '#3c9b63';
	saveWorld.text.text = [{ text: 'Save world', color: 'white', font: 'Lato' }];
	inventory.addControl(saveWorld.item);

	let saveTextTimer: ReturnType<typeof setTimeout> = null;
	const saveStarted = () => {
		saveWorld.text.text = [{ text: 'Saving...', color: 'white', font: 'Lato' }];
	};
	const saveDone = () => {
		saveWorld.text.text = [{ text: 'Saved', color: 'white', font: 'Lato' }];
		if (saveTextTimer != null) clearTimeout(saveTextTimer);
		saveTextTimer = setTimeout(() => {
			saveWorld.text.text = [{ text: 'Save world', color: 'white', font: 'Lato' }];
		}, 2000);
	};
	socket.on('ServerSavingStarted', saveStarted);
	socket.on('ServerSavingDone', saveDone);
	saveWorld.item.onPointerClickObservable.add(() => {
		saveStarted();
		socket.send('SingleplayerAutoSave', {});
	});

	const resetWorld = createItem(110, 8, 18);
	resetWorld.item.zIndex = 80;
	resetWorld.item.top = `${132 * scale}px`;
	resetWorld.item.background = '#7a2020dd';
	resetWorld.item.thickness = 1;
	resetWorld.item.color = '#b84444';
	resetWorld.text.text = [{ text: 'New random world', color: 'white', font: 'Lato' }];
	inventory.addControl(resetWorld.item);

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
		resetWorld.item.top = `${132 * scale2}px`;
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
		if (resetTimer != null) clearTimeout(resetTimer);
		event.off('scale-change', scaleEvent);
		noa.off('tick', update);
	});
}

export function closeInventory() {
	if (inventory != null) inventory.dispose();
	inventory = null;
}
