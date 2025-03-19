interface TypewriterChar {
	text: string
	color?: string
	type?: string
}

interface ChangeText {
	textMap: Record<string, TypewriterChar[]>
	lastChar?: TypewriterChar
	queueSize?: number
}

export interface TypewriterOptions {
	speed?: number
	deleteSpeed?: number
	pauseDuration?: number
	onUpdate?: (obj: ChangeText) => void
	onComplete?: (obj: ChangeText) => void
	onStart?: () => void
}

export class Typewriter {
	private queue: TypewriterChar[] = []
	private isProcessing: boolean = false
	private textMap: Record<string, TypewriterChar[]> = {}
	private lastChar: TypewriterChar | undefined = undefined
	private options: Required<TypewriterOptions>
	private immediateMode: boolean = false

	constructor(options?: TypewriterOptions & { immediateMode?: boolean }) {
		this.options = {
			speed: 15,
			deleteSpeed: 25,
			pauseDuration: 1500,
			onUpdate: () => {},
			onComplete: () => {},
			onStart: () => {},
			...options,
		}
		this.immediateMode = options?.immediateMode ?? false
	}

	public async append(
		text: string | { text?: string; content?: string; color?: string; type?: string },
		type?: string,
	): Promise<void> {
		if (typeof text === 'string') {
			const chars = text.split('').map((char) => ({
				text: char,
				type,
			}))
			this.queue.push(...chars)
		} else {
			const content = text.text || text.content || ''
			const chars = content.split('').map((char) => ({
				text: char,
				color: text.color,
				type: text.type || type,
			}))
			this.queue.push(...chars)
		}
		this.options.onUpdate({ textMap: this.textMap, lastChar: undefined, queueSize: this.queue.length })
		if (!this.isProcessing) {
			if (this.immediateMode) {
				this.process()
			} else {
				await this.process()
			}
		}
	}

	public async delete(): Promise<void> {
		while (Object.values(this.textMap).some((arr) => arr.length > 0)) {
			for (const type in this.textMap) {
				if (this.textMap[type].length > 0) {
					this.textMap[type].pop()
				}
			}
			this.options.onUpdate({ textMap: this.textMap, lastChar: undefined, queueSize: this.queue.length })
			await this.sleep(this.options.deleteSpeed)
		}
	}

	public async pause(): Promise<void> {
		await this.sleep(this.options.pauseDuration)
	}

	public clearAll(): void {
		this.queue = []
		this.textMap = {}
		this.isProcessing = false
		this.lastChar = undefined
		this.options.onUpdate({ textMap: this.textMap, lastChar: undefined, queueSize: this.queue.length })
	}

	public clear(type?: string): void {
		if (type) {
			if (this.textMap[type]) {
				this.textMap[type] = []
				this.options.onUpdate({ textMap: this.textMap, lastChar: undefined, queueSize: this.queue.length })
			}
		} else {
			this.clearAll()
		}
	}

	private async sleep(time: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, time))
	}

	private async process(): Promise<void> {
		if (this.queue.length === 0) {
			this.isProcessing = false
			this.options.onComplete({ textMap: this.textMap, lastChar: this.lastChar, queueSize: this.queue.length })
			return
		}

		this.isProcessing = true

		while (this.queue.length > 0 && this.isProcessing) {
			await this.sleep(this.options.speed)
			const char = this.queue.shift()
			if (char) {
				const type = char.type || 'default'
				if (!this.textMap[type]) {
					this.textMap[type] = []
				}
				this.textMap[type].push(char)
				this.lastChar = char
				this.options.onUpdate({ textMap: this.textMap, lastChar: this.lastChar, queueSize: this.queue.length })
			}
		}

		if (this.isProcessing) {
			this.process()
		}
	}

	public async flush(): Promise<void> {
		if (this.queue.length === 0) {
			this.isProcessing = false
			this.options.onComplete({ textMap: this.textMap, lastChar: this.lastChar, queueSize: this.queue.length })
			return
		}

		while (this.queue.length > 0) {
			await this.sleep(this.options.speed)
			const char = this.queue.shift()
			if (char) {
				const type = char.type || 'default'
				if (!this.textMap[type]) {
					this.textMap[type] = []
				}
				this.textMap[type].push(char)
				this.lastChar = char
				this.options.onUpdate({ textMap: this.textMap, lastChar: this.lastChar, queueSize: this.queue.length })
			}
		}

		this.options.onComplete({ textMap: this.textMap, lastChar: this.lastChar, queueSize: this.queue.length })
		this.isProcessing = false
	}
}
