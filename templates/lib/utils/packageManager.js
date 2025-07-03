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
