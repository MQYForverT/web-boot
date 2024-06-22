export const menuList = [
	{
		path: '/',
		meta: {
			icon: 'i-mdi-alarm',
			title: '首页',
			isMenu: true,
			isViewRouter: false,
		},
		children: [
			{
				path: '/home1',
				meta: {
					icon: 'mdi mdi-account',
					title: '首页1',
					isMenu: true,
					isViewRouter: false,
				},
			},
			{
				path: '/home2',
				meta: {
					icon: 'mdi mdi-account',
					title: '首页2',
					isMenu: true,
					isViewRouter: false,
				},
			},
		],
	},
	{
		path: '/menu',
		meta: {
			icon: 'mdi mdi-account',
			title: '菜单',
			isMenu: true,
			isViewRouter: false,
		},
		children: [
			{
				path: '/menu1',
				meta: {
					icon: 'mdi mdi-account',
					title: '菜单1',
					isMenu: true,
					isViewRouter: false,
				},
			},
			{
				path: '/menu2',
				meta: {
					icon: 'mdi mdi-account',
					title: '菜单2',
					isMenu: true,
					isViewRouter: false,
				},
			},
		],
	},
]

export const menuIcon = ['i-mdi-alarm']
