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
		logo: '/logo.png',

		nav: [
			{ text: '首页', link: '/' },
			{ text: '指南', link: '/guide/getting-started' },
			{ text: '模板', link: '/templates/' },
			{ text: '组件', link: '/components/' },
			{ text: '工具', link: '/api/' },
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
					text: 'Components',
					items: [
						{ text: '概述', link: '/components/' },
						{
							text: '私有组件库',
							collapsed: false,
							items: [
								{ text: 'BackgroundLayout', link: '/components/background-layout' },
								{ text: 'BackgroundLogin', link: '/components/background-login' },
								{ text: 'Common Components', link: '/components/common' },
							],
						},
						{
							text: '公共组件库',
							collapsed: false,
							items: [{ text: '开发中...', link: '#' }],
						},
					],
				},
			],
			'/api/': [
				{
					text: '工具',
					items: [
						{ text: '概述', link: '/api/' },
						{
							text: '代码规范',
							collapsed: false,
							items: [
								{ text: 'ESLint 配置', link: '/api/eslint' },
								{ text: 'StyleLint 配置', link: '/api/stylelint' },
							],
						},
						{
							text: '构建工具',
							collapsed: false,
							items: [{ text: 'Vite 配置', link: '/api/vite' }],
						},
						{
							text: '工具函数',
							collapsed: false,
							items: [
								{ text: 'Axios 封装', link: '/api/axios' },
								{ text: '滚动处理', link: '/api/scroll' },
								{ text: '函数重载', link: '/api/overload' },
								{ text: '进度条', link: '/api/progress' },
								{ text: '打字机效果', link: '/api/typewriter' },
							],
						},
					],
				},
			],
		},

		socialLinks: [{ icon: 'github', link: 'https://github.com/MQYForverT/web-boot' }],

		footer: {
			message: '基于 MIT 许可发布',
			copyright: 'Copyright © 2024 Web Boot',
		},

		search: {
			provider: 'local',
		},
	},
})
