import NProgress from '@tsoul/utils/dist/nprogress'
import '@tsoul/utils/dist/nprogress/nprogress.css'
import { errorRouter, staticRouter, notFoundRouter } from '@/routers/modules/staticRouter'
import { LOGIN_URL, TABS_WHITE_LIST } from '@/config/config'
import { menuList } from './modules/owner'
import $axios from '@/config/request'
import { rootRoute } from './modules/staticRouter'
import { routesStore } from '@/stores/modules/routes'

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
	// 由于Svelte中routesStore是响应式的，我们需要用不同的方式获取值
	let routeListFlat: any[] = []
	const unsubscribe = routesStore.routeListFlat.subscribe((value) => {
		routeListFlat = value
	})
	unsubscribe() // 立即取消订阅，只获取当前值

	const route = [...routeListFlat, ...staticRouter].find((route) => route.path === pathname)
	const title = route?.meta?.title || 'Svelte Admin'
	return title
}

// 路由跳转结束
export const afterEach = (location: any) => {
	NProgress.done()
	const title = getPageTitle(location.pathname)
	document.title = title
}

// 创建路由配置
export const createRoutes = (dynamicRoutes: any[]) => {
	const processRoutes = (routes: any[]) => {
		return routes.map((route) => {
			// 处理重定向
			if (route.redirect) {
				// 确保route.children存在
				route.children = route.children || []
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

	return processRoutes(allRoutes)
}
