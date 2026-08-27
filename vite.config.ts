import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import { noaRequireContextEsbuild, sharedAlias, sharedCommonjs, sharedPlugins } from './vite.shared.mjs';

function legalFiles(): Plugin {
	return {
		name: 'legal-files',
		generateBundle() {
			for (const fileName of ['LICENCE', 'THIRD_PARTY_NOTICES.md']) {
				this.emitFile({
					type: 'asset',
					fileName,
					source: readFileSync(resolve(process.cwd(), fileName), 'utf8'),
				});
			}
		},
	};
}

export default defineConfig({
	base: './',
	plugins: [...sharedPlugins(), legalFiles()],
	resolve: { alias: sharedAlias },
	optimizeDeps: {
		esbuildOptions: {
			plugins: [noaRequireContextEsbuild()],
		},
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		target: 'es2020',
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
