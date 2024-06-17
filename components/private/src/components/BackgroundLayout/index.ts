import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.ce.vue'
import type { LayoutPublicProps } from './BackgroundLayout'
import { LayoutType, propsEnum } from './BackgroundLayout'

// 将组件转换为 web components
export const BackgroundLayoutElement = defineCustomElement(BackgroundLayout)

// 注册
export function register() {
	customElements.define('mqy-background-layout', BackgroundLayoutElement)
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyBackgroundLayout: typeof BackgroundLayoutElement
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'mqy-background-layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
				LayoutPublicProps
		}
	}
}

export { LayoutType, propsEnum }
