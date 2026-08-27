import { World } from 'voxelsrv-server/dist/lib/world/world';

let revision = 0;

export function patchWorldRevision() {
	const originalSetBlock = World.prototype.setBlock;
	World.prototype.setBlock = async function (position, block, allowgen = false) {
		await originalSetBlock.call(this, position, block, allowgen);
		if (this.isBlockInBounds(position) && position[1] >= 0 && position[1] < 256) revision++;
	};
}

export function getWorldRevision() {
	return revision;
}
