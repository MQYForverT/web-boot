<template>
	<div ref="tagBodyRef" class="h-8.75 flex-y-center">
		<div
			v-show="overBody && !arrivedState.left"
			class="relative mr-1 flex-center cursor-pointer rounded-2px hover:bg-fill"
			@click.prevent.stop="toPage('pre')"
		>
			<div
				class="over-width-left"
				:style="{
					background: `linear-gradient(to right, rgb(255 255 255 / ${isDark() ? '40%' : '100%'}), rgb(255 255 255 / 0%))`,
				}"
			></div>
			<el-icon color="rgb(100, 106, 115)" size="16">
				<CaretLeft />
			</el-icon>
		</div>

		<transition-group
			v-if="state.activeTags.length"
			ref="tagGroupRef"
			name="list"
			tag="div"
			class="scroll-container h-8.75 w-full flex-y-center overflow-x-auto overflow-y-hidden whitespace-nowrap"
			@after-enter="handleTransitionEnd"
			@after-leave="handleTransitionEnd"
		>
			<div
				v-for="(item, index) in state.activeTags"
				:ref="(el) => setItemRef(el, item.path)"
				:key="item.path"
				:class="[item.path === state.activePath ? 'tagItemOut-selected' : '']"
				class="tagItem tagItemOut relative mb-1.25 mr-1.5 h-7.5 flex-center cursor-pointer pl-2 pr-2"
				@click="handleChange(item.path)"
				@mouseenter="hoverTagPath = item.path"
				@mouseleave="hoverTagPath = ''"
				@contextmenu.prevent="handleContextMenuHand($event, item.path, item.affix, 'out')"
			>
				<TagItem :item="item" />
				<div v-show="gapIsShow(item, index)" class="tagItemOut-gap"></div>
				<div class="tagItemOut-svg-container">
					<svg
						v-show="item.path === state.activePath"
						width="9"
						height="9"
						xmlns="http://www.w3.org/2000/svg"
						class="tagItemOut-svg tagItemOut-svg1"
					>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0v9h9a9 9 0 01-9-9z"></path>
					</svg>
					<svg
						v-show="item.path === state.activePath"
						width="9"
						height="9"
						xmlns="http://www.w3.org/2000/svg"
						class="tagItemOut-svg tagItemOut-svg2"
					>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0v9h9a9 9 0 01-9-9z"></path>
					</svg>
				</div>
			</div>
		</transition-group>

		<div
			v-show="overBody && !arrivedState.right"
			class="relative ml-1 flex-center cursor-pointer rounded-2px hover:bg-fill"
			@click.prevent.stop="toPage('next')"
		>
			<div
				class="over-width-right"
				:style="{
					background: `linear-gradient(to left, rgb(255 255 255 / ${isDark() ? '40%' : '100%'}), rgb(255 255 255 / 0%))`,
				}"
			></div>
			<el-icon color="rgb(100, 106, 115)" size="16">
				<CaretRight />
			</el-icon>
		</div>

		<div v-show="overBody" class="divider" />

		<el-popover placement="bottom" :width="200" trigger="click" :teleported="false" :hide-after="0" :show-arrow="false">
			<template #reference>
				<div v-show="overBody" class="mr-2 h-6 flex-center cursor-pointer rounded-4px p-x-2 hover:bg-fill">
					<div class="whitespace-nowrap">全部</div>
					<el-icon class="el-icon--right"><arrow-down /></el-icon>
				</div>
			</template>
			<el-input v-model="tagSearch" class="mb-1.5 w-full" placeholder="搜索" :prefix-icon="Search" />
			<transition-group
				v-if="state.activeTags.filter((v) => (v.title ?? '').includes(tagSearch)).length"
				ref="tagGroupRefIn"
				name="list"
				tag="div"
				class="scroll-container max-h-100 overflow-x-hidden overflow-y-auto bg-[var(--el-bg-color)]"
			>
				<div
					v-for="item in state.activeTags.filter((v) => v.title.includes(tagSearch))"
					:key="item.path"
					:class="[item.path === state.activePath ? 'tagItem-selected' : '']"
					class="tagItem relative mb-0.5 h-7 flex-y-center cursor-pointer justify-between border border-gray-200 rounded-2px pl-3 pr-2"
					@click="handleChange(item.path)"
					@contextmenu.prevent="handleContextMenuHand($event, item.path, item.affix, 'in')"
				>
					<TagItem :item="item" />
				</div>
			</transition-group>
			<div v-else class="flex-center text-3">空空如也～</div>
		</el-popover>
	</div>

	<TagDropdown
		:currentPath="currentPath"
		:options="tabMenuOptions"
		:visible="contextmenuVisible"
		:style="contextMenuStyle"
	/>
</template>

<script lang="ts" setup>
	import useGlobalStore from '@/components/common/globalStore'
	import { CaretLeft, CaretRight, ArrowDown, Search } from '@element-plus/icons-vue'
	import useContainer from '../../hooks/useContainer'
	import useState from '../../hooks/useState'
	import useInject from '../../hooks/useInject'
	import { useTag } from '../../hooks/useTag'
	import TagDropdown from './TagDropdown.vue'
	import TagItem from './TagItem.vue'
	import type { SortableEvent } from 'sortablejs'

	const { isDark } = useGlobalStore()
	const { rootElement } = useContainer()
	const { state } = useState()
	const { props } = useInject()

	// 主容器
	const tagBodyRef = ref()
	// 滚动容器
	const tagGroupRef = ref()
	// 超出主容器，即出现滚动条
	const tagGroupRefIn = ref()
	const overBody = ref(false)
	// 鼠标此时hover的tag
	const hoverTagPath = ref('')
	const itemRefs = ref(new Map<string, HTMLElement | null>())
	const setItemRef = (el: Element | ComponentPublicInstance | null, id: string) => {
		const htmlElement = el as HTMLElement | null
		itemRefs.value.set(id, htmlElement)
	}
	const { arrivedState, measure } = useScroll(tagGroupRef)

	const currentPath = ref('')
	const sortableRef = ref()
	const sortableRefIn = ref()

	const tagSearch = ref('')

	// 监听窗口的变化
	useResizeObserver(tagBodyRef, (entries) => {
		const { width } = entries[0].contentRect
		const tagScroll = tagGroupRef.value?.$el
		// 窗口变化时重新计算
		measure()
		if (width < tagScroll.scrollWidth) {
			overBody.value = true
		} else {
			overBody.value = false
		}
	})

	const gapIsShow = (item: Layout.Menu, index: number) => {
		// 数量只有一个不显示
		if (state.activeTags.length === 1) {
			return false
		}
		// 最后一个不显示
		if (index === state.activeTags.length - 1) {
			return false
		}

		// 如果当前的下一个是选中/hover的，则当前不显示
		if ([state.activePath, hoverTagPath.value].includes(state.activeTags[index + 1].path)) {
			return false
		}

		// 当前选中/hover不显示
		if ([state.activePath, hoverTagPath.value].includes(item.path)) {
			return false
		}

		return true
	}

	const { handleContextMenu, contextmenuVisible, tabMenuOptions, contextMenuStyle, addTag, switchTag } = useTag()

	const handleContextMenuHand = (e: MouseEvent, path: string, affix?: boolean, type?: 'out' | 'in') => {
		handleContextMenu(e, path, unref(rootElement), affix, type)
		currentPath.value = path
	}

	const toPage = (type: string) => {
		const container = tagGroupRef.value?.$el
		let distance = container.clientWidth

		if (type === 'pre') {
			distance = -distance
		}
		container.scrollTo({
			left: container.scrollLeft + distance,
			behavior: 'smooth',
		})
	}

	// 切换tab
	const handleChange = (path: string) => {
		switchTag(path)
		// 滚动到对应item
		scrollToItem(path)
	}

	const scrollToItem = (path: string) => {
		if (overBody.value) {
			const item = itemRefs.value.get(path)
			if (item) {
				item.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
			}
		}
	}

	const updateTagScroll = () => {
		requestAnimationFrame(() => {
			const tagScroll = tagGroupRef.value?.$el
			const tagBody = tagBodyRef.value
			if (tagScroll && tagBody) {
				if (tagScroll.scrollWidth > tagBody.clientWidth) {
					overBody.value = true
					scrollToItem(state.activePath)
				} else {
					overBody.value = false
				}
			}
		})
	}

	// 处理过渡结束后的逻辑
	const handleTransitionEnd = () => {
		nextTick(() => {
			updateTagScroll()
		})
	}

	// 监听元素数量的变化，数量变化时判断是否超出
	watchEffect(() => {
		if (state.activeTags.length) {
			nextTick(() => {
				measure()
				updateTagScroll()
			})
		}
	})

	watch(
		() => state.activePath,
		() => {
			addTag()
			scrollToItem(state.activePath)

			nextTick(() => {
				if (tagGroupRef.value?.$el && props.isSortableTagsView && !sortableRef.value && !sortableRefIn.value) {
					import('sortablejs')
						.then((Sortable) => {
							sortableRef.value = new Sortable.default(tagGroupRef.value.$el, {
								animation: 300,
								dataIdAttr: 'data-name',
								onEnd: handleSortEnd,
							})

							sortableRefIn.value = new Sortable.default(tagGroupRefIn.value.$el, {
								animation: 300,
								dataIdAttr: 'data-name',
								onEnd: handleSortEnd,
							})
						})
						.catch((err) => {
							throw err
						})
				}
			})
		},
		{
			immediate: true,
		},
	)

	// 处理排序结束后的逻辑
	const handleSortEnd = (evt: SortableEvent) => {
		const oldIndex = evt.oldIndex!
		const newIndex = evt.newIndex!
		if (oldIndex !== newIndex) {
			const movedItem = state.activeTags.splice(oldIndex, 1)[0]
			state.activeTags.splice(newIndex, 0, movedItem)
		}
	}

	onBeforeUnmount(() => {
		if (sortableRef.value) {
			sortableRef.value.destroy()
			sortableRef.value = null
		}

		if (sortableRefIn.value) {
			sortableRefIn.value.destroy()
			sortableRefIn.value = null
		}
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.scroll-container::-webkit-scrollbar {
		display: none;
	}

	.scroll-container {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		.tagItem {
			color: var(--el-text-color-primary);
			background-color: var(--el-bg-color);
			border: 1px solid var(--el-border-color-light);

			&:hover {
				color: var(--el-color-primary);
				border-color: var(--el-color-primary-light-3);
			}
		}

		.tagItemOut {
			background-color: var(--el-fill-color-light);
			border: none;

			&:hover {
				color: var(--el-text-color-primary);
				background-color: var(--el-fill-color-darker);
				border-radius: 12px;
			}

			.tagItemOut-gap {
				position: absolute;
				top: 50%;
				right: -3.5px;
				width: 1px;
				height: 13px;
				background-color: color-mix(in srgb, var(--el-text-color-regular) 40%, transparent);
				transform: scaleX(1.2) translateY(-50%);
			}
		}

		.tagItem-selected {
			color: var(--el-color-primary);
			background: var(--el-color-primary-light-8);
			border-color: var(--el-color-primary-light-3);
		}

		.tagItemOut-selected {
			background-color: var(--el-bg-color);
			border-radius: 8px 8px 0 0;

			&:hover {
				color: var(--el-text-color-primary);
				background-color: var(--el-bg-color);
				border-radius: 8px 8px 0 0;
			}

			.tagItemOut-svg-container {
				position: absolute;
				bottom: -5px;
				width: 100%;
				height: 5px;
				background-color: var(--el-bg-color);

				.tagItemOut-svg {
					position: absolute;
					bottom: 0;
					width: 8px;
					height: 8px;
					fill: var(--el-bg-color);
				}

				.tagItemOut-svg1 {
					left: -8px;
					transform: rotate(-90deg);
				}

				.tagItemOut-svg2 {
					right: -8px;
				}
			}
		}
	}

	.over-width-left,
	.over-width-right {
		position: absolute;
		top: -8px;
		bottom: 0;
		z-index: 2;
		width: 30px; /* Width of the gradient */
		height: 30px;
		pointer-events: none;
	}

	.over-width-left {
		left: 18px;
	}

	.over-width-right {
		right: 18px;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.3s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

	.divider {
		width: 1px;
		height: 13px;
		margin: 0 10px;
		margin-bottom: 5px;
		background-color: color-mix(in srgb, var(--el-text-color-regular) 40%, transparent);
		transform: scaleX(1.2);
	}
</style>
