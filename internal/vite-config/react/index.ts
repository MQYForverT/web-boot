import react from '@vitejs/plugin-react-swc'
import type { UserConfig } from 'vite'

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
			react(),
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
