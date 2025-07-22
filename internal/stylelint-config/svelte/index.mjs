import { createRequire } from 'module'
import publicConfig from '../index.mjs'

const require = createRequire(import.meta.url)
// 检查必需的对等依赖
const requiredDeps = ['stylelint-config-html']
const missingDeps = []

for (const dep of requiredDeps) {
	try {
		require.resolve(dep, { paths: [process.cwd()] })
	} catch {
		missingDeps.push(dep)
	}
}

if (missingDeps.length > 0) {
	throw new Error(
		`[@tsoul/stylelint-config/svelte] The following peer dependencies are not installed: ${missingDeps.join(
			', ',
		)}. Please run "pnpm add -D ${missingDeps.join(' ')}"`,
	)
}

export default {
	// 继承推荐规范配置
	extends: [publicConfig, 'stylelint-config-html/svelte'],
}
