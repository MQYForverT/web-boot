<template>
	<el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
		<template #title>
			<div :class="menu.icon || 'i-ep-tickets'" class="text-4"></div>
			<span class="truncate" :class="{ 'ml-1.25': !state.isCollapse }">{{ menu.title }}</span>
		</template>
		<MenuItem v-for="menuItem in menu.children" :key="menuItem.path" :menu="menuItem" />
	</el-sub-menu>
	<el-menu-item v-else :index="menu.path">
		<div :class="!parentPath(menu.path) ? menu.icon || 'i-ep-tickets' : menu.icon" class="text-4"></div>
		<template #title>
			<span class="truncate" :class="{ 'ml-1.25': !state.isCollapse }">{{ menu.title }}</span>
		</template>
	</el-menu-item>
</template>

<script lang="ts" setup>
	import type { Layout } from '../../layout'
	interface Props {
		menu: Layout.Menu
	}
	defineProps<Props>()

	import useState from '../../hooks/useState'
	const { state } = useState()

	const parentPath = (path: string) => {
		return state.flatMenuList.find((x) => x.path === path)?.parentPath
	}
</script>

<style>
	@unocss-placeholder;
</style>
