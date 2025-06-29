export const redirects = JSON.parse('{}')

export const routes = Object.fromEntries([
	[
		'/get-started.html',
		{
			loader: () =>
				import(
					/* webpackChunkName: "get-started.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/get-started.html.js'
				),
			meta: { title: '快速开始' },
		},
	],
	[
		'/',
		{
			loader: () =>
				import(/* webpackChunkName: "index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/index.html.js'),
			meta: { title: '首页' },
		},
	],
	[
		'/components/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "components_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/components/index.html.js'
				),
			meta: { title: '组件文档' },
		},
	],
	[
		'/config/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "config_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/config/index.html.js'
				),
			meta: { title: '配置说明' },
		},
	],
	[
		'/templates/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "templates_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/templates/index.html.js'
				),
			meta: { title: '模板介绍' },
		},
	],
	[
		'/components/common/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "components_common_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/components/common/index.html.js'
				),
			meta: { title: '通用组件' },
		},
	],
	[
		'/components/layout/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "components_layout_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/components/layout/index.html.js'
				),
			meta: { title: '布局组件 (BackgroundLayout)' },
		},
	],
	[
		'/components/login/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "components_login_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/components/login/index.html.js'
				),
			meta: { title: '登录组件 (BackgroundLogin)' },
		},
	],
	[
		'/templates/react/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "templates_react_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/templates/react/index.html.js'
				),
			meta: { title: 'React 模板' },
		},
	],
	[
		'/templates/svelte/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "templates_svelte_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/templates/svelte/index.html.js'
				),
			meta: { title: 'Svelte 模板' },
		},
	],
	[
		'/templates/vue/',
		{
			loader: () =>
				import(
					/* webpackChunkName: "templates_vue_index.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/templates/vue/index.html.js'
				),
			meta: { title: 'Vue 模板' },
		},
	],
	[
		'/404.html',
		{
			loader: () =>
				import(/* webpackChunkName: "404.html" */ 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/404.html.js'),
			meta: { title: '' },
		},
	],
])

if (import.meta.webpackHot) {
	import.meta.webpackHot.accept()
	if (__VUE_HMR_RUNTIME__.updateRoutes) {
		__VUE_HMR_RUNTIME__.updateRoutes(routes)
	}
	if (__VUE_HMR_RUNTIME__.updateRedirects) {
		__VUE_HMR_RUNTIME__.updateRedirects(redirects)
	}
}

if (import.meta.hot) {
	import.meta.hot.accept(({ routes, redirects }) => {
		__VUE_HMR_RUNTIME__.updateRoutes(routes)
		__VUE_HMR_RUNTIME__.updateRedirects(redirects)
	})
}
