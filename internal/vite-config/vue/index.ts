import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

import {
	setupViteServer,
	setupViteTest,
	commonVitePlugins,
	setupViteBuild,
	setupViteEsBuild,
	AutoImport,
	Components,
	// style
	createStyleImportPlugin,
	ElementPlusResolve,
} from '../common'
import { ElementPlusResolver } from '@mqy/vite-config/common/autoImport/components'

// https://vitejs.dev/config/
export default (viteEnv: ImportMetaEnv, customConfig?: UserConfig): UserConfig => {
	const { server, css, plugins = [], esbuild, build, ...config } = customConfig ?? {}
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
			vue({
				template: {
					compilerOptions: {
						// 将所有带短横线的标签名都视为自定义元素
						isCustomElement: (tag) => tag.startsWith('mqy-'),
					},
				},
			}),
			// vue开发者工具，详细操作可以在启动时查看命令
			VueDevTools({
				// launchEditor: 'code',//默认打开的编辑器，默认vscode，+7.20
			}),
			AutoImport({
				imports: ['vue', '@vueuse/core', 'vitest', 'vue-router'],
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
				// 默认/src/stores下的store自动导入
				dirs: ['./src/stores'],
				vueTemplate: true,
			}),
			Components({
				// allow auto load markdown components under `./src/components/`
				extensions: ['vue', 'md'],
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
			}),
			// 自动导入样式
			createStyleImportPlugin({
				resolves: [ElementPlusResolve()],
			}),
			...plugins,
		],
		esbuild: {
			...setupViteEsBuild(),
			...esbuild,
		},
		build: {
			...setupViteBuild(),
			...build,
		},
		test: setupViteTest(),
		...config,
	}
}
