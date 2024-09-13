<template>
	<div>
		<mqy-background-layout
			:containerBackground="JSON.stringify(themeConfig.containerBackground)"
			:menuList="JSON.stringify(themeConfig.menuList)"
			:userAvatar="JSON.stringify(themeConfig.userAvatar)"
			:setting="JSON.stringify(themeConfig.setting)"
			:settingVisible="JSON.stringify(themeConfig.settingVisible)"
			:watermark="JSON.stringify(themeConfig.watermark)"
			@changeProp="handleChange"
			@selectMenu="selectMenu"
			@commandUser="commandUser"
			@tagRefresh="tagRefresh"
		>
			<div slot="header">
				<div class="headerSlot">
					<span>button1</span>
					<span>button2</span>
				</div>
			</div>
			<div slot="main">123</div>
		</mqy-background-layout>
	</div>
</template>

<script setup lang="ts" name="Login">
	// import { ApiGetSendSms } from '@/api/global'

	const { isCollapse, animateMode } = useSettingStore()
	const router = useRouter()

	const menuList = [
		{
			path: '/',
			title: '首页',
			redirect: '/home1',
			children: [
				{
					path: '/home1',
					icon: '',
					title: '首页1',
					isShowFooter: false,
				},
				{
					path: '/home2',
					icon: 'i-ep-tickets',
					title: '首页2',
					affix: true,
					isShowFooter: true,
				},
			],
		},
		{
			path: '/menu',
			icon: '',
			title: '菜单',
			redirect: '/menu/menu1',
			children: [
				{
					path: '/menu/menu1',
					icon: '',
					title: '菜单1',
				},
			],
		},
	]
	const imgUrl = new URL('@/assets/images/home.jpg', import.meta.url).href

	const themeConfig = ref({
		containerBackground: {
			background: imgUrl,
			opacity: 0.5,
			style: {
				opacity: 0.1,
			},
		},
		isCollapse: false,
		isMobile: false,
		isDark: false,
		menuList,
		userAvatar: {
			show: true,
			name: '12',
			trigger: 'click',
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
		setting: {
			enable: true,
		},
		settingVisible: false,
	})

	onMounted(() => {
		// ApiGetSendSms({
		// 	phone: 13349608528,
		// 	type: 1,
		// })
		// router.push('/403')
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
