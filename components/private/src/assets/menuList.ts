export const menuList = [
	{
		path: '/',
		title: '首页',
		redirect: '/home1',
		children: [
			{
				path: '/home1',
				icon: '',
				title: '首页1',
				isShowFooter: false,
			},
			{
				path: '/home2',
				icon: 'i-ep-tickets',
				title: '首页2',
				affix: true,
				isShowFooter: true,
			},
		],
	},
	{
		path: '/menu',
		icon: '',
		title: '菜单',
		redirect: '/menu/menu1',
		children: [
			{
				path: '/menu/menu1',
				icon: '',
				title: '菜单1',
			},
			{
				path: '/menu/menu2',
				icon: '',
				title: '菜单2',
			},
			{
				path: '/menu/menu3',
				icon: '',
				title: '菜单3',
			},
			{
				path: '/menu/menu4',
				icon: '',
				title: '菜单4',
			},
			{
				path: '/menu/menu5',
				icon: '',
				title: '菜单5',
			},
			{
				path: '/menu/menu6',
				icon: '',
				title: '菜单6',
			},
			{
				path: '/menu/menu7',
				icon: '',
				title: '菜单7',
			},
		],
	},
]
