import type { UserConfig } from 'vite'
import { createRequire } from 'module'
import { checkPeerDeps } from '../common/checkPeerDeps'
import type ISvelteVitePlugin from '@sveltejs/vite-plugin-svelte'

// 检查必需的对等依赖
checkPeerDeps({
	packageName: '@tsoul/vite-config/svelte',
	devDeps: ['@sveltejs/vite-plugin-svelte'],
})

// 依赖检查通过后，使用 require 安全导入
const require = createRequire(import.meta.url)
const svelteModule = require('@sveltejs/vite-plugin-svelte')
const { svelte, vitePreprocess } = (svelteModule.default || svelteModule) as typeof ISvelteVitePlugin

import { setupViteServer, commonVitePlugins, setupViteBuild, AutoImport, Icons, IconsResolver } from '../common'

export default (viteEnv: ImportMetaEnv, customConfig?: UserConfig): UserConfig => {
	const { server, css, plugins = [], build, ...config } = customConfig ?? {}
	return {
		base: './',
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
