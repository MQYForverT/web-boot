/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// import viteConfig from '@mqy/vite-config/vue'

// 目前不支持动态导入ts问价，将等到开箱即用的解决方案，然后将相对路径替换为包名称
import { setupViteTest } from '../../internal/vite-config/common/vitest'

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
		// css-in-js,这样引入的时候就不需要额外引入css文件了
		cssInjectedByJsPlugin({ topExecutionPriority: false }),
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
