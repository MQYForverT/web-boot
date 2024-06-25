<template>
	<!--不能使用ref、不能v-modal:updateModel-->
	<!-- <mqy-example id="example" ref="mqy" title="title1" style="margin-top: 20px" /> -->
	<mqy-background-layout
		:isCollapse="themeConfig.isCollapse"
		:menuList="themeConfig.menuList"
		:isMobile="themeConfig.isMobile"
		@changeProp="handleChange"
	>
		<div slot="logo">122</div>
		<div slot="body">12</div>
	</mqy-background-layout>
</template>

<script setup lang="ts">
	import { menuList } from '@/assets/menuList'
	// import { register } from '@/components/Example'
	// register()

	// @unocss-include
	const themeConfig = ref({
		isCollapse: false,
		isMobile: true,
		menuList,
	})

	const handleChange = ({ detail = [] }) => {
		console.log('web1', detail)
		// const { isCollapse } = themeConfig.value
		themeConfig.value.isCollapse = Boolean(detail[1])
		// console.log(themeConfig.value)
		// 你的逻辑
	}
</script>
