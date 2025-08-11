<template>
	<div
		class="flex flex-col min-h-screen bg-[var(--el-bg-color-page)] text-[var(--el-text-color-primary)] transition-colors duration-300"
	>
		<header
			class="flex items-center justify-between px-8 py-4 bg-[var(--el-bg-color)] border-b border-[var(--el-border-color)]"
		>
			<h1 class="text-xl font-bold">@tsoul/component-public 组件库游乐场</h1>
			<button
				@click="toggleDark"
				class="px-4 py-2 rounded border border-[var(--el-border-color)] bg-[var(--el-fill-color)] text-[var(--el-text-color-primary)] cursor-pointer"
			>
				切换至 {{ isDark ? '亮色' : '暗色' }} 主题
			</button>
		</header>
		<main class="flex-grow p-8">
			<!-- 未来我们的组件将在这里展示 -->
			<p>在这里测试你的组件...</p>
		</main>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const isDark = ref(document.documentElement.classList.contains('dark'))

	function toggleDark() {
		isDark.value = !isDark.value
		if (isDark.value) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}
</script>

<style>
	/* 可以在这里保留一些无法或不便用 UnoCSS 处理的全局样式 */

	/* 但此场景下，UnoCSS 已足够，无需额外样式 */
</style>
