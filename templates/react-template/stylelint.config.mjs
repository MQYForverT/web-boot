import publicConfig from '../../stylelint.config.mjs'

export default {
	// 继承推荐规范配置
	extends: [publicConfig],
	// 指定要应用配置的文件子集中不同文件对应的解析器
	overrides: [
		{
			files: ['**/*.{html}'],
			customSyntax: 'postcss-html',
		},
	],
}
