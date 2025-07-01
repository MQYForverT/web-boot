# 项目模板

## 概述

Web Boot 提供了三种主流前端框架的完整项目模板，每个模板都包含现代化的开发工具链和最佳实践。模板使用最新的框架版本，并保持定期更新。

## 模板列表

### 🟢 Vue 模板

基于 Vue 3.5 + TypeScript 5.8 + Vite 6.3 的现代化项目模板。

**特性**:

- Vue 3.5 Composition API
- TypeScript 5.8 支持
- Vite 6.3 构建工具
- Vue Router 4.5 路由管理
- Element Plus 2.9 UI 组件库
- UnoCSS 原子化 CSS
- ESLint + Prettier 代码规范

[查看详情 →](./vue)

### 🔵 React 模板

基于 React 19 + TypeScript 5.8 + Vite 6.3 的现代化项目模板。

**特性**:

- React 19 Hooks
- TypeScript 5.8 支持
- Vite 6.3 构建工具
- React Router 7.5 路由管理
- MobX 6.13 状态管理
- Ant Design 5.24 UI 组件库
- UnoCSS 原子化 CSS
- ESLint + Prettier 代码规范

[查看详情 →](./react)

### 🟡 Svelte 模板

基于 Svelte 5.23 + TypeScript 5.7 + Vite 6.3 的现代化项目模板。

**特性**:

- Svelte 5.23 响应式系统
- TypeScript 5.7 支持
- Vite 6.3 构建工具
- Svelte SPA Router 路由管理
- Svelte Stores 状态管理
- 轻量级 UI 组件
- UnoCSS 原子化 CSS
- ESLint + Prettier 代码规范

[查看详情 →](./svelte)

## 快速开始

### 使用模板创建项目

```bash
# 创建 Vue 项目
pnpm create:vue my-vue-app

# 创建 React 项目
pnpm create:react my-react-app

# 创建 Svelte 项目
pnpm create:svelte my-svelte-app
```

### 手动使用模板

```bash
# 复制模板到新目录
cp -r templates/vue my-vue-app
cd my-vue-app

# 安装依赖
pnpm install

# 启动开发服务器
pnpm start
```

## 模板结构

所有模板都遵循统一的项目结构：

```
template-name/
├── src/
│   ├── api/              # API 接口
│   ├── assets/           # 静态资源
│   ├── config/           # 配置文件
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面组件
│   ├── routers/          # 路由配置
│   ├── stores/           # 状态管理
│   ├── styles/           # 样式文件
│   ├── types/            # 类型定义
│   ├── App.*            # 根组件
│   └── main.*           # 入口文件
├── public/              # 静态资源
├── package.json         # 依赖配置
├── vite.config.ts       # Vite 配置
├── tsconfig.json        # TypeScript 配置
└── README.md           # 项目说明
```

## 共同特性

### 1. 开发工具

所有模板都集成了以下开发工具：

- **ESLint**: 代码质量检查
- **Stylelint**: 样式代码检查
- **Prettier**: 代码格式化
- **TypeScript**: 类型检查
- **Husky**: Git Hooks
- **Commitlint**: 提交信息规范

### 2. 构建工具

- **Vite 6.3**: 极速构建工具
- **UnoCSS**: 原子化 CSS
- **自动导入**: 组件和 API 自动导入
- **热更新**: 开发时热更新
- **代码分割**: 生产环境代码分割

### 3. 项目结构

- **模块化**: 清晰的目录结构
- **类型安全**: 完整的 TypeScript 支持
- **路由管理**: 现代化的路由系统
- **状态管理**: 轻量级状态管理
- **API 封装**: 统一的 API 请求封装
- **国际化**: 多语言支持
- **主题**: 支持暗黑模式

### 4. 开发体验

- **智能提示**: 完整的类型提示
- **错误检查**: 实时代码错误检查
- **格式化**: 自动代码格式化
- **调试**: 完整的调试支持
- **请求管理**: 请求自动取消
- **进度反馈**: 路由加载进度条

## 选择建议

### 选择 Vue 模板，如果：

- 团队熟悉 Vue 生态
- 需要快速开发原型
- 喜欢渐进式框架
- 需要丰富的 UI 组件库

### 选择 React 模板，如果：

- 团队熟悉 React 生态
- 需要大型应用开发
- 喜欢函数式编程
- 需要丰富的第三方库

### 选择 Svelte 模板，如果：

- 追求极致的性能
- 喜欢简洁的语法
- 需要轻量级应用
- 想要更少的样板代码

## 自定义模板

### 修改现有模板

1. 在 `templates/` 目录下找到对应模板
2. 根据需要修改配置和代码
3. 测试修改后的模板
4. 提交更改

### 创建新模板

1. 在 `templates/` 目录下创建新文件夹
2. 复制现有模板作为基础
3. 根据框架特性进行调整
4. 更新文档和配置

## 最佳实践

### 1. 项目命名

使用有意义的项目名称，避免使用保留字：

```bash
# 推荐
my-vue-app
user-management-system
ecommerce-platform

# 避免
vue
react
test
```

### 2. 依赖管理

- 使用 `pnpm` 作为包管理器
- 定期更新依赖版本
- 使用 `pnpm-lock.yaml` 锁定版本

### 3. 代码规范

- 遵循项目的 ESLint 和 Prettier 配置
- 使用 TypeScript 编写代码
- 编写单元测试

### 4. 版本控制

- 使用 Git 进行版本控制
- 遵循提交信息规范
- 定期提交代码

## 常见问题

### 模板创建失败

1. 检查 Node.js 和 pnpm 版本
2. 确保有足够的磁盘空间
3. 检查网络连接

### 依赖安装失败

1. 清除缓存：`pnpm store prune`
2. 删除 `node_modules` 重新安装
3. 检查 `.npmrc` 配置

### 开发服务器启动失败

1. 检查端口是否被占用
2. 检查配置文件语法
3. 查看错误日志

## 更新日志

### v1.0.0

- 初始版本发布
- 支持 Vue、React、Svelte 三种框架
- 集成完整的开发工具链
- 提供统一的项目结构
