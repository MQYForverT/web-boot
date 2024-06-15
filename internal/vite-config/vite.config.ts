import { UserConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

const getPath = (path: string): string => {
	return resolve(__dirname, path)
}

const entries = {
	common: getPath('common/index.ts'),
	plugin: getPath('common/plugins/index.ts'),
	vue: getPath('vue/index.ts'),
	react: getPath('react/index.ts'),
}
// import viteConfig from '@mqy/vite-config/vue'

// 目前不支持动态导入ts问价，将等到开箱即用的解决方案，然后将相对路径替换为包名称
// import { setupViteTest } from '../../internal/vite-config/common/vitest'

// https://vitejs.dev/config/
const config: UserConfig = {
	plugins: [
		dts({
			outDir: 'dist', // 输出 .d.ts 文件的目录
			// 如果有d.ts文件，直接复制过去
			copyDtsFiles: true,
		}),
	],
	build: {
		lib: {
			entry: entries, // 设置入口文件
			name: 'MqyViteConfig',
			fileName: (_, entryName) => `${entryName}/index.js`,
			formats: ['es'],
		},
		rollupOptions: {
			external: 'vite',
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vite: 'vite',
				},
			},
		},
		outDir: 'dist',
	},
}
export default config
