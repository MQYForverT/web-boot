import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

// 错误页面模块
const ErrorMessage = lazy(() => import('@/pages/ErrorMessage/404'))
const NotAuth = lazy(() => import('@/pages/ErrorMessage/403'))
const ServerError = lazy(() => import('@/pages/ErrorMessage/500'))

// 登录页
const Login = lazy(() => import('@/pages/Login/index'))

// 首页
const Home = lazy(() => import('@/pages/Home/index'))

// 布局
const Layout = lazy(() => import('@/layouts/index'))

/**
 * @description 静态路由
 */
export const staticRouter: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: '',
				element: <Navigate to="/home" replace />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]

/**
 * @description 错误页面路由
 */
export const errorRouter: RouteObject[] = [
	{
		path: '/403',
		element: <NotAuth />,
	},
	{
		path: '/404',
		element: <ErrorMessage />,
	},
	{
		path: '/500',
		element: <ServerError />,
	},
]

/**
 * @description 404页面
 */
export const notFoundRouter: RouteObject = {
	path: '*',
	element: <Navigate to="/404" replace />,
}
