# 滚动处理

## 📖 概述

`@tsoul/utils/compatibleScrollTo` 是一个兼容性的滚动处理工具，提供了平滑滚动功能，并保持与原生 `scrollTo` 接口一致。它解决了浏览器兼容性问题，并提供了更多的控制选项。

## 🎯 特性

- **原生接口**: 与原生 `scrollTo` 保持一致的 API
- **平滑滚动**: 支持平滑滚动动画
- **兼容性**: 优雅降级处理不支持的浏览器
- **回调支持**: 提供滚动完成回调
- **边界处理**: 智能处理滚动边界情况
- **动画控制**: 可自定义滚动行为

## 🚀 快速开始

### 安装

```bash
npm install @tsoul/utils -D
# 或
pnpm add @tsoul/utils -D
```

### 基础使用

```typescript
import { compatibleScrollTo } from '@tsoul/utils/compatibleScrollTo'

// 获取目标元素
const element = document.querySelector('.scroll-container')

// 滚动到指定位置
compatibleScrollTo(element, {
	top: 500,
	behavior: 'smooth',
})
```

## 📝 功能示例

### 基本滚动

```typescript
// 滚动到指定位置
compatibleScrollTo(element, {
	top: 100,
	left: 0,
	behavior: 'smooth',
})

// 使用位置参数方式
compatibleScrollTo(element, 0, 100)
```

### 带回调的滚动

```typescript
compatibleScrollTo(element, {
	top: 500,
	behavior: 'smooth',
	onComplete: () => {
		console.log('滚动完成')
	},
})
```

### 即时滚动

```typescript
compatibleScrollTo(element, {
	top: 100,
	behavior: 'instant',
})
```

## 🔧 配置选项

### ScrollOptions 接口

```typescript
interface ScrollOptions {
	top?: number // 垂直滚动位置
	left?: number // 水平滚动位置
	behavior?: 'smooth' | 'instant' | 'auto' // 滚动行为
	onComplete?: () => void // 滚动完成回调
}
```

### 滚动行为

- **smooth**: 平滑滚动（默认）
- **instant**: 立即滚动
- **auto**: 由浏览器决定

## 🎨 使用场景

### 1. 滚动到指定元素

```typescript
const target = document.querySelector('.target')
const container = document.querySelector('.container')

compatibleScrollTo(container, {
	top: target.offsetTop,
	behavior: 'smooth',
	onComplete: () => {
		target.focus()
	},
})
```

### 2. 无限滚动

```typescript
const loadMore = async () => {
	const container = document.querySelector('.container')
	await fetchMoreData()

	compatibleScrollTo(container, {
		top: container.scrollHeight,
		behavior: 'smooth',
	})
}
```

### 3. 返回顶部

```typescript
const scrollToTop = () => {
	compatibleScrollTo(document.documentElement, {
		top: 0,
		behavior: 'smooth',
	})
}
```

## 🚨 注意事项

1. 边界处理：

```typescript
// 工具会自动处理超出范围的滚动
const maxScroll = element.scrollHeight - element.clientHeight
compatibleScrollTo(element, {
	top: maxScroll + 1000, // 会被限制在最大可滚动范围内
})
```

2. 性能优化：

```typescript
// 对于频繁的滚动，建议使用 instant 行为
compatibleScrollTo(element, {
	top: 100,
	behavior: 'instant',
})
```

3. 动画控制：

```typescript
// 自定义动画持续时间（通过回退实现）
const duration = 500 // 毫秒
```

## 📚 最佳实践

1. 滚动容器设置：

```css
.scroll-container {
	overflow: auto;
	-webkit-overflow-scrolling: touch; /* iOS 流畅滚动 */
}
```

2. 性能优化：

```typescript
// 对于大列表，使用节流处理滚动
import { throttle } from 'lodash'

const handleScroll = throttle(() => {
	compatibleScrollTo(element, {
		top: calculateScrollPosition(),
		behavior: 'smooth',
	})
}, 100)
```

3. 优雅降级：

```typescript
// 工具会自动处理不支持平滑滚动的情况
compatibleScrollTo(element, {
	top: 100,
	behavior: 'smooth',
	onComplete: () => {
		// 滚动完成后的处理
	},
})
```

## 📚 相关资源

- [MDN scrollTo 文档](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)
- [Smooth Scrolling 规范](https://drafts.csswg.org/cssom-view/#smooth-scrolling)
