// shadow-dom中，相互隔离，不能跨组件使用元素选择器，所以这里使用ref去记录
export default createGlobalState(() => {
	// 根元素
	const rootElement = shallowRef<HTMLElement | null>(null)
	// logo
	const logoElement = shallowRef<HTMLElement | null>(null)
	// collapse
	const collapseElement = shallowRef<HTMLElement | null>(null)
	return { rootElement, logoElement, collapseElement }
})
