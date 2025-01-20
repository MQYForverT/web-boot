/*
 * @Author: ch
 * @Date: 2022-07-22 10:53:38
 * @LastEditors: ch
 * @LastEditTime: 2022-08-20 22:03:25
 * @Description: 请求拦截器，不允许在这里些业务逻辑，这里只做了请求体和请求结果处理；
 * 支持form请求，二进制文件请求
 */

import axios, { CancelTokenSource } from 'axios'
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import qs from 'qs'
import downBlobFile from './downBlobFile'

type myRequestConfig = InternalAxiosRequestConfig & {
	requestId?: string
}

type myAxiosInstance = AxiosInstance & {
	cancelAllRequests: () => void
}

class Axios {
	private defaultConfig: AxiosRequestConfig
	private requestMap: Map<string, CancelTokenSource> = new Map()
	public instance: myAxiosInstance

	// 传入用户默认配置
	constructor(config?: AxiosRequestConfig) {
		this.defaultConfig = {
			...this.getInsideConfig(),
			...config,
		}

		this.instance = axios.create(this.defaultConfig) as myAxiosInstance
		// 绑定拦截器
		this.interceptors(this.instance)
		// 挂载cancelAllRequests方法到instance
		this.instance.cancelAllRequests = this.cancelAllRequests.bind(this)
	}

	// 得到插件默认配置
	private getInsideConfig(): AxiosRequestConfig {
		const config: AxiosRequestConfig = {
			timeout: 5000,
			// 数组支持
			paramsSerializer: function (params) {
				return qs.stringify(params, { arrayFormat: 'repeat' })
			},
		}

		return config
	}

	private interceptors(instance: myAxiosInstance) {
		instance.interceptors.request.use(
			// 传入用户自定义配置
			(config: myRequestConfig) => {
				const url = config.url // 动态获取请求的URL
				// 创建取消令牌和取消函数
				if (url && !config.headers.skipCancel) {
					const cancelTokenSource = axios.CancelToken.source()
					config.cancelToken = cancelTokenSource.token

					// 使用url+随机数 防止业务出现需要调用相同接口的情况
					const requestId = `${url}-${performance.now().toString()}`
					config.requestId = requestId

					// 将取消函数存储到请求 Map 中
					this.requestMap.set(requestId, cancelTokenSource)
				}

				// 请求二进制文件流
				if (config.headers.isFile) {
					config.responseType = 'blob'
				}

				return config
			},
			(error: unknown) => {
				return Promise.reject(error)
			},
		)

		instance.interceptors.response.use(
			(response) => {
				const { headers } = response
				const config: myRequestConfig = response.config
				if (config.requestId) {
					this.requestMap.delete(config.requestId)
				}

				// 判断是否是文件
				const contentType = headers['content-type']
				if (config.headers.isFile && contentType === 'application/msexcel;charset=UTF-8') {
					downBlobFile(response)
				}

				return response
			},
			(error) => {
				// 请求完成后从 Map 中移除
				const config: myRequestConfig = error.config
				if (config.requestId) {
					this.requestMap.delete(config.requestId)
				}

				return Promise.reject(error)
			},
		)
	}

	// 可以取消所有请求，在路由跳转时很有用
	private cancelAllRequests(): void {
		this.requestMap.forEach((cancelTokenSource, url) => {
			cancelTokenSource.cancel(`Cancel ${url}`)
		})
		this.requestMap.clear()
	}
}

// 导出工厂函数来创建 Axios 实例
export function createAxiosInstance(config?: AxiosRequestConfig): myAxiosInstance {
	const axiosInstance = new Axios(config).instance
	return axiosInstance
}
