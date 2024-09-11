import { menuModeEnum } from '../BackgroundLayout'
import useContainer from './useContainer'
import useState from './useState'

import { setIsDark } from '@/components/utils/setIsDarkByAnimation'

export const handleSetIsDark = (val: boolean) => {
	const { rootElement } = useContainer()
	const { state, handMenuMode } = useState()

	const el = unref(rootElement)
	if (el) {
		const oldMode = val ? 'light' : 'dark'
		const mode = val ? 'dark' : 'light'
		el.classList.remove(oldMode)
		el.classList.add(mode)

		if (val) {
			state.menuMode = menuModeEnum.light
		} else {
			// 恢复到上一次手动改变的值
			state.menuMode = handMenuMode.value
		}
	}
	setIsDark(val)
}
