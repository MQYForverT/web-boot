<template>
	<el-breadcrumb v-if="props.isBreadcrumb && !state.isMobile" separator="/" class="p-x-2">
		<el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
			<a class="!font-normal" @click.prevent="handleLink(item)"> {{ item.title }}</a>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'
	const { props, emits } = useInject()
	const { state } = useState()

	const cache = new Map()

	interface IFandPath {
		path: string
		title: string
	}

	function findPath(menuList: Layout.Menu[], targetPath: string): IFandPath[] {
		for (const item of menuList) {
			if (item.path === targetPath) {
				return [item]
			}
			if (item.children) {
				const childPath = findPath(item.children, targetPath)
				if (childPath.length) {
					return [item, ...childPath]
				}
			}
		}
		return []
	}

	const breadcrumbList = computed(() => {
		if (cache.has(state.activePath)) {
			return cache.get(state.activePath)
		}
		const data = findPath(props.menuList, state.activePath)
		cache.set(state.activePath, data)
		return data
	})

	const handleLink = (item: IFandPath) => {
		emits('selectMenu', item.path)
		state.activePath = item.path
	}

	onBeforeUnmount(() => {
		cache.clear()
	})
</script>

<style>
	@unocss-placeholder;
</style>
