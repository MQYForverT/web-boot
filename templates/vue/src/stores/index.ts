export * from './modules/setting'
export * from './modules/routes'

export const useGlobalStore = createGlobalState(() => {
	const prefix = import.meta.env.VITE_PROJECT_NAME
	// state
	const token = useStorage(`${prefix}-token`, '')

	return { token }
})
