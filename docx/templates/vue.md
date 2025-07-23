# Vue 模板

## 技术栈

- Vue 3.5
- TypeScript 5.8
- Vite 7.0
- Vue Router 4.5
- Element Plus 2.10
- UnoCSS

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
│   ├── pages/            # 页面组件
│   ├── router/           # Vue Router 配置
│   ├── routers/          # 路由配置
│   │   ├── modules/      # 路由模块
│   │   └── index.ts      # 路由主文件
│   ├── stores/           # 状态管理
│   ├── styles/           # 样式文件
│   ├── App.vue           # 根组件
│   ├── main.ts           # 入口文件
│   └── vite-env.d.ts     # Vite 环境类型定义
├── public/              # 静态资源
│   └── favicon.ico      # 网站图标
├── .env                 # 环境变量（自动创建）
├── .env.development     # 开发环境变量（自动创建）
├── .env.production      # 生产环境变量（自动创建）
├── auto-imports.d.ts    # 自动导入类型定义
├── components.d.ts      # 组件类型定义
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

- 代码规范
  - ESLint 配置
  - Prettier 格式化
  - StyleLint 样式检查

- 构建工具
  - Vite 快速构建
  - 热更新
  - 按需加载

### 2. 路由系统

- Vue Router 4.5 配置
  - 动态路由支持
  - 权限控制
  - 路由守卫
  - 页面标题自动设置
  - 路由错误处理

### 3. 请求封装

- Axios 增强
  - Token 自动注入
  - 统一错误处理
  - 请求取消机制
  - 文件下载支持
  - 请求拦截器
  - 响应拦截器

### 4. UI 功能

- Element Plus 2.10 集成
  - 组件按需加载
  - 主题定制
  - 暗黑模式

- UnoCSS 支持
  - 原子化 CSS
  - 自定义规则
  - 主题变量

### 5. 国际化

- 中英文支持
- 语言切换
- 动态加载

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

# ESLint 检查
pnpm lint:eslint

# 样式检查
pnpm lint:stylelint

# 代码格式化
pnpm lint:format
```

### 开发建议

1. 组件开发
   - 使用 Composition API
   - 保持组件单一职责
   - 使用 TypeScript 类型

2. 样式开发
   - 优先使用 UnoCSS
   - 遵循 BEM 命名
   - 使用 SCSS 变量

3. 路由开发
   - 按模块组织
   - 实现权限控制
   - 处理异常情况

4. 状态管理
   - 按模块拆分
   - 使用 TypeScript
   - 保持状态精简

## 注意事项

1. 版本兼容
   - Vue 3.5+
   - Node.js 22+
   - TypeScript 5.8+
   - Vite 7.0+

2. 开发规范
   - 遵循 ESLint 规则
   - 使用 Prettier 格式化
   - 遵循 Git 提交规范

3. 性能优化
   - 组件按需加载
   - 路由懒加载
   - 图片资源优化
