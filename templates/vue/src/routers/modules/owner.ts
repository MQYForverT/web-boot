import type { RouteComponent } from 'vue-router'

export const menuList: Menu.MenuOptions<RouteComponent>[] = [
	{
		path: '/home',
		name: 'home',
		meta: {
			title: '首页',
			isKeepAlive: true,
		},
		component: () => import('@/pages/Home/index.vue'),
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
						component: () => import('@/pages/Menu/Menu1/Menu11/index.vue'),
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
				component: () => import('@/pages/Menu/Menu2/index.vue'),
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
				component: () => import('@/pages/Menu/Menu3/index.vue'),
			},
		],
	},
]
