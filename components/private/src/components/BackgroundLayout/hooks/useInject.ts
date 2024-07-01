import { propsEnum, propsKey, emitsKey } from '../BackgroundLayout'

export default () => {
	const props = inject(propsKey)!
	const emits = inject(emitsKey)!

	return {
		props,
		emits,
		propsEnum,
	}
}
