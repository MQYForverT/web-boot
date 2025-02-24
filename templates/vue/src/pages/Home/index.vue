<template>
	<div>
		{{ count }}
		<button @click="count++">increment</button>
	</div>
</template>

<script setup lang="ts">
	defineOptions({
		name: 'home',
	})

	const count = ref(0)
</script>
