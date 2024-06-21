<template>
	<transition name="el-zoom-in-center">
		<div
			v-show="state.isShow"
			:key="Math.random()"
			aria-hidden="true"
			class="el-dropdown__popper el-popper is-light is-pure custom-contextmenu"
			data-popper-placement="bottom"
			role="tooltip"
			:style="`top: ${dropdowns.y + 5}px;left: ${dropdowns.x}px;`"
		>
			<ul class="el-dropdown-menu">
				<template v-for="(v, k) in state.dropdownList">
					<li
						v-if="!v.affix"
						:key="k"
						aria-disabled="false"
						class="el-dropdown-menu__item"
						tabindex="-1"
						@click="onCurrentContextmenuClick(v.id)"
					>
						<SvgIcon :name="v.icon" />
						<span>{{ v.txt }}</span>
					</li>
				</template>
			</ul>
			<div class="el-popper__arrow" style="left: 10px"></div>
		</div>
	</transition>
</template>

<script setup>
	const props = defineProps({
		dropdown: {
			type: Object,
			default: () => {
				return {
					x: 0,
					y: 0,
				}
			},
		},
	})

	const emit = defineEmits(['currentContextmenuClick'])

	const state = reactive({
		isShow: false,
		dropdownList: [
			{ id: 0, txt: '刷新', affix: false, icon: 'ele-RefreshRight' },
			{ id: 1, txt: '关闭', affix: false, icon: 'ele-Close' },
			{ id: 2, txt: '关闭其它', affix: false, icon: 'ele-CircleClose' },
			{ id: 3, txt: '全部关闭', affix: false, icon: 'ele-FolderDelete' },
			{
				id: 4,
				txt: '当前页全屏',
				affix: false,
				icon: 'iconfont icon-fullscreen',
			},
		],
		path: {},
	})
	// 父级传过来的坐标 x,y 值
	const dropdowns = computed(() => {
		return props.dropdown
	})
	// 当前项菜单点击
	const onCurrentContextmenuClick = (id) => {
		emit('currentContextmenuClick', { id, path: state.path })
	}
	// 打开右键菜单：判断是否固定，固定则不显示关闭按钮
	const openContextmenu = (item) => {
		state.path = item.path
		item.meta.isAffix ? (state.dropdownList[1].affix = true) : (state.dropdownList[1].affix = false)
		closeContextmenu()
		setTimeout(() => {
			state.isShow = true
		}, 10)
	}
	// 关闭右键菜单
	const closeContextmenu = () => {
		state.isShow = false
	}
	// 监听页面监听进行右键菜单的关闭
	onMounted(() => {
		document.body.addEventListener('click', closeContextmenu)
	})
	// 页面卸载时，移除右键菜单监听事件
	onUnmounted(() => {
		document.body.removeEventListener('click', closeContextmenu)
	})

	defineExpose({ openContextmenu })
</script>

<style lang="scss">
	.custom-contextmenu {
		position: fixed;
		z-index: 2190;
		transform-origin: center top;

		.el-dropdown-menu__item {
			font-size: 12px !important;

			i {
				font-size: 12px !important;
			}
		}
	}
</style>
