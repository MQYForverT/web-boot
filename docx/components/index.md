# 组件库

## 概述

Web Boot 提供了丰富的组件库，包括私有组件和公共组件，支持跨框架使用。

## 组件分类

### 私有组件 (Private Components)

基于 Vue 3 + Element Plus 开发的 Web Components，提供完整的后台管理系统解决方案。

**特性**:

- 基于 Vue 3 + Element Plus
- 使用 Web Components 技术
- 支持跨框架使用
- 完整的后台管理系统布局
- 丰富的交互组件

**主要组件**:

- [BackgroundLayout](./background-layout) - 后台布局组件
- [BackgroundLogin](./background-login) - 登录组件

### 公共组件 (Public Components)

基础 UI 组件库，提供通用的界面组件。

**特性**:

- 轻量级设计
- 高度可定制
- 支持多种主题
- 完整的 TypeScript 支持

**主要组件**:

- HelloWorld - 示例组件

## 技术架构

### Web Components

项目使用 Web Components 技术实现跨框架组件复用：

```javascript
// 组件定义
class MyComponent extends HTMLElement {
	constructor() {
		super()
		// 组件逻辑
	}
}

// 注册组件
customElements.define('my-component', MyComponent)
```

### Vue 3 + Element Plus

私有组件基于 Vue 3 + Element Plus 开发：

```vue
<template>
	<div class="my-component">
		<el-button @click="handleClick">点击</el-button>
	</div>
</template>

<script setup lang="ts">
	import { ElButton } from 'element-plus'

	const handleClick = () => {
		console.log('Button clicked')
	}
</script>
```

## 使用方式

### 1. 安装组件库

```bash
# 安装私有组件
pnpm add @web-boot/private-components

# 安装公共组件
pnpm add @web-boot/public-components
```

### 2. 在 Vue 项目中使用

```vue
<template>
	<div>
		<!-- 使用私有组件 -->
		<background-layout>
			<template #header>
				<h1>我的应用</h1>
			</template>
			<template #content>
				<p>主要内容</p>
			</template>
		</background-layout>

		<!-- 使用公共组件 -->
		<hello-world title="Hello" message="Welcome" />
	</div>
</template>

<script setup lang="ts">
	import 'background-layout'
	import 'hello-world'
</script>
```

### 3. 在 React 项目中使用

```tsx
import React from 'react'
import 'background-layout'
import 'hello-world'

const App: React.FC = () => {
	return (
		<div>
			{/* 使用私有组件 */}
			<background-layout>
				<div slot="header">
					<h1>我的应用</h1>
				</div>
				<div slot="content">
					<p>主要内容</p>
				</div>
			</background-layout>

			{/* 使用公共组件 */}
			<hello-world title="Hello" message="Welcome" />
		</div>
	)
}

export default App
```

### 4. 在 Svelte 项目中使用

```svelte
<script lang="ts">
  import 'background-layout'
  import 'hello-world'
</script>

<!-- 使用私有组件 -->
<background-layout>
  <div slot="header">
    <h1>我的应用</h1>
  </div>
  <div slot="content">
    <p>主要内容</p>
  </div>
</background-layout>

<!-- 使用公共组件 -->
<hello-world title="Hello" message="Welcome" />
```

## 组件开发规范

### 1. 命名规范

- 组件名使用 PascalCase
- 文件名使用 PascalCase
- 属性名使用 camelCase
- 事件名使用 camelCase

### 2. 类型定义

```typescript
// 组件属性类型
interface ComponentProps {
	title?: string
	message?: string
	disabled?: boolean
}

// 组件事件类型
interface ComponentEvents {
	click: [value: string]
	change: [value: any]
}
```

### 3. 样式规范

- 使用 CSS 变量定义主题
- 支持暗色模式
- 响应式设计
- 无障碍访问支持

### 4. 文档规范

每个组件都需要包含：

- 组件描述
- 属性说明
- 事件说明
- 使用示例
- 注意事项

## 主题定制

### CSS 变量

组件使用 CSS 变量实现主题定制：

```css
:root {
	/* 主色调 */
	--primary-color: #409eff;
	--success-color: #67c23a;
	--warning-color: #e6a23c;
	--danger-color: #f56c6c;

	/* 文字颜色 */
	--text-color: #303133;
	--text-color-secondary: #606266;

	/* 背景颜色 */
	--bg-color: #ffffff;
	--bg-color-secondary: #f5f7fa;

	/* 边框颜色 */
	--border-color: #dcdfe6;
	--border-color-light: #e4e7ed;
}

/* 暗色主题 */
[data-theme='dark'] {
	--text-color: #ffffff;
	--bg-color: #1a1a1a;
	--border-color: #4c4c4c;
}
```

### 主题切换

```javascript
// 切换主题
function toggleTheme() {
	const theme = document.documentElement.getAttribute('data-theme')
	const newTheme = theme === 'dark' ? 'light' : 'dark'
	document.documentElement.setAttribute('data-theme', newTheme)
}
```

## 性能优化

### 1. 懒加载

```javascript
// 组件懒加载
const BackgroundLayout = () => import('./BackgroundLayout.vue')
```

### 2. 代码分割

```javascript
// 按需导入
import { ElButton } from 'element-plus'
```

### 3. 缓存优化

```javascript
// 组件缓存
const cachedComponents = new Map()

function getComponent(name) {
	if (!cachedComponents.has(name)) {
		cachedComponents.set(name, loadComponent(name))
	}
	return cachedComponents.get(name)
}
```

## 测试

### 单元测试

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BackgroundLayout from './BackgroundLayout.vue'

describe('BackgroundLayout', () => {
	it('renders correctly', () => {
		const wrapper = mount(BackgroundLayout)
		expect(wrapper.find('.background-layout').exists()).toBe(true)
	})

	it('emits events correctly', () => {
		const wrapper = mount(BackgroundLayout)
		wrapper.find('.menu-item').trigger('click')
		expect(wrapper.emitted('menu-click')).toBeTruthy()
	})
})
```

### 集成测试

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import BackgroundLayout from './BackgroundLayout.vue'

describe('BackgroundLayout Integration', () => {
	it('works with other components', () => {
		render(BackgroundLayout, {
			slots: {
				header: '<h1>Header</h1>',
				content: '<p>Content</p>',
			},
		})

		expect(screen.getByText('Header')).toBeInTheDocument()
		expect(screen.getByText('Content')).toBeInTheDocument()
	})
})
```

## 发布流程

### 1. 版本管理

```json
{
	"version": "1.0.0",
	"scripts": {
		"release": "npm run build && npm publish"
	}
}
```

### 2. 构建配置

```typescript
// vite.config.ts
export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'WebBootComponents',
			formats: ['es', 'umd'],
		},
		rollupOptions: {
			external: ['vue', 'element-plus'],
			output: {
				globals: {
					vue: 'Vue',
					'element-plus': 'ElementPlus',
				},
			},
		},
	},
})
```

### 3. 发布检查

```bash
# 运行测试
pnpm test

# 构建组件
pnpm build

# 发布到 npm
pnpm publish
```

## 常见问题

### 1. 组件不显示

- 检查组件是否正确注册
- 确认 CSS 样式已加载
- 检查浏览器兼容性

### 2. 事件不触发

- 检查事件监听器是否正确绑定
- 确认事件名称匹配
- 检查事件参数格式

### 3. 样式不生效

- 检查 CSS 变量是否定义
- 确认主题配置正确
- 检查样式优先级

### 4. 跨框架兼容性

- 检查 Web Components 支持
- 确认属性传递格式
- 测试事件监听方式

## 更新日志

### v1.0.0

- 初始版本发布
- 支持 BackgroundLayout 和 BackgroundLogin 组件
- 完整的 Web Components 支持
- 跨框架兼容性
