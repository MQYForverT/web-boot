export * from './modules/setting'
export * from './modules/routes'

// 创建一个全局状态hook
export const useGlobalStore = () => {
	const prefix = import.meta.env.VITE_PROJECT_NAME
	// state
	const [token, setToken] = useLocalStorageState(`${prefix}-token`, {
		defaultValue: '',
	})

	return useCreation(() => ({ token, setToken }), [token, setToken])
}
