import { CodeTabs } from 'E:/mqy/web-boot/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_typescript@5.8.3_vuepress@2.0.0-_lbq5j4qx25aadzvswbzyyb4mpq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js'
import { Tabs } from 'E:/mqy/web-boot/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_typescript@5.8.3_vuepress@2.0.0-_lbq5j4qx25aadzvswbzyyb4mpq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js'
import 'E:/mqy/web-boot/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_typescript@5.8.3_vuepress@2.0.0-_lbq5j4qx25aadzvswbzyyb4mpq/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css'

export default {
	enhance: ({ app }) => {
		app.component('CodeTabs', CodeTabs)
		app.component('Tabs', Tabs)
	},
}
