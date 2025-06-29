import { writable } from 'svelte/store'
import { getPermissionData } from '@/routers/modules/help'
import { localRoutes } from '@/routers'

// 定义路由状态类型
interface RouteOption {
	path?: string
	name?: string
	component?: any
	meta?: {
		title?: string
		isKeepAlive?: boolean
		icon?: string
		isAffix?: boolean
		isShowFooter?: boolean
	}
	children?: RouteOption[]
	redirect?: string
}

// 定义路由状态store
const createRoutesStore = () => {
	const routeList = writable<RouteOption[]>([])
	const routeListFlat = writable<RouteOption[]>([])
	const tagsViewRoutes = writable<RouteOption[]>([])
	const keepAliveNames = writable<RouteOption[]>([])

	const resetRoute = () => {
		routeList.set([])
		tagsViewRoutes.set([])
		keepAliveNames.set([])
	}

	const getPermission = async () => {
		// 重置路由
		resetRoute()

		let routerResult: RouteOption[] = [] // 结果集

		// const { result, error } = await ApiGetPermission()
		// // 结果集格式化
		// if (!HandleApiError(error)) {
		//   // 如果后端返回的是树形结构则需要先化为平板数据
		//   routerResult = getPermissionData(localRoutes, result)
		// }
		// 模拟接口
		const result: Menu.permissionMenu[] = [
			{ permission: 'home', children: [{ permission: 'home1' }] },
			{
				permission: 'menu',
				children: [{ permission: 'menu1', children: [{ permission: 'menu11' }] }, { permission: 'menu2' }],
			},
		]
		const resultData = getPermissionData(localRoutes, result, true)

		// 更新状态
		routerResult = resultData.routeList
		routeListFlat.set(resultData.routeListFlat)

		// 设置keepAlive 缓存
		keepAliveNames.set(resultData.keepAliveList)

		// 添加动态路由
		if (routerResult.length > 0) {
			// 添加路由
			routeList.set(routerResult)

			// 设置菜单列表
			tagsViewRoutes.set([routerResult[0]])
		}
	}

	return {
		routeList: {
			subscribe: routeList.subscribe,
		},
		routeListFlat: {
			subscribe: routeListFlat.subscribe,
		},
		tagsViewRoutes: {
			subscribe: tagsViewRoutes.subscribe,
		},
		keepAliveNames: {
			subscribe: keepAliveNames.subscribe,
		},
		resetRoute,
		getPermission,
	}
}

// 创建并导出路由store实例
export const routesStore = createRoutesStore()
