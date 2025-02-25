import React from 'react'
import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.vue'
import type { LayoutPublicProps } from './BackgroundLayout'
import { layoutEnum, menuModeEnum, propsEnum } from './BackgroundLayout'

// 将组件转换为 web components
export const BackgroundLayoutElement = defineCustomElement(BackgroundLayout)

// 注册
export function register() {
	if (!customElements.get('mqy-background-layout')) {
		customElements.define('mqy-background-layout', BackgroundLayoutElement)
	}
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyBackgroundLayout: typeof BackgroundLayoutElement & LayoutPublicProps
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

export { BackgroundLayout, layoutEnum, menuModeEnum, propsEnum }
