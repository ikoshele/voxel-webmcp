import { EventEmitter } from 'events';

export function createInterface() {
	return new EventEmitter();
}
