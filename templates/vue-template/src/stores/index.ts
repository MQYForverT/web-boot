export * from './modules/setting'
export * from './modules/routes'
export * from './modules/userInfo'

export const useGlobalStore = createGlobalState(() => {
	const prefix = useTitle()
	// state
	const token = useStorage(`${prefix}-token`, '')

	return { token }
})
