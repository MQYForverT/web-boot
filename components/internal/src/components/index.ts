import { defineCustomElement } from 'vue'
import Example from './Example/Example.ce.vue'

// 转换为自定义元素构造器
const ExampleElement = defineCustomElement(Example)

// 注册
export function register() {
	customElements.define('mqy-example', ExampleElement)
}

// 注册全局类型
declare module 'vue' {
	export interface GlobalComponents {
		ExampleElement: typeof ExampleElement
	}
}
