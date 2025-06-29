import { writable } from 'svelte/store'

const prefix = import.meta.env.VITE_PROJECT_NAME

type SizeType = 'small' | 'middle' | 'large'

// 定义设置状态store
const createSettingStore = () => {
	// 按钮尺寸
	const buttonSize = writable<SizeType>((localStorage.getItem(`${prefix}-size`) || 'middle') as SizeType)

	// 侧边栏收缩状态
	const isCollapse = writable<boolean>(localStorage.getItem(`${prefix}-isCollapse`) === 'true')

	// 动画模式
	const animateMode = writable<string>(localStorage.getItem(`${prefix}-animateMode`) || 'zoom-fade')

	return {
		buttonSize: {
			subscribe: buttonSize.subscribe,
			set: (size: SizeType) => {
				buttonSize.set(size)
				localStorage.setItem(`${prefix}-size`, size)
			},
		},
		isCollapse: {
			subscribe: isCollapse.subscribe,
			set: (collapse: boolean) => {
				isCollapse.set(collapse)
				localStorage.setItem(`${prefix}-isCollapse`, String(collapse))
			},
		},
		animateMode: {
			subscribe: animateMode.subscribe,
			set: (mode: string) => {
				animateMode.set(mode)
				localStorage.setItem(`${prefix}-animateMode`, mode)
			},
		},
	}
}

// 创建并导出设置store实例
export const settingStore = createSettingStore()
