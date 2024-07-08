import useState from '../hooks/useState'
import useInject from '../hooks/useInject'

export function useTag() {
	const { state } = useState()
	const { emits } = useInject()
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
		return { left: contextmenuLeft.value + 'px', top: contextmenuTop.value + 'px' }
	})

	const addTag = () => {
		if (state.activeTags?.some((v: Layout.Menu) => v.path === state.activePath)) {
			return
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
