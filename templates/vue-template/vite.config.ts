/// <reference types="vitest" />
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import path from 'path'

// import viteConfig from '@mqy/vite-config/vue'

// 目前不支持动态导入ts问价，将等到开箱即用的解决方案，然后将相对路径替换为包名称
import viteConfig from '../../internal/vite-config/vue'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
	const viteEnv = loadEnv(configEnv.mode, __dirname) as unknown as ImportMetaEnv

	return viteConfig(viteEnv, {
		// 拉具体代码的时候需要把环境变量复制过来，并把这个属性删除
		envDir: path.resolve(__dirname, '../../'),
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
	})
})
