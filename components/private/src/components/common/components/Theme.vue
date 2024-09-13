<template>
	<div class="h-6.5 w-6.5 flex-center cursor-pointer rounded-6px hover:bg-fill" @click="clickTheme">
		<el-icon size="18" ref="isThemeRef">
			<Transition name="fade" mode="out-in">
				<component :is="curCom" />
			</Transition>
		</el-icon>
	</div>
</template>

<script lang="ts" setup>
	import useGlobalStore, { themeModeEnum } from '@/components/common/globalStore'
	import { Sunny, Moon } from '@element-plus/icons-vue'

	const { setThemeElement, globalState, isDark } = useGlobalStore()

	const curCom = computed(() => {
		if (isDark()) {
			return Sunny
		} else {
			return Moon
		}
	})

	const isThemeRef = ref()

	const clickTheme = () => {
		setThemeElement(isThemeRef.value.$el)
		globalState.theme = isDark() ? themeModeEnum.light : themeModeEnum.dark
	}
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.fade-leave-active {
		transition: all 0.6s ease;
	}

	.fade-enter-active {
		transition: all 0.3s ease;
	}

	.fade-leave-to {
		opacity: 0;
		transform: rotate(-360deg) scale(0.1);
	}

	.fade-enter-from {
		opacity: 0;
		transform: rotate(30deg) translateX(40%) scale(0.5);
	}

	.fade-enter-to,
	.fade-leave-from {
		opacity: 1;
		transform: rotate(0deg);
	}
</style>
