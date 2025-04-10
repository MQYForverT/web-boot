import { observable, action, makeObservable } from 'mobx'
import type { SizeType } from 'antd/lib/config-provider/SizeContext'

const prefix = import.meta.env.VITE_PROJECT_NAME

// 定义设置状态类
class SettingStore {
	@observable buttonSize: SizeType = (localStorage.getItem(`${prefix}-size`) || 'middle') as SizeType
	@observable isCollapse: boolean = localStorage.getItem(`${prefix}-isCollapse`) === 'true'
	@observable animateMode: string = localStorage.getItem(`${prefix}-animateMode`) || 'zoom-fade'

	constructor() {
		makeObservable(this)
	}

	@action
	setButtonSize = (size: SizeType) => {
		this.buttonSize = size
		localStorage.setItem(`${prefix}-size`, size as string)
	}

	@action
	setIsCollapse = (isCollapse: boolean) => {
		this.isCollapse = isCollapse
		localStorage.setItem(`${prefix}-isCollapse`, String(isCollapse))
	}

	@action
	setAnimateMode = (mode: string) => {
		this.animateMode = mode
		localStorage.setItem(`${prefix}-animateMode`, mode)
	}
}

// 创建并导出单例
const settingStore = new SettingStore()
export default settingStore
