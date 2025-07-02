<template>
	<div class="ml-2.5 h-6.5 w-6.5 flex-center cursor-pointer rounded-6px hover:bg-fill" @click="toggleCollapse">
		<alignLeft v-show="!state.isCollapse" width="20" height="20" />
		<alignRight v-show="state.isCollapse" width="20" height="20" />
	</div>
</template>

<script lang="ts" setup>
	import alignLeft from '~icons/tsoul-icon/align-left'
	import alignRight from '~icons/tsoul-icon/align-right'
	import useState from '../../hooks/useState'

	const { state } = useState()

	const toggleCollapse = () => {
		state.isCollapse = !state.isCollapse
	}
</script>

<style>
	@unocss-placeholder;
</style>
