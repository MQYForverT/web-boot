<template>
	<el-menu
		background-color="transparent"
		:collapse="props.isCollapse"
		:collapse-transition="false"
		:default-active="props.defaultActivePath"
		router
		:default-openeds="getAllOpenList"
		:unique-opened="props.isUniqueOpened"
	>
		<template v-for="val in props.menuList">
			<el-sub-menu v-if="val.children && val.children.length > 0" :key="val.path" :index="val.path">
				<template #title>
					<div :class="val.meta?.icon" />
					<div>{{ val.meta?.title }}</div>
				</template>
				<SubItem :children="val.children" />
			</el-sub-menu>
			<el-menu-item v-else-if="val.meta?.isMenu && !val.meta?.isViewRouter" :key="val.path + 1" :index="val.path">
				<div :class="val.meta?.icon" />
				<template v-if="!val.meta?.isLink || (val.meta?.isLink && val.meta?.isIframe)" #title>
					<span>{{ val.meta?.title }}</span>
				</template>
				<template v-else #title>
					<a :href="val.meta?.isLink" target="_blank">{{ val.meta?.title }}</a>
				</template>
			</el-menu-item>
		</template>
	</el-menu>
</template>

<script setup lang="ts">
	import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
	import SubItem from './subItem.vue'
	import { propsKey } from '../BackgroundLayout'

	const props = inject(propsKey)!
	console.log(props.menuList)

	// 设置默认全部展开的菜单
	const getAllOpenList = computed(() => {
		return props.isAllOpen ? props.menuList.map((x) => x.path) : []
	})
</script>
