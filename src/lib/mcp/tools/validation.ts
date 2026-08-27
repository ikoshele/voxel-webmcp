import type { ToolDefinition } from './definitions';

function isObject(value: any) {
	return value != null && typeof value === 'object' && !Array.isArray(value);
}

function validateRequired(schema: any, value: any, path: string) {
	if (schema.required == undefined) return;
	if (!isObject(value)) throw new Error(`${path} must be an object`);
	for (const property of schema.required) {
		if (value[property] == undefined) throw new Error(`${path}.${property} is required`);
	}
}

function validateValue(schema: any, value: any, path: string) {
	validateRequired(schema, value, path);
	if (schema.type === 'object') {
		if (!isObject(value)) throw new Error(`${path} must be an object`);
		const properties = schema.properties || {};
		if (schema.additionalProperties === false) {
			for (const property of Object.keys(value)) {
				if (properties[property] == undefined) throw new Error(`${path} has unknown argument "${property}"`);
			}
		}
		for (const property of Object.keys(properties)) {
			if (value[property] != undefined) validateValue(properties[property], value[property], `${path}.${property}`);
		}
	} else if (schema.type === 'array') {
		if (!Array.isArray(value)) throw new Error(`${path} must be an array`);
		if (schema.minItems != undefined && value.length < schema.minItems) throw new Error(`${path} must contain at least ${schema.minItems} items`);
		if (schema.maxItems != undefined && value.length > schema.maxItems) throw new Error(`${path} must contain at most ${schema.maxItems} items`);
		if (schema.items != undefined) value.forEach((item, index) => validateValue(schema.items, item, `${path}[${index}]`));
	} else if (schema.type === 'integer') {
		if (!Number.isInteger(value)) throw new Error(`${path} must be an integer`);
		if (schema.minimum != undefined && value < schema.minimum) throw new Error(`${path} must be at least ${schema.minimum}`);
		if (schema.maximum != undefined && value > schema.maximum) throw new Error(`${path} must be at most ${schema.maximum}`);
	} else if (schema.type === 'string' && typeof value !== 'string') {
		throw new Error(`${path} must be a string`);
	}
	if (schema.enum != undefined && !schema.enum.includes(value)) throw new Error(`${path} must be one of ${schema.enum.join(', ')}`);
	if (schema.oneOf != undefined) {
		let matches = 0;
		for (const choice of schema.oneOf) {
			try {
				validateValue(choice, value, path);
				matches++;
			} catch {
			}
		}
		if (matches !== 1) throw new Error(`${path} must match exactly one allowed argument form`);
	}
}

export function validateToolArguments(definition: ToolDefinition, value: any) {
	try {
		validateValue(definition.inputSchema, value, definition.name);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(`Invalid arguments for ${definition.name}: ${message}`);
	}
}
