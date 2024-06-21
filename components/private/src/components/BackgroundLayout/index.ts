import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.ce.vue'
import type { LayoutPublicProps } from './BackgroundLayout'
import { LayoutType, propsEnum } from './BackgroundLayout'

import defaultB from './main/default.ce.vue'

// 将组件转换为 web components
export const BackgroundLayoutElement = defineCustomElement(BackgroundLayout)
export const defaultBElement = defineCustomElement(defaultB)

// 注册
export function register() {
	customElements.define('mqy-background-layout', BackgroundLayoutElement)
	customElements.define('mqy-defaults', defaultBElement)
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyBackgroundLayout: LayoutPublicProps
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
