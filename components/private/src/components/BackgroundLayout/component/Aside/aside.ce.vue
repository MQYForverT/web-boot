<template>
	<el-aside
		v-if="!props.isCollapse"
		class="layout-aside"
		:class="setCollapseWidth"
		:style="{ background: props.asideBackground }"
	>
		<mqy-logo v-if="setShowLogo" />
		<el-scrollbar class="flex-1">
			<mqy-vertical />
		</el-scrollbar>
	</el-aside>
	<el-drawer
		v-else
		v-model="props.isCollapse"
		close-on-click-modal
		direction="ltr"
		:size="props.isCollapse ? '64px' : '220px'"
		:with-header="false"
	>
		<el-aside
			class="layout-aside h-[100%] w-[100%]"
			:class="setCollapseWidth"
			:style="{ background: props.asideBackground }"
		>
			<mqy-logo v-if="setShowLogo" />
			<el-scrollbar class="flex-1">
				<mqy-vertical />
			</el-scrollbar>
		</el-aside>
	</el-drawer>
</template>

<script setup lang="ts">
	import { defineCustomElement } from 'vue'
	import { ElAside, ElScrollbar, ElDrawer } from 'element-plus'
	import { propsKey } from '../../BackgroundLayout'
	import Logo from '../logo/logo.ce.vue'
	import Vertical from '../../navMenu/vertical.ce.vue'

	const LogoElement = defineCustomElement(Logo)
	customElements.define('mqy-logo', LogoElement)

	const VerticalElement = defineCustomElement(Vertical)
	customElements.define('mqy-vertical', VerticalElement)

	const props = inject(propsKey)!

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
		const { isShowLogo } = props
		return isShowLogo
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/aside.scss';
	@use 'element-plus/theme-chalk/src/drawer.scss';
	@use 'element-plus/theme-chalk/src/scrollbar.scss';
	@use './myAside.scss';
</style>
