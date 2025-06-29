# Vue 模板

基于 Vue 3 + Vite + TypeScript 的现代化后台管理系统模板。

## 技术栈

- **前端框架**: Vue 3.5+
- **构建工具**: Vite 6.0+
- **开发语言**: TypeScript 5.0+
- **状态管理**: Pinia
- **路由管理**: Vue Router 4.x
- **UI 组件库**: Element Plus
- **样式方案**: SCSS + UnoCSS
- **HTTP 客户端**: Axios
- **代码规范**: ESLint + Prettier + Stylelint

## 项目结构

```
templates/vue/
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
│   └── main.ts           # 应用入口
├── index.html
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
├── eslint.config.mjs     # ESLint 配置
└── package.json
```

## 核心功能

### 路由管理

使用 Vue Router 4.x 提供动态路由功能：

```typescript
// routers/index.tsx
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './modules'

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
```

### 状态管理

使用 Pinia 进行状态管理：

```typescript
// stores/modules/setting.ts
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
	state: () => ({
		theme: 'light',
		collapsed: false,
	}),

	actions: {
		toggleTheme() {
			this.theme = this.theme === 'light' ? 'dark' : 'light'
		},

		toggleCollapsed() {
			this.collapsed = !this.collapsed
		},
	},
})
```

### 布局组件

集成 `mqy-background-layout` 组件：

```vue
<!-- layouts/index.vue -->
<template>
	<mqy-background-layout :config="layoutConfig" @update:theme="handleThemeChange">
		<router-view />
	</mqy-background-layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const layoutConfig = ref({
		theme: 'light',
		layout: 'default',
		// 更多配置...
	})

	const handleThemeChange = (theme: string) => {
		layoutConfig.value.theme = theme
	}
</script>
```

## 开发指南

### 添加新页面

1. **创建页面组件**：

```vue
<!-- src/pages/Example/index.vue -->
<template>
	<div class="example-page">
		<h1>示例页面</h1>
	</div>
</template>

<script setup lang="ts">
	// 页面逻辑
</script>

<style lang="scss" scoped>
	.example-page {
		padding: 20px;
	}
</style>
```

2. **添加路由配置**：

```typescript
// routers/modules/example.ts
import type { RouteRecordRaw } from 'vue-router'

export const exampleRoutes: RouteRecordRaw[] = [
	{
		path: '/example',
		name: 'Example',
		component: () => import('@/pages/Example/index.vue'),
		meta: {
			title: '示例页面',
			requiresAuth: true,
		},
	},
]
```

### 状态管理

创建新的 store：

```typescript
// stores/modules/example.ts
import { defineStore } from 'pinia'

interface ExampleState {
	data: any[]
	loading: boolean
}

export const useExampleStore = defineStore('example', {
	state: (): ExampleState => ({
		data: [],
		loading: false,
	}),

	getters: {
		hasData: (state) => state.data.length > 0,
	},

	actions: {
		async fetchData() {
			this.loading = true
			try {
				// 获取数据逻辑
				this.data = await api.getData()
			} finally {
				this.loading = false
			}
		},
	},
})
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

## 配置说明

### Vite 配置

项目使用自定义的 Vite 配置，支持：

- 自动导入 Vue API
- 组件自动注册
- 路径别名配置
- 环境变量配置
- 构建优化

### 环境变量

```bash
# .env.development
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=Web Boot Vue

# .env.production
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=Web Boot Vue
```

## 常见问题

### Q: 如何修改默认主题？

A: 在 `src/config/config.ts` 中修改 `theme` 配置项。

### Q: 如何添加新的 UI 组件？

A: 可以直接使用 Element Plus 组件，或在 `src/components/` 目录下创建自定义组件。

### Q: 如何配置代理？

A: 在 `vite.config.ts` 中配置 `server.proxy` 选项。

更多问题请查看项目 Issues 或提交新问题。
