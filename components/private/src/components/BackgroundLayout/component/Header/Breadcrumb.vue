<template>
	<el-breadcrumb v-if="state.isBreadcrumb && !state.isMobile" separator="/" class="p-x-2">
		<el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
			<a class="!font-normal" @click.prevent="handleLink(item)"> {{ item.title }}</a>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'
	import { findFullPath } from '../../utils/menu'
	import type { IFandPath } from '../../utils/menu'
	const { props, emits } = useInject()
	const { state } = useState()

	const cache = new Map()

	const breadcrumbList = computed<IFandPath[]>(() => {
		if (cache.has(state.activePath)) {
			return cache.get(state.activePath)
		}
		const data = findFullPath(props.menuList, state.activePath!)

		cache.set(state.activePath, data)
		return data
	})

	const handleLink = (item: IFandPath) => {
		// 一直找到非重定向为止
		let pathItem = item
		while (pathItem.redirect) {
			pathItem = breadcrumbList.value.find((item) => item.path === pathItem.redirect)!
		}
		emits('selectMenu', pathItem.path)
		state.activePath = pathItem.path
	}

	onBeforeUnmount(() => {
		cache.clear()
	})
</script>

<style>
	@unocss-placeholder;
</style>
