<script lang="ts">
	import { onMount } from 'svelte'
	// @ts-ignore
	import router from 'page'
	import { HOME_URL } from '@/config/config'
	import { globalStore } from '@/stores/index'
	import { routesStore } from '@/stores/modules/routes'
	import type { Layout } from '@mqy/component-private/dist/BackgroundLayout/layout'
	
	let ref: HTMLElement
	let routeList: any[] = []
	
	// 把路由列表转换成菜单列表
	const convertToLayoutMenu = (route: any): Layout.Menu => {
		return {
			path: route.path || '',
			title: route.meta?.title || '',
			icon: route.meta?.icon,
			redirect: route.redirect,
			isShowFooter: route.meta?.isShowFooter,
			affix: route.meta?.isAffix,
			children: route.children?.map(convertToLayoutMenu),
		}
	}
	
	let themeConfig: {
		menuList: Layout.Menu[],
		userAvatar: any,
		watermark: any,
		settingVisible: boolean
	} = {
		menuList: [],
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
	}
	
	const updateThemeConfig = () => {
		if (routeList.length > 0) {
			themeConfig = {
				...themeConfig,
				menuList: routeList.map(convertToLayoutMenu),
			}
		}
	}
	
	// 订阅路由状态
	routesStore.routeList.subscribe(value => {
		routeList = value
		updateThemeConfig()
	})
	
	const selectMenu = ({ detail = [] }: { detail: string[] }) => {
		router(detail[0])
	}
	
	const tagRefresh = async ({ detail = [] }: { detail: string[] }) => {
		// 在Svelte中，我们可以通过重新导航来刷新
		const currentPath = detail[0]
		// 先导航到一个临时路径，然后再回到原路径
		router(`${currentPath}?_t=${Date.now()}`)
	}
	
	const commandUser = ({ detail = [] }: { detail: string[] }) => {
		if (detail[0] === 'setting') {
			themeConfig = {
				...themeConfig,
				settingVisible: true,
			}
		}
		
		if (detail[0] === 'loginOut') {
			// 使用原生confirm保持同步行为，不破坏WC组件事件流
			if (confirm('此操作将退出登录, 是否继续?')) {
				setTimeout(() => {
					globalStore.setToken('')
					routesStore.resetRoute()
					
					router(HOME_URL)
				}, 700)
			}
		}
	}
	
	const handleChange = ({ detail = [] }: { detail: any[] }) => {
		themeConfig = {
			...themeConfig,
			[detail[0]]: detail[1],
		}
	}
	
	onMount(() => {
		const handleEvent = (res: any) => {
			switch (res.type) {
				case 'changeProp':
					handleChange(res)
					break
				case 'selectMenu':
					selectMenu(res)
					break
				case 'commandUser':
					commandUser(res)
					break
				case 'tagRefresh':
					tagRefresh(res)
					break
			}
		}
		
		if (ref) {
			ref.addEventListener('changeProp', handleEvent)
			ref.addEventListener('selectMenu', handleEvent)
			ref.addEventListener('commandUser', handleEvent)
			ref.addEventListener('tagRefresh', handleEvent)
		}
		
		return () => {
			if (ref) {
				ref.removeEventListener('changeProp', handleEvent)
				ref.removeEventListener('selectMenu', handleEvent)
				ref.removeEventListener('commandUser', handleEvent)
				ref.removeEventListener('tagRefresh', handleEvent)
			}
		}
	})
</script>

{#if themeConfig.menuList.length > 0}
	<mqy-background-layout
		bind:this={ref}
		menu-list={JSON.stringify(themeConfig.menuList)}
		user-avatar={JSON.stringify(themeConfig.userAvatar)}
		setting-visible={JSON.stringify(themeConfig.settingVisible)}
		watermark={JSON.stringify(themeConfig.watermark)}
	>
		<div slot="main">
			<!-- 在Svelte中，我们使用slot来渲染子组件 -->
			<slot />
		</div>
	</mqy-background-layout>
{/if}


