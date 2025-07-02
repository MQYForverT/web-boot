import React from 'react'
import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.vue'
import type { LayoutPublicProps } from './BackgroundLayout'
import { layoutEnum, menuModeEnum, propsEnum } from './BackgroundLayout'

// 将组件转换为 web components
export const BackgroundLayoutElement = defineCustomElement(BackgroundLayout)

// 注册
export function register() {
	if (!customElements.get('tsoul-background-layout')) {
		customElements.define('tsoul-background-layout', BackgroundLayoutElement)
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
			'tsoul-background-layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
				LayoutPublicProps
		}
	}
}

export { BackgroundLayout, layoutEnum, menuModeEnum, propsEnum }
