import type { BackgroundLayoutElement } from './BackgroundLayout'
import type { LayoutPublicProps } from './BackgroundLayout/BackgroundLayout'
import type { BackgroundLoginElement } from './BackgroundLogin'
import type { LoginPublicProps } from './BackgroundLogin/BackgroundLogin'

declare module 'vue' {
	export interface GlobalComponents {
		'tsoul-background-layout': BackgroundLayoutElement & LayoutPublicProps
		'tsoul-background-login': BackgroundLoginElement & LoginPublicProps
	}
}

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'tsoul-background-layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
				LayoutPublicProps
			'tsoul-background-login': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
				LoginPublicProps
		}
	}
}
