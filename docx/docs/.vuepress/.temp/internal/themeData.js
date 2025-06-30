export const themeData = JSON.parse(
	'{"logo":"/images/logo.png","navbar":[{"text":"首页","link":"/"},{"text":"快速开始","link":"/get-started"},{"text":"组件库","children":[{"text":"组件总览","link":"/components/"},{"text":"布局组件","link":"/components/layout/"},{"text":"登录组件","link":"/components/login/"},{"text":"通用组件","link":"/components/common/"}]},{"text":"开发工具","children":[{"text":"工具总览","link":"/config/"},{"text":"ESLint 配置","link":"/config/eslint/"},{"text":"Vite 配置","link":"/config/vite/"},{"text":"实用函数","link":"/config/utils/"}]},{"text":"使用示例","children":[{"text":"示例总览","link":"/templates/"},{"text":"Vue 示例","link":"/templates/vue/"},{"text":"React 示例","link":"/templates/react/"},{"text":"Svelte 示例","link":"/templates/svelte/"}]},{"text":"GitHub","link":"https://github.com/your-username/web-boot"}],"sidebar":{"/components/":[{"text":"Web Components 组件库","children":["/components/README.md","/components/layout/","/components/login/","/components/common/"]}],"/config/":[{"text":"开发工具集","children":["/config/README.md","/config/eslint/","/config/vite/","/config/utils/"]}],"/templates/":[{"text":"框架使用示例","children":["/templates/README.md","/templates/vue/","/templates/react/","/templates/svelte/"]}]},"editLink":false,"lastUpdated":true,"lastUpdatedText":"最后更新","contributors":false,"footer":"MIT Licensed | Copyright © 2024 Web Boot","locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLinkText":"Edit this page","contributorsText":"Contributors","notFound":["There\'s nothing here.","How did we get here?","That\'s a Four-Oh-Four.","Looks like we\'ve got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}',
)

if (import.meta.webpackHot) {
	import.meta.webpackHot.accept()
	if (__VUE_HMR_RUNTIME__.updateThemeData) {
		__VUE_HMR_RUNTIME__.updateThemeData(themeData)
	}
}

if (import.meta.hot) {
	import.meta.hot.accept(({ themeData }) => {
		__VUE_HMR_RUNTIME__.updateThemeData(themeData)
	})
}
