<template>
	<div class="h-14 w-full flex-center shrink-0 cursor-pointer nowrap-hidden" @click="toggleCollapse">
		<slot name="logo" />
		<h3 v-show="!isCollapse" class="ml-2 text-4 text-primary font-bold">{{ props.globalTitle }}</h3>
	</div>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'

	const { props, emits, propsEnum } = useInject()
	const { isCollapse } = useState()

	const toggleCollapse = () => {
		if (props.isCollapse === undefined) {
			isCollapse.value = !isCollapse.value
		} else {
			emits('changeProp', propsEnum.isCollapse, !props.isCollapse)
		}
	}
</script>

<style>
	@unocss-placeholder;
</style>
