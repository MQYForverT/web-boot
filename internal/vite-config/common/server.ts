import type { ServerOptions } from 'vite'
export function setupViteServer(): ServerOptions {
	return {
		host: '0.0.0.0',
		port: 9801,
		cors: true,
		proxy: {
			// ...
		},
		open: true,
	}
}
