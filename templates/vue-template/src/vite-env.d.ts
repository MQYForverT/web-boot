/// <reference types="vite/client" />

interface MyProps {}

interface MyEmit {}
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const component: DefineComponent<MyProps, MyEmit, unknown>
	export default component
}
