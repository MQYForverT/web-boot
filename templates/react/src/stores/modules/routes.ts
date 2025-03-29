import { useState, useCallback } from 'react'
import { getPermissionData } from '@/routers/modules/help'
import { localRoutes } from '@/routers'

export const useRoutesStore = () => {
	// state
	const [permissionFlat, setPermissionFlat] = useState<Menu.permissionMenu[]>([]) // 转换之后后端返回的数据，存的是平板数据
	const [routeList, setRouteList] = useState<Menu.MenuOptions[]>([]) // 添加的所有路由
	const [tagsViewRoutes, setTagsViewRoutes] = useState<Menu.MenuOptions[]>([]) //
	const [keepAliveNames, setKeepAliveNames] = useState<Menu.MenuOptions[]>([]) // 路由缓存（name字段）

	// 删除/重置路由
	const resetRoute = useCallback(() => {
		setRouteList([])
		setTagsViewRoutes([])
		setKeepAliveNames([])
	}, [])

	// 获取权限路由
	const getPermission = useCallback(async () => {
		// 重置路由
		resetRoute()

		let routerResult: Menu.MenuOptions[] = [] // 结果集

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

		routerResult = resultData.routeList
		setPermissionFlat(resultData.result)

		// 设置keepAlive 缓存
		setKeepAliveNames(resultData.keepAliveList)

		// 添加动态路由
		if (routerResult.length > 0) {
			routerResult = routerResult.map((item) => {
				return {
					...item,
					children: item.children?.map((child) => {
						if (child.meta?.isFull) {
							return {
								...child,
								component: child.component,
							}
						}
						return {
							...child,
							component: child.component,
						}
					}),
				}
			})

			// 添加路由
			setRouteList(routerResult)

			// 设置菜单列表
			setTagsViewRoutes(routerResult)
		}
	}, [resetRoute])

	return useCreation(
		() => ({
			permissionFlat,
			routeList,
			keepAliveNames,
			tagsViewRoutes,
			resetRoute,
			getPermission,
		}),
		[permissionFlat, routeList, keepAliveNames, tagsViewRoutes, resetRoute, getPermission],
	)
}
