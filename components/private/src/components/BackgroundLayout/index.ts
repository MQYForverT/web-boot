import React from 'react'
import { defineCustomElement } from 'vue'
import BackgroundLayout from './BackgroundLayout.vue'
import type { LayoutPublicProps } from './BackgroundLayout'
import { layoutEnum, menuModeEnum, propsEnum } from './BackgroundLayout'

// 临时办法，如果组件内部使用unocss，vue不会自动把unocss样式提升到根组件，所以这里需要把所有用到unocss的组件都在这里导入
// Layout
import defaults from './component/Layout/default.vue'
import vertical from './component/Layout/vertical.vue'
import AppMask from './component/AppMask/index.vue'
// LayoutCommon
import Logo from './component/LayoutCommon/Logo.vue'
//Aside
import Aside from './component/Aside/index.vue'
import Menu from './component/Aside/Menu.vue'
import MenuItem from './component/Aside/MenuItem.vue'
// Header
import Header from './component/Header/index.vue'
import FullScreen from './component/Header/FullScreen.vue'
import Theme from '@/components/common/components/Theme.vue'
import Language from '@/components/common/components/Language.vue'
import UserAvatar from './component/Header/UserAvatar.vue'
import MenuCollapse from './component/Header/MenuCollapse.vue'
import Breadcrumb from './component/Header/Breadcrumb.vue'
// Setting
import ShowSetting from './component/AppSetting/ShowSetting.vue'
import RectItem from './component/AppSetting/RectItem.vue'
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
	...vertical.styles,
	...AppMask.styles,
	...Aside.styles,
	...Logo.styles,
	...Menu.styles,
	...MenuItem.styles,
	...Header.styles,
	...MenuCollapse.styles,
	...Breadcrumb.styles,
	...FullScreen.styles,
	...Theme.styles,
	...Language.styles,
	...UserAvatar.styles,
	...ShowSetting.styles,
	...RectItem.styles,
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
	if (!customElements.get('mqy-background-layout')) {
		customElements.define('mqy-background-layout', BackgroundLayoutElement)
	}
}

declare module 'vue' {
	export interface GlobalComponents {
		MqyBackgroundLayout: typeof BackgroundLayoutElement & LayoutPublicProps
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

export { BackgroundLayout, layoutEnum, menuModeEnum, propsEnum }
