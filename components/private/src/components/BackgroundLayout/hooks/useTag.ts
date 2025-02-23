import useState from '../hooks/useState'
import useInject from '../hooks/useInject'
import type { Layout } from '../layout'

export function useTag() {
	const { state } = useState()
	const { props, emits } = useInject()

	const width = 86
	const contextmenuLeft = ref(0)
	const contextmenuTop = ref(0)

	const contextmenuVisible = ref(false)
	const tabMenuOptions = reactive([
		{
			icon: 'local-icon-refresh',
			label: '刷新页面',
			key: 'refresh',
			show: true,
			disabled: false,
		},
		{
			icon: 'el-icon-close',
			label: '关闭当前',
			key: 'closeCurrent',
			show: true,
			disabled: false,
		},
		{
			icon: 'el-icon-dArrowLeft',
			label: '关闭左侧',
			key: 'closeLeft',
			show: true,
			disabled: false,
		},
		{
			icon: 'el-icon-dArrowRight',
			label: '关闭右侧',
			key: 'closeRight',
			show: true,
			disabled: false,
		},
		{
			icon: 'el-icon-switch',
			label: '关闭其他',
			key: 'closeOther',
			show: true,
			disabled: false,
		},
		{
			icon: 'el-icon-minus',
			label: '关闭所有',
			key: 'closeAll',
			show: true,
			disabled: false,
		},
	])
	const contextMenuStyle = computed(() => {
		return { width: width + 'px', left: contextmenuLeft.value + 'px', top: contextmenuTop.value + 'px' }
	})

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
	}

	const handleContextMenu = (
		e: MouseEvent,
		path: string,
		container?: HTMLElement | null,
		affix?: boolean,
		type?: 'out' | 'in',
	) => {
		if (!container) {
			return
		}
		showFilterMenu(path, affix, type)
		const menuWidth = e.clientX + width + 10
		// // 容器的宽度
		const offsetWidth = container.offsetWidth // container width
		contextmenuLeft.value = menuWidth > offsetWidth ? e.clientX - width : e.clientX + 10
		contextmenuTop.value = e.clientY
		contextmenuVisible.value = true
	}

	const addTag = () => {
		// 如果新增的已经存在了，则不新增
		if (state.activeTags?.find((v: Layout.Menu) => v.path === state.activePath)) {
			return
		}
		// 如果tag数量达到设置的阈值，则触发删除
		if (state.activeTags.length === props.tagsShowNum) {
			// 找到第一个没有固定的
			let indexNoAffix = state.activeTags.findIndex((x) => !x.affix)
			// 如果没找到，则删除第一个
			if (indexNoAffix === -1) {
				indexNoAffix = 0
			}
			state.activeTags.splice(indexNoAffix, 1)
		}
		const tag = state.flatMenuList.find((x) => x.path === state.activePath)
		if (tag) {
			state.activeTags?.push(tag)
		}
	}

	// 切换tab
	const switchTag = (path: string) => {
		emits('selectMenu', path)
		state.activePath = path
	}

	// 刷新tab
	const refreshTag = (path: string) => {
		emits('tagRefresh', path)
	}

	// 关闭tag
	const closeTag = (index: number, path: string) => {
		state.activeTags.splice(index, 1)
		// 如果关闭的是自己，则需要重新切换一个
		if (path === state.activePath) {
			// 如果是第一个，则找后一个，否则找到前一个path
			if (index > 0) {
				index = index - 1
			}
			const prePath = state.activeTags[index].path
			emits('selectMenu', prePath)
			state.activePath = prePath
		}
	}

	// 关闭左边
	const closeLeftTags = (index: number, path: string) => {
		const left = state.activeTags.slice(0, index).filter((x) => x.affix)
		state.activeTags = [...left, ...state.activeTags.slice(index)]
		// 如果把当前激活的关了，则需要重新激活一个
		if (!state.activeTags.find((x) => x.path === state.activePath)) {
			emits('selectMenu', path)
			state.activePath = path
		}
	}

	// 关闭右边
	const closeRightTags = (index: number, path: string) => {
		const right = state.activeTags.slice(index + 1).filter((x) => x.affix)
		state.activeTags = [...state.activeTags.slice(0, index + 1), ...right]
		// 如果把当前激活的关了，则需要重新激活一个
		if (!state.activeTags.find((x) => x.path === state.activePath)) {
			emits('selectMenu', path)
			state.activePath = path
		}
	}

	// 关闭其他
	const closeOtherTags = (index: number, path: string) => {
		state.activeTags = state.activeTags.filter((x, i) => i === index || x.affix)
		// 如果把当前激活的关了，则需要重新激活一个
		if (!state.activeTags.find((x) => x.path === state.activePath)) {
			emits('selectMenu', path)
			state.activePath = path
		}
	}

	// 关闭所有，但是至少要保留一个
	const closeAll = (index: number) => {
		let arr = state.activeTags.filter((x) => x.affix)
		if (!arr.length) {
			arr = [state.activeTags[index]]
		}
		state.activeTags = arr

		// 如果把当前激活的关了，则需要重新激活一个
		if (!state.activeTags.find((x) => x.path === state.activePath)) {
			emits('selectMenu', arr[0].path)
			state.activePath = arr[0].path
		}
	}

	watch(
		() => contextmenuVisible.value,
		() => {
			useEventListener(document, 'click', () => (contextmenuVisible.value = false))
		},
	)
	return {
		handleContextMenu,
		contextmenuLeft,
		contextmenuTop,
		contextmenuVisible,
		tabMenuOptions,
		contextMenuStyle,
		addTag,
		switchTag,
		refreshTag,
		closeTag,
		closeLeftTags,
		closeRightTags,
		closeOtherTags,
		closeAll,
	}
}
