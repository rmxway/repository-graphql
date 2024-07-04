import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: 'local',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
		},
	},
	define: {
		'process.env.CLIENT_ID': JSON.stringify(env.CLIENT_ID),
		'process.env.CLIENT_SECRET': JSON.stringify(env.CLIENT_SECRET),
		'process.env.TOKEN': JSON.stringify(env.TOKEN),
	},
	plugins: [react()],
});
