<template>
	<el-aside v-if="width > 100" class="layout-aside" :class="setCollapseWidth">
		<Logo v-if="props.isShowLogo" />
		<el-scrollbar class="flex-1">
			<Vertical />
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
		<el-aside class="layout-aside h-[100%] w-[100%]" :class="setCollapseWidth">
			<Logo v-if="props.isShowLogo" />
			<el-scrollbar class="flex-1">
				<Vertical />
			</el-scrollbar>
		</el-aside>
	</el-drawer>
</template>

<script setup lang="ts">
	import { ElAside, ElScrollbar, ElDrawer } from 'element-plus'
	import { propsKey } from '../BackgroundLayout'
	import Logo from './logo.vue'
	import Vertical from './../navMenu/vertical.vue'

	const props = inject(propsKey)!

	// 设置菜单展开/收起时的宽度
	const setCollapseWidth = computed(() => {
		const { isCollapse } = props
		// 其它布局给 64px
		if (isCollapse) {
			return ['layout-aside-pc-64']
		} else {
			return ['layout-aside-pc-220']
		}
	})

	// 设置显示/隐藏 logo
	const { width } = useWindowSize()
</script>
