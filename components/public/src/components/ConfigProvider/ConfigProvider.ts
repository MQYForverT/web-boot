const enum sizeEnum {
	large = 'large',
	default = 'default',
	small = 'small',
}

const enum themeEnum {
	primary = 'primary',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	info = 'info',
}

export const initProps = {
	// 全局组件大小
	size: {
		type: String as PropType<sizeEnum>,
		default: sizeEnum.default,
	},
	// 全局组件主题
	theme: {
		type: String as PropType<themeEnum>,
		default: themeEnum.primary,
	},
}

// 得到私有类型
export type PrivateProps = ExtractPropTypes<typeof initProps>

// 定义注入键
// 排除掉string类型
export type propPrecessType = {
	[K in keyof PrivateProps]: PrivateProps[K] extends string ? string : Exclude<PrivateProps[K], string>
}
export const propsKey = Symbol() as InjectionKey<propPrecessType>

export type Emits = {
	(evt: 'click', ...args: [string]): void
}
export const emitsKey = Symbol() as InjectionKey<Emits>

export const processPropType = (props: PrivateProps) => {
	return new Proxy(props, {
		get(target, propKey, receiver) {
			const value = Reflect.get(target, propKey, receiver)
			// switch (propKey) {
			// 	case propsEnum.containerSize:
			// 		return JSON.parse(value)
			// }
			// title、submitLabel、layout这些是string或者字符串枚举，都不处理，直接返回
			return value
		},
	}) as propPrecessType
}
