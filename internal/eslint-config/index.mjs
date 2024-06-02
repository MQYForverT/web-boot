import globals from 'globals'
import js from '@eslint/js'
import { defineFlatConfig } from 'eslint-define-config'
import * as parserTypeScript from '@typescript-eslint/parser'
import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
// eslint-plugin-import文档：https://www.5axxw.com/wiki/content/c3wa5h
import importPrettier from 'eslint-plugin-import'
import unocss from '@unocss/eslint-config/flat'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default defineFlatConfig([
	{
		ignores: ['**/dist/**', '**/*.d.ts', '**/public/**', '**/assets/**', '**/coverage/**'],
	},
	unocss,
	{
		files: ['**/*.{js,jsx,mjs,cjs}'],
		// eslint 默认推荐规则
		...js.configs.recommended,
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			...configPrettier.rules,
			...pluginPrettier.configs.recommended.rules,
			'no-unused-vars': [
				'error',
				{
					// 忽略函数参数中以 _ 开头的变量
					argsIgnorePattern: '^_',
				},
			],
			// 禁止变量重新声明
			'no-redeclare': 'error',
			'prefer-const': 'error',
		},
	},
	{
		files: ['**/*.{ts,tsx,vue}'],
		languageOptions: {
			parser: parserTypeScript,
			// parserOptions告诉我们的解析器如何找到每个源文件的 TSConfig
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': pluginTypeScript,
			import: importPrettier,
		},
		rules: {
			...pluginTypeScript.configs.strict.rules,
			// 禁止使用非空断言的语法
			'@typescript-eslint/no-non-null-assertion': 'off',
			// 禁止变量重新声明，但是会排出type导入
			'import/no-duplicates': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					// 忽略函数参数中以 _ 开头的变量
					argsIgnorePattern: '^_',
				},
			],
			'prefer-const': 'error',
		},
	},
])
