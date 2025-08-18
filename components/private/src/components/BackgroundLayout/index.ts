import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.vue'
import { layoutEnum, menuModeEnum, propsEnum } from './BackgroundLayout'

// 将组件转换为 web components
export const BackgroundLayoutElement = defineCustomElement(BackgroundLayout)
export type BackgroundLayoutElement = typeof BackgroundLayoutElement

// 注册
export function register() {
	if (!customElements.get('ts-background-layout')) {
		customElements.define('ts-background-layout', BackgroundLayoutElement)
	}
}

export { BackgroundLayout, layoutEnum, menuModeEnum, propsEnum }
