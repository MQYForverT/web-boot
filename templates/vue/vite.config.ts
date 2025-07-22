import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// 目前这种导入方式需要tsx支持
import viteConfig from '@tsoul/vite-config/vue'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
	const viteEnv = loadEnv(configEnv.mode, __dirname) as unknown as ImportMetaEnv
	// viteConfig内部默认打包排除了vue，所以请在html中使用cdn引入vue
	return viteConfig(viteEnv, {
		// 拉具体代码的时候需要把环境变量复制过来，并把这个属性删除
		envDir: resolve(__dirname, '../'),
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
	})
})
