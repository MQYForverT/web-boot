import { setIsDarkByAnimation, setIsDark } from './utils/setIsDarkByAnimation'

export enum themeModeEnum {
	light = 'light',
	dark = 'dark',
	system = 'system',
}

// 全部组件共有的状态，如果调用这个函数
export default createGlobalState((config?: Global.setting, cb?: (key: keyof Global.setting, val: any) => void) => {
	const prefix = '@mqy/component-private-background'

	const state = reactive<Global.setting>({
		theme: themeModeEnum.light,
		themeAnimation: config?.themeAnimation || { show: true, duration: 500 },
		activeLanguage: '',
		language: config?.language,
		uiConfigProvider: config?.uiConfigProvider,
		globalTitle: config?.globalTitle || 'WebBoot',
	})

	// 因为config会改变，所以需要记录最初输入进来的数据，在下面判断最初数据时有用
	const inputConfig = config instanceof Object ? JSON.parse(JSON.stringify(config)) : undefined

	const isDarkInit = ref(false)
	const isDarkHandle = ref<(val: boolean) => void>(setIsDark)
	const isDarkElement = shallowRef<HTMLElement | null>(null)
	const isSystemTrigger = ref(false)

	// 初始化任务
	handleActiveLanguage(config?.activeLanguage)
	handleTheme(config?.theme)

	// 初始化监听
	if (config) {
		for (const key in config) {
			const configkey = key as keyof Global.setting
			const configVal = config[configkey]
			// 如果不为空，则监听
			if (configVal !== undefined) {
				const isObject = configVal instanceof Object
				watch(
					() => config[configkey],
					(val) => {
						switch (configkey) {
							case 'theme':
								handleTheme(val)
								break
							case 'activeLanguage':
								handleActiveLanguage(val)
								break
							default:
								state[configkey] = val
								break
						}
					},
					{
						deep: isObject,
					},
				)
			}
		}
	}

	// 监听系统主题变化
	watch(
		() => usePreferredDark().value,
		(val) => {
			isSystemTrigger.value = true
			const mode = val ? themeModeEnum.dark : themeModeEnum.light
			stateProxy.theme = mode
		},
	)

	// 代理操作对象
	const stateProxy = new Proxy(state, {
		get(target, propKey, receiver) {
			return Reflect.get(target, propKey, receiver)
		},
		set(target, key: keyof Global.setting, newVal, receiver) {
			// 无论是否受控模式，返回值出去
			cb && cb(key, newVal)

			// 只有受控属性才内部管控
			if (!inputConfig || inputConfig[key] === undefined) {
				handleStateChange(key, target, newVal)
				Reflect.set(target, key, newVal, receiver)
			}

			return true
		},
	})

	// 初始化激活的语言
	function handleActiveLanguage(val: string) {
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
	}

	// 初始化主题
	function handleTheme(mode: themeModeEnum) {
		if (mode !== undefined) {
			handleStateChange('theme', state, mode)
			state.theme = mode
		} else {
			state.theme = useStorage(`${prefix}-theme`, state.theme)
		}
	}

	/**
	 *  处理状态变化，如果数据是内部控制，则在stateProxy触发set时调用；如果数据是外部控制，则在watch中触发
	 * @param key
	 * @param oldVal
	 * @param newVal
	 */
	function handleStateChange(key: keyof Global.setting, target: typeof state, newVal: any) {
		switch (key) {
			case 'theme': {
				const isDarkEl = unref(isDarkElement)
				const isDarkFlag = isDark(newVal)
				// 如果没有基点、或者设置不显示动画、或者是初始化，则不显示动画
				if (!isDarkEl || !target.themeAnimation?.show || !isDarkInit.value) {
					isDarkInit.value = true
					if (isDarkHandle.value) {
						isDarkHandle.value(isDarkFlag)
					}
					return
				}
				// 只有前后不一致，或者监听到系统主题变化时才执行动画
				if (isDark() !== isDarkFlag || isSystemTrigger.value) {
					setIsDarkByAnimation(isDarkFlag, isDarkEl, target.themeAnimation.duration, isDarkHandle.value)
					isSystemTrigger.value = false
				}
				break
			}
		}
	}

	// 默认获取老数据
	const isDark = (mode: themeModeEnum = state.theme): boolean => {
		let is = false
		switch (mode) {
			case themeModeEnum.light:
				is = false
				break
			case themeModeEnum.dark:
				is = true
				break
			case themeModeEnum.system:
				is = usePreferredDark().value
				break
		}
		return is
	}

	function setThemeElement(el: HTMLElement) {
		isDarkElement.value = el
	}

	function setIsDarkHandle(fn: (val: boolean) => void) {
		isDarkHandle.value = fn
	}

	return { globalState: stateProxy, isDark, setThemeElement, setIsDarkHandle }
})
