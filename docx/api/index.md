# API 文档

## 概述

Web Boot 项目提供了丰富的 API 接口，支持各种前端框架和开发需求。本文档详细介绍了所有可用的 API 接口、使用方法和最佳实践。

## 快速开始

### 安装

```bash
# 安装 API 客户端
pnpm add @web-boot/api-client
```

### 基础配置

```typescript
import { ApiClient } from '@web-boot/api-client'

const apiClient = new ApiClient({
	baseURL: 'https://api.web-boot.com',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
})
```

## API 分类

### 🔧 核心 API

- [配置管理](./config.md) - 应用配置和系统设置
- [用户管理](./user.md) - 用户认证和权限管理
- [项目管理](./project.md) - 项目创建和管理

### 🎨 组件 API

- [布局组件](./layout.md) - BackgroundLayout 相关接口
- [登录组件](./login.md) - BackgroundLogin 相关接口
- [公共组件](./common.md) - 通用组件接口

### 🛠️ 工具 API

- [文件处理](./file.md) - 文件上传、下载和管理
- [数据处理](./data.md) - 数据转换和处理
- [缓存管理](./cache.md) - 缓存操作和管理

### 📊 监控 API

- [性能监控](./performance.md) - 应用性能指标
- [错误追踪](./error.md) - 错误日志和追踪
- [用户行为](./analytics.md) - 用户行为分析

## 认证方式

### Bearer Token

```typescript
// 设置认证 token
apiClient.setAuthToken('your-token-here')

// 或在请求头中设置
const response = await apiClient.get('/api/user', {
	headers: {
		Authorization: 'Bearer your-token-here',
	},
})
```

### API Key

```typescript
// 设置 API Key
apiClient.setApiKey('your-api-key')

// 或在请求头中设置
const response = await apiClient.get('/api/data', {
	headers: {
		'X-API-Key': 'your-api-key',
	},
})
```

## 请求格式

### 基础请求

```typescript
// GET 请求
const users = await apiClient.get('/api/users')

// POST 请求
const newUser = await apiClient.post('/api/users', {
	name: 'John Doe',
	email: 'john@example.com',
})

// PUT 请求
const updatedUser = await apiClient.put('/api/users/1', {
	name: 'Jane Doe',
})

// DELETE 请求
await apiClient.delete('/api/users/1')
```

### 查询参数

```typescript
// 带查询参数的请求
const users = await apiClient.get('/api/users', {
	params: {
		page: 1,
		limit: 10,
		search: 'john',
		sort: 'name',
		order: 'asc',
	},
})
```

### 文件上传

```typescript
// 单文件上传
const formData = new FormData()
formData.append('file', file)

const result = await apiClient.post('/api/upload', formData, {
	headers: {
		'Content-Type': 'multipart/form-data',
	},
})

// 多文件上传
const formData = new FormData()
files.forEach((file) => {
	formData.append('files', file)
})

const result = await apiClient.post('/api/upload/multiple', formData)
```

## 响应格式

### 成功响应

```typescript
{
  success: true,
  data: {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  },
  message: '操作成功',
  timestamp: '2024-01-20T10:30:00Z'
}
```

### 错误响应

```typescript
{
  success: false,
  error: {
    code: 'VALIDATION_ERROR',
    message: '输入参数验证失败',
    details: [
      {
        field: 'email',
        message: '邮箱格式不正确'
      }
    ]
  },
  timestamp: '2024-01-20T10:30:00Z'
}
```

## 错误处理

### 全局错误处理

```typescript
// 设置全局错误处理器
apiClient.onError((error) => {
	console.error('API Error:', error)

	if (error.status === 401) {
		// 处理未授权错误
		router.push('/login')
	} else if (error.status === 403) {
		// 处理禁止访问错误
		ElMessage.error('没有权限访问此资源')
	} else if (error.status >= 500) {
		// 处理服务器错误
		ElMessage.error('服务器错误，请稍后重试')
	}
})
```

### 请求级别错误处理

```typescript
try {
	const user = await apiClient.get('/api/user/1')
	console.log('用户信息:', user)
} catch (error) {
	if (error.status === 404) {
		ElMessage.error('用户不存在')
	} else {
		ElMessage.error('获取用户信息失败')
	}
}
```

## 拦截器

### 请求拦截器

```typescript
// 添加请求拦截器
apiClient.interceptors.request.use((config) => {
	// 添加认证 token
	const token = localStorage.getItem('token')
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	// 添加时间戳
	config.params = {
		...config.params,
		_t: Date.now(),
	}

	return config
})
```

### 响应拦截器

```typescript
// 添加响应拦截器
apiClient.interceptors.response.use(
	(response) => {
		// 处理成功响应
		return response.data
	},
	(error) => {
		// 处理错误响应
		if (error.status === 401) {
			// 清除无效 token
			localStorage.removeItem('token')
			router.push('/login')
		}

		return Promise.reject(error)
	},
)
```

## 缓存策略

### 内存缓存

```typescript
// 启用内存缓存
apiClient.setCache({
	enabled: true,
	maxAge: 5 * 60 * 1000, // 5分钟
	maxSize: 100, // 最大缓存条目数
})

// 缓存特定请求
const users = await apiClient.get('/api/users', {
	cache: {
		key: 'users-list',
		maxAge: 10 * 60 * 1000, // 10分钟
	},
})
```

### 本地存储缓存

```typescript
// 使用本地存储缓存
const user = await apiClient.get('/api/user/1', {
	cache: {
		storage: 'localStorage',
		key: 'user-1',
		maxAge: 24 * 60 * 60 * 1000, // 24小时
	},
})
```

## 分页处理

### 标准分页

```typescript
// 获取分页数据
const response = await apiClient.get('/api/users', {
  params: {
    page: 1,
    limit: 20
  }
})

// 响应格式
{
  data: [...], // 数据列表
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
    totalPages: 5,
    hasNext: true,
    hasPrev: false
  }
}
```

### 无限滚动

```typescript
// 无限滚动加载
const loadMore = async (page: number) => {
	const response = await apiClient.get('/api/users', {
		params: {
			page,
			limit: 20,
		},
	})

	return response.data
}
```

## 实时通信

### WebSocket 连接

```typescript
// 建立 WebSocket 连接
const ws = apiClient.createWebSocket('/ws/notifications')

ws.on('message', (data) => {
	console.log('收到消息:', data)
})

ws.on('error', (error) => {
	console.error('WebSocket 错误:', error)
})

// 发送消息
ws.send({
	type: 'subscribe',
	channel: 'user-notifications',
})
```

### Server-Sent Events

```typescript
// 监听服务器推送事件
const eventSource = apiClient.createEventSource('/api/events')

eventSource.onmessage = (event) => {
	const data = JSON.parse(event.data)
	console.log('收到事件:', data)
}

eventSource.onerror = (error) => {
	console.error('SSE 错误:', error)
}
```

## 性能优化

### 请求合并

```typescript
// 合并多个请求
const [users, posts, comments] = await Promise.all([
	apiClient.get('/api/users'),
	apiClient.get('/api/posts'),
	apiClient.get('/api/comments'),
])
```

### 请求去重

```typescript
// 启用请求去重
apiClient.setDeduplication(true)

// 相同请求只会执行一次
const user1 = await apiClient.get('/api/user/1')
const user2 = await apiClient.get('/api/user/1') // 使用缓存结果
```

### 预加载

```typescript
// 预加载数据
apiClient.preload('/api/users')

// 在需要时快速获取
const users = await apiClient.get('/api/users') // 从缓存获取
```

## 测试

### 单元测试

```typescript
import { describe, it, expect, vi } from 'vitest'
import { ApiClient } from '@web-boot/api-client'

describe('ApiClient', () => {
	it('should make GET request', async () => {
		const apiClient = new ApiClient()
		const mockResponse = { id: 1, name: 'John' }

		vi.spyOn(global, 'fetch').mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockResponse),
		} as Response)

		const result = await apiClient.get('/api/user/1')
		expect(result).toEqual(mockResponse)
	})
})
```

### 集成测试

```typescript
import { describe, it, expect } from 'vitest'
import { ApiClient } from '@web-boot/api-client'

describe('API Integration', () => {
	const apiClient = new ApiClient({
		baseURL: 'http://localhost:3000',
	})

	it('should create and retrieve user', async () => {
		// 创建用户
		const newUser = await apiClient.post('/api/users', {
			name: 'Test User',
			email: 'test@example.com',
		})

		expect(newUser.id).toBeDefined()

		// 获取用户
		const user = await apiClient.get(`/api/users/${newUser.id}`)
		expect(user.name).toBe('Test User')
	})
})
```

## 最佳实践

### 1. 错误处理

```typescript
// 创建统一的错误处理函数
const handleApiError = (error: any) => {
	if (error.status === 401) {
		// 重新登录
		authStore.logout()
		router.push('/login')
	} else if (error.status === 403) {
		ElMessage.error('权限不足')
	} else if (error.status >= 500) {
		ElMessage.error('服务器错误，请稍后重试')
	} else {
		ElMessage.error(error.message || '请求失败')
	}
}

// 在请求中使用
try {
	const data = await apiClient.get('/api/data')
} catch (error) {
	handleApiError(error)
}
```

### 2. 类型安全

```typescript
// 定义接口类型
interface User {
	id: number
	name: string
	email: string
	createdAt: string
}

interface CreateUserRequest {
	name: string
	email: string
}

// 使用类型化的 API 调用
const createUser = async (data: CreateUserRequest): Promise<User> => {
	return apiClient.post('/api/users', data)
}

const getUser = async (id: number): Promise<User> => {
	return apiClient.get(`/api/users/${id}`)
}
```

### 3. 环境配置

```typescript
// 根据环境配置 API
const config = {
	development: {
		baseURL: 'http://localhost:3000/api',
		timeout: 10000,
	},
	production: {
		baseURL: 'https://api.web-boot.com',
		timeout: 5000,
	},
}

const apiClient = new ApiClient(config[process.env.NODE_ENV])
```

## 常见问题

### 1. CORS 错误

**问题**: 跨域请求被阻止

**解决方案**:

```typescript
// 在服务器端配置 CORS
app.use(
	cors({
		origin: ['http://localhost:3000', 'https://your-domain.com'],
		credentials: true,
	}),
)

// 或在客户端使用代理
const apiClient = new ApiClient({
	baseURL: '/api', // 使用相对路径
	proxy: true,
})
```

### 2. 请求超时

**问题**: 请求经常超时

**解决方案**:

```typescript
// 增加超时时间
const apiClient = new ApiClient({
	timeout: 30000, // 30秒
})

// 或为特定请求设置超时
const data = await apiClient.get('/api/slow-endpoint', {
	timeout: 60000, // 60秒
})
```

### 3. 内存泄漏

**问题**: 长时间运行后内存占用过高

**解决方案**:

```typescript
// 定期清理缓存
setInterval(
	() => {
		apiClient.clearCache()
	},
	5 * 60 * 1000,
) // 每5分钟清理一次

// 或在组件卸载时清理
onUnmounted(() => {
	apiClient.clearCache()
})
```

## 更新日志

### v1.0.0

- 初始版本发布
- 支持基础的 HTTP 请求方法
- 集成认证和错误处理
- 支持请求拦截器和响应拦截器
- 提供缓存和性能优化功能
