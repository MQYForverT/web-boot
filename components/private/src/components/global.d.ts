import type { RemovableRef } from '@vueuse/core'

declare global {
	namespace Global {
		interface setting {
			// element-ui的样式是否暗黑样式
			isDark?: boolean | RemovableRef
			activeLanguage?: string | RemovableRef
			language?: Language
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
	}
}
// 使得这个文件变成一个模块
export {}
