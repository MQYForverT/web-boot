<template>
	<el-container class="h-full">
		<mqy-app-mask v-show="props.isMobile && !props.isCollapse" @click="closeAppMask" />
		<mqy-aside>
			<div slot="logo">
				<slot name="logo" />
			</div>
		</mqy-aside>
		<el-button type="primary">btn</el-button>
		<slot name="body" />
		<!-- <el-container class="flex-center" :class="{ 'layout-backtop': !isFixedHeader }">
			<Header v-if="isFixedHeader" />
			<el-scrollbar ref="layoutDefaultsScrollbarRef" :class="{ 'layout-backtop': isFixedHeader }">
				<Header v-if="!isFixedHeader" />
				<Main />
			</el-scrollbar>
		</el-container>
		<el-backtop target=".layout-backtop .el-scrollbar__wrap" /> -->
	</el-container>
</template>

<script setup lang="ts">
	import { defineCustomElement } from 'vue'
	import { propsEnum, propsKey, emitsKey } from '../../BackgroundLayout'

	import Aside from '../Aside/index.vue'
	import AppMask from '../AppMask/index.vue'

	const asideElement = defineCustomElement(Aside)
	customElements.define('mqy-aside', asideElement)

	const appMaskElement = defineCustomElement(AppMask)
	customElements.define('mqy-app-mask', appMaskElement)

	const props = inject(propsKey)!
	const emits = inject(emitsKey)!

	const closeAppMask = () => {
		console.log('点击没问题')
		emits('changeProp', propsEnum.isCollapse, true)
	}
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/container.scss';
	@use 'element-plus/theme-chalk/src/button.scss';
</style>
