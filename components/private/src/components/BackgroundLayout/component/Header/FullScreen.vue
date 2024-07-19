<template>
	<div class="h-12 w-10 flex-center cursor-pointer hover:bg-fill" @click="toggle">
		<fullscreen v-if="!isFullscreen" width="20" height="20" />
		<fullscreenExit v-else width="20" height="20" />
	</div>
</template>

<script lang="ts" setup>
	import fullscreen from '~icons/mqy-icon/fullscreen'
	import fullscreenExit from '~icons/mqy-icon/fullscreen-exit'
	import { useFullscreen } from '@vueuse/core'

	const { isFullscreen, toggle } = useFullscreen()
</script>

<style>
	@unocss-placeholder;
</style>
