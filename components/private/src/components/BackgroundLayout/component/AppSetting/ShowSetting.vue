<template>
	<el-divider>界面显示</el-divider>
	<ul>
		<li v-if="!state.isMobile" class="flex-y-center justify-between py-1">
			<div>布局</div>
			<div class="flex gap-2">
				<LayoutIcon
					width="35"
					height="35"
					class="defaults layout cursor-pointer"
					:class="{ layoutSelected: state.layout === layoutEnum.defaults }"
					@click="state.layout = layoutEnum.defaults"
				/>
				<LayoutIcon
					width="35"
					height="35"
					class="layout cursor-pointer"
					:class="{ layoutSelected: state.layout === layoutEnum.vertical }"
					@click="state.layout = layoutEnum.vertical"
				/>
			</div>
		</li>
		<li class="flex-y-center justify-between py-1">
			<div>深色主题</div>
			<el-switch
				ref="isDarkRef"
				:model-value="state.isDark"
				inline-prompt
				:active-icon="Sunny"
				:inactive-icon="Moon"
				@change="(e) => (state.isDark = Boolean(e))"
			/>
		</li>
		<li class="flex-y-center justify-between py-1">
			<div>深色菜单栏</div>
			<el-switch
				:model-value="state.menuMode"
				:active-value="menuModeEnum.dark"
				:inactive-value="menuModeEnum.light"
				@change="(e) => (state.menuMode = e as menuModeEnum)"
			/>
		</li>
		<li class="flex-y-center justify-between py-1">
			<div>显示面包屑</div>
			<el-switch :model-value="state.isBreadcrumb" @change="(e) => (state.isBreadcrumb = Boolean(e))" />
		</li>
		<li class="flex-y-center justify-between py-1">
			<div>显示标签页</div>
			<el-switch :model-value="state.isTagsView" @change="(e) => (state.isTagsView = Boolean(e))" />
		</li>
		<li class="flex-y-center justify-between py-1">
			<div>显示标签页图标</div>
			<el-switch :model-value="state.isTagsViewIcon" @change="(e) => (state.isTagsViewIcon = Boolean(e))" />
		</li>
		<li class="flex-y-center justify-between py-1">
			<div>菜单手风琴模式</div>
			<el-switch :model-value="state.isUniqueOpened" @change="(e) => (state.isUniqueOpened = Boolean(e))" />
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import useGlobalStore from '@/components/globalStore'
	import { menuModeEnum, layoutEnum } from '../../BackgroundLayout'
	import useState from '../../hooks/useState'
	import { Sunny, Moon } from '@element-plus/icons-vue'
	import LayoutIcon from '~icons/mqy-icon/layout'

	const { state } = useState()
	const isDarkRef = ref()

	const { isDarkElement } = useGlobalStore()

	onMounted(() => {
		if (isDarkRef.value?.$el) {
			isDarkElement.value = isDarkRef.value.$el
		}
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.layout {
		path {
			fill: var(--el-text-color-primary);
		}
	}

	.layoutSelected {
		path {
			fill: var(--el-color-primary);
		}
	}

	.layout:hover {
		path {
			fill: var(--el-color-primary-light-3);
		}
	}

	.defaults {
		transform: scaleX(-1) rotate(90deg);
	}
</style>
