import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.vue'
import type { LayoutPublicProps } from './BackgroundLayout'
import { layoutEnum, animationEnum, propsEnum } from './BackgroundLayout'

// 临时办法，需要把所有用到unocss到地方都在这里导入
import defaults from './component/Main/default.vue'
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
import TabDropdown from './component/NavTab/TabDropdown.vue'
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
)

// 将组件转换为 web components
export const BackgroundLayoutElement = defineCustomElement(BackgroundLayout)
// 注册
export function register() {
	customElements.define('mqy-background-layout', BackgroundLayoutElement)
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyBackgroundLayout: typeof BackgroundLayoutElement
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

export { BackgroundLayout, layoutEnum, animationEnum, propsEnum }
