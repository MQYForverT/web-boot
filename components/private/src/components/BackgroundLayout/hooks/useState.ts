import { propPrecessType } from '../BackgroundLayout'
import useInject from './useInject'

export default createGlobalState(() => {
	const { props, emits } = useInject()

	const getActivePath = (menu: Layout.Menu): string => {
		if (menu.children?.length) {
			return getActivePath(menu.children[0])
		}
		return menu.path
	}

	const defaultCollapse = computed(() => {
		console.log(props.isCollapse)
		return props.isCollapse
	})

	const defaultMobile = computed(() => {
		return props.isMobile
	})

	const state = reactive({
		activePath: props.defaultActivePath
			? props.defaultActivePath
			: props.menuList.length
				? getActivePath(props.menuList[0])
				: '',
		isCollapse: props.isCollapse !== undefined ? defaultCollapse : false,
		isMobile: props.isMobile !== undefined ? defaultMobile : false,
	})

	// 对外可控属性做代理，当设值当时候，自动识别是内部控制，还是外部控制
	const stateProxy = new Proxy(state, {
		get(target, propKey, receiver) {
			return Reflect.get(target, propKey, receiver)
		},
		set(target, key: keyof propPrecessType, newVal, receiver) {
			if (props[key] === undefined) {
				Reflect.set(target, key, newVal, receiver)
			} else {
				emits('changeProp', key, newVal)
			}
			return true
		},
	})

	return { state: stateProxy }
})
