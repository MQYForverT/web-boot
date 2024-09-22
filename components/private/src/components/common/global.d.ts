import type { RemovableRef } from '@vueuse/core'
import type { ButtonConfigContext } from 'element-plus'
import { themeModeEnum } from './globalStore'

declare global {
	namespace Global {
		interface setting {
			// element-ui的主题
			theme?: themeModeEnum | RemovableRef
			themeConfig?: ThemeConfig
			activeLanguage?: string | RemovableRef
			language?: Language
			// element-ui全局配置，暂时支持size和button
			uiConfigProvider?: UiConfigProvider
			// 主标题
			globalTitle?: string
		}
		interface DropdownMenu {
			key: string
			value: string
		}
		interface Language extends Layout.FullScreen {
			trigger?: 'click' | 'hover'
			dropdownMenu?: DropdownMenu[]
		}
		interface UiConfigProvider {
			size?: 'large' | 'default' | 'small'
			button?: ButtonConfigContext
		}
		interface ThemeConfig extends Layout.FullScreen {
			showAnimation?: boolean // 是否展示动画
			AnimationDuration?: number // 动画时长
		}
	}
	interface Document {
		startViewTransition(callback: () => void): ViewTransition
	}
}
// 使得这个文件变成一个模块
export {}
