<template>
	<mqy-defaults v-if="props.layout === LayoutType.defaults" />
</template>
<script setup lang="ts">
	import { defineCustomElement } from 'vue'
	import Defaults from './main/default.ce.vue'
	import type { LayoutEmits } from './BackgroundLayout'
	import { layoutProps, propsKey, emitsKey, LayoutType } from './BackgroundLayout'

	const defaultsElement = defineCustomElement(Defaults)
	customElements.define('mqy-defaults', defaultsElement)

	const props = defineProps(layoutProps)
	provide(propsKey, props)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)
</script>

<style lang="scss">
	@import url('BackgroundLayout.scss');
</style>
