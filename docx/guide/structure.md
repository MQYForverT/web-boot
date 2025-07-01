# 项目结构

## 目录概览

```
web-boot/
├── components/          # 组件库
│   ├── private/        # 私有组件（Vue + Element Plus）
│   └── public/         # 公共组件（基础组件）
├── templates/          # 项目模板
│   ├── vue/           # Vue 模板
│   ├── react/         # React 模板
│   └── svelte/        # Svelte 模板
├── internal/          # 内部工具
│   ├── eslint-config/ # ESLint 配置
│   ├── stylelint-config/ # Stylelint 配置
│   ├── vite-config/   # Vite 配置
│   └── utils/         # 工具函数
├── docx/              # 文档站点
├── scripts/           # 构建脚本
├── rules/             # 开发规范
├── types/             # 类型定义
└── 配置文件
```

## 详细说明

### components/ - 组件库

组件库分为两个部分：私有组件和公共组件。

#### private/ - 私有组件

基于 Vue 3 + Element Plus 开发的 Web Components 组件。

```
components/private/
├── src/
│   ├── components/
│   │   ├── BackgroundLayout/    # 后台布局组件
│   │   │   ├── component/       # 子组件
│   │   │   │   ├── AppMask/     # 应用遮罩
│   │   │   │   ├── AppSetting/  # 应用设置
│   │   │   │   ├── Aside/       # 侧边栏
│   │   │   │   ├── Footer/      # 页脚
│   │   │   │   ├── Header/      # 页头
│   │   │   │   ├── Layout/      # 布局组件
│   │   │   │   ├── LayoutCommon/ # 通用布局
│   │   │   │   ├── Main/        # 主内容区
│   │   │   │   └── NavTab/      # 导航标签
│   │   │   ├── hooks/           # 组合式函数
│   │   │   ├── constants/       # 常量定义
│   │   │   └── styles/          # 样式文件
│   │   └── BackgroundLogin/     # 登录组件
│   │       ├── component/       # 子组件
│   │       │   ├── Form/        # 表单组件
│   │       │   └── Top/         # 顶部组件
│   │       └── hooks/           # 组合式函数
│   ├── assets/                  # 静态资源
│   │   ├── svg/                # SVG 图标
│   │   └── menuList.ts         # 菜单配置
│   └── main.ts                 # 入口文件
├── package.json
├── vite.config.ts
└── tsconfig.json
```

**主要组件**:

- **BackgroundLayout**: 完整的后台管理系统布局组件
- **BackgroundLogin**: 登录页面组件

#### public/ - 公共组件

基础组件库，提供通用的 UI 组件。

```
components/public/
├── src/
│   ├── components/
│   │   └── HelloWorld.vue      # 示例组件
│   ├── assets/
│   └── main.ts
├── package.json
└── vite.config.ts
```

### templates/ - 项目模板

提供三种主流框架的完整项目模板。

#### vue/ - Vue 模板

基于 Vue 3 + TypeScript + Vite 的完整项目模板。

```
templates/vue/
├── src/
│   ├── api/                    # API 接口
│   │   └── global.ts
│   ├── config/                 # 配置文件
│   │   ├── config.ts
│   │   └── request.ts
│   ├── layouts/                # 布局组件
│   │   └── index.vue
│   ├── pages/                  # 页面组件
│   │   ├── ErrorMessage/       # 错误页面
│   │   │   ├── 403.vue
│   │   │   ├── 404.vue
│   │   │   └── 500.vue
│   │   ├── Home/              # 首页
│   │   ├── Login/             # 登录页
│   │   └── Menu/              # 菜单页面
│   ├── routers/               # 路由配置
│   │   ├── index.ts
│   │   └── modules/
│   ├── stores/                # 状态管理
│   │   ├── index.ts
│   │   └── modules/
│   ├── styles/                # 样式文件
│   │   └── index.scss
│   ├── types/                 # 类型定义
│   ├── App.vue
│   └── main.ts
├── package.json
├── vite.config.ts
└── tsconfig.json
```

#### react/ - React 模板

基于 React 18 + TypeScript + Vite 的完整项目模板。

```
templates/react/
├── src/
│   ├── api/                    # API 接口
│   ├── config/                 # 配置文件
│   ├── layouts/                # 布局组件
│   ├── pages/                  # 页面组件
│   ├── routers/                # 路由配置
│   ├── stores/                 # 状态管理
│   ├── styles/                 # 样式文件
│   ├── types/                  # 类型定义
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── tsconfig.json
```

#### svelte/ - Svelte 模板

基于 Svelte 4 + TypeScript + Vite 的完整项目模板。

```
templates/svelte/
├── src/
│   ├── api/                    # API 接口
│   ├── config/                 # 配置文件
│   ├── layouts/                # 布局组件
│   ├── pages/                  # 页面组件
│   ├── routers/                # 路由配置
│   ├── stores/                 # 状态管理
│   ├── styles/                 # 样式文件
│   ├── types/                  # 类型定义
│   ├── App.svelte
│   └── main.ts
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### internal/ - 内部工具

项目内部使用的工具和配置。

#### eslint-config/ - ESLint 配置

```
internal/eslint-config/
├── common/                     # 通用配置
│   ├── ignores.mjs            # 忽略文件配置
│   ├── js-config.mjs          # JavaScript 配置
│   └── ts-config.mjs          # TypeScript 配置
├── vue/                       # Vue 配置
├── react/                     # React 配置
├── svelte/                    # Svelte 配置
└── index.mjs                  # 主配置文件
```

#### stylelint-config/ - Stylelint 配置

```
internal/stylelint-config/
├── vue/                       # Vue 样式配置
├── react/                     # React 样式配置
└── index.mjs                  # 主配置文件
```

#### vite-config/ - Vite 配置

```
internal/vite-config/
├── common/                     # 通用配置
│   ├── autoImport/            # 自动导入配置
│   │   ├── autoImport.ts
│   │   ├── components_vue.ts
│   │   ├── cssInJs.ts
│   │   ├── icon.ts
│   │   ├── index.ts
│   │   └── style.ts
│   └── index.ts
├── plugins/                    # 插件配置
│   ├── common.ts
│   ├── compress.ts
│   ├── dts.ts
│   ├── index.ts
│   ├── inspect.ts
│   ├── unocss.ts
│   └── visualizer.ts
├── vue/                       # Vue 配置
├── react/                     # React 配置
├── svelte/                    # Svelte 配置
└── server.ts                  # 服务器配置
```

#### utils/ - 工具函数

```
internal/utils/
├── axios/                     # HTTP 请求工具
│   ├── downBlobFile.ts
│   └── index.ts
├── compatibleScrollTo/        # 滚动兼容工具
├── funcOverload/              # 函数重载工具
├── nprogress/                 # 进度条工具
├── typewriter/                # 打字机效果工具
├── global.d.ts                # 全局类型定义
├── index.ts                   # 工具函数入口
└── vite.config.ts
```

### docx/ - 文档站点

基于 VitePress 的文档站点。

```
docx/
├── .vitepress/                # VitePress 配置
│   └── config.mts
├── guide/                     # 指南文档
├── templates/                 # 模板文档
├── components/                # 组件文档
├── api/                       # API 文档
├── examples/                  # 示例文档
├── index.md                   # 首页
└── package.json
```

### rules/ - 开发规范

项目开发规范和最佳实践。

```
rules/
├── addfeature.md              # 添加功能规范
├── coding.md                  # 编码规范
├── codingplan.md              # 编码计划
├── hitbug.md                  # 问题修复规范
├── HLDesign.md                # 高级设计规范
├── LLDesign.md                # 低级设计规范
├── parsecallchain.md          # 调用链解析
├── parsecode.md               # 代码解析
├── parseconfig.md             # 配置解析
├── parseshell.md              # Shell 解析
├── prd.md                     # 产品需求文档
├── prdplan.md                 # 需求计划
├── raiseerr.md                # 错误处理
├── research.md                # 研究规范
├── reviewcode.md              # 代码审查
├── talking.md                 # 沟通规范
├── unitest.md                 # 单元测试
└── unitestplan.md             # 测试计划
```

### scripts/ - 构建脚本

项目构建和部署脚本。

```
scripts/
└── start.ts                   # 启动脚本
```

### 配置文件

根目录下的配置文件：

- `package.json` - 项目依赖和脚本
- `pnpm-workspace.yaml` - pnpm 工作区配置
- `tsconfig.base.json` - TypeScript 基础配置
- `tsconfig.json` - TypeScript 配置
- `tsconfig.node.json` - Node.js TypeScript 配置
- `eslint.config.mjs` - ESLint 配置
- `stylelint.config.mjs` - Stylelint 配置
- `prettier.config.js` - Prettier 配置
- `uno.config.ts` - UnoCSS 配置
- `commitlint.config.mjs` - Git 提交规范配置

## 设计原则

### 1. 模块化设计

每个功能模块都是独立的，可以单独使用和维护。

### 2. 可复用性

组件和工具函数都设计为可复用的，支持在不同项目中引用。

### 3. 类型安全

全面使用 TypeScript，提供完整的类型定义和类型检查。

### 4. 现代化工具链

使用最新的前端工具和最佳实践，确保开发效率和代码质量。

### 5. 跨框架支持

通过 Web Components 技术，实现跨框架的组件复用。
