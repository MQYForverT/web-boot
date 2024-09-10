// 全部组件共有的状态，如果调用这个函数
export default createGlobalState((config?: Global.setting, cb?: (key: keyof Global.setting, val: any) => void) => {
	const prefix = '@mqy/component-private-background'

	const state = reactive<Global.setting>({
		isDark: config?.isDark,
		activeLanguage: config?.activeLanguage,
		language: config?.language,
		uiConfigProvider: config?.uiConfigProvider,
	})

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

	const stateProxy = new Proxy(state, {
		get(target, propKey, receiver) {
			return Reflect.get(target, propKey, receiver)
		},
		set(target, key: keyof Global.setting, newVal, receiver) {
			if (!config || config[key] === undefined) {
				handleStateChange(key, target, newVal)
				Reflect.set(target, key, newVal, receiver)
			} else {
				// 受控模式，返回值出去
				cb && cb(key, newVal)
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
				if (newVal) {
					document.documentElement.classList.add('dark')
				} else {
					document.documentElement.classList.remove('dark')
				}
				break
			}
		}
	}

	return { globalState: stateProxy }
})
