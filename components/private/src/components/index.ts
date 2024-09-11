import { register as BackgroundLayoutRegister } from './BackgroundLayout'
import { register as BackgroundLoginRegister } from './BackgroundLogin'

import globalStore from './globalStore'

// 所有组件共用，element的暗黑模式一定要在组件之前引入
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义样式
import './styles/index.scss'

export function registerAll() {
	BackgroundLayoutRegister()
	BackgroundLoginRegister()
}

/**
 * 设置全局配置，如果调用，则必须传入config对象
 * @param config
 * @param cb
 */
export function setGlobalConfig(config: Global.setting, cb?: (key: keyof Global.setting, val: any) => void) {
	globalStore(config, cb)
}

export {}
