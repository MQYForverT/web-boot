import { resolve } from 'path'
import type { AliasOptions, ResolveOptions } from 'vite'
type IResolve = ResolveOptions & {
	alias?: AliasOptions
}
export function setupViteResolve(): IResolve {
	return {
		alias: {
			'@': resolve(import.meta.dirname, './src'),
		},
	}
}
