function lt(e, n) {
	var t = Object.keys(e)
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e)
		;(n &&
			(o = o.filter(function (r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable
			})),
			t.push.apply(t, o))
	}
	return t
}
function W(e) {
	for (var n = 1; n < arguments.length; n++) {
		var t = arguments[n] != null ? arguments[n] : {}
		n % 2
			? lt(Object(t), !0).forEach(function (o) {
					It(e, o, t[o])
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
				: lt(Object(t)).forEach(function (o) {
						Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
					})
	}
	return e
}
function Ie(e) {
	'@babel/helpers - typeof'
	return (
		typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
			? (Ie = function (n) {
					return typeof n
				})
			: (Ie = function (n) {
					return n && typeof Symbol == 'function' && n.constructor === Symbol && n !== Symbol.prototype
						? 'symbol'
						: typeof n
				}),
		Ie(e)
	)
}
function It(e, n, t) {
	return (
		n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t),
		e
	)
}
function q() {
	return (
		(q =
			Object.assign ||
			function (e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = arguments[n]
					for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
				}
				return e
			}),
		q.apply(this, arguments)
	)
}
function Mt(e, n) {
	if (e == null) return {}
	var t = {},
		o = Object.keys(e),
		r,
		i
	for (i = 0; i < o.length; i++) ((r = o[i]), !(n.indexOf(r) >= 0) && (t[r] = e[r]))
	return t
}
function kt(e, n) {
	if (e == null) return {}
	var t = Mt(e, n),
		o,
		r
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(e)
		for (r = 0; r < i.length; r++)
			((o = i[r]), !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]))
	}
	return t
}
var Xt = '1.15.6'
function V(e) {
	if (typeof window < 'u' && window.navigator) return !!navigator.userAgent.match(e)
}
var Q = V(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
	Te = V(/Edge/i),
	st = V(/firefox/i),
	we = V(/safari/i) && !V(/chrome/i) && !V(/android/i),
	nt = V(/iP(ad|od|hone)/i),
	vt = V(/chrome/i) && V(/android/i),
	mt = { capture: !1, passive: !1 }
function b(e, n, t) {
	e.addEventListener(n, t, !Q && mt)
}
function m(e, n, t) {
	e.removeEventListener(n, t, !Q && mt)
}
function Re(e, n) {
	if (n) {
		if ((n[0] === '>' && (n = n.substring(1)), e))
			try {
				if (e.matches) return e.matches(n)
				if (e.msMatchesSelector) return e.msMatchesSelector(n)
				if (e.webkitMatchesSelector) return e.webkitMatchesSelector(n)
			} catch {
				return !1
			}
		return !1
	}
}
function bt(e) {
	return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
}
function j(e, n, t, o) {
	if (e) {
		t = t || document
		do {
			if ((n != null && (n[0] === '>' ? e.parentNode === t && Re(e, n) : Re(e, n))) || (o && e === t)) return e
			if (e === t) break
		} while ((e = bt(e)))
	}
	return null
}
var ut = /\s+/g
function X(e, n, t) {
	if (e && n)
		if (e.classList) e.classList[t ? 'add' : 'remove'](n)
		else {
			var o = (' ' + e.className + ' ').replace(ut, ' ').replace(' ' + n + ' ', ' ')
			e.className = (o + (t ? ' ' + n : '')).replace(ut, ' ')
		}
}
function h(e, n, t) {
	var o = e && e.style
	if (o) {
		if (t === void 0)
			return (
				document.defaultView && document.defaultView.getComputedStyle
					? (t = document.defaultView.getComputedStyle(e, ''))
					: e.currentStyle && (t = e.currentStyle),
				n === void 0 ? t : t[n]
			)
		;(!(n in o) && n.indexOf('webkit') === -1 && (n = '-webkit-' + n), (o[n] = t + (typeof t == 'string' ? '' : 'px')))
	}
}
function he(e, n) {
	var t = ''
	if (typeof e == 'string') t = e
	else
		do {
			var o = h(e, 'transform')
			o && o !== 'none' && (t = o + ' ' + t)
		} while (!n && (e = e.parentNode))
	var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix
	return r && new r(t)
}
function yt(e, n, t) {
	if (e) {
		var o = e.getElementsByTagName(n),
			r = 0,
			i = o.length
		if (t) for (; r < i; r++) t(o[r], r)
		return o
	}
	return []
}
function L() {
	var e = document.scrollingElement
	return e || document.documentElement
}
function T(e, n, t, o, r) {
	if (!(!e.getBoundingClientRect && e !== window)) {
		var i, a, u, l, c, d, f
		if (
			(e !== window && e.parentNode && e !== L()
				? ((i = e.getBoundingClientRect()),
					(a = i.top),
					(u = i.left),
					(l = i.bottom),
					(c = i.right),
					(d = i.height),
					(f = i.width))
				: ((a = 0),
					(u = 0),
					(l = window.innerHeight),
					(c = window.innerWidth),
					(d = window.innerHeight),
					(f = window.innerWidth)),
			(n || t) && e !== window && ((r = r || e.parentNode), !Q))
		)
			do
				if (r && r.getBoundingClientRect && (h(r, 'transform') !== 'none' || (t && h(r, 'position') !== 'static'))) {
					var w = r.getBoundingClientRect()
					;((a -= w.top + parseInt(h(r, 'border-top-width'))),
						(u -= w.left + parseInt(h(r, 'border-left-width'))),
						(l = a + i.height),
						(c = u + i.width))
					break
				}
			while ((r = r.parentNode))
		if (o && e !== window) {
			var v = he(r || e),
				C = v && v.a,
				y = v && v.d
			v && ((a /= y), (u /= C), (f /= C), (d /= y), (l = a + d), (c = u + f))
		}
		return { top: a, left: u, bottom: l, right: c, width: f, height: d }
	}
}
function ct(e, n, t) {
	for (var o = $(e, !0), r = T(e)[n]; o; ) {
		var i = T(o)[t],
			a = void 0
		if (((a = r >= i), !a)) return o
		if (o === L()) break
		o = $(o, !1)
	}
	return !1
}
function pe(e, n, t, o) {
	for (var r = 0, i = 0, a = e.children; i < a.length; ) {
		if (a[i].style.display !== 'none' && a[i] !== p.ghost && (o || a[i] !== p.dragged) && j(a[i], t.draggable, e, !1)) {
			if (r === n) return a[i]
			r++
		}
		i++
	}
	return null
}
function ot(e, n) {
	for (var t = e.lastElementChild; t && (t === p.ghost || h(t, 'display') === 'none' || (n && !Re(t, n))); )
		t = t.previousElementSibling
	return t || null
}
function R(e, n) {
	var t = 0
	if (!e || !e.parentNode) return -1
	for (; (e = e.previousElementSibling); )
		e.nodeName.toUpperCase() !== 'TEMPLATE' && e !== p.clone && (!n || Re(e, n)) && t++
	return t
}
function dt(e) {
	var n = 0,
		t = 0,
		o = L()
	if (e)
		do {
			var r = he(e),
				i = r.a,
				a = r.d
			;((n += e.scrollLeft * i), (t += e.scrollTop * a))
		} while (e !== o && (e = e.parentNode))
	return [n, t]
}
function Yt(e, n) {
	for (var t in e)
		if (e.hasOwnProperty(t)) {
			for (var o in n) if (n.hasOwnProperty(o) && n[o] === e[t][o]) return Number(t)
		}
	return -1
}
function $(e, n) {
	if (!e || !e.getBoundingClientRect) return L()
	var t = e,
		o = !1
	do
		if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
			var r = h(t)
			if (
				(t.clientWidth < t.scrollWidth && (r.overflowX == 'auto' || r.overflowX == 'scroll')) ||
				(t.clientHeight < t.scrollHeight && (r.overflowY == 'auto' || r.overflowY == 'scroll'))
			) {
				if (!t.getBoundingClientRect || t === document.body) return L()
				if (o || n) return t
				o = !0
			}
		}
	while ((t = t.parentNode))
	return L()
}
function Rt(e, n) {
	if (e && n) for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
	return e
}
function Fe(e, n) {
	return (
		Math.round(e.top) === Math.round(n.top) &&
		Math.round(e.left) === Math.round(n.left) &&
		Math.round(e.height) === Math.round(n.height) &&
		Math.round(e.width) === Math.round(n.width)
	)
}
var De
function wt(e, n) {
	return function () {
		if (!De) {
			var t = arguments,
				o = this
			;(t.length === 1 ? e.call(o, t[0]) : e.apply(o, t),
				(De = setTimeout(function () {
					De = void 0
				}, n)))
		}
	}
}
function Bt() {
	;(clearTimeout(De), (De = void 0))
}
function Dt(e, n, t) {
	;((e.scrollLeft += n), (e.scrollTop += t))
}
function Et(e) {
	var n = window.Polymer,
		t = window.jQuery || window.Zepto
	return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0)
}
function _t(e, n, t) {
	var o = {}
	return (
		Array.from(e.children).forEach(function (r) {
			var i, a, u, l
			if (!(!j(r, n.draggable, e, !1) || r.animated || r === t)) {
				var c = T(r)
				;((o.left = Math.min((i = o.left) !== null && i !== void 0 ? i : 1 / 0, c.left)),
					(o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, c.top)),
					(o.right = Math.max((u = o.right) !== null && u !== void 0 ? u : -1 / 0, c.right)),
					(o.bottom = Math.max((l = o.bottom) !== null && l !== void 0 ? l : -1 / 0, c.bottom)))
			}
		}),
		(o.width = o.right - o.left),
		(o.height = o.bottom - o.top),
		(o.x = o.left),
		(o.y = o.top),
		o
	)
}
var M = 'Sortable' + new Date().getTime()
function jt() {
	var e = [],
		n
	return {
		captureAnimationState: function () {
			if (((e = []), !!this.options.animation)) {
				var t = [].slice.call(this.el.children)
				t.forEach(function (o) {
					if (!(h(o, 'display') === 'none' || o === p.ghost)) {
						e.push({ target: o, rect: T(o) })
						var r = W({}, e[e.length - 1].rect)
						if (o.thisAnimationDuration) {
							var i = he(o, !0)
							i && ((r.top -= i.f), (r.left -= i.e))
						}
						o.fromRect = r
					}
				})
			}
		},
		addAnimationState: function (t) {
			e.push(t)
		},
		removeAnimationState: function (t) {
			e.splice(Yt(e, { target: t }), 1)
		},
		animateAll: function (t) {
			var o = this
			if (!this.options.animation) {
				;(clearTimeout(n), typeof t == 'function' && t())
				return
			}
			var r = !1,
				i = 0
			;(e.forEach(function (a) {
				var u = 0,
					l = a.target,
					c = l.fromRect,
					d = T(l),
					f = l.prevFromRect,
					w = l.prevToRect,
					v = a.rect,
					C = he(l, !0)
				;(C && ((d.top -= C.f), (d.left -= C.e)),
					(l.toRect = d),
					l.thisAnimationDuration &&
						Fe(f, d) &&
						!Fe(c, d) &&
						(v.top - d.top) / (v.left - d.left) === (c.top - d.top) / (c.left - d.left) &&
						(u = Lt(v, f, w, o.options)),
					Fe(d, c) || ((l.prevFromRect = c), (l.prevToRect = d), u || (u = o.options.animation), o.animate(l, v, d, u)),
					u &&
						((r = !0),
						(i = Math.max(i, u)),
						clearTimeout(l.animationResetTimer),
						(l.animationResetTimer = setTimeout(function () {
							;((l.animationTime = 0),
								(l.prevFromRect = null),
								(l.fromRect = null),
								(l.prevToRect = null),
								(l.thisAnimationDuration = null))
						}, u)),
						(l.thisAnimationDuration = u)))
			}),
				clearTimeout(n),
				r
					? (n = setTimeout(function () {
							typeof t == 'function' && t()
						}, i))
					: typeof t == 'function' && t(),
				(e = []))
		},
		animate: function (t, o, r, i) {
			if (i) {
				;(h(t, 'transition', ''), h(t, 'transform', ''))
				var a = he(this.el),
					u = a && a.a,
					l = a && a.d,
					c = (o.left - r.left) / (u || 1),
					d = (o.top - r.top) / (l || 1)
				;((t.animatingX = !!c),
					(t.animatingY = !!d),
					h(t, 'transform', 'translate3d(' + c + 'px,' + d + 'px,0)'),
					(this.forRepaintDummy = Ht(t)),
					h(t, 'transition', 'transform ' + i + 'ms' + (this.options.easing ? ' ' + this.options.easing : '')),
					h(t, 'transform', 'translate3d(0,0,0)'),
					typeof t.animated == 'number' && clearTimeout(t.animated),
					(t.animated = setTimeout(function () {
						;(h(t, 'transition', ''),
							h(t, 'transform', ''),
							(t.animated = !1),
							(t.animatingX = !1),
							(t.animatingY = !1))
					}, i)))
			}
		},
	}
}
function Ht(e) {
	return e.offsetWidth
}
function Lt(e, n, t, o) {
	return (
		(Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) /
			Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2))) *
		o.animation
	)
}
var ue = [],
	ze = { initializeByDefault: !0 },
	Ce = {
		mount: function (e) {
			for (var n in ze) ze.hasOwnProperty(n) && !(n in e) && (e[n] = ze[n])
			;(ue.forEach(function (t) {
				if (t.pluginName === e.pluginName)
					throw 'Sortable: Cannot mount plugin '.concat(e.pluginName, ' more than once')
			}),
				ue.push(e))
		},
		pluginEvent: function (e, n, t) {
			var o = this
			;((this.eventCanceled = !1),
				(t.cancel = function () {
					o.eventCanceled = !0
				}))
			var r = e + 'Global'
			ue.forEach(function (i) {
				n[i.pluginName] &&
					(n[i.pluginName][r] && n[i.pluginName][r](W({ sortable: n }, t)),
					n.options[i.pluginName] && n[i.pluginName][e] && n[i.pluginName][e](W({ sortable: n }, t)))
			})
		},
		initializePlugins: function (e, n, t, o) {
			ue.forEach(function (a) {
				var u = a.pluginName
				if (!(!e.options[u] && !a.initializeByDefault)) {
					var l = new a(e, n, e.options)
					;((l.sortable = e), (l.options = e.options), (e[u] = l), q(t, l.defaults))
				}
			})
			for (var r in e.options)
				if (e.options.hasOwnProperty(r)) {
					var i = this.modifyOption(e, r, e.options[r])
					typeof i < 'u' && (e.options[r] = i)
				}
		},
		getEventProperties: function (e, n) {
			var t = {}
			return (
				ue.forEach(function (o) {
					typeof o.eventProperties == 'function' && q(t, o.eventProperties.call(n[o.pluginName], e))
				}),
				t
			)
		},
		modifyOption: function (e, n, t) {
			var o
			return (
				ue.forEach(function (r) {
					e[r.pluginName] &&
						r.optionListeners &&
						typeof r.optionListeners[n] == 'function' &&
						(o = r.optionListeners[n].call(e[r.pluginName], t))
				}),
				o
			)
		},
	}
function Wt(e) {
	var n = e.sortable,
		t = e.rootEl,
		o = e.name,
		r = e.targetEl,
		i = e.cloneEl,
		a = e.toEl,
		u = e.fromEl,
		l = e.oldIndex,
		c = e.newIndex,
		d = e.oldDraggableIndex,
		f = e.newDraggableIndex,
		w = e.originalEvent,
		v = e.putSortable,
		C = e.extraEventProperties
	if (((n = n || (t && t[M])), !!n)) {
		var y,
			F = n.options,
			P = 'on' + o.charAt(0).toUpperCase() + o.substr(1)
		;(window.CustomEvent && !Q && !Te
			? (y = new CustomEvent(o, { bubbles: !0, cancelable: !0 }))
			: ((y = document.createEvent('Event')), y.initEvent(o, !0, !0)),
			(y.to = a || t),
			(y.from = u || t),
			(y.item = r || t),
			(y.clone = i),
			(y.oldIndex = l),
			(y.newIndex = c),
			(y.oldDraggableIndex = d),
			(y.newDraggableIndex = f),
			(y.originalEvent = w),
			(y.pullMode = v ? v.lastPutMode : void 0))
		var z = W(W({}, C), Ce.getEventProperties(o, n))
		for (var O in z) y[O] = z[O]
		;(t && t.dispatchEvent(y), F[P] && F[P].call(n, y))
	}
}
var Ft = ['evt'],
	I = function (e, n) {
		var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
			o = t.evt,
			r = kt(t, Ft)
		Ce.pluginEvent.bind(p)(
			e,
			n,
			W(
				{
					dragEl: s,
					parentEl: _,
					ghostEl: g,
					rootEl: D,
					nextEl: ae,
					lastDownEl: Me,
					cloneEl: E,
					cloneHidden: K,
					dragStarted: me,
					putSortable: x,
					activeSortable: p.active,
					originalEvent: o,
					oldIndex: fe,
					oldDraggableIndex: Ee,
					newIndex: Y,
					newDraggableIndex: Z,
					hideGhostForTarget: xt,
					unhideGhostForTarget: Ot,
					cloneNowHidden: function () {
						K = !0
					},
					cloneNowShown: function () {
						K = !1
					},
					dispatchSortableEvent: function (i) {
						A({ sortable: n, name: i, originalEvent: o })
					},
				},
				r,
			),
		)
	}
function A(e) {
	Wt(
		W(
			{
				putSortable: x,
				cloneEl: E,
				targetEl: s,
				rootEl: D,
				oldIndex: fe,
				oldDraggableIndex: Ee,
				newIndex: Y,
				newDraggableIndex: Z,
			},
			e,
		),
	)
}
var s,
	_,
	g,
	D,
	ae,
	Me,
	E,
	K,
	fe,
	Y,
	Ee,
	Z,
	Oe,
	x,
	de = !1,
	Be = !1,
	je = [],
	re,
	B,
	Ue,
	Ve,
	ft,
	ht,
	me,
	ce,
	_e,
	Se = !1,
	Ne = !1,
	ke,
	N,
	qe = [],
	Ke = !1,
	He = [],
	We = typeof document < 'u',
	Pe = nt,
	pt = Te || Q ? 'cssFloat' : 'float',
	zt = We && !vt && !nt && 'draggable' in document.createElement('div'),
	St = (function () {
		if (We) {
			if (Q) return !1
			var e = document.createElement('x')
			return ((e.style.cssText = 'pointer-events:auto'), e.style.pointerEvents === 'auto')
		}
	})(),
	Tt = function (e, n) {
		var t = h(e),
			o =
				parseInt(t.width) -
				parseInt(t.paddingLeft) -
				parseInt(t.paddingRight) -
				parseInt(t.borderLeftWidth) -
				parseInt(t.borderRightWidth),
			r = pe(e, 0, n),
			i = pe(e, 1, n),
			a = r && h(r),
			u = i && h(i),
			l = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + T(r).width,
			c = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + T(i).width
		if (t.display === 'flex')
			return t.flexDirection === 'column' || t.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal'
		if (t.display === 'grid') return t.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal'
		if (r && a.float && a.float !== 'none') {
			var d = a.float === 'left' ? 'left' : 'right'
			return i && (u.clear === 'both' || u.clear === d) ? 'vertical' : 'horizontal'
		}
		return r &&
			(a.display === 'block' ||
				a.display === 'flex' ||
				a.display === 'table' ||
				a.display === 'grid' ||
				(l >= o && t[pt] === 'none') ||
				(i && t[pt] === 'none' && l + c > o))
			? 'vertical'
			: 'horizontal'
	},
	Ut = function (e, n, t) {
		var o = t ? e.left : e.top,
			r = t ? e.right : e.bottom,
			i = t ? e.width : e.height,
			a = t ? n.left : n.top,
			u = t ? n.right : n.bottom,
			l = t ? n.width : n.height
		return o === a || r === u || o + i / 2 === a + l / 2
	},
	Vt = function (e, n) {
		var t
		return (
			je.some(function (o) {
				var r = o[M].options.emptyInsertThreshold
				if (!(!r || ot(o))) {
					var i = T(o),
						a = e >= i.left - r && e <= i.right + r,
						u = n >= i.top - r && n <= i.bottom + r
					if (a && u) return (t = o)
				}
			}),
			t
		)
	},
	Ct = function (e) {
		function n(r, i) {
			return function (a, u, l, c) {
				var d = a.options.group.name && u.options.group.name && a.options.group.name === u.options.group.name
				if (r == null && (i || d)) return !0
				if (r == null || r === !1) return !1
				if (i && r === 'clone') return r
				if (typeof r == 'function') return n(r(a, u, l, c), i)(a, u, l, c)
				var f = (i ? a : u).options.group.name
				return r === !0 || (typeof r == 'string' && r === f) || (r.join && r.indexOf(f) > -1)
			}
		}
		var t = {},
			o = e.group
		;((!o || Ie(o) != 'object') && (o = { name: o }),
			(t.name = o.name),
			(t.checkPull = n(o.pull, !0)),
			(t.checkPut = n(o.put)),
			(t.revertClone = o.revertClone),
			(e.group = t))
	},
	xt = function () {
		!St && g && h(g, 'display', 'none')
	},
	Ot = function () {
		!St && g && h(g, 'display', '')
	}
We &&
	!vt &&
	document.addEventListener(
		'click',
		function (e) {
			if (Be)
				return (
					e.preventDefault(),
					e.stopPropagation && e.stopPropagation(),
					e.stopImmediatePropagation && e.stopImmediatePropagation(),
					(Be = !1),
					!1
				)
		},
		!0,
	)
var ie = function (e) {
		if (s) {
			e = e.touches ? e.touches[0] : e
			var n = Vt(e.clientX, e.clientY)
			if (n) {
				var t = {}
				for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
				;((t.target = t.rootEl = n), (t.preventDefault = void 0), (t.stopPropagation = void 0), n[M]._onDragOver(t))
			}
		}
	},
	qt = function (e) {
		s && s.parentNode[M]._isOutsideThisEl(e.target)
	}
function p(e, n) {
	if (!(e && e.nodeType && e.nodeType === 1))
		throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(e))
	;((this.el = e), (this.options = n = q({}, n)), (e[M] = this))
	var t = {
		group: null,
		sort: !0,
		disabled: !1,
		store: null,
		handle: null,
		draggable: /^[uo]l$/i.test(e.nodeName) ? '>li' : '>*',
		swapThreshold: 1,
		invertSwap: !1,
		invertedSwapThreshold: null,
		removeCloneOnHide: !0,
		direction: function () {
			return Tt(e, this.options)
		},
		ghostClass: 'sortable-ghost',
		chosenClass: 'sortable-chosen',
		dragClass: 'sortable-drag',
		ignore: 'a, img',
		filter: null,
		preventOnFilter: !0,
		animation: 0,
		easing: null,
		setData: function (i, a) {
			i.setData('Text', a.textContent)
		},
		dropBubble: !1,
		dragoverBubble: !1,
		dataIdAttr: 'data-id',
		delay: 0,
		delayOnTouchOnly: !1,
		touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
		forceFallback: !1,
		fallbackClass: 'sortable-fallback',
		fallbackOnBody: !1,
		fallbackTolerance: 0,
		fallbackOffset: { x: 0, y: 0 },
		supportPointer: p.supportPointer !== !1 && 'PointerEvent' in window && (!we || nt),
		emptyInsertThreshold: 5,
	}
	Ce.initializePlugins(this, e, t)
	for (var o in t) !(o in n) && (n[o] = t[o])
	Ct(n)
	for (var r in this) r.charAt(0) === '_' && typeof this[r] == 'function' && (this[r] = this[r].bind(this))
	;((this.nativeDraggable = n.forceFallback ? !1 : zt),
		this.nativeDraggable && (this.options.touchStartThreshold = 1),
		n.supportPointer
			? b(e, 'pointerdown', this._onTapStart)
			: (b(e, 'mousedown', this._onTapStart), b(e, 'touchstart', this._onTapStart)),
		this.nativeDraggable && (b(e, 'dragover', this), b(e, 'dragenter', this)),
		je.push(this.el),
		n.store && n.store.get && this.sort(n.store.get(this) || []),
		q(this, jt()))
}
p.prototype = {
	constructor: p,
	_isOutsideThisEl: function (e) {
		!this.el.contains(e) && e !== this.el && (ce = null)
	},
	_getDirection: function (e, n) {
		return typeof this.options.direction == 'function'
			? this.options.direction.call(this, e, n, s)
			: this.options.direction
	},
	_onTapStart: function (e) {
		if (e.cancelable) {
			var n = this,
				t = this.el,
				o = this.options,
				r = o.preventOnFilter,
				i = e.type,
				a = (e.touches && e.touches[0]) || (e.pointerType && e.pointerType === 'touch' && e),
				u = (a || e).target,
				l = (e.target.shadowRoot && ((e.path && e.path[0]) || (e.composedPath && e.composedPath()[0]))) || u,
				c = o.filter
			if (
				(tn(t),
				!s &&
					!((/mousedown|pointerdown/.test(i) && e.button !== 0) || o.disabled) &&
					!l.isContentEditable &&
					!(!this.nativeDraggable && we && u && u.tagName.toUpperCase() === 'SELECT') &&
					((u = j(u, o.draggable, t, !1)), !(u && u.animated) && Me !== u))
			) {
				if (((fe = R(u)), (Ee = R(u, o.draggable)), typeof c == 'function')) {
					if (c.call(this, e, u, this)) {
						;(A({ sortable: n, rootEl: l, name: 'filter', targetEl: u, toEl: t, fromEl: t }),
							I('filter', n, { evt: e }),
							r && e.preventDefault())
						return
					}
				} else if (
					c &&
					((c = c.split(',').some(function (d) {
						if (((d = j(l, d.trim(), t, !1)), d))
							return (
								A({ sortable: n, rootEl: d, name: 'filter', targetEl: u, fromEl: t, toEl: t }),
								I('filter', n, { evt: e }),
								!0
							)
					})),
					c)
				) {
					r && e.preventDefault()
					return
				}
				;(o.handle && !j(l, o.handle, t, !1)) || this._prepareDragStart(e, a, u)
			}
		}
	},
	_prepareDragStart: function (e, n, t) {
		var o = this,
			r = o.el,
			i = o.options,
			a = r.ownerDocument,
			u
		if (t && !s && t.parentNode === r) {
			var l = T(t)
			if (
				((D = r),
				(s = t),
				(_ = s.parentNode),
				(ae = s.nextSibling),
				(Me = t),
				(Oe = i.group),
				(p.dragged = s),
				(re = { target: s, clientX: (n || e).clientX, clientY: (n || e).clientY }),
				(ft = re.clientX - l.left),
				(ht = re.clientY - l.top),
				(this._lastX = (n || e).clientX),
				(this._lastY = (n || e).clientY),
				(s.style['will-change'] = 'all'),
				(u = function () {
					if ((I('delayEnded', o, { evt: e }), p.eventCanceled)) {
						o._onDrop()
						return
					}
					;(o._disableDelayedDragEvents(),
						!st && o.nativeDraggable && (s.draggable = !0),
						o._triggerDragStart(e, n),
						A({ sortable: o, name: 'choose', originalEvent: e }),
						X(s, i.chosenClass, !0))
				}),
				i.ignore.split(',').forEach(function (c) {
					yt(s, c.trim(), Qe)
				}),
				b(a, 'dragover', ie),
				b(a, 'mousemove', ie),
				b(a, 'touchmove', ie),
				i.supportPointer
					? (b(a, 'pointerup', o._onDrop), !this.nativeDraggable && b(a, 'pointercancel', o._onDrop))
					: (b(a, 'mouseup', o._onDrop), b(a, 'touchend', o._onDrop), b(a, 'touchcancel', o._onDrop)),
				st && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (s.draggable = !0)),
				I('delayStart', this, { evt: e }),
				i.delay && (!i.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Te || Q)))
			) {
				if (p.eventCanceled) {
					this._onDrop()
					return
				}
				;(i.supportPointer
					? (b(a, 'pointerup', o._disableDelayedDrag), b(a, 'pointercancel', o._disableDelayedDrag))
					: (b(a, 'mouseup', o._disableDelayedDrag),
						b(a, 'touchend', o._disableDelayedDrag),
						b(a, 'touchcancel', o._disableDelayedDrag)),
					b(a, 'mousemove', o._delayedDragTouchMoveHandler),
					b(a, 'touchmove', o._delayedDragTouchMoveHandler),
					i.supportPointer && b(a, 'pointermove', o._delayedDragTouchMoveHandler),
					(o._dragStartTimer = setTimeout(u, i.delay)))
			} else u()
		}
	},
	_delayedDragTouchMoveHandler: function (e) {
		var n = e.touches ? e.touches[0] : e
		Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >=
			Math.floor(this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1)) &&
			this._disableDelayedDrag()
	},
	_disableDelayedDrag: function () {
		;(s && Qe(s), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents())
	},
	_disableDelayedDragEvents: function () {
		var e = this.el.ownerDocument
		;(m(e, 'mouseup', this._disableDelayedDrag),
			m(e, 'touchend', this._disableDelayedDrag),
			m(e, 'touchcancel', this._disableDelayedDrag),
			m(e, 'pointerup', this._disableDelayedDrag),
			m(e, 'pointercancel', this._disableDelayedDrag),
			m(e, 'mousemove', this._delayedDragTouchMoveHandler),
			m(e, 'touchmove', this._delayedDragTouchMoveHandler),
			m(e, 'pointermove', this._delayedDragTouchMoveHandler))
	},
	_triggerDragStart: function (e, n) {
		;((n = n || (e.pointerType == 'touch' && e)),
			!this.nativeDraggable || n
				? this.options.supportPointer
					? b(document, 'pointermove', this._onTouchMove)
					: n
						? b(document, 'touchmove', this._onTouchMove)
						: b(document, 'mousemove', this._onTouchMove)
				: (b(s, 'dragend', this), b(D, 'dragstart', this._onDragStart)))
		try {
			document.selection
				? Xe(function () {
						document.selection.empty()
					})
				: window.getSelection().removeAllRanges()
		} catch {}
	},
	_dragStarted: function (e, n) {
		if (((de = !1), D && s)) {
			;(I('dragStarted', this, { evt: n }), this.nativeDraggable && b(document, 'dragover', qt))
			var t = this.options
			;(!e && X(s, t.dragClass, !1),
				X(s, t.ghostClass, !0),
				(p.active = this),
				e && this._appendGhost(),
				A({ sortable: this, name: 'start', originalEvent: n }))
		} else this._nulling()
	},
	_emulateDragOver: function () {
		if (B) {
			;((this._lastX = B.clientX), (this._lastY = B.clientY), xt())
			for (
				var e = document.elementFromPoint(B.clientX, B.clientY), n = e;
				e && e.shadowRoot && ((e = e.shadowRoot.elementFromPoint(B.clientX, B.clientY)), e !== n);

			)
				n = e
			if ((s.parentNode[M]._isOutsideThisEl(e), n))
				do {
					if (n[M]) {
						var t = void 0
						if (
							((t = n[M]._onDragOver({ clientX: B.clientX, clientY: B.clientY, target: e, rootEl: n })),
							t && !this.options.dragoverBubble)
						)
							break
					}
					e = n
				} while ((n = bt(n)))
			Ot()
		}
	},
	_onTouchMove: function (e) {
		if (re) {
			var n = this.options,
				t = n.fallbackTolerance,
				o = n.fallbackOffset,
				r = e.touches ? e.touches[0] : e,
				i = g && he(g, !0),
				a = g && i && i.a,
				u = g && i && i.d,
				l = Pe && N && dt(N),
				c = (r.clientX - re.clientX + o.x) / (a || 1) + (l ? l[0] - qe[0] : 0) / (a || 1),
				d = (r.clientY - re.clientY + o.y) / (u || 1) + (l ? l[1] - qe[1] : 0) / (u || 1)
			if (!p.active && !de) {
				if (t && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < t) return
				this._onDragStart(e, !0)
			}
			if (g) {
				i ? ((i.e += c - (Ue || 0)), (i.f += d - (Ve || 0))) : (i = { a: 1, b: 0, c: 0, d: 1, e: c, f: d })
				var f = 'matrix('
					.concat(i.a, ',')
					.concat(i.b, ',')
					.concat(i.c, ',')
					.concat(i.d, ',')
					.concat(i.e, ',')
					.concat(i.f, ')')
				;(h(g, 'webkitTransform', f),
					h(g, 'mozTransform', f),
					h(g, 'msTransform', f),
					h(g, 'transform', f),
					(Ue = c),
					(Ve = d),
					(B = r))
			}
			e.cancelable && e.preventDefault()
		}
	},
	_appendGhost: function () {
		if (!g) {
			var e = this.options.fallbackOnBody ? document.body : D,
				n = T(s, !0, Pe, !0, e),
				t = this.options
			if (Pe) {
				for (N = e; h(N, 'position') === 'static' && h(N, 'transform') === 'none' && N !== document; ) N = N.parentNode
				;(N !== document.body && N !== document.documentElement
					? (N === document && (N = L()), (n.top += N.scrollTop), (n.left += N.scrollLeft))
					: (N = L()),
					(qe = dt(N)))
			}
			;((g = s.cloneNode(!0)),
				X(g, t.ghostClass, !1),
				X(g, t.fallbackClass, !0),
				X(g, t.dragClass, !0),
				h(g, 'transition', ''),
				h(g, 'transform', ''),
				h(g, 'box-sizing', 'border-box'),
				h(g, 'margin', 0),
				h(g, 'top', n.top),
				h(g, 'left', n.left),
				h(g, 'width', n.width),
				h(g, 'height', n.height),
				h(g, 'opacity', '0.8'),
				h(g, 'position', Pe ? 'absolute' : 'fixed'),
				h(g, 'zIndex', '100000'),
				h(g, 'pointerEvents', 'none'),
				(p.ghost = g),
				e.appendChild(g),
				h(
					g,
					'transform-origin',
					(ft / parseInt(g.style.width)) * 100 + '% ' + (ht / parseInt(g.style.height)) * 100 + '%',
				))
		}
	},
	_onDragStart: function (e, n) {
		var t = this,
			o = e.dataTransfer,
			r = t.options
		if ((I('dragStart', this, { evt: e }), p.eventCanceled)) {
			this._onDrop()
			return
		}
		;(I('setupClone', this),
			p.eventCanceled ||
				((E = Et(s)),
				E.removeAttribute('id'),
				(E.draggable = !1),
				(E.style['will-change'] = ''),
				this._hideClone(),
				X(E, this.options.chosenClass, !1),
				(p.clone = E)),
			(t.cloneId = Xe(function () {
				;(I('clone', t),
					!p.eventCanceled &&
						(t.options.removeCloneOnHide || D.insertBefore(E, s), t._hideClone(), A({ sortable: t, name: 'clone' })))
			})),
			!n && X(s, r.dragClass, !0),
			n
				? ((Be = !0), (t._loopId = setInterval(t._emulateDragOver, 50)))
				: (m(document, 'mouseup', t._onDrop),
					m(document, 'touchend', t._onDrop),
					m(document, 'touchcancel', t._onDrop),
					o && ((o.effectAllowed = 'move'), r.setData && r.setData.call(t, o, s)),
					b(document, 'drop', t),
					h(s, 'transform', 'translateZ(0)')),
			(de = !0),
			(t._dragStartId = Xe(t._dragStarted.bind(t, n, e))),
			b(document, 'selectstart', t),
			(me = !0),
			window.getSelection().removeAllRanges(),
			we && h(document.body, 'user-select', 'none'))
	},
	_onDragOver: function (e) {
		var n = this.el,
			t = e.target,
			o,
			r,
			i,
			a = this.options,
			u = a.group,
			l = p.active,
			c = Oe === u,
			d = a.sort,
			f = x || l,
			w,
			v = this,
			C = !1
		if (Ke) return
		function y(ve, Pt) {
			I(
				ve,
				v,
				W(
					{
						evt: e,
						isOwner: c,
						axis: w ? 'vertical' : 'horizontal',
						revert: i,
						dragRect: o,
						targetRect: r,
						canSort: d,
						fromSortable: f,
						target: t,
						completed: P,
						onMove: function (at, At) {
							return Ae(D, n, s, o, at, T(at), e, At)
						},
						changed: z,
					},
					Pt,
				),
			)
		}
		function F() {
			;(y('dragOverAnimationCapture'), v.captureAnimationState(), v !== f && f.captureAnimationState())
		}
		function P(ve) {
			return (
				y('dragOverCompleted', { insertion: ve }),
				ve &&
					(c ? l._hideClone() : l._showClone(v),
					v !== f && (X(s, x ? x.options.ghostClass : l.options.ghostClass, !1), X(s, a.ghostClass, !0)),
					x !== v && v !== p.active ? (x = v) : v === p.active && x && (x = null),
					f === v && (v._ignoreWhileAnimating = t),
					v.animateAll(function () {
						;(y('dragOverAnimationComplete'), (v._ignoreWhileAnimating = null))
					}),
					v !== f && (f.animateAll(), (f._ignoreWhileAnimating = null))),
				((t === s && !s.animated) || (t === n && !t.animated)) && (ce = null),
				!a.dragoverBubble && !e.rootEl && t !== document && (s.parentNode[M]._isOutsideThisEl(e.target), !ve && ie(e)),
				!a.dragoverBubble && e.stopPropagation && e.stopPropagation(),
				(C = !0)
			)
		}
		function z() {
			;((Y = R(s)),
				(Z = R(s, a.draggable)),
				A({ sortable: v, name: 'change', toEl: n, newIndex: Y, newDraggableIndex: Z, originalEvent: e }))
		}
		if (
			(e.preventDefault !== void 0 && e.cancelable && e.preventDefault(),
			(t = j(t, a.draggable, n, !0)),
			y('dragOver'),
			p.eventCanceled)
		)
			return C
		if (s.contains(e.target) || (t.animated && t.animatingX && t.animatingY) || v._ignoreWhileAnimating === t)
			return P(!1)
		if (
			((Be = !1),
			l &&
				!a.disabled &&
				(c
					? d || (i = _ !== D)
					: x === this || ((this.lastPutMode = Oe.checkPull(this, l, s, e)) && u.checkPut(this, l, s, e))))
		) {
			if (((w = this._getDirection(e, t) === 'vertical'), (o = T(s)), y('dragOverValid'), p.eventCanceled)) return C
			if (i)
				return (
					(_ = D),
					F(),
					this._hideClone(),
					y('revert'),
					p.eventCanceled || (ae ? D.insertBefore(s, ae) : D.appendChild(s)),
					P(!0)
				)
			var O = ot(n, a.draggable)
			if (!O || (Zt(e, w, this) && !O.animated)) {
				if (O === s) return P(!1)
				if ((O && n === e.target && (t = O), t && (r = T(t)), Ae(D, n, s, o, t, r, e, !!t) !== !1))
					return (F(), O && O.nextSibling ? n.insertBefore(s, O.nextSibling) : n.appendChild(s), (_ = n), z(), P(!0))
			} else if (O && Gt(e, w, this)) {
				var ee = pe(n, 0, a, !0)
				if (ee === s) return P(!1)
				if (((t = ee), (r = T(t)), Ae(D, n, s, o, t, r, e, !1) !== !1))
					return (F(), n.insertBefore(s, ee), (_ = n), z(), P(!0))
			} else if (t.parentNode === n) {
				r = T(t)
				var H = 0,
					te,
					ge = s.parentNode !== n,
					le = !Ut((s.animated && s.toRect) || o, (t.animated && t.toRect) || r, w),
					k = w ? 'top' : 'left',
					J = ct(t, 'top', 'top') || ct(s, 'top', 'top'),
					xe = J ? J.scrollTop : void 0
				;(ce !== t && ((te = r[k]), (Se = !1), (Ne = (!le && a.invertSwap) || ge)),
					(H = Kt(
						e,
						t,
						r,
						w,
						le ? 1 : a.swapThreshold,
						a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold,
						Ne,
						ce === t,
					)))
				var U
				if (H !== 0) {
					var se = R(s)
					do ((se -= H), (U = _.children[se]))
					while (U && (h(U, 'display') === 'none' || U === g))
				}
				if (H === 0 || U === t) return P(!1)
				;((ce = t), (_e = H))
				var ne = t.nextElementSibling,
					G = !1
				G = H === 1
				var oe = Ae(D, n, s, o, t, r, e, G)
				if (oe !== !1)
					return (
						(oe === 1 || oe === -1) && (G = oe === 1),
						(Ke = !0),
						setTimeout(Jt, 30),
						F(),
						G && !ne ? n.appendChild(s) : t.parentNode.insertBefore(s, G ? ne : t),
						J && Dt(J, 0, xe - J.scrollTop),
						(_ = s.parentNode),
						te !== void 0 && !Ne && (ke = Math.abs(te - T(t)[k])),
						z(),
						P(!0)
					)
			}
			if (n.contains(s)) return P(!1)
		}
		return !1
	},
	_ignoreWhileAnimating: null,
	_offMoveEvents: function () {
		;(m(document, 'mousemove', this._onTouchMove),
			m(document, 'touchmove', this._onTouchMove),
			m(document, 'pointermove', this._onTouchMove),
			m(document, 'dragover', ie),
			m(document, 'mousemove', ie),
			m(document, 'touchmove', ie))
	},
	_offUpEvents: function () {
		var e = this.el.ownerDocument
		;(m(e, 'mouseup', this._onDrop),
			m(e, 'touchend', this._onDrop),
			m(e, 'pointerup', this._onDrop),
			m(e, 'pointercancel', this._onDrop),
			m(e, 'touchcancel', this._onDrop),
			m(document, 'selectstart', this))
	},
	_onDrop: function (e) {
		var n = this.el,
			t = this.options
		if (
			((Y = R(s)),
			(Z = R(s, t.draggable)),
			I('drop', this, { evt: e }),
			(_ = s && s.parentNode),
			(Y = R(s)),
			(Z = R(s, t.draggable)),
			p.eventCanceled)
		) {
			this._nulling()
			return
		}
		;((de = !1),
			(Ne = !1),
			(Se = !1),
			clearInterval(this._loopId),
			clearTimeout(this._dragStartTimer),
			$e(this.cloneId),
			$e(this._dragStartId),
			this.nativeDraggable && (m(document, 'drop', this), m(n, 'dragstart', this._onDragStart)),
			this._offMoveEvents(),
			this._offUpEvents(),
			we && h(document.body, 'user-select', ''),
			h(s, 'transform', ''),
			e &&
				(me && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()),
				g && g.parentNode && g.parentNode.removeChild(g),
				(D === _ || (x && x.lastPutMode !== 'clone')) && E && E.parentNode && E.parentNode.removeChild(E),
				s &&
					(this.nativeDraggable && m(s, 'dragend', this),
					Qe(s),
					(s.style['will-change'] = ''),
					me && !de && X(s, x ? x.options.ghostClass : this.options.ghostClass, !1),
					X(s, this.options.chosenClass, !1),
					A({ sortable: this, name: 'unchoose', toEl: _, newIndex: null, newDraggableIndex: null, originalEvent: e }),
					D !== _
						? (Y >= 0 &&
								(A({ rootEl: _, name: 'add', toEl: _, fromEl: D, originalEvent: e }),
								A({ sortable: this, name: 'remove', toEl: _, originalEvent: e }),
								A({ rootEl: _, name: 'sort', toEl: _, fromEl: D, originalEvent: e }),
								A({ sortable: this, name: 'sort', toEl: _, originalEvent: e })),
							x && x.save())
						: Y !== fe &&
							Y >= 0 &&
							(A({ sortable: this, name: 'update', toEl: _, originalEvent: e }),
							A({ sortable: this, name: 'sort', toEl: _, originalEvent: e })),
					p.active &&
						((Y == null || Y === -1) && ((Y = fe), (Z = Ee)),
						A({ sortable: this, name: 'end', toEl: _, originalEvent: e }),
						this.save()))),
			this._nulling())
	},
	_nulling: function () {
		;(I('nulling', this),
			(D =
				s =
				_ =
				g =
				ae =
				E =
				Me =
				K =
				re =
				B =
				me =
				Y =
				Z =
				fe =
				Ee =
				ce =
				_e =
				x =
				Oe =
				p.dragged =
				p.ghost =
				p.clone =
				p.active =
					null),
			He.forEach(function (e) {
				e.checked = !0
			}),
			(He.length = Ue = Ve = 0))
	},
	handleEvent: function (e) {
		switch (e.type) {
			case 'drop':
			case 'dragend':
				this._onDrop(e)
				break
			case 'dragenter':
			case 'dragover':
				s && (this._onDragOver(e), Qt(e))
				break
			case 'selectstart':
				e.preventDefault()
				break
		}
	},
	toArray: function () {
		for (var e = [], n, t = this.el.children, o = 0, r = t.length, i = this.options; o < r; o++)
			((n = t[o]), j(n, i.draggable, this.el, !1) && e.push(n.getAttribute(i.dataIdAttr) || en(n)))
		return e
	},
	sort: function (e, n) {
		var t = {},
			o = this.el
		;(this.toArray().forEach(function (r, i) {
			var a = o.children[i]
			j(a, this.options.draggable, o, !1) && (t[r] = a)
		}, this),
			n && this.captureAnimationState(),
			e.forEach(function (r) {
				t[r] && (o.removeChild(t[r]), o.appendChild(t[r]))
			}),
			n && this.animateAll())
	},
	save: function () {
		var e = this.options.store
		e && e.set && e.set(this)
	},
	closest: function (e, n) {
		return j(e, n || this.options.draggable, this.el, !1)
	},
	option: function (e, n) {
		var t = this.options
		if (n === void 0) return t[e]
		var o = Ce.modifyOption(this, e, n)
		;(typeof o < 'u' ? (t[e] = o) : (t[e] = n), e === 'group' && Ct(t))
	},
	destroy: function () {
		I('destroy', this)
		var e = this.el
		;((e[M] = null),
			m(e, 'mousedown', this._onTapStart),
			m(e, 'touchstart', this._onTapStart),
			m(e, 'pointerdown', this._onTapStart),
			this.nativeDraggable && (m(e, 'dragover', this), m(e, 'dragenter', this)),
			Array.prototype.forEach.call(e.querySelectorAll('[draggable]'), function (n) {
				n.removeAttribute('draggable')
			}),
			this._onDrop(),
			this._disableDelayedDragEvents(),
			je.splice(je.indexOf(this.el), 1),
			(this.el = e = null))
	},
	_hideClone: function () {
		if (!K) {
			if ((I('hideClone', this), p.eventCanceled)) return
			;(h(E, 'display', 'none'),
				this.options.removeCloneOnHide && E.parentNode && E.parentNode.removeChild(E),
				(K = !0))
		}
	},
	_showClone: function (e) {
		if (e.lastPutMode !== 'clone') {
			this._hideClone()
			return
		}
		if (K) {
			if ((I('showClone', this), p.eventCanceled)) return
			;(s.parentNode == D && !this.options.group.revertClone
				? D.insertBefore(E, s)
				: ae
					? D.insertBefore(E, ae)
					: D.appendChild(E),
				this.options.group.revertClone && this.animate(s, E),
				h(E, 'display', ''),
				(K = !1))
		}
	},
}
function Qt(e) {
	;(e.dataTransfer && (e.dataTransfer.dropEffect = 'move'), e.cancelable && e.preventDefault())
}
function Ae(e, n, t, o, r, i, a, u) {
	var l,
		c = e[M],
		d = c.options.onMove,
		f
	return (
		window.CustomEvent && !Q && !Te
			? (l = new CustomEvent('move', { bubbles: !0, cancelable: !0 }))
			: ((l = document.createEvent('Event')), l.initEvent('move', !0, !0)),
		(l.to = n),
		(l.from = e),
		(l.dragged = t),
		(l.draggedRect = o),
		(l.related = r || n),
		(l.relatedRect = i || T(n)),
		(l.willInsertAfter = u),
		(l.originalEvent = a),
		e.dispatchEvent(l),
		d && (f = d.call(c, l, a)),
		f
	)
}
function Qe(e) {
	e.draggable = !1
}
function Jt() {
	Ke = !1
}
function Gt(e, n, t) {
	var o = T(pe(t.el, 0, t.options, !0)),
		r = _t(t.el, t.options, g),
		i = 10
	return n
		? e.clientX < r.left - i || (e.clientY < o.top && e.clientX < o.right)
		: e.clientY < r.top - i || (e.clientY < o.bottom && e.clientX < o.left)
}
function Zt(e, n, t) {
	var o = T(ot(t.el, t.options.draggable)),
		r = _t(t.el, t.options, g),
		i = 10
	return n
		? e.clientX > r.right + i || (e.clientY > o.bottom && e.clientX > o.left)
		: e.clientY > r.bottom + i || (e.clientX > o.right && e.clientY > o.top)
}
function Kt(e, n, t, o, r, i, a, u) {
	var l = o ? e.clientY : e.clientX,
		c = o ? t.height : t.width,
		d = o ? t.top : t.left,
		f = o ? t.bottom : t.right,
		w = !1
	if (!a) {
		if (u && ke < c * r) {
			if ((!Se && (_e === 1 ? l > d + (c * i) / 2 : l < f - (c * i) / 2) && (Se = !0), Se)) w = !0
			else if (_e === 1 ? l < d + ke : l > f - ke) return -_e
		} else if (l > d + (c * (1 - r)) / 2 && l < f - (c * (1 - r)) / 2) return $t(n)
	}
	return ((w = w || a), w && (l < d + (c * i) / 2 || l > f - (c * i) / 2) ? (l > d + c / 2 ? 1 : -1) : 0)
}
function $t(e) {
	return R(s) < R(e) ? 1 : -1
}
function en(e) {
	for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
		o += n.charCodeAt(t)
	return o.toString(36)
}
function tn(e) {
	He.length = 0
	for (var n = e.getElementsByTagName('input'), t = n.length; t--; ) {
		var o = n[t]
		o.checked && He.push(o)
	}
}
function Xe(e) {
	return setTimeout(e, 0)
}
function $e(e) {
	return clearTimeout(e)
}
We &&
	b(document, 'touchmove', function (e) {
		;(p.active || de) && e.cancelable && e.preventDefault()
	})
p.utils = {
	on: b,
	off: m,
	css: h,
	find: yt,
	is: function (e, n) {
		return !!j(e, n, e, !1)
	},
	extend: Rt,
	throttle: wt,
	closest: j,
	toggleClass: X,
	clone: Et,
	index: R,
	nextTick: Xe,
	cancelNextTick: $e,
	detectDirection: Tt,
	getChild: pe,
	expando: M,
}
p.get = function (e) {
	return e[M]
}
p.mount = function () {
	for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
	;(n[0].constructor === Array && (n = n[0]),
		n.forEach(function (o) {
			if (!o.prototype || !o.prototype.constructor)
				throw 'Sortable: Mounted plugin must be a constructor function, not '.concat({}.toString.call(o))
			;(o.utils && (p.utils = W(W({}, p.utils), o.utils)), Ce.mount(o))
		}))
}
p.create = function (e, n) {
	return new p(e, n)
}
p.version = Xt
var S = [],
	be,
	et,
	tt = !1,
	Je,
	Ge,
	Le,
	ye
function nn() {
	function e() {
		this.defaults = {
			scroll: !0,
			forceAutoScrollFallback: !1,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: !0,
		}
		for (var n in this) n.charAt(0) === '_' && typeof this[n] == 'function' && (this[n] = this[n].bind(this))
	}
	return (
		(e.prototype = {
			dragStarted: function (n) {
				var t = n.originalEvent
				this.sortable.nativeDraggable
					? b(document, 'dragover', this._handleAutoScroll)
					: this.options.supportPointer
						? b(document, 'pointermove', this._handleFallbackAutoScroll)
						: t.touches
							? b(document, 'touchmove', this._handleFallbackAutoScroll)
							: b(document, 'mousemove', this._handleFallbackAutoScroll)
			},
			dragOverCompleted: function (n) {
				var t = n.originalEvent
				!this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t)
			},
			drop: function () {
				;(this.sortable.nativeDraggable
					? m(document, 'dragover', this._handleAutoScroll)
					: (m(document, 'pointermove', this._handleFallbackAutoScroll),
						m(document, 'touchmove', this._handleFallbackAutoScroll),
						m(document, 'mousemove', this._handleFallbackAutoScroll)),
					gt(),
					Ye(),
					Bt())
			},
			nulling: function () {
				;((Le = et = be = tt = ye = Je = Ge = null), (S.length = 0))
			},
			_handleFallbackAutoScroll: function (n) {
				this._handleAutoScroll(n, !0)
			},
			_handleAutoScroll: function (n, t) {
				var o = this,
					r = (n.touches ? n.touches[0] : n).clientX,
					i = (n.touches ? n.touches[0] : n).clientY,
					a = document.elementFromPoint(r, i)
				if (((Le = n), t || this.options.forceAutoScrollFallback || Te || Q || we)) {
					Ze(n, this.options, a, t)
					var u = $(a, !0)
					tt &&
						(!ye || r !== Je || i !== Ge) &&
						(ye && gt(),
						(ye = setInterval(function () {
							var l = $(document.elementFromPoint(r, i), !0)
							;(l !== u && ((u = l), Ye()), Ze(n, o.options, l, t))
						}, 10)),
						(Je = r),
						(Ge = i))
				} else {
					if (!this.options.bubbleScroll || $(a, !0) === L()) {
						Ye()
						return
					}
					Ze(n, this.options, $(a, !1), !1)
				}
			},
		}),
		q(e, { pluginName: 'scroll', initializeByDefault: !0 })
	)
}
function Ye() {
	;(S.forEach(function (e) {
		clearInterval(e.pid)
	}),
		(S = []))
}
function gt() {
	clearInterval(ye)
}
var Ze = wt(function (e, n, t, o) {
		if (n.scroll) {
			var r = (e.touches ? e.touches[0] : e).clientX,
				i = (e.touches ? e.touches[0] : e).clientY,
				a = n.scrollSensitivity,
				u = n.scrollSpeed,
				l = L(),
				c = !1,
				d
			et !== t && ((et = t), Ye(), (be = n.scroll), (d = n.scrollFn), be === !0 && (be = $(t, !0)))
			var f = 0,
				w = be
			do {
				var v = w,
					C = T(v),
					y = C.top,
					F = C.bottom,
					P = C.left,
					z = C.right,
					O = C.width,
					ee = C.height,
					H = void 0,
					te = void 0,
					ge = v.scrollWidth,
					le = v.scrollHeight,
					k = h(v),
					J = v.scrollLeft,
					xe = v.scrollTop
				v === l
					? ((H = O < ge && (k.overflowX === 'auto' || k.overflowX === 'scroll' || k.overflowX === 'visible')),
						(te = ee < le && (k.overflowY === 'auto' || k.overflowY === 'scroll' || k.overflowY === 'visible')))
					: ((H = O < ge && (k.overflowX === 'auto' || k.overflowX === 'scroll')),
						(te = ee < le && (k.overflowY === 'auto' || k.overflowY === 'scroll')))
				var U = H && (Math.abs(z - r) <= a && J + O < ge) - (Math.abs(P - r) <= a && !!J),
					se = te && (Math.abs(F - i) <= a && xe + ee < le) - (Math.abs(y - i) <= a && !!xe)
				if (!S[f]) for (var ne = 0; ne <= f; ne++) S[ne] || (S[ne] = {})
				;((S[f].vx != U || S[f].vy != se || S[f].el !== v) &&
					((S[f].el = v),
					(S[f].vx = U),
					(S[f].vy = se),
					clearInterval(S[f].pid),
					(U != 0 || se != 0) &&
						((c = !0),
						(S[f].pid = setInterval(
							function () {
								o && this.layer === 0 && p.active._onTouchMove(Le)
								var G = S[this.layer].vy ? S[this.layer].vy * u : 0,
									oe = S[this.layer].vx ? S[this.layer].vx * u : 0
								;(typeof d == 'function' &&
									d.call(p.dragged.parentNode[M], oe, G, e, Le, S[this.layer].el) !== 'continue') ||
									Dt(S[this.layer].el, oe, G)
							}.bind({ layer: f }),
							24,
						)))),
					f++)
			} while (n.bubbleScroll && w !== l && (w = $(w, !1)))
			tt = c
		}
	}, 30),
	Nt = function (e) {
		var n = e.originalEvent,
			t = e.putSortable,
			o = e.dragEl,
			r = e.activeSortable,
			i = e.dispatchSortableEvent,
			a = e.hideGhostForTarget,
			u = e.unhideGhostForTarget
		if (n) {
			var l = t || r
			a()
			var c = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
				d = document.elementFromPoint(c.clientX, c.clientY)
			;(u(), l && !l.el.contains(d) && (i('spill'), this.onSpill({ dragEl: o, putSortable: t })))
		}
	}
function rt() {}
rt.prototype = {
	startIndex: null,
	dragStart: function (e) {
		var n = e.oldDraggableIndex
		this.startIndex = n
	},
	onSpill: function (e) {
		var n = e.dragEl,
			t = e.putSortable
		;(this.sortable.captureAnimationState(), t && t.captureAnimationState())
		var o = pe(this.sortable.el, this.startIndex, this.options)
		;(o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n),
			this.sortable.animateAll(),
			t && t.animateAll())
	},
	drop: Nt,
}
q(rt, { pluginName: 'revertOnSpill' })
function it() {}
it.prototype = {
	onSpill: function (e) {
		var n = e.dragEl,
			t = e.putSortable,
			o = t || this.sortable
		;(o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll())
	},
	drop: Nt,
}
q(it, { pluginName: 'removeOnSpill' })
p.mount(new nn())
p.mount(it, rt)
export { p as Sortable, p as default }
