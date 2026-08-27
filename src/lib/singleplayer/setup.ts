import { VirtualSocket } from '../../socket';
import { EventEmitter } from 'events';
import { getWorldData, saveWorld } from '../helpers/storage';
import { gameSettings, IWorldSettings } from '../../values';

export function createSingleplayerServer(worldname: string, settings: IWorldSettings, autoconnect: boolean) {
	const toServer = new EventEmitter();
	const toClient = new EventEmitter();

	const socket = new VirtualSocket(toClient, toServer);
	socket.singleplayer = true;
	socket.world = settings.displayName || worldname;

	const server = new Worker('./server.js');
	socket.attachedData = server;
	let saveQueue = Promise.resolve();
	let autoSaveTimer: ReturnType<typeof setInterval> = null;
	getWorldData(worldname).then((world) => {
		server.postMessage({ type: 'SingleplayerViewDistance', data: { value: gameSettings.viewDistance } });
		server.postMessage({ type: 'SingleplayerWorldData', data: world != undefined ? world.data : {} });
		server.postMessage({ type: 'SingleplayerSettings', data: settings });
	});

	server.onmessage = (e) => {
		const type = e.data.type;
		const data = e.data.data;

		switch (type) {
			case 'ServerStopped':
				if (autoSaveTimer != null) clearInterval(autoSaveTimer);
				saveWorld(worldname, data.save, data.settings).then(() => {
					console.log('Saved!');
					server.terminate();
					toClient.emit('ServerStoppingDone', {});
				});
				toClient.emit('ServerStopped', {});
				break;
			case 'ServerSave':
				toClient.emit('ServerSavingStarted', {});
				console.log(`Starting saving ${Object.keys(data.save).length} files...`);
				saveQueue = saveQueue.then(() => saveWorld(worldname, data.save, data.settings)).then(() => {
					console.log('Saved!');
					toClient.emit('ServerSavingDone', {});
				});
				break;
			case 'ServerStarted':
				if (autoconnect) {
					server.postMessage({ type: 'SingleplayerConnectPlayer', data: { } });
				}
				if (gameSettings.autoSaveInterval > 0) {
					autoSaveTimer = setInterval(() => {
						server.postMessage({ type: 'SingleplayerAutoSave', data: {} });
					}, gameSettings.autoSaveInterval * 1000);
				}
				break;
		}
		
		toClient.emit(e.data.type, e.data.data);

	};

	toServer.on('packet', (type, data) => {
		server.postMessage({ type: type, data: data });
	});

	return socket;
}
