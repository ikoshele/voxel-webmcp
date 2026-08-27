const point = {
	type: 'array',
	items: { type: 'integer' },
	minItems: 3,
	maxItems: 3,
};

const boxProperties = {
	from: { ...point, description: 'Inclusive minimum or first corner [x, y, z].' },
	to: { ...point, description: 'Inclusive maximum or opposite corner [x, y, z].' },
};

const boxRequired = ['from', 'to'];

const transformProperties = {
	mirror: { type: 'string', enum: ['none', 'x', 'z', 'xz'], default: 'none', description: 'Reverse the source-local x coordinate, z coordinate, or both before rotation.' },
	rotation: { type: 'integer', enum: [0, 90, 180, 270], default: 0, description: 'Clockwise rotation in degrees around the y axis when viewed from above.' },
};

const animationProperties = {
	delay_ms: { type: 'integer', minimum: 0, maximum: 100, default: 0, description: 'Delay in milliseconds between visible block changes. Use 0 for an instant edit. The total requested animation delay may not exceed 60000 milliseconds.' },
};

export type ToolDefinition = {
	name: string;
	title: string;
	description: string;
	inputSchema: any;
	readOnly: boolean;
};

export function createToolDefinitions(blockNames: string[]): ToolDefinition[] {
	const block = { type: 'string', enum: blockNames };
	return [
		{
			name: 'get_building_guide',
			title: 'Load voxel builder guide',
			description: 'Call this once before your first world-related action. Explains the voxel sandbox, your administrator-like editing capabilities, required workflow, tool choice, construction principles, player traversal constraints, and material guidance. Then call get_world_info for current bounds and available blocks.',
			inputSchema: { type: 'object', properties: {}, additionalProperties: false },
			readOnly: true,
		},
		{
			name: 'get_world_info',
			title: 'Get world info',
			description: 'Call this before planning a build. Returns the editable world bounds, coordinate system, generator, game mode, current world revision, and the single authoritative block catalog with human-readable labels, texture meanings, and physical or visual traits. Material characteristics live here rather than being repeated in every editing tool.',
			inputSchema: { type: 'object', properties: {}, additionalProperties: false },
			readOnly: true,
		},
		{
			name: 'get_player',
			title: 'Get player pose',
			description: 'Returns the player position, cardinal coordinate basis, camera orientation, targeted block, and current world revision. Use this before interpreting relative requests such as in front, left, or on this wall.',
			inputSchema: { type: 'object', properties: {}, additionalProperties: false },
			readOnly: true,
		},
		{
			name: 'scan_region',
			title: 'Scan world geometry',
			description: 'Reads authoritative voxel geometry. Select exactly one region form: center plus radius for exploration, or inclusive from plus to corners. Summary is cheapest; heightmap shows terrain; slices return coordinate-addressable ASCII plans or elevations. Air is omitted from summaries and represented by a dot in grids.',
			inputSchema: {
				type: 'object',
				properties: {
					...boxProperties,
					center: { ...point, description: 'Center voxel [x, y, z].' },
					radius: { type: 'integer', minimum: 0, maximum: 19 },
					mode: { type: 'string', enum: ['summary', 'heightmap', 'slices'], default: 'summary' },
					axis: { type: 'string', enum: ['x', 'y', 'z'], default: 'y' },
					slice_positions: { type: 'array', items: { type: 'integer' }, minItems: 1, maxItems: 16, description: 'Absolute coordinates on the chosen axis. Defaults to the region midpoint.' },
				},
				oneOf: [{ required: ['from', 'to'] }, { required: ['center', 'radius'] }],
				additionalProperties: false,
			},
			readOnly: true,
		},
		{
			name: 'fill_region',
			title: 'Fill region',
			description: 'Fills an inclusive box with a block. Solid fills every voxel, walls fills only four vertical sides, and shell fills all six faces. One call creates one undo step.',
			inputSchema: { type: 'object', properties: { ...boxProperties, block, shape: { type: 'string', enum: ['solid', 'walls', 'shell'], default: 'solid' }, ...animationProperties }, required: [...boxRequired, 'block'], additionalProperties: false },
			readOnly: false,
		},
		{
			name: 'replace_blocks',
			title: 'Replace blocks',
			description: 'Replaces every occurrence of one block with another inside an inclusive box. One call creates one undo step.',
			inputSchema: { type: 'object', properties: { ...boxProperties, from_block: block, to_block: block, ...animationProperties }, required: [...boxRequired, 'from_block', 'to_block'], additionalProperties: false },
			readOnly: false,
		},
		{
			name: 'set_blocks',
			title: 'Set explicit blocks',
			description: 'Sets up to 2048 explicit voxel positions in one atomic editing operation. Use for stairs, roofs, arches, diagonals, and other geometry boxes express poorly. Later duplicate positions win. One call creates one undo step.',
			inputSchema: { type: 'object', properties: { blocks: { type: 'array', minItems: 1, maxItems: 2048, items: { type: 'object', properties: { position: point, block }, required: ['position', 'block'], additionalProperties: false } }, ...animationProperties }, required: ['blocks'], additionalProperties: false },
			readOnly: false,
		},
		{
			name: 'copy_region',
			title: 'Copy region',
			description: 'Copies an inclusive source box, including air, with optional mirroring and clockwise y-axis rotation. Destination is the minimum corner of the transformed output box. The source is snapshotted first, so overlap is safe. One call creates one undo step.',
			inputSchema: { type: 'object', properties: { ...boxProperties, destination: { ...point, description: 'Minimum corner of the transformed output box [x, y, z].' }, ...transformProperties, ...animationProperties }, required: [...boxRequired, 'destination'], additionalProperties: false },
			readOnly: false,
		},
		{
			name: 'move_region',
			title: 'Move region',
			description: 'Moves an inclusive source box, including air, with optional mirroring and clockwise y-axis rotation, then clears non-overlapping source voxels to air. Destination is the minimum corner of the transformed output box. Overlap is safe. One call creates one undo step.',
			inputSchema: { type: 'object', properties: { ...boxProperties, destination: { ...point, description: 'Minimum corner of the transformed output box [x, y, z].' }, ...transformProperties, ...animationProperties }, required: [...boxRequired, 'destination'], additionalProperties: false },
			readOnly: false,
		},
		{
			name: 'stack_region',
			title: 'Stack region',
			description: 'Repeats an inclusive source box, including air, directly adjacent to itself count times in a cardinal direction. Count excludes the original. One call creates one undo step.',
			inputSchema: { type: 'object', properties: { ...boxProperties, count: { type: 'integer', minimum: 1, maximum: 16 }, direction: { type: 'string', enum: ['up', 'down', 'north', 'south', 'east', 'west'] }, ...animationProperties }, required: [...boxRequired, 'count', 'direction'], additionalProperties: false },
			readOnly: false,
		},
		{
			name: 'undo',
			title: 'Undo edits',
			description: 'Undoes the most recent WebMCP editing calls using WorldEdit semantics. Each prior write tool call is one step.',
			inputSchema: { type: 'object', properties: { count: { type: 'integer', minimum: 1, maximum: 20, default: 1 } }, additionalProperties: false },
			readOnly: false,
		},
	];
}
