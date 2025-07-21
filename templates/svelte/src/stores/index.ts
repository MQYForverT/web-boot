import { writable, derived } from 'svelte/store'

const prefix = import.meta.env.VITE_PROJECT_NAME

// 定义全局状态store
const createGlobalStore = () => {
	const { subscribe, set } = writable<string>(localStorage.getItem(`${prefix}-token`) || '')

	return {
		subscribe,
		setToken: (value?: string) => {
			const token = value || ''
			set(token)
			localStorage.setItem(`${prefix}-token`, token)
		},
		reset: () => set(''),
	}
}

// 创建并导出全局store实例
export const globalStore = createGlobalStore()

// 导出一个派生store用于获取token值
export const token = derived(globalStore, ($globalStore) => $globalStore)
