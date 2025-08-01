function h(r, t) {
	F(r) && (r = '100%')
	var e = I(r)
	return (
		(r = t === 360 ? r : Math.min(t, Math.max(0, parseFloat(r)))),
		e && (r = parseInt(String(r * t), 10) / 100),
		Math.abs(r - t) < 1e-6
			? 1
			: (t === 360
					? (r = (r < 0 ? (r % t) + t : r % t) / parseFloat(String(t)))
					: (r = (r % t) / parseFloat(String(t))),
				r)
	)
}
function v(r) {
	return Math.min(1, Math.max(0, r))
}
function F(r) {
	return typeof r == 'string' && r.indexOf('.') !== -1 && parseFloat(r) === 1
}
function I(r) {
	return typeof r == 'string' && r.indexOf('%') !== -1
}
function A(r) {
	return ((r = parseFloat(r)), (isNaN(r) || r < 0 || r > 1) && (r = 1), r)
}
function p(r) {
	return r <= 1 ? ''.concat(Number(r) * 100, '%') : r
}
function b(r) {
	return r.length === 1 ? '0' + r : String(r)
}
function E(r, t, e) {
	return { r: h(r, 255) * 255, g: h(t, 255) * 255, b: h(e, 255) * 255 }
}
function M(r, t, e) {
	;((r = h(r, 255)), (t = h(t, 255)), (e = h(e, 255)))
	var a = Math.max(r, t, e),
		n = Math.min(r, t, e),
		i = 0,
		f = 0,
		s = (a + n) / 2
	if (a === n) ((f = 0), (i = 0))
	else {
		var u = a - n
		switch (((f = s > 0.5 ? u / (2 - a - n) : u / (a + n)), a)) {
			case r:
				i = (t - e) / u + (t < e ? 6 : 0)
				break
			case t:
				i = (e - r) / u + 2
				break
			case e:
				i = (r - t) / u + 4
				break
		}
		i /= 6
	}
	return { h: i, s: f, l: s }
}
function l(r, t, e) {
	return (
		e < 0 && (e += 1),
		e > 1 && (e -= 1),
		e < 1 / 6 ? r + (t - r) * (6 * e) : e < 1 / 2 ? t : e < 2 / 3 ? r + (t - r) * (2 / 3 - e) * 6 : r
	)
}
function B(r, t, e) {
	var a, n, i
	if (((r = h(r, 360)), (t = h(t, 100)), (e = h(e, 100)), t === 0)) ((n = e), (i = e), (a = e))
	else {
		var f = e < 0.5 ? e * (1 + t) : e + t - e * t,
			s = 2 * e - f
		;((a = l(s, f, r + 1 / 3)), (n = l(s, f, r)), (i = l(s, f, r - 1 / 3)))
	}
	return { r: a * 255, g: n * 255, b: i * 255 }
}
function S(r, t, e) {
	;((r = h(r, 255)), (t = h(t, 255)), (e = h(e, 255)))
	var a = Math.max(r, t, e),
		n = Math.min(r, t, e),
		i = 0,
		f = a,
		s = a - n,
		u = a === 0 ? 0 : s / a
	if (a === n) i = 0
	else {
		switch (a) {
			case r:
				i = (t - e) / s + (t < e ? 6 : 0)
				break
			case t:
				i = (e - r) / s + 2
				break
			case e:
				i = (r - t) / s + 4
				break
		}
		i /= 6
	}
	return { h: i, s: u, v: f }
}
function N(r, t, e) {
	;((r = h(r, 360) * 6), (t = h(t, 100)), (e = h(e, 100)))
	var a = Math.floor(r),
		n = r - a,
		i = e * (1 - t),
		f = e * (1 - n * t),
		s = e * (1 - (1 - n) * t),
		u = a % 6,
		H = [e, f, i, i, s, e][u],
		R = [s, e, e, f, i, i][u],
		T = [i, i, s, e, e, f][u]
	return { r: H * 255, g: R * 255, b: T * 255 }
}
function k(r, t, e, a) {
	var n = [b(Math.round(r).toString(16)), b(Math.round(t).toString(16)), b(Math.round(e).toString(16))]
	return a && n[0].startsWith(n[0].charAt(1)) && n[1].startsWith(n[1].charAt(1)) && n[2].startsWith(n[2].charAt(1))
		? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0)
		: n.join('')
}
function P(r, t, e, a, n) {
	var i = [b(Math.round(r).toString(16)), b(Math.round(t).toString(16)), b(Math.round(e).toString(16)), b(j(a))]
	return n &&
		i[0].startsWith(i[0].charAt(1)) &&
		i[1].startsWith(i[1].charAt(1)) &&
		i[2].startsWith(i[2].charAt(1)) &&
		i[3].startsWith(i[3].charAt(1))
		? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
		: i.join('')
}
function j(r) {
	return Math.round(parseFloat(r) * 255).toString(16)
}
function w(r) {
	return o(r) / 255
}
function o(r) {
	return parseInt(r, 16)
}
function O(r) {
	return { r: r >> 16, g: (r & 65280) >> 8, b: r & 255 }
}
var x = {
	aliceblue: '#f0f8ff',
	antiquewhite: '#faebd7',
	aqua: '#00ffff',
	aquamarine: '#7fffd4',
	azure: '#f0ffff',
	beige: '#f5f5dc',
	bisque: '#ffe4c4',
	black: '#000000',
	blanchedalmond: '#ffebcd',
	blue: '#0000ff',
	blueviolet: '#8a2be2',
	brown: '#a52a2a',
	burlywood: '#deb887',
	cadetblue: '#5f9ea0',
	chartreuse: '#7fff00',
	chocolate: '#d2691e',
	coral: '#ff7f50',
	cornflowerblue: '#6495ed',
	cornsilk: '#fff8dc',
	crimson: '#dc143c',
	cyan: '#00ffff',
	darkblue: '#00008b',
	darkcyan: '#008b8b',
	darkgoldenrod: '#b8860b',
	darkgray: '#a9a9a9',
	darkgreen: '#006400',
	darkgrey: '#a9a9a9',
	darkkhaki: '#bdb76b',
	darkmagenta: '#8b008b',
	darkolivegreen: '#556b2f',
	darkorange: '#ff8c00',
	darkorchid: '#9932cc',
	darkred: '#8b0000',
	darksalmon: '#e9967a',
	darkseagreen: '#8fbc8f',
	darkslateblue: '#483d8b',
	darkslategray: '#2f4f4f',
	darkslategrey: '#2f4f4f',
	darkturquoise: '#00ced1',
	darkviolet: '#9400d3',
	deeppink: '#ff1493',
	deepskyblue: '#00bfff',
	dimgray: '#696969',
	dimgrey: '#696969',
	dodgerblue: '#1e90ff',
	firebrick: '#b22222',
	floralwhite: '#fffaf0',
	forestgreen: '#228b22',
	fuchsia: '#ff00ff',
	gainsboro: '#dcdcdc',
	ghostwhite: '#f8f8ff',
	goldenrod: '#daa520',
	gold: '#ffd700',
	gray: '#808080',
	green: '#008000',
	greenyellow: '#adff2f',
	grey: '#808080',
	honeydew: '#f0fff0',
	hotpink: '#ff69b4',
	indianred: '#cd5c5c',
	indigo: '#4b0082',
	ivory: '#fffff0',
	khaki: '#f0e68c',
	lavenderblush: '#fff0f5',
	lavender: '#e6e6fa',
	lawngreen: '#7cfc00',
	lemonchiffon: '#fffacd',
	lightblue: '#add8e6',
	lightcoral: '#f08080',
	lightcyan: '#e0ffff',
	lightgoldenrodyellow: '#fafad2',
	lightgray: '#d3d3d3',
	lightgreen: '#90ee90',
	lightgrey: '#d3d3d3',
	lightpink: '#ffb6c1',
	lightsalmon: '#ffa07a',
	lightseagreen: '#20b2aa',
	lightskyblue: '#87cefa',
	lightslategray: '#778899',
	lightslategrey: '#778899',
	lightsteelblue: '#b0c4de',
	lightyellow: '#ffffe0',
	lime: '#00ff00',
	limegreen: '#32cd32',
	linen: '#faf0e6',
	magenta: '#ff00ff',
	maroon: '#800000',
	mediumaquamarine: '#66cdaa',
	mediumblue: '#0000cd',
	mediumorchid: '#ba55d3',
	mediumpurple: '#9370db',
	mediumseagreen: '#3cb371',
	mediumslateblue: '#7b68ee',
	mediumspringgreen: '#00fa9a',
	mediumturquoise: '#48d1cc',
	mediumvioletred: '#c71585',
	midnightblue: '#191970',
	mintcream: '#f5fffa',
	mistyrose: '#ffe4e1',
	moccasin: '#ffe4b5',
	navajowhite: '#ffdead',
	navy: '#000080',
	oldlace: '#fdf5e6',
	olive: '#808000',
	olivedrab: '#6b8e23',
	orange: '#ffa500',
	orangered: '#ff4500',
	orchid: '#da70d6',
	palegoldenrod: '#eee8aa',
	palegreen: '#98fb98',
	paleturquoise: '#afeeee',
	palevioletred: '#db7093',
	papayawhip: '#ffefd5',
	peachpuff: '#ffdab9',
	peru: '#cd853f',
	pink: '#ffc0cb',
	plum: '#dda0dd',
	powderblue: '#b0e0e6',
	purple: '#800080',
	rebeccapurple: '#663399',
	red: '#ff0000',
	rosybrown: '#bc8f8f',
	royalblue: '#4169e1',
	saddlebrown: '#8b4513',
	salmon: '#fa8072',
	sandybrown: '#f4a460',
	seagreen: '#2e8b57',
	seashell: '#fff5ee',
	sienna: '#a0522d',
	silver: '#c0c0c0',
	skyblue: '#87ceeb',
	slateblue: '#6a5acd',
	slategray: '#708090',
	slategrey: '#708090',
	snow: '#fffafa',
	springgreen: '#00ff7f',
	steelblue: '#4682b4',
	tan: '#d2b48c',
	teal: '#008080',
	thistle: '#d8bfd8',
	tomato: '#ff6347',
	turquoise: '#40e0d0',
	violet: '#ee82ee',
	wheat: '#f5deb3',
	white: '#ffffff',
	whitesmoke: '#f5f5f5',
	yellow: '#ffff00',
	yellowgreen: '#9acd32',
}
function W(r) {
	var t = { r: 0, g: 0, b: 0 },
		e = 1,
		a = null,
		n = null,
		i = null,
		f = !1,
		s = !1
	return (
		typeof r == 'string' && (r = U(r)),
		typeof r == 'object' &&
			(g(r.r) && g(r.g) && g(r.b)
				? ((t = E(r.r, r.g, r.b)), (f = !0), (s = String(r.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
				: g(r.h) && g(r.s) && g(r.v)
					? ((a = p(r.s)), (n = p(r.v)), (t = N(r.h, a, n)), (f = !0), (s = 'hsv'))
					: g(r.h) && g(r.s) && g(r.l) && ((a = p(r.s)), (i = p(r.l)), (t = B(r.h, a, i)), (f = !0), (s = 'hsl')),
			Object.prototype.hasOwnProperty.call(r, 'a') && (e = r.a)),
		(e = A(e)),
		{
			ok: f,
			format: r.format || s,
			r: Math.min(255, Math.max(t.r, 0)),
			g: Math.min(255, Math.max(t.g, 0)),
			b: Math.min(255, Math.max(t.b, 0)),
			a: e,
		}
	)
}
var G = '[-\\+]?\\d+%?',
	q = '[-\\+]?\\d*\\.\\d+%?',
	d = '(?:'.concat(q, ')|(?:').concat(G, ')'),
	y = '[\\s|\\(]+('.concat(d, ')[,|\\s]+(').concat(d, ')[,|\\s]+(').concat(d, ')\\s*\\)?'),
	m = '[\\s|\\(]+('.concat(d, ')[,|\\s]+(').concat(d, ')[,|\\s]+(').concat(d, ')[,|\\s]+(').concat(d, ')\\s*\\)?'),
	c = {
		CSS_UNIT: new RegExp(d),
		rgb: new RegExp('rgb' + y),
		rgba: new RegExp('rgba' + m),
		hsl: new RegExp('hsl' + y),
		hsla: new RegExp('hsla' + m),
		hsv: new RegExp('hsv' + y),
		hsva: new RegExp('hsva' + m),
		hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	}
function U(r) {
	if (((r = r.trim().toLowerCase()), r.length === 0)) return !1
	var t = !1
	if (x[r]) ((r = x[r]), (t = !0))
	else if (r === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
	var e = c.rgb.exec(r)
	return e
		? { r: e[1], g: e[2], b: e[3] }
		: ((e = c.rgba.exec(r)),
			e
				? { r: e[1], g: e[2], b: e[3], a: e[4] }
				: ((e = c.hsl.exec(r)),
					e
						? { h: e[1], s: e[2], l: e[3] }
						: ((e = c.hsla.exec(r)),
							e
								? { h: e[1], s: e[2], l: e[3], a: e[4] }
								: ((e = c.hsv.exec(r)),
									e
										? { h: e[1], s: e[2], v: e[3] }
										: ((e = c.hsva.exec(r)),
											e
												? { h: e[1], s: e[2], v: e[3], a: e[4] }
												: ((e = c.hex8.exec(r)),
													e
														? { r: o(e[1]), g: o(e[2]), b: o(e[3]), a: w(e[4]), format: t ? 'name' : 'hex8' }
														: ((e = c.hex6.exec(r)),
															e
																? { r: o(e[1]), g: o(e[2]), b: o(e[3]), format: t ? 'name' : 'hex' }
																: ((e = c.hex4.exec(r)),
																	e
																		? {
																				r: o(e[1] + e[1]),
																				g: o(e[2] + e[2]),
																				b: o(e[3] + e[3]),
																				a: w(e[4] + e[4]),
																				format: t ? 'name' : 'hex8',
																			}
																		: ((e = c.hex3.exec(r)),
																			e
																				? {
																						r: o(e[1] + e[1]),
																						g: o(e[2] + e[2]),
																						b: o(e[3] + e[3]),
																						format: t ? 'name' : 'hex',
																					}
																				: !1)))))))))
}
function g(r) {
	return !!c.CSS_UNIT.exec(String(r))
}
var D = (function () {
	function r(t, e) {
		;(t === void 0 && (t = ''), e === void 0 && (e = {}))
		var a
		if (t instanceof r) return t
		;(typeof t == 'number' && (t = O(t)), (this.originalInput = t))
		var n = W(t)
		;((this.originalInput = t),
			(this.r = n.r),
			(this.g = n.g),
			(this.b = n.b),
			(this.a = n.a),
			(this.roundA = Math.round(100 * this.a) / 100),
			(this.format = (a = e.format) !== null && a !== void 0 ? a : n.format),
			(this.gradientType = e.gradientType),
			this.r < 1 && (this.r = Math.round(this.r)),
			this.g < 1 && (this.g = Math.round(this.g)),
			this.b < 1 && (this.b = Math.round(this.b)),
			(this.isValid = n.ok))
	}
	return (
		(r.prototype.isDark = function () {
			return this.getBrightness() < 128
		}),
		(r.prototype.isLight = function () {
			return !this.isDark()
		}),
		(r.prototype.getBrightness = function () {
			var t = this.toRgb()
			return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
		}),
		(r.prototype.getLuminance = function () {
			var t = this.toRgb(),
				e,
				a,
				n,
				i = t.r / 255,
				f = t.g / 255,
				s = t.b / 255
			return (
				i <= 0.03928 ? (e = i / 12.92) : (e = Math.pow((i + 0.055) / 1.055, 2.4)),
				f <= 0.03928 ? (a = f / 12.92) : (a = Math.pow((f + 0.055) / 1.055, 2.4)),
				s <= 0.03928 ? (n = s / 12.92) : (n = Math.pow((s + 0.055) / 1.055, 2.4)),
				0.2126 * e + 0.7152 * a + 0.0722 * n
			)
		}),
		(r.prototype.getAlpha = function () {
			return this.a
		}),
		(r.prototype.setAlpha = function (t) {
			return ((this.a = A(t)), (this.roundA = Math.round(100 * this.a) / 100), this)
		}),
		(r.prototype.isMonochrome = function () {
			var t = this.toHsl().s
			return t === 0
		}),
		(r.prototype.toHsv = function () {
			var t = S(this.r, this.g, this.b)
			return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
		}),
		(r.prototype.toHsvString = function () {
			var t = S(this.r, this.g, this.b),
				e = Math.round(t.h * 360),
				a = Math.round(t.s * 100),
				n = Math.round(t.v * 100)
			return this.a === 1
				? 'hsv('.concat(e, ', ').concat(a, '%, ').concat(n, '%)')
				: 'hsva('.concat(e, ', ').concat(a, '%, ').concat(n, '%, ').concat(this.roundA, ')')
		}),
		(r.prototype.toHsl = function () {
			var t = M(this.r, this.g, this.b)
			return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
		}),
		(r.prototype.toHslString = function () {
			var t = M(this.r, this.g, this.b),
				e = Math.round(t.h * 360),
				a = Math.round(t.s * 100),
				n = Math.round(t.l * 100)
			return this.a === 1
				? 'hsl('.concat(e, ', ').concat(a, '%, ').concat(n, '%)')
				: 'hsla('.concat(e, ', ').concat(a, '%, ').concat(n, '%, ').concat(this.roundA, ')')
		}),
		(r.prototype.toHex = function (t) {
			return (t === void 0 && (t = !1), k(this.r, this.g, this.b, t))
		}),
		(r.prototype.toHexString = function (t) {
			return (t === void 0 && (t = !1), '#' + this.toHex(t))
		}),
		(r.prototype.toHex8 = function (t) {
			return (t === void 0 && (t = !1), P(this.r, this.g, this.b, this.a, t))
		}),
		(r.prototype.toHex8String = function (t) {
			return (t === void 0 && (t = !1), '#' + this.toHex8(t))
		}),
		(r.prototype.toHexShortString = function (t) {
			return (t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t))
		}),
		(r.prototype.toRgb = function () {
			return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a }
		}),
		(r.prototype.toRgbString = function () {
			var t = Math.round(this.r),
				e = Math.round(this.g),
				a = Math.round(this.b)
			return this.a === 1
				? 'rgb('.concat(t, ', ').concat(e, ', ').concat(a, ')')
				: 'rgba('.concat(t, ', ').concat(e, ', ').concat(a, ', ').concat(this.roundA, ')')
		}),
		(r.prototype.toPercentageRgb = function () {
			var t = function (e) {
				return ''.concat(Math.round(h(e, 255) * 100), '%')
			}
			return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
		}),
		(r.prototype.toPercentageRgbString = function () {
			var t = function (e) {
				return Math.round(h(e, 255) * 100)
			}
			return this.a === 1
				? 'rgb('.concat(t(this.r), '%, ').concat(t(this.g), '%, ').concat(t(this.b), '%)')
				: 'rgba('.concat(t(this.r), '%, ').concat(t(this.g), '%, ').concat(t(this.b), '%, ').concat(this.roundA, ')')
		}),
		(r.prototype.toName = function () {
			if (this.a === 0) return 'transparent'
			if (this.a < 1) return !1
			for (var t = '#' + k(this.r, this.g, this.b, !1), e = 0, a = Object.entries(x); e < a.length; e++) {
				var n = a[e],
					i = n[0],
					f = n[1]
				if (t === f) return i
			}
			return !1
		}),
		(r.prototype.toString = function (t) {
			var e = !!t
			t = t ?? this.format
			var a = !1,
				n = this.a < 1 && this.a >= 0,
				i = !e && n && (t.startsWith('hex') || t === 'name')
			return i
				? t === 'name' && this.a === 0
					? this.toName()
					: this.toRgbString()
				: (t === 'rgb' && (a = this.toRgbString()),
					t === 'prgb' && (a = this.toPercentageRgbString()),
					(t === 'hex' || t === 'hex6') && (a = this.toHexString()),
					t === 'hex3' && (a = this.toHexString(!0)),
					t === 'hex4' && (a = this.toHex8String(!0)),
					t === 'hex8' && (a = this.toHex8String()),
					t === 'name' && (a = this.toName()),
					t === 'hsl' && (a = this.toHslString()),
					t === 'hsv' && (a = this.toHsvString()),
					a || this.toHexString())
		}),
		(r.prototype.toNumber = function () {
			return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
		}),
		(r.prototype.clone = function () {
			return new r(this.toString())
		}),
		(r.prototype.lighten = function (t) {
			t === void 0 && (t = 10)
			var e = this.toHsl()
			return ((e.l += t / 100), (e.l = v(e.l)), new r(e))
		}),
		(r.prototype.brighten = function (t) {
			t === void 0 && (t = 10)
			var e = this.toRgb()
			return (
				(e.r = Math.max(0, Math.min(255, e.r - Math.round(255 * -(t / 100))))),
				(e.g = Math.max(0, Math.min(255, e.g - Math.round(255 * -(t / 100))))),
				(e.b = Math.max(0, Math.min(255, e.b - Math.round(255 * -(t / 100))))),
				new r(e)
			)
		}),
		(r.prototype.darken = function (t) {
			t === void 0 && (t = 10)
			var e = this.toHsl()
			return ((e.l -= t / 100), (e.l = v(e.l)), new r(e))
		}),
		(r.prototype.tint = function (t) {
			return (t === void 0 && (t = 10), this.mix('white', t))
		}),
		(r.prototype.shade = function (t) {
			return (t === void 0 && (t = 10), this.mix('black', t))
		}),
		(r.prototype.desaturate = function (t) {
			t === void 0 && (t = 10)
			var e = this.toHsl()
			return ((e.s -= t / 100), (e.s = v(e.s)), new r(e))
		}),
		(r.prototype.saturate = function (t) {
			t === void 0 && (t = 10)
			var e = this.toHsl()
			return ((e.s += t / 100), (e.s = v(e.s)), new r(e))
		}),
		(r.prototype.greyscale = function () {
			return this.desaturate(100)
		}),
		(r.prototype.spin = function (t) {
			var e = this.toHsl(),
				a = (e.h + t) % 360
			return ((e.h = a < 0 ? 360 + a : a), new r(e))
		}),
		(r.prototype.mix = function (t, e) {
			e === void 0 && (e = 50)
			var a = this.toRgb(),
				n = new r(t).toRgb(),
				i = e / 100,
				f = { r: (n.r - a.r) * i + a.r, g: (n.g - a.g) * i + a.g, b: (n.b - a.b) * i + a.b, a: (n.a - a.a) * i + a.a }
			return new r(f)
		}),
		(r.prototype.analogous = function (t, e) {
			;(t === void 0 && (t = 6), e === void 0 && (e = 30))
			var a = this.toHsl(),
				n = 360 / e,
				i = [this]
			for (a.h = (a.h - ((n * t) >> 1) + 720) % 360; --t; ) ((a.h = (a.h + n) % 360), i.push(new r(a)))
			return i
		}),
		(r.prototype.complement = function () {
			var t = this.toHsl()
			return ((t.h = (t.h + 180) % 360), new r(t))
		}),
		(r.prototype.monochromatic = function (t) {
			t === void 0 && (t = 6)
			for (var e = this.toHsv(), a = e.h, n = e.s, i = e.v, f = [], s = 1 / t; t--; )
				(f.push(new r({ h: a, s: n, v: i })), (i = (i + s) % 1))
			return f
		}),
		(r.prototype.splitcomplement = function () {
			var t = this.toHsl(),
				e = t.h
			return [this, new r({ h: (e + 72) % 360, s: t.s, l: t.l }), new r({ h: (e + 216) % 360, s: t.s, l: t.l })]
		}),
		(r.prototype.onBackground = function (t) {
			var e = this.toRgb(),
				a = new r(t).toRgb(),
				n = e.a + a.a * (1 - e.a)
			return new r({
				r: (e.r * e.a + a.r * a.a * (1 - e.a)) / n,
				g: (e.g * e.a + a.g * a.a * (1 - e.a)) / n,
				b: (e.b * e.a + a.b * a.a * (1 - e.a)) / n,
				a: n,
			})
		}),
		(r.prototype.triad = function () {
			return this.polyad(3)
		}),
		(r.prototype.tetrad = function () {
			return this.polyad(4)
		}),
		(r.prototype.polyad = function (t) {
			for (var e = this.toHsl(), a = e.h, n = [this], i = 360 / t, f = 1; f < t; f++)
				n.push(new r({ h: (a + f * i) % 360, s: e.s, l: e.l }))
			return n
		}),
		(r.prototype.equals = function (t) {
			return this.toRgbString() === new r(t).toRgbString()
		}),
		r
	)
})()
export { D as T }
