/// <reference types="vitest" />
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'

import { reactClickToComponent } from 'vite-plugin-react-click-to-component'

import { setupVitePlugins, setupViteResolve, setupViteServer } from '@mqy/vite-config'
import defineVitestConfig from '@mqy/vitest-config'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
	const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv

	return {
		// 开发服务器选项
		server: {
			...setupViteServer(),
		},
		resolve: {
			...setupViteResolve(),
		},
		plugins: [
			...setupVitePlugins(viteEnv),
			react(),
			// 通过 【option/alt】 + 鼠标右键 可以查看组件信息，及打开组件
			reactClickToComponent(),
			AutoImport({
				imports: ['react', 'ahooks', 'vitest'],
			}),
		],
		...defineVitestConfig,
	}
})
