/// <reference types="vitest" />
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'

import { setupVitePlugins, setupViteResolve, setupViteServer } from '../../build/vite'
import defineVitestConfig from '../../build/vitest'

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
			AutoImport({
				imports: ['react', 'ahooks', 'vitest'],
			}),
		],
		defineVitestConfig,
	}
})
