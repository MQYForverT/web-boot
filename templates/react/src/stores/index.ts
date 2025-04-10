import { observable, action, makeObservable } from 'mobx'

const prefix = import.meta.env.VITE_PROJECT_NAME

// 定义全局状态类
class GlobalStore {
	@observable token: string = localStorage.getItem(`${prefix}-token`) || ''

	constructor() {
		makeObservable(this)
	}

	@action
	setToken = (value?: string) => {
		this.token = value || ''
		localStorage.setItem(`${prefix}-token`, this.token)
	}
}

// 创建并导出单例
const globalStore = new GlobalStore()
export default globalStore
