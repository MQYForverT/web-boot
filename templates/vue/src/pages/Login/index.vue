<template>
	<div>
		contents12
		<ElButton type="primary">btn</ElButton>
		<mqy-example id="example" style="margin-top: 20px" title="Web Component" />
	</div>
</template>

<script setup lang="ts" name="Login">
	// import { ApiGetSendSms } from '@/api/global'

	// 按需注册
	// import { register } from '@mqy/component-private/dist/Example'
	// register()

	onMounted(() => {
		// ApiGetSendSms({
		// 	phone: 13349608528,
		// 	type: 1,
		// })
	})

	onMounted(() => {
		const example = document.getElementById('example')
		if (example) {
			example.addEventListener('testEvent', (e) => {
				console.log('web', e)
			})
		}
	})
</script>
