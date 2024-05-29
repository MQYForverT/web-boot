export * from './modules/setting'

export const useGlobalStore = createGlobalState(() => {
	const prefix = useTitle()
	// state
	const token = useStorage(`${prefix}-token`, '')

	return { token }
})
