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
		// 下拉菜单
		interface DropdowMenu {
			key: string
			value: string
			divided?: boolean
		}
		interface Language {
			show?: boolean
			trigger?: 'click' | 'hover'
			dropdowMenu?: DropdowMenu[]
		}
		// 用户配置
		interface UserAvatar {
			show?: boolean
			trigger?: 'click' | 'hover'
			name?: string
			avatar?: string
			dropdowMenu?: DropdowMenu[]
		}
	}
}
// 使得这个文件变成一个模块
export {}
