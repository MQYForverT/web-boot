import React from 'react'
import { ConfigProvider, App as AntdApp, message } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSettingStore } from '@/stores'
import { useGlobalStore } from '@/stores'
import { useEffect } from 'react'
import { LOGIN_URL, TABS_WHITE_LIST } from '@/config/config'
import NProgress from '@mqy/utils/dist/nprogress'
import Layout from '@/layouts'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import NotAuth from '@/pages/ErrorMessage/403'
import ErrorMessage from '@/pages/ErrorMessage/404'
import ServerError from '@/pages/ErrorMessage/500'

const App: React.FC = () => {
	// 配置全局组件大小 (small/default(medium)/large)
	const { buttonSize } = useSettingStore()
	const { token } = useGlobalStore()
	const location = useLocation()
	const navigate = useNavigate()

	// 配置按钮文字中间是否有空格
	const config = {
		autoInsertSpace: false,
	}

	// 消息配置
	const messageConfig = {
		maxCount: 1,
	}

	// 设置全局消息配置
	message.config(messageConfig)

	// 路由守卫
	useEffect(() => {
		// 清除所有正在进行的请求
		// $axios.cancelAllRequests()

		// 1.NProgress 开始
		NProgress.start()

		// 2.如果是访问登陆页，直接放行
		if (location.pathname === LOGIN_URL) {
			NProgress.done()
			return
		}

		// 3.判断是否有 Token，没有重定向到 login
		if (!token) {
			NProgress.done()

			if (TABS_WHITE_LIST.includes(location.pathname)) {
				return
			}
			navigate('/login')
			return
		}

		// 路由后置守卫
		const title = location.pathname ? 'React Admin' : 'React Admin'
		document.title = title
		NProgress.done()
	}, [location, token, navigate])

	return (
		<ConfigProvider locale={zhCN} button={config} componentSize={buttonSize}>
			<AntdApp>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Layout />}>
						<Route path="home" element={<Home />} />
						<Route path="" element={<Navigate to="/home" replace />} />
					</Route>
					<Route path="/403" element={<NotAuth />} />
					<Route path="/404" element={<ErrorMessage />} />
					<Route path="/500" element={<ServerError />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Routes>
			</AntdApp>
		</ConfigProvider>
	)
}

export default App
