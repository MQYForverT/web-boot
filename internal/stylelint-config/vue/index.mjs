import publicConfig from '../index.mjs'

export default {
	// 继承推荐规范配置
	extends: [publicConfig, 'stylelint-config-recommended-vue/scss', 'stylelint-config-html/vue'],
}
