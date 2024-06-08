<template>
	<div>
		contents12
		<mqy-example id="example" style="margin-top: 20px" title="Web Component" />
	</div>
</template>

<script setup lang="ts" name="Login">
	import { ApiGetSendSms } from '@/api/global'

	onMounted(() => {
		ApiGetSendSms({
			phone: 13349608528,
			type: 1,
		})
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
