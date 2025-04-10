import { lazy } from 'react'
import type { LazyExoticComponent } from 'react'

// 路由懒加载
const lazyLoad = (path: string) => {
	const componentMap: Record<string, any> = {
		'Home/index': () => import('@/pages/Home/index'),
		'Menu/Menu1/Menu11/index': () => import('@/pages/Menu/Menu1/Menu11/index'),
		'Menu/Menu2/index': () => import('@/pages/Menu/Menu2/index'),
		'Menu/Menu3/index': () => import('@/pages/Menu/Menu3/index'),
	}

	if (!componentMap[path]) {
		console.error(`路径 ${path} 没有对应的组件`)
		return lazy(() => import('@/pages/ErrorMessage/404'))
	}

	return lazy(componentMap[path])
}

export const menuList: Menu.MenuOptions<LazyExoticComponent<any>>[] = [
	{
		path: '/home',
		name: 'home',
		meta: {
			title: '首页',
			isKeepAlive: true,
		},
		component: lazyLoad('Home/index'),
	},
	{
		path: '/menu',
		name: 'menu',
		meta: {
			icon: '',
			title: '菜单',
		},
		redirect: '/menu/menu1',
		children: [
			{
				path: '/menu/menu1',
				name: 'menu1',
				meta: {
					icon: '',
					title: '菜单1',
					isShowFooter: false,
				},
				redirect: '/menu/menu1/menu11',
				children: [
					{
						path: '/menu/menu1/menu11',
						name: 'menu11',
						meta: {
							icon: '',
							title: '菜单11',
							isShowFooter: true,
						},
						component: lazyLoad('Menu/Menu1/Menu11/index'),
					},
				],
			},
			{
				path: '/menu/menu2',
				name: 'menu2',
				meta: {
					icon: 'i-ep-tickets',
					title: '菜单2',
					isAffix: true,
					isShowFooter: true,
				},
				component: lazyLoad('Menu/Menu2/index'),
			},
			{
				path: '/menu/menu3',
				name: 'menu3',
				meta: {
					icon: 'i-ep-tickets',
					title: '菜单3',
					isAffix: true,
					isShowFooter: true,
				},
				component: lazyLoad('Menu/Menu3/index'),
			},
		],
	},
]
