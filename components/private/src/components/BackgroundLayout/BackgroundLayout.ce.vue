<template>
	<Defaults v-if="layout === 'defaults'" />
</template>
<script setup lang="ts">
	import Defaults from './main/default.vue'
	import type { BackgroundLayoutProps, BackgroundLayoutEvent } from './BackgroundLayout'
	import { defaultBackgroundLayout } from './BackgroundLayout'

	const props = withDefaults(defineProps<BackgroundLayoutProps>(), defaultBackgroundLayout)

	const emits = defineEmits<BackgroundLayoutEvent>()

	const themeConfig = useVModels(props, emits)
	// 提供 obj 给子组件
	provide('themeConfig', themeConfig)

	const { width } = useWindowSize()

	const layout = computed(() => {
		// 暂时只有一种布局
		if (width.value < 1000) {
			themeConfig.isCollapse.value = false
			return 'defaults'
		}
		return 'defaults'
	})
</script>
<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@import url('BackgroundLayout.css');
</style>
