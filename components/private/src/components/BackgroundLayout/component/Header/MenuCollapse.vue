<template>
	<div class="h-14 w-10 flex-center cursor-pointer hover:bg-fill" @click="toggleCollapse">
		<alignLeft v-if="!state.isCollapse" width="20" height="20" />
		<alignRight v-else width="20" height="20" />
	</div>
</template>

<script lang="ts" setup>
	import alignLeft from '~icons/mqy-icon/align-left'
	import alignRight from '~icons/mqy-icon/align-right'
	import useState from '../../hooks/useState'

	const { state } = useState()

	const toggleCollapse = () => {
		state.isCollapse = !state.isCollapse
	}
</script>

<style>
	@unocss-placeholder;
</style>
