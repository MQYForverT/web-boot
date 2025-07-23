# 公共组件

## 概述

公共组件是 Web Boot 项目中的通用组件库，提供了一系列可复用的 UI 组件，支持跨框架使用。

## 特性

- 🎯 **跨框架支持** - 基于 Web Components，支持 Vue、React、Svelte 等框架
- 🎨 **统一设计** - 遵循统一的设计规范和交互模式
- 🔧 **高度可配置** - 支持多种配置选项和自定义样式
- 📱 **响应式设计** - 完美适配各种屏幕尺寸
- 🎨 **主题定制** - 支持明暗主题切换和自定义主题
- 🌐 **国际化** - 支持多语言切换
- ♿ **无障碍支持** - 符合 WCAG 2.1 标准

### 包信息

- **包名**：`@tsoul/component-private`
- **类型**：运行依赖
- **命令**：`pnpm add @tsoul/component-private`

> 📦 **安装说明**：请参考 [组件概述](/components/) 页面的统一安装指南

> 💡 **提示**：Common Components 是私有组件库的一部分，无需单独安装

## 组件列表

### Language 组件

多语言切换组件，支持动态切换应用语言。

#### 基础用法

```vue
<template>
	<language-selector :languages="languages" :current-locale="currentLocale" @change="handleLanguageChange" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import 'language-selector'

	const currentLocale = ref('zh-CN')

	const languages = [
		{ code: 'zh-CN', name: '中文', flag: '🇨🇳' },
		{ code: 'en-US', name: 'English', flag: '🇺🇸' },
		{ code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
	]

	const handleLanguageChange = (locale: string) => {
		currentLocale.value = locale
		// 切换语言逻辑
	}
</script>
```

#### 属性配置

| 属性名           | 类型         | 默认值     | 说明             |
| ---------------- | ------------ | ---------- | ---------------- |
| `languages`      | `Language[]` | `[]`       | 支持的语言列表   |
| `current-locale` | `string`     | `'zh-CN'`  | 当前语言         |
| `show-flag`      | `boolean`    | `true`     | 是否显示国旗图标 |
| `show-name`      | `boolean`    | `true`     | 是否显示语言名称 |
| `position`       | `string`     | `'bottom'` | 下拉菜单位置     |

#### 事件

| 事件名   | 参数               | 说明         |
| -------- | ------------------ | ------------ |
| `change` | `(locale: string)` | 语言切换事件 |

### Theme 组件

主题切换组件，支持明暗主题切换。

#### 基础用法

```vue
<template>
	<theme-switcher :current-theme="currentTheme" :themes="themes" @change="handleThemeChange" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import 'theme-switcher'

	const currentTheme = ref('light')

	const themes = [
		{ value: 'light', label: '浅色', icon: 'sun' },
		{ value: 'dark', label: '深色', icon: 'moon' },
		{ value: 'auto', label: '自动', icon: 'auto' },
	]

	const handleThemeChange = (theme: string) => {
		currentTheme.value = theme
		// 切换主题逻辑
	}
</script>
```

#### 属性配置

| 属性名          | 类型      | 默认值    | 说明             |
| --------------- | --------- | --------- | ---------------- |
| `current-theme` | `string`  | `'light'` | 当前主题         |
| `themes`        | `Theme[]` | `[]`      | 可用主题列表     |
| `show-icon`     | `boolean` | `true`    | 是否显示图标     |
| `show-label`    | `boolean` | `true`    | 是否显示标签     |
| `animation`     | `boolean` | `true`    | 是否启用切换动画 |

#### 事件

| 事件名   | 参数              | 说明         |
| -------- | ----------------- | ------------ |
| `change` | `(theme: string)` | 主题切换事件 |

## 高级用法

### 组合使用

```vue
<template>
	<div class="header-actions">
		<language-selector :languages="languages" :current-locale="currentLocale" @change="handleLanguageChange" />

		<theme-switcher :current-theme="currentTheme" :themes="themes" @change="handleThemeChange" />
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import 'language-selector'
	import 'theme-switcher'

	const currentLocale = ref('zh-CN')
	const currentTheme = ref('light')

	const languages = [
		{ code: 'zh-CN', name: '中文', flag: '🇨🇳' },
		{ code: 'en-US', name: 'English', flag: '🇺🇸' },
	]

	const themes = [
		{ value: 'light', label: '浅色', icon: 'sun' },
		{ value: 'dark', label: '深色', icon: 'moon' },
	]

	const handleLanguageChange = (locale: string) => {
		currentLocale.value = locale
		// 更新 i18n 配置
		i18n.global.locale.value = locale
	}

	const handleThemeChange = (theme: string) => {
		currentTheme.value = theme
		// 更新主题配置
		document.documentElement.setAttribute('data-theme', theme)
	}
</script>

<style scoped>
	.header-actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}
</style>
```

### 自定义样式

```vue
<template>
	<div class="custom-header">
		<language-selector
			:languages="languages"
			:current-locale="currentLocale"
			class="custom-language"
			@change="handleLanguageChange"
		/>

		<theme-switcher :current-theme="currentTheme" :themes="themes" class="custom-theme" @change="handleThemeChange" />
	</div>
</template>

<style scoped>
	.custom-header {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 8px 16px;
		background: var(--header-bg);
		border-bottom: 1px solid var(--border-color);
	}

	.custom-language {
		--selector-bg: var(--primary-color);
		--selector-text-color: white;
		--selector-border-radius: 6px;
	}

	.custom-theme {
		--switcher-bg: var(--secondary-bg);
		--switcher-text-color: var(--text-color);
		--switcher-border-radius: 8px;
	}
</style>
```

## 国际化集成

### 与 Vue I18n 集成

```typescript
// i18n/index.ts
import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'

const i18n = createI18n({
	legacy: false,
	locale: 'zh-CN',
	fallbackLocale: 'en-US',
	messages: {
		'zh-CN': zhCN,
		'en-US': enUS,
	},
})

export default i18n
```

```vue
<template>
	<language-selector :languages="languages" :current-locale="currentLocale" @change="handleLanguageChange" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useI18n } from 'vue-i18n'

	const { locale } = useI18n()
	const currentLocale = ref(locale.value)

	const handleLanguageChange = (newLocale: string) => {
		currentLocale.value = newLocale
		locale.value = newLocale
		localStorage.setItem('locale', newLocale)
	}
</script>
```

### 与 React Intl 集成

```tsx
import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import 'language-selector'

const App: React.FC = () => {
	const [locale, setLocale] = useState('zh-CN')
	const [messages, setMessages] = useState(zhCN)

	const handleLanguageChange = async (newLocale: string) => {
		setLocale(newLocale)

		// 动态加载语言包
		const newMessages = await import(`./locales/${newLocale}`)
		setMessages(newMessages.default)
	}

	return (
		<IntlProvider locale={locale} messages={messages}>
			<language-selector languages={languages} current-locale={locale} onLanguageChange={handleLanguageChange} />
		</IntlProvider>
	)
}
```

## 主题系统集成

### CSS 变量主题

```css
/* themes/light.css */
:root {
	--primary-color: #409eff;
	--secondary-color: #67c23a;
	--text-color: #303133;
	--bg-color: #ffffff;
	--border-color: #dcdfe6;
}

/* themes/dark.css */
[data-theme='dark'] {
	--primary-color: #409eff;
	--secondary-color: #67c23a;
	--text-color: #ffffff;
	--bg-color: #1a1a1a;
	--border-color: #4c4c4c;
}
```

```vue
<template>
	<theme-switcher :current-theme="currentTheme" :themes="themes" @change="handleThemeChange" />
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue'

	const currentTheme = ref('light')

	const handleThemeChange = (theme: string) => {
		currentTheme.value = theme
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}

	onMounted(() => {
		// 恢复保存的主题
		const savedTheme = localStorage.getItem('theme') || 'light'
		currentTheme.value = savedTheme
		document.documentElement.setAttribute('data-theme', savedTheme)
	})
</script>
```

## 性能优化

### 懒加载

```vue
<template>
	<Suspense>
		<template #default>
			<AsyncLanguageSelector />
		</template>
		<template #fallback>
			<div class="loading">加载中...</div>
		</template>
	</Suspense>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue'

	const AsyncLanguageSelector = defineAsyncComponent(() => import('language-selector'))
</script>
```

### 按需加载

```typescript
// 按需导入组件
import { LanguageSelector, ThemeSwitcher } from '@tsoul/component-private'

// 注册组件
app.component('language-selector', LanguageSelector)
app.component('theme-switcher', ThemeSwitcher)
```

## 最佳实践

### 1. 组件配置

```typescript
// 推荐：使用配置文件管理组件选项
const componentConfig = {
	language: {
		defaultLocale: 'zh-CN',
		supportedLocales: ['zh-CN', 'en-US', 'ja-JP'],
		fallbackLocale: 'en-US',
	},
	theme: {
		defaultTheme: 'light',
		supportedThemes: ['light', 'dark', 'auto'],
		storageKey: 'app-theme',
	},
}
```

### 2. 错误处理

```vue
<template>
	<language-selector
		:languages="languages"
		:current-locale="currentLocale"
		@change="handleLanguageChange"
		@error="handleError"
	/>
</template>

<script setup lang="ts">
	const handleError = (error: Error) => {
		console.error('语言切换错误:', error)
		ElMessage.error('语言切换失败，请重试')
	}
</script>
```

### 3. 无障碍支持

```vue
<template>
	<language-selector
		:languages="languages"
		:current-locale="currentLocale"
		aria-label="选择语言"
		role="combobox"
		@change="handleLanguageChange"
	/>
</template>
```

## 常见问题

### 1. 组件不显示

**问题**: 组件注册后不显示

**解决方案**:

```vue
<template>
	<div>
		<language-selector />
	</div>
</template>

<script setup lang="ts">
	// 确保正确导入
	import 'language-selector'
</script>
```

### 2. 事件不触发

**问题**: 语言切换事件不触发

**解决方案**:

```vue
<template>
	<language-selector @change="handleLanguageChange" />
</template>

<script setup lang="ts">
	const handleLanguageChange = (locale: string) => {
		console.log('语言切换:', locale)
		// 确保事件处理函数正确定义
	}
</script>
```

### 3. 样式不生效

**问题**: 自定义样式不生效

**解决方案**:

```vue
<style scoped>
	/* 使用深度选择器 */
	:deep(.language-selector) {
		--selector-bg: #1890ff;
		--selector-text-color: white;
	}
</style>
```

## 更新日志

### v1.0.0

- 初始版本发布
- 支持 Language 和 Theme 组件
- 集成国际化支持
- 支持主题切换功能
