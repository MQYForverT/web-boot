import type { ESBuildOptions } from 'vite'
export function setupViteEsBuild(): ESBuildOptions | false | undefined {
	if (process.env.NODE_ENV === 'development') {
		return undefined
	}
	return {
		/** 打包时移除 console.log */
		pure: ['console.log'],
		/** 打包时移除 debugger */
		drop: ['debugger'],
		/** 打包时移除所有注释 */
		legalComments: 'none',
	}
}
