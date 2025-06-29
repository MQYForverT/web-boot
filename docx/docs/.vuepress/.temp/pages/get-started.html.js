import comp from 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/get-started.html.vue'
const data = JSON.parse(
	'{"path":"/get-started.html","title":"快速开始","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"环境要求","slug":"环境要求","link":"#环境要求","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[{"level":3,"title":"1. 克隆项目","slug":"_1-克隆项目","link":"#_1-克隆项目","children":[]},{"level":3,"title":"2. 安装依赖","slug":"_2-安装依赖","link":"#_2-安装依赖","children":[]},{"level":3,"title":"3. 选择模板","slug":"_3-选择模板","link":"#_3-选择模板","children":[]},{"level":3,"title":"4. 启动开发服务器","slug":"_4-启动开发服务器","link":"#_4-启动开发服务器","children":[]}]},{"level":2,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":2,"title":"核心功能","slug":"核心功能","link":"#核心功能","children":[{"level":3,"title":"登录系统","slug":"登录系统","link":"#登录系统","children":[]},{"level":3,"title":"布局系统","slug":"布局系统","link":"#布局系统","children":[]},{"level":3,"title":"主题系统","slug":"主题系统","link":"#主题系统","children":[]}]},{"level":2,"title":"开发指南","slug":"开发指南","link":"#开发指南","children":[{"level":3,"title":"添加新页面","slug":"添加新页面","link":"#添加新页面","children":[]},{"level":3,"title":"自定义组件","slug":"自定义组件","link":"#自定义组件","children":[]},{"level":3,"title":"构建部署","slug":"构建部署","link":"#构建部署","children":[]}]},{"level":2,"title":"下一步","slug":"下一步","link":"#下一步","children":[]}],"git":{},"filePathRelative":"get-started.md"}',
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
