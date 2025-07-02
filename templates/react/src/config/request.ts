import { createAxiosInstance } from '@tsoul/utils/dist/axios'
import globalStore from '@/stores'
import routesStore from '@/stores/modules/routes'

/**
 * 创建 Axios 实例
 * 1、自动添加请求头token
 * 2、自动处理响应结果，只返回data
 * 3、自动收集所有的请求，当请求结束时会自动清理【如果不想当前接口被收集，设置headers.skipCancel】，也可手动调用cancelAllRequests方法提前全部清理，在页面跳转时很有用
 * 4、插件内置的请求拦截【A】和响应拦截【B】和自定义的请求拦截【C】和响应拦截【D】顺序为：C -> A -> B -> D
 */
const $axios = createAxiosInstance({
	baseURL: import.meta.env.VITE_BASE_API,
})

// 请求拦截器
$axios.interceptors.request.use(async (config) => {
	const headers = config.headers || {}
	headers.Authorization = `Bearer ${globalStore.token}`
	config.headers = headers
	return config
})

// 响应拦截器
$axios.interceptors.response.use(
	(response) => {
		const { data } = response

		if (response.status === 200) {
			return data
		} else {
			// 未登录
			globalStore.setToken('')
			routesStore.resetRoute() // 删除/重置路由

			return Promise.reject(data)
		}
	},
	(error: any) => {
		// 401
		if (error.response?.status === 401) {
			// 未登录
			globalStore.setToken('')
			routesStore.resetRoute() // 删除/重置路由
		}
		return Promise.reject(error)
	},
)

export default $axios
