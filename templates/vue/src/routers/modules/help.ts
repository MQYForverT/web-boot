import type { RouteComponent } from 'vue-router'

//后端数据化为平板数据
export const initChildDataToFlat = (
	result: Menu.permissionMenu[] = [],
	data: Menu.permissionMenu[] = [],
): Menu.permissionMenu[] => {
	data.forEach((x) => {
		const obj = {
			permission: x.permission,
			sort: x.sort || 1,
		}

		result.push(obj)

		if (x.children && x.children.length > 0) {
			initChildDataToFlat(result, x.children)
		}
	})
	return result
}

/**
 * 验证当前路由是否有权限，并排序
 * 路由  在返回的资源权限找到匹配code则说明有权限
 * @param {*} localRoutes //本地所有页面
 * @param {*} result //后台数据
 * @param {*} tree //后台数据是否树形结构，如果是，则需要化为平板数据
 * @returns routeList: 排序后的路由列表
 * @returns routeListFlat: 处理后的权限数据
 * @returns keepAliveNames: 需要缓存的路由列表
 */
export const getPermissionData = (
	localRoutes: Menu.MenuOptions<RouteComponent>[],
	result: Menu.permissionMenu[],
	tree: boolean = false,
) => {
	if (tree) {
		result = initChildDataToFlat([], result)
	}

	const keepAliveList: Menu.MenuOptions<RouteComponent>[] = []
	const routeListFlat: Menu.MenuOptions<RouteComponent>[] = []
	const sortMap = new Map(result.map((item) => [item.permission, item.sort || 1]))

	// 递归处理路由及其子路由
	const processRoutes = (routes: Menu.MenuOptions<RouteComponent>[] = []) => {
		return routes
			.filter((item) => {
				// 有权限
				const isPermission = sortMap.has(item.name as string)

				if (isPermission) {
					// 如果当前路由需要缓存，添加到keepAliveList
					if (item.meta?.isKeepAlive) {
						keepAliveList.push(item)
					}

					// 添加到平板路由列表
					routeListFlat.push(item)

					// 递归处理子路由
					if (item.children && item.children.length > 0) {
						item.children = processRoutes(item.children)
					}

					return true
				}

				return false
			})
			.sort((a, b) => {
				const aSort = sortMap.get(a.name as string) || 0
				const bSort = sortMap.get(b.name as string) || 0
				return aSort - bSort
			})
	}

	const routeList = processRoutes(localRoutes)

	return {
		routeList,
		routeListFlat,
		keepAliveList,
	}
}
