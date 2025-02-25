import Inspect from 'vite-plugin-inspect'
import type { ViteInspectOptions } from 'vite-plugin-inspect'

//https://github.com/antfu-collective/vite-plugin-inspect
export default (option?: ViteInspectOptions) => {
	return Inspect({
		...option,
	})
}
