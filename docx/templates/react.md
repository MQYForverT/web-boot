# React 模板

## 技术栈

- React 19.1
- TypeScript 5.8
- Vite 6.3
- React Router 7.5
- MobX 6.13
- Ant Design 5.24

## 项目结构

```bash
templates/react/
├── src/
│   ├── api/              # API 接口
│   ├── assets/           # 静态资源
│   ├── config/           # 全局配置
│   │   ├── config.ts     # 常量配置
│   │   └── request.ts    # Axios 请求封装
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面组件
│   ├── routers/          # 路由配置
│   │   ├── modules/      # 路由模块
│   │   └── index.tsx     # 路由主文件
│   ├── stores/           # 状态管理
│   │   ├── modules/      # 状态模块
│   │   └── index.ts      # 全局状态
│   ├── styles/           # 样式文件
│   ├── App.tsx          # 根组件
│   └── main.tsx         # 入口文件
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

- React Router 7.5 配置
  - 动态路由支持
  - 路由守卫
  - 路由懒加载
  - 页面标题自动设置
  - 路由错误处理
  - 路由进度条

### 3. 状态管理

- MobX 6.13 集成
  - 装饰器支持
  - 响应式状态
  - 模块化管理
  - 持久化存储
  - TypeScript 支持

### 4. 请求封装

- Axios 增强
  - Token 自动注入
  - 统一错误处理
  - 请求取消机制
  - 401 自动处理
  - 请求拦截器
  - 响应拦截器

### 5. UI 功能

- Ant Design 5.24 集成

  - React 19 兼容补丁
  - 组件按需加载
  - 主题定制
  - 暗黑模式

- UnoCSS 支持
  - 原子化 CSS
  - 自定义规则
  - 主题变量

### 6. 组件缓存

- KeepAlive 支持
  - 页面状态保持
  - 性能优化
  - 缓存控制

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

# ESLint 检查
pnpm lint:eslint

# 样式检查
pnpm lint:stylelint

# 代码格式化
pnpm lint:format
```

### 开发建议

1. 组件开发

   - 使用函数组件
   - 使用 React Hooks
   - 保持组件纯函数
   - 使用 TypeScript 类型

2. 状态管理

   - 使用 MobX 装饰器
   - 按模块拆分状态
   - 遵循响应式原则
   - 合理使用计算属性

3. 路由开发

   - 使用路由懒加载
   - 实现路由守卫
   - 处理异常情况
   - 使用 KeepAlive

4. 样式开发
   - 优先使用 UnoCSS
   - 遵循 BEM 命名
   - 使用 SCSS 变量
   - 注意样式隔离

## 注意事项

1. 版本兼容

   - React 19+
   - Node.js 16+
   - TypeScript 5.8+

2. 开发规范

   - 遵循 ESLint 规则
   - 使用 Prettier 格式化
   - 遵循 Git 提交规范

3. 性能优化
   - 使用组件懒加载
   - 合理使用 KeepAlive
   - 避免不必要的重渲染
   - 图片资源优化
