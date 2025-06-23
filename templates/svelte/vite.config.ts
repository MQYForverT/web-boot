import { defineConfig, loadEnv } from 'vite'
import svelteConfig from '@mqy/vite-config/svelte'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const viteEnv = loadEnv(mode, `.env.${mode}`) as unknown as ImportMetaEnv
	return svelteConfig(viteEnv, {
		resolve: {
			alias: {
				'@': '/src',
			},
		},
	})
})
