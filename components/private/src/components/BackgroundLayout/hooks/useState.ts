import { animationEnum, menuModeEnum, propPrecessType, propsEnum } from '../BackgroundLayout'
import useInject from './useInject'

export default createGlobalState(() => {
	const prefix = '@mqy/component-private-background-layout'
	const { props, emits } = useInject()

	const getActivePath = (menu: Layout.Menu): string => {
		if (menu.children?.length) {
			return getActivePath(menu.children[0])
		}
		return menu.path
	}

	const defaultCollapse = computed(() => {
		return props.isCollapse
	})

	const defaultMobile = computed(() => {
		return props.isMobile
	})

	const defaultDark = computed(() => {
		return props.isDark
	})

	const defaultMenuMode = computed(() => {
		return props.menuMode
	})

	const defaultAllOpen = computed(() => {
		return props.isAllOpen
	})

	const defaultUniqueOpened = computed(() => {
		return props.isUniqueOpened
	})

	const defaultBreadcrumb = computed(() => {
		return props.isBreadcrumb
	})

	const defaultTagsView = computed(() => {
		return props.isTagsView
	})

	const defaultTagsViewIcon = computed(() => {
		return props.isTagsViewIcon
	})

	const defaultAnimation = computed(() => {
		return props.animation
	})

	const state = reactive({
		activePath: props.defaultActivePath
			? props.defaultActivePath
			: props.menuList.length
				? getActivePath(props.menuList[0])
				: '',
		isCollapse: props.isCollapse !== undefined ? defaultCollapse : false,
		isMobile: props.isMobile !== undefined ? defaultMobile : false,
		isDark: props.isDark !== undefined ? defaultDark : useStorage(`${prefix}-isAllOpen`, false),
		menuMode:
			props.menuMode !== undefined
				? defaultMenuMode
				: useStorage<menuModeEnum>(`${prefix}-menuMode`, menuModeEnum.light),
		isAllOpen: props.isAllOpen !== undefined ? defaultAllOpen : useStorage(`${prefix}-isAllOpen`, true),
		isUniqueOpened:
			props.isUniqueOpened !== undefined ? defaultUniqueOpened : useStorage(`${prefix}-isUniqueOpened`, true),
		isBreadcrumb: props.isBreadcrumb !== undefined ? defaultBreadcrumb : useStorage(`${prefix}-isBreadcrumb`, true),
		isTagsView: props.isTagsView !== undefined ? defaultTagsView : useStorage(`${prefix}-isTagsView`, true),
		isTagsViewIcon:
			props.isTagsViewIcon !== undefined ? defaultTagsViewIcon : useStorage(`${prefix}-isTagsViewIcon`, true),
		animation:
			props.animation !== undefined
				? defaultAnimation
				: useStorage<animationEnum>(`${prefix}-animation`, animationEnum.zoomFade),
	})

	// 对外可控属性做代理，当设值当时候，自动识别是内部控制，还是外部控制
	const stateProxy = new Proxy(state, {
		get(target, propKey, receiver) {
			return Reflect.get(target, propKey, receiver)
		},
		set(target, key: keyof propPrecessType, newVal, receiver) {
			if (props[key] === undefined) {
				Reflect.set(target, key, newVal, receiver)
				switch (key) {
					case propsEnum.isDark:
						if (newVal) {
							state.menuMode = menuModeEnum.light
							document.documentElement.className = 'layout-menu-light dark'
						} else {
							document.documentElement.classList.remove('dark')
						}
						break
					case propsEnum.menuMode:
						const dark = state.isDark ? 'dark' : ''
						document.documentElement.className = `layout-menu-${newVal} ${dark}`
						break
				}
			} else {
				emits('changeProp', key, newVal)
			}
			return true
		},
	})

	return { state: stateProxy }
})
