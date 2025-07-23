import {
	d as L,
	r as m,
	l as f,
	a7 as M,
	a2 as O,
	c as C,
	o as i,
	a as T,
	P as p,
	M as g,
	X as b,
	L as v,
	a8 as A,
	u as s,
	O as N,
	n as R,
} from './@vue-LY02Q1R7.js'
import { a as d, u as S, H as V } from './index-Ce54hKLs.js'
import { u as E } from './vue-router-B5CAqlxG.js'
import { c as J, d as P } from './element-plus-OyV65AEN.js'
import './@vueuse-X6khJhCi.js'
import './@element-plus-Bgg1-Uv-.js'
import './@ctrl-r5W6hzzQ.js'
import './lodash-es-CbM95Pub.js'
const U = ['menuList', 'userAvatar', 'settingVisible', 'watermark'],
	q = { slot: 'main' },
	Q = L({
		__name: 'index',
		setup(D) {
			const o = m(''),
				n = E(),
				{ routeList: h, keepAliveNames: _ } = d(),
				k = f(() => _.value.map((e) => e.name)),
				u = (e) => ({
					path: e.path || '',
					title: e.meta?.title || '',
					icon: e.meta?.icon,
					redirect: e.redirect,
					isShowFooter: e.meta?.isShowFooter,
					affix: e.meta?.isAffix,
					children: e.children?.map(u),
				}),
				c = f(() => h.value.map(u)),
				t = m({
					menuList: c.value,
					userAvatar: {
						show: !0,
						trigger: 'click',
						name: '12',
						dropdownMenu: [
							{ key: 'loginOut', value: '退出登录' },
							{ key: 'setting', value: '个性设置' },
						],
					},
					watermark: { text: '漠轻阴666' },
					settingVisible: !1,
				}),
				w = ({ detail: e = [] }) => {
					n.push(e[0])
				},
				y = async ({ detail: e = [] }) => {
					;((o.value = ''),
						await R(),
						n.replace({ path: e[0], query: { ...n.currentRoute.value.query, _t: Date.now() } }),
						(o.value = e[0]))
				},
				x = ({ detail: e = [] }) => {
					;(e[0] === 'setting' && (t.value.settingVisible = !0),
						e[0] === 'loginOut' &&
							J({
								closeOnClickModal: !1,
								closeOnPressEscape: !1,
								type: 'warning',
								title: '提示',
								message: '此操作将退出登录, 是否继续?',
								showCancelButton: !0,
								confirmButtonText: '确定',
								cancelButtonText: '取消',
								beforeClose: (l, a, r) => {
									l === 'confirm'
										? ((a.confirmButtonLoading = !0),
											(a.confirmButtonText = '退出中'),
											setTimeout(() => {
												;(r(),
													setTimeout(() => {
														a.confirmButtonLoading = !1
													}, 300))
											}, 700))
										: r()
								},
							})
								.then(() => {
									;((S().token.value = ''),
										d().resetRoute(),
										n.push(V),
										setTimeout(() => {
											P.success('安全退出成功！')
										}, 300))
								})
								.catch(() => {}))
				},
				B = ({ detail: e = [] }) => {
					t.value[e[0]] = e[1]
				}
			return (
				M(() => {
					o.value = c.value[0].path
				}),
				(e, l) => {
					const a = O('router-view')
					return (
						i(),
						C(
							'tsoul-background-layout',
							{
								menuList: JSON.stringify(s(t).menuList),
								userAvatar: JSON.stringify(s(t).userAvatar),
								settingVisible: JSON.stringify(s(t).settingVisible),
								watermark: JSON.stringify(s(t).watermark),
								'on:changeProp': B,
								'on:selectMenu': w,
								'on:commandUser': x,
								'on:tagRefresh': y,
							},
							[
								T('div', q, [
									p(a, null, {
										default: g(({ Component: r }) => [
											p(
												b,
												{ mode: 'out-in' },
												{
													default: g(() => [
														(i(), v(A, { include: s(k), key: s(o) }, [(i(), v(N(r)))], 1032, ['include'])),
													]),
													_: 2,
												},
												1024,
											),
										]),
										_: 1,
									}),
								]),
							],
							40,
							U,
						)
					)
				}
			)
		},
	})
export { Q as default }
