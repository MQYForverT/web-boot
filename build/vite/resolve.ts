import { resolve } from 'path'
export function setupViteResolve() {
	return {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	}
}
