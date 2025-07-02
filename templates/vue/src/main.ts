import { createApp } from 'vue'
import App from './App.vue'
// vue Router
import router from '@/routers'

import 'virtual:uno.css'
// 可修改主题的 element 样式 (内置暗黑模式)
import '@/styles/index.scss'

// 全局注册所有
import { registerAll, setGlobalConfig } from '@tsoul/component-private'
import type { Global } from '@tsoul/component-private/dist/common/global'

registerAll()

const themeConfig = ref<Global.setting>({
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
})
setGlobalConfig(themeConfig.value, (key, val) => {
	console.log(key, val)
	themeConfig.value[key] = val
})

const app = createApp(App)
app.use(router).mount('#app')
