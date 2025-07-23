import { $ as c, u as m, H as f } from './index-Ce54hKLs.js'
import { u as p } from './vue-router-B5CAqlxG.js'
import { E as d } from './element-plus-OyV65AEN.js'
import { d as g, r as _, l as h, c as y, o as b, u as n } from './@vue-LY02Q1R7.js'
import './@vueuse-X6khJhCi.js'
import './@element-plus-Bgg1-Uv-.js'
import './@ctrl-r5W6hzzQ.js'
import './lodash-es-CbM95Pub.js'
const w = (r, o) => c.post('/auth/login', r, o),
	k = ['account', 'layout'],
	q = g({
		__name: 'index',
		setup(r) {
			const o = p(),
				s = _({
					account: {
						username: {
							show: !0,
							field: 'username',
							placeholder: '用户名',
							default: 'emilys',
							validate: { required: !0, message: '必须输入用户名' },
							btnLabel: '获取验证码',
						},
						password: {
							show: !0,
							field: 'password',
							placeholder: '密码',
							default: 'emilyspass',
							validate: { required: !0, message: '必须输入密码' },
						},
					},
					layout: 'right',
				}),
				u = (t) => {
					let e = new Date(t).getHours()
					return e < 6
						? '凌晨好'
						: e < 9
							? '早上好'
							: e < 12
								? '上午好'
								: e < 14
									? '中午好'
									: e < 17
										? '下午好'
										: e < 19
											? '傍晚好'
											: e < 22
												? '晚上好'
												: '夜里好'
				},
				a = h(() => u(new Date())),
				i = async ({ detail: t = [] }) => {
					t[0]
					const e = await w(t[0]),
						l = a.value
					;((m().token.value = e.accessToken), o.push(f), d.success(`${l}，欢迎回来！`))
				}
			return (t, e) => (
				b(),
				y(
					'tsoul-background-login',
					{ account: JSON.stringify(n(s).account), layout: n(s).layout, onSubmit: i },
					null,
					40,
					k,
				)
			)
		},
	})
export { q as default }
