# Svelte 模板

## 技术栈

- Svelte 5.36
- TypeScript 5.8
- Vite 7.0
- Svelte SPA Router 4.0
- Svelte Use
- Page.js 1.11.6

## 项目结构

```bash
your-project-name/
├── src/
│   ├── api/              # API 接口
│   ├── assets/           # 静态资源
│   ├── config/           # 全局配置
│   │   ├── config.ts     # 常量配置
│   │   └── request.ts    # Axios 请求封装
│   ├── layouts/          # 布局组件
│   ├── lib/              # 组件库
│   ├── pages/            # 页面组件
│   ├── routers/          # 路由配置
│   │   ├── modules/      # 路由模块
│   │   └── index.ts      # 路由主文件
│   ├── stores/           # 状态管理
│   │   ├── modules/      # 状态模块
│   │   └── index.ts      # 全局状态
│   ├── styles/           # 样式文件
│   ├── types/            # 类型定义
│   ├── App.svelte       # 根组件
│   ├── main.ts          # 入口文件
│   └── vite-env.d.ts     # Vite 环境类型定义
├── public/              # 静态资源
│   └── vite.svg         # 图标文件
├── .vscode/             # VS Code 配置
├── .env                 # 环境变量（自动创建）
├── .env.development     # 开发环境变量（自动创建）
├── .env.production      # 生产环境变量（自动创建）
├── auto-imports.d.ts    # 自动导入类型定义
├── eslint.config.mjs    # ESLint 配置
├── index.html           # HTML 模板
├── package.json         # 依赖配置
├── README.md           # 项目说明
├── stylelint.config.mjs # Stylelint 配置
├── tsconfig.json        # TypeScript 配置
├── uno.config.ts        # UnoCSS 配置（自动复制）
└── vite.config.ts       # Vite 配置
```

## 特性

### 1. 开发体验

- TypeScript 支持
  - 完整的类型定义
  - 智能提示
  - 类型检查
  - Svelte 专用类型配置

- 代码规范
  - ESLint 配置
  - Prettier 格式化
  - StyleLint 样式检查

- 构建工具
  - Vite 快速构建
  - 热更新
  - 按需加载

### 2. 路由系统

- Svelte SPA Router 配置
  - 动态路由支持
  - 路由守卫
  - 路由懒加载
  - 页面标题自动设置
  - 路由错误处理
  - 路由进度条

### 3. 状态管理

- Svelte Stores
  - 响应式状态
  - 派生状态
  - 持久化存储
  - TypeScript 支持
  - 模块化管理

### 4. 请求封装

- Axios 增强
  - Token 自动注入
  - 统一错误处理
  - 请求取消机制
  - 401 自动处理
  - 请求拦截器
  - 响应拦截器

### 5. UI 功能

- 轻量级组件
  - 自定义组件库
  - 按需加载
  - 主题定制
  - 暗黑模式

- UnoCSS 支持
  - 原子化 CSS
  - 自定义规则
  - 主题变量

### 6. 工具集成

- Svelte Use
  - 常用组合式函数
  - 工具函数集合
  - TypeScript 支持

### 7. 国际化

- 多语言支持
  - 中英文切换
  - 动态加载
  - 全局配置

## 使用指南

### 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
# 开发环境
pnpm start

# 构建生产
pnpm build

# 预览生产
pnpm preview

# 类型检查
pnpm check

# ESLint 检查
pnpm lint:eslint

# 样式检查
pnpm lint:stylelint

# 代码格式化
pnpm lint:format
```

### 开发建议

1. 组件开发
   - 使用 Svelte 5 语法
   - 保持组件纯粹
   - 使用 TypeScript 类型
   - 遵循响应式原则

2. 状态管理
   - 使用 Svelte Stores
   - 合理使用派生状态
   - 按模块拆分状态
   - 注意状态持久化

3. 路由开发
   - 使用路由懒加载
   - 实现路由守卫
   - 处理异常情况
   - 管理路由元信息

4. 样式开发
   - 优先使用 UnoCSS
   - 遵循 BEM 命名
   - 使用 SCSS 变量
   - 注意样式隔离

## 注意事项

1. 版本兼容
   - Svelte 5.36+
   - Node.js 22+
   - TypeScript 5.8+
   - Vite 7.0+

2. 开发规范
   - 遵循 ESLint 规则
   - 使用 Prettier 格式化
   - 遵循 Git 提交规范

3. 性能优化
   - 使用组件懒加载
   - 避免不必要的状态更新
   - 合理使用派生状态
   - 图片资源优化
