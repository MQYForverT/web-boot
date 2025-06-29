# 登录组件 (BackgroundLogin)

`BackgroundLogin` 是 Web Boot 提供的美观且功能完整的登录组件，支持多种登录方式和自定义配置。

## 特性

- 🎨 **精美设计**: 现代化的登录界面设计
- 🔐 **多种登录方式**: 支持用户名/邮箱/手机号登录
- ✅ **表单验证**: 内置完整的表单验证逻辑
- 📱 **响应式布局**: 完美适配各种屏幕尺寸
- 🌍 **国际化支持**: 支持多语言切换
- 🎭 **主题切换**: 支持明暗主题
- 🔒 **安全加密**: 密码加密传输
- 💾 **记住登录**: 支持记住登录状态

## 安装

```bash
npm install mqy-background-login
# 或
pnpm add mqy-background-login
```

## 基础使用

### Vue 3

```vue
<template>
	<BackgroundLogin
		:config="loginConfig"
		@submit="handleLogin"
		@register="handleRegister"
		@forgot-password="handleForgotPassword"
	/>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { BackgroundLogin } from 'mqy-background-login'

	const loginConfig = ref({
		title: 'Web Boot',
		subtitle: '一键式任何前端语言开发后端管理系统',
		theme: 'light',
		loginMethods: ['username', 'email', 'phone'],
		showRegister: true,
		showForgotPassword: true,
	})

	const handleLogin = (formData: LoginFormData) => {
		console.log('登录数据:', formData)
		// 处理登录逻辑
	}

	const handleRegister = () => {
		console.log('跳转注册页面')
	}

	const handleForgotPassword = () => {
		console.log('跳转忘记密码页面')
	}
</script>
```

### React

```tsx
import React, { useState } from 'react'
import { BackgroundLogin } from 'mqy-background-login'

const LoginPage: React.FC = () => {
	const [loginConfig] = useState({
		title: 'Web Boot',
		subtitle: '一键式任何前端语言开发后端管理系统',
		theme: 'light',
		loginMethods: ['username', 'email', 'phone'],
		showRegister: true,
		showForgotPassword: true,
	})

	const handleLogin = (formData: LoginFormData) => {
		console.log('登录数据:', formData)
		// 处理登录逻辑
	}

	const handleRegister = () => {
		console.log('跳转注册页面')
	}

	const handleForgotPassword = () => {
		console.log('跳转忘记密码页面')
	}

	return (
		<BackgroundLogin
			config={loginConfig}
			onSubmit={handleLogin}
			onRegister={handleRegister}
			onForgotPassword={handleForgotPassword}
		/>
	)
}

export default LoginPage
```

### Svelte

```svelte
<script lang="ts">
  import { BackgroundLogin } from 'mqy-background-login'

  let loginConfig = {
    title: 'Web Boot',
    subtitle: '一键式任何前端语言开发后端管理系统',
    theme: 'light',
    loginMethods: ['username', 'email', 'phone'],
    showRegister: true,
    showForgotPassword: true
  }

  const handleLogin = (event: CustomEvent) => {
    const formData = event.detail
    console.log('登录数据:', formData)
    // 处理登录逻辑
  }

  const handleRegister = () => {
    console.log('跳转注册页面')
  }

  const handleForgotPassword = () => {
    console.log('跳转忘记密码页面')
  }
</script>

<BackgroundLogin
  config={loginConfig}
  on:submit={handleLogin}
  on:register={handleRegister}
  on:forgotPassword={handleForgotPassword}
/>
```

## 配置选项

### 完整配置接口

```typescript
interface LoginConfig {
	// 基础配置
	title: string // 登录页标题
	subtitle: string // 副标题
	logo: string // Logo 图片地址

	// 主题配置
	theme: 'light' | 'dark' | 'auto' // 主题模式
	primaryColor: string // 主色调
	backgroundImage: string // 背景图片

	// 登录方式配置
	loginMethods: Array<'username' | 'email' | 'phone'>
	defaultMethod: 'username' | 'email' | 'phone'

	// 功能开关
	showRegister: boolean // 是否显示注册链接
	showForgotPassword: boolean // 是否显示忘记密码
	showRememberMe: boolean // 是否显示记住我
	showSocialLogin: boolean // 是否显示第三方登录
	showCaptcha: boolean // 是否显示验证码

	// 第三方登录配置
	socialProviders: Array<{
		name: string // 提供商名称
		icon: string // 图标
		color: string // 主题色
		enabled: boolean // 是否启用
	}>

	// 验证规则配置
	validation: {
		username: ValidationRule // 用户名验证规则
		email: ValidationRule // 邮箱验证规则
		phone: ValidationRule // 手机号验证规则
		password: ValidationRule // 密码验证规则
	}

	// 文本配置（国际化）
	texts: {
		loginTitle: string // 登录标题
		loginButton: string // 登录按钮文本
		registerLink: string // 注册链接文本
		forgotPasswordLink: string // 忘记密码链接文本
		rememberMe: string // 记住我文本
		// 更多文本配置...
	}
}
```

### 表单数据结构

```typescript
interface LoginFormData {
	// 登录凭据
	credential: string // 用户名/邮箱/手机号
	password: string // 密码

	// 附加信息
	loginMethod: 'username' | 'email' | 'phone'
	rememberMe: boolean // 是否记住登录
	captcha?: string // 验证码

	// 设备信息
	device: {
		userAgent: string // 用户代理
		fingerprint: string // 设备指纹
		timestamp: number // 时间戳
	}
}
```

## API 参考

### Props

| 属性      | 类型          | 默认值  | 说明             |
| --------- | ------------- | ------- | ---------------- |
| config    | `LoginConfig` | -       | 登录配置对象     |
| loading   | `boolean`     | `false` | 是否显示加载状态 |
| className | `string`      | -       | 自定义类名       |

### Events

| 事件名          | 参数                        | 说明               |
| --------------- | --------------------------- | ------------------ |
| submit          | `(formData: LoginFormData)` | 表单提交时触发     |
| register        | `()`                        | 点击注册链接时触发 |
| forgot-password | `()`                        | 点击忘记密码时触发 |
| social-login    | `(provider: string)`        | 第三方登录时触发   |
| theme-change    | `(theme: string)`           | 主题切换时触发     |
| method-change   | `(method: string)`          | 登录方式切换时触发 |

### Slots (Vue) / Children (React) / Slots (Svelte)

| 插槽名       | 说明                 |
| ------------ | -------------------- |
| header       | 自定义头部内容       |
| footer       | 自定义底部内容       |
| form-top     | 表单顶部自定义内容   |
| form-bottom  | 表单底部自定义内容   |
| social-login | 自定义第三方登录区域 |

## 高级功能

### 自定义验证规则

```typescript
const customValidation = {
	username: {
		required: true,
		minLength: 3,
		maxLength: 20,
		pattern: /^[a-zA-Z0-9_]+$/,
		message: '用户名只能包含字母、数字和下划线',
	},

	password: {
		required: true,
		minLength: 8,
		pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
		message: '密码必须包含大小写字母、数字和特殊字符',
	},

	email: {
		required: true,
		pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		message: '请输入有效的邮箱地址',
	},
}
```

### 第三方登录配置

```typescript
const socialProviders = [
	{
		name: 'google',
		icon: 'fab fa-google',
		color: '#db4437',
		enabled: true,
	},
	{
		name: 'github',
		icon: 'fab fa-github',
		color: '#333333',
		enabled: true,
	},
	{
		name: 'wechat',
		icon: 'fab fa-weixin',
		color: '#7bb32e',
		enabled: true,
	},
]
```

### 主题自定义

```scss
// 登录页面主题变量
:root {
	// 主色调
	--login-primary-color: #1890ff;
	--login-success-color: #52c41a;
	--login-warning-color: #faad14;
	--login-error-color: #f5222d;

	// 背景配置
	--login-bg-color: #f0f2f5;
	--login-card-bg: #ffffff;
	--login-input-bg: #ffffff;

	// 文字颜色
	--login-text-color: #000000d9;
	--login-text-secondary: #00000073;
	--login-placeholder-color: #bfbfbf;

	// 边框和阴影
	--login-border-color: #d9d9d9;
	--login-border-radius: 8px;
	--login-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

// 暗色主题
[data-theme='dark'] {
	--login-bg-color: #141414;
	--login-card-bg: #1f1f1f;
	--login-input-bg: #262626;
	--login-text-color: #ffffffd9;
	--login-text-secondary: #ffffff73;
	--login-border-color: #434343;
}
```

### 表单验证集成

```typescript
// Vue 3 使用 VeeValidate
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
	username: yup.string().required('用户名不能为空').min(3, '用户名至少3个字符'),
	password: yup.string().required('密码不能为空').min(8, '密码至少8个字符'),
})

const { handleSubmit, errors } = useForm({
	validationSchema: schema,
})

// React 使用 React Hook Form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const {
	register,
	handleSubmit,
	formState: { errors },
} = useForm({
	resolver: yupResolver(schema),
})
```

## 组件结构

### 目录结构

```
BackgroundLogin/
├── component/              # 子组件
│   ├── Form/              # 登录表单组件
│   │   ├── index.vue
│   │   ├── UsernameLogin.vue
│   │   ├── EmailLogin.vue
│   │   ├── PhoneLogin.vue
│   │   └── SocialLogin.vue
│   ├── Top/               # 头部组件
│   │   ├── index.vue
│   │   ├── Logo.vue
│   │   └── ThemeToggle.vue
│   └── Background/        # 背景组件
│       ├── index.vue
│       └── Particles.vue
├── hooks/                 # 组合式函数
│   ├── useLogin.ts
│   ├── useValidation.ts
│   ├── useSocialLogin.ts
│   └── useTheme.ts
├── styles/                # 样式文件
│   ├── index.scss
│   ├── form.scss
│   ├── animation.scss
│   └── responsive.scss
├── constants/             # 常量配置
│   ├── validation.ts
│   └── social.ts
├── BackgroundLogin.vue    # 主组件
├── BackgroundLogin.ts     # 组件逻辑
└── index.ts              # 导出文件
```

### 核心子组件

#### 登录表单 (Form)

- 多种登录方式切换
- 实时表单验证
- 密码强度指示
- 验证码集成

#### 头部组件 (Top)

- Logo 和标题显示
- 主题切换按钮
- 语言切换按钮
- 自定义头部内容

#### 背景组件 (Background)

- 动态背景效果
- 粒子动画
- 渐变背景
- 自定义背景图片

## 使用示例

### 完整的登录页面

```vue
<template>
	<div class="login-page">
		<BackgroundLogin
			:config="loginConfig"
			:loading="loginLoading"
			@submit="handleLogin"
			@register="handleRegister"
			@forgot-password="handleForgotPassword"
			@social-login="handleSocialLogin"
		>
			<template #header>
				<div class="custom-header">
					<h1>欢迎使用 Web Boot</h1>
					<p>开始您的开发之旅</p>
				</div>
			</template>

			<template #footer>
				<div class="custom-footer">
					<p>&copy; 2024 Web Boot. All rights reserved.</p>
				</div>
			</template>
		</BackgroundLogin>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive } from 'vue'
	import { useRouter } from 'vue-router'
	import { BackgroundLogin } from 'mqy-background-login'
	import { loginApi } from '@/api/auth'

	const router = useRouter()
	const loginLoading = ref(false)

	const loginConfig = reactive({
		title: 'Web Boot',
		subtitle: '一键式任何前端语言开发后端管理系统',
		theme: 'light',
		loginMethods: ['username', 'email'],
		showRegister: true,
		showForgotPassword: true,
		showSocialLogin: true,
		socialProviders: [
			{ name: 'github', icon: 'fab fa-github', color: '#333', enabled: true },
			{ name: 'google', icon: 'fab fa-google', color: '#db4437', enabled: true },
		],
	})

	const handleLogin = async (formData: LoginFormData) => {
		loginLoading.value = true

		try {
			const response = await loginApi.login(formData)

			// 保存用户信息和 Token
			localStorage.setItem('token', response.token)
			localStorage.setItem('userInfo', JSON.stringify(response.user))

			// 跳转到首页
			router.push('/')
		} catch (error) {
			console.error('登录失败:', error)
			// 显示错误信息
		} finally {
			loginLoading.value = false
		}
	}

	const handleRegister = () => {
		router.push('/register')
	}

	const handleForgotPassword = () => {
		router.push('/forgot-password')
	}

	const handleSocialLogin = async (provider: string) => {
		try {
			// 处理第三方登录
			window.location.href = `/api/auth/social/${provider}`
		} catch (error) {
			console.error('第三方登录失败:', error)
		}
	}
</script>
```

## 最佳实践

### 安全建议

1. **密码加密**: 前端不应处理密码加密，由后端处理
2. **HTTPS**: 生产环境必须使用 HTTPS
3. **Token 管理**: 使用 JWT 并设置合理的过期时间
4. **防暴力破解**: 实现登录尝试次数限制
5. **验证码**: 在必要时添加图形或短信验证码

### 用户体验优化

1. **响应式设计**: 确保在各种设备上都有良好体验
2. **加载状态**: 提供清晰的加载反馈
3. **错误处理**: 友好的错误提示信息
4. **自动填充**: 支持浏览器密码管理器
5. **键盘导航**: 支持 Tab 键和 Enter 键操作

### 可访问性

1. **ARIA 标签**: 为屏幕阅读器提供语义信息
2. **焦点管理**: 合理的焦点顺序和高亮显示
3. **颜色对比**: 确保足够的颜色对比度
4. **键盘支持**: 完整的键盘操作支持

## 故障排除

### 常见问题

1. **样式不显示**

   - 检查是否正确导入样式文件
   - 确认 CSS 变量定义

2. **表单验证不工作**

   - 检查验证规则配置
   - 确认表单数据绑定

3. **第三方登录失败**

   - 检查 OAuth 配置
   - 确认回调地址设置

4. **主题切换无效**
   - 检查主题变量定义
   - 确认事件监听器

### 调试技巧

```typescript
// 开启调试模式
const loginConfig = {
  debug: true,
  // 其他配置...
}

// 监听所有事件
<BackgroundLogin
  @submit="console.log('submit:', $event)"
  @register="console.log('register clicked')"
  @theme-change="console.log('theme changed:', $event)"
/>
```

## 版本兼容性

| 版本 | Vue  | React | Svelte | 说明     |
| ---- | ---- | ----- | ------ | -------- |
| 2.x  | 3.0+ | 18.0+ | 4.0+   | 当前版本 |
| 1.x  | 2.6+ | 16.8+ | 3.0+   | 旧版本   |

## 更多资源

- [在线演示](https://web-boot-login-demo.com)
- [GitHub 仓库](https://github.com/your-username/mqy-background-login)
- [设计规范](https://design.web-boot.com/login)
- [API 文档](https://api-docs.web-boot.com)
