import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.vue'
import type { LayoutPublicProps } from './BackgroundLayout'
import { layoutEnum, propsEnum } from './BackgroundLayout'

// element的暗黑模式一定要在组件之前引入
import 'element-plus/theme-chalk/dark/css-vars.css'

// 临时办法，需要把所有用到unocss到地方都在这里导入，但是这样的话下面这些组件就不能实现异步了
import defaults from './component/Layout/default.vue'
import AppMask from './component/AppMask/index.vue'
//Aside
import Aside from './component/Aside/index.vue'
import Logo from './component/Aside/Logo.vue'
import Menu from './component/Aside/Menu.vue'
import MenuItem from './component/Aside/MenuItem.vue'
// Header
import Header from './component/Header/index.vue'
import MenuCollapse from './component/Header/MenuCollapse.vue'
import Breadcrumb from './component/Header/Breadcrumb.vue'
import FullScreen from './component/Header/FullScreen.vue'
import Language from './component/Header/Language.vue'
import UserAvatar from './component/Header/UserAvatar.vue'
// Setting
import ShowSetting from './component/AppSetting/ShowSetting.vue'
// NavTab
import NavTab from './component/NavTab/index.vue'
import TabDropdown from './component/NavTab/TagDropdown.vue'
import TagItem from './component/NavTab/TagItem.vue'
// Main
import Main from './component/Main/index.vue'
// Footer
import Footer from './component/Footer/index.vue'
BackgroundLayout.styles.push(
	...defaults.styles,
	...AppMask.styles,
	...Aside.styles,
	...Logo.styles,
	...Menu.styles,
	...MenuItem.styles,
	...Header.styles,
	...MenuCollapse.styles,
	...Breadcrumb.styles,
	...FullScreen.styles,
	...Language.styles,
	...UserAvatar.styles,
	...ShowSetting.styles,
	...NavTab.styles,
	...TabDropdown.styles,
	...TagItem.styles,
	...Main.styles,
	...Footer.styles,
)

// 将组件转换为 web components
export const BackgroundLayoutElement = defineCustomElement(BackgroundLayout)

// 注册
export function register() {
	customElements.define('mqy-background-layout', BackgroundLayoutElement)
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyBackgroundLayout: LayoutPublicProps
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'mqy-background-layout': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
				LayoutPublicProps
		}
	}
}

export { BackgroundLayout, layoutEnum, propsEnum }
