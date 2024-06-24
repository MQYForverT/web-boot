<template>
	<mqy-defaults>
		<div slot="body">
			<slot name="body" />
		</div>
	</mqy-defaults>
</template>
<script setup lang="ts">
	import { defineCustomElement } from 'vue'
	import type { LayoutEmits } from './BackgroundLayout'
	import { layoutProps, propsKey, emitsKey } from './BackgroundLayout'
	import defaults from './main/default.vue'

	const defaultsElement = defineCustomElement(defaults)
	customElements.define('mqy-defaults', defaultsElement)

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

	// @import url('./theme/index.scss');
</style>
