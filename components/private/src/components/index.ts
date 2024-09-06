import { register as BackgroundLayoutRegister } from './BackgroundLayout'
import { register as BackgroundLoginRegister } from './BackgroundLogin'

export function registerAll() {
	BackgroundLayoutRegister()
	BackgroundLoginRegister()
}

export {}
