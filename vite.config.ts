import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

import { hostPath } from './src/helpers';

const env = loadEnv('', process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: 'local',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
		},
	},
	base: hostPath,
	build: {
		outDir: './build',
		emptyOutDir: true,
	},
	define: {
		'process.env.TOKEN': JSON.stringify(env.TOKEN),
	},
	plugins: [react()],
});
