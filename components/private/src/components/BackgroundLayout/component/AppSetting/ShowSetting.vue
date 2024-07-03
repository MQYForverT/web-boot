<template>
	<el-divider>界面显示</el-divider>
	<ul>
		<li class="flex-y-center justify-between py-1">
			<div>深色主题</div>
			<el-switch
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
				active-value="dark"
				inactive-value="light"
				@change="(e) => (state.menuMode = e ? menuModeEnum.dark : menuModeEnum.light)"
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
		<li class="flex-y-center justify-between py-1">
			<div>动画类型</div>
			<el-select :model-value="state.animation" class="w-35" @change="(e) => (state.animation = e)">
				<el-option v-for="item in animateMode" :key="item.value" :label="item.label" :value="item.value" />
			</el-select>
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { animationEnum, menuModeEnum } from '../../BackgroundLayout'
	import useState from '../../hooks/useState'
	import { Sunny, Moon } from '@element-plus/icons-vue'

	const { state } = useState()
	const animateMode = [
		{ label: '默认', value: animationEnum.zoomFade },
		{ label: '滑动', value: animationEnum.fadeSlide },
		{ label: '渐变', value: animationEnum.fade },
		{ label: '底部滑出', value: animationEnum.fadeBottom },
		{ label: '缩放消退', value: animationEnum.fadeScale },
	]
</script>

<style>
	@unocss-placeholder;
</style>
