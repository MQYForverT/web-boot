import { isRequestRoutes } from '@/config/config'
import { permissionRoute } from '@/routers'
import { dynamicImport } from '@/routers/modules/dynamicRouter'

export const useRoutesStore = createGlobalState(() => {
	// state
	const permission = ref([]) //后端返回的数据，存的是平板数据
	const routesList = ref<Menu.MenuOptions[]>([]) //添加的所有路由
	const allPermissionRouterData = ref([]) //包括根级路由的所有路由
	const keepAliveNames = ref([]) //路由缓存（name字段）
	const tagsViewRoutes = ref([]) //

	async function getPermission() {
		let routerResult = [] //结果集

		if (isRequestRoutes) {
			const { result, error } = await ApiGetPermission()
			//结果集格式化
			if (!HandleApiError(error)) {
				routerResult = _getPermissionData(permissionRoute, initChildDataToFlat([], result))
			}

			//模拟接口
			// const result = initChildDataToFlat(
			//     [],
			//     [{ roleCode: 'aaa', children: [{ roleCode: 'bbb' }, { roleCode: 'ccc' }] }]
			// );
			// routerResult = _getPermissionData(permissionRoute, result);
			// debugger;
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
