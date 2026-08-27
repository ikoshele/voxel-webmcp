import { isMobile } from 'mobile-device-detect';
import Engine2, { Engine } from 'noa-engine';
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import { rebindControls, setupControls } from './lib/player/controls';

import {
	noaOpts,
	updateSettings,
	serverSettings,
	defaultFonts,
	setNoa,
	updateServerSettings,
	IGameSettings,
	defaultValues,
	gameSettings,
	gameVersion,
	IWorldSettings,
} from './values';
import { constructScreen, getScreen } from './gui/main';

import { getSettings, getWorld, saveWorld } from './lib/helpers/storage';
import { setupClouds, setupSky } from './lib/gameplay/sky';
import { setupConnection } from './lib/gameplay/connect';
import { setupMobile } from './gui/mobile';
import { setupGamepad } from './lib/player/gamepad';
import { createInflateWorker, setupWorld } from './lib/gameplay/world';

import { setupToasts } from './gui/parts/toastMessage';
import { PopupGUI } from './gui/parts/miniPopupHelper';
import { createSingleplayerServer } from './lib/singleplayer/setup';
import { consumeWorldReset, localWorldName } from './lib/singleplayer/worldLifecycle';

async function getLocalWorldSettings(): Promise<IWorldSettings> {
	const savedWorld = await getWorld(localWorldName);
	if (savedWorld != undefined) return savedWorld.settings;
	const settings: IWorldSettings = {
		gamemode: 'creative',
		gameVersion,
		serverVersion: '',
		worldsize: 16,
		version: 0,
		seed: Math.floor(Math.random() * 2147483647),
		generator: 'normal',
		icon: 'voxelsrv',
		displayName: 'WebMCP World',
	};
	await saveWorld(localWorldName, {}, settings);
	return settings;
}

defaultFonts.forEach((font) => document.fonts.load(`10pt "${font}"`));

getSettings().then(async (data: IGameSettings) => {
	updateSettings(data);
	// @ts-ignore
	const tempNoa = new Engine2(noaOpts());
	const noa: Engine = tempNoa;
	constructScreen(noa);

	const loading = new PopupGUI([{ text: 'Loading...' }]);
	loading.setCenterText([{ text: 'Starting...' }]);
	getScreen(2).addControl(loading.main);

	const canvas: HTMLCanvasElement = noa.container.canvas;

	canvas.onwheel = function (event) {
		event.preventDefault();
	};

	canvas.addEventListener('keydown', (e) => {
		if (e.key == ' ') {
			e.preventDefault();
		}
	});

	rebindControls(noa, gameSettings.controls);

	noa.world.maxChunksPendingCreation = Infinity;

	noa.ents.createComponent({
		name: 'inventory',
		state: { items: {}, selected: 0, tempslot: {}, armor: {}, crafting: {} },
	});

	setNoa(noa);

	noa.ents.getPhysics(noa.playerEntity).body.airDrag = 9999;
	setupToasts();
	setupClouds(noa);
	setupSky(noa);

	const scene = noa.rendering.getScene();

	scene.fogMode = defaultValues.fogMode;
	scene.fogStart = defaultValues.fogStart;
	scene.fogEnd = defaultValues.fogEnd;
	scene.fogDensity = defaultValues.fogDensity;
	scene.fogColor = new BABYLON.Color3(...defaultValues.fogColor);

	setupControls(noa);
	setupGamepad(noa);

	setupWorld(noa);

	let x = 0;
	noa.on('beforeRender', async () => {
		if (!serverSettings.ingame) {
			x++;
			noa.camera.heading = x / 2000;
			noa.camera.pitch = 0;
		}
	});

	document.addEventListener(
		'pointerlockchange',
		() => {
			if (!isMobile) {
				if (document.pointerLockElement == noa.container.canvas) {
					noa.ignorePointerLock = true;
					noa.ents.getState(noa.playerEntity, 'receivesInputs').ignore = false;
				} else {
					noa.ignorePointerLock = false;
					noa.ents.getState(noa.playerEntity, 'receivesInputs').ignore = true;
				}
			} else {
			}
		},
		false
	);

	loading.setCenterText([{ text: 'Creating workers...' }]);
	await createInflateWorker();
	loading.setCenterText([{ text: 'Loading local world...' }]);

	window['enableDebugSettings'] = () => {
		gameSettings.debugSettings.makeSettingsVisible = true;
	};

	window['forceplay'] = () => {
		updateServerSettings({ ingame: true });
	};

	if (isMobile) {
		setupMobile(noa);
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'mobile.css';
		document.head.appendChild(link);
		document.documentElement.addEventListener('click', function () {
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
				screen.orientation.lock('landscape');
			}
		});
	}

	await consumeWorldReset();
	const worldSettings = await getLocalWorldSettings();
	loading.dispose();
	const socket = createSingleplayerServer(localWorldName, worldSettings, true);
	setupConnection(noa, socket);
});
