const Configuration = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// 不对主题的大小写进行检查
		'subject-case': [0],
		// 不允许作用域为空，即作用域必须存在
		'scope-empty': [2, 'never'],
		// 定义了作用域（Scope）的枚举列表，即作用域只能是列表中指定的值。[2, 'always', [...]] 表示作用域必须在列表中指定的值之一
		'scope-enum': [
			2,
			'always',
			['root', 'internal', 'vue', 'react', 'docx', 'components-private', 'components-public'],
		],
		// 提交类型（Type）的枚举列表，即提交类型只能是列表中指定的值，[2, 'always', [...]] 表示提交类型必须在列表中指定的值之一
		'type-enum': [
			2,
			'always',
			[
				//下面这三种即可代表所有的操作，新增、删除、重构；具体细节用msg去说明
				'feat', // 添加新功能
				'fix', // 修复bug
				'ref', // refactor，重构代码，较大代码的改动
			],
		],
	},
}
export default Configuration
