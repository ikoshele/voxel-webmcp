import { saveSettings } from './lib/helpers/storage';
import { isMobile, isFirefox } from 'mobile-device-detect';
import { setScale } from './gui/main';
import { protocolVersion } from 'voxelsrv-protocol/const.json';

export const gameVersion = '0.2.0-beta.19.1';
export const debug = false;

export const gameProtocol = protocolVersion;


export const defaultSettings: IGameSettings = {
	version: '0.0.0',
	nickname: `Player${Math.round(Math.random() * 100000)}`,
	autostep: isMobile,
	gamepad: false,
	singleplayer: false,
	allowcustom: false,
	mouse: isMobile ? 50 : 15,
	viewDistance: isMobile ? 3 : isFirefox ? 2 : 5,
	hotbarsize: 9,
	scale: 3,
	fov: 70,
	fpslimit: 0,
	debugInfo: false,
	showFPS: false,
	autoSaveInterval: 300,
	controls: {
		forward: 'W',
		left: 'A',
		backward: 'S',
		right: 'D',
		fire: '<mouse 1>',
		'mid-fire': '<mouse 2>',
		'alt-fire': '<mouse 3>',
		jump: '<space>',
		inventory: 'E',
		thirdprsn: 'M',
		chatenter: '<enter>',
		chat: 'T',
		cmd: '/',
		tab: '`',
		menu: '<escape>',
		screenshot: 'P',
		hide: 'O',
		zoom: 'Z',
	},

	debugSettings: {
		printRegistryToConsole: false,
		printProtocolToConsole: false,
		makeSettingsVisible: false,
		printAuthToConsole: false,
	},
};

export let gameSettings: IGameSettings = { ...defaultSettings, version: gameVersion };

export interface IGameSettings {
	version: string;
	nickname: string;
	autostep: boolean;
	gamepad: boolean;
	singleplayer: boolean;
	allowcustom: boolean;
	mouse: number;
	viewDistance: number;
	hotbarsize: number;
	scale: number;
	fov: number;
	fpslimit: number;
	debugInfo: boolean;
	showFPS: boolean;
	autoSaveInterval: number;
	controls: { [i: string]: string };
	debugSettings: {
		printRegistryToConsole: boolean;
		printProtocolToConsole: boolean;
		makeSettingsVisible: boolean;
		printAuthToConsole: boolean;
	};
}

export interface IWorldSettings {
	gamemode: 'creative';
	worldsize: number;
	generator: string;
	version: number;
	seed: number;
	gameVersion: string;
	serverVersion: string;
	displayName?: string;
	icon?: string;
}

export function updateSettings(data: any) {
	const oldSettings = gameSettings;
	gameSettings = { ...defaultSettings, ...oldSettings, ...data };
	gameSettings.controls = { ...defaultSettings.controls, ...oldSettings.controls, ...data.controls };
	gameSettings.debugSettings = { ...defaultSettings.debugSettings, ...oldSettings.debugSettings, ...data.debugSettings };

	setScale(gameSettings.scale);
	saveSettings(gameSettings);
}

export const defaultServerSettings = {
	cheats: false,
	control: false,
	ingame: false,
};

export let serverSettings = { ...defaultServerSettings };

export function updateServerSettings(data: Object) {
	serverSettings = { ...serverSettings, ...data };
}

export const defaultValues = {
	fogMode: 3,
	fogStart: 500,
	fogEnd: 4000,
	fogDensity: 0.000001,
	fogColor: [0.8, 0.9, 1],
	blockTestDistance: 7,
	clearColor: [0.8, 0.9, 1],
	skyColor: [0.2, 0.3, 0.7],
	backgroundColor: '#00000077',
	menuColor: '#11111177',
};

export function noaOpts() {
	return {
		debug: debug,
		showFPS: false,
		inverseY: false,
		inverseX: false,
		sensitivityX: gameSettings.mouse,
		sensitivityY: gameSettings.mouse,
		chunkSize: 32, // Don't touch this
		chunkAddDistance: [gameSettings.viewDistance, gameSettings.viewDistance],
		chunkRemoveDistance: [gameSettings.viewDistance, gameSettings.viewDistance],
		blockTestDistance: defaultValues.blockTestDistance,
		tickRate: 20,
		texturePath: '',
		playerStart: [0, 100, 0],
		playerHeight: 1.85,
		playerWidth: 0.6,
		playerAutoStep: gameSettings.autostep ? 1 : 0,
		clearColor: defaultValues.clearColor,
		ambientColor: [1, 1, 1],
		lightDiffuse: [1, 1, 1],
		lightSpecular: [1, 1, 1],
		groundLightColor: [1, 1, 1],
		useAO: true,
		AOmultipliers: [0.93, 0.8, 0.5],
		reverseAOmultiplier: 1.0,
		preserveDrawingBuffer: true,
		stickyPointerLock: false,
		adaptToDeviceRatio: false,
		gravity: [0, -14, 0],
		bindings: {}, // Bindings are now stored in settings
		tickInUnloadedChunks: true,
		ignorePointerLock: false,
		manuallyControlChunkLoading: true,
	};
}

export const defaultFonts = [
	'silkscreen',
	'Lato',
	'Lato-Italic',
	'Lato-Black',
	'Lato-BlackItalic',
	'Lato-Bold',
	'Lato-BoldItalic',
	'Lato-Light',
	'Lato-LightItalic',
	'Lato-Thin',
	'Lato-ThinItalic',
	'PixelOperator-Bold',
	'PixelOperator',
	'PixelOperator8-Bold',
	'PixelOperator8',
	'PixelOperatorHB',
	'PixelOperatorHB8',
	'PixelOperatorHBSC',
	'PixelOperatorMono-Bold',
	'PixelOperatorMono',
	'PixelOperatorMono8-Bold',
	'PixelOperatorMono8',
	'PixelOperatorMonoHB',
	'PixelOperatorMonoHB8',
	'PixelOperatorSC-Bold',
	'PixelOperatorSC',
];

export let noa = null;
export function setNoa(x) {
	noa = x;
}
