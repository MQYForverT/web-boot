import { shallowRef, unref } from 'vue'

export function useWatermark(appendEl: HTMLElement = document.body) {
	let style = ''
	let attr: Layout.Watermark | undefined = undefined
	let observer: MutationObserver | null = null
	const watermarkEl = shallowRef<HTMLElement | null>(null)
	let image = ''

	// 绘制文字背景图
	function createBase64(text: string, attr?: Layout.Watermark) {
		const can = document.createElement('canvas')
		can.width = 190
		can.height = 130

		const cans = can.getContext('2d')
		if (cans) {
			cans.rotate(((attr?.rotate ?? -10) * Math.PI) / 120)
			cans.font = `${attr?.size ?? '12px'} ${attr?.fontFamily ?? 'Arial'}`
			cans.fillStyle = attr?.color ?? 'rgba(0, 0, 0, 0.1)'
			cans.textAlign = 'left'
			cans.textBaseline = 'middle'
			cans.fillText(text, can.width / 20, can.height)
		}
		return can.toDataURL('image/png')
	}

	// 绘制水印层
	const createWatermark = (attr: Layout.Watermark) => {
		// 得到水印图
		image = `url(${createBase64(attr.text!, attr)}) left top repeat`
		// 开始创建水印容器
		const div = document.createElement('div')
		watermarkEl.value = div
		div.style.background = image
		div.style.pointerEvents = 'none'
		div.style.top = '0px'
		div.style.left = '0px'
		div.style.position = 'absolute'
		div.style.zIndex = '100000'
		// 把水印放到指定dom下
		appendEl.style.position = 'relative'
		const { clientHeight: height, clientWidth: width } = appendEl
		// 根据指定dom的宽高更新水印的宽高
		updateWatermark({ width, height })
		appendEl.appendChild(div)
	}

	// 页面随窗口调整更新水印
	function updateWatermark(
		options: {
			width?: number
			height?: number
		} = {},
	) {
		const el = unref(watermarkEl)
		if (!el) return
		if (options.width) {
			el.style.width = `${options.width}px`
		}
		if (options.height) {
			el.style.height = `${options.height}px`
		}
		style = el.style.cssText
	}

	// 对外提供的设置水印方法
	function setWatermark(attrProps?: Layout.Watermark) {
		if (attrProps) {
			attr = attrProps
		}
		// 如果没有设置text，则不继续
		if (!attr?.text) {
			return
		}
		createWatermark(attr)
		createObserver(attr)
	}

	// 监听 DOM 变化
	const createObserver = (attr: Layout.Watermark) => {
		const domId = unref(watermarkEl)
		if (!domId) return
		observer = new MutationObserver((mutationsList) => {
			if (mutationsList.length) {
				const { removedNodes, type, target } = mutationsList[0]
				const currStyle = domId.getAttribute('style')
				if (removedNodes[0] === domId) {
					watermarkEl.value = null
					observer!.disconnect()
					setWatermark(attr)
				} else if (type === 'attributes' && target === domId && currStyle !== style) {
					domId.setAttribute('style', style)
				}
			}
		})
		observer.observe(unref(appendEl)!, {
			childList: true,
			attributes: true,
			subtree: true,
		})
	}

	const getObserver = () => {
		return observer
	}

	return { getObserver, setWatermark, updateWatermark }
}
