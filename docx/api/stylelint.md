# StyleLint 配置

## 📖 概述

`@tsoul/stylelint-config` 是一个统一的样式代码规范配置，支持 CSS、SCSS 和各种框架的样式处理。配置基于 StyleLint 标准规范，并针对 Vue 和 React 项目做了特别优化。

## 🎯 特性

- **多格式支持**: CSS、SCSS、HTML 内联样式
- **框架支持**: Vue SFC、React CSS-in-JS
- **自动排序**: 使用 recess-order 规则
- **最佳实践**: 继承官方推荐配置
- **灵活扩展**: 支持自定义规则配置
- **性能优化**: 智能文件过滤

## 📦 安装

### 包信息

- **包名**：`@tsoul/stylelint-config`
- **类型**：开发依赖
- **最新版本**：1.0.2

### 安装命令

::: code-group

```bash [pnpm (推荐)]
pnpm add -D @tsoul/stylelint-config
```

```bash [npm]
npm install -D @tsoul/stylelint-config
```

```bash [yarn]
yarn add -D @tsoul/stylelint-config
```

:::

## 🚀 快速开始

### 基础配置

```javascript
// stylelint.config.mjs
export default {
	extends: ['@tsoul/stylelint-config'],
}
```

## 📝 框架配置

### Vue 项目

```javascript
// stylelint.config.mjs
export default {
	extends: ['@tsoul/stylelint-config/vue'],
}
```

### React 项目

```javascript
// stylelint.config.mjs
export default {
	extends: ['@tsoul/stylelint-config/react'],
}
```

### Svelte 项目

```javascript
// stylelint.config.mjs
export default {
	extends: ['@tsoul/stylelint-config/svelte'],
}
```

## 🔧 规则配置

### 继承规则

```javascript
{
  extends: [
    'stylelint-config-standard',        // 标准规则
    'stylelint-config-recommended-scss', // SCSS 推荐规则
    'stylelint-config-recess-order'     // 属性排序规则
  ]
}
```

### 语法解析器

```javascript
{
	overrides: [
		{
			files: ['**/*.{css,scss}'],
			customSyntax: 'postcss-scss',
		},
		{
			files: ['**/*.html'],
			customSyntax: 'postcss-html',
		},
	]
}
```

### 自定义规则

```javascript
{
  rules: {
    // 允许特殊伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', ':deep']
      }
    ],

    // 类名命名规则
    'selector-class-pattern': null
  }
}
```

### 忽略文件

```javascript
{
	ignoreFiles: [
		'**/.husky',
		'**/.vscode',
		'**/node_modules/**',
		'**/coverage/**',
		'**/dist/**',
		'**/output/**',
		'**/stats.html',
	]
}
```

## 🎨 自定义配置

### 扩展规则

```javascript
// stylelint.config.mjs
export default {
	extends: ['@tsoul/stylelint-config'],
	rules: {
		// 你的自定义规则
	},
}
```

### 添加插件

```javascript
// stylelint.config.mjs
export default {
	extends: ['@tsoul/stylelint-config'],
	plugins: [
		// 添加额外的插件
	],
	rules: {
		// 插件规则配置
	},
}
```

## 🚨 常见问题

### 1. SCSS 语法错误

确保安装了正确的依赖：

::: code-group

```bash [pnpm (推荐)]
pnpm add postcss postcss-scss -D
```

```bash [npm]
npm install postcss postcss-scss -D
```

```bash [yarn]
yarn add postcss postcss-scss -D
```

:::

### 2. Vue 单文件组件样式检查

Vue SFC 的样式检查已经配置好了 `postcss-html` 解析器，无需额外配置。

### 3. 与 Prettier 的集成

建议同时使用 Prettier 进行代码格式化：

::: code-group

```bash [pnpm (推荐)]
pnpm add prettier -D
```

```bash [npm]
npm install prettier -D
```

```bash [yarn]
yarn add prettier -D
```

:::

## 📚 相关资源

- [StyleLint 官方文档](https://stylelint.io/)
- [SCSS 文档](https://sass-lang.com/)
- [PostCSS 文档](https://postcss.org/)
