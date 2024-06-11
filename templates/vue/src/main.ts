import { createApp } from 'vue'
import App from './App.vue'
// vue Router
import router from '@/routers'

import 'virtual:uno.css'
// 可修改主题的 element 样式 (内置暗黑模式)
import '@/styles/index.scss'
// custom element css
import '@/styles/element.scss'
// css common style sheet
import '@/styles/common.scss'

// 全局注册所有
import { registerAll } from '@mqy/component-private'
registerAll()

const app = createApp(App)
app.use(router).mount('#app')
