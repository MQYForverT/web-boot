import type { BuildOptions } from 'vite'
import type { InputOption, ExternalOption, GlobalsOption, ManualChunksOption } from 'rollup'
interface Option {
	entries: InputOption
	external?: ExternalOption
	outputGlobals?: GlobalsOption
	outputManualChunks?: ManualChunksOption
	minify?: boolean | 'terser' | 'esbuild'
}

/**
 * 该lib只支持多入口打包方式
 * external和outputGlobals基本上是对应的
 * @param option
 * @returns
 */
export function setupViteLib(option: Option): BuildOptions {
	return {
		// 多入口时，请将此选项设置为true
		cssCodeSplit: true,
		lib: {
			entry: option.entries, // 设置入口文件
			formats: ['es'],
		},
		// esbuild打包混淆有问题，先关闭
		minify: option.minify,
		rollupOptions: {
			// 这些模块被标记为外部依赖，不会被打包进你的库，这些依赖需要在使用你的库时自行引入
			external: option.external,
			output: {
				manualChunks: option.outputManualChunks,
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: option.outputGlobals,
				// 保持目录结构
				dir: 'dist',
				entryFileNames: ({ name }) => (name === 'index' ? '[name].js' : `${name}/index.js`),
				chunkFileNames: '[name]/[name].js',
				assetFileNames: '[name]/[name].[ext]',
			},
		},
	}
}
