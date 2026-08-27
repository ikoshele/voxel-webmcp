import { BaseSocket } from '../../socket';

const channel = 'voxel-webmcp';
const version = 1;
const encoder = new TextEncoder();
const decoder = new TextDecoder();

type PendingCall = {
	resolve: (value: any) => void;
	reject: (reason: Error) => void;
	timer: ReturnType<typeof setTimeout>;
};

let activeSocket: BaseSocket | null = null;
let pending = new Map<string, PendingCall>();

function decode(value: Uint8Array | number[]) {
	return JSON.parse(decoder.decode(value instanceof Uint8Array ? value : new Uint8Array(value)));
}

export function attachMcpBridge(socket: BaseSocket) {
	activeSocket = socket;
	socket.on('PluginMessage', (packet) => {
		if (packet.key !== channel || packet.version !== version) return;
		const message = decode(packet.value);
		if (message.kind !== 'response') return;
		const call = pending.get(message.id);
		if (call == undefined) return;
		clearTimeout(call.timer);
		pending.delete(message.id);
		if (message.error != undefined) call.reject(new Error(message.error));
		else call.resolve(message.result);
	});
}

export function detachMcpBridge() {
	activeSocket = null;
	pending.forEach((call) => {
		clearTimeout(call.timer);
		call.reject(new Error('The singleplayer world was closed'));
	});
	pending.clear();
}

export function callWorkerTool(name: string, args: object = {}, signal?: AbortSignal): Promise<any> {
	if (activeSocket == null || !activeSocket.singleplayer) return Promise.reject(new Error('WebMCP tools require an active singleplayer world'));
	if (signal?.aborted) return Promise.reject(new DOMException('Aborted', 'AbortError'));

	const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
	const message = { kind: 'request', id, name, args };

	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			pending.delete(id);
			reject(new Error(`WebMCP tool ${name} timed out`));
		}, 30000);
		pending.set(id, { resolve, reject, timer });
		if (signal != undefined) {
			signal.addEventListener('abort', () => {
				const call = pending.get(id);
				if (call == undefined) return;
				clearTimeout(call.timer);
				pending.delete(id);
				call.reject(new DOMException('Aborted', 'AbortError'));
			}, { once: true });
		}
		activeSocket.send('PluginMessage', { key: channel, version, value: encoder.encode(JSON.stringify(message)) });
	});
}

export const mcpChannel = channel;
export const mcpVersion = version;
