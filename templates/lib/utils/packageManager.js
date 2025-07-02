/**
 * 包管理器配置
 */
const PACKAGE_MANAGERS = {
	npm: {
		install: 'npm install',
		run: 'npm run',
	},
	yarn: {
		install: 'yarn install',
		run: 'yarn',
	},
	pnpm: {
		install: 'pnpm install',
		run: 'pnpm',
	},
}

/**
 * 获取支持的包管理器列表
 * @returns {Array<{name: string, value: string}>}
 */
function getAvailablePackageManagers() {
	return [
		{ name: 'npm', value: 'npm' },
		{ name: 'yarn', value: 'yarn' },
		{ name: 'pnpm', value: 'pnpm' },
	]
}

export { getAvailablePackageManagers }
