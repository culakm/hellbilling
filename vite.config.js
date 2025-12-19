import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: { transformAssetUrls }
		}),
		quasar({
			// sassVariables: fileURLToPath(new URL('./src/quasar-variables.sass', import.meta.url))
			sassVariables: '@/quasar-variables.sass',
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'  // or "modern"
			},
			sass: {
				// silenceDeprecations: ["legacy-js-api"], // this works
				api: 'modern-compiler' // this doesn't work
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
