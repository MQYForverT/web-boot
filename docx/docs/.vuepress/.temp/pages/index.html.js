import comp from "E:/mqy/web-boot/docx/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"heroText\":\"Web Boot\",\"tagline\":\"通用 Web Components 组件库 + 开发工具集\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"查看组件\",\"link\":\"/components/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"框架无关\",\"details\":\"基于 Web Components 标准，可在任何前端框架中使用，包括原生 JavaScript。\"},{\"title\":\"开箱即用\",\"details\":\"提供完整的后台管理系统组件和开发工具，无需重复造轮子。\"},{\"title\":\"标准化工具\",\"details\":\"统一的代码规范、构建配置、实用函数，确保项目开发的一致性。\"},{\"title\":\"TypeScript 优先\",\"details\":\"全面的 TypeScript 类型支持，提供更好的开发体验和代码质量。\"},{\"title\":\"现代化组件\",\"details\":\"后台布局、登录系统、主题切换等企业级组件，支持自定义配置。\"},{\"title\":\"丰富示例\",\"details\":\"提供 Vue、React、Svelte 三个主流框架的完整使用示例。\"}],\"footer\":\"MIT Licensed | Copyright © 2024 Web Boot\"},\"headers\":[{\"level\":2,\"title\":\"项目核心\",\"slug\":\"项目核心\",\"link\":\"#项目核心\",\"children\":[{\"level\":3,\"title\":\"🎯 核心优势\",\"slug\":\"🎯-核心优势\",\"link\":\"#🎯-核心优势\",\"children\":[]},{\"level\":3,\"title\":\"🚀 快速开始\",\"slug\":\"🚀-快速开始\",\"link\":\"#🚀-快速开始\",\"children\":[]},{\"level\":3,\"title\":\"📖 使用示例\",\"slug\":\"📖-使用示例\",\"link\":\"#📖-使用示例\",\"children\":[]},{\"level\":3,\"title\":\"🛠️ 核心功能\",\"slug\":\"🛠️-核心功能\",\"link\":\"#🛠️-核心功能\",\"children\":[]}]}],\"git\":{\"updatedTime\":1751197393000,\"contributors\":[{\"name\":\"@1212qqa\",\"username\":\"\",\"email\":\"yugangping@cmcm.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"2a5a32d43189cd8670ac64a247b718fbb22753ae\",\"time\":1751197393000,\"email\":\"yugangping@cmcm.com\",\"author\":\"@1212qqa\",\"message\":\"feat(docx): 初步完成\"}]},\"filePathRelative\":\"README.md\"}")
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
