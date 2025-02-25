import type { UserConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const getPath = (path: string): string => {
	return resolve(__dirname, path)
}

// 配置多入口
const entries = {
	index: getPath('index.ts'),
	axios: getPath('axios/index.ts'),
	nprogress: getPath('nprogress/index.ts'),
}

import { setupViteLib, dts, compress, visualizer } from '@mqy/vite-config/common'

// https://vitejs.dev/config/
const config: UserConfig = {
	plugins: [
		visualizer,
		compress(),
		dts({
			include: ['**/*.ts'],
			exclude: ['vite.config.ts'],
		}),
	],
	build: setupViteLib({
		entries: entries,
		minify: false,
		outputManualChunks: {
			axios: ['axios'],
		},
	}),
}
export default config
