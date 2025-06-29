# 配置说明

Web Boot 提供了灵活的配置系统，让您能够根据项目需求自定义各种功能和行为。

## 配置文件结构

### 主配置文件

```typescript
// config/config.ts
export const config = {
	// 应用基础配置
	app: {
		title: 'Web Boot',
		description: '一键式任何前端语言开发后端管理系统',
		version: '2.0.0',
		author: 'Web Boot Team',
	},

	// API 配置
	api: {
		baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
		timeout: 10000,
		withCredentials: true,
	},

	// 路由配置
	router: {
		mode: 'history',
		base: '/',
		loginPath: '/login',
		homePath: '/',
		errorPath: '/error',
	},

	// 布局配置
	layout: {
		theme: 'light',
		layout: 'default',
		sidebar: {
			collapsed: false,
			width: 240,
			collapsedWidth: 64,
		},
		header: {
			height: 64,
			fixed: true,
		},
		tabs: {
			enabled: true,
			persistent: true,
		},
	},

	// 其他配置...
}
```

### 环境变量配置

```bash
# .env.development
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=Web Boot Dev
VITE_APP_DEBUG=true

# .env.production
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=Web Boot
VITE_APP_DEBUG=false

# .env.test
VITE_API_BASE_URL=http://test-api.example.com
VITE_APP_TITLE=Web Boot Test
VITE_APP_DEBUG=true
```

## 详细配置选项

### 应用配置 (App Config)

```typescript
interface AppConfig {
	// 基础信息
	title: string // 应用标题
	description: string // 应用描述
	version: string // 版本号
	author: string // 作者信息

	// 多语言配置
	locale: {
		default: string // 默认语言
		fallback: string // 回退语言
		supported: string[] // 支持的语言列表
	}

	// 调试配置
	debug: boolean // 是否开启调试模式
	mock: boolean // 是否启用 Mock 数据

	// 权限配置
	auth: {
		tokenKey: string // Token 存储键名
		refreshTokenKey: string // 刷新令牌键名
		tokenExpireTime: number // Token 过期时间(秒)
		autoRefresh: boolean // 是否自动刷新
	}
}
```

### API 配置 (API Config)

```typescript
interface ApiConfig {
	// 基础配置
	baseURL: string // API 基础地址
	timeout: number // 请求超时时间
	withCredentials: boolean // 是否携带凭证

	// 请求拦截器配置
	interceptors: {
		request: {
			addToken: boolean // 是否自动添加 Token
			addTimestamp: boolean // 是否添加时间戳
			transformData: boolean // 是否转换请求数据
		}

		response: {
			showError: boolean // 是否显示错误信息
			errorHandler: Function // 自定义错误处理函数
			codeHandler: {
				// 状态码处理
				[key: number]: Function
			}
		}
	}

	// 重试配置
	retry: {
		times: number // 重试次数
		delay: number // 重试延迟(毫秒)
		codes: number[] // 需要重试的状态码
	}
}
```

### 路由配置 (Router Config)

```typescript
interface RouterConfig {
	// 基础配置
	mode: 'hash' | 'history' // 路由模式
	base: string // 基础路径

	// 特殊路径
	loginPath: string // 登录页路径
	homePath: string // 首页路径
	errorPath: string // 错误页路径

	// 路由守卫配置
	guards: {
		beforeEach: boolean // 是否启用全局前置守卫
		afterEach: boolean // 是否启用全局后置守卫
		checkAuth: boolean // 是否检查用户认证
		checkPermission: boolean // 是否检查权限
	}

	// 缓存配置
	cache: {
		enabled: boolean // 是否启用路由缓存
		max: number // 最大缓存数量
		include: string[] // 需要缓存的路由
		exclude: string[] // 不需要缓存的路由
	}
}
```

### 布局配置 (Layout Config)

```typescript
interface LayoutConfig {
	// 主题配置
	theme: 'light' | 'dark' | 'auto' // 主题模式
	primaryColor: string // 主色调

	// 布局模式
	layout: 'default' | 'vertical' | 'horizontal'

	// 侧边栏配置
	sidebar: {
		collapsed: boolean // 是否折叠
		width: number // 展开宽度
		collapsedWidth: number // 折叠宽度
		position: 'left' | 'right' // 位置
		fixed: boolean // 是否固定
		accordion: boolean // 是否手风琴模式
	}

	// 头部配置
	header: {
		height: number // 高度
		fixed: boolean // 是否固定
		showLogo: boolean // 是否显示 Logo
		showBreadcrumb: boolean // 是否显示面包屑
		showUserInfo: boolean // 是否显示用户信息
		showFullscreen: boolean // 是否显示全屏按钮
		showThemeToggle: boolean // 是否显示主题切换
	}

	// 标签页配置
	tabs: {
		enabled: boolean // 是否启用
		persistent: boolean // 是否持久化
		closable: boolean // 是否可关闭
		maxCount: number // 最大数量
		showIcon: boolean // 是否显示图标
		showRefresh: boolean // 是否显示刷新按钮
	}

	// 底部配置
	footer: {
		enabled: boolean // 是否显示
		height: number // 高度
		fixed: boolean // 是否固定
		text: string // 显示文本
	}

	// 水印配置
	watermark: {
		enabled: boolean // 是否启用
		text: string // 水印文本
		opacity: number // 透明度
		fontSize: number // 字体大小
		angle: number // 旋转角度
	}

	// 动画配置
	animation: {
		enabled: boolean // 是否启用动画
		duration: number // 动画持续时间
		easing: string // 缓动函数
		pageTransition: string // 页面切换动画
	}
}
```

## 配置使用方法

### 基础使用

```typescript
// 导入配置
import { config } from '@/config/config'

// 使用配置
const apiClient = axios.create({
	baseURL: config.api.baseURL,
	timeout: config.api.timeout,
})
```

### 动态配置

```typescript
// Vue 3 示例
import { reactive } from 'vue'
import { config } from '@/config/config'

// 创建响应式配置
const appConfig = reactive({ ...config })

// 修改配置
const updateTheme = (theme: string) => {
	appConfig.layout.theme = theme
}
```

### 环境特定配置

```typescript
// 根据环境加载不同配置
const getConfig = () => {
	const env = import.meta.env.MODE

	switch (env) {
		case 'development':
			return {
				...baseConfig,
				debug: true,
				mock: true,
			}

		case 'production':
			return {
				...baseConfig,
				debug: false,
				mock: false,
			}

		case 'test':
			return {
				...baseConfig,
				debug: true,
				mock: true,
				api: {
					...baseConfig.api,
					baseURL: 'http://test-api.example.com',
				},
			}

		default:
			return baseConfig
	}
}
```

### 配置验证

```typescript
// 配置验证 Schema
import Joi from 'joi'

const configSchema = Joi.object({
	app: Joi.object({
		title: Joi.string().required(),
		version: Joi.string().required(),
		debug: Joi.boolean().default(false),
	}).required(),

	api: Joi.object({
		baseURL: Joi.string().uri().required(),
		timeout: Joi.number().positive().default(10000),
	}).required(),

	layout: Joi.object({
		theme: Joi.string().valid('light', 'dark', 'auto').default('light'),
		sidebar: Joi.object({
			width: Joi.number().positive().default(240),
			collapsed: Joi.boolean().default(false),
		}),
	}),
})

// 验证配置
const validateConfig = (config: any) => {
	const { error, value } = configSchema.validate(config)

	if (error) {
		throw new Error(`配置验证失败: ${error.message}`)
	}

	return value
}
```

## 配置管理最佳实践

### 1. 分层配置

```typescript
// 基础配置
const baseConfig = {
	/* 基础配置 */
}

// 环境配置
const envConfig = {
	/* 环境特定配置 */
}

// 用户配置
const userConfig = {
	/* 用户个性化配置 */
}

// 合并配置
const finalConfig = {
	...baseConfig,
	...envConfig,
	...userConfig,
}
```

### 2. 配置持久化

```typescript
// 保存用户配置
const saveUserConfig = (config: UserConfig) => {
	localStorage.setItem('userConfig', JSON.stringify(config))
}

// 加载用户配置
const loadUserConfig = (): UserConfig => {
	const stored = localStorage.getItem('userConfig')
	return stored ? JSON.parse(stored) : {}
}
```

### 3. 配置热更新

```typescript
// 监听配置变更
const configWatcher = new Proxy(config, {
	set(target, key, value) {
		console.log(`配置 ${String(key)} 已更新:`, value)

		// 触发配置更新事件
		eventBus.emit('config:updated', { key, value })

		return Reflect.set(target, key, value)
	},
})
```

### 4. 配置类型安全

```typescript
// 定义配置类型
interface Config {
	app: AppConfig
	api: ApiConfig
	layout: LayoutConfig
	// ...
}

// 创建类型安全的配置
const createConfig = <T extends Config>(config: T): T => {
	return config
}

// 使用
const config = createConfig({
	app: {
		/* ... */
	},
	api: {
		/* ... */
	},
	layout: {
		/* ... */
	},
})
```

## 配置迁移

### 版本升级配置迁移

```typescript
// 配置迁移函数
const migrateConfig = (oldConfig: any, version: string) => {
	switch (version) {
		case '1.0.0':
			return migrateFrom1_0_0(oldConfig)
		case '1.5.0':
			return migrateFrom1_5_0(oldConfig)
		default:
			return oldConfig
	}
}

// 具体迁移逻辑
const migrateFrom1_0_0 = (config: any) => {
	return {
		...config,
		// 迁移逻辑
		layout: {
			...config.layout,
			theme: config.theme || 'light', // 迁移主题配置
		},
	}
}
```

## 常见配置示例

### 开发环境配置

```typescript
export const developmentConfig = {
	app: {
		debug: true,
		mock: true,
	},
	api: {
		baseURL: 'http://localhost:3000/api',
		timeout: 30000,
	},
	layout: {
		theme: 'light',
		animation: {
			enabled: true,
			duration: 300,
		},
	},
}
```

### 生产环境配置

```typescript
export const productionConfig = {
	app: {
		debug: false,
		mock: false,
	},
	api: {
		baseURL: 'https://api.example.com',
		timeout: 10000,
	},
	layout: {
		theme: 'light',
		animation: {
			enabled: true,
			duration: 200,
		},
	},
}
```

### 移动端配置

```typescript
export const mobileConfig = {
	layout: {
		sidebar: {
			width: 280,
			collapsed: true, // 移动端默认折叠
		},
		header: {
			height: 56, // 移动端较小高度
			showBreadcrumb: false, // 移动端隐藏面包屑
		},
		tabs: {
			enabled: false, // 移动端禁用标签页
		},
	},
}
```

通过灵活的配置系统，您可以轻松定制 Web Boot 以满足不同的项目需求。更多配置选项和高级用法，请参考各组件的详细文档。
