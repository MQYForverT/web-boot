<template>
	<div class="h-14 w-10 flex-center cursor-pointer hover:bg-fill" @click="toggleCollapse">
		<alignLeft v-if="!props.isCollapse" width="20" height="20" />
		<alignRight v-else width="20" height="20" />
	</div>
</template>

<script lang="ts" setup>
	import alignLeft from '@/assets/svg/align-left.svg?component'
	import alignRight from '@/assets/svg/align-right.svg?component'
	import useInject from '../../hooks/useInject'

	const { props, emits, propsEnum } = useInject()

	const toggleCollapse = () => {
		emits('changeProp', propsEnum.isCollapse, !props.isCollapse)
	}
</script>

<style>
	@unocss-placeholder;
</style>
