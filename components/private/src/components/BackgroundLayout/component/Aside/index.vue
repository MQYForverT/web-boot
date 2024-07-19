<template>
	<el-aside :class="['sider', state.isMobile && 'fixed top-0 bottom-0 left-0 bg-red']" :width="collapseWidth">
		<span ref="logoRef" v-if="state.layout === layoutEnum.defaults"></span>
		<Menu />
	</el-aside>
</template>

<script lang="ts" setup>
	import { layoutEnum } from '../../BackgroundLayout'
	import useContainer from '../../hooks/useContainer'
	import useState from '../../hooks/useState'
	import Menu from './Menu.vue'
	import { isCollapseWidth, isNotCollapseWidth, isNotCollapseAndMobileWidth } from '../../constants/aside'

	const logoRef = ref()

	const { state } = useState()
	const { logoElement } = useContainer()

	const collapseWidth = computed(() => {
		if (state.isMobile) {
			return state.isCollapse ? isNotCollapseAndMobileWidth : isCollapseWidth
		} else {
			return state.isCollapse ? isNotCollapseWidth : isCollapseWidth
		}
	})

	onMounted(() => {
		if (logoRef.value) {
			logoElement.value = logoRef.value
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
