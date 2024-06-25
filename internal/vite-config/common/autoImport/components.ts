import Components from 'unplugin-vue-components/vite'
import type { Options } from 'unplugin-vue-components/types'

export default (option: Options) => {
	return Components(option)
}

export * from 'unplugin-vue-components/resolvers'
