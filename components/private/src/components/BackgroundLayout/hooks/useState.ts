import { LayoutEmits, menuModeEnum, propPrecessType, propsEnum } from '../BackgroundLayout'
import useInject from './useInject'

export default createGlobalState((initProps?: propPrecessType) => {
	const rootElement = shallowRef<HTMLElement | null>(null)
	const prefix = '@mqy/component-private-background-layout'
	let props, emits

	if (initProps) {
		props = initProps
		emits = {} as LayoutEmits
	} else {
		const inject = useInject()
		props = inject.props
		emits = inject.emits
	}

	const initChildDataToFlat = (
		result: Layout.Menu[] = [],
		data: Layout.Menu[] = [],
		parentObj?: Layout.Menu,
	): Layout.Menu[] => {
		data.forEach((item) => {
			const fullLink = [
				{
					path: item.path,
					title: item.title,
					redirect: item.redirect,
				},
			]
			const obj = {
				path: item.path,
				title: item.title,
				icon: item.icon,
				affix: item.affix,
				redirect: item.redirect,
				isShowFooter: item.isShowFooter,
				fullLink: parentObj?.fullLink ? [...parentObj.fullLink, ...fullLink] : fullLink,
			}

			result.push(obj)

			if (item.children && item.children.length > 0) {
				initChildDataToFlat(result, item.children, obj)
			}
		})
		return result
	}

	const getMenuListFlat = computed(() => {
		return initChildDataToFlat([], props.menuList)
	})

	const defaultActivePath = computed(() => {
		return props.activePath!
	})

	const defaultActiveTags = computed(() => {
		return props.activeTags!
	})

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

	const state = reactive({
		flatMenuList: getMenuListFlat,
		// 当前激活的path，默认找到第一个非重定向的path
		activePath:
			props.activePath !== undefined
				? defaultActivePath
				: useStorage(`${prefix}-activePath`, getMenuListFlat.value.find((x) => !x.redirect)?.path || ''),
		// 当前激活的tags，默认找出所有affix的path，如果没有，则和activePath保持一致
		activeTags:
			props.activeTags !== undefined
				? defaultActiveTags
				: props.isCacheTagsView
					? useStorage<Layout.Menu[]>(
							`${prefix}-activeTags`,
							getMenuListFlat.value.filter((x) => x.affix).length
								? getMenuListFlat.value.filter((x) => x.affix)
								: [getMenuListFlat.value.find((x) => !x.redirect)!],
						)
					: ([] as Layout.Menu[]),
		isCollapse: props.isCollapse !== undefined ? defaultCollapse : false,
		isMobile: props.isMobile !== undefined ? defaultMobile : false,
		isDark: props.isDark !== undefined ? defaultDark : useStorage(`${prefix}-isDark`, false),
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
	})

	// 对外可控属性做代理，当设值当时候，自动识别是内部控制，还是外部控制
	const stateProxy = new Proxy(state, {
		get(target, propKey, receiver) {
			return Reflect.get(target, propKey, receiver)
		},
		set(target, key: keyof propPrecessType, newVal, receiver) {
			if (props[key] === undefined) {
				Reflect.set(target, key, newVal, receiver)
				// 除了赋值之外额外的逻辑
				switch (key) {
					case propsEnum.isDark: {
						const el = unref(rootElement)
						if (el) {
							if (newVal) {
								state.menuMode = menuModeEnum.light
								el.className = 'layout-menu-light'
								document.documentElement.className = 'dark'
							} else {
								document.documentElement.classList.remove('dark')
							}
						}

						break
					}
					case propsEnum.menuMode: {
						const el = unref(rootElement)
						if (el) {
							const dark = stateProxy.isDark ? 'dark' : ''
							el.className = `layout-menu-${newVal + ''} ${dark}`
						}
						break
					}
				}
			} else {
				emits('changeProp', key, newVal)
			}
			return true
		},
	})

	return { rootElement, state: stateProxy }
})
