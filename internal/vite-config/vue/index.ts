import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

import {
	setupViteServer,
	commonVitePlugins,
	setupViteBuild,
	setupViteEsBuild,
	AutoImport,
	ComponentsVue,
	// style
	createStyleImportPlugin,
	ElementPlusResolve,
	// Icon
	Icons,
	IconsResolver,
} from '../common'
import { ElementPlusResolver } from '../common/autoImport/components_vue'

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
			...css,
		},
		plugins: [
			...commonVitePlugins(viteEnv),
			vue({
				template: {
					compilerOptions: {
						// 将所有带短横线的标签名都视为自定义元素
						isCustomElement: (tag) => tag.startsWith('tsoul-'),
					},
				},
			}),
			// vue开发者工具，详细操作可以在启动时查看命令
			VueDevTools({
				// launchEditor: 'code',//默认打开的编辑器，默认vscode，+7.20
			}),
			AutoImport({
				imports: ['vue', '@vueuse/core', 'vue-router'],
				resolvers: [
					ElementPlusResolver({ importStyle: 'sass' }),
					// 自动导入图标组件
					IconsResolver({
						prefix: 'Icon',
					}),
				],
				// 默认/src/stores下的store自动导入
				dirs: ['./src/stores'],
				vueTemplate: true,
			}),
			ComponentsVue({
				// allow auto load markdown components under `./src/components/`
				extensions: ['vue', 'md'],
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				resolvers: [
					ElementPlusResolver({ importStyle: 'sass' }),
					// 自动注册图标组件，ep：element-plus
					IconsResolver({
						enabledCollections: ['ep'],
					}),
				],
			}),
			Icons({
				compiler: 'vue3',
				autoInstall: true,
			}),
			// 自动导入message等样式
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
		...config,
	}
}
