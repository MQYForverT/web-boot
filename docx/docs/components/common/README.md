# 通用组件

Web Boot 提供了一系列通用组件和工具函数，帮助您快速构建功能完整的应用程序。

## 组件概览

### 🎨 主题组件

- **ThemeToggle** - 主题切换按钮
- **ColorPicker** - 颜色选择器
- **ThemeProvider** - 主题上下文提供者

### 🌍 国际化组件

- **LanguageSelector** - 语言选择器
- **LocaleProvider** - 国际化上下文提供者
- **TranslationManager** - 翻译管理器

### 🔧 工具组件

- **Loading** - 加载动画
- **ErrorBoundary** - 错误边界
- **KeepAlive** - 组件缓存
- **Portal** - 传送门组件

### 📊 状态管理

- **GlobalStore** - 全局状态管理
- **PersistentStorage** - 持久化存储
- **EventBus** - 事件总线

## 主题组件

### ThemeToggle - 主题切换

美观的主题切换按钮，支持明暗模式切换。

#### 基础使用

```vue
<!-- Vue 3 -->
<template>
	<ThemeToggle :theme="currentTheme" @change="handleThemeChange" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { ThemeToggle } from 'web-boot-common'

	const currentTheme = ref('light')

	const handleThemeChange = (theme: string) => {
		currentTheme.value = theme
		// 应用主题变更
	}
</script>
```

```tsx
// React
import React, { useState } from 'react'
import { ThemeToggle } from 'web-boot-common'

const App: React.FC = () => {
	const [theme, setTheme] = useState('light')

	const handleThemeChange = (newTheme: string) => {
		setTheme(newTheme)
		// 应用主题变更
	}

	return <ThemeToggle theme={theme} onChange={handleThemeChange} />
}
```

```svelte
<!-- Svelte -->
<script lang="ts">
  import { ThemeToggle } from 'web-boot-common'

  let currentTheme = 'light'

  const handleThemeChange = (event) => {
    currentTheme = event.detail
    // 应用主题变更
  }
</script>

<ThemeToggle
  theme={currentTheme}
  on:change={handleThemeChange}
/>
```

#### API 参考

| 属性      | 类型                              | 默认值     | 说明             |
| --------- | --------------------------------- | ---------- | ---------------- |
| theme     | `'light' \| 'dark' \| 'auto'`     | `'light'`  | 当前主题         |
| size      | `'small' \| 'medium' \| 'large'`  | `'medium'` | 组件大小         |
| shape     | `'circle' \| 'round' \| 'square'` | `'circle'` | 按钮形状         |
| disabled  | `boolean`                         | `false`    | 是否禁用         |
| showLabel | `boolean`                         | `false`    | 是否显示文字标签 |

### ColorPicker - 颜色选择器

功能丰富的颜色选择器组件。

```vue
<template>
	<ColorPicker :value="primaryColor" :presets="colorPresets" @change="handleColorChange" />
</template>

<script setup lang="ts">
	const primaryColor = ref('#1890ff')
	const colorPresets = ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1', '#13c2c2', '#eb2f96', '#fa8c16']

	const handleColorChange = (color: string) => {
		primaryColor.value = color
		// 应用颜色变更
	}
</script>
```

## 国际化组件

### LanguageSelector - 语言选择器

支持多语言切换的下拉选择器。

```vue
<template>
	<LanguageSelector :current="currentLocale" :languages="supportedLanguages" @change="handleLanguageChange" />
</template>

<script setup lang="ts">
	const currentLocale = ref('zh-CN')
	const supportedLanguages = [
		{ code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
		{ code: 'en-US', name: 'English', flag: '🇺🇸' },
		{ code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
	]

	const handleLanguageChange = (locale: string) => {
		currentLocale.value = locale
		// 应用语言变更
	}
</script>
```

### LocaleProvider - 国际化提供者

为应用提供国际化上下文。

```vue
<template>
	<LocaleProvider :locale="currentLocale" :messages="messages">
		<App />
	</LocaleProvider>
</template>

<script setup lang="ts">
	const currentLocale = ref('zh-CN')
	const messages = {
		'zh-CN': {
			hello: '你好',
			welcome: '欢迎使用 Web Boot',
		},
		'en-US': {
			hello: 'Hello',
			welcome: 'Welcome to Web Boot',
		},
	}
</script>
```

## 工具组件

### Loading - 加载动画

多种样式的加载动画组件。

```vue
<template>
	<!-- 基础使用 -->
	<Loading :visible="isLoading" />

	<!-- 自定义样式 -->
	<Loading :visible="isLoading" type="spinner" size="large" color="#1890ff" text="加载中..." />

	<!-- 局部加载 -->
	<div class="content-wrapper">
		<Loading :visible="isLoading" :overlay="true" />
		<div class="content">
			<!-- 内容 -->
		</div>
	</div>
</template>
```

#### Loading 类型

```typescript
type LoadingType =
	| 'spinner' // 旋转器
	| 'dots' // 点动画
	| 'bars' // 条形动画
	| 'pulse' // 脉冲动画
	| 'skeleton' // 骨架屏
```

### ErrorBoundary - 错误边界

捕获和处理组件错误的边界组件。

```vue
<template>
	<ErrorBoundary @error="handleError">
		<template #fallback="{ error, retry }">
			<div class="error-fallback">
				<h3>出错了</h3>
				<p>{{ error.message }}</p>
				<button @click="retry">重试</button>
			</div>
		</template>

		<!-- 可能出错的组件 -->
		<RiskyComponent />
	</ErrorBoundary>
</template>

<script setup lang="ts">
	const handleError = (error: Error, errorInfo: any) => {
		console.error('组件错误:', error, errorInfo)
		// 上报错误日志
	}
</script>
```

### Portal - 传送门组件

将子组件渲染到指定的 DOM 节点。

```vue
<template>
	<div>
		<button @click="showModal = true">显示模态框</button>

		<Portal to="body" v-if="showModal">
			<div class="modal-overlay" @click="showModal = false">
				<div class="modal-content" @click.stop>
					<h3>模态框内容</h3>
					<button @click="showModal = false">关闭</button>
				</div>
			</div>
		</Portal>
	</div>
</template>
```

## 状态管理

### GlobalStore - 全局状态

轻量级的全局状态管理解决方案。

```typescript
// store/index.ts
import { createGlobalStore } from 'web-boot-common'

export const useGlobalStore = createGlobalStore({
	// 状态定义
	state: {
		user: null,
		theme: 'light',
		locale: 'zh-CN',
		sidebarCollapsed: false,
	},

	// 计算属性
	getters: {
		isLoggedIn: (state) => !!state.user,
		themeClass: (state) => `theme-${state.theme}`,
	},

	// 操作方法
	actions: {
		setUser(user: User) {
			this.user = user
		},

		toggleTheme() {
			this.theme = this.theme === 'light' ? 'dark' : 'light'
		},

		toggleSidebar() {
			this.sidebarCollapsed = !this.sidebarCollapsed
		},
	},
})
```

使用示例：

```vue
<template>
	<div :class="themeClass">
		<h1 v-if="isLoggedIn">欢迎，{{ user.name }}</h1>
		<button @click="toggleTheme">切换主题</button>
	</div>
</template>

<script setup lang="ts">
	import { useGlobalStore } from '@/store'

	const store = useGlobalStore()
	const { user, isLoggedIn, themeClass } = storeToRefs(store)
	const { toggleTheme } = store
</script>
```

### PersistentStorage - 持久化存储

带有过期时间和加密功能的本地存储工具。

```typescript
import { PersistentStorage } from 'web-boot-common'

// 创建存储实例
const storage = new PersistentStorage({
	prefix: 'web-boot:', // 键名前缀
	encrypt: true, // 是否加密
	defaultExpiration: 7 * 24 * 60 * 60 * 1000, // 默认过期时间(7天)
})

// 基础使用
storage.set('user-info', userData)
const userInfo = storage.get('user-info')

// 设置过期时间
storage.set('temp-data', tempData, 60 * 1000) // 1分钟后过期

// 检查是否存在
if (storage.has('user-token')) {
	// 处理逻辑
}

// 清除过期数据
storage.cleanup()

// 清除所有数据
storage.clear()
```

### EventBus - 事件总线

跨组件通信的事件总线。

```typescript
import { EventBus } from 'web-boot-common'

// 创建事件总线
const eventBus = new EventBus()

// 监听事件
eventBus.on('user-login', (user: User) => {
	console.log('用户登录:', user)
})

// 发送事件
eventBus.emit('user-login', userData)

// 一次性监听
eventBus.once('app-ready', () => {
	console.log('应用准备就绪')
})

// 移除监听器
const unsubscribe = eventBus.on('theme-change', handleThemeChange)
unsubscribe() // 移除监听

// 移除所有监听器
eventBus.off('user-login')
```

## 工具函数

### 常用工具函数

```typescript
import {
	// 类型检查
	isString,
	isNumber,
	isArray,
	isObject,
	isEmpty,

	// 数组操作
	unique,
	flatten,
	groupBy,

	// 对象操作
	deepClone,
	deepMerge,
	pick,
	omit,

	// 字符串操作
	camelCase,
	kebabCase,
	capitalize,
	truncate,

	// 数字操作
	formatNumber,
	formatCurrency,
	formatPercent,

	// 日期操作
	formatDate,
	formatRelativeTime,
	isDateValid,

	// 验证函数
	isEmail,
	isPhone,
	isUrl,
	isIdCard,

	// 防抖节流
	debounce,
	throttle,

	// 其他工具
	uuid,
	sleep,
	retry,
} from 'web-boot-common'

// 使用示例
const uniqueArray = unique([1, 2, 2, 3, 3, 4])
const clonedObject = deepClone(originalObject)
const debouncedFn = debounce(originalFn, 300)
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD')
```

### 自定义 Hook (Vue 3)

```typescript
// useLocalStorage - 响应式本地存储
import { useLocalStorage } from 'web-boot-common'

const { value: theme, setValue: setTheme } = useLocalStorage('theme', 'light')

// useDebounce - 防抖
import { useDebounce } from 'web-boot-common'

const searchTerm = ref('')
const debouncedSearchTerm = useDebounce(searchTerm, 300)

// useAsync - 异步状态管理
import { useAsync } from 'web-boot-common'

const { data, loading, error, execute } = useAsync(async () => {
	return await fetchUserData()
})
```

## 样式系统

### CSS 变量

```scss
// 通用组件 CSS 变量
:root {
	// 颜色系统
	--color-primary: #1890ff;
	--color-success: #52c41a;
	--color-warning: #faad14;
	--color-error: #f5222d;
	--color-info: #13c2c2;

	// 灰度色彩
	--color-text: #000000d9;
	--color-text-secondary: #00000073;
	--color-text-disabled: #00000040;
	--color-border: #d9d9d9;
	--color-divider: #f0f0f0;
	--color-background: #fafafa;

	// 间距系统
	--spacing-xs: 4px;
	--spacing-sm: 8px;
	--spacing-md: 16px;
	--spacing-lg: 24px;
	--spacing-xl: 32px;

	// 圆角系统
	--border-radius-sm: 2px;
	--border-radius-md: 6px;
	--border-radius-lg: 8px;
	--border-radius-xl: 12px;

	// 阴影系统
	--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.03);
	--shadow-md: 0 1px 6px -1px rgba(0, 0, 0, 0.1);
	--shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.15);
	--shadow-xl: 0 6px 16px rgba(0, 0, 0, 0.2);

	// 动画系统
	--duration-fast: 0.15s;
	--duration-normal: 0.3s;
	--duration-slow: 0.5s;
	--easing: cubic-bezier(0.645, 0.045, 0.355, 1);
}
```

### 工具类

```scss
// 布局工具类
.flex {
	display: flex;
}
.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
.flex-column {
	flex-direction: column;
}
.flex-wrap {
	flex-wrap: wrap;
}

// 间距工具类
.m-0 {
	margin: 0;
}
.p-0 {
	padding: 0;
}
.mt-1 {
	margin-top: var(--spacing-xs);
}
.mb-1 {
	margin-bottom: var(--spacing-xs);
}
// ... 更多间距类

// 文字工具类
.text-center {
	text-align: center;
}
.text-left {
	text-align: left;
}
.text-right {
	text-align: right;
}
.text-bold {
	font-weight: bold;
}
.text-primary {
	color: var(--color-primary);
}

// 显示隐藏
.hidden {
	display: none;
}
.invisible {
	visibility: hidden;
}
.sr-only {
	/* 屏幕阅读器专用 */
}
```

## 使用指南

### 安装和配置

```typescript
// main.ts
import { createApp } from 'vue'
import { createWebBootCommon } from 'web-boot-common'
import App from './App.vue'

const app = createApp(App)

// 配置通用组件
app.use(
	createWebBootCommon({
		theme: {
			default: 'light',
			colors: {
				primary: '#1890ff',
			},
		},
		locale: {
			default: 'zh-CN',
			fallback: 'en-US',
		},
		storage: {
			prefix: 'web-boot:',
			encrypt: true,
		},
	}),
)

app.mount('#app')
```

### 按需导入

```typescript
// 只导入需要的组件和函数
import { ThemeToggle, LanguageSelector, Loading, useLocalStorage, formatDate } from 'web-boot-common'
```

## 最佳实践

### 1. 主题一致性

- 使用统一的 CSS 变量系统
- 保持颜色和间距的一致性
- 提供完整的明暗主题支持

### 2. 性能优化

- 按需导入减少包体积
- 使用防抖节流优化交互
- 合理使用组件缓存

### 3. 可访问性

- 提供 ARIA 标签支持
- 确保键盘导航
- 保证颜色对比度

### 4. 类型安全

- 使用 TypeScript 定义类型
- 提供完整的类型导出
- 确保 API 的类型安全

## 版本兼容性

| 版本 | Vue  | React | Svelte | 说明     |
| ---- | ---- | ----- | ------ | -------- |
| 2.x  | 3.0+ | 18.0+ | 4.0+   | 当前版本 |
| 1.x  | 2.6+ | 16.8+ | 3.0+   | 旧版本   |

## 贡献指南

欢迎为 Web Boot 通用组件库贡献代码：

1. Fork 项目仓库
2. 创建功能分支
3. 提交代码变更
4. 创建 Pull Request

详细的贡献指南请查看 [CONTRIBUTING.md](https://github.com/your-username/web-boot/blob/main/CONTRIBUTING.md)。
