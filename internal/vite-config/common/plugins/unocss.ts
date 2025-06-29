import UnoCSS from 'unocss/vite'
import type { VitePluginConfig } from '@unocss/vite'

export default (config?: VitePluginConfig) => {
	return UnoCSS(config)
}

export * from 'unocss'
