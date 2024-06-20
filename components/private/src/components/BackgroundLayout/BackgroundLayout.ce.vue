<template>
	<Defaults v-if="layout === 'defaults'" />
</template>
<script setup lang="ts">
	import Defaults from './main/default.vue'
	import type { LayoutEmits } from './BackgroundLayout'
	import { layoutProps, propsKey, emitsKey } from './BackgroundLayout'

	const props = defineProps(layoutProps)
	provide(propsKey, props)

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
