<template>
	<div
		class="login-container"
		:style="{
			height: proxyProps.containerSize.height,
			width: proxyProps.containerSize.width,
			...proxyProps.containerSize.style,
		}"
	>
		<el-config-provider v-bind="globalState.uiConfigProvider">
			<Top>
				<template #logo>
					<slot name="logo">
						<LogoIcon width="42" height="42" fill="var(--el-color-primary)" />
					</slot>
				</template>
			</Top>
			<el-card
				class="z-1 !border-none w-100 !bg-transparent <sm:w-83 flex-center"
				:class="{
					'h-full !rounded-0': proxyProps.layout !== layoutEnum.center,
					'layoutCenter !rounded-4%': proxyProps.layout === layoutEnum.center,
					layoutLeft: proxyProps.layout === layoutEnum.left,
					layoutRight: proxyProps.layout === layoutEnum.right,
				}"
			>
				<slot name="header">
					<h3 class="mt-6 font-500 text-primary text-18px pl-5 pr-5">{{ proxyProps.title }}</h3>
				</slot>
				<div class="pl-5 pr-5">
					<Transition name="fade" mode="out-in">
						<slot name="body">
							<Form />
						</slot>
					</Transition>
				</div>
				<slot name="footer" />
			</el-card>
			<div
				v-if="proxyProps.layout !== layoutEnum.center"
				class="layoutImage md:block hidden"
				:style="{ left: proxyProps.layout === layoutEnum.left ? 'calc(50% + 12.5rem)' : 'calc(50% - 12.5rem)' }"
			>
				<slot name="layoutImage">
					<div class="flex-center flex-col w-max">
						<LayoutImageIcon width="100%" height="100%" />
						<div class="color-[var(--el-text-color)] mt-6 font-sans lg:text-2xl">开箱即用的大型中后台管理系统</div>
						<div class="color-[var(--el-text-color-regular)] mt-2">工程化、高性能、跨组件库的前端模版</div>
					</div>
				</slot>
			</div>

			<slot name="containerBackground">
				<div
					class="containerBackground"
					:style="{
						background: `url(${proxyProps.containerBackground.background}) no-repeat center center / cover`,
						opacity: proxyProps.containerBackground.opacity,
						...proxyProps.containerBackground.style,
					}"
				/>
			</slot>
		</el-config-provider>
	</div>
</template>

<script setup lang="ts">
	import useGlobalStore from '@/components/common/globalStore'
	import { layoutEnum, initProps, propsKey, processPropType, emitsKey } from './BackgroundLogin'
	import type { Emits } from './BackgroundLogin'

	import Top from './component/Top/index.vue'
	import Form from './component/Form/index.vue'

	import LogoIcon from '~icons/tsoul-icon/logo'
	import LayoutImageIcon from '~icons/tsoul-icon/layoutImage'

	const { globalState } = useGlobalStore()

	const props = defineProps(initProps)
	const proxyProps = processPropType(props)
	provide(propsKey, proxyProps)

	const emits = defineEmits<Emits>()
	provide(emitsKey, emits)

	onMounted(() => {
		// 这里直接进行赋值是为了触发set拦截从而初始化主题
		nextTick(() => {
			globalState.theme = globalState.theme
		})
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	// 把所有用到的element样式都在这里申明
	@use 'element-plus/theme-chalk/src/card';
	@use 'element-plus/theme-chalk/src/form';
	@use 'element-plus/theme-chalk/src/text';
	@use 'element-plus/theme-chalk/src/button';
	@use 'element-plus/theme-chalk/src/input';
	@use 'element-plus/theme-chalk/src/switch';
	@use 'element-plus/theme-chalk/src/icon';
	@use 'element-plus/theme-chalk/src/dropdown';

	.login-container {
		@apply relative wh-full dark:bg-#101628 bg-no-repeat bg-center-top;
	}

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

	.el-card.is-always-shadow {
		box-shadow: none;
	}

	.el-card__body {
		width: 100%;
		padding: 0;
	}

	.layoutLeft {
		position: absolute;
		top: 50%;
		left: 50%;
		box-shadow: none;
		transform: translate(-50%, -50%);
	}

	.layoutCenter {
		position: absolute;
		top: 50%;
		left: 50%;
		box-shadow: var(--el-box-shadow-lighter) !important;
		transform: translate(-50%, -50%);
	}

	.layoutRight {
		position: absolute;
		top: 50%;
		left: 50%;
		box-shadow: none;
		transform: translate(-50%, -50%);
	}

	@media (width >= 768px) {
		.layoutLeft {
			/* 中等屏幕尺寸下的特定样式 */
			position: absolute;
			top: 50%;
			left: 0;
			box-shadow: var(--el-box-shadow-lighter) !important;
			transform: translate(0, -50%);
		}

		.layoutRight {
			position: absolute;
			top: 50%;
			right: 0;
			left: auto;
			box-shadow: var(--el-box-shadow-lighter) !important;
			transform: translate(0, -50%);
		}
	}

	.layoutImage {
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.3s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

	.animate-float {
		animation: float 5s linear 0s infinite;
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-20px);
		}

		100% {
			transform: translateY(0);
		}
	}
</style>
