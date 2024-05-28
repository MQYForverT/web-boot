import type { BuildOptions } from 'vite'

export function setupViteBuild(): BuildOptions {
	return {
		outDir: 'dist',
		minify: 'esbuild',
		chunkSizeWarningLimit: 500,
		// https://rollupjs.org/configuration-options/
		rollupOptions: {
			output: {
				// Static resource classification and packaging
				chunkFileNames: 'assets/js/[name]-[hash].js', //代码块文件名
				entryFileNames: 'assets/js/[name]-[hash].js', //入口文件名
				assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 资源文件名
				// 把组件按组分块
				// https://rollupjs.org/guide/en/#outputmanualchunks
				manualChunks(id) {
					if (id.includes('node_modules')) {
						//使用pnpm打包
						return id.toString().split('node_modules/')[2].split('/')[0].toString()
					}
				},
			},
		},
	}
}
