import { b as n } from './element-plus-OyV65AEN.js'
import { H as i } from './index-Ce54hKLs.js'
import { u as a } from './vue-router-B5CAqlxG.js'
import { d as p, c as m, o as u, a as o, P as l, M as d, u as s, V as _ } from './@vue-LY02Q1R7.js'
import { _ as f } from './_plugin-vue_export-helper-DlAUqK2U.js'
import './@vueuse-X6khJhCi.js'
import './@element-plus-Bgg1-Uv-.js'
import './@ctrl-r5W6hzzQ.js'
import './lodash-es-CbM95Pub.js'
const c = { class: 'not-container' },
	v = { class: 'not-detail' },
	x = p({
		__name: '403',
		setup(B) {
			const e = a()
			return (V, t) => {
				const r = n
				return (
					u(),
					m('div', c, [
						t[4] || (t[4] = o('span', { 'i-twemoji-construction': '', 'text-40': '' }, null, -1)),
						o('div', v, [
							t[2] || (t[2] = o('div', null, '403', -1)),
							t[3] || (t[3] = o('div', null, '抱歉，您无权访问该页面~ 🙅‍♂️🙅‍♀️', -1)),
							l(
								r,
								{ type: 'primary', onClick: t[0] || (t[0] = (k) => s(e).push(s(i))) },
								{ default: d(() => t[1] || (t[1] = [_(' 返回首页 ')])), _: 1, __: [1] },
							),
						]),
					])
				)
			}
		},
	}),
	j = f(x, [['__scopeId', 'data-v-5c4cc8c3']])
export { j as default }
