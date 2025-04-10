import React, { useEffect, Suspense } from 'react'
import { ConfigProvider, App as AntdApp, message, Spin } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useLocation, useNavigate } from 'react-router-dom'
import globalStore from '@/stores'
import settingStore from '@/stores/modules/setting'
import routesStore from '@/stores/modules/routes'
import { beforeEach, afterEach, createRoutes } from '@/routers/index.tsx'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

const App: React.FC = () => {
	// 获取全局状态
	const { buttonSize } = settingStore
	const { token } = globalStore
	const { routeList } = routesStore
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

	// 初始化获取权限路由
	useEffect(() => {
		if (token) {
			routesStore.getPermission()
		}
	}, [token, routesStore])

	// 创建路由配置
	const routes = useMemo(() => {
		// 获取路由配置
		const routeConfig = createRoutes(toJS(routeList))
		return routeConfig
	}, [routeList])

	// 路由守卫
	useEffect(() => {
		const canAccess = beforeEach(location, token || '')
		if (!canAccess) {
			navigate('/login')
			return
		}

		afterEach(location)
	}, [location, navigate, token])

	// 使用useRoutes渲染路由
	const RouterElement = useRoutes(routes)

	return (
		<ConfigProvider locale={zhCN} button={config} componentSize={buttonSize}>
			<AntdApp>
				<Suspense fallback={<Spin size="large" className="global-spin" />}>{RouterElement}</Suspense>
			</AntdApp>
		</ConfigProvider>
	)
}

export default observer(App)
