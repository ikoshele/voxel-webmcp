import { deleteWorld } from '../helpers/storage';

export const localWorldName = 'webmcp-world';

const resetKey = 'voxel-webmcp-reset-world';

export async function consumeWorldReset() {
	if (sessionStorage.getItem(resetKey) != '1') return;
	await deleteWorld(localWorldName);
	sessionStorage.removeItem(resetKey);
}

export function requestWorldReset() {
	sessionStorage.setItem(resetKey, '1');
	window.location.reload();
}
