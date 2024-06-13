<template>
	<Defaults v-if="layout === 'defaults'" />
	{{ props.isCollapse }}
</template>
<script setup lang="ts">
	import Defaults from './main/default.vue'
	import type { LayoutEmits } from './BackgroundLayout'
	import { layoutProps, propsKey, emitsKey } from './BackgroundLayout'

	const props = defineProps(layoutProps)
	provide(propsKey, props)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)

	const { width } = useWindowSize()

	const layout = computed(() => {
		// 暂时只有一种布局
		if (width.value < 1000) {
			emits('change', 'isCollapse', true)
			// themeConfig.isCollapse.value = true
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
