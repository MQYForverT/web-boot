import type { ExtractPropTypes, ExtractPublicPropTypes, InjectionKey } from 'vue'

export enum propsEnum {
	layout = 'layout',
}

// 为了兼容wc，设置可以传入字符串，然后去做转换
export const props = {}
// --------props----------
// 得到私有类型
export type PrivateProps = ExtractPropTypes<typeof props>

// --------emits----------分步判断change类型
export type Emits = {
	<T extends keyof PrivateProps>(evt: 'changeProp', ...args: [T, PrivateProps[T]]): void
	(evt: 'selectMenu' | 'commandUser' | 'tagRefresh', ...args: [string]): void
}

export const emitsKey = Symbol() as InjectionKey<Emits>

export type PublicProps = ExtractPublicPropTypes<typeof props>

// 排除掉string类型
export type propPrecessType = {
	[K in keyof PrivateProps]: PrivateProps[K] extends string ? string : Exclude<PrivateProps[K], string>
}
// 定义注入键
export const propsKey = Symbol() as InjectionKey<propPrecessType>

// 转换类型映射
export const processPropType = (props: PrivateProps) => {
	return new Proxy(props, {
		get(target, propKey, receiver) {
			const value = Reflect.get(target, propKey, receiver)
			switch (propKey) {
				case propsEnum.layout:
					return JSON.parse(value)
			}
			return value
		},
	}) as propPrecessType
}
