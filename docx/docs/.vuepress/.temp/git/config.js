import { GitContributors } from 'E:/mqy/web-boot/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.88_typescript@5.8.3_vuepress@2.0.0-rc.20_@vuepress+bundler-vite_wip3eewpwecpdavfbhy643sehu/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js'
import { GitChangelog } from 'E:/mqy/web-boot/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.88_typescript@5.8.3_vuepress@2.0.0-rc.20_@vuepress+bundler-vite_wip3eewpwecpdavfbhy643sehu/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js'

export default {
	enhance: ({ app }) => {
		app.component('GitContributors', GitContributors)
		app.component('GitChangelog', GitChangelog)
	},
}
