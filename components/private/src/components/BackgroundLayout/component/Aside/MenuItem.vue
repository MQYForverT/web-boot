<template>
	<el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
		<template #title>
			<div :class="menu.icon || 'i-ep-tickets'" class="text-4"></div>
			<span class="truncate" :class="{ 'ml-1.25': !state.isCollapse }">{{ menu.title }}</span>
		</template>
		<MenuItem v-for="menuItem in menu.children" :key="menuItem.path" :menu="menuItem" />
	</el-sub-menu>
	<el-menu-item v-else :index="menu.path">
		<div :class="menu.icon" class="text-4"></div>
		<span class="truncate" :class="{ 'ml-1.25': !state.isCollapse }">{{ menu.title }}</span>
	</el-menu-item>
</template>

<script lang="ts" setup>
	interface Props {
		menu: Layout.Menu
	}
	defineProps<Props>()

	import useState from '../../hooks/useState'
	const { state } = useState()
</script>

<style>
	@unocss-placeholder;
</style>
