import { createToolDefinitions } from '../../lib/mcp/tools/definitions';

const badgeId = 'webmcp_badge';

export let mcpBadge: HTMLDivElement = null;

let invocations = 0;
let invocationsValue: HTMLSpanElement = null;
let invocationsLabel: HTMLSpanElement = null;

function renderInvocations() {
	if (invocationsValue == null) return;
	invocationsValue.textContent = `${invocations}`;
	invocationsLabel.textContent = invocations === 1 ? 'invocation' : 'invocations';
}

export function recordMcpInvocation() {
	invocations = invocations + 1;
	renderInvocations();
}

export function setupMcpBadge() {
	if (mcpBadge != null) return;

	const count = createToolDefinitions([]).length;
	invocations = 0;

	mcpBadge = document.createElement('div');
	mcpBadge.id = badgeId;
	mcpBadge.innerHTML =
		'<div class="webmcp_head">' +
		'<span class="webmcp_dot"></span>' +
		'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
		'<path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path>' +
		'</svg>' +
		'<span class="webmcp_label">WebMCP</span>' +
		`<span class="webmcp_tools">${count} tools</span>` +
		'</div>' +
		'<div class="webmcp_calls"><span class="webmcp_calls_value"></span><span class="webmcp_calls_label"></span></div>';

	invocationsValue = mcpBadge.querySelector('.webmcp_calls_value');
	invocationsLabel = mcpBadge.querySelector('.webmcp_calls_label');
	renderInvocations();

	document.body.appendChild(mcpBadge);
}

export function destroyMcpBadge() {
	if (mcpBadge == null) return;
	mcpBadge.remove();
	mcpBadge = null;
	invocationsValue = null;
	invocationsLabel = null;
}
