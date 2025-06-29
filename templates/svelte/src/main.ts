import { mount } from 'svelte'
import App from './App.svelte'

import 'virtual:uno.css'
import '@/styles/index.scss'

// 全局注册所有
import { registerAll, setGlobalConfig } from '@mqy/component-private'
import type { Global } from '@mqy/component-private/dist/common/global'

registerAll()

// 设置全局配置
const themeConfig: Global.setting = {
	language: {
		show: true,
		trigger: 'click',
		dropdownMenu: [
			{
				key: 'zh-CN',
				value: '简体中文',
			},
			{
				key: 'en',
				value: 'English',
			},
		],
	},
}

setGlobalConfig(themeConfig, (key, val) => {
	themeConfig[key] = val
})

const app = mount(App, {
	target: document.getElementById('app')!,
})

export default app
