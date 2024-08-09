// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'
import type { UserConfig } from 'unocss'

const config: UserConfig = defineConfig({
	content: {
		pipeline: {
			exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'stats.html'],
		},
	},
	// 因为图标不能动态加载，所以你在你的项目中把会动态加载的图标都写在这个配置里面，一般和你的路由是对应的
	// safelist: [],
	// 快捷方式，可让你将多个规则组合成一个简写，比如：red': 'text-red-100',
	shortcuts: {
		'wh-full': 'w-full h-full',
		'flex-center': 'flex justify-center items-center',
		'flex-col-center': 'flex-center flex-col',
		'flex-x-center': 'flex justify-center',
		'flex-y-center': 'flex items-center',
		'i-flex-center': 'inline-flex justify-center items-center',
		'i-flex-x-center': 'inline-flex justify-center',
		'i-flex-y-center': 'inline-flex items-center',
		'flex-col': 'flex flex-col',
		'flex-col-stretch': 'flex-col items-stretch',
		'i-flex-col': 'inline-flex flex-col',
		'i-flex-col-stretch': 'i-flex-col items-stretch',
		'flex-1-hidden': 'flex-1 overflow-hidden',
		'absolute-lt': 'absolute left-0 top-0',
		'absolute-lb': 'absolute left-0 bottom-0',
		'absolute-rt': 'absolute right-0 top-0',
		'absolute-rb': 'absolute right-0 bottom-0',
		'absolute-tl': 'absolute-lt',
		'absolute-tr': 'absolute-rt',
		'absolute-bl': 'absolute-lb',
		'absolute-br': 'absolute-rb',
		'absolute-center': 'absolute-lt flex-center wh-full',
		'fixed-lt': 'fixed left-0 top-0',
		'fixed-lb': 'fixed left-0 bottom-0',
		'fixed-rt': 'fixed right-0 top-0',
		'fixed-rb': 'fixed right-0 bottom-0',
		'fixed-tl': 'fixed-lt',
		'fixed-tr': 'fixed-rt',
		'fixed-bl': 'fixed-lb',
		'fixed-br': 'fixed-rb',
		'fixed-center': 'fixed-lt flex-center wh-full',
		'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
		'ellipsis-text': 'nowrap-hidden text-ellipsis',
		'page-card': 'flex-col overflow-hidden p-5 rounded color-text bg-card',
		'transition-base': 'transition-all duration-300 ease-in-out',
	},
	theme: {
		colors: {
			primary: 'var(--el-color-primary)',
			primary_dark: 'var(--el-color-primary-light-5)',
			info: 'var(--el-color-info)',
			success: 'var(--el-color-success)',
			warning: 'var(--el-color-warning)',
			error: 'var(--el-color-error)',
			fill: 'var(--el-fill-color-darker)',
			text: 'var(--el-text-color-primary)',
			card: 'var(--el-bg-color-overlay)',
			background: 'var(--el-bg-color)',
			borderColor: 'var(--el-border-color-lighter)',
		},
	},
	// 预设
	presets: [
		/**
		 * https://unocss.dev/presets/uno#installation
		 * UnoCSS 的默认预设，此预设尝试提供流行的实用程序优先框架的通用超集，例如，ml-3(Tailwind CSS)、ms-2(Bootstrap)、ma4(Tachyons) 和mt-10px(Windi CSS) 均有效。
		 */
		presetUno({ dark: 'class' }),
		/**
		 * https://unocss.dev/presets/attributify
		 * 属性模式；text-sm text-white可以写为text="sm white"，而无需重复相同的前缀
		 */
		presetAttributify(),
		/**
		 * 对 UnoCSS 使用纯 CSS 的任何图标。
		 * 此预设提供了一个图标预设，用于将图标类名转换为图标。
		 */
		presetIcons({
			// 用 dynamic imports 提供集合，以便它们将作为异步块打包器并按需加载。
			collections: {
				// 引入下载的第三方图标
				// mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default),
				/**
				 * 把自己的svg文件转换为class，这里的my-icon名称随便取，使用的时候通过i-my-icon-[filename]。
				 */
				// 'my-icon': FileSystemIconLoader('./src/assets/svg', (svg) => svg.replace(/#fff/, 'currentColor')),
			},
		}),
		/**
		 * https://unocss.nodejs.cn/presets/typography
		 * 提供一组散文类，可用于将排版默认值添加到普通 HTML
		 */
		presetTypography(),
		/**
		 * https://unocss.nodejs.cn/presets/web-fonts
		 * 网页字体预设，只需提供字体名称即可使用 谷歌字体、FontShare 中的网络字体
		 */
		presetWebFonts(),
	],
	// 转换器
	transformers: [
		/**
		 * https://unocss.nodejs.cn/transformers/directives
		 * 可以使用适用于 @apply、@screen 和 theme() 指令的 UnoCSS 转换器
		 */
		transformerDirectives(),
		transformerVariantGroup(),
	],
})
export default config
