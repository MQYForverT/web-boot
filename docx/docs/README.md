---
home: true
title: 首页
heroImage: https://vuejs.press/images/hero.png
heroText: Web Boot
tagline: 通用 Web Components 组件库 + 开发工具集
actions:
  - text: 快速开始
    link: /get-started.html
    type: primary

  - text: 查看组件
    link: /components/
    type: secondary

features:
  - title: 框架无关
    details: 基于 Web Components 标准，可在任何前端框架中使用，包括原生 JavaScript。
  - title: 开箱即用
    details: 提供完整的后台管理系统组件和开发工具，无需重复造轮子。
  - title: 标准化工具
    details: 统一的代码规范、构建配置、实用函数，确保项目开发的一致性。
  - title: TypeScript 优先
    details: 全面的 TypeScript 类型支持，提供更好的开发体验和代码质量。
  - title: 现代化组件
    details: 后台布局、登录系统、主题切换等企业级组件，支持自定义配置。
  - title: 丰富示例
    details: 提供 Vue、React、Svelte 三个主流框架的完整使用示例。

footer: MIT Licensed | Copyright © 2024 Web Boot
---

## 项目核心

Web Boot 是一个**框架无关**的 Web Components 组件库和开发工具集，专为企业级后台管理系统开发而设计。

### 🎯 核心优势

**🔧 不是框架，是工具**

- 基于 Web Components 标准，不绑定特定框架
- 可在 Vue、React、Svelte、Angular 或原生 JavaScript 中使用
- 提供统一的开发体验，无论你使用什么技术栈

**📦 两大核心产品**

#### 1. Web Components 组件库

```bash
npm install @mqy/component-private  # 企业级组件
npm install @mqy/component-public   # 通用组件
```

#### 2. 开发工具集

```bash
npm install @mqy/eslint-config     # 代码规范
npm install @mqy/stylelint-config  # 样式规范
npm install @mqy/vite-config       # 构建配置
npm install @mqy/utils             # 实用工具
```

### 🚀 快速开始

**在任何项目中使用组件**：

```html
<!-- 原生 HTML -->
<mqy-background-layout theme="dark">
	<mqy-background-login></mqy-background-login>
</mqy-background-layout>
```

```vue
<!-- Vue 项目 -->
<template>
	<mqy-background-layout :theme-config="config">
		<router-view />
	</mqy-background-layout>
</template>
```

```jsx
// React 项目
function App() {
	return (
		<mqy-background-layout themeConfig={config}>
			<Routes>...</Routes>
		</mqy-background-layout>
	)
}
```

### 📖 使用示例

为了帮助你快速上手，我们提供了三个主流框架的完整示例项目：

- **[Vue 示例](/templates/vue/)**: Vue 3 + TypeScript 集成示例
- **[React 示例](/templates/react/)**: React 18 + TypeScript 集成示例
- **[Svelte 示例](/templates/svelte/)**: Svelte 5 + TypeScript 集成示例

### 🛠️ 核心功能

**组件库特性**：

- 🎨 完整的后台管理布局系统
- 🔐 企业级登录认证组件
- 🌗 明暗主题无缝切换
- 📱 响应式设计适配
- 🔧 高度可配置化

**工具集特性**：

- 📏 统一的代码规范配置
- ⚡ 优化的构建配置
- 🛠️ 常用工具函数封装
- 📦 TypeScript 类型完善

立即开始使用 Web Boot，让你的项目开发更加高效！
