# 模板介绍

Web Boot 提供三种主流前端框架的项目模板，每个模板都包含完整的后台管理系统功能。

## 模板对比

| 特性      | Vue 模板      | React 模板    | Svelte 模板     |
| --------- | ------------- | ------------- | --------------- |
| 框架版本  | Vue 3.5+      | React 18+     | Svelte 5+       |
| 构建工具  | Vite          | Vite          | Vite            |
| 类型支持  | TypeScript    | TypeScript    | TypeScript      |
| 状态管理  | Pinia         | Zustand       | Writable Stores |
| 路由管理  | Vue Router    | React Router  | page.js         |
| UI 组件库 | Element Plus  | Ant Design    | 自定义组件      |
| 样式方案  | SCSS + UnoCSS | SCSS + UnoCSS | SCSS + UnoCSS   |

## 共同特性

所有模板都包含以下核心功能：

### 🔐 身份认证

- 完整的登录/注销流程
- JWT Token 管理
- 路由权限控制
- 用户信息管理

### 🎨 布局系统

- 响应式设计
- 多种布局模式切换
- 侧边栏折叠/展开
- 面包屑导航
- 标签页管理

### 🌈 主题系统

- 明暗模式切换
- 自定义主题色
- 动态主题切换动画
- 主题配置持久化

### 🛠️ 开发体验

- 热模块替换 (HMR)
- ESLint + Prettier 代码规范
- Stylelint 样式规范
- TypeScript 类型检查
- Vite 构建优化

### 📱 响应式设计

- 移动端适配
- 触摸手势支持
- 自适应布局
- 媒体查询优化

## 选择建议

### 选择 Vue 模板 如果您：

- 熟悉 Vue 3 生态系统
- 需要丰富的 UI 组件库支持
- 偏好模板语法和指令系统
- 团队有 Vue 开发经验

### 选择 React 模板 如果您：

- 熟悉 React 生态系统
- 需要大型应用的状态管理
- 偏好 JSX 语法
- 团队有 React 开发经验

### 选择 Svelte 模板 如果您：

- 追求更小的包体积
- 需要更好的运行时性能
- 喜欢简洁的语法
- 想尝试新技术栈

## 快速开始

选择您偏好的模板后，按照以下步骤开始开发：

```bash
# 进入对应模板目录
cd templates/[vue|react|svelte]

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

每个模板都有详细的使用文档，请点击相应的模板链接查看具体配置和使用方法。
