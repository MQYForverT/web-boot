import type { InlineConfig } from 'vitest'
const webRegex = /\.[jt]sx$/

// https://cn.vitest.dev/config
export function setupViteTest(): InlineConfig {
	return {
		// 提供全局 API,同时在unplugin-auto-import中配置可自动导入，同时需要在命令上加入--globals
		globals: true,
		// 测试环境，模拟浏览器环境的库happy-dom。默认值: 'node'
		environment: 'happy-dom',
		testTransformMode: {
			web: [webRegex.source],
		},
		coverage: {
			include: ['src'],
			exclude: ['node_modules'],
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
