<template>
	<el-aside v-if="clientWidth > 1000" class="layout-aside" :class="setCollapseWidth">
		<Logo v-if="setShowLogo" />
		<el-scrollbar ref="layoutAsideScrollbarRef" class="flex-auto">
			<Vertical :class="setCollapseWidth" />
		</el-scrollbar>
	</el-aside>
	<el-drawer v-else v-model="props.isCollapse" close-on-click-modal direction="ltr" size="220px" :with-header="false">
		<el-aside class="layout-aside h100 w100">
			<Logo v-if="setShowLogo" />
			<el-scrollbar ref="layoutAsideScrollbarRef" class="flex-auto">
				<Vertical />
			</el-scrollbar>
		</el-aside>
	</el-drawer>
</template>

<script setup lang="ts">
	import { ElAside, ElScrollbar, ElDrawer } from 'element-plus'
	import { propsKey } from '../BackgroundLayout'
	import Logo from './logo.vue'
	import Vertical from '../navMenu/vertical.vue'

	const props = inject(propsKey)!

	const clientWidth = computed(() => {
		return document.body.clientWidth
	})

	// 设置菜单展开/收起时的宽度
	const setCollapseWidth = computed(() => {
		const { isCollapse } = props
		// 其它布局给 64px
		if (isCollapse) {
			return ['layout-aside-width64']
		} else {
			return ['layout-aside-width-default']
		}
	})

	// 设置显示/隐藏 logo
	const setShowLogo = computed(() => {
		const { layout, isShowLogo } = props
		return isShowLogo && layout === 'defaults'
	})
</script>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/aside.scss';
	@use 'element-plus/theme-chalk/src/drawer.scss';
	@use 'element-plus/theme-chalk/src/scrollbar.scss';

	.el-drawer__body {
		padding: 0;
	}
</style>
