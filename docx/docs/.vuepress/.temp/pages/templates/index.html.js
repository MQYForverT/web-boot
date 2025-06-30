import comp from 'E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/templates/index.html.vue'
const data = JSON.parse(
	'{"path":"/templates/","title":"模板介绍","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"模板对比","slug":"模板对比","link":"#模板对比","children":[]},{"level":2,"title":"共同特性","slug":"共同特性","link":"#共同特性","children":[{"level":3,"title":"🔐 身份认证","slug":"🔐-身份认证","link":"#🔐-身份认证","children":[]},{"level":3,"title":"🎨 布局系统","slug":"🎨-布局系统","link":"#🎨-布局系统","children":[]},{"level":3,"title":"🌈 主题系统","slug":"🌈-主题系统","link":"#🌈-主题系统","children":[]},{"level":3,"title":"🛠️ 开发体验","slug":"🛠️-开发体验","link":"#🛠️-开发体验","children":[]},{"level":3,"title":"📱 响应式设计","slug":"📱-响应式设计","link":"#📱-响应式设计","children":[]}]},{"level":2,"title":"选择建议","slug":"选择建议","link":"#选择建议","children":[{"level":3,"title":"选择 Vue 模板 如果您：","slug":"选择-vue-模板-如果您","link":"#选择-vue-模板-如果您","children":[]},{"level":3,"title":"选择 React 模板 如果您：","slug":"选择-react-模板-如果您","link":"#选择-react-模板-如果您","children":[]},{"level":3,"title":"选择 Svelte 模板 如果您：","slug":"选择-svelte-模板-如果您","link":"#选择-svelte-模板-如果您","children":[]}]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]}],"git":{"updatedTime":1751197393000,"contributors":[{"name":"@1212qqa","username":"","email":"yugangping@cmcm.com","commits":1}],"changelog":[{"hash":"2a5a32d43189cd8670ac64a247b718fbb22753ae","time":1751197393000,"email":"yugangping@cmcm.com","author":"@1212qqa","message":"feat(docx): 初步完成"}]},"filePathRelative":"templates/README.md"}',
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
