import type { PluginOption } from 'vite'
import UnoCSS from 'unocss/vite'
import compress from './compress' //压缩工具
import visualizer from './visualizer' //打包分析
import progress from 'vite-plugin-progress' //打包进度显示
import removeConsole from './removeConsole'

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function commonVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
	const plugins = [
		UnoCSS(),
		// https://github.com/antfu/unocss
		// see unocss.config.ts for config
		progress(),
		process.env.NODE_ENV === 'production' && removeConsole,
	]
	if (viteEnv.VITE_COMPRESS === 'Y') {
		plugins.push(compress(viteEnv))
	}
	if (viteEnv.VITE_VISUALIZER === 'Y') {
		plugins.push(visualizer)
	}
	return plugins
}
