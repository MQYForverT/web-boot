<template>
	<div>contents</div>
</template>

<script setup lang="ts" name="Login">
	import { ApiGetSendSms } from '@/api/global'

	onMounted(() => {
		ApiGetSendSms({
			phone: 13349608528,
			type: 1,
		})
	})
</script>
