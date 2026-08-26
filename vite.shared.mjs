import { nodePolyfills } from 'vite-plugin-node-polyfills';

// noa-engine підтягує компоненти через webpack-івський `require.context`.
// Vite такого не вміє, тож підміняємо його на еквівалент з import.meta.glob.
// enforce: 'pre' — щоб трансформ пройшов до vite:import-glob.
const noaRequireContext = () => ({
	name: 'noa-require-context',
	enforce: 'pre',
	transform(code, id) {
		if (!id.includes('noa-engine') || !code.includes("require.context('../components/'")) return null;
		const shim = `(() => {
			const modules = import.meta.glob('../components/*.js', { eager: true });
			const ctx = (key) => modules['../components/' + key.replace('./', '')];
			ctx.keys = () => Object.keys(modules).map((k) => './' + k.split('/').pop());
			return ctx;
		})()`;
		return { code: code.replace("require.context('../components/', false, /\\.js$/)", shim), map: null };
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
