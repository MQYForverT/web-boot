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
		interface containerSize {
			height: string
			width: string
		}
		// 下拉菜单
		interface DropdownMenu {
			key: string
			value: string
			divided?: boolean
		}
		interface FullScreen {
			show?: boolean
			// 传送到哪个节点下
			to?: string
		}
		interface Language {
			show?: boolean
			trigger?: 'click' | 'hover'
			to?: string
			dropdownMenu?: DropdownMenu[]
		}
		// 用户配置
		interface UserAvatar {
			show?: boolean
			trigger?: 'click' | 'hover'
			name?: string
			avatar?: string
			to?: string
			dropdownMenu?: DropdownMenu[]
		}
		interface Setting {
			// 是否启用，false，则不渲染，true则启用，启用之后用show控制是否打开
			enable?: boolean
			title?: string
		}
	}
}
// 使得这个文件变成一个模块
export {}
