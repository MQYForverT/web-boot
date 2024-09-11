<template>
	<div
		class="h-12 w-full flex-y-center shrink-0 cursor-pointer nowrap-hidden p-y-2.5 p-r-1 p-l-2.5"
		@click="toggleCollapse"
		:style="{ width: width }"
	>
		<slot name="logo" />
		<h3 v-show="!state.isCollapse" class="ml-2 text-4 text-primary font-bold">{{ globalState.globalTitle }}</h3>
	</div>
</template>

<script lang="ts" setup>
	import useGlobalStore from '@/components/globalStore'
	import useState from '../../hooks/useState'
	import { isCollapseWidth, isNotCollapseWidth, isNotCollapseAndMobileWidth } from '../../constants/aside'

	const { globalState } = useGlobalStore()
	const { state } = useState()

	const toggleCollapse = () => {
		state.isCollapse = !state.isCollapse
	}

	const width = computed(() => {
		if (state.isMobile) {
			return state.isCollapse ? isNotCollapseAndMobileWidth : isCollapseWidth
		} else {
			return state.isCollapse ? isNotCollapseWidth : isCollapseWidth
		}
	})
</script>

<style>
	@unocss-placeholder;
</style>
