#!/usr/bin/env node

import { create } from './lib/create.js'

// 执行创建命令
create().catch((err) => {
	console.error('Error:', err)
	process.exit(1)
})
