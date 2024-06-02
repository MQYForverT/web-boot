import { RouteLocationNormalized, createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/config/nprogress'
import { errorRouter, staticRouter } from '@/routers/modules/staticRouter'
import { LOGIN_URL } from '@/config/config'

//自己的所有页面
export const localRoutes: Menu.MenuOptions[] = []

const router = createRouter({
	history: createWebHistory(),
	routes: [...staticRouter, ...errorRouter],
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
	// 1.NProgress 开始
	NProgress.start()

	// 2.在跳转路由之前，清除所有的请求
	// axiosCanceler.removeAllPending()

	// 3.如果是访问登陆页，直接放行
	if (to.path === LOGIN_URL) {
		NProgress.done()
		return next()
	}

	// 4.判断是否有 Token，没有重定向到 login
	const { token } = useGlobalStore()
	if (!token.value) {
		NProgress.done()
		return next(`${LOGIN_URL}?redirect=${to.path}&params=${JSON.stringify(to.query ? to.query : to.params)}`)
	}

	// 5.如果没有菜单列表，就重新请求菜单列表并添加动态路由
	const { routeList, getPermission } = useRoutesStore()
	if (!routeList.value.length) {
		// 获取用户信息

		getPermission()
		return next({ ...to, replace: true })
	}

	// 6.正常访问页面
	next()
})

const getPageTitle = (to: RouteLocationNormalized) => {
	if (to.meta.title) {
		// 标题
		const pageName = `${to.meta.title} - ${import.meta.env.VITE_PROJECT_NAME_ZH}`
		return pageName
	}
	return import.meta.env.VITE_PROJECT_NAME_ZH
}

/**
 * @description 路由跳转结束
 * */
router.afterEach((to) => {
	NProgress.done()
	useTitle(getPageTitle(to))
})

/**
 * @description 路由跳转错误
 * */
router.onError((error) => {
	NProgress.done()
	ElNotification.error({ title: '路由错误', message: error.message })
})

export default router
