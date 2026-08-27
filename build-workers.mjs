import { build } from 'vite';
import { sharedAlias, sharedCommonjs, sharedPlugins } from './vite.shared.mjs';

// Воркери мають бути класичними (IIFE) скриптами: threads.js загортає їх у
// `importScripts()`, а voxelsrv-server усередині server.js спавнить ./normalWorker.js
// звичайним `new Worker(url)`. ESM-вихід тут не працює.
// Кладемо їх у public/, щоб один і той самий файл обслуговувався і в dev, і в prod.
const workers = [
	{ name: 'protocol', entry: 'src/lib/helpers/protocol.ts' },
	{ name: 'inflate', entry: 'src/lib/helpers/worldInflate.ts' },
	{ name: 'server', entry: 'src/lib/singleplayer/server/server.ts' },
	{ name: 'normalWorker', entry: 'node_modules/voxelsrv-server/dist/default/worldgen/normalWorker.js' },
];

for (const worker of workers) {
	await build({
		configFile: false,
		plugins: sharedPlugins(),
		resolve: { alias: sharedAlias, preserveSymlinks: true },
		define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production') },
		build: {
			outDir: 'public',
			emptyOutDir: false,
			target: 'es2018',
			commonjsOptions: sharedCommonjs,
			lib: {
				entry: worker.entry,
				formats: ['iife'],
				name: `voxelsrv_${worker.name}`,
				fileName: () => `${worker.name}.js`,
			},
		},
	});
}
