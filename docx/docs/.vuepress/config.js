import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Web Boot',
	description: '通用 Web Components 组件库和开发工具集',

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
				text: '组件库',
				children: [
					{
						text: '组件总览',
						link: '/components/',
					},
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
				text: '开发工具',
				children: [
					{
						text: '工具总览',
						link: '/config/',
					},
					{
						text: 'ESLint 配置',
						link: '/config/eslint/',
					},
					{
						text: 'Vite 配置',
						link: '/config/vite/',
					},
					{
						text: '实用函数',
						link: '/config/utils/',
					},
				],
			},
			{
				text: '使用示例',
				children: [
					{
						text: '示例总览',
						link: '/templates/',
					},
					{
						text: 'Vue 示例',
						link: '/templates/vue/',
					},
					{
						text: 'React 示例',
						link: '/templates/react/',
					},
					{
						text: 'Svelte 示例',
						link: '/templates/svelte/',
					},
				],
			},
			{
				text: 'GitHub',
				link: 'https://github.com/your-username/web-boot',
			},
		],

		sidebar: {
			'/components/': [
				{
					text: 'Web Components 组件库',
					children: ['/components/README.md', '/components/layout/', '/components/login/', '/components/common/'],
				},
			],
			'/config/': [
				{
					text: '开发工具集',
					children: ['/config/README.md', '/config/eslint/', '/config/vite/', '/config/utils/'],
				},
			],
			'/templates/': [
				{
					text: '框架使用示例',
					children: ['/templates/README.md', '/templates/vue/', '/templates/react/', '/templates/svelte/'],
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
