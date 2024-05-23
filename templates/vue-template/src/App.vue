<template>
	<el-config-provider :button="config" :size="assemblySize" :locale="zhCn">
		<router-view />
	</el-config-provider>
</template>

<script setup lang="ts">
	import zhCn from 'element-plus/es/locale/lang/zh-cn'

	import { GlobalStore } from '@/stores'

	// 配置全局组件大小 (small/default(medium)/large)
	const { assemblySize } = storeToRefs(GlobalStore())
	// // 配置element按钮文字中间是否有空格
	const config = reactive({
		autoInsertSpace: false,
	})
	// 标题
	useTitle(import.meta.env.VITE_APP_TITLE)
</script>

<style scoped lang="scss">
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
