# 配置管理 API

## 概述

配置管理 API 提供了应用配置的获取、设置和管理功能，支持多环境配置和动态配置更新。

## 基础用法

### 获取配置

```typescript
import { ConfigManager } from '@web-boot/api-client'

const configManager = new ConfigManager()

// 获取所有配置
const config = await configManager.getAll()

// 获取特定配置项
const apiUrl = await configManager.get('api.baseUrl')

// 获取嵌套配置
const dbConfig = await configManager.get('database.connection')
```

### 设置配置

```typescript
// 设置单个配置项
await configManager.set('api.timeout', 5000)

// 设置嵌套配置
await configManager.set('database.connection.host', 'localhost')

// 批量设置配置
await configManager.setMultiple({
	'api.baseUrl': 'https://api.example.com',
	'api.timeout': 10000,
	'database.connection.port': 5432,
})
```

## API 参考

### ConfigManager

配置管理器类，提供配置的增删改查功能。

#### 构造函数

```typescript
new ConfigManager(options?: ConfigManagerOptions)
```

**参数:**

- `options` (可选): 配置管理器选项
  - `baseURL`: API 基础地址
  - `timeout`: 请求超时时间
  - `cache`: 缓存配置

#### 方法

##### getAll()

获取所有配置项。

```typescript
getAll(): Promise<Config>
```

**返回值:** 包含所有配置项的对象

##### get(key)

获取指定配置项的值。

```typescript
get(key: string): Promise<any>
```

**参数:**

- `key`: 配置项键名，支持点号分隔的嵌套路径

**返回值:** 配置项的值

##### set(key, value)

设置配置项的值。

```typescript
set(key: string, value: any): Promise<void>
```

**参数:**

- `key`: 配置项键名
- `value`: 配置项的值

##### setMultiple(config)

批量设置多个配置项。

```typescript
setMultiple(config: Record<string, any>): Promise<void>
```

**参数:**

- `config`: 配置项键值对对象

##### delete(key)

删除配置项。

```typescript
delete(key: string): Promise<void>
```

**参数:**

- `key`: 要删除的配置项键名

##### has(key)

检查配置项是否存在。

```typescript
has(key: string): Promise<boolean>
```

**参数:**

- `key`: 配置项键名

**返回值:** 是否存在该配置项

##### watch(key, callback)

监听配置项变化。

```typescript
watch(key: string, callback: (newValue: any, oldValue: any) => void): () => void
```

**参数:**

- `key`: 要监听的配置项键名
- `callback`: 变化回调函数

**返回值:** 取消监听的函数

## 配置类型

### 基础配置

```typescript
interface BaseConfig {
	// API 配置
	api: {
		baseUrl: string
		timeout: number
		retries: number
		headers: Record<string, string>
	}

	// 数据库配置
	database: {
		connection: {
			host: string
			port: number
			username: string
			password: string
			database: string
		}
		pool: {
			min: number
			max: number
			idleTimeout: number
		}
	}

	// 缓存配置
	cache: {
		type: 'memory' | 'redis' | 'localStorage'
		ttl: number
		maxSize: number
	}

	// 日志配置
	logging: {
		level: 'debug' | 'info' | 'warn' | 'error'
		format: 'json' | 'text'
		output: 'console' | 'file' | 'remote'
	}
}
```

### 环境配置

```typescript
interface EnvironmentConfig {
	development: Partial<BaseConfig>
	production: Partial<BaseConfig>
	test: Partial<BaseConfig>
}
```

## 使用示例

### 初始化配置

```typescript
import { ConfigManager } from '@web-boot/api-client'

const configManager = new ConfigManager({
	baseURL: 'https://api.example.com',
	timeout: 5000,
})

// 加载默认配置
await configManager.setMultiple({
	'api.baseUrl': 'https://api.example.com',
	'api.timeout': 10000,
	'database.connection.host': 'localhost',
	'database.connection.port': 5432,
	'cache.type': 'memory',
	'cache.ttl': 300000,
	'logging.level': 'info',
})
```

### 环境特定配置

```typescript
// 根据环境加载配置
const environment = process.env.NODE_ENV || 'development'

if (environment === 'production') {
	await configManager.setMultiple({
		'api.baseUrl': 'https://api.production.com',
		'database.connection.host': 'prod-db.example.com',
		'logging.level': 'warn',
	})
} else if (environment === 'test') {
	await configManager.setMultiple({
		'api.baseUrl': 'https://api.test.com',
		'database.connection.database': 'test_db',
		'logging.level': 'debug',
	})
}
```

### 配置监听

```typescript
// 监听 API 配置变化
const unsubscribe = configManager.watch('api.baseUrl', (newValue, oldValue) => {
	console.log(`API 地址从 ${oldValue} 变更为 ${newValue}`)

	// 重新初始化 API 客户端
	apiClient.setBaseURL(newValue)
})

// 取消监听
unsubscribe()
```

### 配置验证

```typescript
// 验证配置完整性
const validateConfig = async () => {
	const requiredKeys = ['api.baseUrl', 'api.timeout', 'database.connection.host', 'database.connection.port']

	for (const key of requiredKeys) {
		if (!(await configManager.has(key))) {
			throw new Error(`缺少必需的配置项: ${key}`)
		}
	}

	// 验证配置值
	const timeout = await configManager.get('api.timeout')
	if (typeof timeout !== 'number' || timeout <= 0) {
		throw new Error('API 超时时间必须是正数')
	}
}

await validateConfig()
```

## 最佳实践

### 1. 配置分层

```typescript
// 推荐：按功能模块组织配置
const config = {
	api: {
		baseUrl: 'https://api.example.com',
		timeout: 10000,
		retries: 3,
	},
	database: {
		connection: {
			host: 'localhost',
			port: 5432,
		},
		pool: {
			min: 5,
			max: 20,
		},
	},
	cache: {
		type: 'memory',
		ttl: 300000,
	},
}
```

### 2. 环境变量集成

```typescript
// 从环境变量加载配置
const loadFromEnv = async () => {
	await configManager.setMultiple({
		'api.baseUrl': process.env.API_BASE_URL || 'http://localhost:3000',
		'database.connection.host': process.env.DB_HOST || 'localhost',
		'database.connection.port': parseInt(process.env.DB_PORT) || 5432,
		'database.connection.username': process.env.DB_USERNAME || 'postgres',
		'database.connection.password': process.env.DB_PASSWORD || '',
		'database.connection.database': process.env.DB_NAME || 'web_boot',
	})
}

await loadFromEnv()
```

### 3. 配置热更新

```typescript
// 支持配置热更新
const setupHotReload = () => {
	// 监听配置文件变化
	if (process.env.NODE_ENV === 'development') {
		const fs = require('fs')
		const configPath = './config.json'

		fs.watch(configPath, async (eventType) => {
			if (eventType === 'change') {
				try {
					const newConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'))
					await configManager.setMultiple(newConfig)
					console.log('配置已热更新')
				} catch (error) {
					console.error('配置热更新失败:', error)
				}
			}
		})
	}
}

setupHotReload()
```

## 错误处理

### 配置错误

```typescript
try {
	const config = await configManager.get('nonexistent.key')
} catch (error) {
	if (error.code === 'CONFIG_NOT_FOUND') {
		console.warn('配置项不存在，使用默认值')
		// 使用默认值
	} else {
		console.error('获取配置失败:', error)
	}
}
```

### 配置验证错误

```typescript
const validateApiConfig = async () => {
	try {
		const baseUrl = await configManager.get('api.baseUrl')
		const timeout = await configManager.get('api.timeout')

		if (!baseUrl || typeof baseUrl !== 'string') {
			throw new Error('API 基础地址配置无效')
		}

		if (!timeout || typeof timeout !== 'number' || timeout <= 0) {
			throw new Error('API 超时时间配置无效')
		}
	} catch (error) {
		console.error('API 配置验证失败:', error.message)
		throw error
	}
}
```

## 性能优化

### 配置缓存

```typescript
// 启用配置缓存
const configManager = new ConfigManager({
	cache: {
		enabled: true,
		ttl: 5 * 60 * 1000, // 5分钟
		maxSize: 100,
	},
})
```

### 批量操作

```typescript
// 批量获取配置
const [apiConfig, dbConfig, cacheConfig] = await Promise.all([
	configManager.get('api'),
	configManager.get('database'),
	configManager.get('cache'),
])
```

## 更新日志

### v1.0.0

- 初始版本发布
- 支持配置的增删改查
- 支持配置监听和热更新
- 提供配置验证功能
