import type { ExtractPropTypes, ExtractPublicPropTypes, PropType, InjectionKey } from 'vue'

export enum layoutEnum {
	defaults = 'defaults',
}

export enum animationEnum {
	slideRight = 'slide-right',
	slideLeft = 'slide-left',
	opacitys = 'opacitys',
}

export enum propsEnum {
	// 是否开启布局配置抽屉
	isDrawer = 'isDrawer',
	// 当前是否是移动端，移动端的定义交给外部
	isMobile = 'isMobile',
	/**
	 * 界面设置
	 */
	// 默认激活的path
	defaultActivePath = 'defaultActivePath',
	// 菜单数组
	menuList = 'menuList',
	// 是否折叠菜单
	isCollapse = 'isCollapse',
	// 是否默认全部展开
	isAllOpen = 'isAllOpen',
	// 是否开启菜单手风琴效果
	isUniqueOpened = 'isUniqueOpened',
	// 是否开启固定 Header
	isFixedHeader = 'isFixedHeader',
	// 是否开启侧边栏
	isShowSidebar = 'isShowSidebar',
	// 是否开启面包屑
	// 是否开启 Breadcrumb
	isBreadcrumb = 'isBreadcrumb',
	// 是否开启 Breadcrumb图标
	isBreadcrumbIcon = 'isBreadcrumbIcon',
	// 是否开启 Tagsview
	isTagsView = 'isTagsView',
	// 是否开启 Tagsview图标
	isTagsViewIcon = 'isTagsViewIcon',
	// tag数量
	tagsShowNum = 'tagsShowNum',
	// 是否开启 TagsView 缓存
	isCacheTagsView = 'isCacheTagsView',
	// 是否开启 TagsView 托拽
	isSortableTagsView = 'isSortableTagsView',
	// 是否开启 TagsView 共用
	isShareTagsView = 'isShareTagsView',
	// 是否开启 水印
	isWatermark = 'isWatermark',
	// 水印文字
	watermarkText = 'watermarkText',
	/**
	 * 其它设置
	 */
	// 默认分栏高亮风格，可选 1、 圆角 columns-round 2、 卡片 columns-card
	columnsAsideStyle = 'columnsAsideStyle',
	// 主页面切换动画：可选值"<slide-right|slide-left|opacitys>"，默认 slide-right
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
	[propsEnum.isDrawer]: {
		type: [Boolean, String],
		default: true,
	},
	[propsEnum.isMobile]: {
		type: [Boolean, String],
		default: false,
	},
	[propsEnum.defaultActivePath]: {
		type: String,
		default: '',
	},
	[propsEnum.menuList]: {
		type: [Array, String] as PropType<Menu.MenuOptions[] | string>,
		default: () => [],
	},
	[propsEnum.isCollapse]: {
		type: [Boolean, String],
		default: false,
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
	[propsEnum.isBreadcrumbIcon]: {
		type: [Boolean, String],
		default: false,
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
	[propsEnum.isSortableTagsView]: {
		type: [Boolean, String],
		default: true,
	},
	[propsEnum.isShareTagsView]: {
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
	[propsEnum.columnsAsideStyle]: {
		type: String,
		default: 'columns-round',
	},
	[propsEnum.animation]: {
		type: String as PropType<animationEnum>,
		default: animationEnum.slideRight,
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

// 定义注入键
export const propsKey = Symbol() as InjectionKey<LayoutPrivateProps>

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
}

export const emitsKey = Symbol() as InjectionKey<LayoutEmits>

// ---------因为是web component，所以对外的类型都是基本类型
export type LayoutPublicProps = ExtractPublicPropTypes<typeof layoutProps>

// 转换类型映射
export const processPropType = (props: LayoutPrivateProps) => {
	return new Proxy(props, {
		get(target, propKey, receiver) {
			const value = Reflect.get(target, propKey, receiver)
			switch (propKey) {
				case propsEnum.isDrawer:
				case propsEnum.isMobile:
				case propsEnum.isCollapse:
				case propsEnum.isAllOpen:
				case propsEnum.isUniqueOpened:
				case propsEnum.isFixedHeader:
				case propsEnum.isBreadcrumb:
				case propsEnum.isBreadcrumbIcon:
				case propsEnum.isTagsView:
				case propsEnum.isTagsViewIcon:
				case propsEnum.isCacheTagsView:
				case propsEnum.isSortableTagsView:
				case propsEnum.isShareTagsView:
				case propsEnum.isWatermark:
				case propsEnum.isFooter:
				case propsEnum.menuList:
				case propsEnum.tagsShowNum:
					return JSON.parse(value)
			}
			return value
		},
	})
}
