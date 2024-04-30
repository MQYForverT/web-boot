import publicConfig from '../../stylelint.config.mjs'

export default {
	// 继承推荐规范配置
	extends: ['stylelint-config-recommended-vue/scss', 'stylelint-config-html/vue', publicConfig],
}
