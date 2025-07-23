import { b as r } from './element-plus-OyV65AEN.js'
import { H as a } from './index-Ce54hKLs.js'
import { u as i } from './vue-router-B5CAqlxG.js'
import { d as p, c as m, o as l, a as o, P as u, M as d, u as e, V as _ } from './@vue-LY02Q1R7.js'
import { _ as f } from './_plugin-vue_export-helper-DlAUqK2U.js'
import './@vueuse-X6khJhCi.js'
import './@element-plus-Bgg1-Uv-.js'
import './@ctrl-r5W6hzzQ.js'
import './lodash-es-CbM95Pub.js'
const v = { class: 'not-container' },
	x = { class: 'not-detail' },
	c = p({
		__name: '500',
		setup(B) {
			const s = i()
			return (V, t) => {
				const n = r
				return (
					l(),
					m('div', v, [
						t[4] || (t[4] = o('span', { 'i-twemoji-satellite-antenna': '', 'text-40': '' }, null, -1)),
						o('div', x, [
							t[2] || (t[2] = o('div', null, '500', -1)),
							t[3] || (t[3] = o('div', null, '抱歉，您的网络不见了~ 🤦‍♂️🤦‍♀️', -1)),
							u(
								n,
								{ type: 'primary', onClick: t[0] || (t[0] = (k) => e(s).push(e(a))) },
								{ default: d(() => t[1] || (t[1] = [_(' 返回首页 ')])), _: 1, __: [1] },
							),
						]),
					])
				)
			}
		},
	}),
	j = f(c, [['__scopeId', 'data-v-2f6e0a39']])
export { j as default }
