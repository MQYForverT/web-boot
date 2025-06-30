# ESLint 配置

**@mqy/eslint-config** - 统一的代码规范配置包，支持 Vue、React、Svelte 三大框架。

## 📦 安装

```bash
npm install @mqy/eslint-config --save-dev
```

## 🚀 快速开始

### Vue 项目

```javascript
// eslint.config.mjs
import { defineConfig } from '@mqy/eslint-config'

export default defineConfig({
	extends: ['@mqy/eslint-config/vue'],
})
```

### React 项目

```javascript
// eslint.config.mjs
import { defineConfig } from '@mqy/eslint-config'

export default defineConfig({
	extends: ['@mqy/eslint-config/react'],
})
```

### Svelte 项目

```javascript
// eslint.config.mjs
import { defineConfig } from '@mqy/eslint-config'

export default defineConfig({
	extends: ['@mqy/eslint-config/svelte'],
})
```

## 🔧 配置选项

### 基础配置

**JavaScript/TypeScript 通用规则**：

- 代码质量检查
- 最佳实践规则
- 变量命名规范
- 函数复杂度控制

**代码格式化**：

- 集成 Prettier 规则
- 统一缩进和空格
- 自动修复格式问题

### Vue 特定规则

```javascript
export default defineConfig({
	extends: ['@mqy/eslint-config/vue'],
	rules: {
		// Vue 3 Composition API 规范
		'vue/component-definition-name-casing': ['error', 'PascalCase'],
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'vue/custom-event-name-casing': ['error', 'camelCase'],

		// 组件结构规范
		'vue/component-tags-order': [
			'error',
			{
				order: ['script', 'template', 'style'],
			},
		],

		// 响应式数据规范
		'vue/no-ref-as-operand': 'error',
		'vue/no-setup-props-destructure': 'error',
	},
})
```

### React 特定规则

```javascript
export default defineConfig({
	extends: ['@mqy/eslint-config/react'],
	rules: {
		// React Hooks 规范
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

		// JSX 规范
		'react/jsx-pascal-case': 'error',
		'react/jsx-fragments': ['error', 'syntax'],
		'react/jsx-no-useless-fragment': 'error',

		// 组件规范
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
			},
		],
	},
})
```

### Svelte 特定规则

```javascript
export default defineConfig({
	extends: ['@mqy/eslint-config/svelte'],
	rules: {
		// Svelte 组件规范
		'svelte/component-name-in-template-casing': ['error', 'PascalCase'],
		'svelte/no-at-html-tags': 'error',
		'svelte/no-debug': 'warn',

		// 响应式语法规范
		'svelte/valid-compile': 'error',
		'svelte/no-unused-svelte-ignore': 'error',
	},
})
```

## 🎯 自定义配置

### 覆盖规则

```javascript
export default defineConfig({
	extends: ['@mqy/eslint-config/vue'],
	rules: {
		// 覆盖默认规则
		'no-console': 'warn',
		'no-debugger': 'error',

		// 添加自定义规则
		'prefer-const': 'error',
		'no-var': 'error',
	},
})
```

### 忽略文件

```javascript
export default defineConfig({
	extends: ['@mqy/eslint-config/vue'],
	ignorePatterns: ['dist/', 'node_modules/', '*.min.js', 'public/'],
})
```

### 环境配置

```javascript
export default defineConfig({
	extends: ['@mqy/eslint-config/vue'],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	globals: {
		// 全局变量
		APP_VERSION: 'readonly',
		API_BASE_URL: 'readonly',
	},
})
```

## 📋 完整配置示例

### Vue 项目完整配置

```javascript
// eslint.config.mjs
import { defineConfig } from '@mqy/eslint-config'

export default defineConfig({
	extends: ['@mqy/eslint-config/vue'],

	// 解析器选项
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},

	// 环境配置
	env: {
		browser: true,
		node: true,
		es6: true,
	},

	// 全局变量
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},

	// 自定义规则
	rules: {
		// TypeScript 规则
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			},
		],

		// Vue 规则
		'vue/multi-word-component-names': 'off',
		'vue/component-definition-name-casing': ['error', 'PascalCase'],

		// 通用规则
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
	},

	// 忽略模式
	ignorePatterns: ['dist/', 'node_modules/', '*.d.ts', 'vite.config.ts.timestamp-*'],
})
```

## 🛠️ 集成指南

### VS Code 集成

**安装扩展**：

- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)

**配置文件**：

```json
// .vscode/settings.json
{
	"eslint.validate": ["javascript", "typescript", "vue", "react", "svelte"],
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### 命令行使用

```json
// package.json
{
	"scripts": {
		"lint": "eslint . --fix",
		"lint:check": "eslint .",
		"lint:fix": "eslint . --fix"
	}
}
```

### Git Hooks 集成

```bash
# 安装 husky 和 lint-staged
npm install husky lint-staged --save-dev

# 初始化 husky
npx husky install
```

```json
// package.json
{
	"lint-staged": {
		"*.{js,ts,vue,jsx,tsx,svelte}": ["eslint --fix", "git add"]
	}
}
```

## 🔍 规则说明

### 代码质量规则

| 规则             | 说明                 | 级别       |
| ---------------- | -------------------- | ---------- |
| `no-unused-vars` | 禁止未使用的变量     | Error      |
| `no-console`     | 生产环境禁止 console | Warn/Error |
| `prefer-const`   | 优先使用 const       | Error      |
| `no-var`         | 禁止使用 var         | Error      |

### TypeScript 规则

| 规则                                               | 说明             | 级别  |
| -------------------------------------------------- | ---------------- | ----- |
| `@typescript-eslint/no-explicit-any`               | 禁止使用 any     | Warn  |
| `@typescript-eslint/no-unused-vars`                | 禁止未使用的变量 | Error |
| `@typescript-eslint/explicit-function-return-type` | 要求函数返回类型 | Off   |
| `@typescript-eslint/prefer-nullish-coalescing`     | 优先使用空值合并 | Error |

### 框架特定规则

**Vue 规则**：

- 组件命名规范
- 模板语法检查
- Composition API 规范
- Props 验证规范

**React 规则**：

- Hooks 使用规范
- JSX 语法检查
- 组件性能优化
- 事件处理规范

**Svelte 规则**：

- 组件语法检查
- 响应式语法规范
- 编译时检查
- 性能优化建议

## 🚀 最佳实践

1. **团队规范统一**：所有团队成员使用相同配置
2. **CI/CD 集成**：在构建流程中加入代码检查
3. **编辑器集成**：配置实时错误提示
4. **渐进式采用**：在现有项目中逐步引入规则
5. **自定义扩展**：根据团队需求调整规则

通过使用 @mqy/eslint-config，您可以确保代码质量的一致性和可维护性。
