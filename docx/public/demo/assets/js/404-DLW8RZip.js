import { b as n } from './element-plus-OyV65AEN.js'
import { H as i } from './index-Ce54hKLs.js'
import { u as a } from './vue-router-B5CAqlxG.js'
import { d as p, c as m, o as l, a as o, P as u, M as d, u as e, V as _ } from './@vue-LY02Q1R7.js'
import { _ as f } from './_plugin-vue_export-helper-DlAUqK2U.js'
import './@vueuse-X6khJhCi.js'
import './@element-plus-Bgg1-Uv-.js'
import './@ctrl-r5W6hzzQ.js'
import './lodash-es-CbM95Pub.js'
const v = { class: 'not-container' },
	x = { class: 'not-detail' },
	c = p({
		__name: '404',
		setup(B) {
			const s = a()
			return (V, t) => {
				const r = n
				return (
					l(),
					m('div', v, [
						t[4] || (t[4] = o('span', { 'i-twemoji-flying-saucer': '', 'text-40': '' }, null, -1)),
						o('div', x, [
							t[2] || (t[2] = o('div', null, '404', -1)),
							t[3] || (t[3] = o('div', null, '抱歉，您访问的页面不存在~ 🤷‍♂️🤷‍♀️', -1)),
							u(
								r,
								{ type: 'primary', onClick: t[0] || (t[0] = (b) => e(s).push(e(i))) },
								{ default: d(() => t[1] || (t[1] = [_(' 返回首页 ')])), _: 1, __: [1] },
							),
						]),
					])
				)
			}
		},
	}),
	g = f(c, [['__scopeId', 'data-v-295e21b1']])
export { g as default }
