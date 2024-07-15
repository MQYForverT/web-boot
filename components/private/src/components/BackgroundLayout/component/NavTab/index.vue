<template>
	<div ref="tagBodyRef" class="h-10 flex-y-center pl-3 pr-3 shadow-[0_0_1px_#888]">
		<div
			v-show="overBody && !arrivedState.left"
			class="relative flex-center cursor-pointer rounded-2px -ml-1 hover:bg-[rgb(228,229,230)]"
			@click.prevent.stop="toPage('pre')"
		>
			<div
				class="over-width-left"
				:style="{
					background: `linear-gradient(to right, rgb(255 255 255 / ${state.isDark ? '40%' : '100%'}), rgb(255 255 255 / 0%))`,
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
			class="scroll-container ml-0.5 mr-0.5 h-8 w-full flex-y-center overflow-x-auto overflow-y-hidden whitespace-nowrap bg-[var(--el-bg-color)]"
			@after-enter="handleTransitionEnd"
			@after-leave="handleTransitionEnd"
		>
			<div
				v-for="item in state.activeTags"
				:ref="(el) => setItemRef(el, item.path)"
				:key="item.path"
				:class="[item.path === state.activePath ? 'tagItem-selected' : '']"
				class="tagItem relative mr-2 h-full flex-center border border-gray-200 rounded-2px bg-white pl-3 pr-2"
				@click="handleChange(item.path)"
				@contextmenu.prevent="handleContextMenuHand($event, item.path, item.affix, 'out')"
			>
				<TagItem :item="item" />
			</div>
		</transition-group>

		<div
			v-show="overBody && !arrivedState.right"
			class="relative flex-center cursor-pointer rounded-2px hover:bg-[rgb(228,229,230)]"
			@click.prevent.stop="toPage('next')"
		>
			<div
				class="over-width-right"
				:style="{
					background: `linear-gradient(to left, rgb(255 255 255 / ${state.isDark ? '40%' : '100%'}), rgb(255 255 255 / 0%))`,
				}"
			></div>
			<el-icon color="rgb(100, 106, 115)" size="16">
				<CaretRight />
			</el-icon>
		</div>

		<div v-show="overBody" class="divider" />

		<el-popover placement="bottom" :width="200" trigger="click" :teleported="false" :hide-after="0" :show-arrow="false">
			<template #reference>
				<div v-show="overBody" class="mr-2 flex-center cursor-pointer">
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
					class="tagItem relative mb-0.5 h-7 flex-y-center justify-between border border-gray-200 rounded-2px bg-white pl-3 pr-2"
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
	import { CaretLeft, CaretRight, ArrowDown, Search } from '@element-plus/icons-vue'
	import useState from '../../hooks/useState'
	import useInject from '../../hooks/useInject'
	import { useTag } from '../../hooks/useTag'
	import TagDropdown from './TagDropdown.vue'
	import TagItem from './TagItem.vue'
	import type { SortableEvent } from 'sortablejs'

	const { state } = useState()
	const { props } = useInject()

	// 主容器
	const tagBodyRef = ref()
	// 滚动容器
	const tagGroupRef = ref()
	// 超出主容器，即出现滚动条
	const tagGroupRefIn = ref()
	const overBody = ref(false)
	const itemRefs = ref(new Map<string, HTMLElement | null>())
	const setItemRef = (el: Element | globalThis.ComponentPublicInstance | null, id: string) => {
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

	const { handleContextMenu, contextmenuVisible, tabMenuOptions, contextMenuStyle, addTag, switchTag } = useTag()

	const handleContextMenuHand = (e: MouseEvent, path: string, affix?: boolean, type?: 'out' | 'in') => {
		handleContextMenu(e, path, tagGroupRef.value?.$el, affix, type)
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
					import('sortablejs').then((Sortable) => {
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
			cursor: pointer;
			background-color: var(--el-bg-color);
			border: 1px solid var(--el-border-color-light);

			&:hover {
				color: var(--el-color-primary);
				border-color: var(--el-color-primary-light-3);
			}
		}

		.tagItem-selected {
			color: var(--el-color-primary);
			background: var(--el-color-primary-light-8);
			border-color: var(--el-color-primary-light-3);
		}
	}

	.over-width-left,
	.over-width-right {
		position: absolute;
		top: -8px;
		bottom: 0;
		z-index: 2;
		width: 32px; /* Width of the gradient */
		height: 32px;
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
		height: 24px;
		margin: 0 10px;
		border-left: 1px solid #e4e7ed;
	}
</style>
