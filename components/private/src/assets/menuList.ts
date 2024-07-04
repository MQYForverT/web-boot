export const menuList = [
	{
		path: '/',
		title: '首页',
		icon: 'i-mdi-alarm',
		redirect: '/home1',
		children: [
			{
				path: '/home1',
				icon: 'mdi mdi-account',
				title: '首页1',
			},
			{
				path: '/home2',
				icon: 'mdi mdi-account',
				title: '首页2',
				affix: true,
			},
		],
	},
	{
		path: '/menu',
		icon: 'mdi mdi-account',
		title: '菜单',
		redirect: '/menu/menu1',
		children: [
			{
				path: '/menu/menu1',
				icon: 'mdi mdi-account',
				title: '菜单1',
			},
			{
				path: '/menu/menu2',
				icon: 'mdi mdi-account',
				title: '菜单2',
			},
			{
				path: '/menu/menu3',
				icon: 'mdi mdi-account',
				title: '菜单3',
			},
			{
				path: '/menu/menu4',
				icon: 'mdi mdi-account',
				title: '菜单4',
			},
			{
				path: '/menu/menu5',
				icon: 'mdi mdi-account',
				title: '菜单5',
			},
			{
				path: '/menu/menu6',
				icon: 'mdi mdi-account',
				title: '菜单6',
			},
			{
				path: '/menu/menu7',
				icon: 'mdi mdi-account',
				title: '菜单7',
			},
		],
	},
]
