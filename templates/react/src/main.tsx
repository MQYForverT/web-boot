import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@ant-design/v5-patch-for-react-19'

import 'virtual:uno.css'
import '@/styles/index.scss'

// 全局注册所有
import { registerAll, setGlobalConfig } from '@tsoul/component-private'
import type { Global } from '@tsoul/component-private/dist/common/global'

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
	console.log(key, val)
	themeConfig[key] = val
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
)
