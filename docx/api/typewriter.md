# 打字机效果 (Typewriter)

## 📖 概述

`@tsoul/utils/typewriter` 是一个功能强大的打字机效果实现工具，提供了先进的文字动画效果。它支持彩色文本、类型分组、Promise 异步控制、队列管理等高级功能，适用于各种复杂的动态文字展示场景。

## 🎯 核心特性

- **🎨 彩色文本**: 支持自定义文字颜色
- **📝 类型分组**: 按类型管理和显示不同文本
- **⚡ Promise 控制**: 异步等待文本输出完成
- **🔄 队列管理**: 实时监控和控制输出队列
- **🎯 标识跟踪**: itemKey 支持项目标识
- **📊 生命周期**: 完整的回调事件系统
- **⏸️ 灵活控制**: 暂停、删除、清除等操作
- **🚀 双模式**: 渐进模式和即时模式
- **🔧 高度可配**: 丰富的配置选项

## 🚀 快速开始

### 安装

```bash
npm install @tsoul/utils
# 或
pnpm add @tsoul/utils
```

### 基础使用

```typescript
import { Typewriter } from '@tsoul/utils'

const typewriter = new Typewriter({
	speed: 50, // 打字速度 (ms)
	deleteSpeed: 25, // 删除速度 (ms)
	pauseDuration: 1500, // 暂停时长 (ms)
})

// 添加文本
typewriter.append('Hello, World!')
```

## 📝 API 参考

### 构造函数

```typescript
constructor(options?: TypewriterOptions & { immediateMode?: boolean })
```

#### TypewriterOptions

```typescript
interface TypewriterOptions {
	speed?: number // 打字速度，默认 10ms
	deleteSpeed?: number // 删除速度，默认 25ms
	pauseDuration?: number // 暂停时长，默认 1500ms
	onUpdate?: (data: ChangeText) => void // 实时更新回调
	onComplete?: (data: ChangeText, type: 'process' | 'flush') => void // 完成回调
	onStart?: () => void // 开始回调
	onTypeComplete?: (data: ChangeText) => void // 特定类型完成回调
}
```

#### ChangeText 接口

```typescript
interface ChangeText {
	textMap: Record<string, TypewriterChar[]> // 按类型分组的文本映射
	lastChar?: TypewriterChar // 最后输出的字符
	queueSize?: number // 当前队列大小
	itemKey?: string // 项目标识
	type?: string // 触发事件的类型
}
```

#### TypewriterChar 接口

```typescript
interface TypewriterChar {
	text: string // 字符内容
	color?: string // 字符颜色
	type?: string // 字符类型
	itemKey?: string // 项目标识
	promiseId?: string // Promise 标识（内部使用）
}
```

### 核心方法

#### append()

向队列添加文本，支持同步和异步模式。

```typescript
append(
  text: string | { text: string; color?: string },
  type?: string,
  options?: AppendOptions
): Promise<void> | void
```

**参数说明:**

- `text`: 文本内容，可以是字符串或包含颜色的对象
- `type`: 文本类型，用于分组管理（可选）
- `options`: 附加选项（可选）

**AppendOptions:**

```typescript
interface AppendOptions {
	itemKey?: string // 项目标识
	waitForComplete?: boolean // 是否等待完成，返回 Promise
}
```

**使用示例:**

```typescript
// 基本用法
typewriter.append('Hello')

// 彩色文本
typewriter.append({ text: 'Error', color: '#ff0000' }, 'error')

// 异步等待
await typewriter.append('Loading...', 'status', {
	waitForComplete: true,
	itemKey: 'loading-1',
})
```

#### delete()

删除所有已显示的文本。

```typescript
delete(): Promise<void>
```

#### pause()

暂停指定时间。

```typescript
pause(): Promise<void>
```

#### clear()

清除指定类型或所有内容。

```typescript
clear(type?: string): void
```

#### clearAll()

清除所有内容和队列。

```typescript
clearAll(): void
```

#### flush()

立即输出所有队列内容。

```typescript
flush(): Promise<void>
```

## 🎨 功能示例

### 1. 彩色文本支持

```typescript
const typewriter = new Typewriter()

// 普通文本
typewriter.append('Status: ')

// 成功消息（绿色）
typewriter.append({ text: 'Success', color: '#00ff00' }, 'success')

// 错误消息（红色）
typewriter.append({ text: 'Error', color: '#ff0000' }, 'error')
```

### 2. 类型分组管理

```typescript
const typewriter = new Typewriter({
	onTypeComplete: (data) => {
		console.log(`类型 "${data.type}" 输出完成`)
	},
})

// 不同类型的文本
typewriter.append('const ', 'keyword')
typewriter.append('message ', 'variable')
typewriter.append('= ', 'operator')
typewriter.append('"Hello World"', 'string')

// 单独清除错误类型
typewriter.clear('error')
```

### 3. Promise 异步控制

```typescript
async function demo() {
	const typewriter = new Typewriter()

	// 等待第一段完成
	await typewriter.append('第一段文本', 'paragraph', {
		waitForComplete: true,
	})

	// 暂停一下
	await typewriter.pause()

	// 继续第二段
	await typewriter.append('第二段文本', 'paragraph', {
		waitForComplete: true,
	})

	console.log('所有文本输出完成!')
}
```

### 4. 实时状态监控

```typescript
const typewriter = new Typewriter({
	onUpdate: (data) => {
		// 更新UI显示
		updateTextDisplay(data.textMap)

		// 显示队列状态
		updateQueueSize(data.queueSize)

		// 追踪当前项目
		if (data.itemKey) {
			console.log('当前项目:', data.itemKey)
		}
	},

	onComplete: (data, type) => {
		if (type === 'flush') {
			console.log('立即输出完成')
		} else {
			console.log('正常输出完成')
		}
	},
})
```

### 5. 队列管理

```typescript
const typewriter = new Typewriter()

// 添加多个文本到队列
typewriter.append('Loading')
typewriter.append('.')
typewriter.append('.')
typewriter.append('.')

// 立即输出所有队列内容
await typewriter.flush()

// 或者删除所有显示的文本
await typewriter.delete()

// 清除队列和显示内容
typewriter.clearAll()
```

## 🚨 实际应用场景

### 1. 代码演示

```typescript
const codeDemo = new Typewriter({
	speed: 30,
	onUpdate: (data) => {
		// 应用语法高亮
		const highlightedCode = applySyntaxHighlight(data.textMap)
		codeElement.innerHTML = highlightedCode
	},
})

async function showCodeExample() {
	await codeDemo.append('function ', 'keyword', { waitForComplete: true })
	await codeDemo.append('greet', 'function', { waitForComplete: true })
	await codeDemo.append('(', 'punctuation', { waitForComplete: true })
	await codeDemo.append('name', 'parameter', { waitForComplete: true })
	await codeDemo.append(') {', 'punctuation', { waitForComplete: true })
}
```

### 2. 聊天对话

```typescript
const chatBot = new Typewriter({
	speed: 50,
	onUpdate: (data) => {
		renderChatBubble(data.textMap)
	},
})

async function simulateChat() {
	// 用户消息
	await chatBot.append('User: ', 'user-label', { waitForComplete: true })
	await chatBot.append('Hello!', 'user-message', { waitForComplete: true })

	await chatBot.pause()

	// 机器人回复
	await chatBot.append('Bot: ', 'bot-label', { waitForComplete: true })
	await chatBot.append('Hi there! How can I help you?', 'bot-message', {
		waitForComplete: true,
	})
}
```

### 3. 状态提示

```typescript
const statusTypewriter = new Typewriter({
	onTypeComplete: (data) => {
		if (data.type === 'error') {
			// 错误类型完成时的处理
			showErrorActions()
		}
	},
})

async function showStatus() {
	// 显示加载状态
	await statusTypewriter.append('正在连接服务器...', 'loading', {
		itemKey: 'connection',
		waitForComplete: true,
	})

	try {
		await connectToServer()

		// 清除加载消息，显示成功
		statusTypewriter.clear('loading')
		await statusTypewriter.append(
			{
				text: '连接成功!',
				color: '#00ff00',
			},
			'success',
			{ waitForComplete: true },
		)
	} catch (error) {
		// 清除加载消息，显示错误
		statusTypewriter.clear('loading')
		await statusTypewriter.append(
			{
				text: '连接失败!',
				color: '#ff0000',
			},
			'error',
			{ waitForComplete: true },
		)
	}
}
```

### 4. 交互式教程

```typescript
const tutorialTypewriter = new Typewriter({
	speed: 40,
	onUpdate: (data) => {
		updateTutorialDisplay(data.textMap)
	},
})

async function showTutorial() {
	// 步骤1
	await tutorialTypewriter.append('步骤 1: ', 'step-label', {
		waitForComplete: true,
	})
	await tutorialTypewriter.append('点击开始按钮', 'step-content', {
		waitForComplete: true,
		itemKey: 'step-1',
	})

	// 等待用户操作
	await waitForUserClick()

	// 显示完成标记
	await tutorialTypewriter.append(' ✓', 'success', {
		waitForComplete: true,
	})

	// 步骤2
	await tutorialTypewriter.append('\n步骤 2: ', 'step-label', {
		waitForComplete: true,
	})
	// ... 继续后续步骤
}
```

## 📚 最佳实践

### 1. 性能优化

```typescript
// 使用 requestAnimationFrame 优化DOM更新
const typewriter = new Typewriter({
	onUpdate: (data) => {
		requestAnimationFrame(() => {
			updateDOM(data.textMap)
		})
	},
})

// 批量处理大量文本
async function batchProcess() {
	const texts = ['text1', 'text2', 'text3' /* ... */]

	// 先添加到队列
	texts.forEach((text) => {
		typewriter.append(text)
	})

	// 然后立即输出
	await typewriter.flush()
}
```

### 2. 错误处理

```typescript
async function safeTypewrite() {
	try {
		await typewriter.append('重要信息', 'important', {
			waitForComplete: true,
			itemKey: 'critical-message',
		})
	} catch (error) {
		console.error('打字机输出失败:', error)

		// 清理状态
		typewriter.clearAll()

		// 显示备用信息
		fallbackDisplay('信息加载失败')
	}
}
```

### 3. 资源清理

```typescript
// Vue 组件中
import { onUnmounted } from 'vue'

const typewriter = new Typewriter()

onUnmounted(() => {
	// 清理所有内容和Promise
	typewriter.clearAll()
})

// React 组件中
useEffect(() => {
	return () => {
		typewriter.clearAll()
	}
}, [])
```

### 4. 类型安全

```typescript
// 定义严格的文本类型
type TextType = 'keyword' | 'variable' | 'string' | 'comment' | 'error'

function addTypedText(text: string, type: TextType) {
	typewriter.append(text, type)
}

// 使用枚举管理颜色
enum TextColor {
	Success = '#00ff00',
	Error = '#ff0000',
	Warning = '#ffaa00',
	Info = '#0099ff',
}

typewriter.append(
	{
		text: '操作成功',
		color: TextColor.Success,
	},
	'status',
)
```

## 🔧 高级配置

### 即时模式

```typescript
// 启用即时模式，跳过渐进动画
const instantTypewriter = new Typewriter({
	immediateMode: true,
	onUpdate: (data) => {
		// 文本会立即显示，无打字动画
		displayText(data.textMap)
	},
})
```

### 自定义渲染器

```typescript
class CustomRenderer {
	private typewriter: Typewriter

	constructor() {
		this.typewriter = new Typewriter({
			onUpdate: this.render.bind(this),
		})
	}

	private render(data: ChangeText) {
		// 自定义渲染逻辑
		const html = Object.entries(data.textMap)
			.map(([type, chars]) => {
				const text = chars
					.map((char) => `<span class="type-${type}" style="color: ${char.color || ''}">${char.text}</span>`)
					.join('')
				return `<div class="text-group-${type}">${text}</div>`
			})
			.join('')

		document.getElementById('output').innerHTML = html
	}
}
```

## 📄 更新日志

### v2.0.0

- ✨ 新增 Promise 异步控制支持
- ✨ 新增彩色文本功能
- ✨ 新增类型分组管理
- ✨ 新增 itemKey 项目标识
- ✨ 新增 onTypeComplete 回调
- ✨ 新增 flush() 立即输出方法
- 🔧 改进了队列管理机制
- 🔧 优化了内存使用

### v1.x.x

- 基础打字机功能
- 简单的速度控制
- 基本的回调支持

## 📚 相关资源

- [MDN - Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [CSS Animation Performance](https://web.dev/animations/)
- [JavaScript Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

> 💡 **提示**: 新版本的 Typewriter 提供了更强大的功能和更好的开发体验，建议升级到最新版本以获得最佳效果。
