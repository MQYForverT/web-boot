import { lazy } from 'react'
import { HOME_URL, LOGIN_URL } from '@/config/config'

// 根路由
export const rootRoute: Menu.MenuOptions<React.LazyExoticComponent<any>> = {
	name: 'layout',
	path: HOME_URL,
	component: lazy(() => import('@/layouts/index')),
	children: [],
}

/**
 * @description 静态路由
 */
export const staticRouter: Menu.MenuOptions<React.LazyExoticComponent<any>>[] = [
	{
		name: 'login',
		path: LOGIN_URL,
		component: lazy(() => import('@/pages/Login/index')),
		meta: {
			title: '登录',
		},
	},
]

/**
 * @description 错误页面路由
 */
export const errorRouter: Menu.MenuOptions<React.LazyExoticComponent<any>>[] = [
	{
		name: '403',
		path: '/403',
		component: lazy(() => import('@/pages/ErrorMessage/403')),
	},
	{
		name: '404',
		path: '/404',
		component: lazy(() => import('@/pages/ErrorMessage/404')),
	},
	{
		name: '500',
		path: '/500',
		component: lazy(() => import('@/pages/ErrorMessage/500')),
	},
]

/**
 * @description 404页面
 */
export const notFoundRouter: Menu.MenuOptions<React.LazyExoticComponent<any>> = {
	name: '404',
	path: '*',
	component: lazy(() => import('@/pages/ErrorMessage/404')),
}
