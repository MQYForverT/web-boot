import React, { useState, useEffect, useMemo } from 'react'
import type { LazyExoticComponent } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Modal, message } from 'antd'
import { HOME_URL } from '@/config/config'
import globalStore from '@/stores'
import routesStore from '@/stores/modules/routes'
import type { Layout } from '@tsoul/component-private/BackgroundLayout/layout'
import { observer } from 'mobx-react-lite'
import { KeepAlive, useKeepAliveRef } from 'keepalive-for-react'

const LayoutIndex: React.FC = () => {
	const outlet = useOutlet()
	const aliveRef = useKeepAliveRef()
	const ref = useRef(null)
	const navigate = useNavigate()
	const location = useLocation()
	const { setToken } = globalStore
	const { routeList, resetRoute, keepAliveNames } = routesStore

	const keepAliveNameList = useMemo(() => {
		return keepAliveNames.filter((item) => item.path).map((item) => item.path || '')
	}, [keepAliveNames])

	// 把路由列表转换成菜单列表
	const convertToLayoutMenu = (route: Menu.MenuOptions<LazyExoticComponent<any>>): Layout.Menu => {
		return {
			path: route.path || '',
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
		aliveRef.current?.refresh()

		// 使用 replace 并添加强制刷新参数
		navigate(
			{
				pathname: detail[0],
				search: `_t=${Date.now()}`, // 添加时间戳强制刷新
			},
			{ replace: true },
		)
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

	return (
		<>
			{themeConfig.menuList.length > 0 ? (
				<tsoul-background-layout
					ref={ref}
					menu-list={JSON.stringify(themeConfig.menuList)}
					user-avatar={JSON.stringify(themeConfig.userAvatar)}
					setting-visible={JSON.stringify(themeConfig.settingVisible)}
					watermark={JSON.stringify(themeConfig.watermark)}
				>
					<div slot="main">
						<KeepAlive transition aliveRef={aliveRef} activeCacheKey={location.pathname} include={keepAliveNameList}>
							{outlet}
						</KeepAlive>
					</div>
				</tsoul-background-layout>
			) : null}
		</>
	)
}

export default observer(LayoutIndex)
