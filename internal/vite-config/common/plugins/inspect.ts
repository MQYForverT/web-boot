import Inspect from 'vite-plugin-inspect'
import type { Options } from 'vite-plugin-inspect'

//https://github.com/antfu-collective/vite-plugin-inspect
export default (option?: Options) => {
	return Inspect({
		...option,
	})
}
