# Axios 封装

## 📖 概述

`@tsoul/utils/axios` 是一个强大的 Axios 封装工具，提供了请求拦截、响应处理、文件下载等功能。它专注于请求的通用处理，而不涉及具体的业务逻辑。

## 🎯 特性

- **请求管理**: 支持取消请求、批量取消
- **文件处理**: 内置文件下载功能
- **类型支持**: 完整的 TypeScript 类型定义
- **灵活配置**: 支持自定义配置和扩展
- **拦截器**: 内置请求和响应拦截器
- **参数序列化**: 支持数组参数处理

## 📦 安装

### 包信息

- **包名**：`@tsoul/utils`
- **类型**：运行依赖
- **最新版本**：1.0.6

### 安装命令

::: code-group

```bash [pnpm (推荐)]
pnpm add @tsoul/utils
```

```bash [npm]
npm install @tsoul/utils
```

```bash [yarn]
yarn add @tsoul/utils
```

:::

## 🚀 快速开始

### 基础使用

```typescript
import { createAxiosInstance } from '@tsoul/utils/axios'

const axios = createAxiosInstance({
	timeout: 5000,
	// 其他配置
})

// 发起请求
const response = await axios.get('/api/data')
```

## 📝 功能示例

### 基本请求

```typescript
// GET 请求
const getData = async () => {
	const response = await axios.get('/api/data')
	return response.data
}

// POST 请求
const postData = async (data) => {
	const response = await axios.post('/api/data', data)
	return response.data
}
```

### 文件下载

```typescript
const downloadFile = async () => {
	await axios.get('/api/file', {
		isFile: true, // 标记为文件下载
		responseType: 'blob',
	})
}
```

### 取消请求

```typescript
// 取消单个请求
const source = axios.CancelToken.source()
axios.get('/api/data', {
	cancelToken: source.token,
})
source.cancel('Request canceled')

// 取消所有请求
axios.cancelAllRequests()
```

## 🔧 配置选项

### 实例配置

```typescript
const axios = createAxiosInstance({
	// 超时时间
	timeout: 5000,

	// 参数序列化
	paramsSerializer: function (params) {
		return qs.stringify(params, { arrayFormat: 'repeat' })
	},

	// 其他 Axios 配置
	// ...
})
```

### 请求配置

```typescript
interface myRequestConfig extends AxiosRequestConfig {
	requestId?: string // 请求ID
	skipCancel?: boolean // 是否跳过取消请求功能
	isFile?: boolean // 是否为文件请求
}
```

## 🎨 拦截器

### 请求拦截

```typescript
axios.interceptors.request.use(
	(config) => {
		// 处理请求配置
		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)
```

### 响应拦截

```typescript
axios.interceptors.response.use(
	(response) => {
		// 处理响应数据
		return response
	},
	(error) => {
		return Promise.reject(error)
	},
)
```

## 🚨 错误处理

```typescript
try {
	const response = await axios.get('/api/data')
} catch (error) {
	if (axios.isCancel(error)) {
		console.log('请求被取消')
	} else {
		console.error('请求错误:', error)
	}
}
```

## 📚 最佳实践

1. 创建实例时配置基础URL：

```typescript
const axios = createAxiosInstance({
	baseURL: process.env.API_BASE_URL,
})
```

2. 使用请求拦截器添加认证信息：

```typescript
axios.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${getToken()}`
	return config
})
```

3. 使用响应拦截器统一处理错误：

```typescript
axios.interceptors.response.use(
	(response) => response,
	(error) => {
		handleError(error)
		return Promise.reject(error)
	},
)
```

## 🔍 类型定义

```typescript
type myAxiosInstance = AxiosInstance & {
	cancelAllRequests: () => void
}

type myRequestConfig = AxiosRequestConfig & {
	requestId?: string
	skipCancel?: boolean
	isFile?: boolean
}
```

## 📚 相关资源

- [Axios 官方文档](https://axios-http.com/)
- [TypeScript 文档](https://www.typescriptlang.org/)
