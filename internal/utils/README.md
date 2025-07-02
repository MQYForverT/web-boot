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

### 打字机效果

创建打字机动画效果。

```typescript
import { createTypewriter } from '@tsoul/utils'

const typewriter = createTypewriter({
	text: 'Hello, World!',
	speed: 100,
	onFinish: () => console.log('打字完成'),
})

typewriter.start()
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

### createTypewriter(options)

创建打字机实例。

**参数：**

- `options.text`: 要显示的文本
- `options.speed`: 打字速度（毫秒）
- `options.onFinish`: 完成回调

**返回值：**

- 打字机实例，包含 `start`、`pause`、`resume` 方法

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
