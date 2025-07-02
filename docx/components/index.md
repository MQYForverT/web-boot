# Web-Boot 组件库

## 📖 概述

Web-Boot 组件库是一个企业级中后台应用组件解决方案，采用模块化设计，分为私有组件库和公共组件库。组件库基于 Vue 3.x + TypeScript 构建，提供了丰富的功能组件和完整的类型支持。

## 🗺️ 组件导航

### 🔒 私有组件库 (@tsoul/component-private)

#### 布局组件

- [BackgroundLayout](./background-layout.md) - 中后台布局解决方案
  - 响应式侧边栏
  - 顶部导航栏
  - 页面标签管理
  - 主题设置
  - 水印功能
  - 多语言支持

#### 认证组件

- [BackgroundLogin](./background-login.md) - 登录页面组件
  - 多种布局模式
  - 表单验证
  - 第三方登录
  - 响应式设计

#### 通用组件

- [Common](./common.md) - 通用工具组件
  - 主题配置
  - 语言切换
  - 全局状态
  - 工具函数

### 🌐 公共组件库 (@tsoul/component-public)

> 🚧 开发中，敬请期待...

## 🎯 特性亮点

- **Web Components**: 支持跨框架使用，一次开发多处复用
- **TypeScript**: 完整的类型定义，提供优秀的开发体验
- **主题定制**: 灵活的主题配置，支持深色模式
- **响应式**: 自适应不同屏幕尺寸
- **性能优化**: 按需加载，优化渲染性能
- **可扩展**: 丰富的插槽和自定义选项

## 🚀 快速开始

```bash
# 安装私有组件库
npm install @tsoul/component-private
# 或
pnpm add @tsoul/component-private

# 注册组件
import { registerAll } from '@tsoul/component-private'
registerAll()
```

## 📚 开发指南

- [开发环境搭建](../guide/getting-started.md)
- [项目结构说明](../guide/structure.md)
- [开发工具配置](../guide/dev-tools.md)

## 🔗 相关资源

- [API 文档](../api/index.md)
- [组件配置](../api/config.md)
- [工具函数](../api/index.md#工具函数)
