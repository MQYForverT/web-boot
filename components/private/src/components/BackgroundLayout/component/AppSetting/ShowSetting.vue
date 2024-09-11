<template>
	<el-scrollbar class="pa-4">
		<ul>
			<h3>布局</h3>
			<li v-if="!state.isMobile" class="flex-y-center">
				<div class="flex flex-wrap gap-5">
					<div class="flex-col cursor-pointer w-[100px]">
						<div
							class="flex-center pa-1"
							:class="state.layout === layoutEnum.defaults ? 'layoutSelected' : 'layoutContainer'"
							@click="state.layout = layoutEnum.defaults"
						>
							<LayoutDefaults width="92" height="66" class="layout-defaults" />
						</div>
						<div class="tip">水平</div>
					</div>

					<div class="flex-col cursor-pointer w-[100px]">
						<div
							class="flex-center pa-1"
							:class="state.layout === layoutEnum.vertical ? 'layoutSelected' : 'layoutContainer'"
							@click="state.layout = layoutEnum.vertical"
						>
							<LayoutVertical width="92" height="66" class="layout-vertical" />
						</div>
						<div class="tip">垂直</div>
					</div>
				</div>
			</li>
			<h3>主题</h3>
			<li class="flex-y-center">
				<div class="flex flex-wrap gap-5">
					<div class="flex-col cursor-pointer w-[100px]">
						<div
							ref="isLightRef"
							class="flex-center h-13"
							:class="globalState.theme === themeModeEnum.light ? 'layoutSelected' : 'layoutContainer'"
							@click="clickThemeMode(themeModeEnum.light, isLightRef)"
						>
							<Sunny width="20" height="20" />
						</div>
						<div class="tip">浅色</div>
					</div>

					<div class="flex-col cursor-pointer w-[100px]">
						<div
							ref="isDarkRef"
							class="flex-center h-13"
							:class="globalState.theme === themeModeEnum.dark ? 'layoutSelected' : 'layoutContainer'"
							@click="clickThemeMode(themeModeEnum.dark, isDarkRef)"
						>
							<Moon width="20" height="20" />
						</div>
						<div class="tip">深色</div>
					</div>

					<div class="flex-col cursor-pointer w-[100px]">
						<div
							ref="isSystemRef"
							class="flex-center h-13"
							:class="globalState.theme === themeModeEnum.system ? 'layoutSelected' : 'layoutContainer'"
							@click="clickThemeMode(themeModeEnum.system, isSystemRef)"
						>
							<Sunrise width="20" height="20" />
						</div>
						<div class="tip">跟随系统</div>
					</div>
				</div>
			</li>
			<li class="flex-y-center justify-between">
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
			<li class="flex-y-center justify-between">
				<div>显示面包屑</div>
				<el-switch :model-value="state.isBreadcrumb" @change="(e) => (state.isBreadcrumb = Boolean(e))" />
			</li>
			<li class="flex-y-center justify-between">
				<div>显示标签页</div>
				<el-switch :model-value="state.isTagsView" @change="(e) => (state.isTagsView = Boolean(e))" />
			</li>
			<li class="flex-y-center justify-between">
				<div>显示标签页图标</div>
				<el-switch :model-value="state.isTagsViewIcon" @change="(e) => (state.isTagsViewIcon = Boolean(e))" />
			</li>
			<li class="flex-y-center justify-between">
				<div>菜单手风琴模式</div>
				<el-switch :model-value="state.isUniqueOpened" @change="(e) => (state.isUniqueOpened = Boolean(e))" />
			</li>
		</ul>
	</el-scrollbar>
</template>

<script lang="ts" setup>
	import useGlobalStore, { themeModeEnum } from '@/components/globalStore'
	import { menuModeEnum, layoutEnum } from '../../BackgroundLayout'
	import useState from '../../hooks/useState'
	import { Sunny, Moon, Sunrise } from '@element-plus/icons-vue'
	import LayoutDefaults from '~icons/mqy-icon/layout-defaults'
	import LayoutVertical from '~icons/mqy-icon/layout-vertical'

	const { state, handMenuMode } = useState()
	const isLightRef = ref()
	const isDarkRef = ref()
	const isSystemRef = ref()

	const { setThemeElement, globalState } = useGlobalStore()

	const clickThemeMode = (mode: themeModeEnum, el: HTMLElement) => {
		setThemeElement(el)
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

	.layoutContainer {
		position: relative;
		border: 1px solid var(--el-border-color-light);
		border-radius: 6px;
	}

	.layoutContainer::before {
		position: absolute;
		inset: -1px;
		content: '';
		border: 2px solid var(--el-color-primary);
		border-radius: 6px;
		transition: transform 0.2s ease;
		transform: scale(0);
		transform-origin: center;
	}

	.layoutContainer:hover::before {
		transform: scale(1);
	}

	.layoutSelected {
		border: 2px solid var(--el-color-primary);
		border-radius: 6px;
	}

	.tip {
		margin-top: 8px;
		font-size: 12px;
		color: color-mix(in srgb, var(--el-text-color-regular) 65%, transparent);
		text-align: center;
	}
</style>
