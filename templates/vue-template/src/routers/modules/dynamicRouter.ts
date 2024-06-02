export function dynamicImport(component: string, folder: string) {
	let dynamicViewsModules

	switch (folder) {
		case 'pages':
			dynamicViewsModules = import.meta.glob('../../pages/**/*.{vue,jsx,tsx}')
			break
		case 'layouts':
			dynamicViewsModules = import.meta.glob('../../layouts/**/*.{vue,jsx,tsx}')
			break
	}

	if (!dynamicViewsModules) {
		return null
	}

	const keys = Object.keys(dynamicViewsModules)

	const matchKeys = keys.filter((key) => {
		const k = key.replace(`../../${folder}`, '')
		return k.startsWith(`${component}`) || k.startsWith(`/${component}`)
	})

	if (matchKeys.length === 1) {
		const matchKey = matchKeys[0]

		return dynamicViewsModules[matchKey]
	}
	if (matchKeys.length > 1) {
		console.warn('请不要创建“”。vue’和‘。jSX`views文件夹下同一层次目录中具有相同文件名的文件。这将导致动态引入失败')
		return
	}
	return null
}
