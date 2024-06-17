import type { PluginOption } from 'vite'
import UnoCSS from 'unocss/vite'
import compress from './compress' //压缩工具
import visualizer from './visualizer' //打包分析
import progress from 'vite-plugin-progress' //打包进度显示
/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function commonVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
	const plugins = [
		// 需要在根目录下自己创建uno.config.ts去配置
		UnoCSS(),
		// https://github.com/antfu/unocss
		// see unocss.config.ts for config
		progress(),
	]
	if (process.env.NODE_ENV === 'development') {
		plugins.push(visualizer)
	}
	plugins.push(compress(viteEnv.VITE_COMPRESS_TYPE))
	return plugins
}
