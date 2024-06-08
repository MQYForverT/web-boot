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

import { register } from '@mqy/components-internal/dist/mqy-component-internal'
register()

const app = createApp(App)
app.use(router).mount('#app')
