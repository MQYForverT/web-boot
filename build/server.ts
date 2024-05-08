export function setupViteServer() {
	return {
		port: 9801,
		cors: true,
		proxy: {
			// ...
		},
		open: true,
	}
}
