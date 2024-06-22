/// <reference types="vitest" />
import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import copy from 'rollup-plugin-copy'
import { resolve } from 'path'
import { readdirSync } from 'fs'

const whiteList = ['index.ts', 'Example']
// 获取所有组件目录
const componentDirs = readdirSync(resolve(__dirname, 'src/components')).filter((dir) => !whiteList.includes(dir))

// 生成输入对象
const entries: Record<string, string> = componentDirs.reduce((acc: Record<string, string>, dir) => {
	acc[dir] = resolve(__dirname, `src/components/${dir}/index.ts`)
	return acc
}, {})

entries['index'] = resolve(__dirname, 'src/components/index.ts')
// {
//   BackgroundLayout: '/Users/bytedance/mqy/web-boot/components/private/src/components/BackgroundLayout/index.ts',
//   index: '/Users/bytedance/mqy/web-boot/components/private/src/components/index.ts'
// }

// 目前这种导入方式需要tsx支持
import { setupViteTest } from '@mqy/vite-config/common/vitest'
import dts from '@mqy/vite-config/common/plugins/dts'
import compress from '@mqy/vite-config/common/plugins/compress'
import unocss from '@mqy/vite-config/common/plugins/unocss'
import { setupViteLib } from '@mqy/vite-config/common/build/lib'

import { menuIcon } from './public/menuList'

// https://vitejs.dev/config/
const config: UserConfig = {
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
		unocss({
			mode: 'shadow-dom',
			// 因为图标不能动态加载，所以你在你的项目中把会动态加载的图标都写在这个配置里面，一般和你的路由是对应的
			safelist: [...menuIcon],
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
			imports: ['vue', 'react', '@vueuse/core'],
			vueTemplate: true,
		}),
		ElementPlus({}),
		dts({
			include: ['src/components/**/*.ts'],
			exclude: ['src/components/Example'],
		}),
		compress(),
		/**
		 * 为什么要拷贝element的base.css？
		 * 因为element使用了css变量，加载在shadow dom内的样式里无法读取这些变量，需要在页面顶层声明这些变量，
		 * 也就是引入组件时需要在项目中引入base.css
		 */
		copy({
			hook: 'generateBundle',
			targets: [
				{
					src: './node_modules/element-plus/theme-chalk/base.css',
					dest: './dist/',
				},
			],
		}),
	],
	test: setupViteTest(),
	build: setupViteLib({
		entries: entries,
		external: ['vue', 'react'],
		outputGlobals: {
			vue: 'Vue',
		},
	}),
}
export default config
