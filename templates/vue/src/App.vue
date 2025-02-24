<template>
	<el-config-provider :button="config" :size="buttonSize" :locale="zhCn" :message="messageConfig">
		<router-view />
	</el-config-provider>
</template>

<script setup lang="ts">
	import zhCn from 'element-plus/es/locale/lang/zh-cn'

	import { useSettingStore } from '@/stores'
	// 配置全局组件大小 (small/default(medium)/large)
	const { buttonSize } = useSettingStore()

	// 配置element按钮文字中间是否有空格
	const config = reactive({
		autoInsertSpace: false,
	})

	const messageConfig = reactive({
		max: 1,
	})
</script>
