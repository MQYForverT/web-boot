<script setup lang="ts">
	defineProps({
		a: {
			type: Number,
			required: true,
		},
		e: Number,
	})
	const a = 33
</script>

<template>
	<div class="fixed-tr">
		<a href="https://farmfe.org/" target="_blank">
			<img src="./assets/logo.png" class="logo" alt="Farm logo" />
		</a>

		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld2 msg="Farm + Vue" />
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		transition: filter 300ms;
		will-change: filter;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #9f1a8faa);
	}

	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
