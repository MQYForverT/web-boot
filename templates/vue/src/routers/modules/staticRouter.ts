import type { RouteRecordRaw } from 'vue-router'
import { LOGIN_URL } from '@/config/config'

/**
 * staticRouter(静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
	{
		path: LOGIN_URL,
		name: 'login',
		component: () => import('@/pages/Login/index.vue'),
		meta: {
			title: '登录',
		},
	},
]

/**
 * errorRouter(错误页面路由)
 */
export const errorRouter: RouteRecordRaw[] = [
	{
		path: '/403',
		name: '403',
		component: () => import('@/pages/ErrorMessage/403.vue'),
		meta: {
			title: '403页面',
		},
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/pages/ErrorMessage/404.vue'),
		meta: {
			title: '404页面',
		},
	},
	{
		path: '/500',
		name: '500',
		component: () => import('@/pages/ErrorMessage/500.vue'),
		meta: {
			title: '500页面',
		},
	},
]

/**
 * notFoundRouter(找不到路由)
 */
export const notFoundRouter = {
	path: '/:pathMatch(.*)*',
	name: 'notFound',
	redirect: { name: '404' },
}
