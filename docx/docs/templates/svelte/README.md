# Svelte 模板

基于 Svelte 4 + Vite + TypeScript 的轻量级后台管理系统模板。

## 技术栈

- **前端框架**: Svelte 4+
- **构建工具**: Vite 6.0+
- **开发语言**: TypeScript 5.0+
- **状态管理**: Writable Stores
- **路由管理**: page.js
- **UI 组件库**: 自定义组件
- **样式方案**: SCSS + UnoCSS
- **HTTP 客户端**: Axios
- **代码规范**: ESLint + Prettier + Stylelint

## 项目结构

```
templates/svelte/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口
│   ├── assets/            # 资源文件
│   ├── components/        # 公共组件
│   ├── config/            # 配置文件
│   ├── layouts/           # 布局组件
│   ├── lib/               # Svelte 组件库
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

使用 page.js 提供客户端路由功能：

```typescript
// routers/index.ts
import router from 'page'
import { routes } from './modules'

// 注册路由
routes.forEach((route) => {
	router(route.path, route.handler)
})

// 启动路由
router.start()

export default router
```

### 状态管理

使用 Svelte 原生的 Writable Stores：

```typescript
// stores/modules/setting.ts
import { writable } from 'svelte/store'
import { browser } from '$app/environment'

interface SettingState {
	theme: 'light' | 'dark'
	collapsed: boolean
}

const createSettingStore = () => {
	const defaultState: SettingState = {
		theme: 'light',
		collapsed: false,
	}

	const { subscribe, set, update } = writable(defaultState)

	return {
		subscribe,
		toggleTheme: () =>
			update((state) => ({
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light',
			})),
		toggleCollapsed: () =>
			update((state) => ({
				...state,
				collapsed: !state.collapsed,
			})),
		reset: () => set(defaultState),
	}
}

export const settingStore = createSettingStore()
```

### 布局组件

集成 `mqy-background-layout` 组件：

```svelte
<!-- layouts/index.svelte -->
<script lang="ts">
  import { BackgroundLayout } from 'mqy-background-layout'
  import { settingStore } from '@/stores'

  let layoutConfig = {
    theme: 'light',
    layout: 'default',
    collapsed: false
  }

  // 响应式更新配置
  $: layoutConfig = {
    theme: $settingStore.theme,
    layout: 'default',
    collapsed: $settingStore.collapsed
  }

  const handleThemeChange = (event: CustomEvent) => {
    const newTheme = event.detail
    if (newTheme !== $settingStore.theme) {
      settingStore.toggleTheme()
    }
  }
</script>

<BackgroundLayout
  config={layoutConfig}
  on:updateTheme={handleThemeChange}
>
  <slot />
</BackgroundLayout>
```

## 开发指南

### 添加新页面

1. **创建页面组件**：

```svelte
<!-- src/pages/Example/index.svelte -->
<script lang="ts">
  import { onMount } from 'svelte'

  let data = []
  let loading = false

  onMount(async () => {
    loading = true
    try {
      // 获取数据逻辑
      data = await fetchData()
    } finally {
      loading = false
    }
  })

  const handleClick = () => {
    console.log('按钮被点击')
  }
</script>

<div class="example-page">
  <h1>示例页面</h1>
  {#if loading}
    <p>加载中...</p>
  {:else}
    <ul>
      {#each data as item (item.id)}
        <li>{item.name}</li>
      {/each}
    </ul>
  {/if}
  <button on:click={handleClick}>点击按钮</button>
</div>

<style lang="scss">
.example-page {
  padding: 20px;

  h1 {
    color: var(--primary-color);
  }
}
</style>
```

2. **添加路由配置**：

```typescript
// routers/modules/example.ts
import type { RouteHandler } from '../types'

export const exampleRoutes = [
	{
		path: '/example',
		handler: async (ctx: any) => {
			const { default: ExamplePage } = await import('@/pages/Example/index.svelte')
			// 路由处理逻辑
		},
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
import { writable, derived } from 'svelte/store'

interface ExampleItem {
	id: string
	name: string
	status: 'active' | 'inactive'
}

interface ExampleState {
	items: ExampleItem[]
	loading: boolean
	error: string | null
}

const createExampleStore = () => {
	const defaultState: ExampleState = {
		items: [],
		loading: false,
		error: null,
	}

	const { subscribe, set, update } = writable(defaultState)

	return {
		subscribe,

		// Actions
		async fetchItems() {
			update((state) => ({ ...state, loading: true, error: null }))
			try {
				const items = await api.getItems()
				update((state) => ({ ...state, items, loading: false }))
			} catch (error) {
				update((state) => ({
					...state,
					loading: false,
					error: error.message,
				}))
			}
		},

		addItem(item: ExampleItem) {
			update((state) => ({
				...state,
				items: [...state.items, item],
			}))
		},

		removeItem(id: string) {
			update((state) => ({
				...state,
				items: state.items.filter((item) => item.id !== id),
			}))
		},

		reset: () => set(defaultState),
	}
}

export const exampleStore = createExampleStore()

// Derived stores
export const activeItems = derived(exampleStore, ($exampleStore) =>
	$exampleStore.items.filter((item) => item.status === 'active'),
)
```

### 组件通信

**父子组件通信**：

```svelte
<!-- Parent.svelte -->
<script lang="ts">
  import Child from './Child.svelte'

  let message = 'Hello from parent'

  const handleChildEvent = (event: CustomEvent) => {
    console.log('收到子组件事件:', event.detail)
  }
</script>

<Child
  {message}
  on:childEvent={handleChildEvent}
/>

<!-- Child.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let message: string

  const dispatch = createEventDispatcher()

  const sendEvent = () => {
    dispatch('childEvent', { data: 'from child' })
  }
</script>

<div>
  <p>{message}</p>
  <button on:click={sendEvent}>发送事件</button>
</div>
```

### API 请求

```typescript
// api/example.ts
import { request } from '@/config/request'

export const exampleApi = {
	// 获取列表
	async getList(params: any) {
		return request.get('/api/example/list', { params })
	},

	// 创建数据
	async create(data: any) {
		return request.post('/api/example', data)
	},

	// 更新数据
	async update(id: number, data: any) {
		return request.put(`/api/example/${id}`, data)
	},

	// 删除数据
	async delete(id: number) {
		return request.delete(`/api/example/${id}`)
	},
}
```

## Svelte 特性

### 响应式声明

```svelte
<script lang="ts">
  let count = 0
  let name = 'World'

  // 响应式声明
  $: doubled = count * 2
  $: greeting = `Hello ${name}!`

  // 响应式语句
  $: if (count >= 10) {
    alert('count is getting big!')
  }

  // 响应式块
  $: {
    console.log(`count is ${count}`)
    console.log(`doubled is ${doubled}`)
  }
</script>

<p>{greeting}</p>
<p>Count: {count}, Doubled: {doubled}</p>
<button on:click={() => count += 1}>
  Increment
</button>
```

### 条件渲染与循环

```svelte
<script lang="ts">
  let items = [
    { id: 1, name: 'Apple', category: 'fruit' },
    { id: 2, name: 'Carrot', category: 'vegetable' },
  ]

  let showItems = true
</script>

{#if showItems}
  <ul>
    {#each items as item (item.id)}
      <li class:fruit={item.category === 'fruit'}>
        {item.name}
      </li>
    {:else}
      <li>No items found</li>
    {/each}
  </ul>
{:else}
  <p>Items are hidden</p>
{/if}

<style>
  .fruit {
    color: red;
  }
</style>
```

### 组件插槽

```svelte
<!-- Card.svelte -->
<div class="card">
  <header>
    <slot name="header">Default header</slot>
  </header>

  <main>
    <slot>Default content</slot>
  </main>

  <footer>
    <slot name="footer" {footerData}>
      Default footer
    </slot>
  </footer>
</div>

<!-- 使用组件 -->
<Card>
  <h1 slot="header">Custom Header</h1>

  <p>This is the main content</p>

  <div slot="footer" let:footerData>
    Custom footer with data: {footerData}
  </div>
</Card>
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
pnpm check
```

## 性能优化

### 组件懒加载

```typescript
// 动态导入组件
const LazyComponent = lazy(() => import('./LazyComponent.svelte'))
```

### 代码分割

```typescript
// 路由级别的代码分割
router('/lazy', async () => {
	const { default: LazyPage } = await import('@/pages/LazyPage/index.svelte')
	// 渲染组件
})
```

## 配置说明

### 环境变量

```bash
# .env.development
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=Web Boot Svelte

# .env.production
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=Web Boot Svelte
```

### Vite 配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
```

## 常见问题

### Q: 如何在 Svelte 中使用 TypeScript？

A: 项目已配置 TypeScript 支持，在 `<script lang="ts">` 中编写 TypeScript 代码。

### Q: 如何处理组件间通信？

A: 使用 props、events、stores 或 context API。

### Q: 如何优化包体积？

A: Svelte 编译时优化，天然具有更小的包体积，可进一步使用代码分割优化。

更多问题请查看项目 Issues 或提交新问题。
