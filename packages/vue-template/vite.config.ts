import { resolve } from 'path'
// import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
//export default defineConfig((configEnv: ConfigEnv) => {
export default defineConfig(() => {
	// const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv
	return {
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "~/styles/element/index.scss" as *;`,
				},
			},
		},
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
			}),
			Components({
				// allow auto load markdown components under `./src/components/`
				extensions: ['vue', 'md'],
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
				resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
			}),
			// https://github.com/antfu/unocss
			// see unocss.config.ts for config
			UnoCSS({
				configFile: '../../uno.config.ts',
			}),
		],
		// 开发服务器选项
		server: {
			port: 9801,
			cors: true,
			proxy: {
				// ...
			},
			open: true,
		},
	}
})
