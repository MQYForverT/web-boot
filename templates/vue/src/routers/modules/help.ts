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
 * @returns result: 处理后的权限数据
 * @returns keepAliveNames: 需要缓存的路由列表
 */
export const getPermissionData = (
	localRoutes: Menu.MenuOptions[],
	result: Menu.permissionMenu[],
	tree: boolean = false,
) => {
	if (tree) {
		result = initChildDataToFlat([], result)
	}

	const keepAliveList: Menu.MenuOptions[] = []
	const sortMap = new Map(result.map((item) => [item.permission, item.sort || 1]))

	const routeList = localRoutes
		.filter((item) => {
			//有权限
			const isPermission = sortMap.has(item.name)

			if (isPermission) {
				if (item.meta?.isKeepAlive) {
					keepAliveList.push(item)
				}
				item.children && (item.children = getPermissionData(item.children, result).routeList)
			}
			return isPermission
		})
		.sort((item1, item2) => sortMap.get(item1.name)! - sortMap.get(item2.name)!)

	return {
		routeList,
		result,
		keepAliveList,
	}
}
