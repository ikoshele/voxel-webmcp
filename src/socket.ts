import { EventEmitter } from 'events';
import { gameSettings } from './values';
import { Engine } from 'noa-engine';

export class BaseSocket {
	socket: any;
	listeners: Object = {};
	server: string;
	world: string;
	singleplayer: boolean = false;
	noa: Engine;

	constructor() {}

	async send(type: string, data: Object) {
		if (gameSettings.debugSettings.printProtocolToConsole) console.log('s->c', type, data);
	}

	close(x?: number) {
		this.listeners = {};
	}

	protected emit(type, data) {
		if (this.listeners[type] != undefined) this.listeners[type].forEach((func) => func(data));
		if (gameSettings.debugSettings.printProtocolToConsole) console.log('s->c', type, data);
	}

	on(type: string, func: Function) {
		if (this.listeners[type] != undefined) this.listeners[type].push(func);
		else this.listeners[type] = [func];
	}
}

export class VirtualSocket extends BaseSocket {
	toClient: EventEmitter;
	toServer: EventEmitter;
	attachedData: any;
	closed: boolean = false;

	constructor(toClient: EventEmitter, toServer: EventEmitter, server?: string) {
		super();
		this.server = server;
		this.toClient = toClient;
		this.toServer = toServer;
		this.toClient.on('open', () => setTimeout(() => this.toClient.emit('connection', {}), 500));
		this.toClient.on('error', (error: string) => {
			if (this.closed) return;
			this.closed = true;
			setTimeout(() => this.toClient.emit('PlayerKick', { reason: error }), 500);
		});
		this.toClient.on('close', () => {
			if (this.closed) return;
			this.closed = true;
			setTimeout(() => this.toClient.emit('PlayerKick', { reason: 'Connection closed!' }), 500);
		});
	}

	async send(type: string, data: Object) {
		super.send(type, data);
		this.toServer.emit(type, data);
		this.toServer.emit('packet', type, data);
	}

	close(x?: number) {
		this.listeners = {};
		if (this.closed) return;
		this.closed = true;
		this.toServer.emit('close', x);
	}

	on(type: string, func) {
		this.toClient.on(type, func);
	}
}
