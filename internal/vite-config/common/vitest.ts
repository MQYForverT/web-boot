import type { InlineConfig } from 'vitest'
import { mergeConfig } from 'vite'
const webRegex = /\.[jt]sx$/

const defaultOption: InlineConfig = {
	// 测试环境，模拟浏览器环境的库happy-dom。默认值: 'node'
	environment: 'happy-dom',
	testTransformMode: {
		web: [webRegex.source],
	},
	deps: {
		optimizer: {
			web: {
				enabled: true,
			},
		},
	},
	coverage: {
		include: [],
		exclude: ['node_modules', 'dist'],
		//覆盖范围阈值选项
		thresholds: {
			//分支语句的覆盖情况。这些分支语句包括 if 语句、switch 语句、try-catch 语句以及逻辑运算符（如 && 和 ||）等
			branches: 80,
			//函数执行的覆盖率
			functions: 80,
			//代码函数覆盖率
			lines: 80,
			//声明的覆盖率
			statements: 80,
		},
	},
}

// https://cn.vitest.dev/config
export function setupViteTest(option?: InlineConfig): InlineConfig {
	return option ? mergeConfig(defaultOption, option, false) : defaultOption
}
