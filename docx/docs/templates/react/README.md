# React 模板

基于 React 18 + Vite + TypeScript 的现代化后台管理系统模板。

## 技术栈

- **前端框架**: React 18+
- **构建工具**: Vite 6.0+
- **开发语言**: TypeScript 5.0+
- **状态管理**: Zustand
- **路由管理**: React Router 6.x
- **UI 组件库**: Ant Design
- **样式方案**: SCSS + UnoCSS
- **HTTP 客户端**: Axios
- **代码规范**: ESLint + Prettier + Stylelint

## 项目结构

```
templates/react/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口
│   ├── assets/            # 资源文件
│   ├── components/        # 公共组件
│   ├── config/            # 配置文件
│   ├── layouts/           # 布局组件
│   ├── pages/             # 页面组件
│   ├── routers/           # 路由配置
│   ├── stores/            # 状态管理
│   ├── styles/            # 样式文件
│   ├── types/             # TypeScript 类型
│   └── main.tsx          # 应用入口
├── index.html
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
├── eslint.config.mjs     # ESLint 配置
└── package.json
```

## 核心功能

### 路由管理

使用 React Router 6.x 提供动态路由功能：

```typescript
// routers/index.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './modules'

const router = createBrowserRouter(routes)

export default function AppRouter() {
  return <RouterProvider router={router} />
}
```

### 状态管理

使用 Zustand 进行状态管理：

```typescript
// stores/modules/setting.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingState {
	theme: 'light' | 'dark'
	collapsed: boolean
	toggleTheme: () => void
	toggleCollapsed: () => void
}

export const useSettingStore = create<SettingState>()(
	persist(
		(set) => ({
			theme: 'light',
			collapsed: false,

			toggleTheme: () =>
				set((state) => ({
					theme: state.theme === 'light' ? 'dark' : 'light',
				})),

			toggleCollapsed: () =>
				set((state) => ({
					collapsed: !state.collapsed,
				})),
		}),
		{
			name: 'setting-storage',
		},
	),
)
```

### 布局组件

集成 `mqy-background-layout` 组件：

```tsx
// layouts/index.tsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import { BackgroundLayout } from 'mqy-background-layout'
import { useSettingStore } from '@/stores'

const Layout: React.FC = () => {
	const { theme, collapsed, toggleTheme } = useSettingStore()

	const layoutConfig = {
		theme,
		layout: 'default',
		collapsed,
		// 更多配置...
	}

	const handleThemeChange = (newTheme: string) => {
		if (newTheme !== theme) {
			toggleTheme()
		}
	}

	return (
		<BackgroundLayout config={layoutConfig} onUpdateTheme={handleThemeChange}>
			<Outlet />
		</BackgroundLayout>
	)
}

export default Layout
```

## 开发指南

### 添加新页面

1. **创建页面组件**：

```tsx
// src/pages/Example/index.tsx
import React from 'react'
import { Card, Button } from 'antd'

const ExamplePage: React.FC = () => {
	return (
		<div className="example-page">
			<Card title="示例页面">
				<p>这是一个示例页面</p>
				<Button type="primary">点击按钮</Button>
			</Card>
		</div>
	)
}

export default ExamplePage
```

2. **添加路由配置**：

```typescript
// routers/modules/example.ts
import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const ExamplePage = lazy(() => import('@/pages/Example'))

export const exampleRoutes: RouteObject[] = [
  {
    path: '/example',
    element: <ExamplePage />,
    handle: {
      title: '示例页面',
      requiresAuth: true
    }
  }
]
```

### 状态管理

创建新的 store：

```typescript
// stores/modules/example.ts
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ExampleState {
	data: any[]
	loading: boolean
	fetchData: () => Promise<void>
	addData: (item: any) => void
	removeData: (id: string) => void
}

export const useExampleStore = create<ExampleState>()(
	devtools(
		(set, get) => ({
			data: [],
			loading: false,

			fetchData: async () => {
				set({ loading: true })
				try {
					// 获取数据逻辑
					const response = await api.getData()
					set({ data: response.data })
				} finally {
					set({ loading: false })
				}
			},

			addData: (item) =>
				set((state) => ({
					data: [...state.data, item],
				})),

			removeData: (id) =>
				set((state) => ({
					data: state.data.filter((item) => item.id !== id),
				})),
		}),
		{
			name: 'example-store',
		},
	),
)
```

### 自定义 Hook

```typescript
// hooks/useExample.ts
import { useEffect } from 'react'
import { useExampleStore } from '@/stores'

export const useExample = () => {
	const { data, loading, fetchData, addData, removeData } = useExampleStore()

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return {
		data,
		loading,
		addData,
		removeData,
		refresh: fetchData,
	}
}
```

### API 请求

```typescript
// api/example.ts
import { request } from '@/config/request'

export const exampleApi = {
	// 获取列表
	getList: (params: any) => request.get('/api/example/list', { params }),

	// 创建数据
	create: (data: any) => request.post('/api/example', data),

	// 更新数据
	update: (id: number, data: any) => request.put(`/api/example/${id}`, data),

	// 删除数据
	delete: (id: number) => request.delete(`/api/example/${id}`),
}
```

## 构建部署

### 开发环境

```bash
# 启动开发服务器
pnpm dev

# 启动并开启主机访问
pnpm dev --host
```

### 生产构建

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

### 代码规范

```bash
# 检查代码规范
pnpm lint

# 自动修复规范问题
pnpm lint:fix

# 检查样式规范
pnpm stylelint

# 类型检查
pnpm type-check
```

## React 特性

### 函数组件与 Hooks

项目全面使用函数组件和 React Hooks：

```tsx
import React, { useState, useEffect, useCallback } from 'react'

const ExampleComponent: React.FC = () => {
	const [count, setCount] = useState(0)

	const increment = useCallback(() => {
		setCount((prev) => prev + 1)
	}, [])

	useEffect(() => {
		document.title = `Count: ${count}`
	}, [count])

	return (
		<div>
			<p>当前计数: {count}</p>
			<button onClick={increment}>增加</button>
		</div>
	)
}
```

### Context 使用

```tsx
// contexts/ThemeContext.tsx
import React, { createContext, useContext } from 'react'

interface ThemeContextType {
	theme: string
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider')
	}
	return context
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	// Provider 实现
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
```

### 错误边界

```tsx
// components/ErrorBoundary.tsx
import React from 'react'

interface ErrorBoundaryState {
	hasError: boolean
	error?: Error
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
	constructor(props: React.PropsWithChildren<{}>) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <div>出现错误，请刷新页面重试</div>
		}

		return this.props.children
	}
}
```

## 配置说明

### 环境变量

```bash
# .env.development
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=Web Boot React

# .env.production
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=Web Boot React
```

### Ant Design 配置

```tsx
// main.tsx
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<App />
	</ConfigProvider>,
	document.getElementById('root'),
)
```

## 常见问题

### Q: 如何配置主题？

A: 可以通过 Ant Design 的 ConfigProvider 或在 SCSS 中自定义主题变量。

### Q: 如何处理路由权限？

A: 使用路由守卫组件，在路由配置中添加权限验证逻辑。

### Q: 如何优化包体积？

A: 使用动态导入、Tree Shaking、代码分割等技术优化构建产物。

更多问题请查看项目 Issues 或提交新问题。
