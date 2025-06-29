<script lang="ts">
	import { onMount } from 'svelte'
	// @ts-ignore - page.js类型定义
	import router from 'page'
	import { globalStore } from '@/stores/index'
	import { routesStore } from '@/stores/modules/routes'
	import { beforeEach, afterEach } from '@/routers/index'
	import { staticRouter, errorRouter } from '@/routers/modules/staticRouter'
	import Layout from '@/layouts/index.svelte'

	// 获取全局状态
	$: token = $globalStore
	let routeList: any[] = []
	let keepAliveNames: any[] = []
	let currentComponent: any = null
	let currentChildComponent: any = null
	let needsLayout = false
	let currentPath = ''
	
	// 缓存相关
	let cachedComponents: Map<string, any> = new Map()
	let cachedInstances: Map<string, any> = new Map()

	// 路由处理函数
	const handleRoute = async (ctx: any) => {
		const pathname = ctx.pathname
		const TABS_WHITE_LIST = ['/403', '/404', '/500', '/login']

		// 路由守卫检查
		if (pathname !== '/login' && !TABS_WHITE_LIST.includes(pathname)) {
			if (!token) {
				router('/login')
				return
			}
		}

		// 执行原有的路由守卫逻辑
		if (!beforeEach({ pathname }, token)) {
			router('/login')
			return
		}

		try {
			needsLayout = pathNeedsLayout(pathname)
			const allRoutes = [...staticRouter, ...errorRouter, ...routeList]

			console.log('Route handling:', { pathname, needsLayout, routeListLength: routeList.length, allRoutesLength: allRoutes.length })

			if (needsLayout) {
				// 需要布局的页面
				currentComponent = Layout
				const childComponentLoader = findRouteComponent(pathname, allRoutes)
				
				console.log('Found child component loader:', !!childComponentLoader)
				
				if (childComponentLoader) {
					const childModule = await childComponentLoader()
					currentChildComponent = childModule.default || childModule
				} else {
					// 如果是动态路由但还没加载，等待加载
					if (routeList.length === 0 && pathname !== '/login') {
						console.log('Dynamic routes not loaded yet, waiting...')
						// 等待动态路由加载
						const unsubscribe = routesStore.routeList.subscribe(value => {
							if (value.length > 0) {
								unsubscribe()
								// 重新处理路由
								router(pathname)
							}
						})
						routesStore.getPermission()
						return
					}
					
					// 如果找不到组件，显示404
					console.log('Component not found for:', pathname)
					const errorComponent = await import('@/pages/ErrorMessage/404.svelte')
					currentComponent = errorComponent.default
					currentChildComponent = null
					needsLayout = false
				}
			} else {
				// 不需要布局的页面（如登录页、错误页）
				const routeItem = allRoutes.find(route => route.path === pathname)
				if (routeItem && routeItem.component) {
					const component = await routeItem.component()
					currentComponent = component.default || component
					currentChildComponent = null
				} else {
					// 404页面
					const errorComponent = await import('@/pages/ErrorMessage/404.svelte')
					currentComponent = errorComponent.default
					currentChildComponent = null
				}
			}

			afterEach({ pathname })
		} catch (error) {
			console.error('Failed to load component:', error)
			const errorComponent = await import('@/pages/ErrorMessage/404.svelte')
			currentComponent = errorComponent.default
			currentChildComponent = null
			needsLayout = false
		}
	}

	// 检查路径是否需要布局
	const pathNeedsLayout = (path: string) => {
		const noLayoutPaths = ['/login', '/403', '/404', '/500']
		return !noLayoutPaths.includes(path)
	}

	// 在所有路由中查找组件
	const findRouteComponent = (path: string, routes: any[]): any => {
		console.log('Searching for component:', path, 'in routes:', routes.map(r => ({ path: r.path, hasComponent: !!r.component })))
		
		for (const route of routes) {
			if (route.path === path && route.component) {
				console.log('Found component for:', path)
				return route.component
			}
			if (route.children && route.children.length > 0) {
				const childComponent = findRouteComponent(path, route.children)
				if (childComponent) {
					return childComponent
				}
			}
		}
		
		console.log('Component not found for:', path)
		return null
	}

	// 设置路由
	function setupRoutes() {
		// 添加根路径重定向
		router('/', () => {
			if (!token) {
				router.redirect('/login')
			} else {
				console.log('Redirecting to /home')
				router.redirect('/home')
			}
		})

		// 添加静态路由
		staticRouter.forEach((route: any) => {
			if (route.component && route.path) {
				console.log('Registering static route:', route.path)
				router(route.path, handleRoute)
			}
		})

		// 添加错误路由
		errorRouter.forEach((route: any) => {
			if (route.component && route.path) {
				console.log('Registering error route:', route.path)
				router(route.path, handleRoute)
			}
		})

		// 添加动态路由处理
		router('/home', handleRoute)
		router('/menu', handleRoute)
		router('/menu/menu1', handleRoute)
		router('/menu/menu1/menu11', handleRoute)
		router('/menu/menu2', handleRoute)
		router('/menu/menu3', handleRoute)

		// 添加404路由 - 必须在最后添加
		router('*', async (ctx: any) => {
			console.log('404 route hit:', ctx.pathname)
			const component = await import('@/pages/ErrorMessage/404.svelte')
			currentComponent = component.default
			currentChildComponent = null
			needsLayout = false
		})

		// 启动路由
		router.start()
	}

	// 订阅路由列表变化
	routesStore.routeList.subscribe(value => {
		routeList = value
		console.log('Route list updated:', value.length)
	})

	// 响应式监听token变化
	$: if (!token) {
		routesStore.resetRoute()
	} else if (routeList.length === 0) {
		// 有token但没有路由数据时，获取权限
		console.log('Token exists but no routes, getting permission')
		routesStore.getPermission()
	}

	onMount(() => {
		setupRoutes()

		return () => {
			router.stop()
		}
	})
</script>

<!-- 路由出口 -->
{#if currentComponent}
	{#if needsLayout && currentChildComponent}
		<svelte:component this={currentComponent}>
			<svelte:component this={currentChildComponent} />
		</svelte:component>
	{:else}
		<svelte:component this={currentComponent} />
	{/if}
{:else}
	<div>Loading...</div>
{/if}

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
