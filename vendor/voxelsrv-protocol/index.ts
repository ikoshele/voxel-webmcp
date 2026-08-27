import * as client from './js/client';
import * as server from './js/server';
import * as proxyClient from './js/proxy-client';
import * as proxyServer from './js/proxy-server';

import mapClient from './idmap/client.json';
import mapServer from './idmap/server.json';
import revMapClient from './idmap/client-byname.json';
import revMapServer from './idmap/server-byname.json';

import mapProxyClient from './idmap/proxy-client.json';
import mapProxyServer from './idmap/proxy-server.json';
import revMapProxyClient from './idmap/proxy-client-byname.json';
import revMapProxyServer from './idmap/proxy-server-byname.json';
export { protocolVersion, protocolVersionRevision, proxyVersion, proxyVersionRevision } from './const.json';

mapClient.forEach((x, i) => (revMapClient[x] = i));
mapServer.forEach((x, i) => (revMapServer[x] = i));

mapProxyClient.forEach((x, i) => (revMapProxyClient[x] = i));
mapProxyServer.forEach((x, i) => (revMapProxyServer[x] = i));

export function parseToObject(pType, data) {
	let type = '';
	let packet: any;

	switch (pType) {
		case 'server':
			type = mapServer[data[0]];
			packet = server[type];
			break;
		case 'client':
			type = mapClient[data[0]];
			packet = client[type];
			break;
		case 'proxy-server':
			type = mapProxyServer[data[0]];
			packet = proxyServer[type];
			break;
		case 'proxy-client':
			type = mapProxyClient[data[0]];
			packet = proxyClient[type];
			break;
		default:
			return null;
	}

	if (type == undefined) return null;

	const rawData = data.slice(1);

	const message = packet.decode(rawData);

	let error: string | null = null;

	if (packet != undefined) error = packet.verify(message);
	else error = 'Invalid packet';

	if (error) {
		console.error('Invalid ' + pType + ' packet! Type: ' + type, error);
		return null;
	}

	return { data: packet.toObject(message, { defaults: true }), type: type };
}

export function parseToMessage(pType, type, data) {
	let packet: any;
	let typeRaw: number = 0;

	switch (pType) {
		case 'server':
			typeRaw = revMapServer[type];
			packet = server[type];
			break;
		case 'client':
			typeRaw = revMapClient[type];
			packet = client[type];
			break;
		case 'proxy-server':
			typeRaw = revMapProxyServer[type];
			packet = proxyServer[type];
			break;
		case 'proxy-client':
			typeRaw = revMapProxyClient[type];
			packet = proxyClient[type];
			break;
		default:
			return null;
	}

	let error: string | null = null;

	if (packet != undefined) error = packet.verify(data);
	else error = 'Invalid packet';

	if (error) {
		console.error('Invalid ' + pType + ' packet! Type: ' + type, data, error);
		return null;
	}

	const message = packet.create(data);
	const encoded = packet.encode(message).finish();

	const out = new Uint8Array(1 + encoded.length);
	out.set([typeRaw]);
	out.set(encoded, 1);

	return out.buffer;
}
