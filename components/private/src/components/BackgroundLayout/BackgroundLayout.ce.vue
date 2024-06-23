<template>
	<component :is="layoutComponent" />
</template>
<script setup lang="ts">
	import type { LayoutEmits } from './BackgroundLayout'
	import { layoutProps, propsKey, emitsKey, LayoutType } from './BackgroundLayout'

	// 定义异步组件
	const components = {
		defaults: defineAsyncComponent(() => import('./main/default.vue')),
	}

	const layoutComponent = computed(() => {
		switch (props.layout) {
			case LayoutType.defaults:
				return components.defaults
		}
	})

	const props = defineProps(layoutProps)
	provide(propsKey, props)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/container.scss';
	@use 'element-plus/theme-chalk/src/aside.scss';
	@use 'element-plus/theme-chalk/src/drawer.scss';
	@use 'element-plus/theme-chalk/src/scrollbar.scss';
	@use 'element-plus/theme-chalk/src/menu.scss';
	@use 'element-plus/theme-chalk/src/menu-item.scss';
	@use 'element-plus/theme-chalk/src/sub-menu.scss';

	@import url('./theme/index.scss');
</style>
