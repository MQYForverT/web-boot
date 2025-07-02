# Web-Boot 内部工具集

## 📖 概述

`internal` 目录包含了 Web-Boot 项目的内部工具集，提供统一的开发配置、构建工具和实用函数。这些工具包确保整个项目生态的一致性和开发效率，为所有模板和组件库提供基础支撑。

## 🏗️ 目录结构

```
internal/
├── eslint-config/          # ESLint 配置包 (@tsoul/eslint-config)
│   ├── common/             # 通用配置
│   ├── vue/                # Vue 专用配置
│   ├── react/              # React 专用配置
│   ├── svelte/             # Svelte 专用配置
│   └── index.mjs           # 入口文件
├── stylelint-config/       # Stylelint 配置包 (@tsoul/stylelint-config)
│   ├── vue/                # Vue 样式规范
│   ├── react/              # React 样式规范
│   └── index.mjs           # 入口文件
├── utils/                  # 工具函数库 (@tsoul/utils)
│   ├── axios/              # HTTP 请求封装
│   ├── nprogress/          # 进度条工具
│   ├── typewriter/         # 打字机效果
│   ├── funcOverload/       # 函数重载工具
│   ├── compatibleScrollTo/ # 兼容性滚动
│   └── index.ts            # 导出入口
├── vite-config/            # Vite 配置包 (@tsoul/vite-config)
│   ├── common/             # 通用 Vite 配置
│   ├── vue/                # Vue 项目配置
│   ├── react/              # React 项目配置
│   └── svelte/             # Svelte 项目配置
└── tsconfig.json           # 通用 TypeScript 配置
```

## 📦 工具包详情

### 🔧 ESLint 配置 (`@tsoul/eslint-config`)

**功能**：提供统一的代码规范检查配置

**支持框架**：

- ✅ **Common** - 通用 JavaScript/TypeScript 规则
- ✅ **Vue** - Vue 3 + Composition API 规范
- ✅ **React** - React 18 + Hooks 规范
- ✅ **Svelte** - Svelte 5 规范

**使用方式**：

```javascript
// eslint.config.mjs
import { defineConfig } from '@tsoul/eslint-config'

export default defineConfig({
	// Vue 项目
	extends: ['@tsoul/eslint-config/vue'],

	// React 项目
	extends: ['@tsoul/eslint-config/react'],

	// Svelte 项目
	extends: ['@tsoul/eslint-config/svelte'],
})
```

**核心特性**：

- 🎯 TypeScript 严格模式支持
- 🎨 Prettier 集成
- 🔍 Import 规则优化
- ⚡ UnoCSS 规则支持

### 🎨 Stylelint 配置 (`@tsoul/stylelint-config`)

**功能**：提供统一的样式代码规范

**支持框架**：

- ✅ **Vue** - Vue SFC 样式规范
- ✅ **React** - CSS/SCSS 样式规范

**使用方式**：

```javascript
// stylelint.config.mjs
export default {
	extends: ['@tsoul/stylelint-config/vue'],
}
```

**核心特性**：

- 📏 SCSS/CSS 规则统一
- 🔤 选择器命名规范
- 📐 代码格式化规则
- 🎭 Vue SFC 样式支持

### 🛠️ 工具函数库 (`@tsoul/utils`)

**功能**：提供项目中常用的工具函数

**工具模块**：

#### 🌐 Axios 封装

- **功能**：HTTP 请求统一封装
- **特性**：
  - 请求/响应拦截器
  - 错误统一处理
  - 文件下载支持
  - 取消请求机制

#### 📊 NProgress

- **功能**：页面加载进度条
- **特性**：
  - 路由切换进度显示
  - 自定义样式支持
  - 轻量级实现

#### ⌨️ Typewriter

- **功能**：打字机文字效果
- **特性**：
  - 可配置打字速度
  - 支持删除效果
  - 循环播放支持

#### 🔄 FuncOverload

- **功能**：函数重载工具
- **特性**：
  - TypeScript 类型安全
  - 参数类型推断
  - 多种调用方式支持

#### 📜 CompatibleScrollTo

- **功能**：兼容性滚动工具
- **特性**：
  - 浏览器兼容性处理
  - 平滑滚动动画
  - 位置精确控制

**使用方式**：

```typescript
import { httpRequest, downBlobFile, nprogress, typewriter } from '@tsoul/utils'

// HTTP 请求
const data = await httpRequest.get('/api/users')

// 文件下载
downBlobFile(blob, 'filename.pdf')

// 进度条
nprogress.start()
nprogress.done()
```

### ⚡ Vite 配置 (`@tsoul/vite-config`)

**功能**：提供统一的 Vite 构建配置

**支持框架**：

- ✅ **Common** - 通用插件和配置
- ✅ **Vue** - Vue 项目专用配置
- ✅ **React** - React 项目专用配置
- ✅ **Svelte** - Svelte 项目专用配置

**核心插件**：

- 🎨 **UnoCSS** - 原子化 CSS 框架
- 📦 **Auto Import** - 自动导入 API
- 🔧 **Components** - 组件自动注册
- 📊 **Bundle Analyzer** - 打包分析
- 🗜️ **Compression** - 资源压缩
- 🔍 **Inspect** - 构建过程调试
- 🧪 **Vitest** - 单元测试支持

**使用方式**：

```typescript
// vite.config.ts
import { defineConfig } from '@tsoul/vite-config/vue'

export default defineConfig({
	// 项目特定配置
})
```

## 🔄 开发流程

### 本地开发

```bash
# 进入工具包目录
cd internal/[package-name]

# 安装依赖
npm install

# 构建（如果需要）
npm run build
```

### 发布流程

```bash
# 版本升级
npm version patch|minor|major

# 发布到私有 npm
npm publish --registry=https://your-private-registry.com
```

## 🌟 设计原则

### 统一性

- 所有配置遵循相同的规范和约定
- 保持跨框架的一致性体验
- 统一的 API 设计风格

### 可维护性

- 模块化设计，职责单一
- 详细的类型定义和文档
- 完善的测试覆盖

### 可扩展性

- 支持自定义配置覆盖
- 插件化架构设计
- 向后兼容性保证

### 高性能

- 最小化依赖
- 按需加载支持
- 构建优化配置

## 📋 使用统计

### 配置包使用情况

```
templates/vue/     ✅ 使用 @tsoul/eslint-config/vue
templates/react/   ✅ 使用 @tsoul/eslint-config/react
templates/svelte/  ✅ 使用 @tsoul/eslint-config/svelte
components/        ✅ 使用 @tsoul/vite-config/vue
```

### 工具函数集成

```
所有模板项目    ✅ 集成 @tsoul/utils
组件库项目      ✅ 集成 @tsoul/vite-config
```

## 🚀 最佳实践

### 配置使用

- 优先使用预设配置，减少重复工作
- 基于项目需求进行合理的配置覆盖
- 保持配置的简洁性和可读性

### 工具函数

- 优先使用内部工具函数，确保一致性
- 遵循函数式编程原则
- 注重类型安全和错误处理

### 版本管理

- 遵循语义化版本规范
- 做好向后兼容性考虑
- 及时更新依赖和修复问题

## 📄 许可证

MIT License

---

> 💡 **提示**：内部工具集为整个 Web-Boot 生态提供基础支撑，确保开发体验的一致性和高效性。
