<template>
	<el-scrollbar>
		<el-menu
			:default-active="props.defaultActivePath"
			:default-openeds="getAllOpenList"
			class="!w-full !border-0"
			:unique-opened="props.isUniqueOpened"
			:collapse-transition="false"
			:collapse="props.isCollapse"
			popper-effect="dark"
			router
			@select="handleSelect"
		>
			<MenuItem v-for="item in props.menuList" :key="item.path" :menu="item" />
		</el-menu>
	</el-scrollbar>
</template>

<script lang="ts" setup>
	import { propsKey, emitsKey } from '../../BackgroundLayout'
	import MenuItem from './MenuItem.vue'

	const props = inject(propsKey)!
	const emits = inject(emitsKey)!

	const getAllOpenList = computed(() => {
		return props.isAllOpen ? props.menuList.map((x) => x.path) : []
	})

	const handleSelect = (key: string) => {
		emits('selectMenu', key)
	}
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/scrollbar.scss';
	@use 'element-plus/theme-chalk/src/menu.scss';

	.truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
