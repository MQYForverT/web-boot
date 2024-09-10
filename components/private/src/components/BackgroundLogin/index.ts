import React from 'react'
import { defineCustomElement } from 'vue'
import BackgroundLogin from './BackgroundLogin.vue'
import type { PublicProps } from './BackgroundLogin'
import { propsEnum } from './BackgroundLogin'

// 将组件转换为 web components
export const BackgroundLoginElement = defineCustomElement(BackgroundLogin)

// 注册
export function register() {
	if (!customElements.get('mqy-background-login')) {
		customElements.define('mqy-background-login', BackgroundLoginElement)
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
			'mqy-background-login': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & PublicProps
		}
	}
}

export { BackgroundLogin, propsEnum }
