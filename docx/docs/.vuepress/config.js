import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Web Boot',
	description: '一键式任何前端语言开发后端管理系统',

	theme: defaultTheme({
		logo: '/images/logo.png',

		navbar: [
			{
				text: '首页',
				link: '/',
			},
			{
				text: '快速开始',
				link: '/get-started',
			},
			{
				text: '模板',
				children: [
					{
						text: 'Vue模板',
						link: '/templates/vue/',
					},
					{
						text: 'React模板',
						link: '/templates/react/',
					},
					{
						text: 'Svelte模板',
						link: '/templates/svelte/',
					},
				],
			},
			{
				text: '组件',
				children: [
					{
						text: '布局组件',
						link: '/components/layout/',
					},
					{
						text: '登录组件',
						link: '/components/login/',
					},
					{
						text: '通用组件',
						link: '/components/common/',
					},
				],
			},
			{
				text: '配置',
				link: '/config/',
			},
			{
				text: 'GitHub',
				link: 'https://github.com/your-username/web-boot',
			},
		],

		sidebar: {
			'/templates/': [
				{
					text: '模板介绍',
					children: ['/templates/README.md', '/templates/vue/', '/templates/react/', '/templates/svelte/'],
				},
			],
			'/components/': [
				{
					text: '组件文档',
					children: ['/components/README.md', '/components/layout/', '/components/login/', '/components/common/'],
				},
			],
			'/config/': [
				{
					text: '配置说明',
					children: ['/config/README.md'],
				},
			],
		},

		// 页面配置
		editLink: false,
		lastUpdated: true,
		lastUpdatedText: '最后更新',
		contributors: false,

		// 页脚
		footer: 'MIT Licensed | Copyright © 2024 Web Boot',
	}),

	bundler: viteBundler(),
})
