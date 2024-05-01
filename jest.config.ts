import type { Config } from 'jest'
import { defaults } from 'jest-config'

// 详情看这：https://jestjs.io/zh-Hans/docs/configuration
const config: Config = {
	//指定要测试的文件类型的后缀
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
	// 过滤无需统计的代码范围
	coveragePathIgnorePatterns: ['/node_modules/'],
	// 指定覆盖率目标
	coverageThreshold: {
		//global 指的是全局，你也可以指定特定文件夹具有不同的覆盖率
		global: {
			branches: 80, //branches 分支覆盖率
			functions: 100, //函数执行的覆盖率
			lines: 80, //代码函数覆盖率
			statements: -10, //声明的覆盖率
		},
	},
	// Jest 会在项目里以原始的 JavaScript 执行，那就要把你的代码转译成原始的 JavaScript
	// 这里使用使用 ts-jest把ts代码转为js
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
}

export default config
