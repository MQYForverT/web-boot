# @tsoul/stylelint-config

Web Boot 项目的 Stylelint 配置包，提供了针对 Vue、React 等框架的样式规范配置。

## 特性

- 🎯 开箱即用的配置
- 🔄 支持多框架（Vue/React）
- 📦 SCSS 支持
- 🎨 CSS 属性排序（Recess Order）
- 💅 HTML/Vue 单文件组件支持
- 🚀 现代化 CSS 特性支持

## 安装

```bash
# npm
npm install -D @tsoul/stylelint-config stylelint@^16.0.0

# yarn
yarn add -D @tsoul/stylelint-config stylelint@^16.0.0

# pnpm
pnpm add -D @tsoul/stylelint-config stylelint@^16.0.0
```

## 使用方法

### Vue 项目

```javascript
// stylelint.config.mjs
import webboot from '@tsoul/stylelint-config/vue'

export default webboot
```

### React 项目

```javascript
// stylelint.config.mjs
import webboot from '@tsoul/stylelint-config/react'

export default webboot
```

### 通用项目

```javascript
// stylelint.config.mjs
import webboot from '@tsoul/stylelint-config'

export default webboot
```

## 配置说明

### 基础配置

继承了以下配置：

- `stylelint-config-standard`: 标准规则集
- `stylelint-config-recommended-scss`: SCSS 推荐规则
- `stylelint-config-recess-order`: CSS 属性排序规则

### 文件忽略

默认忽略以下文件：

- `.husky`
- `.vscode`
- `node_modules`
- `coverage`
- `dist`
- `output`
- `stats.html`

### 语法解析器

根据文件类型自动选择合适的解析器：

- `*.css/scss`: postcss-scss
- `*.html`: postcss-html
- `*.vue`: Vue 单文件组件解析器

### 自定义规则

- 允许特殊伪类选择器：
  ```javascript
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['global', 'export', ':deep']
    }
  ]
  ```
- 关闭类名连接必须是下划线的限制：
  ```javascript
  'selector-class-pattern': null
  ```

## 自定义配置

如果需要覆盖默认配置，可以这样做：

```javascript
// stylelint.config.mjs
import webboot from '@tsoul/stylelint-config/vue'

export default {
	extends: [webboot],
	rules: {
		// 你的自定义规则
		'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
	},
}
```

## VS Code 配置

推荐在 VS Code 中安装 Stylelint 插件，并添加以下配置：

```json
{
	"editor.codeActionsOnSave": {
		"source.fixAll.stylelint": true
	},
	"stylelint.validate": ["css", "scss", "vue", "html"]
}
```

## 更多信息

- [在线文档](https://mqyforvert.github.io/web-boot/api/stylelint)
- [问题反馈](https://github.com/MQYForverT/web-boot/issues)
- [Stylelint 官方文档](https://stylelint.io/)

## License

MIT
