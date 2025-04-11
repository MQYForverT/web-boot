<template>
	<div
		ref="appWrapperRef"
		:style="{
			height: proxyProps.containerSize.height || '100vh',
			width: proxyProps.containerSize.width || '100vw',
			...(proxyProps.containerSize.style || {}),
		}"
	>
		<el-config-provider v-bind="globalState.uiConfigProvider">
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

			<!--提供containerBackground插槽来霍霍。可以设置全局背景图，如video、image。默认支持快速配置全局背景图-->
			<slot name="containerBackground">
				<div
					v-if="proxyProps.containerBackground.background || proxyProps.containerBackground?.style"
					class="containerBackground"
					:style="{
						background: `url(${proxyProps.containerBackground.background}) no-repeat center center / cover`,
						opacity: proxyProps.containerBackground.opacity || 0.1,
						...(proxyProps.containerBackground.style || {}),
					}"
				/>
			</slot>
		</el-config-provider>
	</div>
</template>
<script setup lang="ts">
	import useGlobalStore from '@/components/common/globalStore'
	import useState from './hooks/useState'
	import useContainer from './hooks/useContainer'
	import { handleSetIsDark } from './hooks/useTheme'
	import { useWatermark } from './hooks/useWatermark'
	import { layoutEnum, layoutProps, propsKey, processPropType, emitsKey } from './BackgroundLayout'
	import type { LayoutEmits } from './BackgroundLayout'

	import defaults from './component/Layout/default.vue'
	import vertical from './component/Layout/vertical.vue'
	import Logo from './component/LayoutCommon/Logo.vue'

	import LogoIcon from '~icons/mqy-icon/logo'

	const { setAppendEl, watermarkEl, getObserver, setWatermark, updateWatermark } = useWatermark()

	const appWrapperRef = ref()

	const props = defineProps(layoutProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<LayoutEmits>()
	provide(emitsKey, emits)

	const { globalState, setIsDarkHandle } = useGlobalStore()
	const { rootElement, logoElement } = useContainer()

	const { state } = useState(proxyProps, emits, rootElement.value)

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
			setAppendEl(appWrapperRef.value)
		}

		// 这里直接进行赋值是为了触发set拦截从而初始化主题
		nextTick(() => {
			state.menuMode = state.menuMode
			setIsDarkHandle(handleSetIsDark)
			globalState.theme = globalState.theme
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
	// 不想全局导入所有样式，就把所有用到的element样式都在这里申明
	@use 'element-plus/theme-chalk/src/container';
	@use 'element-plus/theme-chalk/src/main';
	@use 'element-plus/theme-chalk/src/scrollbar';
	@use 'element-plus/theme-chalk/src/aside';
	@use 'element-plus/theme-chalk/src/menu';
	@use 'element-plus/theme-chalk/src/dropdown';
	@use 'element-plus/theme-chalk/src/avatar';
	@use 'element-plus/theme-chalk/src/overlay';
	@use 'element-plus/theme-chalk/src/drawer';
	@use 'element-plus/theme-chalk/src/switch';
	@use 'element-plus/theme-chalk/src/select';
	@use 'element-plus/theme-chalk/src/option';
	@use 'element-plus/theme-chalk/src/icon';
	@use 'element-plus/theme-chalk/src/input';
	@use 'element-plus/theme-chalk/src/popover';

	@import url('./styles/index.scss');

	.containerBackground {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 100%;
		pointer-events: none;
		filter: brightness(0.75);
	}
</style>
