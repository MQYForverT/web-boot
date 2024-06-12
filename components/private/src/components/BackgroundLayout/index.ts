import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.ce.vue'

// 将组件转换为 web components
export const BackgroundLayoutElement = defineCustomElement(BackgroundLayout)

// 注册
export function register() {
	customElements.define('mqy-background-layout', BackgroundLayoutElement)
}
