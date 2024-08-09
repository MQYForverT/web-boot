<template>
	<el-dropdown :trigger="props.language.trigger" @command="handleCommand">
		<div class="h-6.5 w-6.5 flex-center cursor-pointer rounded-6px hover:bg-fill">
			<Language width="18" height="18" class="language" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					v-for="item in props.language.dropdownMenu"
					:key="item.key"
					:disabled="item.key === props.activeLanguage"
					:command="item.key"
				>
					{{ item.value }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup>
	import Language from '~icons/mqy-icon/language'
	import useInject from '../../hooks/useInject'

	const { props, emits, propsEnum } = useInject()

	const handleCommand = (val: string) => {
		emits('changeProp', propsEnum.activeLanguage, val)
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
