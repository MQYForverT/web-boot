# ESLint 配置

## 📖 概述

`@mqy/eslint-config` 是一个完整的 ESLint 配置解决方案，支持 Vue、React、Svelte 等多个框架，并提供了统一的代码规范和最佳实践。配置基于 ESLint 的 Flat Config 格式，提供了更好的性能和扩展性。

## 🎯 特性

- **多框架支持**: Vue 3、React、Svelte
- **TypeScript**: 内置 TypeScript 支持
- **Prettier**: 集成 Prettier 格式化
- **UnoCSS**: 支持 UnoCSS 规则检查
- **自动修复**: 支持自动修复常见问题
- **性能优化**: 使用 Flat Config 提升性能

## 🚀 快速开始

### 安装

```bash
npm install @mqy/eslint-config -D
```

### 基础配置

```javascript
// eslint.config.mjs
import { defineFlatConfig } from '@mqy/eslint-config'

export default defineFlatConfig([
	// 你的配置
])
```

## 📝 框架配置

### Vue 项目

```javascript
// eslint.config.mjs
import vueConfig from '@mqy/eslint-config/vue'

export default vueConfig
```

主要规则：

- 组件命名规范
- Props 默认值要求
- 组件定义检查
- TypeScript 支持
- Vue 3 最佳实践

### React 项目

```javascript
// eslint.config.mjs
import reactConfig from '@mqy/eslint-config/react'

export default reactConfig
```

### Svelte 项目

```javascript
// eslint.config.mjs
import svelteConfig from '@mqy/eslint-config/svelte'

export default svelteConfig
```

## 🔧 规则配置

### 通用规则

```javascript
{
  // 未使用变量检查
  'no-unused-vars': ['error', {
    argsIgnorePattern: '^_' // 忽略下划线开头的参数
  }],

  // 变量声明
  'no-redeclare': 'error',
  'prefer-const': 'error',

  // Prettier 集成
  ...configPrettier.rules,
  ...pluginPrettier.configs.recommended.rules
}
```

### Vue 规则

```javascript
{
  // Props 默认值
  'vue/require-default-prop': 'error',

  // 组件命名
  'vue/multi-word-component-names': 'off',

  // 组件定义检查
  'vue/no-undef-components': ['error', {
    ignorePatterns: ['(mqy|el|router)(\\-\\w+)+']
  }]
}
```

## 🎨 自定义配置

### 扩展规则

```javascript
// eslint.config.mjs
import vueConfig from '@mqy/eslint-config/vue'
import { defineFlatConfig } from 'eslint-define-config'

export default defineFlatConfig([
	...vueConfig,
	{
		rules: {
			// 你的自定义规则
		},
	},
])
```

### 忽略文件

```javascript
{
	ignores: [
		'**/dist',
		'**/node_modules',
		// 添加其他忽略路径
	]
}
```

## 🚨 常见问题

### 1. 规则冲突

如果遇到与 Prettier 的规则冲突，配置已经自动处理了这个问题，因为我们：

- 继承了 `eslint-config-prettier`
- 集成了 `eslint-plugin-prettier`

### 2. 性能问题

如果遇到性能问题，可以：

- 使用 `.eslintignore` 排除不需要检查的文件
- 确保使用最新版本的 ESLint
- 使用 Flat Config 配置格式

## 📚 相关资源

- [ESLint 官方文档](https://eslint.org/)
- [Prettier 官方文档](https://prettier.io/)
- [TypeScript ESLint](https://typescript-eslint.io/)
