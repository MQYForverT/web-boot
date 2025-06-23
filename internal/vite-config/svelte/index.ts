import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import type { UserConfig } from 'vite'

import { setupViteServer, commonVitePlugins, setupViteBuild, AutoImport, Icons, IconsResolver } from '../common'

export default (viteEnv: ImportMetaEnv, customConfig?: UserConfig): UserConfig => {
	const { server, css, plugins = [], build, ...config } = customConfig ?? {}
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
			svelte({
				preprocess: [vitePreprocess()],
				compilerOptions: {
					// 启用 Svelte Inspector
					dev: true,
				},
			}),
			AutoImport({
				dts: './auto-imports.d.ts',
				// 添加stores目录自动导入
				dirs: ['./src/stores', './src/lib'],
				// 添加图标解析器
				resolvers: [
					IconsResolver({
						prefix: 'Icon',
					}),
				],
			}),
			// 添加图标支持
			Icons({
				autoInstall: true,
				compiler: 'svelte',
			}),
			...plugins,
		],
		build: {
			...setupViteBuild(),
			...build,
		},
		...config,
	}
}
