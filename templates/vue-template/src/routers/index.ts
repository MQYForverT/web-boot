import { RouteLocationNormalized, createRouter, createWebHashHistory } from 'vue-router'
import NProgress from '@/config/nprogress'
import { errorRouter, staticRouter } from '@/routers/modules/staticRouter'
import { LOGIN_URL } from '@/config/config'

const router = createRouter({
	history: createWebHashHistory(),
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
	axiosCanceler.removeAllPending()

	// 3.如果是访问登陆页，直接放行
	if (to.path === LOGIN_URL) return next()

	// 4.判断是否有 Token，没有重定向到 login
	const { token } = storeToRefs(GlobalStore())
	if (!token) return next({ path: LOGIN_URL, replace: true })

	// 5.如果没有菜单列表，就重新请求菜单列表并添加动态路由
	const { authMenuList } = storeToRefs(AuthStore())
	if (!authMenuList.value.length) {
		await initDynamicRouter()
		return next({ ...to, replace: true })
	}

	// 6.正常访问页面
	next()
})

const getPageTitle = (to: RouteLocationNormalized) => {
	if (to.meta.title) {
		const pageName = `${to.meta.title} - ${useTitle()}`
		return pageName
	}
	return useTitle()
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
