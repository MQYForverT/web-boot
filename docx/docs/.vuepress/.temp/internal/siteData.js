export const siteData = JSON.parse(
	'{"base":"/","lang":"zh-CN","title":"Web Boot","description":"一键式任何前端语言开发后端管理系统","head":[],"locales":{}}',
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
