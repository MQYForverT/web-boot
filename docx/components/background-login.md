# BackgroundLogin 登录页面组件

## 📖 组件介绍

`BackgroundLogin` 是一个功能完整的登录页面组件，基于 Vue 3 + Element Plus 开发，并使用 Web Components 技术实现跨框架复用。组件提供了多种布局方式和丰富的自定义选项，可以快速构建专业的登录界面。

## 🎯 功能特性

### 布局模式

- ✨ 支持三种布局模式：左侧、居中、右侧
- 📱 响应式设计，自动适配移动端
- 🎨 可自定义容器尺寸和背景

### 表单功能

- 👤 用户名/密码登录
- 🔑 验证码支持
- ✅ 表单验证
- 💾 记住密码
- 🎯 自定义表单项

### 界面功能

- 🌓 支持明暗主题切换
- 🎨 自定义背景
- 🖼️ 自定义 Logo
- 📝 可配置文案

## 🚀 快速开始

### 包信息

- **包名**：`@tsoul/component-private`
- **类型**：运行依赖
- **命令**：`pnpm add @tsoul/component-private`

> 📦 **安装说明**：请参考 [组件概述](/components/) 页面的统一安装指南

### 基础用法

```vue
<template>
	<ts-background-login :account="accountConfig" title="系统登录" layout="center" @submit="handleSubmit">
		<template #logo>
			<img src="/logo.png" alt="logo" />
		</template>
	</ts-background-login>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const accountConfig = {
		username: {
			show: true,
			field: 'username',
			placeholder: '请输入用户名',
			validate: { required: true, trigger: 'blur' },
		},
		password: {
			show: true,
			field: 'password',
			placeholder: '请输入密码',
			validate: { required: true },
		},
	}

	const handleSubmit = (formData) => {
		console.log('表单提交:', formData)
	}
</script>
```

## 📝 API

### Props

| 属性名              | 类型          | 默认值                                                     | 必填 | 说明                                      |
| ------------------- | ------------- | ---------------------------------------------------------- | ---- | ----------------------------------------- |
| containerSize       | object/string | `{ height: '100vh', width: '100vw' }`                      | 否   | 容器尺寸配置                              |
| containerBackground | object/string | `{ background: '/src/assets/background.svg', opacity: 1 }` | 否   | 容器背景配置                              |
| account             | object/string | 见下方默认配置                                             | 否   | 账号表单配置                              |
| title               | string        | '登录'                                                     | 否   | 登录框标题                                |
| submitLabel         | string        | '登录'                                                     | 否   | 提交按钮文字                              |
| layout              | string        | 'center'                                                   | 否   | 布局方式，可选值：'left'/'center'/'right' |

### 类型定义

```typescript
// 表单提交事件参数类型
type FormData = Record<string, string>

// 容器尺寸配置
interface ContainerSize {
	height: string
	width: string
	style?: object
}

// 容器背景配置
interface ContainerBackground {
	background: string
	opacity: number
	style?: object
}

// 表单项配置
interface IAccountItem {
	show: boolean
	field: string
	placeholder: string
	default?: string
	validate?: FormRules
}

// 账号配置
interface Account {
	username: IAccountItem & {
		btnLabel?: string
	}
	password: IAccountItem
	code?: IAccountItem
}
```

### Events

| 事件名  | 参数                     | 说明                               |
| ------- | ------------------------ | ---------------------------------- |
| submit  | `Record<string, string>` | 表单提交事件，参数为表单数据对象   |
| getCode | `Record<string, string>` | 获取验证码事件，参数为表单数据对象 |

### Slots

| 插槽名              | 说明                              |
| ------------------- | --------------------------------- |
| logo                | 自定义 Logo                       |
| header              | 自定义头部内容                    |
| body                | 自定义表单内容                    |
| footer              | 自定义底部内容                    |
| containerBackground | 自定义容器背景                    |
| layoutImage         | 自定义布局图片（左/右布局时显示） |

## 🎨 主题定制

组件支持通过 CSS 变量进行主题定制：

```css
:root {
	/* 主题色 */
	--el-color-primary: #409eff;

	/* 文字颜色 */
	--el-text-color: #303133;
	--el-text-color-regular: #606266;

	/* 背景色 */
	--el-bg-color: #ffffff;

	/* 暗色主题 */
	&.dark {
		--el-bg-color: #101628;
		--el-text-color: #ffffff;
	}
}
```

## 🌐 跨框架使用

作为 Web Components，组件可以在不同框架中使用：

### React

```tsx
import '@tsoul/component-private'

const App: React.FC = () => {
	const handleSubmit = (formData) => {
		console.log('表单提交:', formData)
	}

	return (
		<ts-background-login
			account={JSON.stringify(accountConfig)}
			title="系统登录"
			layout="center"
			onSubmit={handleSubmit}
		>
			<img slot="logo" src="/logo.png" alt="logo" />
		</ts-background-login>
	)
}
```

### Svelte

```svelte
<script lang="ts">
  import '@tsoul/component-private'

  const accountConfig = {
    username: {
      show: true,
      field: 'username',
      placeholder: '请输入用户名'
    },
    password: {
      show: true,
      field: 'password',
      placeholder: '请输入密码'
    }
  }

  const handleSubmit = (event) => {
    console.log('表单提交:', event.detail)
  }
</script>

<ts-background-login
  account={JSON.stringify(accountConfig)}
  title="系统登录"
  layout="center"
  on:submit={handleSubmit}
>
  <img slot="logo" src="/logo.png" alt="logo" />
</ts-background-login>
```

## 📋 最佳实践

1. **表单验证配置**

```typescript
const accountConfig = {
	username: {
		show: true,
		field: 'username',
		placeholder: '请输入用户名',
		validate: {
			required: true,
			message: '用户名不能为空',
			trigger: 'blur',
		},
	},
	password: {
		show: true,
		field: 'password',
		placeholder: '请输入密码',
		validate: {
			required: true,
			min: 6,
			message: '密码不能少于6位',
			trigger: 'blur',
		},
	},
}
```

2. **验证码配置**

```typescript
const accountConfig = {
	// ... username & password
	code: {
		show: true,
		field: 'code',
		placeholder: '请输入验证码',
		validate: {
			required: true,
			len: 6,
			message: '请输入6位验证码',
		},
	},
}
```

3. **自定义背景**

```typescript
const backgroundConfig = {
	background: '/images/login-bg.jpg',
	opacity: 0.8,
	style: {
		filter: 'blur(2px)',
	},
}
```

## 🚨 注意事项

1. 在使用跨框架特性时，需要将对象类型的属性转换为 JSON 字符串
2. 表单验证规则需要符合 Element Plus 的 FormRules 规范
3. 自定义背景图片时注意图片大小和加载性能
4. 移动端适配时注意左右布局会自动切换为居中布局

## 🔗 相关链接

- [Element Plus Form 组件](https://element-plus.org/zh-CN/component/form.html)
- [Vue 3 文档](https://vuejs.org)
- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
