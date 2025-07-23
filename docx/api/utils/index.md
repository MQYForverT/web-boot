# 工具函数概述

## 📖 简介

`@tsoul/utils` 是 Web Boot 项目的核心工具函数库，提供了一系列常用的实用工具，包括 HTTP 请求封装、进度条管理、滚动处理、打字机效果等功能。

## 📦 安装

### 包信息

- **包名**：`@tsoul/utils`
- **类型**：运行依赖
- **最新版本**：1.0.6

### 安装命令

::: code-group

```bash [pnpm (推荐)]
pnpm add @tsoul/utils
```

```bash [npm]
npm install @tsoul/utils
```

```bash [yarn]
yarn add @tsoul/utils
```

:::

## 🛠️ 工具函数清单

### 🌐 HTTP 请求

- [Axios 封装](../axios.md) - 强化的 HTTP 请求库
  - 请求/响应拦截器
  - 自动错误处理
  - 请求取消机制
  - 文件下载支持

### 📊 用户体验

- [进度条](../progress.md) - 基于 nprogress 的加载指示器
  - 路由切换进度
  - 请求加载状态
  - 自定义样式主题

### 🖱️ 交互处理

- [滚动处理](../scroll.md) - 兼容性滚动解决方案
  - 平滑滚动动画
  - 跨浏览器兼容
  - 精确位置控制

### ✨ 视觉效果

- [打字机效果](../typewriter.md) - 文字逐字显示动画
  - 可配置打字速度
  - 支持暂停和重播
  - 自定义光标样式

### 🔧 开发工具

- [函数重载](../overload.md) - TypeScript 函数重载工具
  - 类型安全的重载
  - 参数类型推断
  - 智能提示支持

## 🚀 快速开始

### 基础导入

```typescript
// 导入特定工具
import axios from '@tsoul/utils/axios'
import nprogress from '@tsoul/utils/nprogress'
import typewriter from '@tsoul/utils/typewriter'

// 或使用具名导入
import { scrollTo } from '@tsoul/utils/compatibleScrollTo'
import { createOverload } from '@tsoul/utils/funcOverload'
```

### 样式导入

某些工具需要导入对应的样式文件：

```typescript
// 进度条样式
import '@tsoul/utils/nprogress.css'

// 打字机效果样式（如果需要）
import '@tsoul/utils/typewriter.css'
```

## 📚 使用示例

### 请求 + 进度条

```typescript
import axios from '@tsoul/utils/axios'
import nprogress from '@tsoul/utils/nprogress'
import '@tsoul/utils/nprogress.css'

// 请求拦截器：显示进度条
axios.interceptors.request.use((config) => {
	nprogress.start()
	return config
})

// 响应拦截器：隐藏进度条
axios.interceptors.response.use((response) => {
	nprogress.done()
	return response
})
```

### 滚动 + 打字机

```typescript
import { scrollTo } from '@tsoul/utils/compatibleScrollTo'
import typewriter from '@tsoul/utils/typewriter'

// 平滑滚动到顶部
scrollTo({ top: 0, behavior: 'smooth' })

// 打字机效果
typewriter('#title', {
	strings: ['欢迎使用 Web Boot', '现代化前端开发工具'],
	speed: 50,
	loop: true,
})
```

## 🎯 最佳实践

### 1. 按需导入

```typescript
// ✅ 推荐：按需导入
import nprogress from '@tsoul/utils/nprogress'

// ❌ 避免：全量导入
import * as utils from '@tsoul/utils'
```

### 2. 类型支持

```typescript
// 充分利用 TypeScript 类型提示
import type { AxiosRequestConfig } from '@tsoul/utils/axios'
import type { TypewriterOptions } from '@tsoul/utils/typewriter'

const config: AxiosRequestConfig = {
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' },
}
```

### 3. 样式管理

```typescript
// 在应用入口统一导入样式
// main.ts
import '@tsoul/utils/nprogress.css'
```

## 🔗 相关资源

- [NPM 包地址](https://www.npmjs.com/package/@tsoul/utils)
- [GitHub 仓库](https://github.com/MQYForverT/web-boot)
- [工具配置指南](../vite.md) - Vite 配置中的工具集成
- [代码规范](../eslint.md) - 配合 ESLint 使用

## 📋 版本历史

- **1.0.6** - 最新版本，功能完善
- **1.0.x** - 稳定版本系列
- 持续更新中...
