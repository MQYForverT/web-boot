import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import svelteConfig from '@tsoul/vite-config/svelte'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const viteEnv = loadEnv(mode, resolve(__dirname, '../../')) as unknown as ImportMetaEnv
	return svelteConfig(viteEnv, {
		// 拉具体代码的时候需要把环境变量复制过来，并把这个属性删除
		envDir: resolve(__dirname, '../../'),
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		server: {
			// 支持 History API 路由模式
			open: true,
			cors: true,
		},
	})
})
