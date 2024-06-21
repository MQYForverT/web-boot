<template>
	<div v-if="setShowLogo" class="layout-logo" @click="onThemeConfigChange">
		<img class="layout-logo-medium-img" src="/favicon.ico" />
		<span class="fontFFF">{{ props.globalTitle }}</span>
	</div>
	<div v-else class="layout-logo-size" @click="onThemeConfigChange">
		<img class="layout-logo-size-img" src="/favicon.ico" />
	</div>
</template>

<script setup lang="ts">
	import { propsKey, propsEnum, emitsKey } from '../BackgroundLayout'

	const props = inject(propsKey)!
	const emits = inject(emitsKey)!

	// 设置 logo 的显示。classic 经典布局默认显示 logo
	const setShowLogo = computed(() => {
		const { isCollapse } = props
		return !isCollapse || document.body.clientWidth < 1000
	})
	// logo 点击实现菜单展开/收起
	const onThemeConfigChange = () => {
		emits('changeProp', propsEnum.isCollapse, !props.isCollapse)
	}
</script>

<style lang="scss">
	.layout-logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 220px;
		height: 50px;
		font-size: 16px;
		color: var(--color-primary);
		cursor: pointer;
		box-shadow: rgb(0 21 41 / 10%) 0 1px 4px;
		animation: logoAnimation 0.3s ease-in-out;

		&:hover {
			span {
				color: var(--color-primary-light-2);
			}
		}

		&-medium-img {
			width: 35px;
			margin-right: 10px;
		}
	}

	.layout-logo-size {
		display: flex;
		width: 100%;
		height: 50px;
		cursor: pointer;
		animation: logoAnimation 0.3s ease-in-out;

		&-img {
			width: 30px;
			margin: auto;
		}

		&:hover {
			img {
				animation: logoAnimation 0.3s ease-in-out;
			}
		}
	}
</style>
