# 实用工具函数

**@mqy/utils** - 项目开发中常用的工具函数库，提供 HTTP 请求、进度条、特效等实用功能。

## 📦 安装

```bash
npm install @mqy/utils
```

## 🚀 快速开始

```typescript
import { httpRequest, nprogress, typewriter, compatibleScrollTo } from '@mqy/utils'

// HTTP 请求
const data = await httpRequest.get('/api/users')

// 进度条
nprogress.start()

// 打字机效果
await typewriter.type('Hello World!')

// 兼容性滚动
compatibleScrollTo({ top: 0, behavior: 'smooth' })
```

## 🌐 HTTP 请求工具

### 基础用法

```typescript
import { httpRequest } from '@mqy/utils'

// GET 请求
const users = await httpRequest.get('/api/users')
const user = await httpRequest.get('/api/users/1')

// POST 请求
const newUser = await httpRequest.post('/api/users', {
	name: 'John Doe',
	email: 'john@example.com',
})

// PUT 请求
const updatedUser = await httpRequest.put('/api/users/1', {
	name: 'Jane Doe',
})

// DELETE 请求
await httpRequest.delete('/api/users/1')
```

### 高级功能

**文件上传**：

```typescript
import { httpRequest } from '@mqy/utils'

// 单文件上传
const file = document.querySelector('input[type="file"]').files[0]
const result = await httpRequest.upload('/api/upload', file)

// 多文件上传
const files = Array.from(document.querySelector('input[type="file"]').files)
const results = await httpRequest.uploadMultiple('/api/upload/batch', files)

// 带进度的上传
const result = await httpRequest.upload('/api/upload', file, {
	onProgress: (progress) => {
		console.log(`上传进度: ${progress}%`)
	},
})
```

**文件下载**：

```typescript
import { httpRequest, downBlobFile } from '@mqy/utils'

// 直接下载
await httpRequest.download('/api/download/file.pdf')

// 获取文件数据后处理
const blob = await httpRequest.downloadBlob('/api/export/data.xlsx')
downBlobFile(blob, 'exported-data.xlsx')

// 带进度的下载
await httpRequest.download('/api/large-file.zip', {
	onProgress: (progress) => {
		console.log(`下载进度: ${progress}%`)
	},
})
```

### 请求配置

```typescript
import { httpRequest } from '@mqy/utils'

// 全局配置
httpRequest.configure({
	baseURL: 'https://api.example.com',
	timeout: 10000,
	headers: {
		Authorization: 'Bearer your-token',
		'Content-Type': 'application/json',
	},
})

// 请求拦截器
httpRequest.interceptors.request.use((config) => {
	// 添加时间戳
	config.params = {
		...config.params,
		_t: Date.now(),
	}
	return config
})

// 响应拦截器
httpRequest.interceptors.response.use(
	(response) => {
		// 统一处理响应数据
		return response.data
	},
	(error) => {
		// 统一错误处理
		console.error('请求失败:', error.message)
		throw error
	},
)
```

### 错误处理

```typescript
try {
	const data = await httpRequest.get('/api/users')
} catch (error) {
	if (error.response) {
		// 服务器响应错误
		console.error('状态码:', error.response.status)
		console.error('错误信息:', error.response.data.message)
	} else if (error.request) {
		// 网络错误
		console.error('网络错误:', error.message)
	} else {
		// 其他错误
		console.error('请求配置错误:', error.message)
	}
}
```

## 📊 进度条工具

### 基础用法

```typescript
import { nprogress } from '@mqy/utils'

// 开始进度条
nprogress.start()

// 设置进度
nprogress.set(0.4)

// 增加进度
nprogress.inc()

// 完成进度
nprogress.done()
```

### 高级配置

```typescript
import { nprogress } from '@mqy/utils'

// 自定义配置
nprogress.configure({
	// 显示旋转器
	showSpinner: false,

	// 动画速度
	speed: 200,

	// 最小百分比
	minimum: 0.08,

	// 递增步长
	trickleSpeed: 200,

	// 自定义模板
	template:
		'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
})

// 自定义样式
nprogress.configure({
	// 自定义 CSS
	css: `
    #nprogress .bar {
      background: #29d !important;
    }
    #nprogress .peg {
      box-shadow: 0 0 10px #29d, 0 0 5px #29d !important;
    }
    #nprogress .spinner-icon {
      border-top-color: #29d !important;
      border-left-color: #29d !important;
    }
  `,
})
```

### 路由集成

**Vue Router**：

```typescript
import { nprogress } from '@mqy/utils'
import router from './router'

router.beforeEach((to, from, next) => {
	nprogress.start()
	next()
})

router.afterEach(() => {
	nprogress.done()
})
```

**React Router**：

```typescript
import { nprogress } from '@mqy/utils'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  useEffect(() => {
    nprogress.start()
    const timer = setTimeout(() => nprogress.done(), 500)
    return () => clearTimeout(timer)
  }, [location])

  return <div>...</div>
}
```

## ⌨️ 打字机效果

### 基础用法

```typescript
import { typewriter } from '@mqy/utils'

// 简单打字效果
await typewriter.type('Hello World!')

// 在指定元素中打字
const element = document.getElementById('typewriter')
await typewriter.type('Hello World!', { element })
```

### 高级配置

```typescript
import { typewriter } from '@mqy/utils'

// 完整配置
await typewriter.type('Welcome to Web Boot!', {
	// 目标元素
	element: document.getElementById('hero-text'),

	// 打字速度（毫秒/字符）
	speed: 100,

	// 显示光标
	cursor: true,

	// 光标字符
	cursorChar: '|',

	// 光标闪烁
	cursorBlink: true,

	// 是否循环
	loop: true,

	// 循环间隔
	delay: 2000,

	// 删除效果
	deleteAfter: true,

	// 删除速度
	deleteSpeed: 50,

	// 删除延迟
	deleteDelay: 1000,
})
```

### 多段文本

```typescript
import { typewriter } from '@mqy/utils'

// 依次显示多段文本
const texts = ['Welcome to Web Boot!', 'Build amazing applications.', 'With modern web technologies.']

for (const text of texts) {
	await typewriter.type(text, {
		element: document.getElementById('hero-text'),
		speed: 80,
		deleteAfter: true,
		deleteDelay: 2000,
	})
}
```

### 实时控制

```typescript
import { typewriter } from '@mqy/utils'

// 开始打字
const instance = typewriter.start('Your text here...', {
	element: document.getElementById('text'),
	speed: 100,
})

// 暂停
instance.pause()

// 恢复
instance.resume()

// 停止
instance.stop()

// 重置
instance.reset()
```

## 📜 兼容性滚动

### 基础用法

```typescript
import { compatibleScrollTo } from '@mqy/utils'

// 滚动到顶部
compatibleScrollTo({ top: 0 })

// 滚动到指定位置
compatibleScrollTo({
	top: 500,
	left: 0,
	behavior: 'smooth',
})

// 滚动到元素位置
const element = document.getElementById('target')
compatibleScrollTo({
	element,
	behavior: 'smooth',
	block: 'start',
	inline: 'nearest',
})
```

### 高级功能

```typescript
import { compatibleScrollTo } from '@mqy/utils'

// 带回调的滚动
compatibleScrollTo({
	top: 1000,
	behavior: 'smooth',
	duration: 1000,
	onComplete: () => {
		console.log('滚动完成')
	},
	onCancel: () => {
		console.log('滚动被取消')
	},
})

// 自定义缓动函数
compatibleScrollTo({
	top: 500,
	duration: 800,
	easing: 'easeInOutQuad', // 'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad'
})

// 滚动容器内的元素
compatibleScrollTo({
	container: document.getElementById('scroll-container'),
	top: 300,
	behavior: 'smooth',
})
```

## 🔄 函数重载工具

### 基础用法

```typescript
import { createOverload } from '@mqy/utils'

// 创建重载函数
const myFunction = createOverload()
	.add('string', (str: string) => `String: ${str}`)
	.add('number', (num: number) => `Number: ${num}`)
	.add(['string', 'number'], (str: string, num: number) => `String: ${str}, Number: ${num}`)
	.build()

// 使用
console.log(myFunction('hello')) // "String: hello"
console.log(myFunction(42)) // "Number: 42"
console.log(myFunction('hello', 42)) // "String: hello, Number: 42"
```

### 复杂类型支持

```typescript
import { createOverload } from '@mqy/utils'

interface User {
	name: string
	age: number
}

const processData = createOverload()
	.add('string', (data: string) => ({ type: 'string', value: data }))
	.add('number', (data: number) => ({ type: 'number', value: data }))
	.add('object', (data: User) => ({ type: 'user', value: data }))
	.add(['string', 'object'], (id: string, user: User) => ({
		type: 'update',
		id,
		user,
	}))
	.build()

// 使用
processData('hello')
processData(42)
processData({ name: 'John', age: 30 })
processData('user1', { name: 'John', age: 30 })
```

## 🛠️ 其他实用函数

### 防抖和节流

```typescript
import { debounce, throttle } from '@mqy/utils'

// 防抖
const debouncedFn = debounce((value: string) => {
	console.log('搜索:', value)
}, 300)

// 节流
const throttledFn = throttle(() => {
	console.log('滚动事件')
}, 100)

// 取消
debouncedFn.cancel()
throttledFn.cancel()
```

### 深拷贝

```typescript
import { deepClone } from '@mqy/utils'

const original = {
	name: 'John',
	hobbies: ['reading', 'coding'],
	address: {
		city: 'New York',
		zipCode: '10001',
	},
}

const cloned = deepClone(original)
```

### 日期格式化

```typescript
import { formatDate, parseDate } from '@mqy/utils'

// 格式化日期
const formatted = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
const short = formatDate(new Date(), 'MM/DD/YYYY')

// 解析日期
const date = parseDate('2024-01-20', 'YYYY-MM-DD')
```

### 本地存储

```typescript
import { storage } from '@mqy/utils'

// localStorage 封装
storage.local.set('user', { name: 'John', age: 30 })
const user = storage.local.get('user')
storage.local.remove('user')
storage.local.clear()

// sessionStorage 封装
storage.session.set('token', 'abc123')
const token = storage.session.get('token')

// 带过期时间的存储
storage.local.set('temp-data', data, 3600) // 1小时后过期
```

## 📋 完整示例

### 综合使用示例

```typescript
import { httpRequest, nprogress, typewriter, compatibleScrollTo, debounce } from '@mqy/utils'

class DataService {
	constructor() {
		// 配置 HTTP 请求
		httpRequest.configure({
			baseURL: '/api',
			timeout: 10000,
		})

		// 配置进度条
		nprogress.configure({
			showSpinner: false,
			speed: 300,
		})

		// 搜索防抖
		this.debouncedSearch = debounce(this.search.bind(this), 300)
	}

	async loadData() {
		try {
			nprogress.start()
			const data = await httpRequest.get('/users')
			nprogress.done()
			return data
		} catch (error) {
			nprogress.done()
			throw error
		}
	}

	async search(keyword: string) {
		const results = await httpRequest.get('/search', { q: keyword })
		return results
	}

	async showWelcome() {
		await typewriter.type('Welcome to our application!', {
			element: document.getElementById('welcome'),
			speed: 80,
			cursor: true,
		})

		// 滚动到内容区域
		setTimeout(() => {
			compatibleScrollTo({
				element: document.getElementById('content'),
				behavior: 'smooth',
				block: 'start',
			})
		}, 2000)
	}
}

// 使用
const service = new DataService()
service.showWelcome()
service.loadData().then((data) => console.log(data))
```

## 🚀 最佳实践

1. **统一错误处理**：在应用入口配置全局错误拦截
2. **合理使用防抖节流**：避免频繁的网络请求或计算
3. **进度反馈**：长时间操作添加进度提示
4. **用户体验优化**：使用动画和特效提升交互体验
5. **性能考虑**：大数据量处理时注意内存占用
6. **兼容性处理**：在不同浏览器环境下测试工具函数

通过使用 @mqy/utils，您可以大大提升开发效率，同时确保代码的健壮性和用户体验。
