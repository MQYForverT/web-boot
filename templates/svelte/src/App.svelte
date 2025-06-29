<script lang="ts">
	import { onMount } from 'svelte'
	// @ts-ignore - page.js类型定义
	import router from 'page'
	import { globalStore } from '@/stores/index'
	import { routesStore } from '@/stores/modules/routes'
	import { beforeEach, afterEach } from '@/routers/index'
	import { staticRouter, errorRouter } from '@/routers/modules/staticRouter'

	// 获取全局状态
	$: token = $globalStore
	let routeList: any[] = []
	let currentComponent: any = null
	let isRoutesInitialized = false

	// 路由守卫函数
	const routeGuard = (ctx: any, next: any) => {
		const pathname = ctx.pathname
		const TABS_WHITE_LIST = ['/403', '/404', '/500', '/login']
		
		// 如果是登录页面或白名单页面，直接放行
		if (pathname === '/login' || TABS_WHITE_LIST.includes(pathname)) {
			afterEach({ pathname })
			next()
			return
		}
		
		// 如果没有token，重定向到登录页
		if (!token) {
			router('/login')
			return
		}
		
		// 其他情况，执行正常的路由守卫逻辑
		const canAccess = beforeEach({ pathname }, token)
		if (!canAccess) {
			router('/login')
			return
		}
		
		afterEach({ pathname })
		next()
	}

	// 设置路由
	function setupRoutes() {
		// 清除现有路由
		router.stop()
		
		// 创建所有路由的映射
		const allRoutes = [...staticRouter, ...errorRouter, ...routeList]
		
		// 递归添加路由
		const addRoutes = (routes: any[]) => {
			routes.forEach((route: any) => {
				if (route.component && route.path) {
					router(route.path, routeGuard, async (_ctx: any) => {
						try {
							const component = await route.component()
							currentComponent = component.default || component
						} catch (error) {
							console.error('Failed to load component:', error)
							const errorComponent = await import('@/pages/ErrorMessage/404.svelte')
							currentComponent = errorComponent.default
						}
					})
				}
				
				// 递归处理子路由
				if (route.children && route.children.length > 0) {
					addRoutes(route.children)
				}
			})
		}
		
		addRoutes(allRoutes)
		
		// 添加根路径重定向
		router('/', routeGuard, () => {
			if (!token) {
				router('/login')
			} else {
				router('/home')
			}
		})
		
		// 添加404路由
		router('*', async () => {
			const component = await import('@/pages/ErrorMessage/404.svelte')
			currentComponent = component.default
		})
		
		// 启动路由
		router.start()
		isRoutesInitialized = true
	}

	// 订阅路由列表变化
	routesStore.routeList.subscribe(value => {
		routeList = value
		if (isRoutesInitialized) {
			setupRoutes()
		}
	})

	// 初始化获取权限路由
	$: if (token) {
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
	<svelte:component this={currentComponent} />
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
