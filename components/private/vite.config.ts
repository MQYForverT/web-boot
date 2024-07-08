/// <reference types="vitest" />
import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
import {
	setupViteTest,
	dts,
	compress,
	unocss,
	setupViteLib,
	AutoImport,
	Components,
	// Icon
	Icons,
	IconsResolver,
	visualizer,
} from '@mqy/vite-config/common'
import { ElementPlusResolver } from '@mqy/vite-config/common/autoImport/components'
import { presetIcons } from '@mqy/vite-config/common/plugins/unocss'

// loader helpers
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

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
		visualizer,
		unocss({
			mode: 'shadow-dom',
			// 默认菜单图标是element-plus中的tickets图标
			safelist: ['i-ep-tickets'],
			presets: [
				presetIcons({
					// 用 dynamic imports 提供集合，以便它们将作为异步块打包器并按需加载。
					collections: {
						// 引入下载的第三方图标
						ep: () => import('@iconify-json/ep/icons.json').then((i) => i.default),
					},
				}),
			],
		}),
		vue({
			// 以前需要.ce.vue结尾，这样就不用.ce.vue结尾了
			customElement: true,
			template: {
				compilerOptions: {
					// 将所有带短横线的标签名都视为自定义元素
					isCustomElement: (tag) => tag.startsWith('mqy-'),
				},
			},
		}),
		AutoImport({
			imports: ['vue', '@vueuse/core'],
			resolvers: [
				ElementPlusResolver({ importStyle: 'sass' }),
				// 自动导入图标组件，需要配置前缀，默认是i
				// IconsResolver({
				// 	prefix: 'Icon',
				// }),
			],
			vueTemplate: true,
		}),
		Components({
			// allow auto load markdown components under `./src/components/`
			extensions: ['vue', 'md'],
			// allow auto import and register components used in markdown
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			resolvers: [
				ElementPlusResolver({ importStyle: 'sass' }),
				// 自动注册图标组件，以及自定义本地图标。ep：element-plus的图标，下面设置autoInstall，会自动下载，就不用单独去引入element-plus-icons依赖了
				IconsResolver({
					enabledCollections: ['ep'],
					customCollections: ['mqy-icon'],
				}),
			],
		}),
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
		Icons({
			compiler: 'vue3',
			// 上面使用了element-plus的图标，这里设置autoInstall，会自动下载上面enabledCollections中配置的图标
			autoInstall: true,
			customCollections: {
				'mqy-icon': FileSystemIconLoader('./src/assets/svg', (svg) =>
					svg.replace(/^<svg /, '<svg fill="currentColor" '),
				),
			},
		}),
	],
	test: setupViteTest(),
	build: setupViteLib({
		entries: entries,
		external: ['vue'],
		outputGlobals: {
			vue: 'Vue',
		},
	}),
}
export default config
