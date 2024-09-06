import { describe, it, expect } from 'vitest'

import { register } from '../index'

register()

describe('BackgroundLayout', () => {
	// 检查wc是否以及注册
	it('should be registered', () => {
		expect(customElements.get('mqy-background-layout')).toBeDefined()
	})
})
