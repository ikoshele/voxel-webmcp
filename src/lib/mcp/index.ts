import { Engine } from 'noa-engine';
import { BaseSocket } from '../../socket';
import { addMessage } from '../../gui/ingame/chat';
import { blockIDmap, blockIDs } from '../gameplay/registry';
import { attachMcpBridge, callWorkerTool, detachMcpBridge } from './bridge';
import { getBuildingGuide } from './tools/buildingGuide';
import { createToolDefinitions, ToolDefinition } from './tools/definitions';
import { validateToolArguments } from './tools/validation';

type ModelContext = {
	registerTool: (tool: any, options?: any) => Promise<void>;
};

type McpWindow = Window & typeof globalThis & {
	__mcp?: {
		call: (name: string, args?: object) => Promise<any>;
		list: () => string[];
	};
};

let registrationController: AbortController | null = null;
let executors = new Map<string, (args: any, signal?: AbortSignal) => Promise<any>>();

function round(value: number) {
	return Math.round(value * 100) / 100;
}

function cardinal(forward: number[]) {
	if (Math.abs(forward[0]) > Math.abs(forward[2])) return forward[0] > 0 ? 'east' : 'west';
	return forward[2] > 0 ? 'south' : 'north';
}

async function getPlayer(noa: Engine, signal?: AbortSignal) {
	const position = Array.from(noa.ents.getPosition(noa.playerEntity)).map(round);
	const heading = noa.camera.heading;
	const forward = [Math.round(Math.sin(heading)), 0, Math.round(Math.cos(heading))];
	const right = [forward[2], 0, -forward[0]];
	const target = noa.targetedBlock;
	const revision = await callWorkerTool('get_world_revision', {}, signal);
	let lookingAt = null;
	if (target != undefined) {
		const targetPosition = Array.from(target.position).map(Math.floor);
		const adjacent = Array.from(target.adjacent).map(Math.floor);
		lookingAt = {
			position: targetPosition,
			block: blockIDmap[target.blockID] || 'air',
			face_normal: adjacent.map((value, index) => value - targetPosition[index]),
			adjacent_position: adjacent,
			distance: round(Math.sqrt(targetPosition.reduce((sum, value, index) => sum + Math.pow(value + 0.5 - position[index], 2), 0))),
		};
	}
	return {
		position,
		voxel_position: position.map(Math.floor),
		facing: cardinal(forward),
		forward,
		right,
		up: [0, 1, 0],
		camera: { heading: round(heading), pitch: round(noa.camera.pitch) },
		looking_at: lookingAt,
		world_revision: revision.world_revision,
	};
}

function activity(name: string, args: any, result?: any) {
	const detail = result == undefined ? 'started' : `${result.changed_blocks ?? result.blocks_changed ?? 0} blocks changed`;
	addMessage([{ text: `[Agent] ${name}: ${detail}`, color: '#8ee6ff' }]);
}

function makeExecutor(definition: ToolDefinition, noa: Engine) {
	if (definition.name === 'get_building_guide') return async () => getBuildingGuide();
	if (definition.name === 'get_player') return (args: any, signal?: AbortSignal) => getPlayer(noa, signal);
	return async (args: any, signal?: AbortSignal) => {
		if (!definition.readOnly) activity(definition.name, args);
		const result = await callWorkerTool(definition.name, args, signal);
		if (!definition.readOnly) activity(definition.name, args, result);
		return result;
	};
}

export async function startMcpSession(noa: Engine, socket: BaseSocket) {
	stopMcpSession();
	if (!socket.singleplayer) return;
	attachMcpBridge(socket);
	const names = Array.from(new Set(['air', ...Object.keys(blockIDs)])).sort();
	const definitions = createToolDefinitions(names);
	const definitionMap = new Map(definitions.map((definition) => [definition.name, definition]));
	executors = new Map(definitions.map((definition) => [definition.name, makeExecutor(definition, noa)]));
	const mcpWindow = window as McpWindow;
	mcpWindow.__mcp = {
		call: async (name: string, args: object = {}) => {
			const definition = definitionMap.get(name);
			const execute = executors.get(name);
			if (definition == undefined || execute == undefined) throw new Error(`Unknown WebMCP tool: ${name}`);
			validateToolArguments(definition, args);
			return execute(args);
		},
		list: () => definitions.map((definition) => definition.name),
	};

	const modelContext = (document as any).modelContext as ModelContext | undefined;
	if (modelContext == undefined) {
		console.info('WebMCP browser API is unavailable; use window.__mcp.call(name, args) for local testing');
		return;
	}

	registrationController = new AbortController();
	await Promise.all(definitions.map((definition) => modelContext.registerTool({
		name: definition.name,
		title: definition.title,
		description: definition.description,
		inputSchema: definition.inputSchema,
		annotations: { readOnlyHint: definition.readOnly, untrustedContentHint: false },
		execute: (args: object, options?: { signal?: AbortSignal }) => {
			const input = args || {};
			validateToolArguments(definition, input);
			return executors.get(definition.name)(input, options?.signal);
		},
	}, { signal: registrationController.signal })));
	console.info(`Registered ${definitions.length} WebMCP tools`);
}

export function stopMcpSession() {
	registrationController?.abort();
	registrationController = null;
	executors.clear();
	detachMcpBridge();
	delete (window as McpWindow).__mcp;
}
