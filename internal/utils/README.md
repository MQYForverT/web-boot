# @tsoul/utils

Web Boot 项目的工具函数库，提供了一系列实用的工具函数，包括 Axios 封装、进度条、打字机效果等。

## 特性

- 🚀 TypeScript 支持
- 📦 Tree-shaking 支持
- 🔄 模块化设计
- 🛡️ 类型安全
- 🎯 零依赖（除了必要的运行时依赖）
- 📚 完整的类型定义

## 安装

```bash
# npm
npm install @tsoul/utils

# yarn
yarn add @tsoul/utils

# pnpm
pnpm add @tsoul/utils
```

## 工具函数

### Axios 封装

增强的 Axios 实例，支持请求取消、文件下载等功能。

```typescript
import { createAxiosInstance } from '@tsoul/utils'

const axios = createAxiosInstance({
	baseURL: '/api',
	timeout: 5000,
})

// 发起请求
axios.get('/users')

// 取消所有请求（例如在路由切换时）
axios.cancelAllRequests()

// 下载文件
axios.get('/download', {
	isFile: true,
})
```

特性：

- 自动取消重复请求
- 文件下载支持
- 完整的类型提示
- 可自定义配置

### 进度条 (NProgress)

页面加载进度条，基于 nprogress。

```typescript
import { NProgress } from '@tsoul/utils'

// 开始加载
NProgress.start()

// 结束加载
NProgress.done()
```

### 打字机效果 (Typewriter)

先进的打字机动画效果工具，支持多种高级功能。

```typescript
import { Typewriter } from '@tsoul/utils'

// 基础用法
const typewriter = new Typewriter({
	speed: 50, // 打字速度 (ms)
	deleteSpeed: 25, // 删除速度 (ms)
	pauseDuration: 1500, // 暂停时长 (ms)
})

// 添加文本
typewriter.append('Hello, World!')
```

#### 高级功能

**1. 彩色文本支持**

```typescript
// 普通文本
typewriter.append('Normal text')

// 彩色文本
typewriter.append({ text: 'Error message', color: '#ff0000' }, 'error')
typewriter.append({ text: 'Success message', color: '#00ff00' }, 'success')
```

**2. 类型分组管理**

```typescript
// 不同类型的文本会分组存储
typewriter.append('标题文本', 'title')
typewriter.append('内容文本', 'content')
typewriter.append('错误信息', 'error')

// 可以单独清除某个类型
typewriter.clear('error') // 只清除错误信息
```

**3. Promise 异步控制**

```typescript
// 等待文本完全输出后再继续
await typewriter.append('第一段文本', 'paragraph', {
	waitForComplete: true,
})

// 继续添加下一段
await typewriter.append('第二段文本', 'paragraph', {
	waitForComplete: true,
})
```

**4. 实时状态监控**

```typescript
const typewriter = new Typewriter({
	onUpdate: (data) => {
		// 实时获取文本状态
		console.log('文本映射:', data.textMap)
		console.log('当前字符:', data.lastChar)
		console.log('队列大小:', data.queueSize)
		console.log('项目标识:', data.itemKey)
	},

	onComplete: (data, type) => {
		// 完成回调 ('process' | 'flush')
		console.log('输出完成:', type)
	},

	onTypeComplete: (data) => {
		// 特定类型完成回调
		console.log('类型完成:', data.type)
	},
})
```

**5. 队列管理**

```typescript
// 立即输出所有队列内容
await typewriter.flush()

// 删除所有已显示的文本
await typewriter.delete()

// 清除所有内容和队列
typewriter.clearAll()

// 清除指定类型的内容
typewriter.clear('error')

// 暂停指定时间
await typewriter.pause()
```

**6. ItemKey 标识**

```typescript
// 为文本添加标识，方便追踪
typewriter.append('Loading...', 'status', {
	itemKey: 'loading-indicator',
	waitForComplete: true,
})
```

#### 核心接口

```typescript
interface TypewriterOptions {
	speed?: number // 打字速度 (默认: 10ms)
	deleteSpeed?: number // 删除速度 (默认: 25ms)
	pauseDuration?: number // 暂停时长 (默认: 1500ms)
	onUpdate?: (obj: ChangeText) => void // 更新回调
	onComplete?: (obj: ChangeText, type: 'process' | 'flush') => void // 完成回调
	onStart?: () => void // 开始回调
	onTypeComplete?: (obj: ChangeText) => void // 类型完成回调
}

interface AppendOptions {
	itemKey?: string // 项目标识
	waitForComplete?: boolean // 是否等待完成，返回 Promise
}
```

**AppendOptions 详细说明:**

- **`itemKey`**: 为文本添加唯一标识符，用于追踪特定文本片段，便于在回调中识别
- **`waitForComplete`**: 控制异步行为，设为 `true` 时返回 Promise 并等待文本输出完成

```typescript
interface ChangeText {
	textMap: Record<string, TypewriterChar[]> // 按类型分组的文本映射
	lastChar?: TypewriterChar // 最后输出的字符
	queueSize?: number // 当前队列大小
	itemKey?: string // 项目标识
	type?: string // 触发事件的类型
}

interface TypewriterChar {
	text: string // 字符内容
	color?: string // 字符颜色
	type?: string // 字符类型
	itemKey?: string // 项目标识
	promiseId?: string // Promise 标识（内部使用）
}
```

#### 完整示例

```typescript
import { Typewriter } from '@tsoul/utils'

const typewriter = new Typewriter({
	speed: 30,
	deleteSpeed: 15,
	onUpdate: (data) => {
		// 更新UI显示
		updateDisplay(data.textMap)
	},
	onTypeComplete: (data) => {
		if (data.type === 'title') {
			console.log('标题输出完成')
		}
	},
})

// 演示完整流程
async function demo() {
	// 1. 输出标题
	await typewriter.append('📝 打字机演示', 'title', {
		waitForComplete: true,
		itemKey: 'demo-title',
	})

	// 2. 暂停
	await typewriter.pause()

	// 3. 输出彩色内容
	await typewriter.append(
		{
			text: '这是成功消息',
			color: '#00ff00',
		},
		'success',
		{
			waitForComplete: true,
		},
	)

	// 4. 输出错误信息
	await typewriter.append(
		{
			text: '这是错误消息',
			color: '#ff0000',
		},
		'error',
		{
			waitForComplete: true,
		},
	)

	// 5. 删除错误信息
	typewriter.clear('error')

	// 6. 添加更多内容
	typewriter.append('演示完成！', 'content')
}

demo()
```

### 兼容滚动

支持平滑滚动和即时滚动的滚动函数。

```typescript
import { compatibleScrollTo } from '@tsoul/utils'

// 平滑滚动
compatibleScrollTo(document.body, {
	top: 500,
	behavior: 'smooth',
})

// 即时滚动
compatibleScrollTo(document.body, {
	top: 500,
	behavior: 'instant',
})
```

### 函数重载

TypeScript 函数重载的工具类型。

```typescript
import { type Overload } from '@tsoul/utils'

type MyFunc = Overload<
	[
		{
			args: [name: string]
			return: string
		},
		{
			args: [age: number]
			return: number
		},
	]
>
```

## API 文档

### createAxiosInstance(config?)

创建一个增强的 Axios 实例。

**参数：**

- `config`: AxiosRequestConfig（可选）

**返回值：**

- 增强的 Axios 实例，包含 `cancelAllRequests` 方法

### NProgress

进度条对象，包含以下方法：

- `start()`: 开始进度条
- `done()`: 完成进度条
- `configure(options)`: 配置进度条

### compatibleScrollTo(element, options)

执行滚动操作。

**参数：**

- `element`: 要滚动的元素
- `options.top`: 目标位置
- `options.behavior`: 滚动行为（'smooth' | 'instant'）

## 更多信息

- [在线文档](https://mqyforvert.github.io/web-boot/api/)
- [问题反馈](https://github.com/MQYForverT/web-boot/issues)
- [更新日志](https://github.com/MQYForverT/web-boot/blob/main/CHANGELOG.md)

## License

MIT
