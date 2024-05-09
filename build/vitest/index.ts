import { defineConfig } from 'vitest/config'

const webRegex = /\.[jt]sx$/

// https://cn.vitest.dev/config
export default defineConfig({
	test: {
		// 提供全局 API,同时在unplugin-auto-import中配置可自动导入
		globals: true,
		// 测试环境，模拟浏览器环境的库jsdom。默认值: 'node'
		environment: 'jsdom',
		testTransformMode: {
			web: [webRegex.source],
		},
		coverage: {
			exclude: ['node_modules'],
			//覆盖范围阈值选项
			thresholds: {
				branches: 80, //branches 分支覆盖率
				functions: 100, //函数执行的覆盖率
				lines: 80, //代码函数覆盖率
				statements: -10, //声明的覆盖率
			},
		},
	},
})
