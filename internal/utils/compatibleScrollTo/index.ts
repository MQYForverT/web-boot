interface ScrollOptions {
	top?: number
	left?: number
	behavior?: 'smooth' | 'instant' | 'auto'
	onComplete?: () => void
}

/**
 * 兼容性的滚动函数，接口与原生 scrollTo 保持一致
 * @param element 要滚动的元素
 * @param options 滚动选项，包含 top、left 和 behavior
 * @param y 当使用位置参数方式调用时的垂直位置
 */
export function compatibleScrollTo(element: HTMLElement, options: ScrollOptions | number, y?: number) {
	// 处理参数，保持与原生 scrollTo 一致的调用方式
	let left = 0
	let top = 0
	let behavior: 'smooth' | 'instant' | 'auto' = 'smooth'
	let onComplete: (() => void) | undefined

	if (typeof options === 'number') {
		left = options
		top = y ?? 0
	} else {
		left = options.left ?? 0
		top = options.top ?? 0
		behavior = options.behavior ?? 'smooth'
		onComplete = options.onComplete
	}

	// 获取容器的最大可滚动范围
	const maxScrollLeft = element.scrollWidth - element.clientWidth
	const maxScrollTop = element.scrollHeight - element.clientHeight

	// 限制目标位置在可滚动范围内
	left = Math.max(0, Math.min(left, maxScrollLeft))
	top = Math.max(0, Math.min(top, maxScrollTop))

	// 如果目标位置与当前位置相同或非常接近，直接触发完成回调并返回
	if (Math.abs(element.scrollLeft - left) < 1 && Math.abs(element.scrollTop - top) < 1) {
		onComplete?.()
		return
	}

	// 检查是否支持原生 scrollTo
	if ('scrollBehavior' in document.documentElement.style) {
		try {
			element.scrollTo({ top, left, behavior })

			if (onComplete) {
				let isScrolling = true
				const scrollHandler = () => {
					if (!isScrolling) return

					const reachedTargetX = Math.abs(element.scrollLeft - left) < 1
					const reachedTargetY = Math.abs(element.scrollTop - top) < 1

					if (reachedTargetX && reachedTargetY) {
						isScrolling = false
						element.removeEventListener('scroll', scrollHandler)
						onComplete()
					}
				}

				element.addEventListener('scroll', scrollHandler)
				// 如果滚动未开始，也要检查一次
				scrollHandler()
			}
			return
		} catch (e) {
			console.warn('Native smooth scroll not supported, fallback to animation')
		}
	}

	// 如果不需要平滑滚动，直接设置位置
	if (behavior === 'instant' || behavior === 'auto') {
		element.scrollLeft = left
		element.scrollTop = top
		onComplete?.()
		return
	}

	// 回退方案：使用 requestAnimationFrame 模拟滚动
	const startLeft = element.scrollLeft
	const startTop = element.scrollTop
	const startTime = Date.now()
	const duration = 500
	const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16))

	const cubic = (value: number) => Math.pow(value, 3)
	const easeInOutCubic = (value: number) => (value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2)

	let isScrolling = true
	let scrollTimeout: number
	let lastScrollLeft = element.scrollLeft
	let lastScrollTop = element.scrollTop

	if (onComplete) {
		const scrollHandler = () => {
			if (!isScrolling) return

			// 清除之前的超时
			clearTimeout(scrollTimeout)

			// 检查滚动位置是否改变
			const currentLeft = element.scrollLeft
			const currentTop = element.scrollTop

			lastScrollLeft = currentLeft
			lastScrollTop = currentTop

			// 如果位置接近目标位置，等待 100ms 确保滚动真正停止
			if (Math.abs(currentLeft - left) < 1 && Math.abs(currentTop - top) < 1) {
				scrollTimeout = window.setTimeout(() => {
					// 再次检查位置是否变化
					if (lastScrollLeft === element.scrollLeft && lastScrollTop === element.scrollTop) {
						isScrolling = false
						element.removeEventListener('scroll', scrollHandler)
						onComplete()
					}
				}, 100)
			}
		}

		element.addEventListener('scroll', scrollHandler)
	}

	function animate() {
		const elapsed = Date.now() - startTime
		const progress = elapsed / duration

		if (progress < 1) {
			element.scrollLeft = startLeft + (left - startLeft) * easeInOutCubic(progress)
			element.scrollTop = startTop + (top - startTop) * easeInOutCubic(progress)
			rAF(animate)
		} else {
			element.scrollLeft = left
			element.scrollTop = top
			isScrolling = false
		}
	}

	rAF(animate)
}
