import { UserConfig } from 'vite'
import { resolve } from 'path'

const getPath = (path: string): string => {
	return resolve(__dirname, path)
}

// 配置多入口
const entries = {
	index: getPath('index.ts'),
	axios: getPath('axios/index.ts'),
	nprogress: getPath('nprogress/index.ts'),
}

import { setupViteLib, dts } from '@mqy/vite-config/common'

// https://vitejs.dev/config/
const config: UserConfig = {
	plugins: [
		dts({
			include: ['**/*.ts'],
			exclude: ['vite.config.ts'],
		}),
	],
	build: setupViteLib({
		entries: entries,
		outputManualChunks: {
			axios: ['axios'],
		},
	}),
}
export default config
