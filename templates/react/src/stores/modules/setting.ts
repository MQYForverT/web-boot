import type { SizeType } from 'antd/es/config-provider/SizeContext'
export const useSettingStore = () => {
	const prefix = import.meta.env.VITE_PROJECT_NAME
	// state
	const [buttonSize, setButtonSize] = useLocalStorageState<SizeType>(`${prefix}-size`, {
		defaultValue: 'middle',
	})

	const [isCollapse, setIsCollapse] = useLocalStorageState<boolean>(`${prefix}-isCollapse`, {
		defaultValue: false,
	})

	const [animateMode, setAnimateMode] = useLocalStorageState<string>(`${prefix}-animateMode`, {
		defaultValue: 'zoom-fade',
	})

	return useCreation(
		() => ({
			buttonSize,
			setButtonSize,
			isCollapse,
			setIsCollapse,
			animateMode,
			setAnimateMode,
		}),
		[buttonSize, setButtonSize, isCollapse, setIsCollapse, animateMode, setAnimateMode],
	)
}
