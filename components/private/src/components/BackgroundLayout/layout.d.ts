declare global {
	namespace Layout {
		interface Menu {
			path: string
			title: string
			icon?: string
			// 当前菜单是否固定
			affix?: boolean
			// 重定向
			redirect?: string
			// 该菜单是否需要显示footer
			isShowFooter?: boolean
			children?: Menu[]
			fullLink?: IFandPath[]
		}

		interface IFandPath {
			path: string
			title: string
			redirect?: string
			children?: IFandPath[]
		}

		interface containerSize {
			height: string
			width: string
			style: object
		}
		interface containerBackground {
			background: string
			opacity: number
			style: object
		}
		// 下拉菜单
		interface DropdownMenu {
			key: string
			value: string
		}
		interface FullScreen {
			show?: boolean
			// 传送到哪个节点下
			to?: string
			// 间距
			gap?: string
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
		interface Watermark {
			/** 水印文字 */
			text?: string
			/** 字体，默认 `Arial` */
			fontFamily?: string
			/** 字体大小，默认 `14px` */
			size?: string
			/** 填充绘制图形的颜色 */
			color?: string
			/** 单个水印旋转，默认 `-12` */
			rotate?: number
		}
	}
}
// 使得这个文件变成一个模块
export { Layout }
