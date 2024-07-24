<template>
	<div v-if="state.isBreadcrumb && !state.isMobile" class="p-x-2 flex">
		<div v-for="(item, index) in breadcrumbList" :key="item.path" class="flex-center">
			<el-dropdown v-if="item.children?.length">
				<div class="breadcrumb flex-center cursor-pointer">
					<a @click.prevent="handleLink(item)"> {{ item.title }}</a>
					<el-icon size="16" class="ml-1">
						<ArrowDown />
					</el-icon>
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item
							v-for="chil in item.children"
							:key="chil.path"
							:command="chil.path"
							@click="handleLink(chil)"
						>
							{{ chil.title }}
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
			<a v-else class="breadcrumbLast"> {{ item.title }}</a>
			<div v-if="index < breadcrumbList.length - 1" class="separator">/</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import useInject from '../../hooks/useInject'
	import useState from '../../hooks/useState'
	import { ArrowDown } from '@element-plus/icons-vue'
	const { emits } = useInject()
	const { state } = useState()

	const cache = new Map()

	const breadcrumbList = computed<Layout.IFandPath[]>(() => {
		if (cache.has(state.activePath)) {
			return cache.get(state.activePath)
		}
		const data = state.flatMenuList.find((x) => x.path === state.activePath!)?.fullLink
		cache.set(state.activePath, data)
		console.log(data)
		return data
	})

	const handleLink = (item: Layout.IFandPath) => {
		// 一直找到非重定向为止
		let pathItem = item
		while (pathItem?.redirect) {
			pathItem = state.flatMenuList.find((item) => item.path === pathItem.redirect)!
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

<style lang="scss">
	.breadcrumb {
		display: inline-block;
		height: 22px;
		padding: 0 4px;
		color: var(--el-text-color-primary);
		border-radius: 4px;

		&:hover {
			color: var(--el-color-primary);
			background-color: color-mix(in srgb, var(--el-text-color-regular) 15%, transparent);
		}
	}

	.breadcrumbLast {
		color: color-mix(in srgb, var(--el-text-color-regular) 65%, transparent);
	}

	.separator {
		margin-inline: 4px;
		color: #999;
	}
</style>
