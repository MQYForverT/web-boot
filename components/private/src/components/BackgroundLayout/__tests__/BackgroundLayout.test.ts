import { describe, vi, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import { BackgroundLayout, register } from '../index'
import Logo from '../component/LayoutCommon/Logo.vue'

describe('BackgroundLayout', () => {
	// 检查wc是否以及注册
	it('should be registered', () => {
		register()
		expect(customElements.get('mqy-background-layout')).toBeDefined()
	})

	it('no menuList props', () => {
		// 模拟 console.warn 并捕获警告信息
		const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

		const wrapper = mount(BackgroundLayout, {
			props: {},
		})

		// 确保组件已被成功挂载
		expect(wrapper.exists()).toBe(true)
		// 检查是否触发了警告
		expect(consoleWarnSpy).toHaveBeenCalled()
		expect(wrapper.props('menuList')).toBe('[]')

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

	it('isDark props', async () => {
		const wrapper = mount(BackgroundLayout, {
			props: {
				isDark: true,
			},
		})

		// 确保组件已被成功挂载
		expect(wrapper.exists()).toBe(true)

		await wrapper.vm.$nextTick()
		// wrapper.vm.state.isDark = true
		// console.log(222, wrapper.vm.state.isDark)
		const classList = document.documentElement.classList
		console.log(222, wrapper.find({ ref: 'appWrapperRef' }))
		// expect(document.documentElement.classList.contains('dark')).toBe(true)
		// expect(wrapper.vm.state.isMobile).toBe(true)
		// expect(wrapper.vm.state.isCollapse).toBe(true)
	})

	it('no logo slot', () => {
		const wrapper = mount(BackgroundLayout, {
			slots: {},
		})
		// 找到 LogoWrapper
		const LogoWrapper = wrapper.findComponent(Logo)
		expect(LogoWrapper.exists()).toBe(true)

		const svgIcon = LogoWrapper.find('svg')
		expect(svgIcon.exists()).toBe(true)

		expect(svgIcon.attributes('width')).toBe('30')
		expect(svgIcon.attributes('height')).toBe('30')
		expect(svgIcon.attributes('fill')).toContain('var(--el-color-primary)')
	})

	it('logo slot', () => {
		const wrapper = mount(BackgroundLayout, {
			slots: {
				logo: '<div class="custom-logo">Custom Logo</div>',
			},
		})
		const LogoWrapper = wrapper.findComponent(Logo)
		expect(LogoWrapper.exists()).toBe(true)

		// 应该找不到 默认svg
		const svgIcon = LogoWrapper.find('svg')
		expect(svgIcon.exists()).toBe(false)

		const customLogoDiv = LogoWrapper.find('.custom-logo')
		expect(customLogoDiv.exists()).toBe(true)
		expect(customLogoDiv.text()).toBe('Custom Logo')
	})

	it('handles window resize correctly', async () => {
		// Mount the component
		const wrapper = mount(BackgroundLayout, {
			props: {
				// Provide necessary props here
			},
		})

		const el = wrapper.find({ ref: 'appWrapperRef' })
		const domElement = el.element as HTMLElement
		const style = window.getComputedStyle(domElement)
		console.log(333, el)
		// wrapper.element.innerWidth = 500
		// // Simulate resize event
		// wrapper.element.dispatchEvent(new Event('resize'))

		// // Wait for nextTick to process the update
		// await wrapper.vm.$nextTick()

		// // Assert changes
		// expect(wrapper.vm.state.isMobile).toBe(false) // or false depending on your logic
	})
})
