import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { setupViteServer, setupViteTest, commonVitePlugins, setupViteBuild } from '../common'

// https://vitejs.dev/config/
export default (viteEnv: ImportMetaEnv, customConfig?: UserConfig): UserConfig => {
	const { server, css, plugins = [], build, ...config } = customConfig ?? {}
	return {
		// 开发服务器选项
		server: {
			...setupViteServer(),
			...server,
		},
		css: {
			preprocessorOptions: {
				scss: {
					// 主题定制方案
					additionalData: `@use "@/styles/element/index.scss" as *;`,
				},
			},
			...css,
		},
		plugins: [
			...commonVitePlugins(viteEnv),
			vue(),
			// vue开发者工具，详细操作可以在启动时查看命令
			VueDevTools({
				// launchEditor: 'code',//默认打开的编辑器，默认vscode，+7.20
			}),
			VueSetupExtend(),
			AutoImport({
				imports: ['vue', '@vueuse/core', 'vitest', 'vue-router'],
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
			...plugins,
		],
		build: {
			...setupViteBuild(),
			...build,
		},
		test: setupViteTest(),
		...config,
	}
}
