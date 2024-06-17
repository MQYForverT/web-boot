import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'virtual:uno.css'
import '@mqy/component-private/dist/base.css'

// 全局注册所有
import { registerAll } from '@mqy/component-private'
registerAll()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
