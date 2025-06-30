# 框架集成示例

## 📖 概述

`templates` 目录提供了三个主流前端框架的**完整集成示例**，展示如何在不同技术栈中使用 Web Boot 的组件库和开发工具。这些不是独立的项目模板，而是学习和参考的示例代码。

## 🎯 示例目标

- **学习参考**：展示 Web Boot 组件在不同框架中的集成方法
- **快速上手**：提供完整的集成流程和最佳实践
- **对比学习**：通过对比了解各框架的差异和特点
- **组件演示**：展示 `@mqy/component-private` 组件库的完整功能
- **工具集成**：演示如何使用 Web Boot 开发工具集

## 📁 示例列表

### 🟢 Vue 集成示例 (`vue/`)

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

### ⚛️ React 集成示例 (`react/`)

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

### 🔥 Svelte 集成示例 (`svelte/`)

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

## 🚀 运行示例

### 1. 选择示例

```bash
# Vue 集成示例
cd templates/vue
npm install
npm run dev

# React 集成示例
cd templates/react
npm install
npm run dev

# Svelte 集成示例
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

## 🎨 集成要点

所有示例都展示了如何集成 `@mqy/component-private` 组件库：

- **mqy-background-layout** - 中后台布局组件的使用方法
- **mqy-background-login** - 登录页面组件的集成方式
- **主题配置** - 如何配置和切换主题
- **路由集成** - 如何与各框架路由系统结合

## 💡 学习建议

### 如何使用这些示例

1. **选择熟悉的框架**：从您最熟悉的框架示例开始学习
2. **对比学习**：观察同一功能在不同框架中的实现差异
3. **参考集成**：将学到的集成方法应用到您的实际项目
4. **组件文档**：配合 [组件文档](/components/) 深入了解组件用法

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
