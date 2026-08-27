import { Server } from 'voxelsrv-server/dist/server';
import { BaseSocket } from 'voxelsrv-server/dist/socket';
import { World } from 'voxelsrv-server/dist/lib/world/world';
import { IWorldSettings } from '../../../values';
import { getWorldRevision } from './worldRevision';

const channel = 'voxel-webmcp';
const version = 1;
const decoder = new TextDecoder();
const encoder = new TextEncoder();
const undoLimit = 50;
const maxScanVolume = 65536;
const maxEditVolume = 65536;
const maxDelayMs = 100;
const maxAnimationDurationMs = 60000;
const undoJournal: Change[][] = [];

type Position = [number, number, number];
type Box = { min: Position; max: Position; size: Position; volume: number };
type Planned = { position: Position; block: number };
type Change = { position: Position; before: number; after: number };

function point(value: any, name: string): Position {
	if (!Array.isArray(value) || value.length !== 3 || value.some((part) => !Number.isInteger(part))) throw new Error(`${name} must be an array of three integers`);
	return [value[0], value[1], value[2]];
}

function box(fromValue: any, toValue: any, limit: number): Box {
	const from = point(fromValue, 'from');
	const to = point(toValue, 'to');
	const min: Position = [Math.min(from[0], to[0]), Math.min(from[1], to[1]), Math.min(from[2], to[2])];
	const max: Position = [Math.max(from[0], to[0]), Math.max(from[1], to[1]), Math.max(from[2], to[2])];
	const size: Position = [max[0] - min[0] + 1, max[1] - min[1] + 1, max[2] - min[2] + 1];
	const volume = size[0] * size[1] * size[2];
	if (volume > limit) throw new Error(`Region volume ${volume} exceeds the per-call limit of ${limit} voxels`);
	return { min, max, size, volume };
}

function scanBox(args: any) {
	const hasCorners = args.from != undefined || args.to != undefined;
	const hasCenter = args.center != undefined || args.radius != undefined;
	if (hasCorners === hasCenter) throw new Error('Select exactly one region form: from plus to, or center plus radius');
	if (hasCorners) {
		if (args.from == undefined || args.to == undefined) throw new Error('Both from and to are required');
		return box(args.from, args.to, maxScanVolume);
	}
	if (args.center == undefined || args.radius == undefined) throw new Error('Both center and radius are required');
	const center = point(args.center, 'center');
	if (!Number.isInteger(args.radius) || args.radius < 0 || args.radius > 19) throw new Error('radius must be an integer from 0 to 19');
	const radius = args.radius;
	return box([center[0] - radius, center[1] - radius, center[2] - radius], [center[0] + radius, center[1] + radius, center[2] + radius], maxScanVolume);
}

function currentWorld(server: Server): World {
	const player: any = Object.values(server.players.players)[0];
	const world = player?.world || Object.values(server.worlds.worlds)[0];
	if (world == undefined) throw new Error('The world is not ready');
	return world;
}

function inside(world: World, position: Position) {
	return position[1] >= 0 && position[1] < 256 && world.isBlockInBounds(position);
}

async function loadChunks(world: World, region: Box) {
	const tasks: Promise<any>[] = [];
	for (let x = Math.floor(region.min[0] / 32); x <= Math.floor(region.max[0] / 32); x++) {
		for (let z = Math.floor(region.min[2] / 32); z <= Math.floor(region.max[2] / 32); z++) {
			if (world.isChunkInBounds([x, z])) tasks.push(world.getChunk([x, z]));
		}
	}
	await Promise.all(tasks);
}

function blockId(world: World, position: Position) {
	if (!inside(world, position)) return 0;
	return world.getBlockSync(position, false)?.numId || 0;
}

function blockName(server: Server, id: number) {
	return server.registry.blockIDmap[id] || 'air';
}

function requireBlock(server: Server, value: any, name: string) {
	if (typeof value !== 'string' || server.registry.blocks[value] == undefined) throw new Error(`${name} is not a registered block name`);
	return server.registry.blocks[value].numId;
}

function animationDelay(args: any) {
	const value = args.delay_ms == undefined ? 0 : args.delay_ms;
	if (!Number.isInteger(value) || value < 0 || value > maxDelayMs) throw new Error(`delay_ms must be an integer from 0 to ${maxDelayMs}`);
	return value;
}

function wait(milliseconds: number) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function key(position: Position) {
	return position.join(',');
}

function addPlan(plan: Map<string, Planned>, position: Position, block: number) {
	plan.set(key(position), { position, block });
}

function sendChanges(server: Server, changes: Change[]) {
	for (let offset = 0; offset < changes.length; offset += 1000) {
		const blocks = {};
		changes.slice(offset, offset + 1000).forEach((change, index) => {
			blocks[index] = { id: change.after, x: change.position[0], y: change.position[1], z: change.position[2] };
		});
		server.players.sendPacketAll('WorldMultiBlockUpdate', { blocks });
	}
}

async function applyPlan(server: Server, world: World, plan: Map<string, Planned>, recordUndo = true, delayMs = 0) {
	const changes: Change[] = [];
	let skipped = 0;
	for (const item of plan.values()) {
		if (!inside(world, item.position)) {
			skipped++;
			continue;
		}
		const before = blockId(world, item.position);
		if (before === item.block) continue;
		changes.push({ position: item.position, before, after: item.block });
	}
	const animationDurationMs = Math.max(0, changes.length - 1) * delayMs;
	if (animationDurationMs > maxAnimationDurationMs) {
		throw new Error(`Animated edit would require ${animationDurationMs} ms of delay for ${changes.length} changed blocks at delay_ms ${delayMs}; the maximum is ${maxAnimationDurationMs} ms. Reduce delay_ms, split the edit, or use delay_ms 0 for an instant edit.`);
	}
	if (delayMs === 0) {
		for (const change of changes) await world.setBlock(change.position, change.after, false);
		sendChanges(server, changes);
	} else {
		for (let index = 0; index < changes.length; index++) {
			const change = changes[index];
			await world.setBlock(change.position, change.after, false);
			sendChanges(server, [change]);
			if (index + 1 < changes.length) await wait(delayMs);
		}
	}
	if (recordUndo && changes.length > 0) {
		undoJournal.push(changes);
		while (undoJournal.length > undoLimit) undoJournal.shift();
	}
	return { changed_blocks: changes.length, skipped_out_of_bounds: skipped, delay_ms: delayMs, animation_duration_ms: animationDurationMs, world_revision: getWorldRevision() };
}

function catalog(server: Server) {
	return Object.values(server.registry.blocks).map((block: any) => {
		const traits: string[] = [];
		if (block.options?.solid === false || block.options?.fluid === true) traits.push('non-solid');
		else traits.push('solid');
		if (block.id === 'air' || block.options?.opaque === false || block.options?.fluid === true) traits.push('transparent');
		else traits.push('opaque');
		if (block.options?.fluid === true) traits.push('fluid');
		if (block.type === 1) traits.push('plant');
		return {
			name: block.id,
			label: block.id.replace(/_/g, ' '),
			appearance: describeAppearance(block.id),
			textures: Array.isArray(block.texture) ? block.texture : [block.texture].filter(Boolean),
			traits,
		};
	}).sort((a: any, b: any) => a.name.localeCompare(b.name));
}

function describeAppearance(id: string) {
	if (id === 'air') return 'empty space';
	if (id === 'grass') return 'green grass top with brown dirt sides';
	if (id === 'grass_snow') return 'white snow top with brown dirt sides';
	if (id === 'grass_yellow') return 'dry yellow-green grass top with brown dirt sides';
	if (id === 'water') return 'translucent blue water';
	if (id === 'glass') return 'clear colorless glass';
	if (id === 'leaves') return 'green leafy foliage';
	if (id === 'birch_leaves') return 'green birch foliage';
	if (id === 'spruce_leaves') return 'dark green spruce foliage';
	if (id === 'leaves_yellow') return 'yellow autumn foliage';
	if (id.endsWith('_wool')) return `${id.slice(0, -5).replace(/_/g, ' ')} wool`;
	if (id.endsWith('_stained_glass')) return `transparent ${id.slice(0, -14).replace(/_/g, ' ')} glass`;
	if (id.endsWith('_concrete')) return `smooth ${id.slice(0, -9).replace(/_/g, ' ')} concrete`;
	return id.replace(/_/g, ' ');
}

function worldInfo(server: Server, settings: IWorldSettings) {
	const world = currentWorld(server);
	const border = server.config.world.border;
	return {
		world: world.name,
		generator: world.getSettings().generator,
		seed: world.seed,
		gamemode: settings?.gamemode || 'creative',
		bounds: { min: [-border * 32, 0, -border * 32], max: [(border + 1) * 32 - 1, 255, (border + 1) * 32 - 1] },
		coordinate_system: { x: 'east', y: 'up', z: 'south', north: '-z', south: '+z', east: '+x', west: '-x' },
		block_catalog: catalog(server),
		world_revision: getWorldRevision(),
	};
}

function regionObject(region: Box) {
	return { from: region.min, to: region.max, size: region.size };
}

async function scanSummary(server: Server, world: World, region: Box) {
	await loadChunks(world, region);
	if (region.volume === 1) return { region: regionObject(region), block: blockName(server, blockId(world, region.min)), world_revision: getWorldRevision() };
	const counts = {};
	let nonAirMin: Position | null = null;
	let nonAirMax: Position | null = null;
	for (let x = region.min[0]; x <= region.max[0]; x++) for (let y = region.min[1]; y <= region.max[1]; y++) for (let z = region.min[2]; z <= region.max[2]; z++) {
		const id = blockId(world, [x, y, z]);
		if (id === 0) continue;
		const name = blockName(server, id);
		counts[name] = (counts[name] || 0) + 1;
		if (nonAirMin == null) {
			nonAirMin = [x, y, z];
			nonAirMax = [x, y, z];
		} else {
			nonAirMin = [Math.min(nonAirMin[0], x), Math.min(nonAirMin[1], y), Math.min(nonAirMin[2], z)];
			nonAirMax = [Math.max(nonAirMax[0], x), Math.max(nonAirMax[1], y), Math.max(nonAirMax[2], z)];
		}
	}
	return { region: regionObject(region), counts, non_air_bounds: nonAirMin == null ? null : { from: nonAirMin, to: nonAirMax }, world_revision: getWorldRevision() };
}

function makePalette(server: Server, ids: Set<number>) {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+?@';
	const palette = new Map<number, string>([[0, '.']]);
	Array.from(ids).filter((id) => id !== 0).sort((a, b) => blockName(server, a).localeCompare(blockName(server, b))).forEach((id, index) => {
		palette.set(id, chars[index] || '?');
	});
	return palette;
}

function legend(server: Server, palette: Map<number, string>) {
	return Array.from(palette.entries()).filter(([id]) => id !== 0).map(([id, char]) => `${char}=${blockName(server, id)}`).join(', ');
}

async function scanHeightmap(server: Server, world: World, region: Box) {
	await loadChunks(world, region);
	const tops: { height: number | null; block: number }[][] = [];
	const ids = new Set<number>();
	for (let z = region.min[2]; z <= region.max[2]; z++) {
		const row = [];
		for (let x = region.min[0]; x <= region.max[0]; x++) {
			let top = { height: null, block: 0 };
			for (let y = region.max[1]; y >= region.min[1]; y--) {
				const id = blockId(world, [x, y, z]);
				if (id !== 0) {
					top = { height: y, block: id };
					ids.add(id);
					break;
				}
			}
			row.push(top);
		}
		tops.push(row);
	}
	const palette = makePalette(server, ids);
	return {
		region: regionObject(region),
		origin: [region.min[0], region.min[2]],
		columns: 'x increases',
		rows: 'z increases',
		heights: tops.map((row) => row.map((cell) => cell.height == null ? '.' : cell.height).join(' ')).join('\n'),
		top_blocks: tops.map((row) => row.map((cell) => palette.get(cell.block)).join('')).join('\n'),
		legend: legend(server, palette),
		world_revision: getWorldRevision(),
	};
}

function sliceCells(world: World, region: Box, axis: string, position: number) {
	const rows: number[][] = [];
	if (axis === 'y') {
		for (let z = region.min[2]; z <= region.max[2]; z++) {
			const row = [];
			for (let x = region.min[0]; x <= region.max[0]; x++) row.push(blockId(world, [x, position, z]));
			rows.push(row);
		}
	} else if (axis === 'x') {
		for (let y = region.max[1]; y >= region.min[1]; y--) {
			const row = [];
			for (let z = region.min[2]; z <= region.max[2]; z++) row.push(blockId(world, [position, y, z]));
			rows.push(row);
		}
	} else {
		for (let y = region.max[1]; y >= region.min[1]; y--) {
			const row = [];
			for (let x = region.min[0]; x <= region.max[0]; x++) row.push(blockId(world, [x, y, position]));
			rows.push(row);
		}
	}
	return rows;
}

async function scanSlices(server: Server, world: World, region: Box, args: any) {
	await loadChunks(world, region);
	const axis = args.axis || 'y';
	if (!['x', 'y', 'z'].includes(axis)) throw new Error('axis must be x, y, or z');
	const axisIndex = { x: 0, y: 1, z: 2 }[axis];
	const positions = args.slice_positions == undefined ? [Math.floor((region.min[axisIndex] + region.max[axisIndex]) / 2)] : args.slice_positions;
	if (!Array.isArray(positions) || positions.length < 1 || positions.length > 16 || positions.some((value) => !Number.isInteger(value))) throw new Error('slice_positions must contain 1 to 16 integer coordinates');
	const output = [];
	for (const position of positions) {
		if (position < region.min[axisIndex] || position > region.max[axisIndex]) throw new Error(`Slice ${axis}=${position} is outside the selected region`);
		const cells = sliceCells(world, region, axis, position);
		const ids = new Set<number>();
		cells.forEach((row) => row.forEach((id) => ids.add(id)));
		const palette = makePalette(server, ids);
		const orientation = axis === 'y'
			? `Origin: x=${region.min[0]}, z=${region.min[2]}\nColumns: x increases →\nRows: z increases ↓`
			: axis === 'x'
				? `Origin: z=${region.min[2]}, y=${region.max[1]}\nColumns: z increases →\nRows: y decreases ↓`
				: `Origin: x=${region.min[0]}, y=${region.max[1]}\nColumns: x increases →\nRows: y decreases ↓`;
		output.push(`Slice ${axis}=${position}\n${orientation}\nDims: ${cells[0]?.length || 0} x ${cells.length}\n\n${cells.map((row) => row.map((id) => palette.get(id)).join('')).join('\n')}\n\nLegend: .=air${palette.size > 1 ? ', ' + legend(server, palette) : ''}`);
	}
	return { region: regionObject(region), slices: output, world_revision: getWorldRevision() };
}

async function scanRegion(server: Server, args: any) {
	const world = currentWorld(server);
	const region = scanBox(args);
	const mode = args.mode || 'summary';
	if (mode === 'summary') return scanSummary(server, world, region);
	if (mode === 'heightmap') return scanHeightmap(server, world, region);
	if (mode === 'slices') return scanSlices(server, world, region, args);
	throw new Error('mode must be summary, heightmap, or slices');
}

async function fillRegion(server: Server, args: any) {
	const world = currentWorld(server);
	const region = box(args.from, args.to, maxEditVolume);
	await loadChunks(world, region);
	const id = requireBlock(server, args.block, 'block');
	const shape = args.shape || 'solid';
	if (!['solid', 'walls', 'shell'].includes(shape)) throw new Error('shape must be solid, walls, or shell');
	const plan = new Map<string, Planned>();
	for (let y = region.min[1]; y <= region.max[1]; y++) for (let x = region.min[0]; x <= region.max[0]; x++) for (let z = region.min[2]; z <= region.max[2]; z++) {
		const side = x === region.min[0] || x === region.max[0] || z === region.min[2] || z === region.max[2];
		const face = side || y === region.min[1] || y === region.max[1];
		if (shape === 'solid' || (shape === 'walls' && side) || (shape === 'shell' && face)) addPlan(plan, [x, y, z], id);
	}
	return applyPlan(server, world, plan, true, animationDelay(args));
}

async function replaceBlocks(server: Server, args: any) {
	const world = currentWorld(server);
	const region = box(args.from, args.to, maxEditVolume);
	await loadChunks(world, region);
	const from = requireBlock(server, args.from_block, 'from_block');
	const to = requireBlock(server, args.to_block, 'to_block');
	const plan = new Map<string, Planned>();
	for (let y = region.min[1]; y <= region.max[1]; y++) for (let x = region.min[0]; x <= region.max[0]; x++) for (let z = region.min[2]; z <= region.max[2]; z++) {
		const position: Position = [x, y, z];
		if (blockId(world, position) === from) addPlan(plan, position, to);
	}
	return applyPlan(server, world, plan, true, animationDelay(args));
}

async function setBlocks(server: Server, args: any) {
	if (!Array.isArray(args.blocks) || args.blocks.length < 1 || args.blocks.length > 2048) throw new Error('blocks must contain 1 to 2048 entries');
	const world = currentWorld(server);
	const plan = new Map<string, Planned>();
	args.blocks.forEach((item, index) => addPlan(plan, point(item.position, `blocks[${index}].position`), requireBlock(server, item.block, `blocks[${index}].block`)));
	return applyPlan(server, world, plan, true, animationDelay(args));
}

async function snapshot(world: World, region: Box) {
	await loadChunks(world, region);
	const values: { offset: Position; block: number }[] = [];
	for (let y = region.min[1]; y <= region.max[1]; y++) for (let x = region.min[0]; x <= region.max[0]; x++) for (let z = region.min[2]; z <= region.max[2]; z++) {
		values.push({ offset: [x - region.min[0], y - region.min[1], z - region.min[2]], block: blockId(world, [x, y, z]) });
	}
	return values;
}

function transformOffset(offset: Position, size: Position, mirror: string, rotation: number): Position {
	const x = mirror.includes('x') ? size[0] - 1 - offset[0] : offset[0];
	const z = mirror.includes('z') ? size[2] - 1 - offset[2] : offset[2];
	if (rotation === 90) return [size[2] - 1 - z, offset[1], x];
	if (rotation === 180) return [size[0] - 1 - x, offset[1], size[2] - 1 - z];
	if (rotation === 270) return [z, offset[1], size[0] - 1 - x];
	return [x, offset[1], z];
}

async function copyOrMove(server: Server, args: any, move: boolean) {
	const world = currentWorld(server);
	const region = box(args.from, args.to, maxEditVolume);
	const destination = point(args.destination, 'destination');
	const mirror = args.mirror == undefined ? 'none' : args.mirror;
	const rotation = args.rotation == undefined ? 0 : args.rotation;
	if (!['none', 'x', 'z', 'xz'].includes(mirror)) throw new Error('mirror must be none, x, z, or xz');
	if (![0, 90, 180, 270].includes(rotation)) throw new Error('rotation must be 0, 90, 180, or 270');
	const values = await snapshot(world, region);
	const plan = new Map<string, Planned>();
	const destinationKeys = new Set<string>();
	values.forEach((value) => {
		const offset = transformOffset(value.offset, region.size, mirror, rotation);
		const position: Position = [destination[0] + offset[0], destination[1] + offset[1], destination[2] + offset[2]];
		addPlan(plan, position, value.block);
		destinationKeys.add(key(position));
	});
	if (move) {
		for (let y = region.min[1]; y <= region.max[1]; y++) for (let x = region.min[0]; x <= region.max[0]; x++) for (let z = region.min[2]; z <= region.max[2]; z++) {
			const position: Position = [x, y, z];
			if (!destinationKeys.has(key(position))) addPlan(plan, position, 0);
		}
	}
	return applyPlan(server, world, plan, true, animationDelay(args));
}

async function stackRegion(server: Server, args: any) {
	if (!Number.isInteger(args.count) || args.count < 1 || args.count > 16) throw new Error('count must be an integer from 1 to 16');
	const world = currentWorld(server);
	const region = box(args.from, args.to, maxEditVolume);
	if (region.volume * args.count > maxEditVolume) throw new Error(`Stack output exceeds the per-call limit of ${maxEditVolume} voxels`);
	const vectors = { up: [0, 1, 0], down: [0, -1, 0], north: [0, 0, -1], south: [0, 0, 1], east: [1, 0, 0], west: [-1, 0, 0] };
	const direction = vectors[args.direction];
	if (direction == undefined) throw new Error('direction must be up, down, north, south, east, or west');
	const values = await snapshot(world, region);
	const stride: Position = [direction[0] * region.size[0], direction[1] * region.size[1], direction[2] * region.size[2]];
	const plan = new Map<string, Planned>();
	for (let copy = 1; copy <= args.count; copy++) values.forEach((value) => addPlan(plan, [region.min[0] + value.offset[0] + stride[0] * copy, region.min[1] + value.offset[1] + stride[1] * copy, region.min[2] + value.offset[2] + stride[2] * copy], value.block));
	return applyPlan(server, world, plan, true, animationDelay(args));
}

async function undo(server: Server, args: any) {
	const count = args.count == undefined ? 1 : args.count;
	if (!Number.isInteger(count) || count < 1 || count > 20) throw new Error('count must be an integer from 1 to 20');
	const world = currentWorld(server);
	let steps = 0;
	let changed = 0;
	for (; steps < count && undoJournal.length > 0; steps++) {
		const changes = undoJournal.pop();
		const plan = new Map<string, Planned>();
		changes.forEach((change) => addPlan(plan, change.position, change.before));
		const result = await applyPlan(server, world, plan, false);
		changed += result.changed_blocks;
	}
	return { steps_undone: steps, changed_blocks: changed, remaining_undo_steps: undoJournal.length, world_revision: getWorldRevision() };
}

async function execute(server: Server, settings: IWorldSettings, name: string, args: any) {
	if (args == null || typeof args !== 'object' || Array.isArray(args)) throw new Error('Tool arguments must be an object');
	if (name === 'get_world_info') return worldInfo(server, settings);
	if (name === 'get_world_revision') return { world_revision: getWorldRevision() };
	if (name === 'scan_region') return scanRegion(server, args);
	if (name === 'fill_region') return fillRegion(server, args);
	if (name === 'replace_blocks') return replaceBlocks(server, args);
	if (name === 'set_blocks') return setBlocks(server, args);
	if (name === 'copy_region') return copyOrMove(server, args, false);
	if (name === 'move_region') return copyOrMove(server, args, true);
	if (name === 'stack_region') return stackRegion(server, args);
	if (name === 'undo') return undo(server, args);
	throw new Error(`Unknown worker WebMCP tool: ${name}`);
}

export async function handleMcpMessage(server: Server, socket: BaseSocket, packet: any, settings: IWorldSettings) {
	if (packet.key !== channel || packet.version !== version) return false;
	let request: any;
	try {
		request = JSON.parse(decoder.decode(packet.value instanceof Uint8Array ? packet.value : new Uint8Array(packet.value)));
		if (request.kind !== 'request' || typeof request.id !== 'string' || typeof request.name !== 'string') throw new Error('Malformed WebMCP request');
		const result = await execute(server, settings, request.name, request.args || {});
		socket.send('PluginMessage', { key: channel, version, value: encoder.encode(JSON.stringify({ kind: 'response', id: request.id, result })) });
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		socket.send('PluginMessage', { key: channel, version, value: encoder.encode(JSON.stringify({ kind: 'response', id: request?.id || '', error: message })) });
	}
	return true;
}
