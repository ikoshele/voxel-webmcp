import { defineConfig } from 'vite';
import { sharedAlias, sharedCommonjs, sharedPlugins } from './vite.shared.mjs';

export default defineConfig({
	base: './',
	plugins: sharedPlugins(),
	resolve: { alias: sharedAlias },
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		target: 'es2018',
		commonjsOptions: sharedCommonjs,
		rollupOptions: {
			output: {
				entryFileNames: 'bundle.js',
				chunkFileNames: '[name].js',
				assetFileNames: '[name][extname]',
				manualChunks(id) {
					if (id.includes('@babylonjs')) return 'babylon';
				},
			},
		},
	},
	server: {
		host: '0.0.0.0',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},
});
