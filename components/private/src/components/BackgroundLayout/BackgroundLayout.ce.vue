<template>
	<mqy-defaults v-if="props.layout === LayoutType.defaults" />
	<slot name="mqy">12</slot>
</template>
<script setup lang="ts">
	import Defaults from './main/default.ce.vue'
	import type { LayoutEmits } from './BackgroundLayout'
	import { layoutProps, propsKey, emitsKey, LayoutType } from './BackgroundLayout'

	const props = defineProps(layoutProps)
	provide(propsKey, props)
	props.menuList

	console.log('props:', props)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)
</script>
<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@import url('BackgroundLayout.css');
</style>
