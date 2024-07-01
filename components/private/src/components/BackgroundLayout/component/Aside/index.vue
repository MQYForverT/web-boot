<template>
	<el-aside :class="['sider', isMobile && 'fixed top-0 bottom-0 left-0 bg-red']" :width="collapseWidth">
		<Logo>
			<template #logo>
				<slot name="logo" />
			</template>
		</Logo>
		<Menu />
	</el-aside>
</template>

<script lang="ts" setup>
	import useState from '../../hooks/useState'
	import Logo from './Logo.vue'
	import Menu from './Menu.vue'

	const { isCollapse, isMobile } = useState()

	const collapseWidth = computed(() => {
		if (isMobile.value) {
			return isCollapse.value ? '0' : '210px'
		} else {
			return isCollapse.value ? '65px' : '210px'
		}
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.sider {
		@apply flex-col-stretch bg-background  shadow-[0_0_1px_#888] z-99 transition-width duration-300;
	}
</style>
