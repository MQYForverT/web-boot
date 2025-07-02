# @tsoul/eslint-config

Web Boot 项目的 ESLint 配置包，提供了针对 Vue、React、Svelte 等框架的 ESLint 规则集。

## 特性

- 🎯 开箱即用的配置
- 🔄 支持多框架（Vue/React/Svelte）
- 📦 基于 ESLint Flat Config
- 🚀 TypeScript 支持
- 🎨 UnoCSS 支持
- 💅 Prettier 集成

## 安装

```bash
# npm
npm install -D @tsoul/eslint-config eslint@^9.0.0

# yarn
yarn add -D @tsoul/eslint-config eslint@^9.0.0

# pnpm
pnpm add -D @tsoul/eslint-config eslint@^9.0.0
```

## 使用方法

### Vue 项目

```javascript
// eslint.config.mjs
import webboot from '@tsoul/eslint-config/vue'

export default webboot
```

### React 项目

```javascript
// eslint.config.mjs
import webboot from '@tsoul/eslint-config/react'

export default webboot
```

### Svelte 项目

```javascript
// eslint.config.mjs
import webboot from '@tsoul/eslint-config/svelte'

export default webboot
```

### TypeScript 项目

```javascript
// eslint.config.mjs
import webboot from '@tsoul/eslint-config'

export default webboot
```

## 配置说明

### Vue 规则集

主要包含以下规则：

- Vue 3 基础规则（vue3-essential）
- Vue 3 推荐规则（vue3-recommended）
- 自定义规则：
  - `vue/require-default-prop`: props 必须要有默认值
  - `vue/multi-word-component-names`: 关闭组件文件名必须两个单词的限制
  - `vue/no-undef-components`: 允许 tsoul、el、router 开头的未定义组件

### TypeScript 规则集

- 严格的类型检查
- 导入/导出规则
- 代码风格规则

### JavaScript 规则集

- ES6+ 语法支持
- 最佳实践规则
- 代码风格规则

### 通用功能

- 文件忽略配置
- UnoCSS 支持
- Prettier 集成

## 自定义配置

如果需要覆盖默认配置，可以这样做：

```javascript
// eslint.config.mjs
import webboot from '@tsoul/eslint-config/vue'

export default [
	...webboot,
	{
		rules: {
			// 你的自定义规则
			'vue/require-default-prop': 'off',
		},
	},
]
```

## VS Code 配置

推荐在 VS Code 中安装 ESLint 插件，并添加以下配置：

```json
{
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"eslint.validate": ["javascript", "typescript", "vue", "react", "svelte"]
}
```

## 更多信息

- [在线文档](https://mqyforvert.github.io/web-boot/api/eslint)
- [问题反馈](https://github.com/MQYForverT/web-boot/issues)
- [ESLint 官方文档](https://eslint.org/)

## License

MIT
