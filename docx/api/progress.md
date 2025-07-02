# 进度条

## 📖 概述

`@tsoul/utils/nprogress` 是一个轻量级的进度条工具，基于 `nprogress` 进行了配置优化和封装。它提供了一个优雅的加载进度指示器，适用于页面加载、路由切换、请求等场景。

## 🎯 特性

- **轻量级**: 体积小，无依赖
- **可配置**: 支持自定义样式和行为
- **易集成**: 简单的 API 设计
- **动画流畅**: 平滑的动画效果
- **自动增长**: 智能的进度递增
- **主题定制**: 支持自定义样式

## 🚀 快速开始

### 安装

```bash
npm install @tsoul/utils -D
# 或
pnpm add @tsoul/utils -D
```

### 基础使用

```typescript
import NProgress from '@tsoul/utils/nprogress'

// 开始加载
NProgress.start()

// 结束加载
NProgress.done()
```

## 📝 功能示例

### 基本使用

```typescript
// 开始显示进度条
NProgress.start()

// 设置进度
NProgress.set(0.4) // 40%

// 增加一点进度
NProgress.inc()

// 完成进度
NProgress.done()
```

### 路由集成

```typescript
// Vue Router
router.beforeEach((to, from, next) => {
	NProgress.start()
	next()
})

router.afterEach(() => {
	NProgress.done()
})
```

### 请求集成

```typescript
// Axios
axios.interceptors.request.use((config) => {
	NProgress.start()
	return config
})

axios.interceptors.response.use((response) => {
	NProgress.done()
	return response
})
```

## 🔧 配置选项

### 默认配置

```typescript
NProgress.configure({
	easing: 'ease', // 动画方式
	speed: 500, // 递增进度条的速度
	showSpinner: true, // 是否显示加载图标
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3, // 初始化时的最小百分比
})
```

### 自定义配置

```typescript
NProgress.configure({
	// 禁用加载图标
	showSpinner: false,

	// 调整动画速度
	speed: 300,

	// 设置最小进度
	minimum: 0.1,
})
```

## 🎨 样式定制

### 基本样式

```css
/* 进度条颜色 */
#nprogress .bar {
	background: #29d;
}

/* 加载图标颜色 */
#nprogress .spinner-icon {
	border-top-color: #29d;
	border-left-color: #29d;
}
```

### 主题定制

```css
/* 自定义主题 */
#nprogress .bar {
	background: linear-gradient(to right, #ff6b6b, #4ecdc4);
	height: 3px;
}

#nprogress .peg {
	box-shadow:
		0 0 10px #ff6b6b,
		0 0 5px #4ecdc4;
}

#nprogress .spinner-icon {
	border-top-color: #ff6b6b;
	border-left-color: #4ecdc4;
}
```

## 🚨 使用场景

### 1. 页面加载

```typescript
// 页面加载时
window.addEventListener('load', () => {
	NProgress.done()
})

// 页面开始加载
NProgress.start()
```

### 2. 异步操作

```typescript
async function fetchData() {
	NProgress.start()
	try {
		await someAsyncOperation()
	} finally {
		NProgress.done()
	}
}
```

### 3. 组件加载

```typescript
// Vue 组件
export default {
	async mounted() {
		NProgress.start()
		await this.initializeData()
		NProgress.done()
	},
}
```

## 📚 最佳实践

1. 路由切换：

```typescript
// 确保在路由切换完成后结束进度条
router.beforeEach(() => {
	NProgress.start()
})

router.afterEach(() => {
	NProgress.done()
})

router.onError(() => {
	NProgress.done()
})
```

2. 请求处理：

```typescript
// 处理并发请求
let requestCount = 0

function handleRequest() {
	if (requestCount === 0) {
		NProgress.start()
	}
	requestCount++
}

function handleResponse() {
	requestCount--
	if (requestCount === 0) {
		NProgress.done()
	}
}
```

3. 错误处理：

```typescript
try {
	NProgress.start()
	await someOperation()
} catch (error) {
	console.error(error)
} finally {
	NProgress.done()
}
```

## 📚 相关资源

- [NProgress 官方文档](https://ricostacruz.com/nprogress/)
- [CSS 动画](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
