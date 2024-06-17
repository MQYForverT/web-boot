import dts from 'vite-plugin-dts'

interface Option {
	include?: string[]
	exclude?: string[]
}

export default (option: Option) => {
	return dts({
		outDir: 'dist', // 输出 .d.ts 文件的目录
		include: option.include,
		exclude: option.exclude,
		// 如果有d.ts文件，直接复制过去
		copyDtsFiles: true,
	})
}
