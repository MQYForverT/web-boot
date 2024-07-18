import type { InlineConfig } from 'vitest'
const webRegex = /\.[jt]sx$/

interface Option {
	coverageInclude?: string[]
	coverageExclude?: string[]
}

// https://cn.vitest.dev/config
export function setupViteTest(option?: Option): InlineConfig {
	return {
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
			include: option?.coverageInclude ?? ['src'],
			exclude: option?.coverageExclude ?? ['node_modules', 'dist'],
			//覆盖范围阈值选项
			thresholds: {
				branches: 80, //branches 分支覆盖率
				functions: 80, //函数执行的覆盖率
				lines: 80, //代码函数覆盖率
				statements: 80, //声明的覆盖率
			},
		},
	}
}
