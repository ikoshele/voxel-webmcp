import { defineConfig } from 'vite';
import { noaRequireContextEsbuild, sharedAlias, sharedCommonjs, sharedPlugins } from './vite.shared.mjs';

export default defineConfig({
	base: './',
	plugins: sharedPlugins(),
	resolve: { alias: sharedAlias, preserveSymlinks: true },
	optimizeDeps: {
		esbuildOptions: {
			plugins: [noaRequireContextEsbuild()],
		},
	},
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
		allowedHosts: ['.trycloudflare.com'],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},
});
