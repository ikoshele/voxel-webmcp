/*
 * This needs major cleanup as it's way too big and it will be bigger in future.
 */

import {
	gameSettings,
	gameProtocol,
	updateServerSettings,
	gameVersion,
	defaultValues,
} from '../../values';
import { isMobile } from 'mobile-device-detect';
import { setupGuis, destroyGuis } from '../../gui/setup';
import { addMessage } from '../../gui/ingame/chat';
import { setupPlayerEntity } from '../player/entity';
import { registerBlocks, registerItems } from './registry';
import { setChunk, clearStorage, removeChunk, chunkSetBlock, chunkExist } from './world';
import { cloudMesh, setupClouds, setupSky, skyMesh } from './sky';

import * as BABYLON from '@babylonjs/core/Legacy/legacy';

import * as vec3 from 'gl-vec3';
import { BaseSocket } from '../../socket';

import { setTab } from '../../gui/tab';
import {
	IChatMessage,
	ILoginRequest,
	ILoginSuccess,
	IPlayerInventory,
	IPlayerKick,
	IPlayerSlotUpdate,
	IPlayerTeleport,
	IWorldBlockUpdate,
	IWorldChunkLoad,
	IWorldChunkUnload,
	IEnvironmentFogUpdate,
	IEnvironmentSkyUpdate,
	IWorldMultiBlockUpdate,
	IPlayerUpdateMovement,
	IPlayerUpdatePhysics,
	IPlayerApplyImpulse,
	ILoginStatus,
	IPlayerSetBlockReach,
	IUpdateTextBoard,
	UpdateTextBoard,
	IWorldChunksRemoveAll,
	IWorldChunkIsLoaded,
	IPlayerOpenInventory,
	PlayerOpenInventory,
	IRegistryUpdate,
} from 'voxelsrv-protocol/js/server';
import { Scene } from '@babylonjs/core';
import { setAssetServer } from '../helpers/assets';
import { openCrafting } from '../../gui/ingame/inventory/crafting';
import { showMobileControls } from '../../gui/mobile';
import { PopupGUI } from '../../gui/parts/miniPopupHelper';
import { getScreen } from '../../gui/main';
import { Engine } from 'noa-engine';
import { startMcpSession, stopMcpSession } from '../mcp';

export let socket: BaseSocket | null = null;
let chunkInterval: any = null;
let moveEvent: Function | null = null;

export function socketSend(type, data) {
	if (socket != undefined) socket.send(type, data);
}

let noa: Engine;
let connectionScreen = null;

export function disconnect(): boolean {
	stopMcpSession();
	socket.close(0);
	stopListening(noa);
	if (connectionScreen != null) {
		connectionScreen.dispose();
	}
	noa.ents.getPhysics(noa.playerEntity).body.airDrag = 9999;
	destroyGuis();
	if (isMobile) {
		showMobileControls(false);
	}
	updateServerSettings({ ingame: false });
	document.exitPointerLock();

	socket.send('SingleplayerLeave', {});
	const savingWorld = new PopupGUI([{ text: '' }]);
	savingWorld.setCenterText([{ text: 'Saving world...' }]);

	getScreen(2).addControl(savingWorld.main);

	socket.on('ServerStoppingDone', () => {
		console.log('World Saved!');
		socket.close();
		savingWorld.dispose();
	});
	return false;
}

export function setupConnection(noax, socketx: BaseSocket) {
	document.title = 'Voxel WebMCP - Loading world...';
	socketx.noa = noax;
	noa = noax;
	noa.worldName = 'World' + Math.round(Math.random() * 1000);
	socket = socketx;
	console.log('Player: ' + gameSettings.nickname, 'World: ' + socket.world);
	let firstLogin = true;

	const connScreen = new PopupGUI([{ text: 'Loading local world...' }]);
	connectionScreen = connScreen;
	connScreen.setCenterText([{ text: 'Generating terrain...' }]);

	getScreen(2).addControl(connScreen.main);

	socket.on('PlayerKick', (data: IPlayerKick) => {
		console.log(`You has been kicked from server \nReason: ${data.reason}`);
		disconnect();
		return;
	});

	socket.on('LoginStatus', (status: ILoginStatus) => {
		if (status.message) {
			connScreen.main.isVisible = true;
			noa.ents.getPhysics(noa.playerEntity).body.airDrag = 9999;
			connScreen.setCenterText([{ text: status.message }]);
		}
	});

	socket.on('LoginRequest', async (dataLogin: ILoginRequest) => {
		noa.worldName = `World-${Math.random() * 10000}`;
		noa.camera.heading = 0;
		noa.camera.pitch = 0;
		clearStorage();
		noa.world._chunksKnown.forEach((loc) => {
			noa.world.manuallyUnloadChunk(loc[0] * 32, loc[1] * 32, loc[2] * 32);
		});

		const scene: Scene = noa.rendering.getScene();
		const uuid = gameSettings.nickname.toLowerCase();

		setAssetServer(socket.server);

		socket.send('LoginResponse', {
			username: gameSettings.nickname,
			protocol: gameProtocol,
			mobile: isMobile,
			client: `Voxel WebMCP ${gameVersion}`,
			uuid: uuid,
			secret: '',
		});

		scene.fogMode = defaultValues.fogMode;
		scene.fogStart = defaultValues.fogStart;
		scene.fogEnd = defaultValues.fogEnd;
		scene.fogDensity = defaultValues.fogDensity;
		scene.fogColor = new BABYLON.Color3(...defaultValues.fogColor);
		noa.blockTestDistance = defaultValues.blockTestDistance;

		scene.cameras[0].fov = (gameSettings.fov * Math.PI) / 180;

		scene.clearColor = new BABYLON.Color4(...defaultValues.clearColor, 1);
		cloudMesh.isVisible = true;

		if (!firstLogin) return;

		socket.on('LoginSuccess', (dataPlayer: ILoginSuccess) => {
			noa.ents.getPhysics(noa.playerEntity).body.airDrag = 9999;
			connScreen.main.isVisible = false;

			updateServerSettings({ ingame: true });

			document.title = 'Voxel WebMCP';
			registerBlocks(noa, JSON.parse(dataPlayer.blocksDef));
			registerItems(noa, JSON.parse(dataPlayer.itemsDef));

			setupPlayerEntity(noa, JSON.parse(dataPlayer.inventory), JSON.parse(dataPlayer.armor), JSON.parse(dataPlayer.movement));

			cloudMesh.dispose();
			setupClouds(noa);
			skyMesh.dispose();
			setupSky(noa);

			noa.ents.setPosition(noa.playerEntity, dataPlayer.xPos, dataPlayer.yPos, dataPlayer.zPos);

			let checker = setInterval(() => {
				if (noa.world.playerChunkLoaded) {
					noa.ents.getPhysics(noa.playerEntity).body.airDrag = -1;
					clearInterval(checker);
				}
			}, 1);

			if (!firstLogin) return;
			firstLogin = false;

			destroyGuis();
			clearStorage();

			setupGuis(noa, socket);
			void startMcpSession(noa, socket).catch((error) => console.error('Failed to start WebMCP session', error));

			if (isMobile) {
				showMobileControls(false);
			}

			socket.on('RegistryUpdate', (data: IRegistryUpdate) => {
				registerBlocks(noa, JSON.parse(data.blocksDef));
				registerItems(noa, JSON.parse(data.itemsDef));
			});

			socket.on('WorldChunkLoad', (data: IWorldChunkLoad) => {
				setChunk(data);
			});

			socket.on('WorldChunkUnload', (data: IWorldChunkUnload) => {
				const height = data.height > 0 ? data.height : 1;
				for (let x = 0; x <= height; x++) removeChunk(`${data.x}|${data.y + x}|${data.z}`);
			});

			socket.on('WorldChunksRemoveAll', (data: IWorldChunksRemoveAll) => {
				if (data.confirm) clearStorage();
			});

			socket.on('WorldChunkIsLoaded', (data: IWorldChunkIsLoaded) => {
				socket.send('WorldChunkIsLoadedResponce', { x: data.x, y: data.y, z: data.z, loaded: chunkExist([data.x, data.y, data.z].join('|')) });
			});

			socket.on('WorldMultiBlockUpdate', (data: IWorldMultiBlockUpdate) => {
				Object.values(data.blocks).forEach((block) => {
					noa.setBlock(block.id, block.x, block.y, block.z);
					chunkSetBlock(block.id, block.x, block.y, block.z, 100);
				});
			});

			socket.on('WorldBlockUpdate', (data: IWorldBlockUpdate) => {
				noa.setBlock(data.id, data.x, data.y, data.z);
				chunkSetBlock(data.id, data.x, data.y, data.z, 100);
			});

			socket.on('EnvironmentFogUpdate', (data: IEnvironmentFogUpdate) => {
				if (data.mode != undefined) scene.fogMode = data.mode;
				if (data.start != undefined) scene.fogStart = data.start;
				if (data.end != undefined) scene.fogEnd = data.end;
				if (data.density != undefined) scene.fogDensity = data.density;
				if ((data.colorRed != undefined, data.colorGreen != undefined, data.colorBlue != undefined))
					scene.fogColor = new BABYLON.Color3(data.colorRed, data.colorGreen, data.colorBlue);
			});

			socket.on('EnvironmentSkyUpdate', (data: IEnvironmentSkyUpdate) => {
				if ((data.colorRed != undefined, data.colorGreen != undefined, data.colorBlue != undefined))
					scene.clearColor = new BABYLON.Color4(data.colorRed, data.colorGreen, data.colorBlue, 1);
				if ((data.colorRedTop != undefined, data.colorGreenTop != undefined, data.colorBlueTop != undefined))
					// @ts-ignore
					skyMesh.material.emissiveColor = new BABYLON.Color3(data.colorRedTop, data.colorGreenTop, data.colorBlueTop);
				// @ts-ignore
				skyMesh.material.diffuseColor = skyMesh.material.emissiveColor;
				if (data.clouds != undefined) cloudMesh.isVisible = data.clouds;
			});

			socket.on('PlayerInventory', function (data: IPlayerInventory) {
				const inv = JSON.parse(data.inventory);
				if (data.type == 'armor') {
					noa.ents.getState(noa.playerEntity, 'inventory').armor = inv;
				} else if (data.type == 'hook') {
					noa.ents.getState(noa.playerEntity, 'inventory').hook = inv;
				} else {
					noa.ents.getState(noa.playerEntity, 'inventory').items = inv.items;
					noa.ents.getState(noa.playerEntity, 'inventory').tempslot = inv.tempslot;
				}
			});

			socket.on('PlayerSlotUpdate', function (data: IPlayerSlotUpdate) {
				const item = JSON.parse(data.data);
				const inv = noa.ents.getState(noa.playerEntity, 'inventory');

				if (data.type == 'temp') inv.tempslot = item;
				else if (data.type == 'main') inv.items[data.slot] = item;
				else if (data.type == 'armor') inv.armor.items[data.slot] = item;
				else if (data.type == 'crafting') inv.crafting[data.slot] = item;
				else if (data.type == 'hook') inv.hook.items[data.slot] = item;
			});

			socket.on('PlayerSetBlockReach', (data: IPlayerSetBlockReach) => {
				noa.blockTestDistance = data.value;
			});

			socket.on('PlayerOpenInventory', (data: IPlayerOpenInventory) => {
				if (data.type == PlayerOpenInventory.Type.MAIN) noa.inputs.down.emit('inventory');
				else if (data.type == PlayerOpenInventory.Type.CRAFTING) {
					const inv = JSON.parse(data.data);

					noa.ents.getState(noa.playerEntity, 'inventory').hook = inv;

					openCrafting(noa, socket);
				}
			});

			socket.on('ChatMessage', (data: IChatMessage) => {
				addMessage(data.message);
			});

			socket.on('UpdateTextBoard', (data: IUpdateTextBoard) => {
				if (data.type == UpdateTextBoard.Type.TAB) setTab(data.message);
			});

			socket.on('PlayerTeleport', function (data: IPlayerTeleport) {
				noa.ents.setPosition(noa.playerEntity, data.x, data.y, data.z);
			});

			socket.on('PlayerUpdateMovement', (data: IPlayerUpdateMovement) => {
				const move = noa.ents.getMovement(noa.playerEntity);
				move[data.key] = data.value;
			});

			socket.on('PlayerUpdatePhysics', (data: IPlayerUpdatePhysics) => {
				const move = noa.ents.getPhysicsBody(noa.playerEntity);
				move[data.key] = data.value;
			});

			socket.on('PlayerApplyImpulse', (data: IPlayerApplyImpulse) => {
				noa.ents.getPhysicsBody(noa.playerEntity).applyImpulse([data.x, data.y, data.z]);
			});

			const pos = noa.ents.getState(noa.playerEntity, 'position');
			let lastPos: number[] | null = null;
			let lastRot = 0;
			let lastPitch = 0;

			let ping = 0;
			let h5rge = 0;

			moveEvent = () => {
				if (h5rge == 0) {
					const rot = noa.camera.heading;
					const pitch = noa.camera.pitch;
					if (lastPos == null || vec3.dist(lastPos, pos.position) > 0.15 || lastRot != rot || lastPitch != pitch) {
						lastPos = [...pos.position];
						lastPitch = pitch;
						lastRot = rot;
						socket.send('ActionMoveLook', { x: pos.position[0], y: pos.position[1], z: pos.position[2], rotation: rot, pitch: pitch });
					} else if (vec3.dist(lastPos, pos.position) > 0.15) {
						lastPos = [...pos.position];
						socket.send('ActionMove', { x: pos.position[0], y: pos.position[1], z: pos.position[2] });
					} else if (lastRot != rot || lastPitch != pitch) {
						lastPitch = pitch;
						lastRot = rot;
						socket.send('ActionLook', { rotation: rot, pitch: pitch });
					}
					h5rge = 2;
				}

				h5rge = h5rge - 1;

				ping = ping + 1;

				if (ping >= 120) {
					socket.send('Ping', { time: Date.now() });
					ping = 0;
				}
			};

			noa.on('tick', moveEvent);
		});
	});
}

export function stopListening(noa) {
	if (moveEvent != null) noa.off('tick', moveEvent);
	if (chunkInterval != null) clearInterval(chunkInterval);
}
