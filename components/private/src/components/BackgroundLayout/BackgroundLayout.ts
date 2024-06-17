import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export enum LayoutType {
	defaults = 'defaults',
	space = 'space', // 空间布局，尽可能多多显示主页面
}

export enum propsEnum {
	// 是否开启菜单水平折叠效果
	isCollapse = 'isCollapse',
	// 是否默认全部展开
	isAllOpen = 'isAllOpen',
	// 是否开启菜单手风琴效果
	isUniqueOpened = 'isUniqueOpened',
	// 是否开启固定 Header
	isFixedHeader = 'isFixedHeader',
	// 是否开启侧边栏 Logo
	isShowLogo = 'isShowLogo',
	// 是否开启 Breadcrumb
	isBreadcrumb = 'isBreadcrumb',
	// 是否开启 Tagsview
	isTagsView = 'isTagsView',
	// 是否开启 Tagsview图标
	isTagsViewIcon = 'isTagsViewIcon',
	// tag数量
	tagsShowNum = 'tagsShowNum',
	// 是否开启 Breadcrumb图标
	isBreadcrumbIcon = 'isBreadcrumbIcon',
	// 是否开启 TagsView 缓存
	isCacheTagsView = 'isCacheTagsView',
	// 是否开启 TagsView 托拽
	isSortableTagsView = 'isSortableTagsView',
	// 是否开启 水印
	isWatermark = 'isWatermark',
	// 水印文字
	watermarkText = 'watermarkText',
	// 默认分栏高亮风格，可选 1、 圆角 columns-round 2、 卡片 columns-card
	columnsAsideStyle = 'columnsAsideStyle',
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

export const layoutProps = {
	[propsEnum.isCollapse]: {
		type: Boolean,
		default: false,
	},
	[propsEnum.isAllOpen]: {
		type: Boolean,
		default: true,
	},
	[propsEnum.isUniqueOpened]: {
		type: Boolean,
		default: false,
	},
	[propsEnum.isFixedHeader]: {
		type: Boolean,
		default: true,
	},
	[propsEnum.isShowLogo]: {
		type: Boolean,
		default: true,
	},
	[propsEnum.isBreadcrumb]: {
		type: Boolean,
		default: true,
	},
	[propsEnum.isTagsView]: {
		type: Boolean,
		default: false,
	},
	[propsEnum.isBreadcrumbIcon]: {
		type: Boolean,
		default: false,
	},
	[propsEnum.isTagsViewIcon]: {
		type: Boolean,
		default: false,
	},
	[propsEnum.isCacheTagsView]: {
		type: Boolean,
		default: false,
	},
	[propsEnum.isSortableTagsView]: {
		type: Boolean,
		default: true,
	},
	[propsEnum.isWatermark]: {
		type: Boolean,
		default: false,
	},
	[propsEnum.watermarkText]: {
		type: String,
		default: '漠轻阴',
	},
	[propsEnum.tagsShowNum]: {
		type: Number,
		default: 1,
	},
	[propsEnum.columnsAsideStyle]: {
		type: String,
		default: 'columns-round',
	},
	[propsEnum.layout]: {
		type: String as () => LayoutType,
		default: LayoutType.defaults,
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
		type: Boolean,
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
export type LayoutPublicProps = ExtractPublicPropTypes<typeof layoutProps>
export type layoutProps = ExtractPropTypes<typeof layoutProps>
// 定义注入键
export const propsKey = Symbol() as InjectionKey<layoutProps>

// --------emits----------分步判断change类型
/**
 * keyof layoutProps为layoutProps 的所有键（属性名）的联合类型，则定义一个范型T继承它，代表传入的必须是其中一项，
 * 如果是其中一项，则返回正常的，否则返回never，这意味着对于不符合，个类型将会被视为无效。
 */
type InferArray<T extends keyof layoutProps> = T extends keyof layoutProps ? [T, layoutProps[T]] : never
export type LayoutEmits = {
	changeProp: InferArray<keyof layoutProps>
}
// 定义注入键
export const emitsKey = Symbol() as InjectionKey<ReturnType<typeof defineEmits>>
