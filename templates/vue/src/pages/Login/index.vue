<template>
	<div>
		contents12
		<ElButton type="primary">{{ isCollapse }}</ElButton>
		<mqy-background-layout :isCollapse="layout.isCollapse" :layout="layout.layout" @changeProp="handleChange" />
	</div>
</template>

<script setup lang="ts" name="Login">
	// import { ApiGetSendSms } from '@/api/global'
	import { LayoutType, propsEnum } from '@mqy/component-private/dist/BackgroundLayout'

	const { isCollapse } = useSettingStore()

	const { width } = useWindowSize()

	const layout = computed(() => {
		const obj = {
			layout: LayoutType.defaults,
			isCollapse: isCollapse.value,
		}
		if (width.value < 1000) {
			obj.layout = LayoutType.space
			obj.isCollapse = true
		}
		return obj
	})

	onMounted(() => {
		// ApiGetSendSms({
		// 	phone: 13349608528,
		// 	type: 1,
		// })
	})

	const handleChange = ({ detail = [] }) => {
		console.log('web1', detail)
		switch (detail[0]) {
			case propsEnum.isCollapse:
				isCollapse.value = Boolean(detail[1])
				break
		}
		// 你的逻辑
	}
</script>
