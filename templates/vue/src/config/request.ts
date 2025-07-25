import { createAxiosInstance } from '@tsoul/utils/axios'
// import { createAxiosInstance } from '../../../../internal/utils/axios'

/**
 * axios内置
 * 1、参数数组转换，默认超时5秒
 * 2、当下载文件时，接口设置headers.isFile即可【需要后端设置content-type=application/msexcel;charset=UTF-8】
 * 3、自动收集所有的请求，当请求结束时会自动清理【如果不想当前接口被收集，设置headers.skipCancel】，也可手动调用cancelAllRequests方法提前全部清理，在页面跳转时很有用
 * 4、插件内置的请求拦截【A】和响应拦截【B】和自定义的请求拦截【C】和响应拦截【D】顺序为：C -> A -> B -> D
 */
const $axios = createAxiosInstance({
	baseURL: import.meta.env.VITE_BASE_API,
})

$axios.interceptors.request.use(async (config) => {
	const headers = config.headers || {}
	headers.Authorization = `Bearer ${useGlobalStore().token.value}`
	config.headers = headers
	return config
})

$axios.interceptors.response.use(
	(response) => {
		const { data } = response

		if (response.status === 200) {
			return data
		} else {
			// 未登录
			useGlobalStore().token.value = ''

			useRoutesStore().resetRoute() // 删除/重置路由

			location.reload()
		}

		return Promise.reject({ ...data, msg: data.msg })
	},
	(error) => {
		const response = error.response || {}
		return Promise.reject({
			msg: `网络请求${error?.config?.url}=>错误：${response.statusText || error.msg}`,
		})
	},
)

export default $axios
