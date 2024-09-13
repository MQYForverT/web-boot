import React from 'react'
import { defineCustomElement } from 'vue'
import BackgroundLogin from './BackgroundLogin.vue'
import type { PublicProps } from './BackgroundLogin'
import { propsEnum } from './BackgroundLogin'

// 临时办法，如果组件内部使用unocss，vue不会自动把unocss样式提升到根组件，所以这里需要把所有用到unocss的组件都在这里导入
// Top
import Top from './component/Top/index.vue'
import Theme from '@/components/common/components/Theme.vue'
import Language from '@/components/common/components/Language.vue'

BackgroundLogin.styles.push(...Top.styles, ...Theme.styles, ...Language.styles)

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
