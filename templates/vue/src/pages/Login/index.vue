<template>
	<div>
		contents12
		<ElButton type="primary">{{ isCollapse }}</ElButton>
		<mqy-background-layout :isCollapse="isCollapse" @change="handleChange" />
	</div>
</template>

<script setup lang="ts" name="Login">
	// import { ApiGetSendSms } from '@/api/global'

	// 按需注册
	// import { register } from '@mqy/component-private/dist/Example'
	// register()

	const { isCollapse } = useSettingStore()

	onMounted(() => {
		// ApiGetSendSms({
		// 	phone: 13349608528,
		// 	type: 1,
		// })
	})

	const handleChange = ({ detail = [] }) => {
		console.log('web1', detail)
		// const { isCollapse } = themeConfig.value
		isCollapse.value = Boolean(detail[1])
		console.log(isCollapse.value)
		// 你的逻辑
	}
</script>
