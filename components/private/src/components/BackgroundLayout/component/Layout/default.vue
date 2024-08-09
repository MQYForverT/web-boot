<template>
	<el-container class="backgroundLayout h-full">
		<!--mobile下只有默认布局模式，所以其他布局下没有该组件-->
		<AppMask v-if="state.isMobile" v-show="!state.isCollapse" @click="closeAppMask" />
		<Aside />
		<el-container direction="vertical">
			<Header>
				<template #header>
					<slot name="header" />
				</template>
			</Header>
			<el-container direction="vertical" class="tab-main">
				<NavTab v-if="state.isTagsView" />
				<Main>
					<template #main>
						<slot name="main" />
					</template>
				</Main>
			</el-container>
			<AppSetting v-if="props.setting.enable" />
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
	import useState from '../../hooks/useState'
	import useInject from '../../hooks/useInject'
	import Aside from '../Aside/index.vue'
	import AppMask from '../AppMask/index.vue'
	import Header from '../Header/index.vue'
	import NavTab from '../NavTab/index.vue'
	import Main from '../Main/index.vue'
	import AppSetting from '../AppSetting/index.vue'

	const { state } = useState()
	const { props } = useInject()

	const closeAppMask = () => {
		state.isCollapse = true
	}
</script>

<style>
	@unocss-placeholder;
</style>
