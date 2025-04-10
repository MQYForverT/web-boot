import { observable, action, runInAction, makeObservable } from 'mobx'
import { getPermissionData } from '@/routers/modules/help'
import { localRoutes } from '@/routers/index.tsx'
import type { LazyExoticComponent } from 'react'

// 定义路由状态类
class RoutesStore {
	@observable routeList: Menu.MenuOptions<LazyExoticComponent<any>>[] = []
	@observable routeListFlat: Menu.MenuOptions<LazyExoticComponent<any>>[] = []
	@observable tagsViewRoutes: Menu.MenuOptions<LazyExoticComponent<any>>[] = []
	@observable keepAliveNames: Menu.MenuOptions<LazyExoticComponent<any>>[] = []

	constructor() {
		makeObservable(this)
	}

	@action
	resetRoute = () => {
		this.routeList = []
		this.tagsViewRoutes = []
		this.keepAliveNames = []
	}

	@action
	getPermission = async () => {
		// 重置路由
		this.resetRoute()

		let routerResult: Menu.MenuOptions<LazyExoticComponent<any>>[] = [] // 结果集

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

		// 使用runInAction包裹多个状态更新
		runInAction(() => {
			routerResult = resultData.routeList
			this.routeListFlat = resultData.routeListFlat

			// 设置keepAlive 缓存
			this.keepAliveNames = resultData.keepAliveList

			// 添加动态路由
			if (routerResult.length > 0) {
				// 添加路由
				this.routeList = routerResult

				// 设置菜单列表
				this.tagsViewRoutes = [routerResult[0]]
			}
		})
	}
}

// 创建并导出单例
const routesStore = new RoutesStore()
export default routesStore
