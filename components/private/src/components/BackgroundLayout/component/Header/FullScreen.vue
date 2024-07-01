<template>
	<div class="h-14 w-10 flex-center cursor-pointer hover:bg-fill" @click="toggle">
		<fullscreen v-if="!isFullscreen" width="20" height="20" />
		<fullscreenExit v-else width="20" height="20" />
	</div>
</template>

<script lang="ts" setup>
	import fullscreen from '@/assets/svg/fullscreen.svg?component'
	import fullscreenExit from '@/assets/svg/fullscreen-exit.svg?component'
	import { useFullscreen } from '@vueuse/core'

	const { isFullscreen, toggle } = useFullscreen()
</script>

<style>
	@unocss-placeholder;
</style>
