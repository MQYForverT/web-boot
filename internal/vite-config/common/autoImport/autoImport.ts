import AutoImport from 'unplugin-auto-import/vite'
import type { Options } from 'unplugin-auto-import/dist/types.d.ts'

export default (option: Options) => {
	return AutoImport(option)
}
