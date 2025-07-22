import { compression } from 'vite-plugin-compression2'
import type { Algorithm } from 'vite-plugin-compression2'

export default (type: Algorithm = 'gzip') => {
	return compression({ algorithms: [type] })
}
