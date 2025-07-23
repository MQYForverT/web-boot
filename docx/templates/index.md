# 项目模板

## 概述

Web Boot 提供了三种主流前端框架的完整项目模板，每个模板都包含现代化的开发工具链和最佳实践。模板使用最新的框架版本，并保持定期更新。

> 💡 **想要体验模板效果？** 请访问 [🎯 首页在线演示](/) 查看完整的功能展示

## 创建方式

::: code-group

```bash [npx (推荐)]
# 无需安装，直接运行脚手架
npx @tsoul/create-webboot-template
```

```bash [pnpm]
# 使用 pnpm 创建
pnpm create @tsoul/webboot-template
```

```bash [npm]
# 全局安装脚手架工具
npm install -g @tsoul/create-webboot-template

# 运行脚手架
create-webboot-template
```

:::

脚手架会引导您完成以下步骤：

- 输入项目名称（只能包含小写字母、数字和连字符）
- 选择项目模板（Vue/React/Svelte）
- 选择包管理器（推荐使用 pnpm）

#### 4. 启动项目

```bash
# 进入项目目录
cd your-project-name

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 脚手架特性

### 🎯 智能文件管理

脚手架会自动为您设置完整的项目环境：

- **环境变量文件**: 自动复制 `.env`、`.env.development`、`.env.production` 到项目根目录
- **UnoCSS 配置**: 自动复制 `uno.config.ts` 配置文件
- **类型定义**: 自动将类型定义文件复制到 `src` 目录，无需额外引用
- **配置清理**: 自动清理 `vite.config.ts` 中的 `envDir` 配置
- **TypeScript 优化**: 自动更新 `tsconfig.json`，删除不必要的类型引用

### 📁 完整的项目结构

创建的项目包含完整的目录结构和配置文件：

```
your-project-name/
├── src/
│   ├── api/              # API 接口
│   ├── assets/           # 静态资源
│   ├── config/           # 配置文件
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面组件
│   ├── routers/          # 路由配置
│   ├── stores/           # 状态管理
│   ├── styles/           # 样式文件
│   ├── route.d.ts        # 路由类型定义（自动复制）
│   ├── App.*            # 根组件
│   └── main.*           # 入口文件
├── public/              # 静态资源
├── .env                 # 环境变量（自动复制）
├── .env.development     # 开发环境变量（自动复制）
├── .env.production      # 生产环境变量（自动复制）
├── uno.config.ts        # UnoCSS 配置（自动复制）
├── package.json         # 依赖配置
├── vite.config.ts       # Vite 配置（已优化）
├── tsconfig.json        # TypeScript 配置（已优化）
└── README.md           # 项目说明
```

## 模板列表

### 🟢 Vue 模板

基于 Vue 3.5 + TypeScript 5.8 + Vite 7.0 的现代化项目模板。

**特性**:

- Vue 3.5 Composition API
- TypeScript 5.8 支持
- Vite 7.0 构建工具
- Vue Router 4.5 路由管理
- Element Plus 2.10 UI 组件库
- UnoCSS 原子化 CSS
- ESLint + Prettier 代码规范

[查看详情 →](./vue)

### 🔵 React 模板

基于 React 19 + TypeScript 5.8 + Vite 7.0 的现代化项目模板。

**特性**:

- React 19 Hooks
- TypeScript 5.8 支持
- Vite 7.0 构建工具
- React Router 7.7 路由管理
- MobX 6.13 状态管理
- Ant Design 5.26 UI 组件库
- UnoCSS 原子化 CSS
- ESLint + Prettier 代码规范

[查看详情 →](./react)

### 🟡 Svelte 模板

基于 Svelte 5.36 + TypeScript 5.8 + Vite 7.0 的现代化项目模板。

**特性**:

- Svelte 5.36 响应式系统
- TypeScript 5.8 支持
- Vite 7.0 构建工具
- Svelte SPA Router 路由管理
- Svelte Stores 状态管理
- 轻量级 UI 组件
- UnoCSS 原子化 CSS
- ESLint + Prettier 代码规范

[查看详情 →](./svelte)

## 快速开始

### 使用脚手架创建项目

我们提供了一个交互式的脚手架工具来创建项目：

```bash
# 方式一：npx 直接创建（推荐）
npx @tsoul/create-webboot-template

# 方式二：使用 pnpm
pnpm create @tsoul/webboot-template

# 方式三：全局安装后使用
npm install -g @tsoul/create-webboot-template
create-webboot-template
```

脚手架会引导您完成以下步骤：

1. **输入项目名称**：
   - 只能包含小写字母、数字和连字符
   - 例如：my-vue-app

2. **选择项目模板**：
   - Vue (Vue 3 + TypeScript + Vite)
   - React (React + TypeScript + Vite)
   - Svelte (Svelte + TypeScript + Vite)

3. **选择包管理器**：
   - pnpm（推荐）
   - npm
   - yarn

创建完成后，脚手架会自动：

- 创建项目目录结构
- 复制模板文件
- 复制环境变量文件到项目根目录
- 复制 UnoCSS 配置文件
- 将类型定义文件复制到 src 目录
- 清理和优化 Vite 配置
- 更新 TypeScript 配置
- 生成完整的 package.json

### 环境变量配置

脚手架会自动为您创建三个环境变量文件：

#### `.env` - 基础环境变量

```bash
# 基础环境变量
VITE_APP_TITLE=Web Boot
VITE_APP_BASE_URL=/
```

#### `.env.development` - 开发环境变量

```bash
# 开发环境变量
VITE_APP_TITLE=Web Boot (Development)
VITE_APP_BASE_URL=/
VITE_APP_API_URL=http://localhost:3000/api
VITE_APP_ENV=development
```

#### `.env.production` - 生产环境变量

```bash
# 生产环境变量
VITE_APP_TITLE=Web Boot
VITE_APP_BASE_URL=/
VITE_APP_API_URL=https://api.yourdomain.com
VITE_APP_ENV=production
```

### 启动项目

按照终端提示，执行以下命令：

```bash
# 进入项目目录
cd 项目名称

# 安装依赖
pnpm install  # 或 npm install / yarn

# 启动开发服务器
pnpm dev      # 或 npm run dev / yarn dev
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

- **Vite 7.0**: 极速构建工具
- **UnoCSS**: 原子化 CSS（自动配置）
- **自动导入**: 组件和 API 自动导入
- **热更新**: 开发时热更新
- **代码分割**: 生产环境代码分割

### 3. 项目结构

- **模块化**: 清晰的目录结构
- **类型安全**: 完整的 TypeScript 支持（类型文件自动复制到 src）
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

### 环境变量不生效

1. 确保文件名正确（`.env`、`.env.development`、`.env.production`）
2. 确保变量名以 `VITE_` 开头
3. 重启开发服务器

### TypeScript 类型错误

1. 确保 `src/route.d.ts` 文件存在
2. 重启 TypeScript 服务器
3. 检查 `tsconfig.json` 配置

## 更新日志

### v1.0.12

- **重大更新**: 重构脚手架文件管理逻辑
- **新增**: 自动复制环境变量文件到项目根目录
- **新增**: 自动复制 UnoCSS 配置文件
- **新增**: 类型文件自动迁移到 src 目录
- **优化**: 自动清理 vite.config.ts 中的 envDir 配置
- **优化**: 自动更新 tsconfig.json 配置
- **改进**: 使用 Promise.all 并行处理文件操作，提升性能
- **修复**: 解决类型文件引用路径问题

### v1.0.0

- 初始版本发布
- 支持 Vue、React、Svelte 三种框架
- 集成完整的开发工具链
- 提供统一的项目结构
