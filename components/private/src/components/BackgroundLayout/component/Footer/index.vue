<template>
	<div v-show="isShow" class="layout-footer pb5 pt6">
		<div class="layout-footer-warp">
			<div>© {{ new Date().getFullYear() }} {{ props.footerCompany }} ❤️</div>
			<div class="mt1.25">{{ props.footerRecord }}</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import useState from '../../hooks/useState'
	import useInject from '../../hooks/useInject'

	const { state } = useState()
	const { props } = useInject()

	// 判断当前路由是否开启单独配置
	const isShow = computed(() => {
		// 获取当前菜单信息
		const item = state.flatMenuList.find((item) => item.path === state.activePath)
		return item?.isShowFooter
	})
</script>

<style>
	@unocss-placeholder;
</style>

<style lang="scss">
	.layout-footer {
		width: 100%;

		&-warp {
			margin: auto;
			color: #9e9e9e;
			text-align: center;
			animation: logo-animation 0.3s ease-in-out;
		}
	}
</style>
