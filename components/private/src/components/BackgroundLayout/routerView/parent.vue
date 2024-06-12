<template>
	<div class="h100">
		<!----下面这段需要注册为插槽-->
		<router-view v-slot="{ Component }">
			<transition mode="out-in" :name="setTransitionName">
				<keep-alive :include="state.keepAliveNameList">
					<component :is="Component" :key="state.refreshRouterViewKey" class="w100" />
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<script setup>
	import { useGlobal, useThemeConfig } from '@store'

	const { proxy } = getCurrentInstance()
	const route = useRoute()
	const state = reactive({
		refreshRouterViewKey: null,
		keepAliveNameList: [],
		keepAliveNameNewList: [],
	})

	// 获取布局配置信息
	const { themeConfig } = storeToRefs(useThemeConfig())

	// 设置主界面切换动画
	const setTransitionName = computed(() => {
		return themeConfig.value.animation
	})

	// 获取组件缓存列表(name值)
	const getKeepAliveNames = computed(() => {
		return useGlobal().keepAliveNames
	})
	// 页面加载前
	onBeforeMount(() => {
		state.keepAliveNameList = getKeepAliveNames.value
		proxy.mittBus.on('onTagsViewRefreshRouterView', (path) => {
			if (route.path !== path) return false
			state.keepAliveNameList = getKeepAliveNames.value.filter((name) => route.name !== name)
			state.refreshRouterViewKey = route.path
			nextTick(() => {
				state.refreshRouterViewKey = null
				state.keepAliveNameList = getKeepAliveNames.value
			})
		})
	})
	// 页面卸载时
	onUnmounted(() => {
		proxy.mittBus.off('onTagsViewRefreshRouterView')
	})

	defineExpose({ themeConfig })
</script>
