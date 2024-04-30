import parserVue from 'vue-eslint-parser'
import pluginVue from 'eslint-plugin-vue'
import publicConfig from '../../eslint-config-public.mjs'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default [
	...publicConfig,
	// vue3 基础推荐规则
	...pluginVue.configs['flat/recommended'],
	{
		languageOptions: {
			// 解决 Parsing error: Unexpected token )eslint 报错
			parser: parserVue,
		},
	},
]
