import { dynamicImport } from '@/routers/modules/dynamicRouter'
import { getPermissionData } from '@/routers/modules/help'
import router, { localRoutes } from '@/routers'

export const useRoutesStore = createGlobalState(() => {
	// state
	const permissionFlat = ref<Menu.permissionMenu[]>([]) //转换之后后端返回的数据，存的是平板数据
	const routeList = ref<Menu.MenuOptions[]>([]) //添加的所有路由
	const tagsViewRoutes = ref<Menu.MenuOptions[]>([]) //
	const keepAliveNames = ref<Menu.MenuOptions[]>([]) //路由缓存（name字段）

	// 删除/重置路由
	function resetRoute() {
		router.removeRoute('layout')
		permissionFlat.value.forEach((route) => {
			const routeName = route.permission
			router.hasRoute(routeName) && router.removeRoute(routeName)
		})

		routeList.value = []
		tagsViewRoutes.value = []
		keepAliveNames.value = []
	}

	// 获取权限路由
	async function getPermission() {
		// 重置路由
		resetRoute()

		let routerResult: Menu.MenuOptions[] = [] //结果集

		// const { result, error } = await ApiGetPermission()
		// //结果集格式化
		// if (!HandleApiError(error)) {
		// 	// 如果后端返回的是树形结构则需要先化为平板数据
		// 	routerResult = getPermissionData(localRoutes, result)
		// }
		//模拟接口
		const result: Menu.permissionMenu[] = [
			{ permission: 'aaa', children: [{ permission: 'bbb' }, { permission: 'ccc' }] },
		]
		const resultData = getPermissionData(localRoutes, result, true)

		routerResult = resultData.routeList
		permissionFlat.value = resultData.result

		// 设置keepAlive 缓存
		keepAliveNames.value = resultData.keepAliveList

		if (routerResult.length === 0) {
			return routerResult
		}

		const app = {
			path: '/',
			name: 'layout',
			component: dynamicImport('/index.vue', 'layout'),
			redirect: routerResult[0].path, //可能没有home页面，所以取第一个
			meta: {
				isKeepAlive: true,
			},
			children: routerResult,
		}
		router.addRoute(app)

		routeList.value = routerResult

		// 设置TagsViewRoutes
		tagsViewRoutes.value = [routerResult[0]]
	}

	return { permissionFlat, routeList, keepAliveNames, tagsViewRoutes, resetRoute, getPermission }
})
