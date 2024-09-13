<template>
	<el-dropdown :trigger="globalState?.language?.trigger" @command="handleCommand">
		<div class="h-6.5 w-6.5 flex-center cursor-pointer rounded-6px hover:bg-fill">
			<Language width="18" height="18" class="language" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					v-for="item in globalState?.language?.dropdownMenu"
					:key="item.key"
					:disabled="item.key === globalState.activeLanguage"
					:command="item.key"
				>
					{{ item.key }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup>
	import useGlobalStore from '@/components/globalStore'
	import Language from '~icons/mqy-icon/language'

	const { globalState } = useGlobalStore()

	const handleCommand = (val: string) => {
		globalState.activeLanguage = val
	}
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
