/// <reference types="vite/client" />

declare module '@mqy/components-private/dist/mqy-component-internal'

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: `mqy-${string}`]: any
	}
}
