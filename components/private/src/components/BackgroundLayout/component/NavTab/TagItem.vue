<template>
	<div class="w-full flex-y-center">
		<div v-if="state.isTagsViewIcon && item.icon" :class="[item.icon]" class="mr-1 text-4" />
		<div class="title">{{ item.title }}</div>
	</div>
	<div class="flex-center">
		<el-icon
			v-if="state.activePath === item.path"
			class="ml-1.5 mt-1px rounded-full hover:bg-primary hover:color-white"
			size="14"
			@click.prevent.stop="refreshTag(item.path)"
		>
			<RefreshRight />
		</el-icon>
		<el-icon
			v-if="!item.affix && state.activeTags.length > 1"
			class="ml-1 mt-1px rounded-full hover:bg-primary hover:color-white"
			size="14"
			@click.prevent.stop="handleRemove(item.path)"
		>
			<Close />
		</el-icon>
	</div>
	<div v-if="item.affix" class="circle-container">
		<div class="inner-circle"></div>
	</div>
</template>

<script lang="ts" setup>
	import { Close, RefreshRight } from '@element-plus/icons-vue'
	import useState from '../../hooks/useState'
	import { useTag } from '../../hooks/useTag'

	const { closeTag, refreshTag } = useTag()

	const { item } = defineProps<{ item: Layout.Menu }>()

	const { state } = useState()

	// 删除tab
	const handleRemove = (path: string) => {
		// 找到当前索引
		const index = state.activeTags.findIndex((v) => v.path === path)
		closeTag(index, path)
	}
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.title {
		max-width: 110px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.circle-container {
		position: absolute;
		top: 1px;
		left: 1px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 6px;
		height: 6px;
		background-color: rgb(101 106 114 / 40%);
		border-radius: 50%; /* 将 div 变成圆形 */

		.inner-circle {
			position: absolute;
			width: 3px;
			height: 3px;
			background-color: white;
			border-radius: 50%; /* 将 div 变成圆形 */
		}
	}
</style>
