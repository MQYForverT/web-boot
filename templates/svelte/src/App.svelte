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
	let currentComponent: any = null
	let currentChildComponent: any = null
	let needsLayout = false

	// 路由处理函数
	const handleRoute = async (ctx: any) => {
		const pathname = ctx.pathname

		// 执行路由守卫逻辑
		if (!beforeEach({ pathname }, token)) {
			router('/login')
			return
		}

		try {
			needsLayout = pathNeedsLayout(pathname)
			const allRoutes = [...staticRouter, ...errorRouter, ...routeList]

			if (needsLayout) {
				// 需要布局的页面
				currentComponent = Layout
				const childComponentLoader = findRouteComponent(pathname, allRoutes)
				
				if (childComponentLoader) {
					const childModule = await childComponentLoader()
					currentChildComponent = childModule.default || childModule
				} else {
					// 如果是动态路由但还没加载，等待加载
					if (routeList.length === 0 && pathname !== '/login') {
						const unsubscribe = routesStore.routeList.subscribe(value => {
							if (value.length > 0) {
								unsubscribe()
								router(pathname)
							}
						})
						routesStore.getPermission()
						return
					}
					
					// 显示404
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
		for (const route of routes) {
			if (route.path === path && route.component) {
				return route.component
			}
			if (route.children && route.children.length > 0) {
				const childComponent = findRouteComponent(path, route.children)
				if (childComponent) {
					return childComponent
				}
			}
		}
		return null
	}

	// 设置路由
	function setupRoutes() {
		// 根路径重定向
		router('/', () => {
			if (!token) {
				router.redirect('/login')
			} else {
				router.redirect('/home')
			}
		})

		// 添加静态路由
		staticRouter.forEach((route: any) => {
			if (route.component && route.path) {
				router(route.path, handleRoute)
			}
		})

		// 添加错误路由
		errorRouter.forEach((route: any) => {
			if (route.component && route.path) {
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

		// 404路由（必须在最后）
		router('*', async () => {
			const component = await import('@/pages/ErrorMessage/404.svelte')
			currentComponent = component.default
			currentChildComponent = null
			needsLayout = false
		})
 
    // 使用hashbang模式
		router.start({ hashbang: true })
	}

	// 订阅路由列表变化
	routesStore.routeList.subscribe(value => {
		routeList = value
	})

	// 响应式监听token变化
	$: if (!token) {
		routesStore.resetRoute()
	} else if (routeList.length === 0) {
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
