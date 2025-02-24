import { shallowRef, unref } from 'vue'
import type { Layout } from '../layout'
import useGlobalStore from '@/components/common/globalStore'

export function useWatermark() {
	let style = ''
	let appendEl = document.body
	let attr: Layout.Watermark | undefined = undefined
	let observer: MutationObserver | null = null
	const watermarkEl = shallowRef<HTMLElement | null>(null)
	const { isDark } = useGlobalStore()

	watch(
		() => isDark(),
		() => {
			const widthMatch = style.match(/width:\s*(\d+)px/)
			const heightMatch = style.match(/height:\s*(\d+)px/)
			const width = widthMatch ? parseInt(widthMatch[1]) : 0
			const height = heightMatch ? parseInt(heightMatch[1]) : 0

			updateWatermark({ width, height })
		},
	)

	const getWatermarkColor = () => {
		return isDark() ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
	}

	// 绘制文字背景图
	const createBase64 = (options: { width: number; height: number }) => {
		const can = document.createElement('canvas')
		can.width = options.width
		can.height = options.height

		const cans = can.getContext('2d')
		if (cans) {
			// 清理，确保之前绘制的内容被移除
			cans.clearRect(0, 0, can.width, can.height)
			// 设置属性
			cans.font = `${attr?.size ?? '14px'} ${attr?.fontFamily ?? 'Arial'}`
			cans.fillStyle = attr?.color ?? getWatermarkColor()
			cans.textAlign = 'left'
			cans.textBaseline = 'middle'
			// 计算行数和列数
			const watermarkHeight = 80 // 水印行高
			const watermarkWidth = 300 // 水印列宽
			// 向上取整，以确保所有空间都被水印填充
			const cols = Math.ceil(can.width / watermarkWidth)
			const rows = Math.ceil(can.height / watermarkHeight)
			// 绘制水印
			for (let row = 0; row < rows; row++) {
				for (let col = 0; col < cols; col++) {
					const x = col * watermarkWidth + (row % 2 === 1 ? watermarkWidth / 2 : 0)
					const y = row * watermarkHeight
					// 保存当前的绘图状态
					cans.save()
					// 移动画布的原点到当前水印的位置
					cans.translate(x, y)
					// 旋转画布
					cans.rotate(((attr?.rotate ?? -12) * Math.PI) / 180)
					// 绘制水印文本
					cans.fillText(attr?.text || '', 0, 0)
					// 恢复到保存的绘图状态，以便进行下一个水印的绘制
					cans.restore()
				}
			}
		}
		// 返回 Base64 图像数据
		return can.toDataURL('image/png')
	}

	// 绘制水印层
	const createWatermark = () => {
		// 开始创建水印容器
		const div = document.createElement('div')
		watermarkEl.value = div
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
		// 继续创建一个容器，把水印隐藏起来
		const divContain = document.createElement('div')
		divContain.appendChild(div)
		appendEl.appendChild(divContain)
	}

	// 页面随窗口调整更新水印
	async function updateWatermark(options: { width: number; height: number }) {
		const el = unref(watermarkEl)
		if (!el) return
		el.style.width = `${options.width}px`
		el.style.height = `${options.height}px`
		if (attr?.text) {
			el.style.background = `url(${createBase64(options)}) left top repeat`
		}
		style = el.style.cssText
	}

	// 对外提供的设置容器方法
	function setAppendEl(el: HTMLElement) {
		appendEl = el
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
		createWatermark()
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

	return { setAppendEl, watermarkEl, getObserver, setWatermark, updateWatermark }
}
