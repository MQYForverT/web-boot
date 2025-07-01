# BackgroundLogin 组件

## 概述

BackgroundLogin 是一个专业的登录页面组件，基于 Vue 3 + Element Plus 开发，使用 Web Components 技术实现跨框架使用。

## 特性

- 🎨 **现代化设计** - 简洁美观的登录界面设计
- 🔧 **高度可配置** - 支持多种登录方式和验证规则
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎯 **跨框架支持** - 基于 Web Components，支持 Vue、React、Svelte 等框架
- 🔐 **安全验证** - 内置多种验证方式和安全机制
- 🎨 **主题定制** - 支持明暗主题切换和自定义主题
- 🌐 **国际化** - 支持多语言切换
- 📝 **表单验证** - 完整的表单验证和错误提示

## 安装

```bash
# 安装组件库
pnpm add @web-boot/private-components
```

## 基础用法

### Vue 项目中使用

```vue
<template>
	<background-login
		:login-config="loginConfig"
		@login="handleLogin"
		@register="handleRegister"
		@forgot-password="handleForgotPassword"
	/>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import 'background-login'

	const loginConfig = ref({
		title: 'Web Boot 管理系统',
		subtitle: '欢迎登录',
		logo: '/logo.png',
		background: '/login-bg.jpg',
	})

	const handleLogin = (formData: any) => {
		console.log('登录信息:', formData)
		// 处理登录逻辑
	}

	const handleRegister = () => {
		console.log('跳转到注册页面')
	}

	const handleForgotPassword = () => {
		console.log('跳转到忘记密码页面')
	}
</script>
```

### React 项目中使用

```tsx
import React from 'react'
import 'background-login'

const App: React.FC = () => {
	const loginConfig = {
		title: 'Web Boot 管理系统',
		subtitle: '欢迎登录',
		logo: '/logo.png',
		background: '/login-bg.jpg',
	}

	const handleLogin = (formData: any) => {
		console.log('登录信息:', formData)
	}

	const handleRegister = () => {
		console.log('跳转到注册页面')
	}

	const handleForgotPassword = () => {
		console.log('跳转到忘记密码页面')
	}

	return (
		<background-login
			login-config={JSON.stringify(loginConfig)}
			onLogin={handleLogin}
			onRegister={handleRegister}
			onForgotPassword={handleForgotPassword}
		/>
	)
}

export default App
```

### Svelte 项目中使用

```svelte
<script lang="ts">
  import 'background-login'

  const loginConfig = {
    title: 'Web Boot 管理系统',
    subtitle: '欢迎登录',
    logo: '/logo.png',
    background: '/login-bg.jpg'
  }

  function handleLogin(event: CustomEvent) {
    console.log('登录信息:', event.detail)
  }

  function handleRegister() {
    console.log('跳转到注册页面')
  }

  function handleForgotPassword() {
    console.log('跳转到忘记密码页面')
  }
</script>

<background-login
  login-config={JSON.stringify(loginConfig)}
  on:login={handleLogin}
  on:register={handleRegister}
  on:forgot-password={handleForgotPassword}
/>
```

## 属性配置

### 基础属性

| 属性名                 | 类型      | 默认值       | 说明                                  |
| ---------------------- | --------- | ------------ | ------------------------------------- |
| `title`                | `string`  | `'登录'`     | 页面标题                              |
| `subtitle`             | `string`  | `'欢迎登录'` | 页面副标题                            |
| `logo`                 | `string`  | `''`         | Logo 图片地址                         |
| `background`           | `string`  | `''`         | 背景图片地址                          |
| `theme`                | `string`  | `'light'`    | 主题模式：`light`、`dark`             |
| `login-type`           | `string`  | `'account'`  | 登录方式：`account`、`phone`、`email` |
| `show-register`        | `boolean` | `true`       | 是否显示注册链接                      |
| `show-forgot-password` | `boolean` | `true`       | 是否显示忘记密码链接                  |
| `show-remember`        | `boolean` | `true`       | 是否显示记住密码选项                  |
| `show-captcha`         | `boolean` | `false`      | 是否显示验证码                        |

### 登录配置

```typescript
interface LoginConfig {
	title?: string
	subtitle?: string
	logo?: string
	background?: string
	theme?: 'light' | 'dark'
	loginType?: 'account' | 'phone' | 'email'
	showRegister?: boolean
	showForgotPassword?: boolean
	showRemember?: boolean
	showCaptcha?: boolean
	rules?: {
		username?: ValidationRule[]
		password?: ValidationRule[]
		phone?: ValidationRule[]
		email?: ValidationRule[]
		captcha?: ValidationRule[]
	}
	socialLogin?: {
		wechat?: boolean
		qq?: boolean
		weibo?: boolean
		github?: boolean
	}
}

interface ValidationRule {
	required?: boolean
	message?: string
	pattern?: RegExp
	min?: number
	max?: number
	validator?: (value: any) => boolean | string
}
```

### 完整配置示例

```vue
<template>
	<background-login
		:login-config="loginConfig"
		@login="handleLogin"
		@register="handleRegister"
		@forgot-password="handleForgotPassword"
		@social-login="handleSocialLogin"
	/>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const loginConfig = ref({
		title: 'Web Boot 管理系统',
		subtitle: '欢迎登录',
		logo: '/logo.png',
		background: '/login-bg.jpg',
		theme: 'light',
		loginType: 'account',
		showRegister: true,
		showForgotPassword: true,
		showRemember: true,
		showCaptcha: true,
		rules: {
			username: [
				{ required: true, message: '请输入用户名' },
				{ min: 3, max: 20, message: '用户名长度在 3 到 20 个字符' },
			],
			password: [
				{ required: true, message: '请输入密码' },
				{ min: 6, message: '密码长度不能少于 6 个字符' },
			],
			captcha: [{ required: true, message: '请输入验证码' }],
		},
		socialLogin: {
			wechat: true,
			qq: true,
			weibo: false,
			github: true,
		},
	})

	const handleLogin = (formData: any) => {
		console.log('登录信息:', formData)
		// 处理登录逻辑
	}

	const handleRegister = () => {
		console.log('跳转到注册页面')
	}

	const handleForgotPassword = () => {
		console.log('跳转到忘记密码页面')
	}

	const handleSocialLogin = (type: string) => {
		console.log('社交登录:', type)
	}
</script>
```

## 登录方式

### 账号密码登录

```vue
<template>
	<background-login login-type="account" :login-config="loginConfig" @login="handleLogin" />
</template>

<script setup lang="ts">
	const loginConfig = {
		title: '账号登录',
		rules: {
			username: [{ required: true, message: '请输入用户名' }],
			password: [{ required: true, message: '请输入密码' }],
		},
	}
</script>
```

### 手机号登录

```vue
<template>
	<background-login login-type="phone" :login-config="loginConfig" @login="handleLogin" />
</template>

<script setup lang="ts">
	const loginConfig = {
		title: '手机号登录',
		rules: {
			phone: [
				{ required: true, message: '请输入手机号' },
				{ pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
			],
			code: [
				{ required: true, message: '请输入验证码' },
				{ len: 6, message: '验证码为 6 位数字' },
			],
		},
	}
</script>
```

### 邮箱登录

```vue
<template>
	<background-login login-type="email" :login-config="loginConfig" @login="handleLogin" />
</template>

<script setup lang="ts">
	const loginConfig = {
		title: '邮箱登录',
		rules: {
			email: [
				{ required: true, message: '请输入邮箱' },
				{ type: 'email', message: '请输入正确的邮箱格式' },
			],
			password: [{ required: true, message: '请输入密码' }],
		},
	}
</script>
```

## 事件

| 事件名            | 参数                        | 说明                 |
| ----------------- | --------------------------- | -------------------- |
| `login`           | `(formData: LoginFormData)` | 登录提交事件         |
| `register`        | `()`                        | 注册链接点击事件     |
| `forgot-password` | `()`                        | 忘记密码链接点击事件 |
| `social-login`    | `(type: string)`            | 社交登录点击事件     |
| `theme-change`    | `(theme: string)`           | 主题切换事件         |

### 事件参数类型

```typescript
interface LoginFormData {
	username?: string
	password?: string
	phone?: string
	email?: string
	code?: string
	captcha?: string
	remember?: boolean
}

interface SocialLoginData {
	type: 'wechat' | 'qq' | 'weibo' | 'github'
	data?: any
}
```

## 方法

### 组件实例方法

```typescript
interface BackgroundLoginInstance {
	// 重置表单
	resetForm(): void

	// 验证表单
	validateForm(): Promise<boolean>

	// 设置验证码
	setCaptcha(captcha: string): void

	// 切换登录方式
	switchLoginType(type: 'account' | 'phone' | 'email'): void

	// 切换主题
	toggleTheme(): void
}
```

### 使用示例

```vue
<template>
	<background-login ref="loginRef" />

	<el-button @click="resetForm">重置表单</el-button>
	<el-button @click="validateForm">验证表单</el-button>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const loginRef = ref()

	const resetForm = () => {
		loginRef.value?.resetForm()
	}

	const validateForm = async () => {
		const isValid = await loginRef.value?.validateForm()
		console.log('表单验证结果:', isValid)
	}
</script>
```

## 主题定制

### CSS 变量

```css
:root {
	/* 主色调 */
	--primary-color: #409eff;
	--success-color: #67c23a;
	--warning-color: #e6a23c;
	--danger-color: #f56c6c;

	/* 登录页面颜色 */
	--login-bg: #f0f2f5;
	--login-card-bg: #ffffff;
	--login-text-color: #303133;
	--login-border-color: #dcdfe6;

	/* 表单颜色 */
	--form-label-color: #606266;
	--form-input-bg: #ffffff;
	--form-input-border: #dcdfe6;
	--form-input-focus-border: #409eff;
}

/* 暗色主题 */
[data-theme='dark'] {
	--login-bg: #0a0a0a;
	--login-card-bg: #1a1a1a;
	--login-text-color: #ffffff;
	--login-border-color: #4c4c4c;
	--form-label-color: #cccccc;
	--form-input-bg: #2a2a2a;
	--form-input-border: #4c4c4c;
}
```

### 自定义主题

```vue
<template>
	<background-login :login-config="loginConfig" class="custom-login" />
</template>

<script setup lang="ts">
	const loginConfig = {
		title: '自定义主题登录',
		theme: 'custom',
	}
</script>

<style>
	.custom-login {
		--primary-color: #1890ff;
		--login-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		--login-card-bg: rgba(255, 255, 255, 0.95);
		--border-radius: 12px;
	}
</style>
```

## 验证码集成

### 图片验证码

```vue
<template>
	<background-login :login-config="loginConfig" @login="handleLogin" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const captcha = ref('')

	const loginConfig = ref({
		showCaptcha: true,
		captchaUrl: '/api/captcha',
		onCaptchaRefresh: async () => {
			// 刷新验证码
			const response = await fetch('/api/captcha')
			const blob = await response.blob()
			return URL.createObjectURL(blob)
		},
	})

	const handleLogin = (formData: any) => {
		if (formData.captcha !== captcha.value) {
			ElMessage.error('验证码错误')
			return
		}
		// 处理登录逻辑
	}
</script>
```

### 短信验证码

```vue
<template>
	<background-login login-type="phone" :login-config="loginConfig" @login="handleLogin" @send-code="handleSendCode" />
</template>

<script setup lang="ts">
	const loginConfig = {
		loginType: 'phone',
		showCaptcha: false,
		countdown: 60,
	}

	const handleSendCode = async (phone: string) => {
		try {
			await fetch('/api/send-sms', {
				method: 'POST',
				body: JSON.stringify({ phone }),
			})
			ElMessage.success('验证码已发送')
		} catch (error) {
			ElMessage.error('发送失败，请重试')
		}
	}
</script>
```

## 社交登录

### 配置社交登录

```vue
<template>
	<background-login :login-config="loginConfig" @social-login="handleSocialLogin" />
</template>

<script setup lang="ts">
	const loginConfig = {
		socialLogin: {
			wechat: true,
			qq: true,
			weibo: false,
			github: true,
		},
	}

	const handleSocialLogin = (type: string) => {
		switch (type) {
			case 'wechat':
				// 微信登录
				window.open('/api/auth/wechat', '_blank')
				break
			case 'qq':
				// QQ 登录
				window.open('/api/auth/qq', '_blank')
				break
			case 'github':
				// GitHub 登录
				window.open('/api/auth/github', '_blank')
				break
		}
	}
</script>
```

## 国际化

### 多语言配置

```vue
<template>
	<background-login :login-config="loginConfig" :locale="locale" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const locale = ref('zh-CN')

	const loginConfig = {
		title: '登录',
		subtitle: '欢迎登录',
		locale: {
			'zh-CN': {
				title: '登录',
				subtitle: '欢迎登录',
				username: '用户名',
				password: '密码',
				login: '登录',
				register: '注册',
				forgotPassword: '忘记密码',
			},
			'en-US': {
				title: 'Login',
				subtitle: 'Welcome back',
				username: 'Username',
				password: 'Password',
				login: 'Login',
				register: 'Register',
				forgotPassword: 'Forgot Password',
			},
		},
	}
</script>
```

## 最佳实践

### 1. 表单验证

```typescript
// 推荐：使用统一的验证规则
const validationRules = {
	username: [
		{ required: true, message: '请输入用户名' },
		{ min: 3, max: 20, message: '用户名长度在 3 到 20 个字符' },
		{ pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线' },
	],
	password: [
		{ required: true, message: '请输入密码' },
		{ min: 6, message: '密码长度不能少于 6 个字符' },
		{ pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, message: '密码必须包含大小写字母和数字' },
	],
}
```

### 2. 错误处理

```typescript
const handleLogin = async (formData: LoginFormData) => {
	try {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})

		if (!response.ok) {
			throw new Error('登录失败')
		}

		const data = await response.json()
		// 处理登录成功
		localStorage.setItem('token', data.token)
		router.push('/dashboard')
	} catch (error) {
		ElMessage.error(error.message || '登录失败，请重试')
	}
}
```

### 3. 安全考虑

```typescript
// 防止暴力破解
const loginAttempts = new Map()

const handleLogin = async (formData: LoginFormData) => {
	const key = formData.username || formData.phone || formData.email
	const attempts = loginAttempts.get(key) || 0

	if (attempts >= 5) {
		ElMessage.error('登录失败次数过多，请稍后再试')
		return
	}

	try {
		// 登录逻辑
		loginAttempts.delete(key) // 登录成功，清除记录
	} catch (error) {
		loginAttempts.set(key, attempts + 1)
		ElMessage.error('登录失败，请重试')
	}
}
```

## 常见问题

### 1. 组件不显示

**问题**: 登录组件不显示

**解决方案**:

```vue
<template>
	<div style="height: 100vh;">
		<background-login />
	</div>
</template>

<script setup lang="ts">
	import 'background-login'
</script>
```

### 2. 表单验证不生效

**问题**: 自定义验证规则不生效

**解决方案**:

```vue
<template>
	<background-login :login-config="loginConfig" @login="handleLogin" />
</template>

<script setup lang="ts">
	const loginConfig = {
		rules: {
			username: [
				{ required: true, message: '请输入用户名' },
				{
					validator: (value: string) => {
						if (value.length < 3) {
							return '用户名长度不能少于3个字符'
						}
						return true
					},
				},
			],
		},
	}
</script>
```

### 3. 事件不触发

**问题**: 登录事件不触发

**解决方案**:

```vue
<template>
	<background-login @login="handleLogin" />
</template>

<script setup lang="ts">
	const handleLogin = (formData: any) => {
		console.log('登录信息:', formData)
		// 确保事件处理函数正确定义
	}
</script>
```

## 更新日志

### v1.0.0

- 初始版本发布
- 支持账号密码、手机号、邮箱三种登录方式
- 集成表单验证和错误提示
- 支持社交登录和验证码
- 支持主题定制和国际化
