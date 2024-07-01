<template>
	<defaults :class="['layout-menu-light', proxyProps.isDark && 'dark']">
		<template #logo>
			<slot name="logo">
				<Logo width="30" height="30" fill="var(--el-color-primary)" />
			</slot>
		</template>
		<template #body>
			<slot name="body" />
		</template>
	</defaults>
</template>
<script setup lang="ts">
	import { layoutProps, propsKey, processPropType, emitsKey } from './BackgroundLayout'
	import type { LayoutEmits } from './BackgroundLayout'
	import defaults from './component/Main/default.vue'
	import Logo from '@/assets/svg/logo.svg?component'

	const props = defineProps(layoutProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)
</script>

<style lang="scss">
	// 把所有用到的element样式都在这里申明
	@use 'element-plus/theme-chalk/dark/css-vars.css';
	@use 'element-plus/theme-chalk/src/container.scss';
	@use 'element-plus/theme-chalk/src/header.scss';
	@use 'element-plus/theme-chalk/src/scrollbar.scss';
	@use 'element-plus/theme-chalk/src/aside.scss';
	@use 'element-plus/theme-chalk/src/menu.scss';
	@use 'element-plus/theme-chalk/src/backtop.scss';

	@import url('./styles/index.scss');
</style>
