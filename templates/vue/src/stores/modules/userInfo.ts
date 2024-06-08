export const useUserStore = createGlobalState(() => {
	const prefix = import.meta.env.VITE_PROJECT_NAME
	// state
	const buttonSize = useStorage(`${prefix}-size`, 'default')

	return { buttonSize }
})
