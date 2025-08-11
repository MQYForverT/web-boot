import { defineCustomElement } from 'vue'
import Button from './Button.vue'

// 将组件转换为 web components
export const ButtonElement = defineCustomElement(Button)
export type ButtonElement = typeof ButtonElement

// 注册
export function register() {
	if (!customElements.get('tsoul-button')) {
		customElements.define('tsoul-button', ButtonElement)
	}
}

export { Button }
