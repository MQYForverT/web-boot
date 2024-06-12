export enum LayoutType {
	defaults = 'defaults',
}
export interface BackgroundLayoutProps {
	/* 界面设置 ------------------------------- */
	// 是否开启菜单水平折叠效果
	isCollapse: boolean
	// 是否默认全部展开
	isAllOpen: boolean
	// 是否开启菜单完全隐藏
	isClassicSplitMenu: boolean
	// 是否开启菜单手风琴效果
	isUniqueOpened: boolean
	// 是否开启固定 Header
	isFixedHeader: boolean

	/* 界面显示------------------------------- */
	// 是否开启侧边栏 Logo
	isShowLogo: boolean
	// 初始化变量，用于 el-scrollbar 的高度更新，请勿删除
	isShowLogoChange: boolean
	// 是否开启 Breadcrumb
	isBreadcrumb: boolean
	// 是否开启 TagsView
	isTagsView: boolean
	// 是否开启 Breadcrumb 图标
	isBreadcrumbIcon: boolean
	// 是否开启 TagsView 图标
	isTagsViewIcon: boolean
	// 是否开启 TagsView 缓存
	isCacheTagsView: boolean
	// 是否开启 TagsView 拖拽
	isSortableTagsView: boolean
	// 是否开启水印
	isWatermark: boolean
	// 水印文案
	watermarkText: string

	/* 其它设置------------------------------- */
	// 默认 TagsView 风格，可选 1、2、3、4
	tagsShowNum: 1 | 2 | 3 | 4
	// 默认分栏高亮风格，可选 1、 圆角 columns-round 2、 卡片 columns-card
	columnsAsideStyle: string

	/* 布局切换------------------------------- */
	// 默认布局，当前只有 defaults
	layout: LayoutType
	/* 全局网站标题 / 副标题------------------------------- */
	// 网站主标题（菜单导航、浏览器当前网页标题）
	globalTitle: string
	// 网站副标题（登录页顶部文字）
	globalViceTitle: string
	// 是否开启 Footer 底部版权信息
	isFooter: boolean
	footerCompany: string
	footerRecord: string
}

export const defaultBackgroundLayout: BackgroundLayoutProps = {
	/* 界面设置
            ------------------------------- */
	// 是否开启菜单水平折叠效果
	isCollapse: false,
	// 是否默认全部展开
	isAllOpen: true,
	// 是否开启菜单完全隐藏
	isClassicSplitMenu: false,
	// 是否开启菜单手风琴效果
	isUniqueOpened: false,
	// 是否开启固定 Header
	isFixedHeader: true,

	/* 界面显示
            ------------------------------- */
	// 是否开启侧边栏 Logo
	isShowLogo: true,
	// 初始化变量，用于 el-scrollbar 的高度更新，请勿删除
	isShowLogoChange: false,
	// 是否开启 Breadcrumb
	isBreadcrumb: true,
	// 是否开启 TagsView
	isTagsView: false,
	// 是否开启 Breadcrumb 图标
	isBreadcrumbIcon: false,
	// 是否开启 TagsView 图标
	isTagsViewIcon: false,
	// 是否开启 TagsView 缓存
	isCacheTagsView: false,
	// 是否开启 TagsView 拖拽
	isSortableTagsView: true,
	// 是否开启水印
	isWatermark: false,
	// 水印文案
	watermarkText: '漠轻阴',

	/* 其它设置
            ------------------------------- */
	// 默认 TagsView 风格，可选 1、 2、3、4
	tagsShowNum: 1,
	// 默认分栏高亮风格，可选 1、 圆角 columns-round 2、 卡片 columns-card
	columnsAsideStyle: 'columns-round',

	/* 布局切换
            ------------------------------- */
	// 默认布局，当前只有 defaults
	layout: LayoutType.defaults,
	/* 全局网站标题 / 副标题
            ------------------------------- */
	// 网站主标题（菜单导航、浏览器当前网页标题）
	globalTitle: 'WebBoot',
	// 网站副标题（登录页顶部文字）
	globalViceTitle: '漠轻阴',
	// 是否开启 Footer 底部版权信息
	isFooter: true,
	footerCompany: '漠轻阴（郁金香）能力不大且实力有限公司',
	footerRecord: '京ICP备17012835号-1',
}

type GenerateEmits<T> = {
	[K in keyof T as `update:${K & string}`]: [val: T[K]]
}

export type BackgroundLayoutEvent = GenerateEmits<BackgroundLayoutProps>
