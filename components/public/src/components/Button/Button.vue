<template>
	<slot></slot>
</template>

<script setup lang="ts">
	import { provide } from 'vue'
	import { emitsKey, initProps, processPropType, propsKey } from './Button'
	import type { Emits } from './Button'

	const props = defineProps(initProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<Emits>()
	provide(emitsKey, emits)
</script>

<style>
	@unocss-placeholder;
</style>
