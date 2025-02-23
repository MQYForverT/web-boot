import type { FormRules } from 'element-plus'
export namespace Login {
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
