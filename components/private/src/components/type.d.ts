import type { BackgroundLayoutElement } from './BackgroundLayout'
import type { LayoutPublicProps } from './BackgroundLayout/BackgroundLayout'
import type { BackgroundLoginElement } from './BackgroundLogin'
import type { LoginPublicProps } from './BackgroundLogin/BackgroundLogin'

declare module 'vue' {
	export interface GlobalComponents {
		'ts-background-layout': BackgroundLayoutElement & LayoutPublicProps
		'ts-background-login': BackgroundLoginElement & LoginPublicProps
	}
}

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'ts-background-layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
				LayoutPublicProps
			'ts-background-login': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & LoginPublicProps
		}
	}
}
