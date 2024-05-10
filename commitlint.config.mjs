const Configuration = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// 不对主题的大小写进行检查
		'subject-case': [0],
		// 不允许作用域为空，即作用域必须存在
		'scope-empty': [2, 'never'],
		// 定义了作用域（Scope）的枚举列表，即作用域只能是列表中指定的值。[2, 'always', [...]] 表示作用域必须在列表中指定的值之一
		'scope-enum': [2, 'always', ['root', 'vue', 'react']],
		// 提交类型（Type）的枚举列表，即提交类型只能是列表中指定的值，[2, 'always', [...]] 表示提交类型必须在列表中指定的值之一
		'type-enum': [
			2,
			'always',
			[
				'feat', // 添加新功能
				'fix', // 修复bug
				'docs', // 文档
				'style', // 不影响代码运行的变动
				'refactor', // 重构、优化代码，不影响功能
				'chore', //添加依赖等
				'test', //单元测试、集成测试等
				'revert', // 回滚到上一个版本
				'build', // 编译相关修改，例如发布版本、项目构建或者依赖的改动
				'perf', // 性能优化
			],
		],
	},
}
export default Configuration
