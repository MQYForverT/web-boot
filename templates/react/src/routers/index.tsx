import React, { Suspense } from 'react'
import { Spin } from 'antd'
import NProgress from '@tsoul/utils/nprogress'
import '@tsoul/utils/nprogress.css'
import { errorRouter, staticRouter, notFoundRouter } from '@/routers/modules/staticRouter'
import { LOGIN_URL, TABS_WHITE_LIST } from '@/config/config'
import { menuList } from './modules/owner'
import $axios from '@/config/request'
import { rootRoute } from './modules/staticRouter'
import type { RouteObject } from 'react-router-dom'
import routesStore from '@/stores/modules/routes'

// 自己的所有页面
export const localRoutes = menuList

// 路由守卫
export const beforeEach = (location: any, token: string) => {
	// 清除所有正在进行的请求
	$axios.cancelAllRequests()

	// 1.NProgress 开始
	NProgress.start()

	// 2.如果是访问登陆页，直接放行
	if (location.pathname === LOGIN_URL) {
		NProgress.done()
		return true
	}

	// 3.判断是否有 Token，没有重定向到 login
	if (!token) {
		NProgress.done()

		if (TABS_WHITE_LIST.includes(location.pathname)) {
			return true
		}
		return false
	}

	return true
}

// 获取页面标题
export const getPageTitle = (pathname: string) => {
	const route = [...routesStore.routeListFlat, ...staticRouter].find((route) => route.path === pathname)
	const title = route?.meta?.title || 'React Admin'
	return title
}

// 路由跳转结束
export const afterEach = (location: any) => {
	NProgress.done()
	const title = getPageTitle(location.pathname)
	document.title = title
}

// 为懒加载组件添加 Suspense 包装
export const wrapWithSuspense = (element: React.ReactNode) => {
	return <Suspense fallback={<Spin />}>{element}</Suspense>
}

// 创建路由配置
export const createRoutes = (dynamicRoutes: Menu.MenuOptions<React.LazyExoticComponent<any>>[]) => {
	const processRoutes = (routes: Menu.MenuOptions<React.LazyExoticComponent<any>>[]) => {
		return routes.map((route) => {
			// 处理重定向
			if (route.redirect) {
				// 对于有重定向的路由，创建一个索引路由来处理重定向
				const indexRoute = {
					index: true,
					element: <Navigate to={route.redirect} replace />,
				}

				// 确保route.children存在
				route.children = route.children || []

				// 将索引路由添加到子路由的开头
				route.children.unshift(indexRoute)
			}
			// 处理组件
			else if (route.component) {
				const Component = route.component as React.LazyExoticComponent<any>
				route.element = wrapWithSuspense(<Component />)
			}
			// 处理子路由
			if (route.children && route.children.length > 0) {
				route.children = processRoutes(route.children)
			}

			return route
		})
	}

	// 将动态路由添加到根路由的 children 中
	const allRoutes = [...staticRouter, ...errorRouter]

	// 找到根路由
	if (dynamicRoutes.length) {
		rootRoute.children = [...dynamicRoutes]
		rootRoute.redirect = rootRoute.children[0].path
		allRoutes.push(notFoundRouter)
	}

	allRoutes.push(rootRoute)

	return processRoutes(allRoutes) as RouteObject[]
}
