import { propsEnum, propsKey, emitsKey } from '../BackgroundLogin'

export default () => {
	const props = inject(propsKey)!
	const emits = inject(emitsKey)!

	return {
		props,
		emits,
		propsEnum,
	}
}
