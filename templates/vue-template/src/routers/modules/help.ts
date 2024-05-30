interface BaseNode {
	children?: BaseNode[]
}

//后端数据化为平板数据
export const initChildDataToFlat = <R>(result: R[] = [], data: Record<string, unknown>[] = []): R[] => {
	data.forEach((x) => {
		if (R?) {
			const newItem = {} as R
			for (const key in config) {
				if (x.hasOwnProperty(key)) {
					newItem[key] = x[config[key]]
				}
			}
			result.push(newItem)
		} else {
			result.push(x)
		}

		if (x.children && x.children.length > 0) {
			initChildDataToFlat(result, x.children)
		}
	})
	return result
}

/**
 * 验证当前路由是否有权限，并排序
 * 路由  在返回的资源权限找到匹配code则说明有权限
 * @param {*} permissionRoute //本地所有页面
 * @param {*} result //后台数据
 * @param {*} tree //后台数据是否树形结构，如果是，则需要化为平板数据
 * @returns 排序好的路由数组
 */
export const getPermissionData = (
	permissionRoute: Menu.MenuOptions[],
	result: Menu.permissionMenu[],
	tree: boolean = false,
): Menu.MenuOptions[] => {
	if (tree) {
		result = initChildDataToFlat<Menu.permissionMenu>([], result)
	}
	const sortMap = new Map(result.map((item) => [item.permission, item.sort || 1]))

	return permissionRoute
		.filter((item) => {
			//有权限
			const isPermission = sortMap.has(item.name)
			if (isPermission && item.children) {
				item.children = getPermissionData(item.children, result)
			}
			return isPermission
		})
		.sort((item1, item2) => sortMap.get(item1.name)! - sortMap.get(item2.name)!)
}
