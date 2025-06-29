import { HOME_URL, LOGIN_URL } from '@/config/config'

// 根路由
export const rootRoute: any = {
	name: 'layout',
	path: HOME_URL,
	component: () => import('@/layouts/index.svelte'),
	children: [],
}

/**
 * @description 静态路由
 */
export const staticRouter: any[] = [
	{
		name: 'login',
		path: LOGIN_URL,
		component: () => import('@/pages/Login/index.svelte'),
		meta: {
			title: '登录',
		},
	},
]

/**
 * @description 错误页面路由
 */
export const errorRouter: any[] = [
	{
		name: '403',
		path: '/403',
		component: () => import('@/pages/ErrorMessage/403.svelte'),
	},
	{
		name: '404',
		path: '/404',
		component: () => import('@/pages/ErrorMessage/404.svelte'),
	},
	{
		name: '500',
		path: '/500',
		component: () => import('@/pages/ErrorMessage/500.svelte'),
	},
]

/**
 * @description 404页面
 */
export const notFoundRouter: any = {
	name: '404',
	path: '*',
	component: () => import('@/pages/ErrorMessage/404.svelte'),
}
