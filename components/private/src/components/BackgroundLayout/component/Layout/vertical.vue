<template>
	<el-container class="backgroundLayout h-full !flex-col">
		<Header>
			<template #header>
				<slot name="header" />
			</template>
		</Header>
		<el-container style="height: calc(100% - 48px)">
			<Aside />
			<el-container direction="vertical" class="tab-main">
				<NavTab v-if="state.isTagsView" />
				<Main>
					<template #main>
						<slot name="main" />
					</template>
				</Main>
				<AppSetting v-if="props.setting.enable" />
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
	import useState from '../../hooks/useState'
	import useInject from '../../hooks/useInject'
	import Aside from '../Aside/index.vue'
	import Header from '../Header/index.vue'
	import NavTab from '../NavTab/index.vue'
	import Main from '../Main/index.vue'
	import AppSetting from '../AppSetting/index.vue'

	const { state } = useState()
	const { props } = useInject()
</script>

<style>
	@unocss-placeholder;
</style>
