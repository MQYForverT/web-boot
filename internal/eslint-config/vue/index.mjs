import parserVue from 'vue-eslint-parser'
import pluginVue from 'eslint-plugin-vue'
import * as parserTypeScript from '@typescript-eslint/parser'
import getJsConfig from '../common/js-config.mjs'
import getTsConfig from '../common/ts-config.mjs'
import ignores from '../common/ignores.mjs'
import unocss from '@unocss/eslint-config/flat'
import { defineFlatConfig } from 'eslint-define-config'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default defineFlatConfig([
	ignores,
	unocss,
	getJsConfig(['**/*.{js,jsx,mjs,cjs}']),
	getTsConfig(['**/*.{ts,tsx,vue}']),
	{
		files: ['**/*.vue'],
		// 提供了一些语言选项，用于配置 Vue 文件的解析器和解析器选项
		languageOptions: {
			// 指定了解析器为 parserVue
			parser: parserVue,
			//提供了解析器的选项
			parserOptions: {
				// 指定了解析器为 TypeScript 的解析器,这是因为 Vue 文件中也包含 TypeScript 代码
				parser: parserTypeScript,
				sourceType: 'module',
			},
		},
		plugins: {
			vue: pluginVue,
		},
		//指定了处理器，用于处理 .vue 文件
		processor: pluginVue.processors['.vue'],
		rules: {
			...pluginVue.configs.base.rules,
			...pluginVue.configs['vue3-essential'].rules,
			...pluginVue.configs['vue3-recommended'].rules,
			// props必须要有默认值
			'vue/require-default-prop': 'error',
			// 组件文件名必须两个单词
			'vue/multi-word-component-names': 'off',
			// 除了mqy、el、router开头的组件没定义不报错，其他的都报错
			'vue/no-undef-components': [
				'error',
				{
					ignorePatterns: ['(mqy|el|router)(\\-\\w+)+'],
				},
			],
		},
	},
])
