# 开发工具

## 概述

Web Boot 项目集成了完整的现代化前端开发工具链，确保代码质量和开发效率。

## 代码质量工具

### ESLint

ESLint 用于 JavaScript/TypeScript 代码检查，确保代码质量和一致性。

#### 配置查看

```bash
npx eslint --print-config eslint.config.mjs
```

#### 常用命令

```bash
# 检查代码
npx eslint src/

# 自动修复
npx eslint src/ --fix

# 检查特定文件
npx eslint src/components/MyComponent.vue
```

#### 配置说明

项目使用扁平化配置（Flat Config），配置文件位于：

- 根目录：`eslint.config.mjs`
- 内部配置：`internal/eslint-config/`

支持多种框架的配置：

- Vue 3
- React 18
- Svelte 4
- 通用 JavaScript/TypeScript

### Stylelint

Stylelint 用于 CSS/SCSS 代码检查，确保样式代码规范。

#### 配置查看

```bash
npx stylelint stylelint.config.mjs --print-config
```

#### 常用命令

```bash
# 检查样式文件
npx stylelint src/**/*.{css,scss,vue}

# 自动修复
npx stylelint src/**/*.{css,scss,vue} --fix

# 检查特定文件
npx stylelint src/styles/index.scss
```

#### 配置说明

配置文件位于：

- 根目录：`stylelint.config.mjs`
- 内部配置：`internal/stylelint-config/`

### Prettier

Prettier 用于代码格式化，确保代码风格一致。

#### 配置

配置文件：`prettier.config.js`

```javascript
module.exports = {
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	printWidth: 100,
}
```

#### 常用命令

```bash
# 格式化所有文件
npx prettier --write .

# 格式化特定文件
npx prettier --write src/components/MyComponent.vue

# 检查格式化
npx prettier --check .
```

### Prettier ESLint

解决 Prettier 和 ESLint 格式规则冲突的插件。

#### 配置

在 VS Code 中安装 `Prettier ESLint` 插件，它会自动处理格式规则冲突。

## 构建工具

### Vite

Vite 是项目的核心构建工具，提供极速的开发体验。

#### 配置

各项目的 Vite 配置位于：

- 私有组件：`components/private/vite.config.ts`
- 公共组件：`components/public/vite.config.ts`
- Vue 模板：`templates/vue/vite.config.ts`
- React 模板：`templates/react/vite.config.ts`
- Svelte 模板：`templates/svelte/vite.config.ts`

#### 内部配置

通用 Vite 配置位于 `internal/vite-config/`：

```
internal/vite-config/
├── common/              # 通用配置
│   ├── autoImport/     # 自动导入
│   └── index.ts
├── plugins/            # 插件配置
├── vue/               # Vue 特定配置
├── react/             # React 特定配置
├── svelte/            # Svelte 特定配置
└── server.ts          # 服务器配置
```

#### 常用命令

```bash
# 开发模式
pnpm dev

# 构建
pnpm build

# 预览构建结果
pnpm preview
```

### UnoCSS

UnoCSS 是原子化 CSS 引擎，提供高效的样式开发体验。

#### 配置

配置文件：`uno.config.ts`

```typescript
import { defineConfig } from 'unocss'

export default defineConfig({
	// 预设
	presets: [
		// 默认预设
		presetUno(),
		// 图标预设
		presetIcons(),
		// 属性模式
		presetAttributify(),
	],
	// 自定义规则
	rules: [
		// ...
	],
	// 自定义快捷方式
	shortcuts: {
		// ...
	},
})
```

#### 使用

```vue
<template>
	<div class="flex items-center justify-center p-4 bg-blue-500 text-white">Hello UnoCSS</div>
</template>
```

## 类型检查

### TypeScript

项目全面使用 TypeScript，提供类型安全和智能提示。

#### 配置查看

```bash
# 查看 TypeScript 配置
npx tsc -p tsconfig.xxx.json --showConfig
```

#### 配置文件

- 根目录：`tsconfig.json`
- 基础配置：`tsconfig.base.json`
- Node.js 配置：`tsconfig.node.json`

#### 常用命令

```bash
# 类型检查
npx tsc --noEmit

# 编译
npx tsc

# 监听模式
npx tsc --watch
```

## 测试工具

### Vitest

Vitest 是基于 Vite 的单元测试框架。

#### 配置

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'jsdom',
		globals: true,
	},
})
```

#### 常用命令

```bash
# 运行测试
pnpm test

# 监听模式
pnpm test:watch

# 覆盖率
pnpm test:coverage
```

#### 测试示例

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

describe('MyComponent', () => {
	it('renders correctly', () => {
		const wrapper = mount(MyComponent)
		expect(wrapper.text()).toContain('Hello')
	})
})
```

## 版本控制

### Git Hooks

项目使用 Husky 管理 Git Hooks。

#### 配置

```json
{
	"husky": {
		"hooks": {
			"pre-commit": "lint-staged",
			"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
		}
	}
}
```

#### Commitlint

Git 提交信息规范检查。

配置文件：`commitlint.config.mjs`

```javascript
export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
	},
}
```

#### 提交规范

```
type(scope): subject

body

footer
```

类型说明：

- `feat`: 新功能
- `fix`: 修复
- `docs`: 文档
- `style`: 格式
- `refactor`: 重构
- `test`: 测试
- `chore`: 构建

## VS Code 插件

### 必需插件

1. **ESLint** - `dbaeumer.vscode-eslint`
2. **Stylelint** - `stylelint.vscode-stylelint`
3. **Prettier** - `esbenp.prettier-vscode`
4. **UnoCSS** - `antfu.unocss`

### 推荐插件

1. **中文语言包** - `MS-CEINTL.vscode-language-pack-zh-hans`
2. **GitLens** - `eamodio.gitlens`
3. **Vitest** - `vitest.explorer`
4. **Vue** - `Vue.volar`
5. **Markdown All in One** - `yzhang.markdown-all-in-one`
6. **IntelliCode** - `VisualStudioExptTeam.vscodeintellicode`

## 常见问题

### 插件不生效

如果 ESLint、Stylelint 等插件不生效：

1. 重启插件服务器：

   - `Cmd/Ctrl + Shift + P`
   - 输入 "Restart ESLint Server" 或 "Restart Stylelint Server"

2. 卸载并重新安装插件

3. 检查配置文件是否正确

### 配置冲突

如果遇到配置冲突：

1. 检查配置文件语法
2. 使用配置查看命令验证配置
3. 重启相关工具

### 性能问题

如果工具运行缓慢：

1. 检查 `.gitignore` 和 `.eslintignore` 配置
2. 排除不必要的文件
3. 使用缓存功能

## 最佳实践

### 1. 代码提交前检查

```bash
# 运行所有检查
pnpm lint
pnpm type-check
pnpm test
```

### 2. 使用 VS Code 工作区

创建 `.vscode/settings.json` 配置工作区设置：

```json
{
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true,
		"source.fixAll.stylelint": true
	},
	"eslint.validate": ["javascript", "typescript", "vue"]
}
```

### 3. 配置别名

在 `tsconfig.json` 中配置路径别名：

```json
{
	"compilerOptions": {
		"paths": {
			"@/*": ["./src/*"],
			"@/components/*": ["./src/components/*"]
		}
	}
}
```

### 4. 使用 TypeScript 严格模式

```json
{
	"compilerOptions": {
		"strict": true,
		"noImplicitAny": true,
		"strictNullChecks": true
	}
}
```
