import publicConfig from './index'

export default {
	// 继承推荐规范配置
	extends: [
		publicConfig,
		'stylelint-config-recommended-scss',
		'stylelint-config-recommended-vue/scss',
		'stylelint-config-html/vue',
	],
	// 指定要应用配置的文件子集中不同文件对应的解析器
	overrides: [
		{
			files: ['**/*.{vue,html}'],
			customSyntax: 'postcss-html',
		},
	],
}
