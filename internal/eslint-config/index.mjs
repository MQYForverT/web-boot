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
		// 公共配置只配置排除属性，不指定files属性，具体的生效范围在具体的文件中指定
		ignores: ['dist/*', '**/*.d.ts', '**/public/**', '**/assets/**', 'coverage/*'],
	},
  unocss,
	{
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
		},
	},
	{
		languageOptions: {
			parser: parserTypeScript,
			// parserOptions告诉我们的解析器如何找到每个源文件的 TSConfig
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': pluginTypeScript,
		},
		rules: {
			...pluginTypeScript.configs.strict.rules,
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-non-null-assertion': 'off',
		},
	},
	{
		plugins: { import: importPrettier },
		rules: {
			'import/no-duplicates': 'error',
		},
	},
])
