import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginPrettierRecommendedConfigs from 'eslint-plugin-prettier/recommended'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default [
	// eslint 默认推荐规则
	pluginJs.configs.recommended,
	// ts 默认推荐规则
	...tseslint.configs.recommended,
	// prettier 默认推荐规则
	pluginPrettierRecommendedConfigs,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	{
		files: ['tests/**/*'],
		plugins: ['jest'],
		env: {
			'jest/globals': true,
		},
	},
]
