// .styleintrc.js
export default {
	// 继承推荐规范配置
	extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
	// 指定不同文件对应的解析器
	overrides: [
		{
			files: ['**/*.{vue,html}'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['**/*.{css,scss}'],
			customSyntax: 'postcss-scss',
		},
	],
	// 自定义规则
	rules: {
		// 禁止未知的伪类选择器，允许 global 、export等伪类
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'export'],
			},
		],
	},
}
