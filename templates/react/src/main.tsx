import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'virtual:uno.css'

import { register } from '@mqy/component-private/dist/mqy-component-internal'
register()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
