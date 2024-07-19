<template>
	<div class="h-12 w-full flex-center shrink-0 cursor-pointer nowrap-hidden" @click="toggleCollapse">
		<slot name="logo" />
		<h3 v-show="!state.isCollapse" class="ml-2 text-4 text-primary font-bold">{{ props.globalTitle }}</h3>
	</div>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'

	const { props } = useInject()
	const { state } = useState()

	const toggleCollapse = () => {
		state.isCollapse = !state.isCollapse
	}
</script>

<style>
	@unocss-placeholder;
</style>
