export interface IFandPath {
	path: string
	title: string
	redirect?: string
}

// 返回全链路数组
export function findFullPath(menuList: Layout.Menu[], targetPath: string): IFandPath[] {
	for (const item of menuList) {
		const obj = {
			path: item.path,
			title: item.title,
			redirect: item.redirect,
		}
		if (item.path === targetPath) {
			return [obj]
		}
		if (item.children?.length) {
			const childPath = findFullPath(item.children, targetPath)
			if (childPath.length) {
				return [item, ...childPath]
			}
		}
	}
	return []
}

// 根据path，找到具体的path
export function findPath(menuList: Layout.Menu[], targetPath: string): Layout.TabsView | undefined {
	for (const item of menuList) {
		if (item.path === targetPath && !item.redirect) {
			const obj = {
				path: item.path,
				title: item.title,
				icon: item.icon,
				affix: item.affix,
			}
			return obj
		} else if (item.children?.length) {
			const found = findPath(item.children, targetPath)
			if (found) {
				return found
			}
		}
	}
	return undefined
}

// 获取第一个有效path
export const getActivePath = (menu: Layout.Menu): string => {
	// 如果有重定向到子级路由，则继续找下去
	if (menu.redirect && menu.children?.length) {
		return getActivePath(menu.children[0])
	}
	return menu.path
}
