import { createApp } from 'vue'

import App from './App.vue'

import { registerAll } from '@/components'
// import { registerAll } from '../dist/index'
registerAll()

createApp(App).mount('#app')
