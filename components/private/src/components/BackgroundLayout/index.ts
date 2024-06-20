import BackgroundLayout from './BackgroundLayout.ce.vue'
import type { LayoutPublicProps } from './BackgroundLayout'
import { LayoutType, propsEnum } from './BackgroundLayout'

// 注册
export function register() {
	customElements.define(
		'mqy-background-layout',
		class extends HTMLElement {
			constructor() {
				super()
				nextTick(() => {
					console.log(this.getAttribute('isCollapse'))
					createApp(BackgroundLayout, {
						isAllOpen: false,
					}).mount(this)
				})
			}
		},
	)
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
