import pluginSvelte from 'eslint-plugin-svelte'
import * as parserTypeScript from '@typescript-eslint/parser'
import getJsConfig from '../common/js-config.mjs'
import getTsConfig from '../common/ts-config.mjs'
import ignores from '../common/ignores.mjs'
import unocss from '@unocss/eslint-config/flat'
import { defineFlatConfig } from 'eslint-define-config'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
// 参考 Svelte ESLint 官方文档：https://sveltejs.github.io/eslint-plugin-svelte/user-guide/
export default defineFlatConfig([
	ignores,
	unocss,
	getJsConfig(['**/*.{js,mjs,cjs}']),
	getTsConfig(['**/*.{ts}', '!**/*.svelte', '!**/*.{css,scss}']),
	// Svelte 基础配置
	...pluginSvelte.configs.base,
	// Svelte 推荐配置
	...pluginSvelte.configs.recommended,
	// TypeScript + Svelte 配置
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: parserTypeScript,
				extraFileExtensions: ['.svelte'],
				sourceType: 'module',
			},
		},
		rules: {
			// 自定义规则覆盖
			'svelte/sort-attributes': 'warn',
			'svelte/no-unused-class-name': 'warn',
			'svelte/spaced-html-comment': 'error',
			'svelte/no-immutable-reactive-statements': 'warn', // 降级为警告
			// 关闭一些可能冲突的规则
			'no-inner-declarations': 'off',
			'no-self-assign': 'off',
			// TypeScript 规则调整
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			// 导入规则调整
			'import/no-duplicates': 'warn',
		},
	},
])
