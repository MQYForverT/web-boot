import react from '@vitejs/plugin-react-swc'
import type { UserConfig } from 'vite'

import { reactClickToComponent } from 'vite-plugin-react-click-to-component'

import { setupViteServer, commonVitePlugins, setupViteBuild, AutoImport } from '../common'

export default (viteEnv: ImportMetaEnv, customConfig?: UserConfig): UserConfig => {
	const { server, plugins = [], build, ...config } = customConfig ?? {}
	return {
		// 开发服务器选项
		server: {
			...setupViteServer(),
			...server,
		},
		plugins: [
			...commonVitePlugins(viteEnv),
			react(),
			// 通过 【option/alt】 + 鼠标右键 可以查看组件信息，及打开组件
			reactClickToComponent(),
			AutoImport({
				imports: ['react', 'ahooks'],
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
