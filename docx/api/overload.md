# 函数重载

## 📖 概述

`@mqy/utils/funcOverload` 提供了一个优雅的函数重载实现工具，帮助开发者更好地处理多参数类型的函数定义。它通过类型映射和动态分发，使得函数重载的实现更加清晰和易于维护。

## 🎯 特性

- **类型安全**: 完整的 TypeScript 类型支持
- **简洁语法**: 优雅的重载实现方式
- **动态分发**: 基于参数类型的动态调用
- **类型检查**: 运行时类型验证
- **易于扩展**: 支持添加新的重载实现
- **IDE 支持**: 良好的代码提示

## 🚀 快速开始

### 安装

```bash
npm install @mqy/utils -D
```

### 基础使用

```typescript
import { createOverload } from '@mqy/utils/funcOverload'

// 创建重载函数
const add = createOverload()

// 添加重载实现
add.addImpl('number', 'number', (a: number, b: number) => a + b)
add.addImpl('string', 'string', (a: string, b: string) => a + b)

// 类型定义
type AddFunction = {
	(a: number, b: number): number
	(a: string, b: string): string
}

// 使用类型断言
const typedAdd = add as AddFunction

// 使用函数
console.log(typedAdd(1, 2)) // 3
console.log(typedAdd('a', 'b')) // 'ab'
```

## 📝 功能示例

### 基本重载

```typescript
const calc = createOverload()

calc.addImpl('number', 'number', (a: number, b: number) => a + b)
calc.addImpl('string', 'string', (a: string, b: string) => a + b)
calc.addImpl('object', 'object', (a: object, b: object) => ({ ...a, ...b }))

type CalcFunction = {
	(a: number, b: number): number
	(a: string, b: string): string
	(a: object, b: object): object
}

const typedCalc = calc as CalcFunction

// 使用示例
console.log(typedCalc(1, 2)) // 3
console.log(typedCalc('hello', 'world')) // 'helloworld'
console.log(typedCalc({ a: 1 }, { b: 2 })) // { a: 1, b: 2 }
```

### 复杂类型重载

```typescript
interface User {
	name: string
	age: number
}

const process = createOverload()

process.addImpl('string', (name: string) => ({ name, type: 'string' }))
process.addImpl('number', (age: number) => ({ age, type: 'number' }))
process.addImpl('object', (user: User) => ({ ...user, type: 'user' }))

type ProcessFunction = {
	(name: string): { name: string; type: string }
	(age: number): { age: number; type: string }
	(user: User): User & { type: string }
}

const typedProcess = process as ProcessFunction
```

## 🔧 高级用法

### 上下文绑定

```typescript
class Calculator {
	private base: number = 10

	constructor() {
		this.calculate = createOverload()
			.addImpl('number', (n: number) => n + this.base)
			.addImpl('string', (s: string) => Number(s) + this.base)
			.bind(this)
	}

	calculate: {
		(n: number): number
		(s: string): number
	}
}
```

### 异步函数重载

```typescript
const fetchData = createOverload()

fetchData.addImpl('string', async (id: string) => {
	const response = await fetch(`/api/data/${id}`)
	return response.json()
})

fetchData.addImpl('object', async (query: object) => {
	const response = await fetch('/api/data', {
		method: 'POST',
		body: JSON.stringify(query),
	})
	return response.json()
})

type FetchFunction = {
	(id: string): Promise<any>
	(query: object): Promise<any>
}

const typedFetch = fetchData as FetchFunction
```

## 🚨 注意事项

1. 类型定义：

```typescript
// 始终定义完整的类型签名
type MyFunction = {
	(a: number): number
	(a: string): string
}
```

2. 参数匹配：

```typescript
// 参数类型必须精确匹配
const func = createOverload()
func.addImpl('string', (s: string) => s.length)
func.addImpl('number', (n: number) => n.toString())
```

3. 错误处理：

```typescript
try {
	result = func('wrong type')
} catch (error) {
	console.error('没有找到匹配的实现')
}
```

## 📚 最佳实践

1. 类型组织：

```typescript
// 将所有重载签名集中定义
interface DataProcessor {
	(data: string): string[]
	(data: number): number[]
	(data: boolean): boolean[]
}

const processor = createOverload()
	.addImpl('string', (d: string) => [d])
	.addImpl('number', (d: number) => [d])
	.addImpl('boolean', (d: boolean) => [d]) as DataProcessor
```

2. 模块化：

```typescript
// 将重载实现分离到不同文件
import { stringHandler } from './handlers/string'
import { numberHandler } from './handlers/number'

const handler = createOverload().addImpl('string', stringHandler).addImpl('number', numberHandler)
```

3. 测试：

```typescript
describe('function overload', () => {
	it('should handle different types correctly', () => {
		expect(typedAdd(1, 2)).toBe(3)
		expect(typedAdd('a', 'b')).toBe('ab')
	})
})
```

## 📚 相关资源

- [TypeScript 函数重载](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
- [JavaScript 类型检查](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
