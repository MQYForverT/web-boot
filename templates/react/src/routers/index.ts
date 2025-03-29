import NProgress from '@mqy/utils/dist/nprogress'
import '@mqy/utils/dist/nprogress/nprogress.css'
import { errorRouter, staticRouter, notFoundRouter } from '@/routers/modules/staticRouter.tsx'
import { LOGIN_URL, TABS_WHITE_LIST } from '@/config/config'
import { menuList } from './modules/owner'
import $axios from '@/config/request'
import { useGlobalStore } from '@/stores'

// 自己的所有页面
export const localRoutes: Menu.MenuOptions[] = menuList

// 创建路由配置
export const routes = [...staticRouter, ...errorRouter, notFoundRouter]

// 路由守卫
export const beforeEach = (location: any) => {
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
	const { token } = useGlobalStore()

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
export const getPageTitle = (route: any) => {
	const title = route?.meta?.title || 'React Admin'
	return title
}

// 路由跳转结束
export const afterEach = (location: any) => {
	NProgress.done()
	const title = getPageTitle(location)
	document.title = title
}
