declare global {
	namespace Layout {
		interface Menu {
			path: string
			title: string
			icon?: string
			affix?: boolean
			children?: Menu[]
		}
		/** 多页签属性 */
		interface TabsView {
			title: string
			fullPath: string
			icon?: string
			affix?: boolean
		}
	}
}
// 使得这个文件变成一个模块
export {}
