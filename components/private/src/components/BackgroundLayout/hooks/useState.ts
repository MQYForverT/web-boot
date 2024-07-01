import useInject from './useInject'

export default createGlobalState(() => {
	const { props } = useInject()

	const getActivePath = (menu: Layout.Menu): string => {
		if (menu.children?.length) {
			return getActivePath(menu.children[0])
		}
		return menu.path
	}
	// state
	const activePath = ref(
		props.defaultActivePath ? props.defaultActivePath : props.menuList.length ? getActivePath(props.menuList[0]) : '',
	)

	return { activePath }
})
