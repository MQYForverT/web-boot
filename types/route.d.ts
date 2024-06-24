import type { RouteComponent, RouteMeta } from 'vue-router'
declare global {
	namespace Menu {
		interface MenuOptions {
			path: string
			name: string
			component?: RouteComponent | (() => Promise<RouteComponent>) | undefined | null
			redirect?: string
			meta?: MetaProps
			children: MenuOptions[]
		}
		interface MetaProps extends RouteMeta {
			//菜单栏及 tagsView 栏、
			title?: string
			//菜单图标，图标来源unocss预设，你项目中用的是哪一种预设，就请在配置文件中添加该预设
			icon?: string
			//是否超链接菜单，开启外链条件，`1、isLink: 链接地址不为空`
			isLink?: string
			//该组件是否隐藏，如果是，则不会出现在菜单中。通常是操作页面等不需要展示在菜单的页面，和isViewRouter同值
			isHide?: boolean
			// 该组件是否是菜单路由，有的时候，新增会进入一个页面，这个页面不需要展示在菜单中，则设置这个为false
			isViewRouter?: boolean
			// 该组件是否是菜单，是则会出现在菜单，通常和isKeepAlive同值
			isMenu?: boolean
			// 组件是否缓存
			isKeepAlive?: boolean
			// 组件是否固定。是则会默认出现在tagView，且不能关闭。如果组件都不固定，系统会取第一个菜单默认固定。
			isAffix?: boolean
			// 该组件是否内嵌窗口，开启条件，`1、isIframe:true 2、isLink：链接地址不为空
			isIframe?: boolean
			// 该菜单是否需要显示fotter
			isShowFooter?: boolean
		}

		interface permissionMenu {
			permission: string
			sort?: number
			children?: permissionMenu[]
		}
	}
}
