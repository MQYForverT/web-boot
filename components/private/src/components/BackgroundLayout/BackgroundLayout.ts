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
	// 容器大小
	containerSize = 'containerSize',
	// 设置菜单显示与否，需要把setting.enable设置为true
	settingVisible = 'settingVisible',
	// 是否启用设置菜单，形式是抽屉，怎么触发的自己定义
	setting = 'setting',
	// 当前是否是移动端，移动端的判断交给外部，如果不传，则判断逻辑交给内部
	isMobile = 'isMobile',
	// 当前是否暗黑模式【内部逻辑属性】
	isDark = 'isDark',
	// 菜单栏模式【内部逻辑属性】
	menuMode = 'menuMode',
	/**
	 * 界面设置
	 */
	// 激活的path
	activePath = 'activePath',
	// 激活的tags
	activeTags = 'activeTags',
	// 菜单数组
	menuList = 'menuList',
	// 是否折叠菜单，判断交给外部，如果不传，则判断逻辑交给内部【内部逻辑属性】
	isCollapse = 'isCollapse',
	// 是否默认全部展开【内部逻辑属性】
	isAllOpen = 'isAllOpen',
	// 是否开启菜单手风琴效果【内部逻辑属性】
	isUniqueOpened = 'isUniqueOpened',
	// 是否开启面包屑【内部逻辑属性】
	isBreadcrumb = 'isBreadcrumb',
	/**
	 * header设置
	 */
	// 全屏功能配置
	fullScreen = 'fullScreen',
	// 多语言配置
	language = 'language',
	// 当前激活的语言
	activeLanguage = 'activeLanguage',
	// 用户配置
	userAvatar = 'userAvatar',
	// 是否开启 TagsView【内部逻辑属性】
	isTagsView = 'isTagsView',
	// 是否开启 TagsView图标【内部逻辑属性】
	isTagsViewIcon = 'isTagsViewIcon',
	// 是否开启 TagsView 缓存
	isCacheTagsView = 'isCacheTagsView',
	// 是否开启 水印
	isWatermark = 'isWatermark',
	// 水印文字
	watermarkText = 'watermarkText',
	/**
	 * 其它设置
	 */
	// 主页面切换动画：【内部逻辑属性】
	// 可选值"<zoom-fade|fade-slide|fade|fade-bottom|fade-scale>"，默认 zoom-fade
	animation = 'animation',
	// 布局
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
	[propsEnum.containerSize]: {
		type: [Object, String] as PropType<Layout.containerSize | string>,
		default: '{}',
	},
	[propsEnum.settingVisible]: {
		type: [Boolean, String],
		default: false,
	},
	[propsEnum.setting]: {
		type: [Object, String] as PropType<Layout.Setting | string>,
		default: '{}',
	},
	[propsEnum.isMobile]: {
		type: [Boolean, String],
		default: undefined,
	},
	[propsEnum.isDark]: {
		type: [Boolean, String],
		default: undefined,
	},
	[propsEnum.menuMode]: {
		type: String as PropType<menuModeEnum>,
		default: undefined,
	},
	[propsEnum.activePath]: {
		type: String,
		default: undefined,
	},
	[propsEnum.activeTags]: {
		type: [Array, String] as PropType<Layout.Menu[] | string>,
		default: undefined,
	},
	[propsEnum.menuList]: {
		type: [Array, String] as PropType<Layout.Menu[] | string>,
		default: '[]',
		required: true,
	},
	[propsEnum.isCollapse]: {
		type: [Boolean, String],
		default: undefined,
	},
	[propsEnum.isAllOpen]: {
		type: [Boolean, String],
		default: undefined,
	},
	[propsEnum.isUniqueOpened]: {
		type: [Boolean, String],
		default: undefined,
	},
	[propsEnum.isBreadcrumb]: {
		type: [Boolean, String],
		default: undefined,
	},
	[propsEnum.fullScreen]: {
		type: [Object, String] as PropType<Layout.FullScreen | string>,
		default: '{}',
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
		default: undefined,
	},
	[propsEnum.isTagsViewIcon]: {
		type: [Boolean, String],
		default: undefined,
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
		default: undefined,
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
export type LayoutEmits = {
	<T extends keyof LayoutPrivateProps>(evt: 'changeProp', ...args: [T, LayoutPrivateProps[T]]): void
	(evt: 'selectMenu' | 'commandUser' | 'tagRefresh', ...args: [string]): void
}

export const emitsKey = Symbol() as InjectionKey<LayoutEmits>

export type LayoutPublicProps = ExtractPublicPropTypes<typeof layoutProps>

// 排除掉string类型
export type propPrecessType = {
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
				case propsEnum.containerSize:
				case propsEnum.settingVisible:
				case propsEnum.setting:
				case propsEnum.fullScreen:
				case propsEnum.language:
				case propsEnum.userAvatar:
				case propsEnum.isCacheTagsView:
				case propsEnum.isWatermark:
				case propsEnum.isFooter:
				case propsEnum.menuList:
					return JSON.parse(value)
				// 以下是外部可控属性，如果外部传入值，则交给外部控制
				case propsEnum.isCollapse:
				case propsEnum.isMobile:
				case propsEnum.isDark:
				case propsEnum.menuMode:
				case propsEnum.isAllOpen:
				case propsEnum.isUniqueOpened:
				case propsEnum.isBreadcrumb:
				case propsEnum.activeTags:
				case propsEnum.isTagsView:
				case propsEnum.isTagsViewIcon:
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
