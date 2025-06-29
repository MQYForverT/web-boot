# Web-Boot 组件库

## 📖 概述

`components` 目录包含了 Web-Boot 项目的组件库系统，提供了企业级中后台应用所需的核心组件。组件库采用模块化设计，分为私有组件库和公共组件库两个部分，以满足不同的业务需求。

## 🏗️ 目录结构

```
components/
├── private/               # 私有组件库 (@mqy/component-private)
│   ├── src/
│   │   ├── components/
│   │   │   ├── BackgroundLayout/    # 中后台布局组件
│   │   │   ├── BackgroundLogin/     # 登录页面组件
│   │   │   ├── common/              # 通用工具组件
│   │   │   └── Example/             # 示例组件
│   │   └── testing-area/            # 组件测试区域
│   ├── dist/                        # 构建产物
│   └── package.json
└── public/                # 公共组件库 (@mqy/component-public) [开发中]
    ├── src/
    │   └── components/
    │       └── HelloWorld.vue       # 示例组件
    └── package.json
```

## 📦 组件库详情

### 🔒 私有组件库 (`@mqy/component-private`)

**定位**：企业内部专用的业务组件库，包含完整的中后台应用解决方案。

**技术栈**：

- **框架**：Vue 3.x + Composition API + TypeScript
- **构建工具**：Vite 6.x
- **UI 基础**：Element Plus 2.x
- **样式方案**：SCSS
- **测试框架**：Vitest + Vue Test Utils

**核心组件**：

#### 🎨 BackgroundLayout - 中后台布局组件

- **功能**：提供完整的中后台管理系统布局
- **特性**：
  - ✅ 响应式侧边栏菜单
  - ✅ 顶部导航栏
  - ✅ 面包屑导航
  - ✅ 页面标签管理
  - ✅ 全屏切换
  - ✅ 用户头像下拉菜单
  - ✅ 主题设置面板
  - ✅ 水印功能
  - ✅ 多语言支持

#### 🔐 BackgroundLogin - 登录页面组件

- **功能**：统一的登录页面解决方案
- **特性**：
  - ✅ 多种布局模式（左右布局、居中布局）
  - ✅ 表单验证
  - ✅ 记住密码
  - ✅ 验证码支持
  - ✅ 第三方登录集成
  - ✅ 响应式设计

#### 🛠️ Common - 通用组件

- **功能**：跨业务的通用组件和工具
- **包含**：
  - 全局状态管理
  - 主题配置
  - 工具函数
  - 样式重置

**使用方式**：

```bash
# 安装依赖
npm install @mqy/component-private

# 在项目中引入
import { registerAll } from '@mqy/component-private'
registerAll()
```

### 🌐 公共组件库 (`@mqy/component-public`)

**定位**：面向开源社区的通用组件库

**当前状态**：🚧 开发中，敬请期待...

后续将无限期时间来丰富通用 UI 组件。

## 🔄 组件库开发流程

### 本地开发

```bash
# 进入组件库目录
cd components/private  # 或 cd components/public

# 安装依赖
npm install

# 启动开发服务器
npm run start

# 运行测试
npm run test

# 构建组件库
npm run build
```

### 代码规范

```bash
# ESLint 检查
npm run lint:eslint

# 代码格式化
npm run lint:format

# 样式检查
npm run lint:stylelint
```

## 🌟 设计原则

### 统一性

- 所有组件遵循统一的设计规范
- 保持一致的 API 设计风格
- 统一的主题变量和样式规范

### 可扩展性

- 支持主题定制
- 提供丰富的配置选项
- 支持插槽和自定义渲染

### 高性能

- 按需加载，减少包体积
- 优化渲染性能
- 合理的缓存策略

### 类型安全

- 完整的 TypeScript 类型定义
- 严格的类型检查
- 优秀的开发体验

## 🚀 Web Components 支持

私有组件库采用 **Web Components** 技术，具有以下优势：

### 跨框架兼容

```javascript
// Vue 中使用
<mqy-background-layout :menu-list="menuList" />

// React 中使用
<mqy-background-layout menu-list={JSON.stringify(menuList)} />

// Svelte 中使用
<mqy-background-layout menu-list={JSON.stringify(menuList)} />

// 原生 HTML 中使用
<mqy-background-layout menu-list="[...]"></mqy-background-layout>
```

### 技术特性

- ✅ **封装性**：组件内部实现完全封装，不影响外部样式
- ✅ **复用性**：一次开发，多处使用，支持任意框架
- ✅ **标准化**：基于 W3C 标准，浏览器原生支持
- ✅ **独立性**：组件之间完全独立，互不干扰

## 📋 最佳实践

### 组件开发

- 遵循单一职责原则
- 提供清晰的 API 文档
- 编写完整的单元测试
- 考虑无障碍访问（a11y）

### 版本管理

- 遵循语义化版本规范
- 维护详细的更新日志
- 做好向后兼容性

### 性能优化

- 合理使用 Vue 3 的响应式特性
- 避免不必要的重渲染
- 优化组件的体积和加载速度

## 🔧 配置与集成

### 模板项目集成

私有组件库已完美集成到三个模板项目中：

```typescript
// Vue 模板
import { registerAll } from '@mqy/component-private'
registerAll()

// React 模板
import '@mqy/component-private'

// Svelte 模板
import { registerAll } from '@mqy/component-private'
registerAll()
```

### 全局配置

```typescript
import { setGlobalConfig } from '@mqy/component-private'

setGlobalConfig({
	language: {
		show: true,
		trigger: 'click',
		dropdownMenu: [
			{ key: 'zh-CN', value: '简体中文' },
			{ key: 'en', value: 'English' },
		],
	},
})
```

## 📈 发布与部署

### 私服发布

```bash
# 构建组件库
npm run build

# 发布到企业私服
npm publish --registry=https://your-private-registry.com
```

### 版本升级

```bash
# 升级补丁版本
npm version patch

# 升级次版本
npm version minor

# 升级主版本
npm version major
```

## 📄 许可证

MIT License

---

> 💡 **提示**：私有组件库专注于企业级应用场景，为中后台项目提供完整解决方案。公共组件库正在规划开发中，未来将面向开源社区提供通用组件。
