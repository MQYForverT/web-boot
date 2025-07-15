# Web-Boot 工具集

## 📖 概述

Web-Boot 工具集是一个完整的前端开发工具链，提供了统一的开发配置、构建工具和实用函数。这些工具确保了项目开发的规范性和效率，为所有模板和组件库提供了坚实的基础支持。

## 🎯 核心特性

- **代码规范**: 统一的 ESLint 和 StyleLint 配置，支持多框架
- **构建工具**: 基于 Vite 的高性能构建配置，针对不同框架优化
- **工具函数**: 丰富的工具函数库，解决常见开发需求
- **类型支持**: 完整的 TypeScript 类型定义，提供类型安全
- **框架支持**: 支持 Vue、React、Svelte 等主流框架
- **性能优化**: 内置多种性能优化方案和最佳实践

## 🏗️ 工具分类

### 代码规范

#### ESLint 配置 (`@tsoul/eslint-config`)

- 支持多框架的代码规范配置
- TypeScript 严格模式支持
- Prettier 集成
- Import 规则优化
- UnoCSS 规则支持

#### StyleLint 配置 (`@tsoul/stylelint-config`)

- Vue SFC 样式规范
- CSS/SCSS 规范统一
- 选择器命名规范
- 代码格式化规则

### 构建工具

#### Vite 配置 (`@tsoul/vite-config`)

- 多框架构建配置
- 丰富的插件集成
- 性能优化预设
- 开发体验提升

### 工具函数

#### HTTP 请求 (`@tsoul/utils/axios`)

- 请求/响应拦截器
- 错误统一处理
- 文件下载支持
- 取消请求机制

#### 进度条 (`@tsoul/utils/nprogress`)

- 页面加载进度显示
- 自定义样式支持
- 轻量级实现

#### 打字机效果 (`@tsoul/utils/typewriter`)

- 彩色文本支持
- 类型分组管理
- Promise 异步控制
- 队列管理和状态监控
- itemKey 项目标识
- 完整的生命周期回调

#### 函数重载 (`@tsoul/utils/funcOverload`)

- TypeScript 类型安全
- 参数类型推断
- 多种调用方式支持

#### 滚动处理 (`@tsoul/utils/compatibleScrollTo`)

- 浏览器兼容性处理
- 平滑滚动动画
- 位置精确控制

## 🚀 快速开始

### 安装依赖

```bash
# ESLint 配置
npm install @tsoul/eslint-config -D
# 或
pnpm add @tsoul/eslint-config -D

# StyleLint 配置
npm install @tsoul/stylelint-config -D
# 或
pnpm add @tsoul/stylelint-config -D

# 工具函数
npm install @tsoul/utils
# 或
pnpm add @tsoul/utils

# Vite 配置
npm install @tsoul/vite-config -D
# 或
pnpm add @tsoul/vite-config -D
```

### 基础使用

```typescript
// ESLint 配置
// eslint.config.mjs
import { defineConfig } from '@tsoul/eslint-config'

export default defineConfig({
	extends: ['@tsoul/eslint-config/vue'], // 或 react, svelte
})

// StyleLint 配置
// stylelint.config.mjs
export default {
	extends: ['@tsoul/stylelint-config/vue'], // 或 react
}

// 工具函数使用
import { httpRequest, nprogress, typewriter } from '@tsoul/utils'

// Vite 配置
// vite.config.ts
import { defineConfig } from '@tsoul/vite-config/vue' // 或 react, svelte

export default defineConfig({
	// 项目配置
})
```

## 📚 使用指南

请查看左侧菜单中的具体工具文档，了解详细的使用方法和最佳实践。每个工具都提供了完整的配置选项和示例代码。
