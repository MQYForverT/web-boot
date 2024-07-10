// .stylelint.mjs
export default {
	ignoreFiles: [
		'**/.husky',
		'**/.vscode',
		'**/node_modules/**',
		'**/coverage/**',
		'**/dist/**',
		'**/output/**',
		'**/stats.html',
	],
	// 继承推荐规范配置
	extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
	// 指定要应用配置的文件子集中不同文件对应的解析器
	overrides: [
		{
			files: ['**/*.{css,scss}'],
			customSyntax: 'postcss-scss',
		},
		{
			files: ['**/*.html'],
			customSyntax: 'postcss-html',
		},
	],
	// 自定义规则
	rules: {
		// 禁止未知的伪类选择器，允许 global 、export等伪类
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'export', ':deep'],
			},
		],
		// 关闭类名连接必须是下划线
		'selector-class-pattern': null,
	},
}
