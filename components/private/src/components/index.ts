import { BackgroundLayoutElement, register as BackgroundLayoutRegister } from './BackgroundLayout'
import type { layoutProps } from './BackgroundLayout/BackgroundLayout'

export function registerAll() {
	BackgroundLayoutRegister()
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyBackgroundLayout: typeof BackgroundLayoutElement
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'mqy-background-layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & layoutProps
		}
	}
}

export {}
