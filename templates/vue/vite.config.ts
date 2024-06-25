/// <reference types="vitest" />
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

// 目前这种导入方式需要tsx支持
import viteConfig from '@mqy/vite-config/vue'
import {
	// svg
	createSvgIconsPlugin,
} from '@mqy/vite-config/common'

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
		plugins: [
			// 本地生成svg
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
				symbolId: 'local-icon-[dir]-[name]',
			}),
		],
	})
})
