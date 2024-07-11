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
	import { useWatermark } from './hooks/useWatermark'
	import { layoutProps, propsKey, processPropType, emitsKey } from './BackgroundLayout'
	import type { LayoutEmits } from './BackgroundLayout'
	import defaults from './component/Layout/default.vue'
	import Logo from '~icons/mqy-icon/logo'

	const { watermarkEl, getObserver, setWatermark, updateWatermark } = useWatermark()

	const appWrapperRef = ref()

	const props = defineProps(layoutProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)

	onMounted(() => {
		const { state } = useState()
		useResizeObserver(appWrapperRef, (entries) => {
			const { width, height } = entries[0].contentRect
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

			// 更新水印
			if (proxyProps.watermark.text) {
				if (watermarkEl.value) {
					// useDebounceFn(() => {
					updateWatermark({ height, width })
					// }, 100)
				} else {
					setWatermark(proxyProps.watermark)
				}
			}
		})
	})

	onBeforeUnmount(() => {
		const observer = getObserver()
		if (observer) {
			observer.disconnect()
		}
	})
</script>

<style lang="scss">
	// 把所有用到的element样式都在这里申明
	@use 'element-plus/theme-chalk/dark/css-vars.css';
	@use 'element-plus/theme-chalk/src/container';
	@use 'element-plus/theme-chalk/src/main';
	@use 'element-plus/theme-chalk/src/header';
	@use 'element-plus/theme-chalk/src/scrollbar';
	@use 'element-plus/theme-chalk/src/aside';
	@use 'element-plus/theme-chalk/src/menu';
	@use 'element-plus/theme-chalk/src/breadcrumb';
	@use 'element-plus/theme-chalk/src/dropdown';
	@use 'element-plus/theme-chalk/src/avatar';
	@use 'element-plus/theme-chalk/src/overlay';
	@use 'element-plus/theme-chalk/src/drawer';
	@use 'element-plus/theme-chalk/src/divider';
	@use 'element-plus/theme-chalk/src/switch';
	@use 'element-plus/theme-chalk/src/select';
	@use 'element-plus/theme-chalk/src/option';
	@use 'element-plus/theme-chalk/src/icon';
	@use 'element-plus/theme-chalk/src/input';
	@use 'element-plus/theme-chalk/src/popover';

	@import url('./styles/index.scss');
</style>
