<template>
	<el-container class="h-full">
		<AppMask v-show="props.isMobile && !props.isCollapse" @click="closeAppMask" />
		<Aside>
			<template #logo>
				<slot name="logo" />
			</template>
		</Aside>
		<slot name="body" />
		<el-container class="flex-center" :class="{ 'layout-backtop': !props.isFixedHeader }">
			<Header v-if="props.isFixedHeader" />
			<el-scrollbar ref="layoutDefaultsScrollbarRef" :class="{ 'layout-backtop': props.isFixedHeader }">
				<Header v-if="!props.isFixedHeader" />
				<!-- <Main />  -->
			</el-scrollbar>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
	import useInject from '../../hooks/useInject'

	import Aside from '../Aside/index.vue'
	import AppMask from '../AppMask/index.vue'
	import Header from '../Header/index.vue'

	const { props, emits, propsEnum } = useInject()

	const closeAppMask = () => {
		emits('changeProp', propsEnum.isCollapse, true)
	}
</script>

<style>
	@unocss-placeholder;
</style>
