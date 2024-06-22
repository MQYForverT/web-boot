<template>
	<el-container class="layout-container h-[100%] w-[100%]">
		<mqy-aside />
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
	import { defineCustomElement } from 'vue'
	// import { propsEnum, emitsKey } from '../BackgroundLayout'
	import { ElContainer } from 'element-plus'

	import Aside from '../component/Aside/aside.ce.vue'
	// import Header from '../component/header.vue'
	// import Main from '../component/main.vue'
	// import { useThemeConfig } from '@store'

	const asideElement = defineCustomElement(Aside)
	customElements.define('mqy-aside', asideElement)

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

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/container.scss';
</style>
