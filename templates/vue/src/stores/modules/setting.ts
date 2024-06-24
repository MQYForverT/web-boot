// small/default(medium)/large
type buttonSizeType = 'default' | 'small' | 'large'

export const useSettingStore = createGlobalState(() => {
	const prefix = import.meta.env.VITE_PROJECT_NAME
	// state
	const buttonSize = useStorage<buttonSizeType>(`${prefix}-size`, 'default')

	const isCollapse = useStorage<boolean>(`${prefix}-isCollapse`, false)

	const animateMode = useStorage<string>(`${prefix}-animateMode`, 'zoom-fade')

	return { buttonSize, isCollapse, animateMode }
})
