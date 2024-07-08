<template>
	<el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
		<template #title>
			<div :class="menu.icon || 'i-ep-tickets'" class="mr-1.25 text-4.75"></div>
			<span class="truncate">{{ menu.title }}</span>
		</template>
		<MenuItem v-for="menuItem in menu.children" :key="menuItem.path" :menu="menuItem" />
	</el-sub-menu>
	<el-menu-item v-else :index="menu.path">
		<div :class="menu.icon || 'i-ep-tickets'" class="mr-1.25 text-4.75"></div>
		<span class="truncate">{{ menu.title }}</span>
	</el-menu-item>
</template>

<script lang="ts" setup>
	interface Props {
		menu: Layout.Menu
	}
	defineProps<Props>()
</script>

<style>
	@unocss-placeholder;
</style>
