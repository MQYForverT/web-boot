<template>
	<el-aside :class="['sider', props.isMobile && 'fixed top-0 bottom-0 left-0 bg-red']" :width="collapseWidth">
		<mqy-logo>
			<div slot="logo">
				<slot name="logo" />
			</div>
		</mqy-logo>
		<mqy-menu />
	</el-aside>
</template>

<script lang="ts" setup>
	import { defineCustomElement } from 'vue'
	import { propsKey } from '../../BackgroundLayout'
	import { ElAside } from 'element-plus'
	import Logo from './Logo.vue'
	import Menu from './Menu.vue'

	const logoElement = defineCustomElement(Logo)
	customElements.define('mqy-logo', logoElement)

	const menuElement = defineCustomElement(Menu)
	customElements.define('mqy-menu', menuElement)

	const props = inject(propsKey)!

	const collapseWidth = computed(() => {
		if (props.isMobile) {
			return props.isCollapse ? '0' : '210px'
		} else {
			return props.isCollapse ? '65px' : '210px'
		}
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/aside.scss';

	.sider {
		@apply flex-col-stretch bg-background  shadow-[0_0_1px_#888] z-99 transition-width duration-300;
	}
</style>
