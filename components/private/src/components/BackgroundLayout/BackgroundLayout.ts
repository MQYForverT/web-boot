import type { ExtractPropTypes, ExtractPublicPropTypes, PropType, InjectionKey } from 'vue'

export enum layoutEnum {
	defaults = 'defaults',
}

export enum menuModeEnum {
	light = 'light',
	dark = 'dark',
}

export enum animationEnum {
	zoomFade = 'zoom-fade',
	fadeSlide = 'fade-slide',
	fade = 'fade',
	fadeBottom = 'fade-bottom',
	fadeScale = 'fade-scale',
}

export enum propsEnum {
	// 设置按钮是否可见
	settingVisible = 'settingVisible',
	// 当前是否是移动端，移动端的判断交给外部，如果不传，则判断逻辑交给内部
	isMobile = 'isMobile',
	// 当前是否暗黑模式【内部逻辑属性】
	isDark = 'isDark',
	// 当前主题颜色【内部逻辑属性】
	themeColor = 'themeColor',
	// 菜单栏模式【内部逻辑属性】
	menuMode = 'menuMode',
	/**
	 * 界面设置
	 */
	// 激活的path
	defaultActivePath = 'defaultActivePath',
	// 菜单数组
	menuList = 'menuList',
	// 是否折叠菜单，判断交给外部，如果不传，则判断逻辑交给内部【内部逻辑属性】
	isCollapse = 'isCollapse',
	// 是否默认全部展开【内部逻辑属性】
	isAllOpen = 'isAllOpen',
	// 是否开启菜单手风琴效果【内部逻辑属性】
	isUniqueOpened = 'isUniqueOpened',
	// 是否开启固定 Header【内部逻辑属性】
	isFixedHeader = 'isFixedHeader',
	// 是否开启面包屑【内部逻辑属性】
	isBreadcrumb = 'isBreadcrumb',
	/**
	 * header设置
	 */
	// 是否开启全屏功能
	isFullScreen = 'isFullScreen',
	// 多语言配置
	language = 'language',
	// 当前激活的语言
	activeLanguage = 'activeLanguage',
	// 用户配置
	userAvatar = 'userAvatar',
	// 是否开启 Tagsview【内部逻辑属性】
	isTagsView = 'isTagsView',
	// 是否开启 Tagsview图标【内部逻辑属性】
	isTagsViewIcon = 'isTagsViewIcon',
	// tag数量
	tagsShowNum = 'tagsShowNum',
	// 是否开启 TagsView 缓存
	isCacheTagsView = 'isCacheTagsView',
	// 是否开启 水印
	isWatermark = 'isWatermark',
	// 水印文字
	watermarkText = 'watermarkText',
	/**
	 * 其它设置
	 */
	// 主页面切换动画：可选值"<zoom-fade|fade-slide|fade|fade-bottom|fade-scale>"，默认 zoom-fade【内部逻辑属性】
	animation = 'zoom-fade',
	// 布局【内部逻辑属性】
	layout = 'layout',
	// 主标题
	globalTitle = 'globalTitle',
	// 副标题
	globalViceTitle = 'globalViceTitle',
	// 是否显示底部注册、公司信息
	isFooter = 'isFooter',
	// 公司名字
	footerCompany = 'footerCompany',
	// 公司备案信息
	footerRecord = 'footerRecord',
}

// 为了兼容wc，设置可以传入字符串，然后去做转换
export const layoutProps = {
	[propsEnum.settingVisible]: {
		type: [Boolean, String],
		default: true,
	},
	[propsEnum.isMobile]: {
		type: [Boolean, String],
		default: undefined,
	},
	[propsEnum.isDark]: {
		type: [Boolean, String],
		default: false,
	},
	[propsEnum.themeColor]: {
		type: String,
		default: '',
	},
	[propsEnum.menuMode]: {
		type: String as PropType<menuModeEnum>,
		default: menuModeEnum.light,
	},
	[propsEnum.defaultActivePath]: {
		type: String,
		default: '',
	},
	[propsEnum.menuList]: {
		type: [Array, String] as PropType<Layout.Menu[] | string>,
		default: '[]',
	},
	[propsEnum.isCollapse]: {
		type: [Boolean, String],
		default: undefined,
	},
	[propsEnum.isAllOpen]: {
		type: [Boolean, String],
		default: true,
	},
	[propsEnum.isUniqueOpened]: {
		type: [Boolean, String],
		default: false,
	},
	[propsEnum.isFixedHeader]: {
		type: [Boolean, String],
		default: true,
	},
	[propsEnum.isBreadcrumb]: {
		type: [Boolean, String],
		default: true,
	},
	[propsEnum.isFullScreen]: {
		type: [Boolean, String],
		default: true,
	},
	[propsEnum.language]: {
		type: [Object, String] as PropType<Layout.Language | string>,
		default: '{}',
	},
	[propsEnum.activeLanguage]: {
		type: String,
		default: '',
	},
	[propsEnum.userAvatar]: {
		type: [Object, String] as PropType<Layout.UserAvatar | string>,
		default: '{}',
	},
	[propsEnum.isTagsView]: {
		type: [Boolean, String],
		default: false,
	},
	[propsEnum.isTagsViewIcon]: {
		type: [Boolean, String],
		default: false,
	},
	[propsEnum.tagsShowNum]: {
		type: [Number, String],
		default: 1,
	},
	[propsEnum.isCacheTagsView]: {
		type: [Boolean, String],
		default: false,
	},
	[propsEnum.isWatermark]: {
		type: [Boolean, String],
		default: false,
	},
	[propsEnum.watermarkText]: {
		type: String,
		default: '漠轻阴',
	},
	[propsEnum.animation]: {
		type: String as PropType<animationEnum>,
		default: animationEnum.zoomFade,
	},
	[propsEnum.layout]: {
		type: String as PropType<layoutEnum>,
		default: layoutEnum.defaults,
	},
	[propsEnum.globalTitle]: {
		type: String,
		default: 'WebBoot',
	},
	[propsEnum.globalViceTitle]: {
		type: String,
		default: '漠轻阴',
	},
	[propsEnum.isFooter]: {
		type: [Boolean, String],
		default: true,
	},
	[propsEnum.footerCompany]: {
		type: String,
		default: '漠轻阴（郁金香）能力不大且实力有限公司',
	},
	[propsEnum.footerRecord]: {
		type: String,
		default: '京ICP备17012835号-1',
	},
}
// --------props----------
// 得到私有类型
export type LayoutPrivateProps = ExtractPropTypes<typeof layoutProps>

// --------emits----------分步判断change类型
/**
 * keyof layoutProps为layoutProps 的所有键（属性名）的联合类型，则定义一个范型T继承它，代表传入的必须是其中一项，
 * 如果是其中一项，则返回正常的，否则返回never，这意味着对于不符合，个类型将会被视为无效。
 */
type InferArray<T extends keyof LayoutPrivateProps> = T extends keyof LayoutPrivateProps
	? [T, LayoutPrivateProps[T]]
	: never
export type LayoutEmits = {
	(evt: 'changeProp', ...args: InferArray<keyof LayoutPrivateProps>): void
	(evt: 'selectMenu' | 'commandUser', ...args: [string]): void
}

export const emitsKey = Symbol() as InjectionKey<LayoutEmits>

// ---------因为是web component，所以对外的类型都是基本类型
export type LayoutPublicProps = ExtractPublicPropTypes<typeof layoutProps>

// 排除掉string类型
type propPrecessType = {
	[K in keyof LayoutPrivateProps]: LayoutPrivateProps[K] extends string
		? string
		: Exclude<LayoutPrivateProps[K], string>
}
// 定义注入键
export const propsKey = Symbol() as InjectionKey<propPrecessType>

// 转换类型映射
export const processPropType = (props: LayoutPrivateProps) => {
	return new Proxy(props, {
		get(target, propKey, receiver) {
			const value = Reflect.get(target, propKey, receiver)
			switch (propKey) {
				case propsEnum.settingVisible:
				case propsEnum.isDark:
				case propsEnum.isAllOpen:
				case propsEnum.isUniqueOpened:
				case propsEnum.isFixedHeader:
				case propsEnum.isBreadcrumb:
				case propsEnum.isFullScreen:
				case propsEnum.language:
				case propsEnum.userAvatar:
				case propsEnum.isTagsView:
				case propsEnum.isTagsViewIcon:
				case propsEnum.isCacheTagsView:
				case propsEnum.isWatermark:
				case propsEnum.isFooter:
				case propsEnum.menuList:
				case propsEnum.tagsShowNum:
					return JSON.parse(value)
				case propsEnum.isCollapse:
				case propsEnum.isMobile:
					if (value !== undefined) {
						return JSON.parse(value)
					} else {
						return value
					}
			}
			return value
		},
	}) as propPrecessType
}
