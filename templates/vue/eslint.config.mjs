import publicConfig from '@mqy/eslint-config/vue'
import { defineFlatConfig } from 'eslint-define-config'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default defineFlatConfig([
	...publicConfig,
	{
		rules: {
			'vue/no-deprecated-slot-attribute': [
				'error',
				{
					ignore: ['mqy-background-layout'],
				},
			],
		},
	},
])
