// 切换主题，伴随动画
export const setIsDarkByAnimation = (val: boolean, isDarkEl: HTMLElement, duration: number = 500) => {
	if (!document.startViewTransition) {
		setIsDark(val)
		return
	}

	const transition = document.startViewTransition(() => {
		setIsDark(val)
	})

	// 在 transition.ready 的 Promise 完成后，执行自定义动画
	transition.ready.then(() => {
		// 由于我们要从鼠标点击的位置开始做动画，所以我们需要先获取到鼠标的位置
		const { left, top } = isDarkEl.getBoundingClientRect()

		// 计算半径，以鼠标点击的位置为圆心，到四个角的距离中最大的那个作为半径
		const radius = Math.hypot(Math.max(left, innerWidth - left), Math.max(top, innerHeight - top))
		const clipPath = [`circle(0% at ${left}px ${top}px)`, `circle(${radius}px at ${left}px ${top}px)`]
		// 自定义动画
		document.documentElement.animate(
			{
				// 如果要切换到暗色主题，我们在过渡的时候从半径 100% 的圆开始，到 0% 的圆结束
				clipPath: val ? clipPath.reverse() : clipPath,
			},
			{
				duration,
				// 如果要切换到暗色主题，我们应该裁剪 view-transition-old(root) 的内容
				pseudoElement: val ? '::view-transition-old(root)' : '::view-transition-new(root)',
			},
		)
	})
}

export function setIsDark(val: boolean) {
	if (val) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}
