import publicConfig from '../../stylelint.config.mjs'

export default {
	// 继承推荐规范配置
	extends: [publicConfig],
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
}
