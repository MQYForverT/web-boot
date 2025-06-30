# Web Components 组件库

**Web Boot 的核心产品** - 基于 Web Components 标准的企业级组件库，可在任何前端框架中使用，包括 Vue、React、Svelte、Angular 或原生 JavaScript。

## 🎯 核心优势

**🔧 框架无关**

- 基于 Web Components 标准，不依赖特定框架
- 可在任何现代浏览器中运行
- 提供统一的 API，无论使用什么技术栈

**⚡ 开箱即用**

- 完整的后台管理系统解决方案
- 无需重复开发常见功能
- 高度可配置化，满足各种需求

## 组件概览

### 🏗️ [布局组件 (BackgroundLayout)](/components/layout/)

- 完整的后台管理系统布局
- 响应式设计，支持移动端
- 多种布局模式切换
- 侧边栏折叠/展开功能
- 面包屑导航和标签页管理
- 主题切换（明暗模式）

### 🔐 [登录组件 (BackgroundLogin)](/components/login/)

- 美观的登录界面设计
- 表单验证和错误处理
- 多种登录方式支持
- 响应式布局适配
- 国际化支持

### 🧩 [通用组件](/components/common/)

- 主题切换组件
- 语言切换组件
- 全局状态管理
- 通用工具函数

## 组件特性

### 🎨 统一设计风格

- 现代化的 UI 设计
- 一致的交互体验
- 丰富的动画效果
- 优雅的过渡动画

### 🔧 高度可配置

- 灵活的配置选项
- 支持自定义主题
- 可扩展的功能模块
- 类型安全的 API

### 📱 响应式设计

- 移动端优先设计
- 自适应不同屏幕尺寸
- 触摸友好的交互
- 优化的性能表现

### 🌍 国际化支持

- 多语言切换
- 本地化配置
- RTL 语言支持
- 时区处理

## 安装使用

### NPM 安装

```bash
# 安装企业级组件库
npm install @mqy/component-private

# 安装通用组件库
npm install @mqy/component-public
```

### 框架集成

**原生 HTML**

```html
<!-- 直接在 HTML 中使用 -->
<mqy-background-layout theme="dark">
	<mqy-background-login></mqy-background-login>
</mqy-background-layout>
```

**Vue 3**

```vue
<template>
	<mqy-background-layout :theme-config="config">
		<router-view />
	</mqy-background-layout>
</template>
```

**React**

```jsx
function App() {
	return (
		<mqy-background-layout themeConfig={config}>
			<Routes>...</Routes>
		</mqy-background-layout>
	)
}
```

**Svelte**

```svelte
<mqy-background-layout bind:themeConfig={config}>
  <main>
    <!-- 你的应用内容 -->
  </main>
</mqy-background-layout>
```

### 配置示例

```typescript
const layoutConfig = {
	// 主题配置
	theme: 'light', // 'light' | 'dark'

	// 布局模式
	layout: 'default', // 'default' | 'vertical'

	// 侧边栏配置
	sidebar: {
		collapsed: false,
		width: 240,
		collapsedWidth: 64,
	},

	// 头部配置
	header: {
		height: 64,
		fixed: true,
	},

	// 标签页配置
	tabs: {
		enabled: true,
		persistent: true,
	},

	// 其他配置...
}
```

## 组件架构

```
components/
├── BackgroundLayout/     # 布局组件
│   ├── component/       # 子组件
│   │   ├── Aside/      # 侧边栏
│   │   ├── Header/     # 头部导航
│   │   ├── Main/       # 主内容区
│   │   ├── Footer/     # 底部
│   │   └── NavTab/     # 标签页
│   ├── hooks/          # 组合式函数
│   ├── styles/         # 样式文件
│   └── constants/      # 常量配置
├── BackgroundLogin/     # 登录组件
│   ├── component/      # 子组件
│   ├── hooks/          # 组合式函数
│   └── styles/         # 样式文件
└── common/             # 通用组件
    ├── components/     # 通用子组件
    ├── utils/          # 工具函数
    └── styles/         # 全局样式
```

## 开发指南

### 自定义主题

```scss
// 定义主题变量
:root {
	--primary-color: #1890ff;
	--success-color: #52c41a;
	--warning-color: #faad14;
	--error-color: #f5222d;

	// 布局变量
	--sidebar-width: 240px;
	--header-height: 64px;
	--footer-height: 48px;
}

// 暗色主题
[data-theme='dark'] {
	--primary-color: #177ddc;
	--bg-color: #141414;
	--text-color: #ffffff;
}
```

### 扩展组件

```typescript
// 扩展布局组件
interface CustomLayoutConfig extends LayoutConfig {
	// 添加自定义配置
	customFeature?: boolean
	additionalOptions?: any
}

// 自定义 Hook
export const useCustomLayout = (config: CustomLayoutConfig) => {
	// 自定义逻辑
	return {
		// 返回扩展功能
	}
}
```

### 事件处理

```typescript
// 组件事件
interface LayoutEvents {
  'update:theme': (theme: string) => void
  'update:collapsed': (collapsed: boolean) => void
  'menu-click': (menuItem: MenuItem) => void
  'tab-close': (tabKey: string) => void
}

// 使用示例
<BackgroundLayout
  @update:theme="handleThemeChange"
  @menu-click="handleMenuClick"
  @tab-close="handleTabClose"
/>
```

## 最佳实践

### 1. 配置管理

- 使用 TypeScript 确保配置类型安全
- 将配置文件独立管理
- 支持运行时动态配置

### 2. 性能优化

- 使用虚拟滚动处理大量数据
- 实现组件懒加载
- 优化重渲染性能

### 3. 可访问性

- 支持键盘导航
- 提供 ARIA 标签
- 确保颜色对比度

### 4. 测试覆盖

- 单元测试覆盖核心逻辑
- 集成测试验证组件交互
- E2E 测试保证用户体验

## 浏览器支持

| 浏览器  | 版本 |
| ------- | ---- |
| Chrome  | ≥ 80 |
| Firefox | ≥ 78 |
| Safari  | ≥ 14 |
| Edge    | ≥ 80 |

## 更新日志

### v2.0.0 (2024-01-20)

- 🎉 支持 Vue 3、React 18、Svelte 5
- 🆕 新增暗色主题支持
- 🔧 重构组件架构
- 📱 优化移动端体验

### v1.5.0 (2023-12-15)

- ✨ 新增标签页管理功能
- 🐛 修复侧边栏折叠问题
- 💄 优化组件样式

查看完整的更新日志和迁移指南，请访问各组件的详细文档页面。
