<template>
	<el-header class="header">
		<div class="h-full flex-y-center">
			<MenuCollapse />
			<Breadcrumb />
		</div>
		<div class="h-full flex-y-center">
			<!-- <Search />
			<FullScreen />
			<Language />
			<SystemMessage />
			<UserAvatar /> -->
		</div>
	</el-header>
</template>

<script lang="ts" setup>
	import MenuCollapse from './MenuCollapse.vue'
	import Breadcrumb from './Breadcrumb.vue'
	// import Search from './Search.vue'
	// import Language from './Language.vue'
	// import UserAvatar from './UserAvatar.vue'
	// import SystemMessage from './SystemMessage.vue'
	// import FullScreen from './FullScreen.vue'
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.header {
		@apply flex-y-center justify-between h-14 p-x-0 bg-[var(--el-bg-color)] shadow-[0_0_1px_#888];
	}
</style>
