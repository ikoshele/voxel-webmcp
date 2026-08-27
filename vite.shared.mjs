import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const noaContextPattern = "require.context('../components/', false, /\\.js$/)";

// noa-engine підтягує компоненти через webpack-івський `require.context`.
// Vite такого не вміє, тож підміняємо його на еквівалент з import.meta.glob.
// enforce: 'pre' — щоб трансформ пройшов до vite:import-glob.
const noaRequireContext = () => ({
	name: 'noa-require-context',
	enforce: 'pre',
	transform(code, id) {
		if (!id.includes('noa-engine') || !code.includes(noaContextPattern)) return null;
		const shim = `(() => {
			const modules = import.meta.glob('../components/*.js', { eager: true });
			const ctx = (key) => modules['../components/' + key.replace('./', '')];
			ctx.keys = () => Object.keys(modules).map((k) => './' + k.split('/').pop());
			return ctx;
		})()`;
		return { code: code.replace(noaContextPattern, shim), map: null };
	},
});

export const noaRequireContextEsbuild = () => ({
	name: 'noa-require-context',
	setup(build) {
		build.onLoad({ filter: /[\\/]noa-engine[\\/]src[\\/]lib[\\/]entities\.js$/ }, async (args) => {
			const code = await readFile(args.path, 'utf8');
			const componentDir = resolve(dirname(args.path), '../components');
			const files = (await readdir(componentDir)).filter((file) => file.endsWith('.js')).sort();
			const entries = files
				.map((file) => `${JSON.stringify(`./${file}`)}: require(${JSON.stringify(`../components/${file}`)})`)
				.join(',');
			const shim = `(() => {
				const modules = {${entries}};
				const ctx = (key) => modules[key];
				ctx.keys = () => Object.keys(modules);
				return ctx;
			})()`;
			return { contents: code.replace(noaContextPattern, shim), loader: 'js' };
		});
	},
});

// `fs` виключений з поліфілів — його підміняє memfs (див. sharedAlias),
// інакше плагін мовчки перебиває аліас і сервер-воркер лишається без файлової системи.
export const sharedPlugins = () => [noaRequireContext(), nodePolyfills({ exclude: ['fs'] })];

export const sharedAlias = {
	fs: 'memfs',
	readline: 'fakereadline',
};

export const sharedCommonjs = {
	include: [/node_modules/],
	transformMixedEsModules: true,
};
