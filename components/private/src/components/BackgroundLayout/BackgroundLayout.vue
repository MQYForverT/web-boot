<template>
	<mqy-defaults>
		<div slot="logo">
			<slot name="logo" />
		</div>
		<div slot="body">
			<slot name="body" />
		</div>
	</mqy-defaults>
</template>
<script setup lang="ts">
	import { defineCustomElement } from 'vue'
	import { layoutProps, propsKey, processPropType, emitsKey } from './BackgroundLayout'
	import type { LayoutEmits } from './BackgroundLayout'
	import defaults from './component/Main/default.vue'

	const defaultsElement = defineCustomElement(defaults)
	customElements.define('mqy-defaults', defaultsElement)

	const props = defineProps(layoutProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)
</script>

<style lang="scss">
	@use 'element-plus/theme-chalk/dark/css-vars.css';
	@use './styles/index.scss';
</style>
