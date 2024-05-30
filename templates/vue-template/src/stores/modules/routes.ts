import { isRequestRoutes } from '@/config/config'
import { permissionRoute } from '@/routers'
import { dynamicImport } from '@/routers/modules/dynamicRouter'
import { getPermissionData } from '@/routers/modules/help'
import router from '@/routers'

export const useRoutesStore = createGlobalState(() => {
	// state
	const permission = ref<Menu.permissionMenu[]>([]) //转换之后后端返回的数据，存的是平板数据
	const routesList = ref<Menu.MenuOptions[]>([]) //添加的所有路由
	const allPermissionRouterData = ref<Menu.MenuOptions[]>([]) //包括根级路由的所有路由
	const keepAliveNames = ref([]) //路由缓存（name字段）
	const tagsViewRoutes = ref([]) //

	// 删除/重置路由
	function resetRoute() {
		setFilterRouteEnd().forEach((route) => {
			const routeName = route.name
			router.hasRoute(routeName) && router.removeRoute(routeName)
		})

		routesList.value = []
		allPermissionRouterData.value = []
		keepAliveNames.value = []
		tagsViewRoutes.value = []
	}

	// 获取权限路由
	async function getPermission() {
		let routerResult: Menu.MenuOptions[] = [] //结果集

		if (isRequestRoutes) {
			// const { result, error } = await ApiGetPermission()
			// //结果集格式化
			// if (!HandleApiError(error)) {
			// 	// 如果后端返回的是树形结构则需要先化为平板数据
			// 	routerResult = getPermissionData(permissionRoute, result)
			// }

			//模拟接口
			const result = [{ permission: 'aaa', children: [{ permission: 'bbb' }, { permission: 'ccc' }] }]
			routerResult = getPermissionData(permissionRoute, result, true)

			if (routerResult.length === 0) {
				return routerResult
			}

			permission.value = result
		} else {
			routerResult = permissionRoute
		}

		const app = [
			{
				path: '/',
				name: 'layout',
				component: dynamicImport('/index.vue', 'layout'),
				redirect: routerResult[0].path, //可能没有home页面，所以取第一个
				meta: {
					isKeepAlive: true,
				},
				children: routerResult,
			},
		]
		allPermissionRouterData.value = app
		routesList.value = routerResult

		return routerResult
	}

	return { permission, routesList, allPermissionRouterData, keepAliveNames, tagsViewRoutes, getPermission }
})
