import { createApp } from 'vue'

import App from './App.vue'

import { registerAll } from '@/components'
registerAll()

createApp(App).mount('#app')
