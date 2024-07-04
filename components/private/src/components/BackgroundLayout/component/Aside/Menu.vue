<template>
	<el-scrollbar>
		<el-menu
			:default-active="state.activePath"
			:default-openeds="getAllOpenList"
			class="!w-full !border-0"
			:unique-opened="state.isUniqueOpened"
			:collapse-transition="false"
			:collapse="state.isCollapse"
			popper-effect="dark"
			router
			@select="handleSelect"
		>
			<MenuItem v-for="item in props.menuList" :key="item.path" :menu="item" />
		</el-menu>
	</el-scrollbar>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'
	import MenuItem from './MenuItem.vue'

	const { props, emits } = useInject()
	const { state } = useState()

	const getAllOpenList = computed(() => {
		return state.isAllOpen ? props.menuList.map((x) => x.path) : []
	})

	const handleSelect = (key: string) => {
		emits('selectMenu', key)
		state.activePath = key
	}

	onBeforeMount(() => {
		// 刷新的时候，如果有activePath，告诉外部容器，让外部容器跳转到对应的页面
		if (state.activePath) {
			emits('selectMenu', state.activePath)
		}
	})
</script>

<style>
	@unocss-placeholder;
</style>
