<template>
	<el-container class="layout-container">
		<Aside />
		<!-- <el-container class="flex-center" :class="{ 'layout-backtop': !isFixedHeader }">
			<Header v-if="isFixedHeader" />
			<el-scrollbar ref="layoutDefaultsScrollbarRef" :class="{ 'layout-backtop': isFixedHeader }">
				<Header v-if="!isFixedHeader" />
				<Main />
			</el-scrollbar>
		</el-container>
		<el-backtop target=".layout-backtop .el-scrollbar__wrap" /> -->
	</el-container>
</template>

<script setup lang="ts">
	// import { propsEnum, emitsKey } from '../BackgroundLayout'
	import { ElContainer } from 'element-plus'

	// import Aside from '../component/Aside/aside.ce.vue'
	import Aside from '../component/aside.vue'
	// import Header from '../component/header.vue'
	// import Main from '../component/main.vue'
	// import { useThemeConfig } from '@store'

	// const props = inject(propsKey)!
	// const emits = inject(emitsKey)!

	// const { proxy } = getCurrentInstance()

	// const route = useRoute()
	// const isFixedHeader = computed(() => {
	// 	return useThemeConfig().themeConfig.isFixedHeader
	// })
	// // 监听路由的变化
	// watch(
	// 	() => route.path,
	// 	() => {
	// 		proxy.$refs.layoutDefaultsScrollbarRef.scrollTop = 0
	// 	},
	// )
	// const layoutDefaultsScrollbarRef = ref(null)

	// provide('scrollbarRef', layoutDefaultsScrollbarRef)
</script>
