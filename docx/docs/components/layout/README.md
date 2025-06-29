# 布局组件 (BackgroundLayout)

`BackgroundLayout` 是 Web Boot 的核心布局组件，提供完整的后台管理系统布局功能。

## 特性

- 🎨 **多主题支持**: 内置明暗主题，支持自定义主题
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🔧 **高度可配置**: 丰富的配置选项，满足不同需求
- 🚀 **性能优化**: 虚拟滚动、懒加载等性能优化
- 🌍 **国际化**: 支持多语言切换
- ♿ **可访问性**: 符合 WCAG 无障碍标准

## 安装

```bash
npm install mqy-background-layout
# 或
pnpm add mqy-background-layout
```

## 基础使用

### Vue 3

```vue
<template>
	<BackgroundLayout :config="layoutConfig">
		<router-view />
	</BackgroundLayout>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { BackgroundLayout } from 'mqy-background-layout'

	const layoutConfig = ref({
		theme: 'light',
		layout: 'default',
		sidebar: {
			collapsed: false,
		},
	})
</script>
```

### React

```tsx
import React, { useState } from 'react'
import { BackgroundLayout } from 'mqy-background-layout'

const App: React.FC = () => {
	const [layoutConfig] = useState({
		theme: 'light',
		layout: 'default',
		sidebar: {
			collapsed: false,
		},
	})

	return <BackgroundLayout config={layoutConfig}>{/* 您的应用内容 */}</BackgroundLayout>
}
```

### Svelte

```svelte
<script lang="ts">
  import { BackgroundLayout } from 'mqy-background-layout'

  let layoutConfig = {
    theme: 'light',
    layout: 'default',
    sidebar: {
      collapsed: false
    }
  }
</script>

<BackgroundLayout config={layoutConfig}>
  <!-- 您的应用内容 -->
  <slot />
</BackgroundLayout>
```

## 配置选项

### 完整配置接口

```typescript
interface LayoutConfig {
	// 主题配置
	theme: 'light' | 'dark' | 'auto'

	// 布局模式
	layout: 'default' | 'vertical' | 'horizontal'

	// 侧边栏配置
	sidebar: {
		collapsed: boolean
		width: number
		collapsedWidth: number
		position: 'left' | 'right'
		fixed: boolean
	}

	// 头部配置
	header: {
		height: number
		fixed: boolean
		showBreadcrumb: boolean
		showUserInfo: boolean
	}

	// 标签页配置
	tabs: {
		enabled: boolean
		persistent: boolean
		closable: boolean
		maxCount: number
	}

	// 底部配置
	footer: {
		enabled: boolean
		height: number
		fixed: boolean
		text: string
	}

	// 菜单配置
	menu: {
		data: MenuItem[]
		accordion: boolean
		openKeys: string[]
		selectedKeys: string[]
	}

	// 其他配置
	watermark: {
		enabled: boolean
		text: string
		opacity: number
	}

	animation: {
		enabled: boolean
		duration: number
	}
}
```

### 菜单数据结构

```typescript
interface MenuItem {
	key: string
	title: string
	icon?: string
	path?: string
	children?: MenuItem[]
	disabled?: boolean
	hidden?: boolean
	badge?: string | number
	meta?: {
		requiresAuth?: boolean
		roles?: string[]
		keepAlive?: boolean
	}
}
```

## API 参考

### Props

| 属性      | 类型           | 默认值  | 说明             |
| --------- | -------------- | ------- | ---------------- |
| config    | `LayoutConfig` | -       | 布局配置对象     |
| loading   | `boolean`      | `false` | 是否显示加载状态 |
| className | `string`       | -       | 自定义类名       |

### Events

| 事件名           | 参数                     | 说明               |
| ---------------- | ------------------------ | ------------------ |
| update:theme     | `(theme: string)`        | 主题切换时触发     |
| update:collapsed | `(collapsed: boolean)`   | 侧边栏折叠状态改变 |
| menu-click       | `(menuItem: MenuItem)`   | 菜单项点击时触发   |
| tab-close        | `(tabKey: string)`       | 标签页关闭时触发   |
| tab-change       | `(tabKey: string)`       | 标签页切换时触发   |
| breadcrumb-click | `(item: BreadcrumbItem)` | 面包屑点击时触发   |

### Slots (Vue) / Children (React) / Slots (Svelte)

| 插槽名         | 说明                 |
| -------------- | -------------------- |
| default        | 主内容区域           |
| header-left    | 头部左侧自定义内容   |
| header-right   | 头部右侧自定义内容   |
| sidebar-top    | 侧边栏顶部自定义内容 |
| sidebar-bottom | 侧边栏底部自定义内容 |
| footer         | 底部自定义内容       |

## 高级功能

### 主题自定义

```scss
// 自定义主题变量
:root {
	// 主色调
	--layout-primary-color: #1890ff;
	--layout-success-color: #52c41a;
	--layout-warning-color: #faad14;
	--layout-error-color: #f5222d;

	// 背景色
	--layout-bg-color: #f0f2f5;
	--layout-content-bg: #ffffff;
	--layout-sidebar-bg: #001529;

	// 文字颜色
	--layout-text-color: #000000d9;
	--layout-text-color-secondary: #00000073;

	// 边框和分割线
	--layout-border-color: #d9d9d9;
	--layout-border-radius: 6px;

	// 阴影
	--layout-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

// 暗色主题
[data-theme='dark'] {
	--layout-bg-color: #141414;
	--layout-content-bg: #1f1f1f;
	--layout-sidebar-bg: #141414;
	--layout-text-color: #ffffffd9;
	--layout-text-color-secondary: #ffffff73;
	--layout-border-color: #434343;
}
```

### 动态配置

```typescript
// Vue 3 示例
import { ref, reactive } from 'vue'

const layoutConfig = reactive({
	theme: 'light',
	sidebar: {
		collapsed: false,
	},
})

// 动态修改配置
const toggleTheme = () => {
	layoutConfig.theme = layoutConfig.theme === 'light' ? 'dark' : 'light'
}

const toggleSidebar = () => {
	layoutConfig.sidebar.collapsed = !layoutConfig.sidebar.collapsed
}
```

### 路由集成

```typescript
// Vue Router 集成
import { useRouter } from 'vue-router'

const router = useRouter()

const handleMenuClick = (menuItem: MenuItem) => {
	if (menuItem.path) {
		router.push(menuItem.path)
	}
}

// React Router 集成
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

const handleMenuClick = (menuItem: MenuItem) => {
	if (menuItem.path) {
		navigate(menuItem.path)
	}
}
```

### 权限控制

```typescript
// 菜单权限过滤
const filterMenuByPermission = (menus: MenuItem[], userRoles: string[]) => {
	return menus
		.filter((menu) => {
			if (menu.meta?.roles && menu.meta.roles.length > 0) {
				return menu.meta.roles.some((role) => userRoles.includes(role))
			}
			return true
		})
		.map((menu) => ({
			...menu,
			children: menu.children ? filterMenuByPermission(menu.children, userRoles) : undefined,
		}))
}
```

## 组件结构

### 目录结构

```
BackgroundLayout/
├── component/              # 子组件
│   ├── Aside/             # 侧边栏组件
│   │   ├── index.vue
│   │   ├── Menu.vue
│   │   └── MenuItem.vue
│   ├── Header/            # 头部组件
│   │   ├── index.vue
│   │   ├── Breadcrumb.vue
│   │   ├── UserAvatar.vue
│   │   └── FullScreen.vue
│   ├── Main/              # 主内容区
│   │   └── index.vue
│   ├── NavTab/            # 标签页组件
│   │   ├── index.vue
│   │   ├── TagItem.vue
│   │   └── TagDropdown.vue
│   └── Footer/            # 底部组件
│       └── index.vue
├── hooks/                 # 组合式函数
│   ├── useTheme.ts
│   ├── useState.ts
│   ├── useTag.ts
│   └── useWatermark.ts
├── styles/                # 样式文件
│   ├── index.scss
│   ├── reset.scss
│   ├── transition.scss
│   └── element-plus.scss
├── constants/             # 常量配置
│   └── aside.ts
├── BackgroundLayout.vue   # 主组件
├── BackgroundLayout.ts    # 组件逻辑
└── index.ts              # 导出文件
```

### 核心子组件

#### 侧边栏 (Aside)

- 可折叠的侧边导航
- 多级菜单支持
- 图标和徽章显示
- 搜索功能

#### 头部 (Header)

- Logo 和标题显示
- 面包屑导航
- 用户信息和操作
- 全屏切换
- 主题切换

#### 标签页 (NavTab)

- 多标签页管理
- 右键菜单操作
- 拖拽排序
- 缓存机制

#### 主内容区 (Main)

- 内容展示区域
- 滚动优化
- 加载状态

## 自定义开发

### 扩展子组件

```vue
<!-- 自定义头部组件 -->
<template>
	<div class="custom-header">
		<slot name="left" />
		<div class="header-center">
			<!-- 自定义中间内容 -->
		</div>
		<slot name="right" />
	</div>
</template>

<script setup lang="ts">
	// 自定义头部逻辑
</script>
```

### 添加新功能

```typescript
// 添加新的 Hook
export const useCustomFeature = () => {
	const [state, setState] = useState(initialState)

	const customMethod = () => {
		// 自定义功能实现
	}

	return {
		state,
		customMethod,
	}
}
```

## 性能优化

### 虚拟滚动

```typescript
// 大数据量菜单优化
const VirtualMenu = {
	itemHeight: 40,
	visibleCount: 20,
	buffer: 5,
}
```

### 懒加载

```typescript
// 组件懒加载
const LazyComponent = defineAsyncComponent(() => import('./LazyComponent.vue'))
```

### 缓存策略

```typescript
// 页面缓存配置
const cacheConfig = {
	max: 10,
	exclude: ['login', 'error'],
}
```

## 故障排除

### 常见问题

1. **样式不生效**

   - 确保正确导入样式文件
   - 检查 CSS 变量是否正确设置

2. **菜单不显示**

   - 检查菜单数据格式
   - 确认权限配置

3. **主题切换失效**

   - 检查主题变量定义
   - 确认事件监听是否正确

4. **移动端适配问题**
   - 检查响应式断点
   - 确认触摸事件处理

### 调试模式

```typescript
// 开启调试模式
const layoutConfig = {
	debug: true, // 开启调试信息
	// 其他配置...
}
```

## 版本兼容性

| 版本 | Vue  | React | Svelte | 说明     |
| ---- | ---- | ----- | ------ | -------- |
| 2.x  | 3.0+ | 18.0+ | 4.0+   | 当前版本 |
| 1.x  | 2.6+ | 16.8+ | 3.0+   | 旧版本   |

## 更多示例

查看完整的示例代码和演示，请访问：

- [在线演示](https://web-boot-demo.com)
- [GitHub 仓库](https://github.com/your-username/web-boot)
- [CodeSandbox 示例](https://codesandbox.io/examples)
