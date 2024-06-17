/// <reference types="vitest" />
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

// 目前这种导入方式需要tsx支持
import viteConfig from '@mqy/vite-config/react'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
	const viteEnv = loadEnv(configEnv.mode, __dirname) as unknown as ImportMetaEnv

	return viteConfig(viteEnv, {
		// 拉具体代码的时候需要把环境变量复制过来，并把这个属性删除
		envDir: resolve(__dirname, '../../'),
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		// https://vuejs.org/api/compile-time-flags.html
		define: {
			__VUE_OPTIONS_API__: false,
			__VUE_PROD_DEVTOOLS__: false,
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
		},
	})
})
