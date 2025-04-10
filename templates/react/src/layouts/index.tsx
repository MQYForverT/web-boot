import React, { useState, useEffect, useMemo } from 'react'
import type { LazyExoticComponent } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Modal, message } from 'antd'
import { HOME_URL } from '@/config/config'
import globalStore from '@/stores'
import routesStore from '@/stores/modules/routes'
import type { Layout } from '@mqy/component-private/dist/BackgroundLayout/layout'
import { motion, AnimatePresence } from 'framer-motion'
import { observer } from 'mobx-react-lite'

const LayoutIndex: React.FC = () => {
	const outlet = useOutlet()
	const ref = useRef(null)
	const [refreshRouterViewKey, setRefreshRouterViewKey] = useState('')
	const navigate = useNavigate()
	const location = useLocation()
	const { setToken } = globalStore
	const { routeList, resetRoute, keepAliveNames } = routesStore

	// 把路由列表转换成菜单列表
	const convertToLayoutMenu = (route: Menu.MenuOptions<LazyExoticComponent<any>>): Layout.Menu => {
		return {
			path: route.path,
			title: route.meta?.title || '',
			icon: route.meta?.icon,
			redirect: route.redirect,
			isShowFooter: route.meta?.isShowFooter,
			affix: route.meta?.isAffix,
			children: route.children?.map(convertToLayoutMenu),
		}
	}

	const menuList = useMemo(() => routeList.map(convertToLayoutMenu), [routeList])

	useEffect(() => {
		if (routeList.length > 0) {
			setThemeConfig((prev) => ({
				...prev,
				menuList: routeList.map(convertToLayoutMenu),
			}))
		}
	}, [routeList])

	const [themeConfig, setThemeConfig] = useState({
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

	const selectMenu = ({ detail = [] }: { detail: string[] }) => {
		navigate(detail[0])
	}

	const tagRefresh = async ({ detail = [] }: { detail: string[] }) => {
		setRefreshRouterViewKey('')

		// 使用 replace 并添加强制刷新参数
		navigate(
			{
				pathname: detail[0],
				search: `_t=${Date.now()}`, // 添加时间戳强制刷新
			},
			{ replace: true },
		)

		// 设置刷新key，确保组件能够识别刷新操作
		setTimeout(() => {
			setRefreshRouterViewKey(detail[0])
		}, 100) // 添加短暂延迟，确保导航完成
	}

	const commandUser = ({ detail = [] }: { detail: string[] }) => {
		if (detail[0] === 'setting') {
			setThemeConfig((prev) => ({
				...prev,
				settingVisible: true,
			}))
		}

		if (detail[0] === 'loginOut') {
			Modal.confirm({
				title: '提示',
				content: '此操作将退出登录, 是否继续?',
				type: 'warning',
				okText: '确定',
				cancelText: '取消',
				onOk: async () => {
					return new Promise((resolve) => {
						setTimeout(() => {
							setToken('')
							resetRoute()

							navigate(HOME_URL)
							setTimeout(() => {
								message.success('安全退出成功！')
							}, 300)
							resolve(null)
						}, 700)
					})
				},
			})
		}
	}

	const handleChange = ({ detail = [] }: { detail: any[] }) => {
		setThemeConfig((prev) => ({
			...prev,
			[detail[0]]: detail[1],
		}))
	}

	useEffect(() => {
		setRefreshRouterViewKey(menuList[0]?.path || '')
	}, [menuList])

	// 检查当前路径是否需要缓存
	const shouldKeepAlive = (path: string) => {
		return keepAliveNames.some((item: any) => item.name === path || path.includes(item.name))
	}

	// 动画变量
	const pageTransition = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: 0.3 },
	}

	useEventListener(
		['changeProp', 'selectMenu', 'commandUser', 'tagRefresh'],
		(res) => {
			switch (res.type) {
				case 'changeProp':
					handleChange(res)
					break
				case 'selectMenu':
					selectMenu(res)
					break
				case 'commandUser':
					commandUser(res)
					break
				case 'tagRefresh':
					tagRefresh(res)
					break
			}
		},
		{ target: ref },
	)

	// 渲染内容
	const renderContent = () => (
		<AnimatePresence mode="wait">
			<motion.div key={location.pathname} {...pageTransition}>
				{outlet}
			</motion.div>
		</AnimatePresence>
	)

	return (
		<>
			{themeConfig.menuList.length > 0 ? (
				<mqy-background-layout
					ref={ref}
					menu-list={JSON.stringify(themeConfig.menuList)}
					user-avatar={JSON.stringify(themeConfig.userAvatar)}
					setting-visible={JSON.stringify(themeConfig.settingVisible)}
					watermark={JSON.stringify(themeConfig.watermark)}
				>
					<div slot="main">{renderContent()}</div>
				</mqy-background-layout>
			) : null}
		</>
	)
}

export default observer(LayoutIndex)
