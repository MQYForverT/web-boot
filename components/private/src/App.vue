<template>
	<!--不能使用ref、不能v-modal:updateModel-->
	<!-- <mqy-example id="example" ref="mqy" title="title1" style="margin-top: 20px" /> -->
	<mqy-background-layout
		:isCollapse="themeConfig.isCollapse"
		:layout="themeConfig.layout"
		:menuList="themeConfig.menuList"
		@changeProp="handleChange"
	>
		<div slot="mqy">12我</div>
	</mqy-background-layout>
	{{ themeConfig.isCollapse }}
</template>

<script setup lang="ts">
	// import { register } from '@/components/Example'
	// register()
	const themeConfig = ref({
		isCollapse: true,
		layout: 'default',
		menuList: [
			{
				icon: 'icon-home',
				path: '/',
				meta: {
					title: '首页',
					isMenu: true,
					isViewRouter: false,
				},
				children: [
					{
						icon: 'icon-home',
						path: '/home1',
						meta: {
							title: '首页1',
							isMenu: true,
							isViewRouter: false,
						},
					},
					{
						icon: 'icon-home',
						path: '/home2',
						meta: {
							title: '首页2',
							isMenu: true,
							isViewRouter: false,
						},
					},
				],
			},
		],
	})

	const handleChange = ({ detail = [] }) => {
		console.log('web1', detail)
		// const { isCollapse } = themeConfig.value
		themeConfig.value.isCollapse = Boolean(detail[1])
		// console.log(themeConfig.value)
		// 你的逻辑
	}
</script>
