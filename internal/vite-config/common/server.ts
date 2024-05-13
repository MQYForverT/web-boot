import type { ServerOptions } from 'vite'
export function setupViteServer(): ServerOptions {
	return {
		port: 9801,
		cors: true,
		proxy: {
			// ...
		},
		open: true,
	}
}
