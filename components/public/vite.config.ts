/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'

// import viteConfig from '@mqy/vite-config/vue'

// 目前这种导入方式需要tsx支持
import { setupViteTest } from '@mqy/vite-config/common'

// https://vitejs.dev/config/
export default {
	server: {
		port: 9802,
		cors: true,
		open: true,
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, './src'),
			},
		],
	},
	plugins: [
		UnoCSS({
			mode: 'shadow-dom',
		}),
		vue({
			template: {
				compilerOptions: {
					// 将所有带短横线的标签名都视为自定义元素
					isCustomElement: (tag) => tag.startsWith('mqy-'),
				},
			},
		}),
		AutoImport({
			imports: ['vue'],
			vueTemplate: true,
		}),
		ElementPlus({}),
	],
	test: setupViteTest(),
	build: {
		lib: {
			entry: resolve(__dirname, 'src/components/index.ts'), // 设置入口文件
			name: 'mqyComponentInternal', // 起个名字，安装、引入用
			fileName: () => 'mqy-component-internal.js',
			formats: ['es'],
		},
		rollupOptions: {
			external: ['element-plus', 'vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
}
