<template>
	<mqy-background-layout
		:menuList="JSON.stringify(themeConfig.menuList)"
		:userAvatar="JSON.stringify(themeConfig.userAvatar)"
		:settingVisible="JSON.stringify(themeConfig.settingVisible)"
		:watermark="JSON.stringify(themeConfig.watermark)"
		@changeProp="handleChange"
		@selectMenu="selectMenu"
		@commandUser="commandUser"
		@tagRefresh="tagRefresh"
	>
		<div slot="main">
			<router-view v-slot="{ Component }">
				<transition mode="out-in">
					<keep-alive :include="keepAliveNameList" :key="refreshRouterViewKey">
						<component :is="Component" />
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</mqy-background-layout>
</template>

<script setup lang="ts">
	import { HOME_URL } from '@/config/config'
	import type { Layout } from '@mqy/component-private/dist/BackgroundLayout/layout'

	const refreshRouterViewKey = ref('')
	const router = useRouter()
	const { routeList, keepAliveNames } = useRoutesStore()

	const keepAliveNameList = computed(() => {
		return keepAliveNames.value.map((item) => item.name)
	})

	// 把路由列表转换成菜单列表
	const convertToLayoutMenu = (route: Menu.MenuOptions): Layout.Menu => {
		return {
			path: route.path,
			title: route.meta?.title || '',
			icon: route.meta?.icon,
			redirect: route.redirect,
			isShowFooter: route.meta?.isShowFooter,
			affix: route.meta?.isAffix,
			children: route.children?.map(convertToLayoutMenu),
		}
	}

	const menuList = computed(() => routeList.value.map(convertToLayoutMenu))

	const themeConfig = ref({
		menuList: menuList.value,
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

	const selectMenu = ({ detail = [] }) => {
		router.push(detail[0])
	}

	const tagRefresh = async ({ detail = [] }) => {
		refreshRouterViewKey.value = ''

		await nextTick()
		// 使用 replace 并添加强制刷新参数
		router.replace({
			path: detail[0],
			query: {
				...router.currentRoute.value.query,
				_t: Date.now(), // 添加时间戳强制刷新
			},
		})
		refreshRouterViewKey.value = detail[0]
	}

	const commandUser = ({ detail = [] }) => {
		if (detail[0] === 'setting') {
			themeConfig.value.settingVisible = true
		}

		if (detail[0] === 'loginOut') {
			ElMessageBox({
				closeOnClickModal: false,
				closeOnPressEscape: false,
				type: 'warning',
				title: '提示',
				message: '此操作将退出登录, 是否继续?',
				showCancelButton: true,
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				beforeClose: (action, instance, done) => {
					if (action === 'confirm') {
						instance.confirmButtonLoading = true
						instance.confirmButtonText = '退出中'
						setTimeout(() => {
							done()
							setTimeout(() => {
								instance.confirmButtonLoading = false
							}, 300)
						}, 700)
					} else {
						done()
					}
				},
			})
				.then(() => {
					useGlobalStore().token.value = ''
					useRoutesStore().resetRoute()

					router.push(HOME_URL)
					setTimeout(() => {
						ElMessage.success('安全退出成功！')
					}, 300)
				})
				.catch(() => {})
		}
	}

	const handleChange = ({ detail = [] }) => {
		themeConfig.value[detail[0]] = detail[1]
	}

	onBeforeMount(() => {
		refreshRouterViewKey.value = menuList.value[0].path
	})
</script>
