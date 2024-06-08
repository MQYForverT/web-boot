import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default {
	plugins: [
		UnoCSS(),
		vue({
			template: {
				compilerOptions: {
					// 将所有带短横线的标签名都视为自定义元素
					isCustomElement: (tag) => tag.includes('-'),
				},
			},
		}),
		AutoImport({
			imports: ['vue'],
			vueTemplate: true,
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'), // 设置入口文件
			name: 'mqy-internal-component', // 起个名字，安装、引入用
			fileName: () => `mqy-internal-component.js`, // 打包后的文件名
			formats: ['es'],
		},
		outDir: 'dist',
	},
}
