import { defineCustomElement } from 'vue'
import BackgroundLogin from './BackgroundLogin.vue'
import { layoutEnum, propsEnum } from './BackgroundLogin'

// 将组件转换为 web components
export const BackgroundLoginElement = defineCustomElement(BackgroundLogin)
export type BackgroundLoginElement = typeof BackgroundLoginElement

// 注册
export function register() {
	if (!customElements.get('tsoul-background-login')) {
		customElements.define('tsoul-background-login', BackgroundLoginElement)
	}
}

export { BackgroundLogin, layoutEnum, propsEnum }
