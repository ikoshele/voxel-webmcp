import { gameSettings } from '../../values';

let server = '';

export function setAssetServer(t: string) {
	server = t;
}

/*
 * It's used for getting asset paths (or Base64 versions in future)
 */

export function getAsset(asset: string, type: string): string {
	if (asset.startsWith('http://') || asset.startsWith('https://')){
		return asset
}	
	else if (asset.startsWith('server:')) {
		if (!gameSettings.allowcustom) return type == 'texture' ? './textures/error.png' : '';
		asset = asset.substr(7);
		switch (type) {
			case 'texture':
				return `${server}/${asset}.png`;
			default:
				return `${server}/${asset}`;
		}
	} else {
		switch (type) {
			case 'texture':
				return `./textures/${asset}.png`;
			default:
				return `./${type}/${asset}`;
		}
	}
}
