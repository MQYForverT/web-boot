<template>
	<el-container class="h-full">
		<mqy-appMask v-show="props.isMobile" @click="closeAppMask" />
		<mqy-asider />
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
	import { ElContainer } from 'element-plus'

	import Asider from '../Asider/index.vue'
	import AppMask from '../AppMask/index.vue'

	const asiderElement = defineCustomElement(Asider)
	customElements.define('mqy-asider', asiderElement)

	const appMaskElement = defineCustomElement(AppMask)
	customElements.define('mqy-appMask', appMaskElement)

	const props = inject(propsKey)!
	const emits = inject(emitsKey)!

	const closeAppMask = () => {
		emits('changeProp', propsEnum.isCollapse, true)
	}
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	@use 'element-plus/theme-chalk/src/container.scss';
</style>
