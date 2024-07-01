<template>
	<el-breadcrumb v-if="props.isBreadcrumb && !isMobile" separator="/" class="p-x-2">
		<el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
			<a class="!font-normal" @click.prevent="handleLink(item)"> {{ item.title }}</a>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'
	const { props, emits } = useInject()
	const { activePath, isMobile } = useState()

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
		if (cache.has(activePath.value)) {
			return cache.get(activePath.value)
		}
		const data = findPath(props.menuList, activePath.value)
		cache.set(activePath.value, data)
		return data
	})

	const handleLink = (item: IFandPath) => {
		emits('selectMenu', item.path)
		activePath.value = item.path
	}

	onBeforeUnmount(() => {
		cache.clear()
	})
</script>

<style>
	@unocss-placeholder;
</style>
