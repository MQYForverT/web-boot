import { createApp } from 'vue'
import App from './App.vue'
import type { Global } from '@/components/common/global'
import { registerAll, setGlobalConfig } from '@/components'
// import { registerAll } from '../dist/index'
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

createApp(App).mount('#app')
