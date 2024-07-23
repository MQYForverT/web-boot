import { describe, vi, it, expect, beforeAll, afterAll } from 'vitest'
import { mount } from '@vue/test-utils'

import { BackgroundLayout, register } from '../index'

describe('BackgroundLayout', () => {
	// 检查wc是否以及注册
	it('should be registered', () => {
		register()
		expect(customElements.get('mqy-background-layout')).toBeDefined()
	})

	it('no menuList props', () => {
		const wrapper = mount(BackgroundLayout, {
			props: {},
		})
		expect(wrapper.props('menuList')).toBe('[]')

		// 模拟 console.warn 并捕获警告信息
		const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

		expect(consoleWarnSpy).toHaveBeenCalled()
		// 获取所有警告调用，并提取警告消息
		const warningCalls = consoleWarnSpy.mock.calls
		const warningMessages = warningCalls.map((call) => call[0])
		// 检查是否有任何警告消息包含指定的警告信息
		expect(warningMessages.some((message) => message.includes('[Vue warn]: Missing required prop: "menuList"'))).toBe(
			true,
		)
		// 还原 console.warn 的原始实现，避免影响其他测试或代码执行
		consoleWarnSpy.mockRestore()
	})
})
