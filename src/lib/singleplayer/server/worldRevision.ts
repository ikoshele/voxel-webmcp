import { World } from 'voxelsrv-server/dist/lib/world/world';

let revision = 0;

export function patchWorldRevision() {
	const originalSetBlock = World.prototype.setBlock;
	World.prototype.setBlock = async function (position, block, allowgen = false) {
		const track = this.isBlockInBounds(position) && position[1] >= 0 && position[1] < 256;
		const before = track ? await this.getBlock(position, true) : null;
		await originalSetBlock.call(this, position, block, allowgen);
		if (before != null && before.numId !== this.getBlockSync(position, false).numId) revision++;
	};
}

export function getWorldRevision() {
	return revision;
}
