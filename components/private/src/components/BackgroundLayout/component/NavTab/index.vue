<template>
	<div ref="tagBodyRef" class="m-t-[0.5px] flex-y-center shadow-[0_0_1px_#888]">
		<div
			v-show="overBodyWidth && !arrivedState.left"
			class="relative ml-1 mr-1 flex-center cursor-pointer rounded-2px hover:bg-[rgb(228,229,230)]"
			@click.prevent.stop="toPage('pre')"
		>
			<div class="over-width-left"></div>
			<el-icon color="rgb(100, 106, 115)" size="16">
				<CaretLeft />
			</el-icon>
		</div>

		<transition-group
			v-if="state.activeTags.length"
			ref="tagGroupRef"
			name="list"
			tag="div"
			class="scroll-container h-10 w-full flex-y-center overflow-x-auto overflow-y-hidden whitespace-nowrap bg-[var(--el-bg-color)] pb-4px pl-12px pr-12px pt-4px"
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
				@contextmenu.prevent="handleContextMenu($event, item.path, item.affix, 'out')"
			>
				<div
					v-if="state.isTagsViewIcon"
					:class="[state.isTagsViewIcon ? item.icon || 'i-ep-tickets' : '']"
					class="mr-1 text-4"
				/>
				<span>{{ item.title }}</span>
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
				<el-icon v-if="item.affix" class="absolute rounded-full -left-1 -top-1" size="12">
					<Paperclip />
				</el-icon>
			</div>
		</transition-group>

		<div
			v-show="overBodyWidth && !arrivedState.right"
			class="relative ml-1 mr-1 flex-center cursor-pointer rounded-2px hover:bg-[rgb(228,229,230)]"
			@click.prevent.stop="toPage('next')"
		>
			<div class="over-width-right"></div>
			<el-icon color="rgb(100, 106, 115)" size="16">
				<CaretRight />
			</el-icon>
		</div>

		<div v-show="overBodyWidth" class="divider" />

		<el-popover placement="bottom" :width="200" trigger="click" :teleported="false" :hide-after="0" :show-arrow="false">
			<template #reference>
				<div v-show="overBodyWidth" class="mr-2 flex-center cursor-pointer">
					<div class="whitespace-nowrap">全部</div>
					<el-icon class="el-icon--right"><arrow-down /></el-icon>
				</div>
			</template>
			<el-input v-model="tagSearch" class="mb-2 w-full" placeholder="搜索" :prefix-icon="Search" />
			<transition-group
				v-if="state.activeTags.filter((v) => v.title.includes(tagSearch)).length"
				name="list"
				tag="div"
				class="scroll-container max-h-100 overflow-x-hidden overflow-y-auto bg-[var(--el-bg-color)]"
			>
				<div
					v-for="item in state.activeTags.filter((v) => v.title.includes(tagSearch))"
					:key="item.path"
					:ref="(el) => setItemRef(el, item.path)"
					:class="[item.path === state.activePath ? 'tagItem-selected' : '']"
					class="tagItem relative mb-0.75 h-7 flex-y-center justify-between border border-gray-200 rounded-2px bg-white pl-3 pr-2"
					@click="handleChange(item.path)"
					@contextmenu.prevent="handleContextMenu($event, item.path, item.affix, 'in')"
				>
					<div class="flex-center">
						<div
							v-if="state.isTagsViewIcon"
							:class="[state.isTagsViewIcon ? item.icon || 'i-ep-tickets' : '']"
							class="mr-1 text-4"
						/>
						<span>{{ item.title }}</span>
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
					<el-icon v-if="item.affix" class="absolute rounded-full -left-1 -top-1" size="12">
						<Paperclip />
					</el-icon>
				</div>
			</transition-group>
			<div v-else class="flex-center text-3">空空如也～</div>
		</el-popover>
	</div>

	<TabDropdown
		:currentPath="currentPath"
		:options="tabMenuOptions"
		:visible="contextmenuVisible"
		:style="contextMenuStyle"
	/>
</template>

<script lang="ts" setup>
	import { Close, RefreshRight, Paperclip, CaretLeft, CaretRight, ArrowDown, Search } from '@element-plus/icons-vue'
	import useState from '../../hooks/useState'
	import useInject from '../../hooks/useInject'
	import { useTag } from '../../hooks/useTag'
	import TabDropdown from './TabDropdown.vue'

	const { state } = useState()
	const { props } = useInject()

	const tagBodyRef = ref()
	const tagGroupRef = ref()
	const overBodyWidth = ref(false)
	const itemRefs = ref(new Map<string, HTMLElement | null>())
	const setItemRef = (el: Element | globalThis.ComponentPublicInstance | null, id: string) => {
		const htmlElement = el as HTMLElement | null
		itemRefs.value.set(id, htmlElement)
	}
	const { arrivedState, measure } = useScroll(tagGroupRef)

	const currentPath = ref('')
	const sortableRef = ref()

	const tagSearch = ref('')

	// 监听窗口的变化
	useResizeObserver(tagBodyRef, (entries) => {
		const { width } = entries[0].contentRect
		const tagScroll = tagGroupRef.value?.$el
		// 窗口变化时重新计算
		measure()
		if (width < tagScroll.scrollWidth) {
			overBodyWidth.value = true
		} else {
			overBodyWidth.value = false
		}
	})

	const {
		contextmenuLeft,
		contextmenuTop,
		contextmenuVisible,
		tabMenuOptions,
		contextMenuStyle,
		addTag,
		closeTag,
		switchTag,
		refreshTag,
	} = useTag()

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
		if (overBodyWidth.value) {
			const item = itemRefs.value.get(path)
			if (item) {
				item.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
			}
		}
	}

	// 删除tab
	const handleRemove = (path: string) => {
		// 找到当前索引
		const index = state.activeTags.findIndex((v) => v.path === path)
		closeTag(index, path)
	}

	// 筛选显示的右键菜单
	const showFilterMenu = (path: string, affix?: boolean, type?: 'out' | 'in') => {
		Array.of(0, 1, 2, 3, 4, 5).forEach((v) => {
			tabMenuOptions[v].show = true
			tabMenuOptions[v].disabled = false
		})

		if (type === 'in') {
			tabMenuOptions[2].label = '关闭上侧'
			tabMenuOptions[3].label = '关闭下侧'
		}

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

	const handleContextMenu = (e: MouseEvent, path: string, affix?: boolean, type?: 'out' | 'in') => {
		showFilterMenu(path, affix, type)
		const menuMinWidth = type === 'out' ? 105 : 0
		const el = tagGroupRef.value?.$el
		// // 容器距离左侧的长度
		const offsetLeft = el.getBoundingClientRect().left // container margin left
		// // 容器的宽度
		const offsetWidth = el.offsetWidth // container width
		const maxLeft = offsetWidth - menuMinWidth // left boundary
		const left = e.clientX - offsetLeft + 15 // 15: margin right
		contextmenuLeft.value = left > maxLeft ? maxLeft : left
		contextmenuTop.value = e.clientY
		contextmenuVisible.value = true
	}

	const updateTagScroll = () => {
		requestAnimationFrame(() => {
			const tagScroll = tagGroupRef.value?.$el
			const tagBody = tagBodyRef.value
			if (tagScroll && tagBody) {
				if (tagScroll.scrollWidth > tagBody.clientWidth) {
					overBodyWidth.value = true
				} else {
					overBodyWidth.value = false
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

			nextTick(() => {
				if (tagGroupRef.value?.$el && props.isSortableTagsView && !sortableRef.value) {
					import('sortablejs').then((Sortable) => {
						sortableRef.value = new Sortable.default(tagGroupRef.value.$el, {
							animation: 300,
							dataIdAttr: 'data-name',
							onEnd: (evt) => {
								const oldIndex = evt.oldIndex!
								const newIndex = evt.newIndex!
								if (oldIndex !== newIndex) {
									// 先删除老的
									const movedItem = state.activeTags.splice(oldIndex, 1)[0]
									// 把老的加入到新的位置
									state.activeTags.splice(newIndex, 0, movedItem)
								}
							},
						})
					})
				}
			})
		},
		{
			immediate: true,
		},
	)

	onBeforeUnmount(() => {
		if (sortableRef.value) {
			sortableRef.value.destroy()
			sortableRef.value = null
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
			&:hover {
				border-color: var(--el-color-primary-light-3);
				color: var(--el-color-primary);
			}
		}

		.tagItem-selected {
			background: var(--el-color-primary-light-8);
			border-color: var(--el-color-primary-light-3);
			color: var(--el-color-primary);
		}
	}

	.over-width-left::after,
	.over-width-right::before {
		content: '';
		position: absolute;
		z-index: 2;
		top: -8px;
		bottom: 0;
		height: 32px;
		width: 40px; /* Width of the gradient */
		pointer-events: none;
	}

	.over-width-left::after {
		left: 16px;
		background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
	}
	.over-width-right::before {
		right: 16px;
		background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
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
		border-left: 1px solid #e4e7ed;
		margin: 0 10px;
	}
</style>
