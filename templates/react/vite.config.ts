/// <reference types="vitest" />
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

// import { setupVitePlugins, setupViteResolve, setupViteServer } from '@mqy/vite-config'
// import viteConfig from '@mqy/vitest-config'

// 目前不支持动态导入ts问价，将等到开箱即用的解决方案，然后将相对路径替换为包名称
import viteConfig from '../../internal/vite-config/react'

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
