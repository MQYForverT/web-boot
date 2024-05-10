import pluginReact from 'eslint-plugin-react'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import publicConfig from '../../eslint.config.mjs'
import { defineFlatConfig } from 'eslint-define-config'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default defineFlatConfig([
	...publicConfig,
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		// 提供了一些语言选项，用于配置 Vue 文件的解析器和解析器选项
		languageOptions: {
			//提供了解析器的选项
			parserOptions: {
				parser: '@typescript-eslint/parser',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: pluginReact,
			'react-refresh': pluginReactRefresh,
			'react-hooks': pluginReactHooks,
		},
		rules: {
			// ...pluginReact.rules,
			'react-refresh/only-export-components': 'warn',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
])
