interface TypewriterChar {
	text: string
	color?: string
	type?: string
	itemKey?: string
	promiseId?: string
}

interface ChangeText {
	textMap: Record<string, TypewriterChar[]>
	lastChar?: TypewriterChar
	queueSize?: number
	itemKey?: string
	type?: string
}

export interface TypewriterOptions {
	speed?: number
	deleteSpeed?: number
	pauseDuration?: number
	onUpdate?: (obj: ChangeText) => void
	onComplete?: (obj: ChangeText, type: 'process' | 'flush') => void
	onStart?: () => void
	onTypeComplete?: (obj: ChangeText) => void
}

// append方法的选项参数接口
export interface AppendOptions {
	itemKey?: string
	waitForComplete?: boolean
}

export class Typewriter {
	private queue: TypewriterChar[] = []
	private isProcessing: boolean = false
	private textMap: Record<string, TypewriterChar[]> = {}
	private lastChar: TypewriterChar | undefined = undefined
	private options: Required<TypewriterOptions>
	private immediateMode: boolean = false
	private promiseResolvers: Map<string, Function> = new Map()

	constructor(options?: TypewriterOptions & { immediateMode?: boolean }) {
		this.options = {
			speed: 10,
			deleteSpeed: 25,
			pauseDuration: 1500,
			onUpdate: () => {},
			onComplete: () => {},
			onStart: () => {},
			onTypeComplete: () => {},
			...options,
		}
		this.immediateMode = options?.immediateMode ?? false
	}

	/**
	 * 向队列中添加文本
	 * @param text 要添加的文本内容或包含文本和颜色的对象
	 * @param type 文本类型（可选）
	 * @param options 附加选项（可选），包含itemKey和waitForComplete
	 * @returns 如果waitForComplete为true，返回Promise，否则返回void
	 */
	public append(
		text: string | { text: string; color?: string },
		type?: string,
		options: AppendOptions = {},
	): Promise<void> | void {
		// 提取文本内容和颜色
		let content: string
		let color: string | undefined

		if (typeof text === 'string') {
			content = text
		} else {
			content = text.text
			color = text.color
		}

		const { itemKey, waitForComplete = false } = options

		// 创建字符数组
		const createChars = (promiseId?: string): TypewriterChar[] => {
			return content.split('').map((char) => ({
				text: char,
				color,
				type,
				itemKey,
				promiseId,
			}))
		}

		// 处理Promise情况
		if (waitForComplete) {
			const promiseId = `promise_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
			const promise = new Promise<void>((resolve) => {
				this.promiseResolvers.set(promiseId, resolve)
			})

			this.queue.push(...createChars(promiseId))
			this.startProcessingIfNeeded(itemKey)

			return promise
		}

		// 常规处理，不需要Promise
		this.queue.push(...createChars())
		this.startProcessingIfNeeded(itemKey)
	}

	private startProcessingIfNeeded(itemKey?: string): void {
		this.options.onUpdate({ textMap: this.textMap, lastChar: undefined, queueSize: this.queue.length, itemKey })

		if (!this.isProcessing) {
			if (this.immediateMode) {
				this.process()
			} else {
				this.process()
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
		// 清除所有未完成的Promise
		this.resolveAllPromises()
		this.options.onUpdate({ textMap: this.textMap, lastChar: undefined, queueSize: 0 })
	}

	public clear(type?: string): void {
		if (type) {
			if (this.textMap[type]) {
				this.textMap[type] = []
				this.options.onUpdate({ textMap: this.textMap, lastChar: undefined, queueSize: this.queue.length })
				// 触发type完成事件
				this.options.onTypeComplete({ textMap: this.textMap, lastChar: undefined, queueSize: this.queue.length, type })
			}
		} else {
			this.clearAll()
		}
	}

	private async sleep(time: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, time))
	}

	private resolveAllPromises(): void {
		this.promiseResolvers.forEach((resolve) => resolve())
		this.promiseResolvers.clear()
	}

	private checkAndResolvePromise(char: TypewriterChar): void {
		if (!char.promiseId) return

		// 检查队列中是否还有相同promiseId的字符
		const hasMoreOfSamePromiseId = this.queue.some((qChar) => qChar.promiseId === char.promiseId)
		if (!hasMoreOfSamePromiseId && this.promiseResolvers.has(char.promiseId)) {
			const resolve = this.promiseResolvers.get(char.promiseId)
			if (resolve) {
				resolve()
				this.promiseResolvers.delete(char.promiseId)
			}
		}
	}

	private checkAndTriggerTypeComplete(char: TypewriterChar): void {
		const type = char.type || 'default'
		// 检查队列中是否还有相同type的字符
		const hasMoreOfSameType = this.queue.some((qChar) => (qChar.type || 'default') === type)
		if (!hasMoreOfSameType) {
			// 如果队列中没有更多相同type的字符，触发type完成事件
			this.options.onTypeComplete({
				textMap: this.textMap,
				lastChar: this.lastChar,
				queueSize: this.queue.length,
				itemKey: char.itemKey,
				type,
			})
		}
	}

	private processChar(char: TypewriterChar): void {
		const type = char.type || 'default'
		if (!this.textMap[type]) {
			this.textMap[type] = []
		}
		this.textMap[type].push(char)
		this.lastChar = char

		// 处理Promise完成逻辑
		this.checkAndResolvePromise(char)

		// 更新状态
		this.options.onUpdate({
			textMap: this.textMap,
			lastChar: this.lastChar,
			queueSize: this.queue.length,
			itemKey: char.itemKey,
		})

		// 检查类型完成
		this.checkAndTriggerTypeComplete(char)
	}

	private async process(): Promise<void> {
		if (this.queue.length === 0) {
			this.isProcessing = false
			this.resolveAllPromises()
			this.options.onComplete(
				{
					textMap: this.textMap,
					lastChar: this.lastChar,
					queueSize: 0,
					itemKey: this.lastChar?.itemKey,
				},
				'process',
			)
			return
		}

		this.isProcessing = true

		while (this.queue.length > 0 && this.isProcessing) {
			await this.sleep(this.options.speed)
			const char = this.queue.shift()
			if (char) {
				this.processChar(char)
			}
		}

		if (this.isProcessing) {
			this.process()
		}
	}

	public async flush(): Promise<void> {
		if (this.queue.length === 0) {
			this.isProcessing = false
			this.resolveAllPromises()
			this.options.onComplete(
				{
					textMap: this.textMap,
					lastChar: this.lastChar,
					queueSize: 0,
					itemKey: this.lastChar?.itemKey,
				},
				'flush',
			)
			return
		}

		while (this.queue.length > 0) {
			await this.sleep(this.options.speed)
			const char = this.queue.shift()
			if (char) {
				this.processChar(char)
			}
		}

		this.resolveAllPromises()
		this.options.onComplete(
			{
				textMap: this.textMap,
				lastChar: this.lastChar,
				queueSize: 0,
				itemKey: this.lastChar?.itemKey,
			},
			'flush',
		)
		this.isProcessing = false
	}
}
