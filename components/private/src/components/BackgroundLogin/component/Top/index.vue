<template>
	<div class="flex-y-center justify-between px-6 <sm:px-8 absolute top-0 right-0 left-0 h-20 z-2">
		<div class="flex-y-center">
			<slot name="logo" />
			<div class="text-5 ml-4">{{ globalState.globalTitle }}</div>
		</div>
		<div class="flex-y-center px-2 py-1 bg-[var(--el-color-info-light-9)] rounded-2xl">
			<Teleport :to="globalState?.language?.to" :disabled="!globalState?.language?.to">
				<Language v-if="globalState?.language?.show" :style="{ margin: `0 ${globalState.language.gap || '3px'}` }" />
			</Teleport>
			<Teleport :to="globalState?.themeConfig?.to" :disabled="!globalState?.themeConfig?.to">
				<Theme v-if="globalState?.themeConfig?.show" :style="{ margin: `0 ${globalState.themeConfig.gap || '3px'}` }" />
			</Teleport>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Language from '@/components/common/components/Language.vue'
	import Theme from '@/components/common/components/Theme.vue'

	import globalStore from '@/components/common/globalStore'

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
