# BackgroundLayout 组件

## 概述

BackgroundLayout 是一个完整的后台管理系统布局组件，基于 Vue 3 + Element Plus 开发，使用 Web Components 技术实现跨框架使用。

## 特性

- 🎨 **完整的后台布局** - 包含侧边栏、顶部导航、主内容区等完整布局
- 🔧 **高度可配置** - 支持多种布局模式和主题配置
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎯 **跨框架支持** - 基于 Web Components，支持 Vue、React、Svelte 等框架
- 🎨 **主题定制** - 支持明暗主题切换和自定义主题
- 🔍 **搜索功能** - 内置全局搜索和菜单搜索
- 📋 **标签页管理** - 支持多标签页切换和管理
- 🎛️ **设置面板** - 内置布局设置和主题配置面板

## 安装

```bash
# 安装组件库
pnpm add @web-boot/private-components
```

## 基础用法

### Vue 项目中使用

```vue
<template>
	<background-layout>
		<template #header>
			<h1>我的应用</h1>
		</template>

		<template #content>
			<div class="main-content">
				<h2>主要内容</h2>
				<p>这里是应用的主要内容区域</p>
			</div>
		</template>
	</background-layout>
</template>

<script setup lang="ts">
	import 'background-layout'
</script>
```

### React 项目中使用

```tsx
import React from 'react'
import 'background-layout'

const App: React.FC = () => {
	return (
		<background-layout>
			<div slot="header">
				<h1>我的应用</h1>
			</div>

			<div slot="content">
				<div className="main-content">
					<h2>主要内容</h2>
					<p>这里是应用的主要内容区域</p>
				</div>
			</div>
		</background-layout>
	)
}

export default App
```

### Svelte 项目中使用

```svelte
<script lang="ts">
  import 'background-layout'
</script>

<background-layout>
  <div slot="header">
    <h1>我的应用</h1>
  </div>

  <div slot="content">
    <div class="main-content">
      <h2>主要内容</h2>
      <p>这里是应用的主要内容区域</p>
    </div>
  </div>
</background-layout>
```

## 属性配置

### 基础属性

| 属性名            | 类型      | 默认值      | 说明                            |
| ----------------- | --------- | ----------- | ------------------------------- |
| `layout`          | `string`  | `'default'` | 布局模式：`default`、`vertical` |
| `theme`           | `string`  | `'light'`   | 主题模式：`light`、`dark`       |
| `collapsed`       | `boolean` | `false`     | 侧边栏是否折叠                  |
| `fixed-header`    | `boolean` | `true`      | 是否固定顶部导航                |
| `fixed-sidebar`   | `boolean` | `true`      | 是否固定侧边栏                  |
| `show-breadcrumb` | `boolean` | `true`      | 是否显示面包屑                  |
| `show-tabs`       | `boolean` | `true`      | 是否显示标签页                  |

### 菜单配置

```typescript
interface MenuItem {
	id: string
	title: string
	icon?: string
	path?: string
	children?: MenuItem[]
	meta?: {
		title?: string
		icon?: string
		hidden?: boolean
		roles?: string[]
	}
}
```

### 示例配置

```vue
<template>
	<background-layout
		:menu-data="menuData"
		:layout="layout"
		:theme="theme"
		:collapsed="collapsed"
		@menu-click="handleMenuClick"
		@layout-change="handleLayoutChange"
	>
		<!-- 内容插槽 -->
	</background-layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const layout = ref('default')
	const theme = ref('light')
	const collapsed = ref(false)

	const menuData = ref([
		{
			id: 'dashboard',
			title: '仪表盘',
			icon: 'dashboard',
			path: '/dashboard',
		},
		{
			id: 'system',
			title: '系统管理',
			icon: 'setting',
			children: [
				{
					id: 'users',
					title: '用户管理',
					path: '/system/users',
				},
				{
					id: 'roles',
					title: '角色管理',
					path: '/system/roles',
				},
			],
		},
	])

	const handleMenuClick = (item: any) => {
		console.log('菜单点击:', item)
	}

	const handleLayoutChange = (newLayout: string) => {
		layout.value = newLayout
	}
</script>
```

## 插槽

### 默认插槽

- `header` - 顶部导航区域
- `sidebar` - 侧边栏区域
- `content` - 主内容区域
- `footer` - 页脚区域

### 示例

```vue
<template>
	<background-layout>
		<!-- 顶部导航 -->
		<template #header>
			<div class="header-content">
				<h1>Web Boot 管理系统</h1>
				<div class="header-actions">
					<el-button>通知</el-button>
					<el-dropdown>
						<el-avatar src="/avatar.jpg" />
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>个人中心</el-dropdown-item>
								<el-dropdown-item>退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</div>
		</template>

		<!-- 侧边栏 -->
		<template #sidebar>
			<div class="sidebar-content">
				<el-menu>
					<el-menu-item index="1">
						<el-icon><HomeFilled /></el-icon>
						<span>首页</span>
					</el-menu-item>
				</el-menu>
			</div>
		</template>

		<!-- 主内容 -->
		<template #content>
			<div class="main-content">
				<el-card>
					<template #header>
						<span>欢迎使用</span>
					</template>
					<div>这里是主要内容区域</div>
				</el-card>
			</div>
		</template>

		<!-- 页脚 -->
		<template #footer>
			<div class="footer-content">
				<p>© 2024 Web Boot. All rights reserved.</p>
			</div>
		</template>
	</background-layout>
</template>
```

## 事件

| 事件名           | 参数                   | 说明                   |
| ---------------- | ---------------------- | ---------------------- |
| `menu-click`     | `(item: MenuItem)`     | 菜单项点击事件         |
| `layout-change`  | `(layout: string)`     | 布局模式改变事件       |
| `theme-change`   | `(theme: string)`      | 主题切换事件           |
| `sidebar-toggle` | `(collapsed: boolean)` | 侧边栏折叠状态改变事件 |

## 方法

### 组件实例方法

```typescript
interface BackgroundLayoutInstance {
	// 切换侧边栏折叠状态
	toggleSidebar(): void

	// 切换主题
	toggleTheme(): void

	// 切换布局模式
	toggleLayout(): void

	// 打开设置面板
	openSettings(): void

	// 关闭设置面板
	closeSettings(): void
}
```

### 使用示例

```vue
<template>
	<background-layout ref="layoutRef">
		<!-- 内容 -->
	</background-layout>

	<el-button @click="toggleSidebar">切换侧边栏</el-button>
	<el-button @click="toggleTheme">切换主题</el-button>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const layoutRef = ref()

	const toggleSidebar = () => {
		layoutRef.value?.toggleSidebar()
	}

	const toggleTheme = () => {
		layoutRef.value?.toggleTheme()
	}
</script>
```

## 主题定制

### CSS 变量

组件使用 CSS 变量实现主题定制：

```css
:root {
	/* 主色调 */
	--primary-color: #409eff;
	--success-color: #67c23a;
	--warning-color: #e6a23c;
	--danger-color: #f56c6c;

	/* 布局颜色 */
	--header-bg: #ffffff;
	--sidebar-bg: #304156;
	--content-bg: #f0f2f5;

	/* 文字颜色 */
	--text-color: #303133;
	--text-color-secondary: #606266;

	/* 边框颜色 */
	--border-color: #dcdfe6;
	--border-color-light: #e4e7ed;
}

/* 暗色主题 */
[data-theme='dark'] {
	--header-bg: #1a1a1a;
	--sidebar-bg: #141414;
	--content-bg: #0a0a0a;
	--text-color: #ffffff;
	--border-color: #4c4c4c;
}
```

### 自定义主题

```vue
<template>
	<background-layout :theme-config="themeConfig" class="custom-theme">
		<!-- 内容 -->
	</background-layout>
</template>

<script setup lang="ts">
	const themeConfig = {
		primaryColor: '#1890ff',
		borderRadius: '6px',
		fontSize: '14px',
	}
</script>

<style>
	.custom-theme {
		--primary-color: #1890ff;
		--border-radius: 6px;
		--font-size: 14px;
	}
</style>
```

## 布局模式

### 默认布局 (default)

```vue
<background-layout layout="default">
  <!-- 内容 -->
</background-layout>
```

### 垂直布局 (vertical)

```vue
<background-layout layout="vertical">
  <!-- 内容 -->
</background-layout>
```

## 响应式设计

组件内置响应式设计，在不同屏幕尺寸下自动调整布局：

- **桌面端** (> 1200px): 完整布局，显示所有功能
- **平板端** (768px - 1200px): 自适应布局，部分功能折叠
- **移动端** (< 768px): 移动端优化，侧边栏自动隐藏

## 性能优化

### 懒加载

```vue
<template>
	<background-layout>
		<template #content>
			<Suspense>
				<template #default>
					<AsyncComponent />
				</template>
				<template #fallback>
					<el-skeleton :rows="3" />
				</template>
			</Suspense>
		</template>
	</background-layout>
</template>
```

### 虚拟滚动

对于大量数据的列表，建议使用虚拟滚动：

```vue
<template>
	<background-layout>
		<template #content>
			<el-table :data="tableData" height="400" virtual-scrolling>
				<!-- 表格列配置 -->
			</el-table>
		</template>
	</background-layout>
</template>
```

## 最佳实践

### 1. 菜单配置

```typescript
// 推荐：使用扁平化的菜单配置
const menuData = [
	{
		id: 'dashboard',
		title: '仪表盘',
		icon: 'dashboard',
		path: '/dashboard',
	},
	{
		id: 'system',
		title: '系统管理',
		icon: 'setting',
		children: [
			{
				id: 'users',
				title: '用户管理',
				path: '/system/users',
			},
		],
	},
]
```

### 2. 路由集成

```typescript
// 与 Vue Router 集成
import { useRouter } from 'vue-router'

const router = useRouter()

const handleMenuClick = (item: MenuItem) => {
	if (item.path) {
		router.push(item.path)
	}
}
```

### 3. 状态管理

```typescript
// 与 Pinia 集成
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()

const handleLayoutChange = (layout: string) => {
	layoutStore.setLayout(layout)
}
```

## 常见问题

### 1. 组件不显示

**问题**: 组件注册后不显示内容

**解决方案**:

```vue
<template>
	<background-layout>
		<template #content>
			<div>确保有内容</div>
		</template>
	</background-layout>
</template>

<script setup lang="ts">
	// 确保正确导入
	import 'background-layout'
</script>
```

### 2. 样式不生效

**问题**: 自定义样式不生效

**解决方案**:

```vue
<style scoped>
	/* 使用深度选择器 */
	:deep(.background-layout) {
		--primary-color: #1890ff;
	}
</style>
```

### 3. 事件不触发

**问题**: 菜单点击事件不触发

**解决方案**:

```vue
<template>
	<background-layout @menu-click="handleMenuClick">
		<!-- 内容 -->
	</background-layout>
</template>

<script setup lang="ts">
	const handleMenuClick = (item: any) => {
		console.log('菜单点击:', item)
	}
</script>
```

## 更新日志

### v1.0.0

- 初始版本发布
- 支持基础布局功能
- 集成 Element Plus 组件库
- 支持主题切换和布局模式切换
