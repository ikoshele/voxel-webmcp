import * as GUI from '@babylonjs/gui';
import { isMobile } from 'mobile-device-detect';
import { event, getScreen } from '../main';

export let cameraHint: GUI.Rectangle = null;

export function setupCameraHint() {
	if (isMobile) return;

	cameraHint = new GUI.Rectangle('camera-hint');
	cameraHint.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
	cameraHint.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
	cameraHint.background = '#111111aa';
	cameraHint.color = '#ffffff44';
	cameraHint.thickness = 1;
	cameraHint.cornerRadius = 6;
	cameraHint.zIndex = 6;
	cameraHint.isPointerBlocker = false;

	const text = new GUI.TextBlock('camera-hint-text');
	text.text = 'LOOK AROUND:  ←  ↑  ↓  →\nUse arrows when mouse look is unavailable';
	text.color = '#f0f0f0';
	text.fontFamily = 'Lato';
	text.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
	text.isPointerBlocker = false;
	cameraHint.addControl(text);

	const resize = () => {
		const viewportWidth = window.innerWidth;
		const inset = Math.min(14, Math.max(8, viewportWidth * 0.01));
		const width = Math.min(340, Math.max(280, viewportWidth * 0.28), viewportWidth - inset * 2);
		const fontSize = Math.min(15, Math.max(12, viewportWidth * 0.012));

		cameraHint.width = `${width}px`;
		cameraHint.height = `${fontSize * 3.3}px`;
		cameraHint.left = `${inset}px`;
		cameraHint.top = `${-inset}px`;
		text.paddingLeft = `${fontSize * 0.8}px`;
		text.fontSize = `${fontSize}px`;
		text.lineSpacing = `${fontSize * 0.18}px`;
	};

	resize();
	event.on('scale-change', resize);

	cameraHint.onDisposeObservable.add(() => {
		event.off('scale-change', resize);
		cameraHint = null;
	});

	getScreen(2).addControl(cameraHint);
}
