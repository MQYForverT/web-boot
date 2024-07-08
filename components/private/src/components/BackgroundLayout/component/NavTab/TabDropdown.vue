<template>
	<transition name="el-zoom-in-top">
		<ul v-show="visible" class="contextmenu">
			<div v-for="item in options" :key="item.key" style="display: flex; align-items: center">
				<li v-if="item.show" @click="handleContextMenu(item.key)">
					{{ item.label }}
				</li>
			</div>
		</ul>
	</transition>
</template>

<script lang="ts" setup>
	import useState from '../../hooks/useState'
	import { useTag } from '../../hooks/useTag'

	const { tabMenuOptions, refreshTag, closeTag, closeLeftTags, closeRightTags, closeOtherTags, closeAll } = useTag()
	type TabMenuOptionsType = typeof tabMenuOptions

	const { state } = useState()

	interface Props {
		visible: boolean
		currentPath: string
		options: TabMenuOptionsType
	}
	const props = defineProps<Props>()

	const handleContextMenu = (key: string) => {
		// 找到当前索引
		const index = state.activeTags.findIndex((v) => v.path === props.currentPath)
		switch (key) {
			case 'refresh':
				refreshTag(props.currentPath)
				break
			case 'closeCurrent':
				closeTag(index, props.currentPath)
				break
			case 'closeLeft':
				closeLeftTags(index, props.currentPath)
				break
			case 'closeRight':
				closeRightTags(index, props.currentPath)
				break
			case 'closeOther':
				closeOtherTags(index, props.currentPath)
				break
			case 'closeAll':
				closeAll(index)
				break
			default:
				break
		}
	}
</script>

<style lang="scss" scoped>
	.contextmenu {
		position: absolute;
		z-index: 9999;
		padding: 5px;
		margin: 0;
		font-size: 13px;
		font-weight: normal;
		color: var(--el-text-color-primary);
		white-space: nowrap;
		list-style-type: none;
		background: var(--el-bg-color-overlay);
		border-radius: 4px;
		outline: 0;
		box-shadow: 0 2px 8px rgb(0 0 0 / 15%);

		li {
			display: flex;
			align-items: center;
			width: 100%;
			padding: 7px 12px;
			margin: 0;
			cursor: pointer;

			&:hover {
				color: var(--el-color-primary);
				background-color: var(--el-fill-color-light);
			}

			svg {
				display: block;
				margin-right: 0.5em;
			}
		}
	}
</style>
