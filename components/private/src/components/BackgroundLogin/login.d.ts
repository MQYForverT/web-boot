import type { FormRules } from 'element-plus'

declare global {
	namespace Login {
		interface containerSize {
			height: string
			width: string
			style: object
		}
		interface containerBackground {
			background: string
			opacity: number
			style: object
		}
		interface IAccountItem {
			show: boolean
			field: string
			placeholder: string
			default?: string
			validate?: FormRules
		}
		interface account {
			username: IAccountItem & {
				btnLabel: string
			}
			password: IAccountItem
			code?: IAccountItem
		}
	}
}
// 使得这个文件变成一个模块
export { Login }
