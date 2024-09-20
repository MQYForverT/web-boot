import type { ExtractPropTypes, ExtractPublicPropTypes, InjectionKey } from 'vue'

export enum layoutEnum {
	left = 'left',
	center = 'center',
	right = 'right',
}

export enum propsEnum {
	// 容器大小
	containerSize = 'containerSize',
	// 容器背景
	containerBackground = 'containerBackground',
	// 账号配置
	account = 'account',
	// 文案配置
	title = 'title',
	submitLabel = 'submitLabel',
	// 布局
	layout = 'layout',
}

const defaultValue = {
	[propsEnum.containerSize]: {
		height: '100vh',
		width: '100vw',
		style: {},
	},
	[propsEnum.containerBackground]: {
		background: '/src/assets/background.svg',
		opacity: 1,
		style: {},
	},
	[propsEnum.account]: {
		username: {
			show: true,
			field: 'username',
			placeholder: '账号',
			validate: { required: true, trigger: 'blur' },
		},
		password: { show: true, field: 'password', placeholder: '密码', validate: { required: true } },
	},
}

// 为了兼容wc，设置可以传入字符串，然后去做转换
export const initProps = {
	[propsEnum.containerSize]: {
		type: [Object, String] as PropType<Login.containerSize | string>,
		default: JSON.stringify(defaultValue[propsEnum.containerSize]),
	},
	[propsEnum.containerBackground]: {
		type: [Object, String] as PropType<Login.containerBackground | string>,
		default: JSON.stringify(defaultValue[propsEnum.containerBackground]),
	},
	[propsEnum.account]: {
		type: [Object, String] as PropType<Login.account | string>,
		default: JSON.stringify(defaultValue[propsEnum.account]),
	},
	[propsEnum.title]: {
		type: String,
		default: '登录',
	},
	[propsEnum.submitLabel]: {
		type: String,
		default: '登录',
	},
	[propsEnum.layout]: {
		type: String as PropType<layoutEnum>,
		default: layoutEnum.center,
	},
}
// --------props----------
// 得到私有类型
export type PrivateProps = ExtractPropTypes<typeof initProps>

// --------emits----------分步判断change类型
export type Emits = {
	(evt: 'getCode' | 'submit', from: { [x: string]: string }): void
}

export const emitsKey = Symbol() as InjectionKey<Emits>

export type PublicProps = ExtractPublicPropTypes<typeof initProps>

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
				case propsEnum.containerSize:
				case propsEnum.containerBackground:
				case propsEnum.account:
					return JSON.parse(value)
			}
			// title、submitLabel、layout这些是string或者字符串枚举，都不处理，直接返回
			return value
		},
	}) as propPrecessType
}
