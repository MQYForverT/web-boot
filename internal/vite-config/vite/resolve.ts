import { resolve } from 'path'
import type { ResolveOptions, AliasOptions } from 'vite'
type IResolve = ResolveOptions & {
	alias?: AliasOptions
}
export function setupViteResolve(): IResolve {
	return {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	}
}
