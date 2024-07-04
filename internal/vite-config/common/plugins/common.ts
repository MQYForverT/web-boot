import type { PluginOption } from 'vite'
import UnoCSS from './unocss'
import compress from './compress' //压缩工具
import visualizer from './visualizer' //打包分析
/**
 * 源码调试工具，
 * 让Vue、React等框架的开发者能够更容易地查看和理解构建过程中经过转换的源码。
 * 通过集成到Vite环境中，Inspect插件可以在浏览器的开发者工具中直接展示ES模块、CSS、甚至是编译后的模板的原始状态，
 * 极大地增强了我们在实际开发中的调试能力
 */
import inspect from './inspect'
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
		inspect(),
	]
	if (process.env.NODE_ENV === 'development') {
		plugins.push(visualizer)
	}
	plugins.push(compress(viteEnv.VITE_COMPRESS_TYPE))
	return plugins
}
