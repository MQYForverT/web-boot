# BackgroundLayout 中后台布局组件

## 📖 组件介绍

`BackgroundLayout` 是一个功能完整的中后台布局组件，基于 Vue 3 + Element Plus 开发，并使用 Web Components 技术实现跨框架复用。组件提供了丰富的布局选项和功能特性，可以快速构建专业的管理系统界面。

## 🎯 功能特性

### 布局模式

- ✨ 支持默认布局（横向）和垂直布局
- 📱 自适应移动端，自动切换布局
- 🎨 可自定义容器尺寸和背景

### 导航功能

- 🗺️ 响应式侧边栏菜单
- 🍞 可配置面包屑导航
- 🏷️ 页面标签管理（支持拖拽排序）
- 🎯 菜单手风琴效果

### 界面功能

- 🌓 支持明暗主题切换
- 🖼️ 全屏模式切换
- 👤 用户头像及下拉菜单
- 💧 水印功能
- 🌍 国际化支持

## 🚀 快速开始

### 安装

```bash
npm install @tsoul/component-private
# 或
pnpm add @tsoul/component-private
```

### 基础用法

```vue
<template>
	<tsoul-background-layout :menu-list="menuList" :active-path="'/dashboard'" :container-size="{ height: '100vh' }">
		<template #main>
			<router-view />
		</template>
	</tsoul-background-layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const menuList = ref([
		{
			path: '/dashboard',
			name: '仪表盘',
			icon: 'dashboard',
		},
		// ... 其他菜单项
	])
</script>
```

## 📝 API

### Props

| 属性名              | 类型           | 默认值                                   | 必填 | 说明                                          |
| ------------------- | -------------- | ---------------------------------------- | ---- | --------------------------------------------- |
| containerSize       | object/string  | `{}`                                     | 否   | 容器尺寸配置，可设置 height、width 和其他样式 |
| containerBackground | object/string  | `{}`                                     | 否   | 容器背景配置，支持背景图片和透明度设置        |
| settingVisible      | boolean/string | `false`                                  | 否   | 是否显示设置面板                              |
| setting             | object/string  | `{"enable":true}`                        | 否   | 设置面板的配置项                              |
| isMobile            | boolean/string | -                                        | 否   | 是否为移动端，不传则由组件自动判断            |
| menuMode            | string         | -                                        | 否   | 菜单主题模式，可选值：'light'/'dark'          |
| activePath          | string         | -                                        | 否   | 当前激活的菜单路径                            |
| activeTags          | array/string   | -                                        | 否   | 当前激活的标签页数组                          |
| menuList            | array/string   | `[]`                                     | 是   | 菜单配置数组，组件的必需属性                  |
| isCollapse          | boolean/string | -                                        | 否   | 是否折叠菜单，不传则由组件自动判断            |
| isAllOpen           | boolean/string | -                                        | 否   | 是否默认展开所有菜单                          |
| isUniqueOpened      | boolean/string | -                                        | 否   | 是否开启菜单手风琴效果                        |
| isBreadcrumb        | boolean/string | -                                        | 否   | 是否显示面包屑导航                            |
| fullScreen          | object/string  | `{"show":true}`                          | 否   | 全屏功能配置                                  |
| userAvatar          | object/string  | `{}`                                     | 否   | 用户头像及下拉菜单配置                        |
| isTagsView          | boolean/string | -                                        | 否   | 是否显示标签栏导航                            |
| isTagsViewIcon      | boolean/string | -                                        | 否   | 是否显示标签栏图标                            |
| tagsShowNum         | number/string  | `10`                                     | 否   | 标签页最大显示数量                            |
| isCacheTagsView     | boolean/string | `true`                                   | 否   | 是否缓存标签页到本地                          |
| isSortableTagsView  | boolean/string | `true`                                   | 否   | 是否启用标签页拖拽排序                        |
| watermark           | object/string  | `{}`                                     | 否   | 水印配置                                      |
| layout              | string         | -                                        | 否   | 布局模式，可选值：'defaults'/'vertical'       |
| isFooter            | boolean/string | `true`                                   | 否   | 是否显示页脚                                  |
| footerCompany       | string         | '漠轻阴（郁金香）能力不大且实力有限公司' | 否   | 页脚公司名称                                  |
| footerRecord        | string         | '京ICP备17012835号-1'                    | 否   | 页脚备案信息                                  |

#### containerSize 类型定义

```typescript
interface containerSize {
	height?: string
	width?: string
	style?: Record<string, string>
}
```

#### containerBackground 类型定义

```typescript
interface containerBackground {
	background?: string
	opacity?: number
	style?: Record<string, string>
}
```

#### Menu 类型定义

```typescript
interface Menu {
	path: string
	name: string
	icon?: string
	children?: Menu[]
}
```

#### Setting 类型定义

```typescript
interface Setting {
	enable: boolean
	// 其他设置选项
}
```

#### FullScreen 类型定义

```typescript
interface FullScreen {
	show: boolean
	// 其他全屏配置
}
```

#### UserAvatar 类型定义

```typescript
interface UserAvatar {
	src?: string
	dropdownItems?: Array<{
		command: string
		text: string
	}>
}
```

#### Watermark 类型定义

```typescript
interface Watermark {
	text?: string
	font?: string
	fillStyle?: string
	rotate?: number
}
```

### Events

| 事件名      | 参数              | 说明             |
| ----------- | ----------------- | ---------------- |
| changeProp  | (propName, value) | 属性值变更事件   |
| selectMenu  | path              | 菜单选择事件     |
| commandUser | command           | 用户菜单命令事件 |
| tagRefresh  | path              | 标签页刷新事件   |

### Slots

| 插槽名              | 说明           |
| ------------------- | -------------- |
| logo                | 自定义 Logo    |
| header              | 自定义头部内容 |
| main                | 主要内容区域   |
| containerBackground | 自定义容器背景 |

## 🎨 主题定制

组件支持丰富的主题定制选项：

```typescript
// 主题配置示例
const theme = {
	// 明亮主题
	light: {
		'--el-color-primary': '#409eff',
		'--el-menu-bg-color': '#ffffff',
		// ... 其他主题变量
	},
	// 暗色主题
	dark: {
		'--el-color-primary': '#409eff',
		'--el-menu-bg-color': '#1f2937',
		// ... 其他主题变量
	},
}
```

## 🌐 跨框架使用

作为 Web Components，组件可以在不同框架中使用：

### React

```tsx
import '@tsoul/component-private'

const App: React.FC = () => {
	return (
		<tsoul-background-layout menu-list={JSON.stringify(menuList)} active-path="/dashboard">
			<div slot="main">
				<Outlet />
			</div>
		</tsoul-background-layout>
	)
}
```

### Svelte

```svelte
<script lang="ts">
  import '@tsoul/component-private'

  const menuList = [...]
</script>

<tsoul-background-layout
  menu-list={JSON.stringify(menuList)}
  active-path="/dashboard"
>
  <div slot="main">
    <slot />
  </div>
</tsoul-background-layout>
```

## 📋 最佳实践

1. **菜单配置**

```typescript
const menuList = [
	{
		path: '/dashboard',
		name: '仪表盘',
		icon: 'dashboard',
		children: [
			{
				path: '/dashboard/analysis',
				name: '分析页',
			},
		],
	},
]
```

2. **水印配置**

```typescript
const watermark = {
	text: '机密文件',
	font: '16px 微软雅黑',
	fillStyle: 'rgba(0, 0, 0, 0.1)',
	rotate: -20,
}
```

3. **响应式处理**

```typescript
// 监听窗口大小变化
useResizeObserver(containerRef, (entries) => {
	const { width } = entries[0].contentRect
	isCollapse.value = width <= 640
})
```

## 🚨 注意事项

1. 在使用跨框架特性时，需要将对象类型的属性转换为 JSON 字符串
2. 主题切换时注意保存用户偏好设置
3. 标签页数量建议控制在合理范围内（默认最大 10 个）
4. 自定义背景时注意性能影响

## 🔗 相关链接

- [Element Plus](https://element-plus.org)
- [Vue 3 文档](https://vuejs.org)
- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
