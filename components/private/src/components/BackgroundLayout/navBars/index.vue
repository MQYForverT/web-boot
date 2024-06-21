<template>
	<div class="layout-navbars-container">
		<BreadcrumbIndex />
		<TagsView v-if="setShowTagsView" />
	</div>
</template>

<script setup>
	import BreadcrumbIndex from './breadcrumb/index.vue'
	import TagsView from './tagsView/tagsView.vue'
	import { useThemeConfig } from '@store'
	// 是否显示 tagsView
	const setShowTagsView = computed(() => {
		let { layout, isTagsview } = useThemeConfig().themeConfig
		return layout !== 'classic' && isTagsview
	})
</script>

<style lang="scss">
	.layout-navbars-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
</style>
