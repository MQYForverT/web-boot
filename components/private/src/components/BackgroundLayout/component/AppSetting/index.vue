<template>
	<el-drawer
		:model-value="props.settingVisible"
		:title="props.setting.title || '个性设置'"
		:size="330"
		show-close
		:before-close="handleOpen"
	>
		<ShowSetting />
	</el-drawer>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import ShowSetting from './ShowSetting.vue'

	const { props, emits, propsEnum } = useInject()

	const handleOpen = () => {
		emits('changeProp', propsEnum.settingVisible, false)
	}
</script>
