import globals from 'globals'
import js from '@eslint/js'
import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import { defineFlatConfig } from 'eslint-define-config'

const getJsConfig = (files, ignores = []) => {
	return defineFlatConfig({
		files,
		ignores,
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
	})
}
export default getJsConfig
