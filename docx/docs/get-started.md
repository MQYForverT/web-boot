# 快速开始

本指南将帮助您快速上手 Web Boot 项目，并创建您的第一个后台管理系统。

## 环境要求

在开始之前，请确保您的开发环境满足以下要求：

- **Node.js**: 版本 18.0.0 或更高
- **pnpm**: 推荐使用 pnpm 作为包管理器
- **Git**: 用于版本控制

## 安装步骤

### 1. 克隆项目

```bash
git clone https://github.com/your-username/web-boot.git
cd web-boot
```

### 2. 安装依赖

```bash
# 安装项目依赖
pnpm install
```

### 3. 选择模板

Web Boot 提供三种前端框架模板：

```bash
# Vue 模板
cd templates/vue
pnpm install
pnpm dev

# React 模板
cd templates/react
pnpm install
pnpm dev

# Svelte 模板
cd templates/svelte
pnpm install
pnpm dev
```

### 4. 启动开发服务器

选择您喜欢的框架模板后，运行相应的开发命令：

```bash
pnpm dev
```

项目将在 `http://localhost:5173` 启动。

## 项目结构

```
web-boot/
├── components/          # 可复用组件库
│   ├── private/        # 私有组件（完整功能）
│   └── public/         # 公共组件（基础功能）
├── templates/          # 项目模板
│   ├── vue/           # Vue 模板
│   ├── react/         # React 模板
│   └── svelte/        # Svelte 模板
├── internal/          # 内部工具和配置
│   ├── eslint-config/ # ESLint 配置
│   ├── stylelint-config/ # Stylelint 配置
│   ├── utils/         # 工具函数
│   └── vite-config/   # Vite 配置
└── docx/              # 项目文档
```

## 核心功能

### 登录系统

所有模板都内置了完整的登录系统：

- 用户登录/注销
- 路由守卫
- Token 管理
- 权限验证

### 布局系统

提供了灵活的布局组件：

- 响应式侧边栏
- 顶部导航栏
- 面包屑导航
- 标签页管理

### 主题系统

支持多种主题配置：

- 明暗模式切换
- 自定义主题色
- 布局样式切换

## 开发指南

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在路由配置中添加对应的路由规则
3. 根据需要添加到侧边栏菜单中

### 自定义组件

您可以基于现有的组件库开发自定义组件：

```javascript
// 引入基础组件
import { BackgroundLayout } from 'mqy-background-layout'

// 自定义配置
const layoutConfig = {
	// 您的配置选项
}
```

### 构建部署

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 下一步

- 查看 [模板文档](/templates/) 了解各框架的详细配置
- 阅读 [组件文档](/components/) 学习如何使用内置组件
- 参考 [配置文档](/config/) 进行项目定制

如果您遇到任何问题，请查看项目的 GitHub Issues 或提交新的问题。
