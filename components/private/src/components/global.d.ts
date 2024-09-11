import type { RemovableRef } from '@vueuse/core'
import type { ButtonConfigContext } from 'element-plus'

declare global {
	namespace Global {
		interface setting {
			// element-ui的样式是否暗黑样式
			isDark?: boolean | RemovableRef
			themeAnimation?: ThemeAnimation
			activeLanguage?: string | RemovableRef
			language?: Language
			// element-ui全局配置，暂时支持size和button
			uiConfigProvider?: UiConfigProvider
		}
		interface DropdownMenu {
			key: string
			value: string
		}
		interface Language {
			show?: boolean
			trigger?: 'click' | 'hover'
			to?: string
			dropdownMenu?: DropdownMenu[]
		}
		interface UiConfigProvider {
			size?: 'large' | 'default' | 'small'
			button?: ButtonConfigContext
		}
		interface ThemeAnimation {
			show?: boolean // 是否展示动画
			duration?: number // 动画时长
		}
	}
	interface Document {
		startViewTransition(callback: () => void): ViewTransition
	}
}
// 使得这个文件变成一个模块
export {}
