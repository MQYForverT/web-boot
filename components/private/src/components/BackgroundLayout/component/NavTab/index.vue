<template>
	<nav
		v-if="state.isTagsView && state.activeTags.length"
		ref="navTabRef"
		class="navTab h-10 flex-y-center bg-[var(--el-bg-color)] shadow-[0_0_1px_#888]"
	>
		<el-tabs :model-value="activeName" @tab-change="handleChange">
			<el-tab-pane v-for="item in state.activeTags" :key="item.path" :name="item.path" :label="item.title">
				<template #label>
					<div
						class="h-full flex-center pl-12px pr-9px"
						@contextmenu.prevent="handleContextMenu($event, item.path, item.affix)"
					>
						<div v-if="item.icon && state.isTagsViewIcon" :class="item.icon" />
						<span>{{ item.title }}</span>
						<el-icon
							v-if="!item.affix && state.activeTags.length > 1"
							class="mt-1px rounded-full hover:bg-primary hover:color-white"
							size="14"
							@click.prevent.stop="handleRemove(item.path)"
						>
							<Close />
						</el-icon>
					</div>
				</template>
			</el-tab-pane>
		</el-tabs>
		<TabDropdown
			:currentPath="currentPath"
			:options="tabMenuOptions"
			:visible="contextmenuVisible"
			:style="contextMenuStyle"
		/>
	</nav>
</template>

<script lang="ts" setup>
	import { Close } from '@element-plus/icons-vue'
	import useState from '../../hooks/useState'
	import type { TabPaneName } from 'element-plus'
	import { useTag } from '../../hooks/useTag'
	import TabDropdown from './TabDropdown.vue'

	const { state } = useState()

	const navTabRef = ref()
	const currentPath = ref('')
	const activeName = computed(() => state.activePath)
	const {
		contextmenuLeft,
		contextmenuTop,
		contextmenuVisible,
		tabMenuOptions,
		contextMenuStyle,
		addTag,
		closeTag,
		switchTag,
	} = useTag()

	// 切换tab
	const handleChange = (fullPath: TabPaneName) => {
		const path = fullPath as string
		switchTag(path)
	}

	// 删除tab
	const handleRemove = (fullPath: TabPaneName) => {
		const path = fullPath as string
		// 找到当前索引
		const index = state.activeTags.findIndex((v) => v.path === path)
		closeTag(index, path)
	}

	// 筛选显示的右键菜单
	const showFilterMenu = (path: string, affix?: boolean) => {
		Array.of(0, 1, 2, 3, 4, 5).forEach((v) => {
			tabMenuOptions[v].show = true
			tabMenuOptions[v].disabled = false
		})

		if (state.activePath !== path) {
			tabMenuOptions[0].show = false
		}
		if (affix || state.activeTags.length === 1) {
			tabMenuOptions[1].show = false
			tabMenuOptions[1].disabled = true
		}
		const index = state.activeTags.findIndex((v) => v.path === path)
		// 左侧菜单
		if (index === 0) {
			tabMenuOptions[2].show = false
			tabMenuOptions[2].disabled = true
		}
		// 右侧菜单
		if (index === state.activeTags.length - 1) {
			tabMenuOptions[3].show = false
			tabMenuOptions[3].disabled = true
		}
		if (state.activeTags.length < 2) {
			tabMenuOptions[4].show = false
			tabMenuOptions[5].show = false
			tabMenuOptions[4].disabled = true
			tabMenuOptions[5].disabled = true
		}
		currentPath.value = path
	}

	const handleContextMenu = (e: MouseEvent, path: string, affix?: boolean) => {
		showFilterMenu(path, affix)
		const menuMinWidth = 105
		const offsetLeft = navTabRef.value.getBoundingClientRect().left // container margin left
		const offsetWidth = navTabRef.value.offsetWidth // container width
		const maxLeft = offsetWidth - menuMinWidth // left boundary
		const left = e.clientX - offsetLeft + 15 // 15: margin right
		contextmenuLeft.value = left > maxLeft ? maxLeft : left
		contextmenuTop.value = e.clientY
		contextmenuVisible.value = true
	}

	onMounted(() => {
		addTag()
	})

	watch(
		() => state.activePath,
		() => {
			addTag()
		},
	)
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss" scoped>
	:deep(.el-tabs) {
		width: calc(100% - 80px);
		.is-scrollable .el-tabs__item:nth-child(2) {
			margin-left: 0 !important;
		}
		.el-tabs__header {
			margin-bottom: 0;
			.el-tabs__nav-wrap::after {
				height: 0;
			}
			.el-tabs__nav-prev,
			.el-tabs__nav-next {
				line-height: 30px;
			}
			.el-tabs__active-bar {
				display: none;
			}
			.el-tabs__item:nth-child(2) {
				margin-left: 12px;
			}
			.el-tabs__item {
				border: 1px solid var(--el-border-color-light);
				height: 31px;
				padding: 0;
				margin-left: 8px;
				border-radius: 2px;
				&:hover {
					border-color: var(--el-color-primary-light-3);
				}
			}
			.is-icon-close:hover {
				background-color: var(--el-color-primary);
			}
			.is-active {
				background: var(--el-color-primary-light-8);
				border-color: var(--el-color-primary-light-3);
			}
			.is-icon-close {
				margin-left: 8px;
			}
		}
	}
</style>
