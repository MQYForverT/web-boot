<template>
	<div class="flex-y-center justify-between px-6 <sm:px-8 absolute top-0 right-0 left-0 h-20">
		<div class="flex-y-center">
			<slot name="logo" />
			<div class="text-5 ml-4">{{ globalState.globalTitle }}</div>
		</div>
		<div class="flex-y-center gap-2.5">
			<Language />
			<Theme />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Language from '@/components/commonComp/Language.vue'
	import Theme from '@/components/commonComp/Theme.vue'

	import globalStore from '@/components/globalStore'

	const { globalState } = globalStore()
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.language {
		path {
			fill: var(--el-text-color-primary);
		}
	}
</style>
