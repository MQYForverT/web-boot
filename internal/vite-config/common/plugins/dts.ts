import dts from 'vite-plugin-dts'
import type { PluginOptions } from 'vite-plugin-dts'

export default (option: PluginOptions) => {
	return dts({
		outDir: 'dist', // 输出 .d.ts 文件的目录
		// 如果有d.ts文件，直接复制过去
		copyDtsFiles: true,
		...option,
	})
}
