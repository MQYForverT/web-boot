/// <reference types="vitest" />
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import VueDevTools from 'vite-plugin-vue-devtools'

// import { setupVitePlugins, setupViteResolve, setupViteServer } from '@mqy/vite-config'
// import defineVitestConfig from '@mqy/vitest-config'

// 目前不支持动态导入ts问价，将等到开箱即用的解决方案，然后将相对路径替换为包名称
import { setupVitePlugins, setupViteResolve, setupViteServer } from '../../internal/vite-config'
import defineVitestConfig from '../../internal/vitest-config'

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
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "~/styles/element/index.scss" as *;`,
				},
			},
		},
		plugins: [
			...setupVitePlugins(viteEnv),
			vue(),
			// vue开发者工具，详细操作可以在启动时查看命令
			VueDevTools({
				// launchEditor: 'code',//默认打开的编辑器，默认vscode，+7.20
			}),
			AutoImport({
				imports: ['vue', '@vueuse/core', 'vitest'],
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
				vueTemplate: true,
			}),
			Components({
				// allow auto load markdown components under `./src/components/`
				extensions: ['vue', 'md'],
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
			}),
		],
		...defineVitestConfig,
	}
})
