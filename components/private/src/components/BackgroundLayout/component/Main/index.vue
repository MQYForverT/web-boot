<template>
	<el-main class="mt-1px bg-[var(--el-bg-color-page)] !p-0">
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

	import useInject from '../../hooks/useInject'

	const { props } = useInject()
</script>

<style>
	@unocss-placeholder;
</style>
