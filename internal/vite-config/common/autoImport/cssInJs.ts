import VitePluginStyleInject from 'vite-plugin-style-inject'

export default (styleId?: string) => {
	return VitePluginStyleInject(styleId)
}
