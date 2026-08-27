import type { IWorldSettings } from '../../values';
import { deleteWorld, getWorld, getWorldData, saveWorld } from '../helpers/storage';

export const localWorldName = 'webmcp-world';

const resetKey = 'voxel-webmcp-reset-world';
const archiveFormat = 'voxel-webmcp-world';
const archiveVersion = 1;
const maximumArchiveSize = 128 * 1024 * 1024;

export type WorldArchive = {
	format: typeof archiveFormat;
	version: typeof archiveVersion;
	settings: IWorldSettings;
	data: { [path: string]: string | null };
};

function isObject(value: any) {
	return value != null && typeof value == 'object' && !Array.isArray(value);
}

function validateSettings(value: any): value is IWorldSettings {
	return isObject(value) && value.gamemode == 'creative' && Number.isInteger(value.worldsize) && value.worldsize > 0 && value.worldsize <= 256 &&
		Number.isInteger(value.seed) && typeof value.generator == 'string' && value.generator.length > 0 && Number.isInteger(value.version) &&
		typeof value.gameVersion == 'string' && typeof value.serverVersion == 'string';
}

function validateData(value: any): value is { [path: string]: string | null } {
	return isObject(value) && Object.keys(value).length <= 20000 && Object.entries(value).every(([path, content]) =>
		path.length > 0 && !path.includes('..') && (typeof content == 'string' || content == null));
}

export async function downloadLocalWorld() {
	const world = await getWorld(localWorldName);
	const worldData = await getWorldData(localWorldName);
	if (world == undefined || worldData == undefined) throw new Error('The local world has not been saved yet');
	if (!validateSettings(world.settings) || !validateData(worldData.data)) throw new Error('The saved world has an invalid structure');
	const archive: WorldArchive = {
		format: archiveFormat,
		version: archiveVersion,
		settings: world.settings,
		data: worldData.data as { [path: string]: string | null },
	};
	const blob = new Blob([JSON.stringify(archive)], { type: 'application/json' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = `voxel-webmcp-world-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
	document.body.appendChild(link);
	link.click();
	link.remove();
	setTimeout(() => URL.revokeObjectURL(url), 0);
}

export async function readWorldArchive(file: File): Promise<WorldArchive> {
	if (file.size > maximumArchiveSize) throw new Error('The world file is larger than 128 MB');
	const value = JSON.parse(await file.text());
	if (!isObject(value) || value.format != archiveFormat || value.version != archiveVersion) throw new Error('Unsupported world file format');
	if (!validateSettings(value.settings)) throw new Error('Invalid world settings');
	if (!validateData(value.data)) throw new Error('Invalid world data');
	return value as WorldArchive;
}

export async function installWorldArchive(archive: WorldArchive) {
	await saveWorld(localWorldName, archive.data, archive.settings);
}

export async function consumeWorldReset() {
	if (sessionStorage.getItem(resetKey) != '1') return;
	await deleteWorld(localWorldName);
	sessionStorage.removeItem(resetKey);
}

export function requestWorldReset() {
	sessionStorage.setItem(resetKey, '1');
	window.location.reload();
}
