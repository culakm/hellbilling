import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: { transformAssetUrls }
		}),
		vueDevTools(),
		quasar({
			// sassVariables: fileURLToPath(new URL('./src/quasar-variables.sass', import.meta.url))
			sassVariables: '@/quasar-variables.sass',
		})
	],
	server: {
		port: 5173  // http://localhost:5173 - default port
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
