<template>
	<div class="h-14 w-full flex-center shrink-0 nowrap-hidden">
		<slot name="logo" />
		{{ props.isCollapse }}
		<h3 v-show="!props.isCollapse" class="ml-2 text-4 text-primary font-bold">{{ props.globalTitle }}</h3>
	</div>
</template>

<script lang="ts" setup>
	import { propsKey } from '../../BackgroundLayout'

	const props = inject(propsKey)!
</script>

<style>
	@unocss-placeholder;
</style>
