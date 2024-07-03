<template>
	<el-container class="h-full">
		<AppMask v-show="showAppMask" @click="closeAppMask" />
		<Aside>
			<template #logo>
				<slot name="logo" />
			</template>
		</Aside>
		<!-- <slot name="body" /> -->
		<el-container direction="vertical" class="relative">
			<Header>
				<template #header>
					<slot name="header" />
				</template>
			</Header>
			<NavTab />
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
	// import NavTab from '../NavTab/index.vue'
	import AppSetting from '../AppSetting/index.vue'

	const { state } = useState()
	const { props } = useInject()

	const showAppMask = computed(() => state.isMobile && !state.isCollapse)
	const closeAppMask = () => {
		state.isCollapse = true
	}
</script>

<style>
	@unocss-placeholder;
</style>
