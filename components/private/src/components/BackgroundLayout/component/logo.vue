<template>
	<div v-if="props.isShowLogo" class="layout-logo" @click="onThemeConfigChange">
		<img :class="`layout-logo${!props.isCollapse ? '-medium' : ''}-img`" src="/favicon.ico" />
		<span v-if="!props.isCollapse" class="fontFFF">{{ props.globalTitle }}</span>
	</div>
</template>

<script setup lang="ts">
	import { propsKey, propsEnum, emitsKey } from '../BackgroundLayout'

	const props = inject(propsKey)!
	const emits = inject(emitsKey)!

	// logo 点击实现菜单展开/收起
	const onThemeConfigChange = () => {
		emits('changeProp', propsEnum.isCollapse, !props.isCollapse)
	}
</script>
