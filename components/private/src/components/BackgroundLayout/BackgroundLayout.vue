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
	import type { LayoutEmits } from './BackgroundLayout'
	import { layoutProps, propsKey, emitsKey } from './BackgroundLayout'
	import defaults from './component/Main/default.vue'

	const defaultsElement = defineCustomElement(defaults)
	customElements.define('mqy-defaults', defaultsElement)

	const props = defineProps(layoutProps)
	provide(propsKey, props)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)
</script>
