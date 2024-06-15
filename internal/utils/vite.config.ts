import { UserConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

const getPath = (path: string): string => {
	return resolve(__dirname, path)
}

const entries = {
	index: getPath('index.ts'),
	axios: getPath('axios/index.ts'),
	nprogress: getPath('nprogress/index.ts'),
}

// import viteConfig from '@mqy/vite-config/vue'

// 目前不支持动态导入ts问价，将等到开箱即用的解决方案，然后将相对路径替换为包名称
// import { setupViteTest } from '../../internal/vite-config/common/vitest'

// https://vitejs.dev/config/
const config: UserConfig = {
	plugins: [
		dts({
			outDir: 'dist', // 输出 .d.ts 文件的目录
			include: ['**/*.ts'],
			exclude: ['vite.config.ts'],
			// 如果有d.ts文件，直接复制过去
			copyDtsFiles: true,
		}),
	],
	build: {
		lib: {
			entry: entries, // 设置入口文件
			name: 'MqyUtils',
			fileName: (_, entryName) => (entryName === 'index' ? '[name].js' : `${entryName}/index.js`),
			formats: ['es'],
		},
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				passes: 3, // 进行两次压缩以提高压缩效果
			},
			mangle: {
				properties: {
					regex: /^_/, // 混淆私有变量名（假设以 _ 开头）
				},
			},
			format: {
				comments: false, // 删除注释
			},
		},
		// 多入口时，请将此选项设置为true
		cssCodeSplit: true,
		outDir: 'dist',
		rollupOptions: {
			output: {
				// 确保所有导出的模块使用严格模式
				strict: true,
				// 输出模块类型，如：amd、cjs、esm、iife、umd
				format: 'iife',
				// 保持目录结构
				dir: 'dist',
				entryFileNames: ({ name }) => (name === 'index' ? '[name].js' : `${name}/index.js`),
				chunkFileNames: '[name]/[name].js',
				assetFileNames: '[name]/[name].[ext]',
			},
		},
	},
}
export default config
