# Web-Boot 模板库

## 📖 概述

`templates` 目录包含了基于不同前端框架的完整项目模板，为快速搭建中后台管理系统提供了开箱即用的解决方案。所有模板都采用相同的设计理念和功能特性，确保一致的开发体验。

## 🎯 设计理念

- **统一性**：三个模板保持相同的功能逻辑、路由结构和用户体验
- **现代化**：采用最新的前端技术栈和开发工具
- **企业级**：内置完整的权限管理、路由守卫、状态管理等企业级功能
- **组件化**：基于 `@mqy/component-private` 组件库，提供统一的 UI 体验
- **开发友好**：完善的 TypeScript 支持、ESLint/Prettier 配置、热重载等

## 📁 模板列表

### 🟢 Vue 模板 (`vue/`)

**技术选型：**

- **框架**：Vue 3.x + Composition API
- **构建工具**：Vite 5.x
- **语言**：TypeScript 5.x
- **路由**：Vue Router 4.x
- **状态管理**：Pinia
- **UI 库**：Element Plus
- **CSS 框架**：UnoCSS
- **代码规范**：ESLint + Prettier + Stylelint
- **包管理**：pnpm

**特色功能：**

- ✅ 内置 `<keep-alive>` 组件缓存
- ✅ 完整的路由守卫和权限管理
- ✅ 响应式状态管理
- ✅ 完善的 TypeScript 类型支持
- ✅ 热重载开发体验

### ⚛️ React 模板 (`react/`)

**技术选型：**

- **框架**：React 18.x + Hooks
- **构建工具**：Vite 5.x
- **语言**：TypeScript 5.x
- **路由**：React Router DOM 6.x
- **状态管理**：MobX
- **UI 库**：Ant Design 5.x
- **CSS 框架**：UnoCSS
- **路由缓存**：keepalive-for-react
- **代码规范**：ESLint + Prettier + Stylelint
- **包管理**：pnpm

**特色功能：**

- ✅ 基于 `keepalive-for-react` 的路由缓存
- ✅ MobX + React 响应式状态管理
- ✅ React Router 6.x 动态路由
- ✅ Ant Design 企业级 UI 组件
- ✅ 完整的 TypeScript 类型推导

### 🔥 Svelte 模板 (`svelte/`)

**技术选型：**

- **框架**：Svelte 5.x + TypeScript
- **构建工具**：Vite 5.x
- **语言**：TypeScript 5.x
- **路由**：Page.js
- **状态管理**：Svelte Stores
- **CSS 框架**：UnoCSS
- **代码规范**：ESLint + Prettier + Stylelint
- **包管理**：pnpm

**特色功能：**

- ✅ 编译时优化，运行时性能最佳
- ✅ 原生响应式系统
- ✅ 轻量级路由解决方案
- ✅ 简洁的状态管理
- ✅ 优秀的开发体验

## 🚀 核心功能对比

| 功能特性       | Vue             | React    | Svelte   |
| -------------- | --------------- | -------- | -------- |
| **框架类型**   | 渐进式框架      | 组件库   | 编译器   |
| **包大小**     | 中等            | 较大     | 最小     |
| **运行性能**   | 优秀            | 良好     | 最佳     |
| **学习曲线**   | 平缓            | 陡峭     | 最平缓   |
| **生态系统**   | 丰富            | 最丰富   | 发展中   |
| **路由缓存**   | 内置 keep-alive | 第三方库 | 手动实现 |
| **状态管理**   | Pinia           | MobX     | Stores   |
| **TypeScript** | 完善支持        | 完善支持 | 完善支持 |

## 🏗️ 项目结构

所有模板都遵循相同的项目结构：

```
template/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口
│   ├── assets/            # 资源文件
│   ├── config/            # 配置文件
│   ├── layouts/           # 布局组件
│   ├── pages/             # 页面组件
│   ├── routers/           # 路由配置
│   ├── stores/            # 状态管理
│   ├── styles/            # 全局样式
│   └── main.ts            # 入口文件
├── package.json
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── eslint.config.mjs      # ESLint 配置
```

## 🔧 统一配置

### 路由配置

```typescript
// 所有模板统一的路由配置
export const HOME_URL = '/'
export const LOGIN_URL = '/login'
export const TABS_WHITE_LIST = ['/403', '/404', '/500', LOGIN_URL]
```

### 权限路由

- 📍 `/home` - 首页
- 📍 `/menu` - 菜单管理
- 📍 `/menu/menu1` - 菜单1
- 📍 `/menu/menu1/menu11` - 菜单11
- 📍 `/menu/menu2` - 菜单2
- 📍 `/menu/menu3` - 菜单3

### 静态路由

- 🔐 `/login` - 登录页
- ❌ `/403` - 无权限页面
- ❌ `/404` - 页面不存在
- ❌ `/500` - 服务器错误

## 🚀 快速开始

### 1. 选择模板

```bash
# Vue 模板
cd templates/vue
npm install
npm run dev

# React 模板
cd templates/react
npm install
npm run dev

# Svelte 模板
cd templates/svelte
npm install
npm run dev
```

### 2. 登录凭据

```
用户名: emilys
密码: emilyspass
```

### 3. 开发命令

```bash
npm run dev          # 开发服务器
npm run build        # 生产构建
npm run preview      # 预览构建结果
npm run lint         # 代码检查
npm run lint:fix     # 修复代码问题
```

## 🎨 组件库集成

所有模板都集成了 `@mqy/component-private` 组件库：

- **mqy-background-layout** - 中后台布局组件
- **mqy-background-login** - 登录页面组件

提供统一的视觉风格和交互体验。

## 📋 最佳实践

### 代码规范

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint + Prettier 代码规范
- 使用 Stylelint 确保 CSS 代码质量

### 项目开发

- 合理使用状态管理，避免过度设计
- 充分利用各框架的特性优势
- 保持组件的单一职责原则
- 注重代码的可维护性和可测试性

### 性能优化

- 合理使用路由懒加载
- 适当使用路由缓存（Vue keep-alive / React keepalive-for-react）
- 优化打包体积和资源加载

## 🔮 技术选型建议

### 选择 Vue 如果：

- 团队熟悉 Vue 生态
- 需要渐进式开发体验
- 重视开发效率和学习成本

### 选择 React 如果：

- 团队具备 React 经验
- 需要丰富的生态支持
- 项目复杂度较高

### 选择 Svelte 如果：

- 追求极致的性能表现
- 希望更小的打包体积
- 愿意尝试新兴技术

## 📄 许可证

MIT License

---

> 💡 **提示**：三个模板功能完全一致，可根据团队技术栈和项目需求自由选择。
