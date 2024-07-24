<template>
	<!--根元素会动态操作class，所以不要再这个上面加样式-->
	<div
		ref="appWrapperRef"
		:style="{ height: proxyProps.containerSize.height || '100vh', width: proxyProps.containerSize.width || '100vw' }"
	>
		<Transition mode="out-in">
			<component :is="curCom">
				<template #header>
					<slot name="header" />
				</template>
				<template #main>
					<slot name="main" />
				</template>
			</component>
		</Transition>

		<!--布局需要，对于动态位置的，直接传送门伺候-->
		<Teleport v-if="logoElement" :to="logoElement">
			<Logo>
				<template #logo>
					<slot name="logo">
						<LogoIcon width="30" height="30" fill="var(--el-color-primary)" />
					</slot>
				</template>
			</Logo>
		</Teleport>
	</div>
</template>
<script setup lang="ts">
	import useState from './hooks/useState'
	import useContainer from './hooks/useContainer'
	import { useWatermark } from './hooks/useWatermark'
	import { layoutEnum, layoutProps, propsKey, processPropType, emitsKey } from './BackgroundLayout'
	import type { LayoutEmits } from './BackgroundLayout'

	import defaults from './component/Layout/default.vue'
	import vertical from './component/Layout/vertical.vue'
	import Logo from './component/LayoutCommon/Logo.vue'

	import LogoIcon from '~icons/mqy-icon/logo'

	const { watermarkEl, getObserver, setWatermark, updateWatermark } = useWatermark()

	const appWrapperRef = ref()

	const props = defineProps(layoutProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)

	const { rootElement, logoElement } = useContainer()

	const { state } = useState(proxyProps, rootElement.value)

	const curCom = computed(() => {
		if (state.isMobile) {
			return defaults
		}

		switch (state.layout) {
			case layoutEnum.vertical:
				return vertical
			default:
				return defaults
		}
	})

	onMounted(() => {
		if (appWrapperRef.value) {
			rootElement.value = appWrapperRef.value
		}

		// 这里直接进行赋值是为了触发set拦截从而初始化主题
		nextTick(() => {
			state.menuMode = state.menuMode
			state.isDark = state.isDark
		})

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
					updateWatermark({ height, width })
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
	@use 'element-plus/theme-chalk/src/container';
	@use 'element-plus/theme-chalk/src/main';
	@use 'element-plus/theme-chalk/src/header';
	@use 'element-plus/theme-chalk/src/scrollbar';
	@use 'element-plus/theme-chalk/src/aside';
	@use 'element-plus/theme-chalk/src/menu';
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
