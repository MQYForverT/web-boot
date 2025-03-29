import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import { BackgroundLayout } from '@mqy/component-private/dist/BackgroundLayout'
import { Modal, message } from 'antd'
import { HOME_URL } from '@/config/config'
import { useGlobalStore } from '@/stores'
import { useRoutesStore } from '@/stores/modules/routes'
import type { Layout } from '@mqy/component-private/dist/BackgroundLayout/layout'
import { KeepAlive } from 'react-activation'
import { motion, AnimatePresence } from 'framer-motion'

const LayoutIndex: React.FC = () => {
	const [refreshRouterViewKey, setRefreshRouterViewKey] = useState('')
	const navigate = useNavigate()
	const location = useLocation()
	const routesStore = useRoutesStore()
	const { keepAliveNames } = routesStore

	// 把路由列表转换成菜单列表
	const convertToLayoutMenu = (route: Menu.MenuOptions): Layout.Menu => {
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

	const menuList = useMemo(() => routesStore.routeList.map(convertToLayoutMenu), [routesStore.routeList])

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

		setRefreshRouterViewKey(detail[0])
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
							const globalStore = useGlobalStore()
							globalStore.setToken('')
							routesStore.resetRoute()

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

	return (
		<BackgroundLayout
			menuList={JSON.stringify(themeConfig.menuList)}
			userAvatar={JSON.stringify(themeConfig.userAvatar)}
			settingVisible={JSON.stringify(themeConfig.settingVisible)}
			watermark={JSON.stringify(themeConfig.watermark)}
			onChangeProp={handleChange}
			onSelectMenu={selectMenu}
			onCommandUser={commandUser}
			onTagRefresh={tagRefresh}
		>
			<div slot="main">
				<AnimatePresence mode="wait">
					<motion.div key={location.pathname} {...pageTransition}>
						<KeepAlive
							id={location.pathname}
							when={shouldKeepAlive(location.pathname)}
							key={refreshRouterViewKey || location.pathname}
						>
							<Outlet />
						</KeepAlive>
					</motion.div>
				</AnimatePresence>
			</div>
		</BackgroundLayout>
	)
}

export default LayoutIndex
