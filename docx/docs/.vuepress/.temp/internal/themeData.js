export const themeData = JSON.parse(
	'{"logo":"/images/logo.png","navbar":[{"text":"首页","link":"/"},{"text":"快速开始","link":"/get-started"},{"text":"模板","children":[{"text":"Vue模板","link":"/templates/vue/"},{"text":"React模板","link":"/templates/react/"},{"text":"Svelte模板","link":"/templates/svelte/"}]},{"text":"组件","children":[{"text":"布局组件","link":"/components/layout/"},{"text":"登录组件","link":"/components/login/"},{"text":"通用组件","link":"/components/common/"}]},{"text":"配置","link":"/config/"},{"text":"GitHub","link":"https://github.com/your-username/web-boot"}],"sidebar":{"/templates/":[{"text":"模板介绍","children":["/templates/README.md","/templates/vue/","/templates/react/","/templates/svelte/"]}],"/components/":[{"text":"组件文档","children":["/components/README.md","/components/layout/","/components/login/","/components/common/"]}],"/config/":[{"text":"配置说明","children":["/config/README.md"]}]},"editLink":false,"lastUpdated":true,"lastUpdatedText":"最后更新","contributors":false,"footer":"MIT Licensed | Copyright © 2024 Web Boot","locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLinkText":"Edit this page","contributorsText":"Contributors","notFound":["There\'s nothing here.","How did we get here?","That\'s a Four-Oh-Four.","Looks like we\'ve got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}',
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
