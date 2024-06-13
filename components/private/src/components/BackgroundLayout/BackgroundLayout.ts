import type { ExtractPropTypes } from 'vue'

export enum LayoutType {
	defaults = 'defaults',
}

export const layoutProps = {
	isCollapse: {
		type: Boolean,
		default: false,
	},
	isAllOpen: {
		type: Boolean,
		default: true,
	},
	isClassicSplitMenu: {
		type: Boolean,
		default: false,
	},
	isUniqueOpened: {
		type: Boolean,
		default: false,
	},
	isFixedHeader: {
		type: Boolean,
		default: true,
	},
	isShowLogo: {
		type: Boolean,
		default: true,
	},
	isShowLogoChange: {
		type: Boolean,
		default: false,
	},
	isBreadcrumb: {
		type: Boolean,
		default: true,
	},
	isTagsView: {
		type: Boolean,
		default: false,
	},
	isBreadcrumbIcon: {
		type: Boolean,
		default: false,
	},
	isTagsViewIcon: {
		type: Boolean,
		default: false,
	},
	isCacheTagsView: {
		type: Boolean,
		default: false,
	},
	isSortableTagsView: {
		type: Boolean,
		default: true,
	},
	isWatermark: {
		type: Boolean,
		default: false,
	},
	watermarkText: {
		type: String,
		default: '漠轻阴',
	},
	tagsShowNum: {
		type: Number,
		default: 1,
	},
	columnsAsideStyle: {
		type: String,
		default: 'columns-round',
	},
	layout: {
		type: String as () => LayoutType,
		default: LayoutType.defaults,
	},
	globalTitle: {
		type: String,
		default: 'WebBoot',
	},
	globalViceTitle: {
		type: String,
		default: '漠轻阴',
	},
	isFooter: {
		type: Boolean,
		default: true,
	},
	footerCompany: {
		type: String,
		default: '漠轻阴（郁金香）能力不大且实力有限公司',
	},
	footerRecord: {
		type: String,
		default: '京ICP备17012835号-1',
	},
}
// --------props----------
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
	change: InferArray<keyof layoutProps>
}
// 定义注入键
export const emitsKey = Symbol() as InjectionKey<ReturnType<typeof defineEmits>>
