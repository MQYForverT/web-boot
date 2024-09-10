declare global {
	namespace Login {
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
