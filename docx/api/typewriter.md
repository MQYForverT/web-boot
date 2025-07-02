# 打字机效果

## 📖 概述

`@tsoul/utils/typewriter` 是一个强大的打字机效果实现工具，提供了流畅的文字动画效果。它支持多种文字类型、颜色控制、暂停继续等功能，适用于各种需要动态展示文字的场景。

## 🎯 特性

- **流畅动画**: 平滑的打字效果
- **类型支持**: 完整的 TypeScript 类型
- **颜色控制**: 支持文字颜色定制
- **暂停继续**: 支持动画控制
- **回调函数**: 提供丰富的事件回调
- **分组管理**: 支持文字分组显示

## 🚀 快速开始

### 安装

```bash
npm install @tsoul/utils -D
```

### 基础使用

```typescript
import { Typewriter } from '@tsoul/utils/typewriter'

const typewriter = new Typewriter({
	speed: 100,
	onUpdate: ({ textMap }) => {
		console.log('当前文本:', textMap)
	},
})

// 添加文本
typewriter.append('Hello, World!')
```

## 📝 功能示例

### 基本打字效果

```typescript
const typewriter = new Typewriter()

// 简单文本
typewriter.append('Hello')

// 带颜色的文本
typewriter.append({
	text: 'World',
	color: '#ff0000',
})

// 带类型的文本
typewriter.append('!', 'punctuation')
```

### 复杂动画

```typescript
const typewriter = new Typewriter({
	speed: 50,
	deleteSpeed: 30,
	pauseDuration: 1000,
})

async function animate() {
	// 添加文本
	await typewriter.append('Hello')

	// 暂停
	await typewriter.pause()

	// 删除文本
	await typewriter.delete()

	// 添加新文本
	await typewriter.append('World')
}
```

### 分组显示

```typescript
const typewriter = new Typewriter()

// 添加不同类型的文本
typewriter.append('const ', 'keyword')
typewriter.append('greeting ', 'variable')
typewriter.append('= ', 'operator')
typewriter.append('"Hello!"', 'string')
```

## 🔧 配置选项

### TypewriterOptions

```typescript
interface TypewriterOptions {
	speed?: number // 打字速度
	deleteSpeed?: number // 删除速度
	pauseDuration?: number // 暂停时长
	onUpdate?: (obj: ChangeText) => void // 更新回调
	onComplete?: (obj: ChangeText) => void // 完成回调
	onStart?: () => void // 开始回调
	onTypeComplete?: (obj: ChangeText) => void // 类型完成回调
}
```

### 默认配置

```typescript
const defaultOptions = {
	speed: 10,
	deleteSpeed: 25,
	pauseDuration: 1500,
	onUpdate: () => {},
	onComplete: () => {},
	onStart: () => {},
	onTypeComplete: () => {},
}
```

## 🎨 高级用法

### 自定义渲染

```typescript
const typewriter = new Typewriter({
	onUpdate: ({ textMap }) => {
		// 自定义渲染逻辑
		const text = Object.entries(textMap)
			.map(([type, chars]) => {
				return chars.map((char) => `<span class="${type}">${char.text}</span>`).join('')
			})
			.join('')

		element.innerHTML = text
	},
})
```

### 动画控制

```typescript
const typewriter = new Typewriter()

// 立即模式
typewriter.flush()

// 清除特定类型
typewriter.clear('keyword')

// 清除所有
typewriter.clearAll()
```

### 异步操作

```typescript
async function typeAnimation() {
	const typewriter = new Typewriter()

	// 连续动画
	await typewriter.append('Loading')
	await typewriter.append('.')
	await typewriter.append('.')
	await typewriter.append('.')
	await typewriter.delete()
	await typewriter.append('Done!')
}
```

## 🚨 使用场景

### 1. 代码展示

```typescript
const codeTypewriter = new Typewriter({
	onUpdate: ({ textMap }) => {
		// 语法高亮处理
		const code = processHighlight(textMap)
		codeElement.innerHTML = code
	},
})

codeTypewriter.append('function ', 'keyword')
codeTypewriter.append('hello', 'function')
codeTypewriter.append('() {', 'punctuation')
```

### 2. 对话效果

```typescript
const chatTypewriter = new Typewriter({
	speed: 50,
	pauseDuration: 1000,
})

async function showConversation() {
	await chatTypewriter.append('User: Hello!')
	await chatTypewriter.pause()
	await chatTypewriter.append('Bot: Hi there!')
}
```

### 3. 加载动画

```typescript
const loadingTypewriter = new Typewriter({
	speed: 200,
	deleteSpeed: 200,
})

async function showLoading() {
	while (isLoading) {
		await loadingTypewriter.append('Loading')
		await loadingTypewriter.append('.')
		await loadingTypewriter.append('.')
		await loadingTypewriter.append('.')
		await loadingTypewriter.delete()
	}
}
```

## 📚 最佳实践

1. 性能优化：

```typescript
// 使用 requestAnimationFrame
const typewriter = new Typewriter({
	onUpdate: ({ textMap }) => {
		requestAnimationFrame(() => {
			updateDOM(textMap)
		})
	},
})
```

2. 错误处理：

```typescript
try {
	await typewriter.append('Hello')
} catch (error) {
	console.error('打字机效果出错:', error)
	typewriter.clearAll()
}
```

3. 资源清理：

```typescript
// 组件卸载时
onUnmounted(() => {
	typewriter.clearAll()
})
```

## 📚 相关资源

- [CSS 动画](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [JavaScript 动画](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
