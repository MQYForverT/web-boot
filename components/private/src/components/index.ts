import { ExampleElement, register as ExampleRegister } from './Example'
import { ExampleProps } from './Example/Example'

export function registerAll() {
	ExampleRegister()
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyExample: typeof ExampleElement
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'mqy-example': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & ExampleProps
		}
	}
}

export {}
