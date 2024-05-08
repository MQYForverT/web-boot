import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import VueDevTools from 'vite-plugin-vue-devtools'

import { setupVitePlugins, setupViteResolve, setupViteServer } from '../../build'

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
			VueDevTools(),
			AutoImport({
				imports: ['vue', '@vueuse/core'],
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
				vueTemplate: true,
			}),
			Components({
				// allow auto load markdown components under `./src/components/`
				extensions: ['vue', 'md'],
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
				dts: 'components.d.ts',
			}),
		],
	}
})
