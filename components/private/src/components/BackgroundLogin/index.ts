import React from 'react'
import { defineCustomElement } from 'vue'
import BackgroundLogin from './BackgroundLogin.vue'
import type { PublicProps } from './BackgroundLogin'
import { layoutEnum, propsEnum } from './BackgroundLogin'

// 将组件转换为 web components
export const BackgroundLoginElement = defineCustomElement(BackgroundLogin)

// 注册
export function register() {
	if (!customElements.get('tsoul-background-login')) {
		customElements.define('tsoul-background-login', BackgroundLoginElement)
	}
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyBackgroundLogin: PublicProps
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'tsoul-background-login': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & PublicProps
		}
	}
}

export { BackgroundLogin, layoutEnum, propsEnum }
