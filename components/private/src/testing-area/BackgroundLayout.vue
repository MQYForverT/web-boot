<template>
	<!--不能使用ref、不能v-modal:updateModel-->
	<!-- <mqy-example id="example" ref="mqy" title="title1" style="margin-top: 20px" /> -->
	<mqy-background-layout
		:containerBackground="JSON.stringify(themeConfig.containerBackground)"
		:layout="JSON.stringify(themeConfig.layout)"
		:menuList="JSON.stringify(themeConfig.menuList)"
		:userAvatar="JSON.stringify(themeConfig.userAvatar)"
		:settingVisible="JSON.stringify(themeConfig.settingVisible)"
		:watermark="JSON.stringify(themeConfig.watermark)"
		@changeProp="handleChange"
		@selectMenu="selectMenu"
		@commandUser="commandUser"
		@tagRefresh="tagRefresh"
	>
		<div slot="header">
			<div class="headerSlot">
				<span @click="themeConfig.layout = 'vertical'">button1</span>
				<span>button2</span>
			</div>
		</div>
		<div slot="main">
			<div style="height: 120px">hello</div>
			<div style="height: 120px">hello</div>
		</div>
	</mqy-background-layout>
</template>

<script setup lang="ts">
	import { menuList } from '@/assets/menuList'
	const imgUrl = new URL('@/assets/home.jpg', import.meta.url).href
	// import { register } from '@/components/Example'
	// register()
	onMounted(() => {
		setTimeout(() => {
			themeConfig.value.isCollapse = true
		}, 2000)
	})

	const themeConfig = ref({
		containerBackground: {
			background: imgUrl,
			opacity: 0.5,
			style: {
				opacity: 0.1,
			},
		},
		layout: 'defaults',
		isCollapse: false,
		isMobile: false,
		menuList,
		userAvatar: {
			show: true,
			trigger: 'click',
			name: '12',
			dropdownMenu: [
				{
					key: 'loginOut',
					value: '退出登录',
				},
				{
					key: 'setting',
					value: '个性设置',
				},
			],
		},
		watermark: {
			text: '漠轻阴666',
		},
		settingVisible: false,
	})

	const commandUser = ({ detail = [] }) => {
		console.log('commandUser', detail)
		// const { isCollapse } = themeConfig.value
		themeConfig.value.settingVisible = true
		// console.log(themeConfig.value)
		// 你的逻辑
	}

	const selectMenu = ({ detail = [] }) => {
		console.log('selectMenu', detail)
		// const { isCollapse } = themeConfig.value
	}

	const tagRefresh = ({ detail = [] }) => {
		console.log('tagRefresh', detail)
		// const { isCollapse } = themeConfig.value
	}

	const handleChange = ({ detail = [] }) => {
		console.log('handleChange', detail)
		themeConfig.value[detail[0]] = detail[1]
	}
</script>

<style>
	@unocss-placeholder;
</style>
