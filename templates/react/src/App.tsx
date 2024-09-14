import { layoutEnum } from '@mqy/component-private/dist/BackgroundLayout'

function App() {
	const ref = useRef(null)

	const menuList = [
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
			],
		},
	]
	const imgUrl = new URL('@/assets/images/home.jpg', import.meta.url).href

	const [themeConfig, setThemeConfig] = useState({
		containerBackground: {
			background: imgUrl,
			opacity: 0.5,
			style: {
				opacity: 0.1,
			},
		},
		layout: layoutEnum.defaults,
		isCollapse: false,
		isMobile: false,
		menuList,
		userAvatar: {
			show: true,
			trigger: 'click',
			name: '12',
			dropdownMenu: [
				{
					key: 'loginOut',
					value: '退出登录',
				},
				{
					key: 'setting',
					value: '个性设置',
				},
			],
		},
		watermark: {
			text: '漠轻阴666',
		},
		settingVisible: false,
	})

	useEventListener(
		'changeProp',
		({ detail = [] }) => {
			console.log('handleChange', detail)
			changeThemeConfig(detail[0], detail[1])
		},
		{ target: ref },
	)

	useEventListener(
		'commandUser',
		({ detail = [] }) => {
			console.log('commandUser', detail)
			changeThemeConfig(detail[0], detail[1])
		},
		{ target: ref },
	)

	useEventListener(
		'selectMenu',
		({ detail = [] }) => {
			console.log('selectMenu', detail)
		},
		{ target: ref },
	)

	useEventListener(
		'tagRefresh',
		({ detail = [] }) => {
			console.log('tagRefresh', detail)
		},
		{ target: ref },
	)

	const changeThemeConfig = <T extends keyof typeof themeConfig>(key: T, val: (typeof themeConfig)[T]) => {
		const obj = {
			[key]: val,
		}
		setThemeConfig({ ...themeConfig, ...obj })
	}

	return (
		<>
			<div>
				<mqy-background-layout
					ref={ref}
					container-background={JSON.stringify(themeConfig.containerBackground)}
					layout={themeConfig.layout}
					menu-list={JSON.stringify(themeConfig.menuList)}
					user-avatar={JSON.stringify(themeConfig.userAvatar)}
					setting-visible={JSON.stringify(themeConfig.settingVisible)}
					watermark={JSON.stringify(themeConfig.watermark)}
				>
					<div slot="header">
						<div className="headerSlot">
							<span onClick={() => changeThemeConfig('layout', layoutEnum.vertical)}>button1</span>
							<span>button2</span>
						</div>
					</div>
					<div slot="main">
						<div style={{ height: '120px' }}>hello</div>
						<div style={{ height: '120px' }}>hello</div>
					</div>
				</mqy-background-layout>
			</div>
		</>
	)
}

export default App
