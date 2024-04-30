import { defineConfig } from '@farmfe/core'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	vitePlugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
		}),
		Components({
			resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
		}),
	],
	plugins: [
		// Rust插件，配置其包名
		['@farmfe/plugin-sass', { sourceMap: false }],
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
	// 编译选项
	compilation: {
		output: {
			assetsFilename: 'assets/[resourceName].[hash].[ext]', // [] 里面的是 Farm 支持的全部占位符
		},
		// 开启缓存，加快热启动/热构建的编译速度
		persistentCache: true,
	},
})
