import comp from 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/index.html.vue'
const data = JSON.parse(
	'{"path":"/","title":"首页","lang":"zh-CN","frontmatter":{"home":true,"title":"首页","heroImage":"https://vuejs.press/images/hero.png","heroText":"Web Boot","tagline":"一键式任何前端语言开发后端管理系统","actions":[{"text":"快速开始","link":"/get-started.html","type":"primary"},{"text":"查看模板","link":"/templates/","type":"secondary"}],"features":[{"title":"多框架支持","details":"支持 Vue、React、Svelte 三种主流前端框架，满足不同技术栈需求。"},{"title":"开箱即用","details":"内置完整的后台管理系统布局、路由、状态管理等功能，快速启动项目开发。"},{"title":"现代化设计","details":"基于最新的前端技术栈，提供美观且响应式的用户界面设计。"},{"title":"TypeScript 支持","details":"全面的 TypeScript 类型支持，提供更好的开发体验和代码质量。"},{"title":"丰富的组件","details":"提供布局组件、登录组件等常用组件，加速开发进程。"},{"title":"工程化配置","details":"完整的工程化配置，包括代码规范、构建优化、部署配置等。"}],"footer":"MIT Licensed | Copyright © 2024 Web Boot"},"headers":[{"level":2,"title":"项目特色","slug":"项目特色","link":"#项目特色","children":[{"level":3,"title":"🚀 快速开始","slug":"🚀-快速开始","link":"#🚀-快速开始","children":[]},{"level":3,"title":"📦 支持的模板","slug":"📦-支持的模板","link":"#📦-支持的模板","children":[]},{"level":3,"title":"🛠️ 核心功能","slug":"🛠️-核心功能","link":"#🛠️-核心功能","children":[]}]}],"git":{},"filePathRelative":"README.md"}',
)
export { comp, data }

if (import.meta.webpackHot) {
	import.meta.webpackHot.accept()
	if (__VUE_HMR_RUNTIME__.updatePageData) {
		__VUE_HMR_RUNTIME__.updatePageData(data)
	}
}

if (import.meta.hot) {
	import.meta.hot.accept(({ data }) => {
		__VUE_HMR_RUNTIME__.updatePageData(data)
	})
}
