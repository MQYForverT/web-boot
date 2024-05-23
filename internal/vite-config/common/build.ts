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
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
				// 把组件按组分块
				// https://rollupjs.org/guide/en/#outputmanualchunks
				// manualChunks: {
				// 	'group-user': ['./src/UserDetails', './src/UserDashboard', './src/UserProfileEdit'],
				// },
			},
		},
	}
}
