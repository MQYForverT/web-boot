import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { register } from '../index'

describe('BackgroundLayout', () => {
	beforeAll(() => {
		register()
	})

	afterAll(() => {
		// 因为customElements并没有提供卸载wc方法，所以这我使用removeChild把它从body中删除
		const element = document.querySelector('mqy-background-layout')
		if (element) {
			document.body.removeChild(element)
		}
	})

	// 检查wc是否以及注册
	it('should be registered', () => {
		expect(customElements.get('mqy-background-layout')).toBeDefined()
	})

	it('render', async () => {
		const element = window.document.createElement('mqy-background-layout')
		window.document.body.appendChild(element)
	})
})
