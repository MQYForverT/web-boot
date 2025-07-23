import {
	r as T,
	b as N,
	u as te,
	g as ne,
	e as re,
	s as M,
	w as ye,
	f as W,
	h as F,
	n as R,
	i as h,
	j as Oe,
	t as ge,
	k as be,
	l as j,
	m as g,
} from './@vue-LY02Q1R7.js'
var we = Object.defineProperty,
	he = Object.defineProperties,
	_e = Object.getOwnPropertyDescriptors,
	B = Object.getOwnPropertySymbols,
	Se = Object.prototype.hasOwnProperty,
	Ee = Object.prototype.propertyIsEnumerable,
	G = (e, t, n) => (t in e ? we(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
	Pe = (e, t) => {
		for (var n in t || (t = {})) Se.call(t, n) && G(e, n, t[n])
		if (B) for (var n of B(t)) Ee.call(t, n) && G(e, n, t[n])
		return e
	},
	Ie = (e, t) => he(e, _e(t))
function ut(e, t) {
	var n
	const r = M()
	return (
		ye(
			() => {
				r.value = e()
			},
			Ie(Pe({}, t), { flush: (n = void 0) != null ? n : 'sync' }),
		),
		N(r)
	)
}
var V
const z = typeof window < 'u',
	$e = (e) => typeof e == 'string',
	Ae = () => {}
z && (V = window?.navigator) != null && V.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent)
function D(e) {
	return typeof e == 'function' ? e() : te(e)
}
function Te(e) {
	return e
}
function L(e) {
	return ne() ? (re(e), !0) : !1
}
function Ne(e, t = !0) {
	W() ? F(e) : t ? e() : R(e)
}
function st(e, t, n = {}) {
	const { immediate: r = !0 } = n,
		i = T(!1)
	let o = null
	function f() {
		o && (clearTimeout(o), (o = null))
	}
	function a() {
		;((i.value = !1), f())
	}
	function u(...c) {
		;(f(),
			(i.value = !0),
			(o = setTimeout(() => {
				;((i.value = !1), (o = null), e(...c))
			}, D(t))))
	}
	return (r && ((i.value = !0), z && u()), L(a), { isPending: N(i), start: u, stop: a })
}
function oe(e) {
	var t
	const n = D(e)
	return (t = n?.$el) != null ? t : n
}
const ie = z ? window : void 0
function lt(...e) {
	let t, n, r, i
	if (($e(e[0]) || Array.isArray(e[0]) ? (([n, r, i] = e), (t = ie)) : ([t, n, r, i] = e), !t)) return Ae
	;(Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]))
	const o = [],
		f = () => {
			;(o.forEach((p) => p()), (o.length = 0))
		},
		a = (p, l, d, m) => (p.addEventListener(l, d, m), () => p.removeEventListener(l, d, m)),
		u = h(
			() => [oe(t), D(i)],
			([p, l]) => {
				;(f(), p && o.push(...n.flatMap((d) => r.map((m) => a(p, d, m, l)))))
			},
			{ immediate: !0, flush: 'post' },
		),
		c = () => {
			;(u(), f())
		}
	return (L(c), c)
}
function je(e, t = !1) {
	const n = T(),
		r = () => (n.value = !!e())
	return (r(), Ne(r, t), n)
}
const H =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
				? window
				: typeof global < 'u'
					? global
					: typeof self < 'u'
						? self
						: {},
	U = '__vueuse_ssr_handlers__'
H[U] = H[U] || {}
var K = Object.getOwnPropertySymbols,
	Ce = Object.prototype.hasOwnProperty,
	Me = Object.prototype.propertyIsEnumerable,
	We = (e, t) => {
		var n = {}
		for (var r in e) Ce.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
		if (e != null && K) for (var r of K(e)) t.indexOf(r) < 0 && Me.call(e, r) && (n[r] = e[r])
		return n
	}
function ct(e, t, n = {}) {
	const r = n,
		{ window: i = ie } = r,
		o = We(r, ['window'])
	let f
	const a = je(() => i && 'ResizeObserver' in i),
		u = () => {
			f && (f.disconnect(), (f = void 0))
		},
		c = h(
			() => oe(e),
			(l) => {
				;(u(), a.value && i && l && ((f = new ResizeObserver(t)), f.observe(l, o)))
			},
			{ immediate: !0, flush: 'post' },
		),
		p = () => {
			;(u(), c())
		}
	return (L(p), { isSupported: a, stop: p })
}
var q
;(function (e) {
	;((e.UP = 'UP'), (e.RIGHT = 'RIGHT'), (e.DOWN = 'DOWN'), (e.LEFT = 'LEFT'), (e.NONE = 'NONE'))
})(q || (q = {}))
var Fe = Object.defineProperty,
	X = Object.getOwnPropertySymbols,
	Re = Object.prototype.hasOwnProperty,
	ze = Object.prototype.propertyIsEnumerable,
	Y = (e, t, n) => (t in e ? Fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
	De = (e, t) => {
		for (var n in t || (t = {})) Re.call(t, n) && Y(e, n, t[n])
		if (X) for (var n of X(t)) ze.call(t, n) && Y(e, n, t[n])
		return e
	}
const Le = {
	easeInSine: [0.12, 0, 0.39, 0],
	easeOutSine: [0.61, 1, 0.88, 1],
	easeInOutSine: [0.37, 0, 0.63, 1],
	easeInQuad: [0.11, 0, 0.5, 0],
	easeOutQuad: [0.5, 1, 0.89, 1],
	easeInOutQuad: [0.45, 0, 0.55, 1],
	easeInCubic: [0.32, 0, 0.67, 0],
	easeOutCubic: [0.33, 1, 0.68, 1],
	easeInOutCubic: [0.65, 0, 0.35, 1],
	easeInQuart: [0.5, 0, 0.75, 0],
	easeOutQuart: [0.25, 1, 0.5, 1],
	easeInOutQuart: [0.76, 0, 0.24, 1],
	easeInQuint: [0.64, 0, 0.78, 0],
	easeOutQuint: [0.22, 1, 0.36, 1],
	easeInOutQuint: [0.83, 0, 0.17, 1],
	easeInExpo: [0.7, 0, 0.84, 0],
	easeOutExpo: [0.16, 1, 0.3, 1],
	easeInOutExpo: [0.87, 0, 0.13, 1],
	easeInCirc: [0.55, 0, 1, 0.45],
	easeOutCirc: [0, 0.55, 0.45, 1],
	easeInOutCirc: [0.85, 0, 0.15, 1],
	easeInBack: [0.36, 0, 0.66, -0.56],
	easeOutBack: [0.34, 1.56, 0.64, 1],
	easeInOutBack: [0.68, -0.6, 0.32, 1.6],
}
De({ linear: Te }, Le)
function k(e) {
	return ne() ? (re(e), !0) : !1
}
function ft(e) {
	let t = !1,
		n
	const r = Oe(!0)
	return (...i) => (t || ((n = r.run(() => e(...i))), (t = !0)), n)
}
const ae = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const ke = (e) => e != null,
	Qe = Object.prototype.toString,
	xe = (e) => Qe.call(e) === '[object Object]',
	Je = () => {}
function ue(...e) {
	if (e.length !== 1) return ge(...e)
	const t = e[0]
	return typeof t == 'function' ? N(be(() => ({ get: t, set: Je }))) : T(t)
}
function Be(e, t) {
	function n(...r) {
		return new Promise((i, o) => {
			Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }))
				.then(i)
				.catch(o)
		})
	}
	return n
}
const se = (e) => e()
function Ge(e = se, t = {}) {
	const { initialState: n = 'active' } = t,
		r = ue(n === 'active')
	function i() {
		r.value = !1
	}
	function o() {
		r.value = !0
	}
	const f = (...a) => {
		r.value && e(...a)
	}
	return { isActive: N(r), pause: i, resume: o, eventFilter: f }
}
function $(e) {
	return Array.isArray(e) ? e : [e]
}
function Ve(e) {
	return W()
}
function He(e, t, n = {}) {
	const { eventFilter: r = se, ...i } = n
	return h(e, Be(r, t), i)
}
function Ue(e, t, n = {}) {
	const { eventFilter: r, initialState: i = 'active', ...o } = n,
		{ eventFilter: f, pause: a, resume: u, isActive: c } = Ge(r, { initialState: i })
	return { stop: He(e, t, { ...o, eventFilter: f }), pause: a, resume: u, isActive: c }
}
function Ke(e, t = !0, n) {
	Ve() ? F(e, n) : t ? e() : R(e)
}
function qe(e, t, n) {
	return h(e, t, { ...n, immediate: !0 })
}
const A = ae ? window : void 0,
	Xe = ae ? window.document : void 0
function le(e) {
	var t
	const n = g(e)
	return (t = n?.$el) != null ? t : n
}
function Z(...e) {
	const t = [],
		n = () => {
			;(t.forEach((a) => a()), (t.length = 0))
		},
		r = (a, u, c, p) => (a.addEventListener(u, c, p), () => a.removeEventListener(u, c, p)),
		i = j(() => {
			const a = $(g(e[0])).filter((u) => u != null)
			return a.every((u) => typeof u != 'string') ? a : void 0
		}),
		o = qe(
			() => {
				var a, u
				return [
					(u = (a = i.value) == null ? void 0 : a.map((c) => le(c))) != null ? u : [A].filter((c) => c != null),
					$(g(i.value ? e[1] : e[0])),
					$(te(i.value ? e[2] : e[1])),
					g(i.value ? e[3] : e[2]),
				]
			},
			([a, u, c, p]) => {
				if ((n(), !a?.length || !u?.length || !c?.length)) return
				const l = xe(p) ? { ...p } : p
				t.push(...a.flatMap((d) => u.flatMap((m) => c.map((_) => r(d, m, _, l)))))
			},
			{ flush: 'post' },
		),
		f = () => {
			;(o(), n())
		}
	return (k(n), f)
}
function Ye() {
	const e = M(!1),
		t = W()
	return (
		t &&
			F(() => {
				e.value = !0
			}, t),
		e
	)
}
function Ze(e) {
	const t = Ye()
	return j(() => (t.value, !!e()))
}
function et(e, t, n = {}) {
	const { window: r = A, ...i } = n
	let o
	const f = Ze(() => r && 'MutationObserver' in r),
		a = () => {
			o && (o.disconnect(), (o = void 0))
		},
		u = j(() => {
			const d = g(e),
				m = $(d).map(le).filter(ke)
			return new Set(m)
		}),
		c = h(
			() => u.value,
			(d) => {
				;(a(), f.value && d.size && ((o = new MutationObserver(t)), d.forEach((m) => o.observe(m, i))))
			},
			{ immediate: !0, flush: 'post' },
		),
		p = () => o?.takeRecords(),
		l = () => {
			;(c(), a())
		}
	return (k(l), { isSupported: f, stop: l, takeRecords: p })
}
const P =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
				? window
				: typeof global < 'u'
					? global
					: typeof self < 'u'
						? self
						: {},
	I = '__vueuse_ssr_handlers__',
	tt = nt()
function nt() {
	return (I in P || (P[I] = P[I] || {}), P[I])
}
function rt(e, t) {
	return tt[e] || t
}
function ot(e) {
	return e == null
		? 'any'
		: e instanceof Set
			? 'set'
			: e instanceof Map
				? 'map'
				: e instanceof Date
					? 'date'
					: typeof e == 'boolean'
						? 'boolean'
						: typeof e == 'string'
							? 'string'
							: typeof e == 'object'
								? 'object'
								: Number.isNaN(e)
									? 'any'
									: 'number'
}
const it = {
		boolean: { read: (e) => e === 'true', write: (e) => String(e) },
		object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
		number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
		any: { read: (e) => e, write: (e) => String(e) },
		string: { read: (e) => e, write: (e) => String(e) },
		map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) },
		set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
		date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
	},
	ee = 'vueuse-storage'
function pt(e, t, n, r = {}) {
	var i
	const {
			flush: o = 'pre',
			deep: f = !0,
			listenToStorageChanges: a = !0,
			writeDefaults: u = !0,
			mergeDefaults: c = !1,
			shallow: p,
			window: l = A,
			eventFilter: d,
			onError: m = (s) => {
				console.error(s)
			},
			initOnMounted: _,
		} = r,
		b = (p ? M : T)(typeof t == 'function' ? t() : t),
		O = j(() => g(e))
	if (!n)
		try {
			n = rt('getDefaultStorage', () => {
				var s
				return (s = A) == null ? void 0 : s.localStorage
			})()
		} catch (s) {
			m(s)
		}
	if (!n) return b
	const w = g(t),
		Q = ot(w),
		S = (i = r.serializer) != null ? i : it[Q],
		{ pause: ce, resume: x } = Ue(b, () => de(b.value), { flush: o, deep: f, eventFilter: d })
	h(O, () => E(), { flush: o })
	let C = !1
	const fe = (s) => {
			;(_ && !C) || E(s)
		},
		pe = (s) => {
			;(_ && !C) || me(s)
		}
	;(l && a && (n instanceof Storage ? Z(l, 'storage', fe, { passive: !0 }) : Z(l, ee, pe)),
		_
			? Ke(() => {
					;((C = !0), E())
				})
			: E())
	function J(s, v) {
		if (l) {
			const y = { key: O.value, oldValue: s, newValue: v, storageArea: n }
			l.dispatchEvent(n instanceof Storage ? new StorageEvent('storage', y) : new CustomEvent(ee, { detail: y }))
		}
	}
	function de(s) {
		try {
			const v = n.getItem(O.value)
			if (s == null) (J(v, null), n.removeItem(O.value))
			else {
				const y = S.write(s)
				v !== y && (n.setItem(O.value, y), J(v, y))
			}
		} catch (v) {
			m(v)
		}
	}
	function ve(s) {
		const v = s ? s.newValue : n.getItem(O.value)
		if (v == null) return (u && w != null && n.setItem(O.value, S.write(w)), w)
		if (!s && c) {
			const y = S.read(v)
			return typeof c == 'function' ? c(y, w) : Q === 'object' && !Array.isArray(y) ? { ...w, ...y } : y
		} else return typeof v != 'string' ? v : S.read(v)
	}
	function E(s) {
		if (!(s && s.storageArea !== n)) {
			if (s && s.key == null) {
				b.value = w
				return
			}
			if (!(s && s.key !== O.value)) {
				ce()
				try {
					s?.newValue !== S.write(b.value) && (b.value = ve(s))
				} catch (v) {
					m(v)
				} finally {
					s ? R(x) : x()
				}
			}
		}
	}
	function me(s) {
		E(s.detail)
	}
	return b
}
function dt(e = null, t = {}) {
	var n, r, i
	const { document: o = Xe, restoreOnUnmount: f = (l) => l } = t,
		a = (n = o?.title) != null ? n : '',
		u = ue((r = e ?? o?.title) != null ? r : null),
		c = !!(e && typeof e == 'function')
	function p(l) {
		if (!('titleTemplate' in t)) return l
		const d = t.titleTemplate || '%s'
		return typeof d == 'function' ? d(l) : g(d).replace(/%s/g, l)
	}
	return (
		h(
			u,
			(l, d) => {
				l !== d && o && (o.title = p(l ?? ''))
			},
			{ immediate: !0 },
		),
		t.observe &&
			!t.titleTemplate &&
			o &&
			!c &&
			et(
				(i = o.head) == null ? void 0 : i.querySelector('title'),
				() => {
					o && o.title !== u.value && (u.value = p(o.title))
				},
				{ childList: !0 },
			),
		k(() => {
			if (f) {
				const l = f(a, u.value || '')
				l != null && o && (o.title = l)
			}
		}),
		u
	)
}
export { ct as a, st as b, ut as c, ft as d, pt as e, dt as f, z as i, lt as u }
