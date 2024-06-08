<template>
	<mqy-example id="example" style="margin-top: 20px" title="Web Component" />
</template>

<script setup lang="ts">
	onMounted(() => {
		const example = document.getElementById('example')
		if (example) {
			example.addEventListener('testEvent', (e) => {
				console.log('web', e)
			})
		}
	})
</script>
