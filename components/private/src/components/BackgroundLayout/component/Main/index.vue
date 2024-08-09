<template>
	<el-main class="main bg-[var(--el-bg-color)] !p-0" :style="getStyle">
		<el-scrollbar>
			<div class="h-full flex-col justify-between p-3">
				<slot name="main" />
				<Footer v-if="props.isFooter" />
			</div>
		</el-scrollbar>
	</el-main>
</template>

<script lang="ts" setup>
	import Footer from '../Footer/index.vue'
	import useState from '../../hooks/useState'
	import useInject from '../../hooks/useInject'

	const { state } = useState()
	const { props } = useInject()

	const getStyle = computed(() => {
		const firstItem = state.activeTags.at(0)
		const lastItem = state.activeTags.at(-1)
		let borderRadius = '8px 8px 0 0'

		if (state.activePath === firstItem?.path) {
			borderRadius = '0 8px 0 0'
		}
		if (state.activePath === lastItem?.path) {
			borderRadius = '8px 0 0 0'
		}

		return {
			borderRadius,
		}
	})
</script>

<style>
	@unocss-placeholder;
</style>
