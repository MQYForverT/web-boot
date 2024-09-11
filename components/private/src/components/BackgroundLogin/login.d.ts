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
		interface account {
			username: string
		}
	}
}
// 使得这个文件变成一个模块
export {}
