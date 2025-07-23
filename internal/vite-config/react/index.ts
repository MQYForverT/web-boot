import type { UserConfig } from 'vite'
import { createRequire } from 'module'
import { checkPeerDeps } from '../common/checkPeerDeps'
import type IPluginReactSwc from '@vitejs/plugin-react-swc'

// 检查必需的对等依赖
checkPeerDeps({
	packageName: '@tsoul/vite-config/react',
	devDeps: ['@vitejs/plugin-react-swc'],
	deps: ['ahooks'],
})

// 依赖检查通过后，使用 require 安全导入
const require = createRequire(import.meta.url)
const reactModule = require('@vitejs/plugin-react-swc')
const react = (reactModule.default || reactModule) as typeof IPluginReactSwc

import { reactClickToComponent } from 'vite-plugin-react-click-to-component'
import {
	setupViteServer,
	commonVitePlugins,
	setupViteBuild,
	AutoImport, // Icon
	Icons,
	IconsResolver,
} from '../common'

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
			react({
				tsDecorators: true,
			}),
			// 通过 【option/alt】 + 鼠标右键 可以查看组件信息，及打开组件
			reactClickToComponent(),
			AutoImport({
				imports: ['react', 'ahooks', 'react-router-dom'],
				// 添加stores目录自动导入
				dirs: ['./src/stores'],
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
