# 私有组件库

## 📖 概述

私有组件库 `@tsoul/component-private` 是一个企业级中后台应用组件解决方案，基于 Vue 3.x + TypeScript 构建，采用 Web Components 技术实现跨框架兼容。

## 🗺️ 组件导航

### 🏢 布局组件

- [BackgroundLayout](../background-layout.md) - 中后台布局解决方案
  - 响应式侧边栏
  - 顶部导航栏
  - 页面标签管理
  - 主题设置
  - 水印功能
  - 多语言支持

### 🔐 认证组件

- [BackgroundLogin](../background-login.md) - 登录页面组件
  - 多种布局模式
  - 表单验证
  - 第三方登录
  - 响应式设计

### 🛠️ 通用组件

- [Common Components](../common.md) - 通用工具组件
  - 主题配置
  - 语言切换
  - 全局状态
  - 工具函数

## 🎯 特性亮点

### Web Components 技术

- **跨框架复用**：组件可在 Vue、React、Svelte 中使用
- **标准化**：基于 Web 标准，兼容性好
- **一次开发**：多处复用，降低维护成本
- **渐进式**：可逐步引入到现有项目

### 开发体验

- **TypeScript**：完整的类型定义，提供优秀的开发体验
- **主题定制**：灵活的主题配置，支持深色模式
- **响应式**：自适应不同屏幕尺寸
- **性能优化**：按需加载，优化渲染性能

### 企业级特性

- **权限管理**：支持细粒度权限控制
- **国际化**：内置多语言支持
- **可扩展**：丰富的插槽和自定义选项
- **稳定性**：经过生产环境验证

## 🚀 快速开始

### 安装组件库

::: code-group

```bash [pnpm (推荐)]
pnpm add @tsoul/component-private
```

```bash [npm]
npm install @tsoul/component-private
```

```bash [yarn]
yarn add @tsoul/component-private
```

:::

### 注册组件

```typescript
import { registerAll } from '@tsoul/component-private'

// 注册所有组件
registerAll()
```

### 基础使用

```vue
<template>
	<!-- 使用布局组件 -->
	<tsoul-background-layout :menu-list="menuList" :active-path="currentPath" :container-size="{ height: '100vh' }">
		<template #main>
			<router-view />
		</template>
	</tsoul-background-layout>
</template>
```

## 🎨 主题配置

```typescript
import { setGlobalConfig } from '@tsoul/component-private'
import type { Global } from '@tsoul/component-private/common/global'

const themeConfig: Global.setting = {
	language: {
		show: true,
		trigger: 'click',
		dropdownMenu: [
			{ key: 'zh-CN', value: '简体中文' },
			{ key: 'en', value: 'English' },
		],
	},
	theme: {
		primaryColor: '#1890ff',
		darkMode: false,
	},
}

setGlobalConfig(themeConfig)
```

## 📚 开发指南

### 最佳实践

1. **组件注册**：建议在应用入口统一注册所有组件
2. **主题配置**：根据项目需求配置全局主题
3. **权限管理**：合理设置菜单权限和路由权限
4. **响应式**：充分利用组件的响应式特性

### 注意事项

- 确保 Vue 版本 >= 3.0
- TypeScript 项目需要配置类型声明
- 主题配置需要在组件注册后进行
- Web Components 需要现代浏览器支持
