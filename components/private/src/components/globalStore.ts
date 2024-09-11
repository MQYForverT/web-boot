import { setIsDarkByAnimation, setIsDark } from './utils/setIsDarkByAnimation'

// 全部组件共有的状态，如果调用这个函数
export default createGlobalState((config?: Global.setting, cb?: (key: keyof Global.setting, val: any) => void) => {
	const prefix = '@mqy/component-private-background'

	const state = reactive<Global.setting>({
		isDark: false,
		themeAnimation: config?.themeAnimation || { show: true, duration: 500 },
		activeLanguage: '',
		language: config?.language,
		uiConfigProvider: config?.uiConfigProvider,
		globalTitle: config?.globalTitle || 'WebBoot',
	})

	const isDarkInit = ref(false)
	const isDarkElement = shallowRef<HTMLElement | null>(null)

	// 只有这些一开始除了赋值之外需要进行额外操作的，才需要设置immediate: true
	watch(
		() => config?.isDark,
		(val) => {
			if (val !== undefined) {
				handleStateChange('isDark', state, val)
				state.isDark = val
			} else {
				state.isDark = useStorage(`${prefix}-isDark`, state.isDark)
			}
		},
		{
			immediate: true,
		},
	)

	watch(
		() => config?.activeLanguage,
		(val) => {
			if (val !== undefined) {
				state.activeLanguage = val
			} else {
				// 如果不显示或者没有值，则不存储
				if (!config?.language?.show || !config.language?.dropdownMenu?.length) {
					return
				}
				// 默认找到第一个
				const firstItem = config.language?.dropdownMenu![0] as Global.DropdownMenu
				state.activeLanguage = useStorage(`${prefix}-activeLanguage`, firstItem.key)
			}
		},
		{
			immediate: true,
		},
	)

	watch(
		() => config?.language,
		(val) => {
			state.language = val
		},
		{
			deep: true,
		},
	)

	watch(
		() => config?.uiConfigProvider,
		(val) => {
			state.uiConfigProvider = val
		},
		{
			deep: true,
		},
	)

	watch(
		() => config?.themeAnimation,
		(val) => {
			state.themeAnimation = val
		},
		{
			deep: true,
		},
	)

	watch(
		() => config?.globalTitle,
		(val) => {
			state.globalTitle = val
		},
	)

	const stateProxy = new Proxy(state, {
		get(target, propKey, receiver) {
			return Reflect.get(target, propKey, receiver)
		},
		set(target, key: keyof Global.setting, newVal, receiver) {
			// 无论是否受控模式，返回值出去
			cb && cb(key, newVal)

			if (!config || config[key] === undefined) {
				handleStateChange(key, target, newVal)
				Reflect.set(target, key, newVal, receiver)
			}
			return true
		},
	})

	/**
	 *  处理状态变化，如果数据是内部控制，则在stateProxy触发set时调用；如果数据是外部控制，则在计算属性中触发
	 * @param key
	 * @param oldVal
	 * @param newVal
	 */
	function handleStateChange(key: keyof Global.setting, target: typeof state, newVal: any) {
		switch (key) {
			case 'isDark': {
				const isDarkEl = unref(isDarkElement)

				// 如果没有基点、或者设置不显示动画、或者是初始化，则不显示动画
				if (!isDarkEl || !target.themeAnimation?.show || !isDarkInit.value) {
					isDarkInit.value = true
					setIsDark(newVal)
					return
				}

				setIsDarkByAnimation(newVal, isDarkEl, target.themeAnimation.duration)
				break
			}
		}
	}

	return { globalState: stateProxy, isDarkElement }
})
