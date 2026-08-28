import { Server } from 'voxelsrv-server/dist/server';
import { Player } from 'voxelsrv-server/dist/lib/player/player';

const resyncDistance = 22;

function distance(a: number[], b: number[]) {
	return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2) + Math.pow(b[2] - a[2], 2));
}

export default function () {
	Server.prototype.heartbeatPing = function() {}
	Server.prototype.authenticatePlayer = async function(params) {
		return { valid: true, auth: false, message: '' };
	}

	const validatedMove = Player.prototype.action_move;
	Player.prototype.action_move = async function (data: any) {
		if (data.x == undefined || data.y == undefined || data.z == undefined) return;
		const target = [data.x, data.y, data.z];
		if (distance(this.entity.data.position, target) < resyncDistance) return validatedMove.call(this, data);
		this.cache.lastBlockCheck.status = false;
		this.move(target);
	};
}
