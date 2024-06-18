import publicConfig from '@mqy/eslint-config/vue'
import { defineFlatConfig } from 'eslint-define-config'

// 详细配置：https://eslint.nodejs.cn/docs/latest/use/configure/configuration-files
export default defineFlatConfig([
	...publicConfig,
	{
		rules: {
			'@typescript-eslint/no-namespace': 'off',
			'vue/no-deprecated-slot-attribute': 'off',
		},
	},
])
