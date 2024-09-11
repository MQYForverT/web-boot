<template>
	<div class="flex-y-center justify-between px-6 <sm:px-8 absolute top-0 right-0 left-0 h-20">
		<div class="flex-y-center">
			<slot name="logo" />
			<div class="text-5 ml-4">{{ globalState.globalTitle }}</div>
		</div>
		<div class="flex-y-center">
			<el-switch
				ref="isDarkRef"
				:model-value="globalState.isDark"
				inline-prompt
				:active-icon="Sunny"
				:inactive-icon="Moon"
				@change="(e) => (globalState.isDark = Boolean(e))"
			/>
			<el-dropdown :trigger="globalState?.language?.trigger" @command="handleCommand">
				<div class="flex-center h-5 w-10 cursor-pointer">
					<Language width="20" height="20" class="language" />
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
		</div>
	</div>
</template>

<script lang="ts" setup>
	import useGlobalStore from '@/components/globalStore'
	import { Sunny, Moon } from '@element-plus/icons-vue'

	import Language from '~icons/mqy-icon/language'

	const isDarkRef = ref()

	const { globalState, isDarkElement } = useGlobalStore()

	onMounted(() => {
		if (isDarkRef.value?.$el) {
			isDarkElement.value = isDarkRef.value.$el
		}
	})

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
