<template>
	<div
		:style="{ height: proxyProps.containerSize.height || '100vh', width: proxyProps.containerSize.width || '100vw' }"
	>
		<!--默认布局-->
		<defaults ref="appWrapperRef" class="backgroundLayout">
			<template #logo>
				<slot name="logo">
					<Logo width="30" height="30" fill="var(--el-color-primary)" />
				</slot>
			</template>
			<template #header>
				<slot name="header" />
			</template>
			<template #main>
				<slot name="main" />
			</template>
		</defaults>
	</div>
</template>
<script setup lang="ts">
	import useState from './hooks/useState'
	import { layoutProps, propsKey, processPropType, emitsKey } from './BackgroundLayout'
	import type { LayoutEmits } from './BackgroundLayout'
	import defaults from './component/Layout/default.vue'
	import Logo from '~icons/mqy-icon/logo'

	const appWrapperRef = ref()

	const props = defineProps(layoutProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)

	onMounted(() => {
		const { state } = useState()
		useResizeObserver(appWrapperRef, (entries) => {
			const { width } = entries[0].contentRect
			if (width <= 640) {
				if (!state.isMobile) {
					state.isMobile = true
				}

				if (!state.isCollapse) {
					state.isCollapse = true
				}
			} else {
				if (state.isMobile) {
					state.isMobile = false
				}
			}
		})
	})
</script>

<style lang="scss">
	// 把所有用到的element样式都在这里申明
	@use 'element-plus/theme-chalk/dark/css-vars.css';
	@use 'element-plus/theme-chalk/src/container.scss';
	@use 'element-plus/theme-chalk/src/main.scss';
	@use 'element-plus/theme-chalk/src/header.scss';
	@use 'element-plus/theme-chalk/src/scrollbar.scss';
	@use 'element-plus/theme-chalk/src/aside.scss';
	@use 'element-plus/theme-chalk/src/menu.scss';
	@use 'element-plus/theme-chalk/src/breadcrumb.scss';
	@use 'element-plus/theme-chalk/src/dropdown.scss';
	@use 'element-plus/theme-chalk/src/avatar.scss';
	@use 'element-plus/theme-chalk/src/overlay.scss';
	@use 'element-plus/theme-chalk/src/drawer.scss';
	@use 'element-plus/theme-chalk/src/divider.scss';
	@use 'element-plus/theme-chalk/src/switch.scss';
	@use 'element-plus/theme-chalk/src/select.scss';
	@use 'element-plus/theme-chalk/src/option.scss';
	@use 'element-plus/theme-chalk/src/icon.scss';
	@use 'element-plus/theme-chalk/src/input.scss';
	@use 'element-plus/theme-chalk/src/popover.scss';

	@import url('./styles/index.scss');
</style>
