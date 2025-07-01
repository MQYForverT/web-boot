import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Web Boot',
	description: '现代化的前端项目脚手架工具，支持Vue、React、Svelte等多种框架',
	lang: 'zh-CN',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'keywords', content: '前端脚手架,Vue,React,Svelte,Vite,TypeScript' }],
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		siteTitle: 'Web Boot',
		logo: '/logo.svg',

		nav: [
			{ text: '首页', link: '/' },
			{ text: '指南', link: '/guide/getting-started' },
			{ text: '模板', link: '/templates/' },
			{ text: '组件', link: '/components/' },
			{ text: 'API', link: '/api/' },
			{ text: '示例', link: '/examples/' },
		],

		sidebar: {
			'/guide/': [
				{
					text: '指南',
					items: [
						{ text: '快速开始', link: '/guide/getting-started' },
						{ text: '环境要求', link: '/guide/requirements' },
						{ text: '项目结构', link: '/guide/structure' },
						{ text: '开发工具', link: '/guide/dev-tools' },
					],
				},
			],
			'/templates/': [
				{
					text: '模板',
					items: [
						{ text: '概述', link: '/templates/' },
						{ text: 'Vue 模板', link: '/templates/vue' },
						{ text: 'React 模板', link: '/templates/react' },
						{ text: 'Svelte 模板', link: '/templates/svelte' },
					],
				},
			],
			'/components/': [
				{
					text: '组件库',
					items: [
						{ text: '概述', link: '/components/' },
						{ text: 'BackgroundLayout', link: '/components/background-layout' },
						{ text: 'BackgroundLogin', link: '/components/background-login' },
						{ text: '公共组件', link: '/components/common' },
					],
				},
			],
			'/api/': [
				{
					text: 'API 参考',
					items: [
						{ text: '概述', link: '/api/' },
						{ text: '配置管理', link: '/api/config' },
						{ text: '用户管理', link: '/api/user' },
						{ text: '项目管理', link: '/api/project' },
						{ text: '布局组件', link: '/api/layout' },
						{ text: '登录组件', link: '/api/login' },
						{ text: '公共组件', link: '/api/common' },
						{ text: '文件处理', link: '/api/file' },
						{ text: '数据处理', link: '/api/data' },
						{ text: '缓存管理', link: '/api/cache' },
						{ text: '性能监控', link: '/api/performance' },
						{ text: '错误追踪', link: '/api/error' },
						{ text: '用户行为', link: '/api/analytics' },
					],
				},
			],
			'/examples/': [
				{
					text: '示例',
					items: [
						{ text: 'Markdown 示例', link: '/examples/markdown' },
						{ text: 'API 示例', link: '/examples/api' },
					],
				},
			],
		},

		socialLinks: [{ icon: 'github', link: 'https://github.com/your-username/web-boot' }],

		footer: {
			message: '基于 MIT 许可发布',
			copyright: 'Copyright © 2024 Web Boot',
		},

		search: {
			provider: 'local',
		},
	},
})
