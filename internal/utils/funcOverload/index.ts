/**
 * 创建一个重载函数，此工具函数帮助开发者优雅的实现函数重载，解耦多重参数判断逻辑
 * @example
 * ```ts
 * const add = createOverload()
 * add.addImpl('number', 'number', (a: number, b: number) => a + b)
 * add.addImpl('string', 'string', (c: string, d: string) => c + d)
 * add.addImpl('object', 'object', (e: object, f: object) => ({ ...e, ...f }))
 *
 * // 类型断言还是要定义的，毕竟createOverload只是帮助你优雅的书写，而类型还是要自己提供
 * export const typedAdd = add as ((a: number, b: number) => number) &
 * 	((c: string, d: string) => string) &
 * 	((e: object, f: object) => object)
 *
 * // 测试调用
 * const result1 = typedAdd(1, 2)
 * const result2 = typedAdd('hello', 'world')
 * const result3 = typedAdd({ a: 1 }, { b: 2 })
 * ```
 * @returns 重载函数
 */
export const createOverload = () => {
	const fnMap = new Map<string, Function>()

	/**
	 * 重载函数
	 * @param args - 传入的参数
	 * @returns 返回值
	 */
	const overload = function (this: unknown, ...args: any[]): any {
		const key = args.map((it) => typeof it).join(',')
		const fn = fnMap.get(key)
		if (!fn) {
			throw new TypeError('没有找到对应的实现')
		}
		return fn.apply(this, args)
	}

	/**
	 * 添加重载实现
	 * @param args - 重载参数
	 * @returns 重载函数
	 */
	overload.addImpl = <T extends any[], R>(...args: [...types: string[], fn: (...args: T) => R]): typeof overload => {
		const fn = args.pop() as (...args: T) => R
		const key = args.join(',')
		fnMap.set(key, fn)
		return overload
	}

	return overload
}
