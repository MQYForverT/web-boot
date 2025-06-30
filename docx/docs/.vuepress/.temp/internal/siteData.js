export const siteData = JSON.parse(
	'{"base":"/","lang":"zh-CN","title":"Web Boot","description":"通用 Web Components 组件库和开发工具集","head":[],"locales":{}}',
)

if (import.meta.webpackHot) {
	import.meta.webpackHot.accept()
	if (__VUE_HMR_RUNTIME__.updateSiteData) {
		__VUE_HMR_RUNTIME__.updateSiteData(siteData)
	}
}

if (import.meta.hot) {
	import.meta.hot.accept(({ siteData }) => {
		__VUE_HMR_RUNTIME__.updateSiteData(siteData)
	})
}
