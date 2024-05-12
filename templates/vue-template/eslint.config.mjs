import parserVue from 'vue-eslint-parser'
import pluginVue from 'eslint-plugin-vue'
import publicConfig from '@mqy/eslint-config'
import { defineFlatConfig } from 'eslint-define-config'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default defineFlatConfig([
	...publicConfig,
	{
		// 为公共配置指定生效范围
		files: ['**/vue-template/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
	},
	{
		files: ['**/*.vue'],
		// 提供了一些语言选项，用于配置 Vue 文件的解析器和解析器选项
		languageOptions: {
			// 指定了解析器为 parserVue
			parser: parserVue,
			//提供了解析器的选项
			parserOptions: {
				// 指定了解析器为 TypeScript 的解析器,这是因为 Vue 文件中也包含 TypeScript 代码
				parser: '@typescript-eslint/parser',
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
		},
	},
])
