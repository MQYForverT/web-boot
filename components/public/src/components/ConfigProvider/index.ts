import { defineCustomElement } from 'vue'
import ConfigProvider from './ConfigProvider.vue'

// 将组件转换为 web components
export const ConfigProviderElement = defineCustomElement(ConfigProvider)
export type ConfigProviderElement = typeof ConfigProviderElement

// 注册
export function register() {
	if (!customElements.get('ts-config-provider')) {
		customElements.define('ts-config-provider', ConfigProviderElement)
	}
}

export { ConfigProvider }
