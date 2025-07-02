import { defineCustomElement } from 'vue'
import Example from './Example.vue'

// 将组件转换为 web components
export const ExampleElement = defineCustomElement(Example)

// 注册
export function register() {
	customElements.define('tsoul-example', ExampleElement)
}
