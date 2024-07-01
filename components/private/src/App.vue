<template>
	<!--不能使用ref、不能v-modal:updateModel-->
	<!-- <mqy-example id="example" ref="mqy" title="title1" style="margin-top: 20px" /> -->
	<mqy-background-layout
		:menuList="JSON.stringify(themeConfig.menuList)"
		:language="JSON.stringify(themeConfig.language)"
		:userAvatar="JSON.stringify(themeConfig.userAvatar)"
		activeLanguage="zh-CN"
		:isDark="true"
		@changeProp="handleChange"
	>
	</mqy-background-layout>
</template>

<script setup lang="ts">
	import { menuList } from '@/assets/menuList'
	// import { register } from '@/components/Example'
	// register()

	onMounted(() => {
		setTimeout(() => {
			themeConfig.value.isCollapse = true
		}, 2000)
	})

	// @unocss-include
	const themeConfig = ref({
		isCollapse: false,
		isMobile: false,
		menuList,
		language: {
			show: true,
			trigger: 'hover',
			dropdowMenu: [
				{
					key: 'zh-CN',
					value: '简体中文',
				},
				{
					key: 'en',
					value: 'English',
				},
			],
		},
		userAvatar: {
			show: true,
			name: '12',
			dropdowMenu: [
				{
					key: 'loginOut',
					value: '退出登录',
				},
			],
		},
	})

	const handleChange = ({ detail = [] }) => {
		console.log('web1', detail)
		// const { isCollapse } = themeConfig.value
		themeConfig.value.isCollapse = Boolean(detail[1])
		// console.log(themeConfig.value)
		// 你的逻辑
	}
</script>

<style>
	@unocss-placeholder;
</style>
