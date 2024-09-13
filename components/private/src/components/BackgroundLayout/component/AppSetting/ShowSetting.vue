<template>
	<el-scrollbar class="pa-4">
		<ul>
			<h3>布局</h3>
			<li v-if="!state.isMobile" class="flex-y-center">
				<div class="flex flex-wrap gap-5">
					<RectItem
						v-for="item in layoutList"
						:ref="(el) => setItemRef(el, item.mode)"
						inner-class="pa-1"
						:checked="state.layout === item.mode"
						:tip="item.tip"
						@click="state.layout = item.mode"
					>
						<component :is="item.component" width="92" height="66" :class="`layout-${item.mode}`" />
					</RectItem>
				</div>
			</li>
			<h3>主题</h3>
			<li class="flex-y-center">
				<div class="flex flex-wrap gap-5">
					<RectItem
						v-for="item in themeList"
						:ref="(el) => setItemRef(el, item.mode)"
						inner-class="h-13"
						:checked="globalState.theme === item.mode"
						:tip="item.tip"
						@click="clickThemeMode(item.mode)"
					>
						<component :is="item.component" width="20" height="20" />
					</RectItem>
				</div>
			</li>
			<li class="flex-y-center justify-between pt-5">
				<div>深色菜单栏</div>
				<el-switch
					:model-value="state.menuMode"
					:active-value="menuModeEnum.dark"
					:inactive-value="menuModeEnum.light"
					@change="
						(e) => {
							state.menuMode = e as menuModeEnum
							handMenuMode = e as menuModeEnum
						}
					"
				/>
			</li>
			<h3>导航菜单</h3>
			<li class="flex-y-center justify-between">
				<div>菜单手风琴模式</div>
				<el-switch :model-value="state.isUniqueOpened" @change="(e) => (state.isUniqueOpened = Boolean(e))" />
			</li>
			<h3>面包屑导航</h3>
			<li class="flex-y-center justify-between">
				<div>显示面包屑</div>
				<el-switch :model-value="state.isBreadcrumb" @change="(e) => (state.isBreadcrumb = Boolean(e))" />
			</li>
			<h3>标签栏</h3>
			<li class="flex-y-center justify-between">
				<div>显示标签页</div>
				<el-switch :model-value="state.isTagsView" @change="(e) => (state.isTagsView = Boolean(e))" />
			</li>
			<li class="flex-y-center justify-between py-2">
				<div>显示标签页图标</div>
				<el-switch :model-value="state.isTagsViewIcon" @change="(e) => (state.isTagsViewIcon = Boolean(e))" />
			</li>
		</ul>
	</el-scrollbar>
</template>

<script lang="ts" setup>
	import useGlobalStore, { themeModeEnum } from '@/components/globalStore'
	import { menuModeEnum, layoutEnum } from '../../BackgroundLayout'
	import useState from '../../hooks/useState'

	import RectItem from './RectItem.vue'
	import { Sunny, Moon, Sunrise } from '@element-plus/icons-vue'
	import LayoutDefaults from '~icons/mqy-icon/layout-defaults'
	import LayoutVertical from '~icons/mqy-icon/layout-vertical'

	const { state, handMenuMode } = useState()

	const itemRefs = ref(new Map<string, HTMLElement | null>())
	const setItemRef = (el: Element | ComponentPublicInstance | null, id: string) => {
		const htmlElement = el as HTMLElement | null
		itemRefs.value.set(id, htmlElement)
	}

	const layoutList = [
		{ mode: layoutEnum.defaults, component: LayoutDefaults, tip: '水平' },
		{ mode: layoutEnum.vertical, component: LayoutVertical, tip: '垂直' },
	]
	const themeList = [
		{ mode: themeModeEnum.light, component: Sunny, tip: '浅色' },
		{ mode: themeModeEnum.dark, component: Moon, tip: '深色' },
		{ mode: themeModeEnum.system, component: Sunrise, tip: '跟随系统' },
	]

	const { setThemeElement, globalState } = useGlobalStore()

	const clickThemeMode = (mode: themeModeEnum) => {
		const el = itemRefs.value.get(mode) as unknown as ComponentPublicInstance
		setThemeElement(el.$el)
		globalState.theme = mode
	}
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	/* stylelint-disable selector-id-pattern */
	.layout-defaults {
		#svg_2 {
			fill: var(--el-color-primary);
		}
	}

	.layout-vertical {
		#svg_8 {
			fill: var(--el-color-primary);
		}
	}

	ul {
		padding-inline-start: 0;
	}
</style>
