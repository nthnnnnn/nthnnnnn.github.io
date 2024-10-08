function Zt(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a
}

function Co(a, e) {
    a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e
}
/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var gt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    oi = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    ws, Ne, ye, wt = 1e8,
    ee = 1 / wt,
    Qn = Math.PI * 2,
    Ka = Qn / 4,
    Za = 0,
    Oo = Math.sqrt,
    Qa = Math.cos,
    Ja = Math.sin,
    Me = function(e) {
        return typeof e == "string"
    },
    ce = function(e) {
        return typeof e == "function"
    },
    tr = function(e) {
        return typeof e == "number"
    },
    Ss = function(e) {
        return typeof e > "u"
    },
    qt = function(e) {
        return typeof e == "object"
    },
    it = function(e) {
        return e !== !1
    },
    Ps = function() {
        return typeof window < "u"
    },
    Ki = function(e) {
        return ce(e) || Me(e)
    },
    Mo = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Ye = Array.isArray,
    Jn = /(?:-?\.?\d|\.)+/gi,
    Do = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Qr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    zn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Eo = /[+-]=-?[.\d]+/,
    Ao = /[^,'"\[\]\s]+/gi,
    ja = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ae, Tt, jn, ks, mt = {},
    yn = {},
    Ro, Fo = function(e) {
        return (yn = Ir(e, mt)) && Xe
    },
    Cs = function(e, r) {
        return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
    },
    vn = function(e, r) {
        return !r && console.warn(e)
    },
    zo = function(e, r) {
        return e && (mt[e] = r) && yn && (yn[e] = r) || mt
    },
    Xi = function() {
        return 0
    },
    eu = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    un = {
        suppressEvents: !0,
        kill: !1
    },
    tu = {
        suppressEvents: !0
    },
    Os = {},
    dr = [],
    es = {},
    Lo, ht = {},
    Ln = {},
    Hs = 30,
    ln = [],
    Ms = "",
    Ds = function(e) {
        var r = e[0],
            t, i;
        if (qt(r) || ce(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (i = ln.length; i-- && !ln[i].targetTest(r););
            t = ln[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new oa(e[i], t))) || e.splice(i, 1);
        return e
    },
    Er = function(e) {
        return e._gsap || Ds(St(e))[0]._gsap
    },
    Io = function(e, r, t) {
        return (t = e[r]) && ce(t) ? e[r]() : Ss(t) && e.getAttribute && e.getAttribute(r) || t
    },
    nt = function(e, r) {
        return (e = e.split(",")).forEach(r) || e
    },
    pe = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Ae = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    ti = function(e, r) {
        var t = r.charAt(0),
            i = parseFloat(r.substr(2));
        return e = parseFloat(e), t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i
    },
    ru = function(e, r) {
        for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t;);
        return i < t
    },
    xn = function() {
        var e = dr.length,
            r = dr.slice(0),
            t, i;
        for (es = {}, dr.length = 0, t = 0; t < e; t++) i = r[t], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    },
    Bo = function(e, r, t, i) {
        dr.length && !Ne && xn(), e.render(r, t, i || Ne && r < 0 && (e._initted || e._startAt)), dr.length && !Ne && xn()
    },
    No = function(e) {
        var r = parseFloat(e);
        return (r || r === 0) && (e + "").match(Ao).length < 2 ? r : Me(e) ? e.trim() : e
    },
    Yo = function(e) {
        return e
    },
    Ct = function(e, r) {
        for (var t in r) t in e || (e[t] = r[t]);
        return e
    },
    iu = function(e) {
        return function(r, t) {
            for (var i in t) i in r || i === "duration" && e || i === "ease" || (r[i] = t[i])
        }
    },
    Ir = function(e, r) {
        for (var t in r) e[t] = r[t];
        return e
    },
    Ks = function a(e, r) {
        for (var t in r) t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = qt(r[t]) ? a(e[t] || (e[t] = {}), r[t]) : r[t]);
        return e
    },
    Tn = function(e, r) {
        var t = {},
            i;
        for (i in e) i in r || (t[i] = e[i]);
        return t
    },
    Di = function(e) {
        var r = e.parent || ae,
            t = e.keyframes ? iu(Ye(e.keyframes)) : Ct;
        if (it(e.inherit))
            for (; r;) t(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    },
    nu = function(e, r) {
        for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t];);
        return t < 0
    },
    Xo = function(e, r, t, i, n) {
        t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
        var s = e[i],
            o;
        if (n)
            for (o = r[n]; s && s[n] > o;) s = s._prev;
        return s ? (r._next = s._next, s._next = r) : (r._next = e[t], e[t] = r), r._next ? r._next._prev = r : e[i] = r, r._prev = s, r.parent = r._dp = e, r
    },
    Dn = function(e, r, t, i) {
        t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
        var n = r._prev,
            s = r._next;
        n ? n._next = s : e[t] === r && (e[t] = s), s ? s._prev = n : e[i] === r && (e[i] = n), r._next = r._prev = r.parent = null
    },
    mr = function(e, r) {
        e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
    },
    Ar = function(e, r) {
        if (e && (!r || r._end > e._dur || r._start < 0))
            for (var t = e; t;) t._dirty = 1, t = t.parent;
        return e
    },
    su = function(e) {
        for (var r = e.parent; r && r.parent;) r._dirty = 1, r.totalDuration(), r = r.parent;
        return e
    },
    ts = function(e, r, t, i) {
        return e._startAt && (Ne ? e._startAt.revert(un) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, i))
    },
    ou = function a(e) {
        return !e || e._ts && a(e.parent)
    },
    Zs = function(e) {
        return e._repeat ? ai(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    ai = function(e, r) {
        var t = Math.floor(e /= r);
        return e && t === e ? t - 1 : t
    },
    bn = function(e, r) {
        return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    },
    En = function(e) {
        return e._end = Ae(e._start + (e._tDur / Math.abs(e._ts || e._rts || ee) || 0))
    },
    An = function(e, r) {
        var t = e._dp;
        return t && t.smoothChildTiming && e._ts && (e._start = Ae(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), En(e), t._dirty || Ar(t, e)), e
    },
    Vo = function(e, r) {
        var t;
        if ((r._time || r._initted && !r._dur) && (t = bn(e.rawTime(), r), (!r._dur || Hi(0, r.totalDuration(), t) - r._tTime > ee) && r.render(t, !0)), Ar(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (t = e; t._dp;) t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
            e._zTime = -ee
        }
    },
    Vt = function(e, r, t, i) {
        return r.parent && mr(r), r._start = Ae((tr(t) ? t : t || e !== ae ? xt(e, t, r) : e._time) + r._delay), r._end = Ae(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), Xo(e, r, "_first", "_last", e._sort ? "_start" : 0), rs(r) || (e._recent = r), i || Vo(e, r), e._ts < 0 && An(e, e._tTime), e
    },
    Uo = function(e, r) {
        return (mt.ScrollTrigger || Cs("scrollTrigger", r)) && mt.ScrollTrigger.create(r, e)
    },
    $o = function(e, r, t, i, n) {
        if (As(e, r, n), !e._initted) return 1;
        if (!t && e._pt && !Ne && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Lo !== dt.frame) return dr.push(e), e._lazy = [n, i], 1
    },
    au = function a(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r))
    },
    rs = function(e) {
        var r = e.data;
        return r === "isFromStart" || r === "isStart"
    },
    uu = function(e, r, t, i) {
        var n = e.ratio,
            s = r < 0 || !r && (!e._start && au(e) && !(!e._initted && rs(e)) || (e._ts < 0 || e._dp._ts < 0) && !rs(e)) ? 0 : 1,
            o = e._rDelay,
            u = 0,
            l, f, d;
        if (o && e._repeat && (u = Hi(0, e._tDur, r), f = ai(u, o), e._yoyo && f & 1 && (s = 1 - s), f !== ai(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Ne || i || e._zTime === ee || !r && e._zTime) {
            if (!e._initted && $o(e, r, i, t, u)) return;
            for (d = e._zTime, e._zTime = r || (t ? ee : 0), t || (t = r && !d), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = u, l = e._pt; l;) l.r(s, l.d), l = l._next;
            r < 0 && ts(e, r, t, !0), e._onUpdate && !t && Pt(e, "onUpdate"), u && e._repeat && !t && e.parent && Pt(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === s && (s && mr(e, 1), !t && !Ne && (Pt(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = r)
    },
    lu = function(e, r, t) {
        var i;
        if (t > r)
            for (i = e._first; i && i._start <= t;) {
                if (i.data === "isPause" && i._start > r) return i;
                i = i._next
            } else
                for (i = e._last; i && i._start >= t;) {
                    if (i.data === "isPause" && i._start < r) return i;
                    i = i._prev
                }
    },
    ui = function(e, r, t, i) {
        var n = e._repeat,
            s = Ae(r) || 0,
            o = e._tTime / e._tDur;
        return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : Ae(s * (n + 1) + e._rDelay * n) : s, o > 0 && !i && An(e, e._tTime = e._tDur * o), e.parent && En(e), t || Ar(e.parent, e), e
    },
    Qs = function(e) {
        return e instanceof rt ? Ar(e) : ui(e, e._dur)
    },
    fu = {
        _start: 0,
        endTime: Xi,
        totalDuration: Xi
    },
    xt = function a(e, r, t) {
        var i = e.labels,
            n = e._recent || fu,
            s = e.duration() >= wt ? n.endTime(!1) : e._dur,
            o, u, l;
        return Me(r) && (isNaN(r) || r in i) ? (u = r.charAt(0), l = r.substr(-1) === "%", o = r.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (r = r.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (l ? (o < 0 ? n : t).totalDuration() / 100 : 1)) : o < 0 ? (r in i || (i[r] = s), i[r]) : (u = parseFloat(r.charAt(o - 1) + r.substr(o + 1)), l && t && (u = u / 100 * (Ye(t) ? t[0] : t).totalDuration()), o > 1 ? a(e, r.substr(0, o - 1), t) + u : s + u)) : r == null ? s : +r
    },
    Ei = function(e, r, t) {
        var i = tr(r[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            s = r[n],
            o, u;
        if (i && (s.duration = r[1]), s.parent = t, e) {
            for (o = s, u = t; u && !("immediateRender" in o);) o = u.vars.defaults || {}, u = it(u.vars.inherit) && u.parent;
            s.immediateRender = it(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = r[n - 1]
        }
        return new xe(r[0], s, r[n + 1])
    },
    xr = function(e, r) {
        return e || e === 0 ? r(e) : r
    },
    Hi = function(e, r, t) {
        return t < e ? e : t > r ? r : t
    },
    Be = function(e, r) {
        return !Me(e) || !(r = ja.exec(e)) ? "" : r[1]
    },
    cu = function(e, r, t) {
        return xr(t, function(i) {
            return Hi(e, r, i)
        })
    },
    is = [].slice,
    Wo = function(e, r) {
        return e && qt(e) && "length" in e && (!r && !e.length || e.length - 1 in e && qt(e[0])) && !e.nodeType && e !== Tt
    },
    hu = function(e, r, t) {
        return t === void 0 && (t = []), e.forEach(function(i) {
            var n;
            return Me(i) && !r || Wo(i, 1) ? (n = t).push.apply(n, St(i)) : t.push(i)
        }) || t
    },
    St = function(e, r, t) {
        return ye && !r && ye.selector ? ye.selector(e) : Me(e) && !t && (jn || !li()) ? is.call((r || ks).querySelectorAll(e), 0) : Ye(e) ? hu(e, t) : Wo(e) ? is.call(e, 0) : e ? [e] : []
    },
    ns = function(e) {
        return e = St(e)[0] || vn("Invalid scope") || {},
            function(r) {
                var t = e.current || e.nativeElement || e;
                return St(r, t.querySelectorAll ? t : t === e ? vn("Invalid scope") || ks.createElement("div") : e)
            }
    },
    qo = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    Go = function(e) {
        if (ce(e)) return e;
        var r = qt(e) ? e : {
                each: e
            },
            t = Rr(r.ease),
            i = r.from || 0,
            n = parseFloat(r.base) || 0,
            s = {},
            o = i > 0 && i < 1,
            u = isNaN(i) || o,
            l = r.axis,
            f = i,
            d = i;
        return Me(i) ? f = d = {
                center: .5,
                edges: .5,
                end: 1
            } [i] || 0 : !o && u && (f = i[0], d = i[1]),
            function(h, c, p) {
                var _ = (p || r).length,
                    m = s[_],
                    y, w, b, x, S, C, T, k, P;
                if (!m) {
                    if (P = r.grid === "auto" ? 0 : (r.grid || [1, wt])[1], !P) {
                        for (T = -wt; T < (T = p[P++].getBoundingClientRect().left) && P < _;);
                        P--
                    }
                    for (m = s[_] = [], y = u ? Math.min(P, _) * f - .5 : i % P, w = P === wt ? 0 : u ? _ * d / P - .5 : i / P | 0, T = 0, k = wt, C = 0; C < _; C++) b = C % P - y, x = w - (C / P | 0), m[C] = S = l ? Math.abs(l === "y" ? x : b) : Oo(b * b + x * x), S > T && (T = S), S < k && (k = S);
                    i === "random" && qo(m), m.max = T - k, m.min = k, m.v = _ = (parseFloat(r.amount) || parseFloat(r.each) * (P > _ ? _ - 1 : l ? l === "y" ? _ / P : P : Math.max(P, _ / P)) || 0) * (i === "edges" ? -1 : 1), m.b = _ < 0 ? n - _ : n, m.u = Be(r.amount || r.each) || 0, t = t && _ < 0 ? ia(t) : t
                }
                return _ = (m[h] - m.min) / m.max || 0, Ae(m.b + (t ? t(_) : _) * m.v) + m.u
            }
    },
    ss = function(e) {
        var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(t) {
            var i = Ae(Math.round(parseFloat(t) / e) * e * r);
            return (i - i % 1) / r + (tr(t) ? 0 : Be(t))
        }
    },
    Ho = function(e, r) {
        var t = Ye(e),
            i, n;
        return !t && qt(e) && (i = t = e.radius || wt, e.values ? (e = St(e.values), (n = !tr(e[0])) && (i *= i)) : e = ss(e.increment)), xr(r, t ? ce(e) ? function(s) {
            return n = e(s), Math.abs(n - s) <= i ? n : s
        } : function(s) {
            for (var o = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), l = wt, f = 0, d = e.length, h, c; d--;) n ? (h = e[d].x - o, c = e[d].y - u, h = h * h + c * c) : h = Math.abs(e[d] - o), h < l && (l = h, f = d);
            return f = !i || l <= i ? e[f] : s, n || f === s || tr(s) ? f : f + Be(s)
        } : ss(e))
    },
    Ko = function(e, r, t, i) {
        return xr(Ye(e) ? !r : t === !0 ? !!(t = 0) : !i, function() {
            return Ye(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * .99)) / t) * t * i) / i
        })
    },
    _u = function() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return function(i) {
            return r.reduce(function(n, s) {
                return s(n)
            }, i)
        }
    },
    du = function(e, r) {
        return function(t) {
            return e(parseFloat(t)) + (r || Be(t))
        }
    },
    pu = function(e, r, t) {
        return Qo(e, r, 0, 1, t)
    },
    Zo = function(e, r, t) {
        return xr(t, function(i) {
            return e[~~r(i)]
        })
    },
    gu = function a(e, r, t) {
        var i = r - e;
        return Ye(e) ? Zo(e, a(0, e.length), r) : xr(t, function(n) {
            return (i + (n - e) % i) % i + e
        })
    },
    mu = function a(e, r, t) {
        var i = r - e,
            n = i * 2;
        return Ye(e) ? Zo(e, a(0, e.length - 1), r) : xr(t, function(s) {
            return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s)
        })
    },
    Vi = function(e) {
        for (var r = 0, t = "", i, n, s, o; ~(i = e.indexOf("random(", r));) s = e.indexOf(")", i), o = e.charAt(i + 7) === "[", n = e.substr(i + 7, s - i - 7).match(o ? Ao : Jn), t += e.substr(r, i - r) + Ko(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), r = s + 1;
        return t + e.substr(r, e.length - r)
    },
    Qo = function(e, r, t, i, n) {
        var s = r - e,
            o = i - t;
        return xr(n, function(u) {
            return t + ((u - e) / s * o || 0)
        })
    },
    yu = function a(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function(c) {
            return (1 - c) * e + c * r
        };
        if (!n) {
            var s = Me(e),
                o = {},
                u, l, f, d, h;
            if (t === !0 && (i = 1) && (t = null), s) e = {
                p: e
            }, r = {
                p: r
            };
            else if (Ye(e) && !Ye(r)) {
                for (f = [], d = e.length, h = d - 2, l = 1; l < d; l++) f.push(a(e[l - 1], e[l]));
                d--, n = function(p) {
                    p *= d;
                    var _ = Math.min(h, ~~p);
                    return f[_](p - _)
                }, t = r
            } else i || (e = Ir(Ye(e) ? [] : {}, e));
            if (!f) {
                for (u in r) Es.call(o, e, u, "get", r[u]);
                n = function(p) {
                    return zs(p, o) || (s ? e.p : e)
                }
            }
        }
        return xr(t, n)
    },
    Js = function(e, r, t) {
        var i = e.labels,
            n = wt,
            s, o, u;
        for (s in i) o = i[s] - r, o < 0 == !!t && o && n > (o = Math.abs(o)) && (u = s, n = o);
        return u
    },
    Pt = function(e, r, t) {
        var i = e.vars,
            n = i[r],
            s = ye,
            o = e._ctx,
            u, l, f;
        if (n) return u = i[r + "Params"], l = i.callbackScope || e, t && dr.length && xn(), o && (ye = o), f = u ? n.apply(l, u) : n.call(l), ye = s, f
    },
    Si = function(e) {
        return mr(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ne), e.progress() < 1 && Pt(e, "onInterrupt"), e
    },
    Jr, Jo = [],
    jo = function(e) {
        if (!Ps()) {
            Jo.push(e);
            return
        }
        e = !e.name && e.default || e;
        var r = e.name,
            t = ce(e),
            i = r && !t && e.init ? function() {
                this._props = []
            } : e,
            n = {
                init: Xi,
                render: zs,
                add: Es,
                kill: Fu,
                modifier: Ru,
                rawVars: 0
            },
            s = {
                targetTest: 0,
                get: 0,
                getSetter: Fs,
                aliases: {},
                register: 0
            };
        if (li(), e !== i) {
            if (ht[r]) return;
            Ct(i, Ct(Tn(e, n), s)), Ir(i.prototype, Ir(n, Tn(e, s))), ht[i.prop = r] = i, e.targetTest && (ln.push(i), Os[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
        }
        zo(r, i), e.register && e.register(Xe, i, st)
    },
    j = 255,
    Pi = {
        aqua: [0, j, j],
        lime: [0, j, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, j],
        navy: [0, 0, 128],
        white: [j, j, j],
        olive: [128, 128, 0],
        yellow: [j, j, 0],
        orange: [j, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [j, 0, 0],
        pink: [j, 192, 203],
        cyan: [0, j, j],
        transparent: [j, j, j, 0]
    },
    In = function(e, r, t) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (t - r) * e * 6 : e < .5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * j + .5 | 0
    },
    ea = function(e, r, t) {
        var i = e ? tr(e) ? [e >> 16, e >> 8 & j, e & j] : 0 : Pi.black,
            n, s, o, u, l, f, d, h, c, p;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Pi[e]) i = Pi[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & j, i & j, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & j, e & j]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = p = e.match(Jn), !r) u = +i[0] % 360 / 360, l = +i[1] / 100, f = +i[2] / 100, s = f <= .5 ? f * (l + 1) : f + l - f * l, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = In(u + 1 / 3, n, s), i[1] = In(u, n, s), i[2] = In(u - 1 / 3, n, s);
                else if (~e.indexOf("=")) return i = e.match(Do), t && i.length < 4 && (i[3] = 1), i
            } else i = e.match(Jn) || Pi.transparent;
            i = i.map(Number)
        }
        return r && !p && (n = i[0] / j, s = i[1] / j, o = i[2] / j, d = Math.max(n, s, o), h = Math.min(n, s, o), f = (d + h) / 2, d === h ? u = l = 0 : (c = d - h, l = f > .5 ? c / (2 - d - h) : c / (d + h), u = d === n ? (s - o) / c + (s < o ? 6 : 0) : d === s ? (o - n) / c + 2 : (n - s) / c + 4, u *= 60), i[0] = ~~(u + .5), i[1] = ~~(l * 100 + .5), i[2] = ~~(f * 100 + .5)), t && i.length < 4 && (i[3] = 1), i
    },
    ta = function(e) {
        var r = [],
            t = [],
            i = -1;
        return e.split(pr).forEach(function(n) {
            var s = n.match(Qr) || [];
            r.push.apply(r, s), t.push(i += s.length + 1)
        }), r.c = t, r
    },
    js = function(e, r, t) {
        var i = "",
            n = (e + i).match(pr),
            s = r ? "hsla(" : "rgba(",
            o = 0,
            u, l, f, d;
        if (!n) return e;
        if (n = n.map(function(h) {
                return (h = ea(h, r, 1)) && s + (r ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
            }), t && (f = ta(e), u = t.c, u.join(i) !== f.c.join(i)))
            for (l = e.replace(pr, "1").split(Qr), d = l.length - 1; o < d; o++) i += l[o] + (~u.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : t).shift());
        if (!l)
            for (l = e.split(pr), d = l.length - 1; o < d; o++) i += l[o] + n[o];
        return i + l[d]
    },
    pr = function() {
        var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in Pi) a += "|" + e + "\\b";
        return new RegExp(a + ")", "gi")
    }(),
    vu = /hsl[a]?\(/,
    ra = function(e) {
        var r = e.join(" "),
            t;
        if (pr.lastIndex = 0, pr.test(r)) return t = vu.test(r), e[1] = js(e[1], t), e[0] = js(e[0], t, ta(e[1])), !0
    },
    Ui, dt = function() {
        var a = Date.now,
            e = 500,
            r = 33,
            t = a(),
            i = t,
            n = 1e3 / 240,
            s = n,
            o = [],
            u, l, f, d, h, c, p = function _(m) {
                var y = a() - i,
                    w = m === !0,
                    b, x, S, C;
                if (y > e && (t += y - r), i += y, S = i - t, b = S - s, (b > 0 || w) && (C = ++d.frame, h = S - d.time * 1e3, d.time = S = S / 1e3, s += b + (b >= n ? 4 : n - b), x = 1), w || (u = l(_)), x)
                    for (c = 0; c < o.length; c++) o[c](S, h, C, m)
            };
        return d = {
            time: 0,
            frame: 0,
            tick: function() {
                p(!0)
            },
            deltaRatio: function(m) {
                return h / (1e3 / (m || 60))
            },
            wake: function() {
                Ro && (!jn && Ps() && (Tt = jn = window, ks = Tt.document || {}, mt.gsap = Xe, (Tt.gsapVersions || (Tt.gsapVersions = [])).push(Xe.version), Fo(yn || Tt.GreenSockGlobals || !Tt.gsap && Tt || {}), f = Tt.requestAnimationFrame, Jo.forEach(jo)), u && d.sleep(), l = f || function(m) {
                    return setTimeout(m, s - d.time * 1e3 + 1 | 0)
                }, Ui = 1, p(2))
            },
            sleep: function() {
                (f ? Tt.cancelAnimationFrame : clearTimeout)(u), Ui = 0, l = Xi
            },
            lagSmoothing: function(m, y) {
                e = m || 1 / 0, r = Math.min(y || 33, e)
            },
            fps: function(m) {
                n = 1e3 / (m || 240), s = d.time * 1e3 + n
            },
            add: function(m, y, w) {
                var b = y ? function(x, S, C, T) {
                    m(x, S, C, T), d.remove(b)
                } : m;
                return d.remove(m), o[w ? "unshift" : "push"](b), li(), b
            },
            remove: function(m, y) {
                ~(y = o.indexOf(m)) && o.splice(y, 1) && c >= y && c--
            },
            _listeners: o
        }, d
    }(),
    li = function() {
        return !Ui && dt.wake()
    },
    H = {},
    xu = /^[\d.\-M][\d.\-,\s]/,
    Tu = /["']/g,
    bu = function(e) {
        for (var r = {}, t = e.substr(1, e.length - 3).split(":"), i = t[0], n = 1, s = t.length, o, u, l; n < s; n++) u = t[n], o = n !== s - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, o), r[i] = isNaN(l) ? l.replace(Tu, "").trim() : +l, i = u.substr(o + 1).trim();
        return r
    },
    wu = function(e) {
        var r = e.indexOf("(") + 1,
            t = e.indexOf(")"),
            i = e.indexOf("(", r);
        return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t)
    },
    Su = function(e) {
        var r = (e + "").split("("),
            t = H[r[0]];
        return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [bu(r[1])] : wu(e).split(",").map(No)) : H._CE && xu.test(e) ? H._CE("", e) : t
    },
    ia = function(e) {
        return function(r) {
            return 1 - e(1 - r)
        }
    },
    na = function a(e, r) {
        for (var t = e._first, i; t;) t instanceof rt ? a(t, r) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== r && (t.timeline ? a(t.timeline, r) : (i = t._ease, t._ease = t._yEase, t._yEase = i, t._yoyo = r)), t = t._next
    },
    Rr = function(e, r) {
        return e && (ce(e) ? e : H[e] || Su(e)) || r
    },
    Xr = function(e, r, t, i) {
        t === void 0 && (t = function(u) {
            return 1 - r(1 - u)
        }), i === void 0 && (i = function(u) {
            return u < .5 ? r(u * 2) / 2 : 1 - r((1 - u) * 2) / 2
        });
        var n = {
                easeIn: r,
                easeOut: t,
                easeInOut: i
            },
            s;
        return nt(e, function(o) {
            H[o] = mt[o] = n, H[s = o.toLowerCase()] = t;
            for (var u in n) H[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = H[o + "." + u] = n[u]
        }), n
    },
    sa = function(e) {
        return function(r) {
            return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
        }
    },
    Bn = function a(e, r, t) {
        var i = r >= 1 ? r : 1,
            n = (t || (e ? .3 : .45)) / (r < 1 ? r : 1),
            s = n / Qn * (Math.asin(1 / i) || 0),
            o = function(f) {
                return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Ja((f - s) * n) + 1
            },
            u = e === "out" ? o : e === "in" ? function(l) {
                return 1 - o(1 - l)
            } : sa(o);
        return n = Qn / n, u.config = function(l, f) {
            return a(e, l, f)
        }, u
    },
    Nn = function a(e, r) {
        r === void 0 && (r = 1.70158);
        var t = function(s) {
                return s ? --s * s * ((r + 1) * s + r) + 1 : 0
            },
            i = e === "out" ? t : e === "in" ? function(n) {
                return 1 - t(1 - n)
            } : sa(t);
        return i.config = function(n) {
            return a(e, n)
        }, i
    };
nt("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, e) {
    var r = e < 5 ? e + 1 : e;
    Xr(a + ",Power" + (r - 1), e ? function(t) {
        return Math.pow(t, r)
    } : function(t) {
        return t
    }, function(t) {
        return 1 - Math.pow(1 - t, r)
    }, function(t) {
        return t < .5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
    })
});
H.Linear.easeNone = H.none = H.Linear.easeIn;
Xr("Elastic", Bn("in"), Bn("out"), Bn());
(function(a, e) {
    var r = 1 / e,
        t = 2 * r,
        i = 2.5 * r,
        n = function(o) {
            return o < r ? a * o * o : o < t ? a * Math.pow(o - 1.5 / e, 2) + .75 : o < i ? a * (o -= 2.25 / e) * o + .9375 : a * Math.pow(o - 2.625 / e, 2) + .984375
        };
    Xr("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
Xr("Expo", function(a) {
    return a ? Math.pow(2, 10 * (a - 1)) : 0
});
Xr("Circ", function(a) {
    return -(Oo(1 - a * a) - 1)
});
Xr("Sine", function(a) {
    return a === 1 ? 1 : -Qa(a * Ka) + 1
});
Xr("Back", Nn("in"), Nn("out"), Nn());
H.SteppedEase = H.steps = mt.SteppedEase = {
    config: function(e, r) {
        e === void 0 && (e = 1);
        var t = 1 / e,
            i = e + (r ? 0 : 1),
            n = r ? 1 : 0,
            s = 1 - ee;
        return function(o) {
            return ((i * Hi(0, s, o) | 0) + n) * t
        }
    }
};
oi.ease = H["quad.out"];
nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
    return Ms += a + "," + a + "Params,"
});
var oa = function(e, r) {
        this.id = Za++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : Io, this.set = r ? r.getSetter : Fs
    },
    fi = function() {
        function a(r) {
            this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, ui(this, +r.duration, 1, 1), this.data = r.data, ye && (this._ctx = ye, ye.data.push(this)), Ui || dt.wake()
        }
        var e = a.prototype;
        return e.delay = function(t) {
            return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, ui(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(t, i) {
            if (li(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (An(this, t), !n._dp || n.parent || Vo(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Vt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === ee || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Bo(this, t, i)), this
        }, e.time = function(t, i) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Zs(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time
        }, e.totalProgress = function(t, i) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function(t, i) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + Zs(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function(t, i) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? ai(this._tTime, n) + 1 : 1
        }, e.timeScale = function(t) {
            if (!arguments.length) return this._rts === -ee ? 0 : this._rts;
            if (this._rts === t) return this;
            var i = this.parent && this._ts ? bn(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -ee ? 0 : this._rts, this.totalTime(Hi(-Math.abs(this._delay), this._tDur, i), !0), En(this), su(this)
        }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (li(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ee && (this._tTime -= ee)))), this) : this._ps
        }, e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var i = this.parent || this._dp;
                return i && (i._sort || !this.parent) && Vt(i, this, t - this._delay), this
            }
            return this._start
        }, e.endTime = function(t) {
            return this._start + (it(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(t) {
            var i = this.parent || this._dp;
            return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? bn(i.rawTime(t), this) : this._tTime : this._tTime
        }, e.revert = function(t) {
            t === void 0 && (t = tu);
            var i = Ne;
            return Ne = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), this.data !== "nested" && t.kill !== !1 && this.kill(), Ne = i, this
        }, e.globalTime = function(t) {
            for (var i = this, n = arguments.length ? t : i.rawTime(); i;) n = i._start + n / (i._ts || 1), i = i._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : n
        }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Qs(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(t) {
            if (arguments.length) {
                var i = this._time;
                return this._rDelay = t, Qs(this), i ? this.time(i) : this
            }
            return this._rDelay
        }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function(t, i) {
            return this.totalTime(xt(this, t), it(i))
        }, e.restart = function(t, i) {
            return this.play().totalTime(t ? -this._delay : 0, it(i))
        }, e.play = function(t, i) {
            return t != null && this.seek(t, i), this.reversed(!1).paused(!1)
        }, e.reverse = function(t, i) {
            return t != null && this.seek(t || this.totalDuration(), i), this.reversed(!0).paused(!1)
        }, e.pause = function(t, i) {
            return t != null && this.seek(t, i), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -ee : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -ee, this
        }, e.isActive = function() {
            var t = this.parent || this._dp,
                i = this._start,
                n;
            return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - ee)
        }, e.eventCallback = function(t, i, n) {
            var s = this.vars;
            return arguments.length > 1 ? (i ? (s[t] = i, n && (s[t + "Params"] = n), t === "onUpdate" && (this._onUpdate = i)) : delete s[t], this) : s[t]
        }, e.then = function(t) {
            var i = this;
            return new Promise(function(n) {
                var s = ce(t) ? t : Yo,
                    o = function() {
                        var l = i.then;
                        i.then = null, ce(s) && (s = s(i)) && (s.then || s === i) && (i.then = l), n(s), i.then = l
                    };
                i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o
            })
        }, e.kill = function() {
            Si(this)
        }, a
    }();
Ct(fi.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ee,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var rt = function(a) {
    Co(e, a);

    function e(t, i) {
        var n;
        return t === void 0 && (t = {}), n = a.call(this, t) || this, n.labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = it(t.sortChildren), ae && Vt(t.parent || ae, Zt(n), i), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && Uo(Zt(n), t.scrollTrigger), n
    }
    var r = e.prototype;
    return r.to = function(i, n, s) {
        return Ei(0, arguments, this), this
    }, r.from = function(i, n, s) {
        return Ei(1, arguments, this), this
    }, r.fromTo = function(i, n, s, o) {
        return Ei(2, arguments, this), this
    }, r.set = function(i, n, s) {
        return n.duration = 0, n.parent = this, Di(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new xe(i, n, xt(this, s), 1), this
    }, r.call = function(i, n, s) {
        return Vt(this, xe.delayedCall(0, i, n), s)
    }, r.staggerTo = function(i, n, s, o, u, l, f) {
        return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = f, s.parent = this, new xe(i, s, xt(this, u)), this
    }, r.staggerFrom = function(i, n, s, o, u, l, f) {
        return s.runBackwards = 1, Di(s).immediateRender = it(s.immediateRender), this.staggerTo(i, n, s, o, u, l, f)
    }, r.staggerFromTo = function(i, n, s, o, u, l, f, d) {
        return o.startAt = s, Di(o).immediateRender = it(o.immediateRender), this.staggerTo(i, n, o, u, l, f, d)
    }, r.render = function(i, n, s) {
        var o = this._time,
            u = this._dirty ? this.totalDuration() : this._tDur,
            l = this._dur,
            f = i <= 0 ? 0 : Ae(i),
            d = this._zTime < 0 != i < 0 && (this._initted || !l),
            h, c, p, _, m, y, w, b, x, S, C, T;
        if (this !== ae && f > u && i >= 0 && (f = u), f !== this._tTime || s || d) {
            if (o !== this._time && l && (f += this._time - o, i += this._time - o), h = f, x = this._start, b = this._ts, y = !b, d && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
                if (C = this._yoyo, m = l + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(m * 100 + i, n, s);
                if (h = Ae(f % m), f === u ? (_ = this._repeat, h = l) : (_ = ~~(f / m), _ && _ === f / m && (h = l, _--), h > l && (h = l)), S = ai(this._tTime, m), !o && this._tTime && S !== _ && this._tTime - S * m - this._dur <= 0 && (S = _), C && _ & 1 && (h = l - h, T = 1), _ !== S && !this._lock) {
                    var k = C && S & 1,
                        P = k === (C && _ & 1);
                    if (_ < S && (k = !k), o = k ? 0 : l, this._lock = 1, this.render(o || (T ? 0 : Ae(_ * m)), n, !l)._lock = 0, this._tTime = f, !n && this.parent && Pt(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (l = this._dur, u = this._tDur, P && (this._lock = 2, o = k ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !y) return this;
                    na(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (w = lu(this, Ae(o), Ae(h)), w && (f -= h - (h = w._start))), this._tTime = f, this._time = h, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && h && !n && !_ && (Pt(this, "onStart"), this._tTime !== f)) return this;
            if (h >= o && i >= 0)
                for (c = this._first; c;) {
                    if (p = c._next, (c._act || h >= c._start) && c._ts && w !== c) {
                        if (c.parent !== this) return this.render(i, n, s);
                        if (c.render(c._ts > 0 ? (h - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (h - c._start) * c._ts, n, s), h !== this._time || !this._ts && !y) {
                            w = 0, p && (f += this._zTime = -ee);
                            break
                        }
                    }
                    c = p
                } else {
                    c = this._last;
                    for (var M = i < 0 ? i : h; c;) {
                        if (p = c._prev, (c._act || M <= c._end) && c._ts && w !== c) {
                            if (c.parent !== this) return this.render(i, n, s);
                            if (c.render(c._ts > 0 ? (M - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (M - c._start) * c._ts, n, s || Ne && (c._initted || c._startAt)), h !== this._time || !this._ts && !y) {
                                w = 0, p && (f += this._zTime = M ? -ee : ee);
                                break
                            }
                        }
                        c = p
                    }
                }
            if (w && !n && (this.pause(), w.render(h >= o ? 0 : -ee)._zTime = h >= o ? 1 : -1, this._ts)) return this._start = x, En(this), this.render(i, n, s);
            this._onUpdate && !n && Pt(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && o) && (x === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && mr(this, 1), !n && !(i < 0 && !o) && (f || o || !u) && (Pt(this, f === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, r.add = function(i, n) {
        var s = this;
        if (tr(n) || (n = xt(this, n, i)), !(i instanceof fi)) {
            if (Ye(i)) return i.forEach(function(o) {
                return s.add(o, n)
            }), this;
            if (Me(i)) return this.addLabel(i, n);
            if (ce(i)) i = xe.delayedCall(0, i);
            else return this
        }
        return this !== i ? Vt(this, i, n) : this
    }, r.getChildren = function(i, n, s, o) {
        i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -wt);
        for (var u = [], l = this._first; l;) l._start >= o && (l instanceof xe ? n && u.push(l) : (s && u.push(l), i && u.push.apply(u, l.getChildren(!0, n, s)))), l = l._next;
        return u
    }, r.getById = function(i) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === i) return n[s]
    }, r.remove = function(i) {
        return Me(i) ? this.removeLabel(i) : ce(i) ? this.killTweensOf(i) : (Dn(this, i), i === this._recent && (this._recent = this._last), Ar(this))
    }, r.totalTime = function(i, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ae(dt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime
    }, r.addLabel = function(i, n) {
        return this.labels[i] = xt(this, n), this
    }, r.removeLabel = function(i) {
        return delete this.labels[i], this
    }, r.addPause = function(i, n, s) {
        var o = xe.delayedCall(0, n || Xi, s);
        return o.data = "isPause", this._hasPause = 1, Vt(this, o, xt(this, i))
    }, r.removePause = function(i) {
        var n = this._first;
        for (i = xt(this, i); n;) n._start === i && n.data === "isPause" && mr(n), n = n._next
    }, r.killTweensOf = function(i, n, s) {
        for (var o = this.getTweensOf(i, s), u = o.length; u--;) ur !== o[u] && o[u].kill(i, n);
        return this
    }, r.getTweensOf = function(i, n) {
        for (var s = [], o = St(i), u = this._first, l = tr(n), f; u;) u instanceof xe ? ru(u._targets, o) && (l ? (!ur || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (f = u.getTweensOf(o, n)).length && s.push.apply(s, f), u = u._next;
        return s
    }, r.tweenTo = function(i, n) {
        n = n || {};
        var s = this,
            o = xt(s, i),
            u = n,
            l = u.startAt,
            f = u.onStart,
            d = u.onStartParams,
            h = u.immediateRender,
            c, p = xe.to(s, Ct({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || ee,
                onStart: function() {
                    if (s.pause(), !c) {
                        var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
                        p._dur !== m && ui(p, m, 0, 1).render(p._time, !0, !0), c = 1
                    }
                    f && f.apply(p, d || [])
                }
            }, n));
        return h ? p.render(0) : p
    }, r.tweenFromTo = function(i, n, s) {
        return this.tweenTo(n, Ct({
            startAt: {
                time: xt(this, i)
            }
        }, s))
    }, r.recent = function() {
        return this._recent
    }, r.nextLabel = function(i) {
        return i === void 0 && (i = this._time), Js(this, xt(this, i))
    }, r.previousLabel = function(i) {
        return i === void 0 && (i = this._time), Js(this, xt(this, i), 1)
    }, r.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ee)
    }, r.shiftChildren = function(i, n, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, u = this.labels, l; o;) o._start >= s && (o._start += i, o._end += i), o = o._next;
        if (n)
            for (l in u) u[l] >= s && (u[l] += i);
        return Ar(this)
    }, r.invalidate = function(i) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(i), n = n._next;
        return a.prototype.invalidate.call(this, i)
    }, r.clear = function(i) {
        i === void 0 && (i = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Ar(this)
    }, r.totalDuration = function(i) {
        var n = 0,
            s = this,
            o = s._last,
            u = wt,
            l, f, d;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (d = s.parent; o;) l = o._prev, o._dirty && o.totalDuration(), f = o._start, f > u && s._sort && o._ts && !s._lock ? (s._lock = 1, Vt(s, o, f - o._delay, 1)._lock = 0) : u = f, f < 0 && o._ts && (n -= f, (!d && !s._dp || d && d.smoothChildTiming) && (s._start += f / s._ts, s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), u = 0), o._end > n && o._ts && (n = o._end), o = l;
            ui(s, s === ae && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function(i) {
        if (ae._ts && (Bo(ae, bn(i, ae)), Lo = dt.frame), dt.frame >= Hs) {
            Hs += gt.autoSleep || 120;
            var n = ae._first;
            if ((!n || !n._ts) && gt.autoSleep && dt._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || dt.sleep()
            }
        }
    }, e
}(fi);
Ct(rt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Pu = function(e, r, t, i, n, s, o) {
        var u = new st(this._pt, e, r, 0, 1, ha, null, n),
            l = 0,
            f = 0,
            d, h, c, p, _, m, y, w;
        for (u.b = t, u.e = i, t += "", i += "", (y = ~i.indexOf("random(")) && (i = Vi(i)), s && (w = [t, i], s(w, e, r), t = w[0], i = w[1]), h = t.match(zn) || []; d = zn.exec(i);) p = d[0], _ = i.substring(l, d.index), c ? c = (c + 1) % 5 : _.substr(-5) === "rgba(" && (c = 1), p !== h[f++] && (m = parseFloat(h[f - 1]) || 0, u._pt = {
            _next: u._pt,
            p: _ || f === 1 ? _ : ",",
            s: m,
            c: p.charAt(1) === "=" ? ti(m, p) - m : parseFloat(p) - m,
            m: c && c < 4 ? Math.round : 0
        }, l = zn.lastIndex);
        return u.c = l < i.length ? i.substring(l, i.length) : "", u.fp = o, (Eo.test(i) || y) && (u.e = 0), this._pt = u, u
    },
    Es = function(e, r, t, i, n, s, o, u, l, f) {
        ce(i) && (i = i(n || 0, e, s));
        var d = e[r],
            h = t !== "get" ? t : ce(d) ? l ? e[r.indexOf("set") || !ce(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](l) : e[r]() : d,
            c = ce(d) ? l ? Du : fa : Rs,
            p;
        if (Me(i) && (~i.indexOf("random(") && (i = Vi(i)), i.charAt(1) === "=" && (p = ti(h, i) + (Be(h) || 0), (p || p === 0) && (i = p))), !f || h !== i || os) return !isNaN(h * i) && i !== "" ? (p = new st(this._pt, e, r, +h || 0, i - (h || 0), typeof d == "boolean" ? Au : ca, 0, c), l && (p.fp = l), o && p.modifier(o, this, e), this._pt = p) : (!d && !(r in e) && Cs(r, i), Pu.call(this, e, r, h, i, c, u || gt.stringFilter, l))
    },
    ku = function(e, r, t, i, n) {
        if (ce(e) && (e = Ai(e, n, r, t, i)), !qt(e) || e.style && e.nodeType || Ye(e) || Mo(e)) return Me(e) ? Ai(e, n, r, t, i) : e;
        var s = {},
            o;
        for (o in e) s[o] = Ai(e[o], n, r, t, i);
        return s
    },
    aa = function(e, r, t, i, n, s) {
        var o, u, l, f;
        if (ht[e] && (o = new ht[e]).init(n, o.rawVars ? r[e] : ku(r[e], i, n, s, t), t, i, s) !== !1 && (t._pt = u = new st(t._pt, n, e, 0, 1, o.render, o, 0, o.priority), t !== Jr))
            for (l = t._ptLookup[t._targets.indexOf(n)], f = o._props.length; f--;) l[o._props[f]] = u;
        return o
    },
    ur, os, As = function a(e, r, t) {
        var i = e.vars,
            n = i.ease,
            s = i.startAt,
            o = i.immediateRender,
            u = i.lazy,
            l = i.onUpdate,
            f = i.onUpdateParams,
            d = i.callbackScope,
            h = i.runBackwards,
            c = i.yoyoEase,
            p = i.keyframes,
            _ = i.autoRevert,
            m = e._dur,
            y = e._startAt,
            w = e._targets,
            b = e.parent,
            x = b && b.data === "nested" ? b.vars.targets : w,
            S = e._overwrite === "auto" && !ws,
            C = e.timeline,
            T, k, P, M, F, D, Z, Y, B, q, z, G, J;
        if (C && (!p || !n) && (n = "none"), e._ease = Rr(n, oi.ease), e._yEase = c ? ia(Rr(c === !0 ? n : c, oi.ease)) : 0, c && e._yoyo && !e._repeat && (c = e._yEase, e._yEase = e._ease, e._ease = c), e._from = !C && !!i.runBackwards, !C || p && !i.stagger) {
            if (Y = w[0] ? Er(w[0]).harness : 0, G = Y && i[Y.prop], T = Tn(i, Os), y && (y._zTime < 0 && y.progress(1), r < 0 && h && o && !_ ? y.render(-1, !0) : y.revert(h && m ? un : eu), y._lazy = 0), s) {
                if (mr(e._startAt = xe.set(w, Ct({
                        data: "isStart",
                        overwrite: !1,
                        parent: b,
                        immediateRender: !0,
                        lazy: !y && it(u),
                        startAt: null,
                        delay: 0,
                        onUpdate: l,
                        onUpdateParams: f,
                        callbackScope: d,
                        stagger: 0
                    }, s))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Ne || !o && !_) && e._startAt.revert(un), o && m && r <= 0 && t <= 0) {
                    r && (e._zTime = r);
                    return
                }
            } else if (h && m && !y) {
                if (r && (o = !1), P = Ct({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: o && !y && it(u),
                        immediateRender: o,
                        stagger: 0,
                        parent: b
                    }, T), G && (P[Y.prop] = G), mr(e._startAt = xe.set(w, P)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Ne ? e._startAt.revert(un) : e._startAt.render(-1, !0)), e._zTime = r, !o) a(e._startAt, ee, ee);
                else if (!r) return
            }
            for (e._pt = e._ptCache = 0, u = m && it(u) || u && !m, k = 0; k < w.length; k++) {
                if (F = w[k], Z = F._gsap || Ds(w)[k]._gsap, e._ptLookup[k] = q = {}, es[Z.id] && dr.length && xn(), z = x === w ? k : x.indexOf(F), Y && (B = new Y).init(F, G || T, e, z, x) !== !1 && (e._pt = M = new st(e._pt, F, B.name, 0, 1, B.render, B, 0, B.priority), B._props.forEach(function(g) {
                        q[g] = M
                    }), B.priority && (D = 1)), !Y || G)
                    for (P in T) ht[P] && (B = aa(P, T, e, z, F, x)) ? B.priority && (D = 1) : q[P] = M = Es.call(e, F, P, "get", T[P], z, x, 0, i.stringFilter);
                e._op && e._op[k] && e.kill(F, e._op[k]), S && e._pt && (ur = e, ae.killTweensOf(F, q, e.globalTime(r)), J = !e.parent, ur = 0), e._pt && u && (es[Z.id] = 1)
            }
            D && _a(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = l, e._initted = (!e._op || e._pt) && !J, p && r <= 0 && C.render(wt, !0, !0)
    },
    Cu = function(e, r, t, i, n, s, o) {
        var u = (e._pt && e._ptCache || (e._ptCache = {}))[r],
            l, f, d, h;
        if (!u)
            for (u = e._ptCache[r] = [], d = e._ptLookup, h = e._targets.length; h--;) {
                if (l = d[h][r], l && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== r && l.fp !== r;) l = l._next;
                if (!l) return os = 1, e.vars[r] = "+=0", As(e, o), os = 0, 1;
                u.push(l)
            }
        for (h = u.length; h--;) f = u[h], l = f._pt || f, l.s = (i || i === 0) && !n ? i : l.s + (i || 0) + s * l.c, l.c = t - l.s, f.e && (f.e = pe(t) + Be(f.e)), f.b && (f.b = l.s + Be(f.b))
    },
    Ou = function(e, r) {
        var t = e[0] ? Er(e[0]).harness : 0,
            i = t && t.aliases,
            n, s, o, u;
        if (!i) return r;
        n = Ir({}, r);
        for (s in i)
            if (s in n)
                for (u = i[s].split(","), o = u.length; o--;) n[u[o]] = n[s];
        return n
    },
    Mu = function(e, r, t, i) {
        var n = r.ease || i || "power1.inOut",
            s, o;
        if (Ye(r)) o = t[e] || (t[e] = []), r.forEach(function(u, l) {
            return o.push({
                t: l / (r.length - 1) * 100,
                v: u,
                e: n
            })
        });
        else
            for (s in r) o = t[s] || (t[s] = []), s === "ease" || o.push({
                t: parseFloat(e),
                v: r[s],
                e: n
            })
    },
    Ai = function(e, r, t, i, n) {
        return ce(e) ? e.call(r, t, i, n) : Me(e) && ~e.indexOf("random(") ? Vi(e) : e
    },
    ua = Ms + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    la = {};
nt(ua + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
    return la[a] = 1
});
var xe = function(a) {
    Co(e, a);

    function e(t, i, n, s) {
        var o;
        typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : Di(i)) || this;
        var u = o.vars,
            l = u.duration,
            f = u.delay,
            d = u.immediateRender,
            h = u.stagger,
            c = u.overwrite,
            p = u.keyframes,
            _ = u.defaults,
            m = u.scrollTrigger,
            y = u.yoyoEase,
            w = i.parent || ae,
            b = (Ye(t) || Mo(t) ? tr(t[0]) : "length" in i) ? [t] : St(t),
            x, S, C, T, k, P, M, F;
        if (o._targets = b.length ? Ds(b) : vn("GSAP target " + t + " not found. https://greensock.com", !gt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = c, p || h || Ki(l) || Ki(f)) {
            if (i = o.vars, x = o.timeline = new rt({
                    data: "nested",
                    defaults: _ || {},
                    targets: w && w.data === "nested" ? w.vars.targets : b
                }), x.kill(), x.parent = x._dp = Zt(o), x._start = 0, h || Ki(l) || Ki(f)) {
                if (T = b.length, M = h && Go(h), qt(h))
                    for (k in h) ~ua.indexOf(k) && (F || (F = {}), F[k] = h[k]);
                for (S = 0; S < T; S++) C = Tn(i, la), C.stagger = 0, y && (C.yoyoEase = y), F && Ir(C, F), P = b[S], C.duration = +Ai(l, Zt(o), S, P, b), C.delay = (+Ai(f, Zt(o), S, P, b) || 0) - o._delay, !h && T === 1 && C.delay && (o._delay = f = C.delay, o._start += f, C.delay = 0), x.to(P, C, M ? M(S, P, b) : 0), x._ease = H.none;
                x.duration() ? l = f = 0 : o.timeline = 0
            } else if (p) {
                Di(Ct(x.vars.defaults, {
                    ease: "none"
                })), x._ease = Rr(p.ease || i.ease || "none");
                var D = 0,
                    Z, Y, B;
                if (Ye(p)) p.forEach(function(q) {
                    return x.to(b, q, ">")
                }), x.duration();
                else {
                    C = {};
                    for (k in p) k === "ease" || k === "easeEach" || Mu(k, p[k], C, p.easeEach);
                    for (k in C)
                        for (Z = C[k].sort(function(q, z) {
                                return q.t - z.t
                            }), D = 0, S = 0; S < Z.length; S++) Y = Z[S], B = {
                            ease: Y.e,
                            duration: (Y.t - (S ? Z[S - 1].t : 0)) / 100 * l
                        }, B[k] = Y.v, x.to(b, B, D), D += B.duration;
                    x.duration() < l && x.to({}, {
                        duration: l - x.duration()
                    })
                }
            }
            l || o.duration(l = x.duration())
        } else o.timeline = 0;
        return c === !0 && !ws && (ur = Zt(o), ae.killTweensOf(b), ur = 0), Vt(w, Zt(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (d || !l && !p && o._start === Ae(w._time) && it(d) && ou(Zt(o)) && w.data !== "nested") && (o._tTime = -ee, o.render(Math.max(0, -f) || 0)), m && Uo(Zt(o), m), o
    }
    var r = e.prototype;
    return r.render = function(i, n, s) {
        var o = this._time,
            u = this._tDur,
            l = this._dur,
            f = i < 0,
            d = i > u - ee && !f ? u : i < ee ? 0 : i,
            h, c, p, _, m, y, w, b, x;
        if (!l) uu(this, i, n, s);
        else if (d !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
            if (h = d, b = this.timeline, this._repeat) {
                if (_ = l + this._rDelay, this._repeat < -1 && f) return this.totalTime(_ * 100 + i, n, s);
                if (h = Ae(d % _), d === u ? (p = this._repeat, h = l) : (p = ~~(d / _), p && p === d / _ && (h = l, p--), h > l && (h = l)), y = this._yoyo && p & 1, y && (x = this._yEase, h = l - h), m = ai(this._tTime, _), h === o && !s && this._initted) return this._tTime = d, this;
                p !== m && (b && this._yEase && na(b, y), this.vars.repeatRefresh && !y && !this._lock && (this._lock = s = 1, this.render(Ae(_ * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if ($o(this, f ? i : h, s, n, d)) return this._tTime = 0, this;
                if (o !== this._time) return this;
                if (l !== this._dur) return this.render(i, n, s)
            }
            if (this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = w = (x || this._ease)(h / l), this._from && (this.ratio = w = 1 - w), h && !o && !n && !p && (Pt(this, "onStart"), this._tTime !== d)) return this;
            for (c = this._pt; c;) c.r(w, c.d), c = c._next;
            b && b.render(i < 0 ? i : !h && y ? -ee : b._dur * b._ease(h / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && ts(this, i, n, s), Pt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && Pt(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (f && !this._onUpdate && ts(this, i, !0, !0), (i || !l) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && mr(this, 1), !n && !(f && !o) && (d || o || y) && (Pt(this, d === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < u && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, r.targets = function() {
        return this._targets
    }, r.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i)
    }, r.resetTo = function(i, n, s, o) {
        Ui || dt.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            l;
        return this._initted || As(this, u), l = this._ease(u / this._dur), Cu(this, i, n, s, o, l, u) ? this.resetTo(i, n, s, o) : (An(this, 0), this.parent || Xo(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, r.kill = function(i, n) {
        if (n === void 0 && (n = "all"), !i && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? Si(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, ur && ur.vars.overwrite !== !0)._first || Si(this), this.parent && s !== this.timeline.totalDuration() && ui(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var o = this._targets,
            u = i ? St(i) : o,
            l = this._ptLookup,
            f = this._pt,
            d, h, c, p, _, m, y;
        if ((!n || n === "all") && nu(o, u)) return n === "all" && (this._pt = 0), Si(this);
        for (d = this._op = this._op || [], n !== "all" && (Me(n) && (_ = {}, nt(n, function(w) {
                return _[w] = 1
            }), n = _), n = Ou(o, n)), y = o.length; y--;)
            if (~u.indexOf(o[y])) {
                h = l[y], n === "all" ? (d[y] = n, p = h, c = {}) : (c = d[y] = d[y] || {}, p = n);
                for (_ in p) m = h && h[_], m && ((!("kill" in m.d) || m.d.kill(_) === !0) && Dn(this, m, "_pt"), delete h[_]), c !== "all" && (c[_] = 1)
            } return this._initted && !this._pt && f && Si(this), this
    }, e.to = function(i, n) {
        return new e(i, n, arguments[2])
    }, e.from = function(i, n) {
        return Ei(1, arguments)
    }, e.delayedCall = function(i, n, s, o) {
        return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: o
        })
    }, e.fromTo = function(i, n, s) {
        return Ei(2, arguments)
    }, e.set = function(i, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n)
    }, e.killTweensOf = function(i, n, s) {
        return ae.killTweensOf(i, n, s)
    }, e
}(fi);
Ct(xe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
nt("staggerTo,staggerFrom,staggerFromTo", function(a) {
    xe[a] = function() {
        var e = new rt,
            r = is.call(arguments, 0);
        return r.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, r)
    }
});
var Rs = function(e, r, t) {
        return e[r] = t
    },
    fa = function(e, r, t) {
        return e[r](t)
    },
    Du = function(e, r, t, i) {
        return e[r](i.fp, t)
    },
    Eu = function(e, r, t) {
        return e.setAttribute(r, t)
    },
    Fs = function(e, r) {
        return ce(e[r]) ? fa : Ss(e[r]) && e.setAttribute ? Eu : Rs
    },
    ca = function(e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
    },
    Au = function(e, r) {
        return r.set(r.t, r.p, !!(r.s + r.c * e), r)
    },
    ha = function(e, r) {
        var t = r._pt,
            i = "";
        if (!e && r.b) i = r.b;
        else if (e === 1 && r.e) i = r.e;
        else {
            for (; t;) i = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + i, t = t._next;
            i += r.c
        }
        r.set(r.t, r.p, i, r)
    },
    zs = function(e, r) {
        for (var t = r._pt; t;) t.r(e, t.d), t = t._next
    },
    Ru = function(e, r, t, i) {
        for (var n = this._pt, s; n;) s = n._next, n.p === i && n.modifier(e, r, t), n = s
    },
    Fu = function(e) {
        for (var r = this._pt, t, i; r;) i = r._next, r.p === e && !r.op || r.op === e ? Dn(this, r, "_pt") : r.dep || (t = 1), r = i;
        return !t
    },
    zu = function(e, r, t, i) {
        i.mSet(e, r, i.m.call(i.tween, t, i.mt), i)
    },
    _a = function(e) {
        for (var r = e._pt, t, i, n, s; r;) {
            for (t = r._next, i = n; i && i.pr > r.pr;) i = i._next;
            (r._prev = i ? i._prev : s) ? r._prev._next = r: n = r, (r._next = i) ? i._prev = r : s = r, r = t
        }
        e._pt = n
    },
    st = function() {
        function a(r, t, i, n, s, o, u, l, f) {
            this.t = t, this.s = n, this.c = s, this.p = i, this.r = o || ca, this.d = u || this, this.set = l || Rs, this.pr = f || 0, this._next = r, r && (r._prev = this)
        }
        var e = a.prototype;
        return e.modifier = function(t, i, n) {
            this.mSet = this.mSet || this.set, this.set = zu, this.m = t, this.mt = n, this.tween = i
        }, a
    }();
nt(Ms + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
    return Os[a] = 1
});
mt.TweenMax = mt.TweenLite = xe;
mt.TimelineLite = mt.TimelineMax = rt;
ae = new rt({
    sortChildren: !1,
    defaults: oi,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
gt.stringFilter = ra;
var ci = [],
    fn = {},
    Lu = [],
    eo = 0,
    Yn = function(e) {
        return (fn[e] || Lu).map(function(r) {
            return r()
        })
    },
    as = function() {
        var e = Date.now(),
            r = [];
        e - eo > 2 && (Yn("matchMediaInit"), ci.forEach(function(t) {
            var i = t.queries,
                n = t.conditions,
                s, o, u, l;
            for (o in i) s = Tt.matchMedia(i[o]).matches, s && (u = 1), s !== n[o] && (n[o] = s, l = 1);
            l && (t.revert(), u && r.push(t))
        }), Yn("matchMediaRevert"), r.forEach(function(t) {
            return t.onMatch(t)
        }), eo = e, Yn("matchMedia"))
    },
    da = function() {
        function a(r, t) {
            this.selector = t && ns(t), this.data = [], this._r = [], this.isReverted = !1, r && this.add(r)
        }
        var e = a.prototype;
        return e.add = function(t, i, n) {
            ce(t) && (n = i, i = t, t = ce);
            var s = this,
                o = function() {
                    var l = ye,
                        f = s.selector,
                        d;
                    return l && l !== s && l.data.push(s), n && (s.selector = ns(n)), ye = s, d = i.apply(s, arguments), ce(d) && s._r.push(d), ye = l, s.selector = f, s.isReverted = !1, d
                };
            return s.last = o, t === ce ? o(s) : t ? s[t] = o : o
        }, e.ignore = function(t) {
            var i = ye;
            ye = null, t(this), ye = i
        }, e.getTweens = function() {
            var t = [];
            return this.data.forEach(function(i) {
                return i instanceof a ? t.push.apply(t, i.getTweens()) : i instanceof xe && !(i.parent && i.parent.data === "nested") && t.push(i)
            }), t
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(t, i) {
            var n = this;
            if (t) {
                var s = this.getTweens();
                this.data.forEach(function(u) {
                    u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(l) {
                        return s.splice(s.indexOf(l), 1)
                    }))
                }), s.map(function(u) {
                    return {
                        g: u.globalTime(0),
                        t: u
                    }
                }).sort(function(u, l) {
                    return l.g - u.g || -1
                }).forEach(function(u) {
                    return u.t.revert(t)
                }), this.data.forEach(function(u) {
                    return !(u instanceof fi) && u.revert && u.revert(t)
                }), this._r.forEach(function(u) {
                    return u(t, n)
                }), this.isReverted = !0
            } else this.data.forEach(function(u) {
                return u.kill && u.kill()
            });
            if (this.clear(), i) {
                var o = ci.indexOf(this);
                ~o && ci.splice(o, 1)
            }
        }, e.revert = function(t) {
            this.kill(t || {})
        }, a
    }(),
    Iu = function() {
        function a(r) {
            this.contexts = [], this.scope = r
        }
        var e = a.prototype;
        return e.add = function(t, i, n) {
            qt(t) || (t = {
                matches: t
            });
            var s = new da(0, n || this.scope),
                o = s.conditions = {},
                u, l, f;
            this.contexts.push(s), i = s.add("onMatch", i), s.queries = t;
            for (l in t) l === "all" ? f = 1 : (u = Tt.matchMedia(t[l]), u && (ci.indexOf(s) < 0 && ci.push(s), (o[l] = u.matches) && (f = 1), u.addListener ? u.addListener(as) : u.addEventListener("change", as)));
            return f && i(s), this
        }, e.revert = function(t) {
            this.kill(t || {})
        }, e.kill = function(t) {
            this.contexts.forEach(function(i) {
                return i.kill(t, !0)
            })
        }, a
    }(),
    wn = {
        registerPlugin: function() {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
            r.forEach(function(i) {
                return jo(i)
            })
        },
        timeline: function(e) {
            return new rt(e)
        },
        getTweensOf: function(e, r) {
            return ae.getTweensOf(e, r)
        },
        getProperty: function(e, r, t, i) {
            Me(e) && (e = St(e)[0]);
            var n = Er(e || {}).get,
                s = t ? Yo : No;
            return t === "native" && (t = ""), e && (r ? s((ht[r] && ht[r].get || n)(e, r, t, i)) : function(o, u, l) {
                return s((ht[o] && ht[o].get || n)(e, o, u, l))
            })
        },
        quickSetter: function(e, r, t) {
            if (e = St(e), e.length > 1) {
                var i = e.map(function(f) {
                        return Xe.quickSetter(f, r, t)
                    }),
                    n = i.length;
                return function(f) {
                    for (var d = n; d--;) i[d](f)
                }
            }
            e = e[0] || {};
            var s = ht[r],
                o = Er(e),
                u = o.harness && (o.harness.aliases || {})[r] || r,
                l = s ? function(f) {
                    var d = new s;
                    Jr._pt = 0, d.init(e, t ? f + t : f, Jr, 0, [e]), d.render(1, d), Jr._pt && zs(1, Jr)
                } : o.set(e, u);
            return s ? l : function(f) {
                return l(e, u, t ? f + t : f, o, 1)
            }
        },
        quickTo: function(e, r, t) {
            var i, n = Xe.to(e, Ir((i = {}, i[r] = "+=0.1", i.paused = !0, i), t || {})),
                s = function(u, l, f) {
                    return n.resetTo(r, u, l, f)
                };
            return s.tween = n, s
        },
        isTweening: function(e) {
            return ae.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Rr(e.ease, oi.ease)), Ks(oi, e || {})
        },
        config: function(e) {
            return Ks(gt, e || {})
        },
        registerEffect: function(e) {
            var r = e.name,
                t = e.effect,
                i = e.plugins,
                n = e.defaults,
                s = e.extendTimeline;
            (i || "").split(",").forEach(function(o) {
                return o && !ht[o] && !mt[o] && vn(r + " effect requires " + o + " plugin.")
            }), Ln[r] = function(o, u, l) {
                return t(St(o), Ct(u || {}, n), l)
            }, s && (rt.prototype[r] = function(o, u, l) {
                return this.add(Ln[r](o, qt(u) ? u : (l = u) && {}, this), l)
            })
        },
        registerEase: function(e, r) {
            H[e] = Rr(r)
        },
        parseEase: function(e, r) {
            return arguments.length ? Rr(e, r) : H
        },
        getById: function(e) {
            return ae.getById(e)
        },
        exportRoot: function(e, r) {
            e === void 0 && (e = {});
            var t = new rt(e),
                i, n;
            for (t.smoothChildTiming = it(e.smoothChildTiming), ae.remove(t), t._dp = 0, t._time = t._tTime = ae._time, i = ae._first; i;) n = i._next, (r || !(!i._dur && i instanceof xe && i.vars.onComplete === i._targets[0])) && Vt(t, i, i._start - i._delay), i = n;
            return Vt(ae, t, 0), t
        },
        context: function(e, r) {
            return e ? new da(e, r) : ye
        },
        matchMedia: function(e) {
            return new Iu(e)
        },
        matchMediaRefresh: function() {
            return ci.forEach(function(e) {
                var r = e.conditions,
                    t, i;
                for (i in r) r[i] && (r[i] = !1, t = 1);
                t && e.revert()
            }) || as()
        },
        addEventListener: function(e, r) {
            var t = fn[e] || (fn[e] = []);
            ~t.indexOf(r) || t.push(r)
        },
        removeEventListener: function(e, r) {
            var t = fn[e],
                i = t && t.indexOf(r);
            i >= 0 && t.splice(i, 1)
        },
        utils: {
            wrap: gu,
            wrapYoyo: mu,
            distribute: Go,
            random: Ko,
            snap: Ho,
            normalize: pu,
            getUnit: Be,
            clamp: cu,
            splitColor: ea,
            toArray: St,
            selector: ns,
            mapRange: Qo,
            pipe: _u,
            unitize: du,
            interpolate: yu,
            shuffle: qo
        },
        install: Fo,
        effects: Ln,
        ticker: dt,
        updateRoot: rt.updateRoot,
        plugins: ht,
        globalTimeline: ae,
        core: {
            PropTween: st,
            globals: zo,
            Tween: xe,
            Timeline: rt,
            Animation: fi,
            getCache: Er,
            _removeLinkedListItem: Dn,
            reverting: function() {
                return Ne
            },
            context: function(e) {
                return e && ye && (ye.data.push(e), e._ctx = ye), ye
            },
            suppressOverwrites: function(e) {
                return ws = e
            }
        }
    };
nt("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
    return wn[a] = xe[a]
});
dt.add(rt.updateRoot);
Jr = wn.to({}, {
    duration: 0
});
var Bu = function(e, r) {
        for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r;) t = t._next;
        return t
    },
    Nu = function(e, r) {
        var t = e._targets,
            i, n, s;
        for (i in r)
            for (n = t.length; n--;) s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = Bu(s, i)), s && s.modifier && s.modifier(r[i], e, t[n], i))
    },
    Xn = function(e, r) {
        return {
            name: e,
            rawVars: 1,
            init: function(i, n, s) {
                s._onInit = function(o) {
                    var u, l;
                    if (Me(n) && (u = {}, nt(n, function(f) {
                            return u[f] = 1
                        }), n = u), r) {
                        u = {};
                        for (l in n) u[l] = r(n[l]);
                        n = u
                    }
                    Nu(o, n)
                }
            }
        }
    },
    Xe = wn.registerPlugin({
        name: "attr",
        init: function(e, r, t, i, n) {
            var s, o, u;
            this.tween = t;
            for (s in r) u = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (u || 0) + "", r[s], i, n, 0, 0, s), o.op = s, o.b = u, this._props.push(s)
        },
        render: function(e, r) {
            for (var t = r._pt; t;) Ne ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), t = t._next
        }
    }, {
        name: "endArray",
        init: function(e, r) {
            for (var t = r.length; t--;) this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1)
        }
    }, Xn("roundProps", ss), Xn("modifiers"), Xn("snap", Ho)) || wn;
xe.version = rt.version = Xe.version = "3.11.5";
Ro = 1;
Ps() && li();
H.Power0;
H.Power1;
H.Power2;
H.Power3;
H.Power4;
H.Linear;
H.Quad;
H.Cubic;
H.Quart;
H.Quint;
H.Strong;
H.Elastic;
H.Back;
H.SteppedEase;
H.Bounce;
H.Sine;
H.Expo;
H.Circ;
/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var to, lr, ri, Ls, Mr, ro, Is, Yu = function() {
        return typeof window < "u"
    },
    rr = {},
    Cr = 180 / Math.PI,
    ii = Math.PI / 180,
    qr = Math.atan2,
    io = 1e8,
    Bs = /([A-Z])/g,
    Xu = /(left|right|width|margin|padding|x)/i,
    Vu = /[\s,\(]\S/,
    Ut = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    us = function(e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    Uu = function(e, r) {
        return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    $u = function(e, r) {
        return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
    },
    Wu = function(e, r) {
        var t = r.s + r.c * e;
        r.set(r.t, r.p, ~~(t + (t < 0 ? -.5 : .5)) + r.u, r)
    },
    pa = function(e, r) {
        return r.set(r.t, r.p, e ? r.e : r.b, r)
    },
    ga = function(e, r) {
        return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
    },
    qu = function(e, r, t) {
        return e.style[r] = t
    },
    Gu = function(e, r, t) {
        return e.style.setProperty(r, t)
    },
    Hu = function(e, r, t) {
        return e._gsap[r] = t
    },
    Ku = function(e, r, t) {
        return e._gsap.scaleX = e._gsap.scaleY = t
    },
    Zu = function(e, r, t, i, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = t, s.renderTransform(n, s)
    },
    Qu = function(e, r, t, i, n) {
        var s = e._gsap;
        s[r] = t, s.renderTransform(n, s)
    },
    ue = "transform",
    Lt = ue + "Origin",
    Ju = function a(e, r) {
        var t = this,
            i = this.target,
            n = i.style;
        if (e in rr) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = Ut[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
                return t.tfm[s] = Qt(i, s)
            }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : Qt(i, e);
            else return Ut.transform.split(",").forEach(function(s) {
                return a.call(t, s, r)
            });
            if (this.props.indexOf(ue) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Lt, r, "")), e = ue
        }(n || r) && this.props.push(e, r, n[e])
    },
    ma = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    ju = function() {
        var e = this.props,
            r = this.target,
            t = r.style,
            i = r._gsap,
            n, s;
        for (n = 0; n < e.length; n += 3) e[n + 1] ? r[e[n]] = e[n + 2] : e[n + 2] ? t[e[n]] = e[n + 2] : t.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Bs, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) i[s] = this.tfm[s];
            i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), n = Is(), (!n || !n.isStart) && !t[ue] && (ma(t), i.uncache = 1)
        }
    },
    ya = function(e, r) {
        var t = {
            target: e,
            props: [],
            revert: ju,
            save: Ju
        };
        return e._gsap || Xe.core.getCache(e), r && r.split(",").forEach(function(i) {
            return t.save(i)
        }), t
    },
    va, ls = function(e, r) {
        var t = lr.createElementNS ? lr.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : lr.createElement(e);
        return t.style ? t : lr.createElement(e)
    },
    $t = function a(e, r, t) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(Bs, "-$1").toLowerCase()) || i.getPropertyValue(r) || !t && a(e, hi(r) || r, 1) || ""
    },
    no = "O,Moz,ms,Ms,Webkit".split(","),
    hi = function(e, r, t) {
        var i = r || Mr,
            n = i.style,
            s = 5;
        if (e in n && !t) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(no[s] + e in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? no[s] : "") + e
    },
    fs = function() {
        Yu() && window.document && (to = window, lr = to.document, ri = lr.documentElement, Mr = ls("div") || {
            style: {}
        }, ls("div"), ue = hi(ue), Lt = ue + "Origin", Mr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", va = !!hi("perspective"), Is = Xe.core.reverting, Ls = 1)
    },
    Vn = function a(e) {
        var r = ls("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            t = this.parentNode,
            i = this.nextSibling,
            n = this.style.cssText,
            s;
        if (ri.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return t && (i ? t.insertBefore(this, i) : t.appendChild(this)), ri.removeChild(r), this.style.cssText = n, s
    },
    so = function(e, r) {
        for (var t = r.length; t--;)
            if (e.hasAttribute(r[t])) return e.getAttribute(r[t])
    },
    xa = function(e) {
        var r;
        try {
            r = e.getBBox()
        } catch {
            r = Vn.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Vn || (r = Vn.call(e, !0)), r && !r.width && !r.x && !r.y ? {
            x: +so(e, ["x", "cx", "x1"]) || 0,
            y: +so(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : r
    },
    Ta = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && xa(e))
    },
    $i = function(e, r) {
        if (r) {
            var t = e.style;
            r in rr && r !== Lt && (r = ue), t.removeProperty ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), t.removeProperty(r.replace(Bs, "-$1").toLowerCase())) : t.removeAttribute(r)
        }
    },
    fr = function(e, r, t, i, n, s) {
        var o = new st(e._pt, r, t, 0, 1, s ? ga : pa);
        return e._pt = o, o.b = i, o.e = n, e._props.push(t), o
    },
    oo = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    el = {
        grid: 1,
        flex: 1
    },
    yr = function a(e, r, t, i) {
        var n = parseFloat(t) || 0,
            s = (t + "").trim().substr((n + "").length) || "px",
            o = Mr.style,
            u = Xu.test(r),
            l = e.tagName.toLowerCase() === "svg",
            f = (l ? "client" : "offset") + (u ? "Width" : "Height"),
            d = 100,
            h = i === "px",
            c = i === "%",
            p, _, m, y;
        return i === s || !n || oo[i] || oo[s] ? n : (s !== "px" && !h && (n = a(e, r, t, "px")), y = e.getCTM && Ta(e), (c || s === "%") && (rr[r] || ~r.indexOf("adius")) ? (p = y ? e.getBBox()[u ? "width" : "height"] : e[f], pe(c ? n / p * d : n / 100 * p)) : (o[u ? "width" : "height"] = d + (h ? s : i), _ = ~r.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, y && (_ = (e.ownerSVGElement || {}).parentNode), (!_ || _ === lr || !_.appendChild) && (_ = lr.body), m = _._gsap, m && c && m.width && u && m.time === dt.time && !m.uncache ? pe(n / m.width * d) : ((c || s === "%") && !el[$t(_, "display")] && (o.position = $t(e, "position")), _ === e && (o.position = "static"), _.appendChild(Mr), p = Mr[f], _.removeChild(Mr), o.position = "absolute", u && c && (m = Er(_), m.time = dt.time, m.width = _[f]), pe(h ? p * n / d : p && n ? d / p * n : 0))))
    },
    Qt = function(e, r, t, i) {
        var n;
        return Ls || fs(), r in Ut && r !== "transform" && (r = Ut[r], ~r.indexOf(",") && (r = r.split(",")[0])), rr[r] && r !== "transform" ? (n = qi(e, i), n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : Pn($t(e, Lt)) + " " + n.zOrigin + "px") : (n = e.style[r], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Sn[r] && Sn[r](e, r, t) || $t(e, r) || Io(e, r) || (r === "opacity" ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? yr(e, r, n, t) + t : n
    },
    tl = function(e, r, t, i) {
        if (!t || t === "none") {
            var n = hi(r, e, 1),
                s = n && $t(e, n, 1);
            s && s !== t ? (r = n, t = s) : r === "borderColor" && (t = $t(e, "borderTopColor"))
        }
        var o = new st(this._pt, e.style, r, 0, 1, ha),
            u = 0,
            l = 0,
            f, d, h, c, p, _, m, y, w, b, x, S;
        if (o.b = t, o.e = i, t += "", i += "", i === "auto" && (e.style[r] = i, i = $t(e, r) || i, e.style[r] = t), f = [t, i], ra(f), t = f[0], i = f[1], h = t.match(Qr) || [], S = i.match(Qr) || [], S.length) {
            for (; d = Qr.exec(i);) m = d[0], w = i.substring(u, d.index), p ? p = (p + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (p = 1), m !== (_ = h[l++] || "") && (c = parseFloat(_) || 0, x = _.substr((c + "").length), m.charAt(1) === "=" && (m = ti(c, m) + x), y = parseFloat(m), b = m.substr((y + "").length), u = Qr.lastIndex - b.length, b || (b = b || gt.units[r] || x, u === i.length && (i += b, o.e += b)), x !== b && (c = yr(e, r, _, b) || 0), o._pt = {
                _next: o._pt,
                p: w || l === 1 ? w : ",",
                s: c,
                c: y - c,
                m: p && p < 4 || r === "zIndex" ? Math.round : 0
            });
            o.c = u < i.length ? i.substring(u, i.length) : ""
        } else o.r = r === "display" && i === "none" ? ga : pa;
        return Eo.test(i) && (o.e = 0), this._pt = o, o
    },
    ao = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    rl = function(e) {
        var r = e.split(" "),
            t = r[0],
            i = r[1] || "50%";
        return (t === "top" || t === "bottom" || i === "left" || i === "right") && (e = t, t = i, i = e), r[0] = ao[t] || t, r[1] = ao[i] || i, r.join(" ")
    },
    il = function(e, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var t = r.t,
                i = t.style,
                n = r.u,
                s = t._gsap,
                o, u, l;
            if (n === "all" || n === !0) i.cssText = "", u = 1;
            else
                for (n = n.split(","), l = n.length; --l > -1;) o = n[l], rr[o] && (u = 1, o = o === "transformOrigin" ? Lt : ue), $i(t, o);
            u && ($i(t, ue), s && (s.svg && t.removeAttribute("transform"), qi(t, 1), s.uncache = 1, ma(i)))
        }
    },
    Sn = {
        clearProps: function(e, r, t, i, n) {
            if (n.data !== "isFromStart") {
                var s = e._pt = new st(e._pt, r, t, 0, 0, il);
                return s.u = i, s.pr = -10, s.tween = n, e._props.push(t), 1
            }
        }
    },
    Wi = [1, 0, 0, 1, 0, 0],
    ba = {},
    wa = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    uo = function(e) {
        var r = $t(e, ue);
        return wa(r) ? Wi : r.substr(7).match(Do).map(pe)
    },
    Ns = function(e, r) {
        var t = e._gsap || Er(e),
            i = e.style,
            n = uo(e),
            s, o, u, l;
        return t.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? Wi : n) : (n === Wi && !e.offsetParent && e !== ri && !t.svg && (u = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (l = 1, o = e.nextElementSibling, ri.appendChild(e)), n = uo(e), u ? i.display = u : $i(e, "display"), l && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : ri.removeChild(e))), r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    cs = function(e, r, t, i, n, s) {
        var o = e._gsap,
            u = n || Ns(e, !0),
            l = o.xOrigin || 0,
            f = o.yOrigin || 0,
            d = o.xOffset || 0,
            h = o.yOffset || 0,
            c = u[0],
            p = u[1],
            _ = u[2],
            m = u[3],
            y = u[4],
            w = u[5],
            b = r.split(" "),
            x = parseFloat(b[0]) || 0,
            S = parseFloat(b[1]) || 0,
            C, T, k, P;
        t ? u !== Wi && (T = c * m - p * _) && (k = x * (m / T) + S * (-_ / T) + (_ * w - m * y) / T, P = x * (-p / T) + S * (c / T) - (c * w - p * y) / T, x = k, S = P) : (C = xa(e), x = C.x + (~b[0].indexOf("%") ? x / 100 * C.width : x), S = C.y + (~(b[1] || b[0]).indexOf("%") ? S / 100 * C.height : S)), i || i !== !1 && o.smooth ? (y = x - l, w = S - f, o.xOffset = d + (y * c + w * _) - y, o.yOffset = h + (y * p + w * m) - w) : o.xOffset = o.yOffset = 0, o.xOrigin = x, o.yOrigin = S, o.smooth = !!i, o.origin = r, o.originIsAbsolute = !!t, e.style[Lt] = "0px 0px", s && (fr(s, o, "xOrigin", l, x), fr(s, o, "yOrigin", f, S), fr(s, o, "xOffset", d, o.xOffset), fr(s, o, "yOffset", h, o.yOffset)), e.setAttribute("data-svg-origin", x + " " + S)
    },
    qi = function(e, r) {
        var t = e._gsap || new oa(e);
        if ("x" in t && !r && !t.uncache) return t;
        var i = e.style,
            n = t.scaleX < 0,
            s = "px",
            o = "deg",
            u = getComputedStyle(e),
            l = $t(e, Lt) || "0",
            f, d, h, c, p, _, m, y, w, b, x, S, C, T, k, P, M, F, D, Z, Y, B, q, z, G, J, g, te, Ve, Ot, le, Fe;
        return f = d = h = _ = m = y = w = b = x = 0, c = p = 1, t.svg = !!(e.getCTM && Ta(e)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[ue] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[ue] !== "none" ? u[ue] : "")), i.scale = i.rotate = i.translate = "none"), T = Ns(e, t.svg), t.svg && (t.uncache ? (G = e.getBBox(), l = t.xOrigin - G.x + "px " + (t.yOrigin - G.y) + "px", z = "") : z = !r && e.getAttribute("data-svg-origin"), cs(e, z || l, !!z || t.originIsAbsolute, t.smooth !== !1, T)), S = t.xOrigin || 0, C = t.yOrigin || 0, T !== Wi && (F = T[0], D = T[1], Z = T[2], Y = T[3], f = B = T[4], d = q = T[5], T.length === 6 ? (c = Math.sqrt(F * F + D * D), p = Math.sqrt(Y * Y + Z * Z), _ = F || D ? qr(D, F) * Cr : 0, w = Z || Y ? qr(Z, Y) * Cr + _ : 0, w && (p *= Math.abs(Math.cos(w * ii))), t.svg && (f -= S - (S * F + C * Z), d -= C - (S * D + C * Y))) : (Fe = T[6], Ot = T[7], g = T[8], te = T[9], Ve = T[10], le = T[11], f = T[12], d = T[13], h = T[14], k = qr(Fe, Ve), m = k * Cr, k && (P = Math.cos(-k), M = Math.sin(-k), z = B * P + g * M, G = q * P + te * M, J = Fe * P + Ve * M, g = B * -M + g * P, te = q * -M + te * P, Ve = Fe * -M + Ve * P, le = Ot * -M + le * P, B = z, q = G, Fe = J), k = qr(-Z, Ve), y = k * Cr, k && (P = Math.cos(-k), M = Math.sin(-k), z = F * P - g * M, G = D * P - te * M, J = Z * P - Ve * M, le = Y * M + le * P, F = z, D = G, Z = J), k = qr(D, F), _ = k * Cr, k && (P = Math.cos(k), M = Math.sin(k), z = F * P + D * M, G = B * P + q * M, D = D * P - F * M, q = q * P - B * M, F = z, B = G), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, y = 180 - y), c = pe(Math.sqrt(F * F + D * D + Z * Z)), p = pe(Math.sqrt(q * q + Fe * Fe)), k = qr(B, q), w = Math.abs(k) > 2e-4 ? k * Cr : 0, x = le ? 1 / (le < 0 ? -le : le) : 0), t.svg && (z = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !wa($t(e, ue)), z && e.setAttribute("transform", z))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (c *= -1, w += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (p *= -1, w += w <= 0 ? 180 : -180)), r = r || t.uncache, t.x = f - ((t.xPercent = f && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + s, t.y = d - ((t.yPercent = d && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + s, t.z = h + s, t.scaleX = pe(c), t.scaleY = pe(p), t.rotation = pe(_) + o, t.rotationX = pe(m) + o, t.rotationY = pe(y) + o, t.skewX = w + o, t.skewY = b + o, t.transformPerspective = x + s, (t.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (i[Lt] = Pn(l)), t.xOffset = t.yOffset = 0, t.force3D = gt.force3D, t.renderTransform = t.svg ? sl : va ? Sa : nl, t.uncache = 0, t
    },
    Pn = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    Un = function(e, r, t) {
        var i = Be(r);
        return pe(parseFloat(r) + parseFloat(yr(e, "x", t + "px", i))) + i
    },
    nl = function(e, r) {
        r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, Sa(e, r)
    },
    Pr = "0deg",
    Ti = "0px",
    kr = ") ",
    Sa = function(e, r) {
        var t = r || this,
            i = t.xPercent,
            n = t.yPercent,
            s = t.x,
            o = t.y,
            u = t.z,
            l = t.rotation,
            f = t.rotationY,
            d = t.rotationX,
            h = t.skewX,
            c = t.skewY,
            p = t.scaleX,
            _ = t.scaleY,
            m = t.transformPerspective,
            y = t.force3D,
            w = t.target,
            b = t.zOrigin,
            x = "",
            S = y === "auto" && e && e !== 1 || y === !0;
        if (b && (d !== Pr || f !== Pr)) {
            var C = parseFloat(f) * ii,
                T = Math.sin(C),
                k = Math.cos(C),
                P;
            C = parseFloat(d) * ii, P = Math.cos(C), s = Un(w, s, T * P * -b), o = Un(w, o, -Math.sin(C) * -b), u = Un(w, u, k * P * -b + b)
        }
        m !== Ti && (x += "perspective(" + m + kr), (i || n) && (x += "translate(" + i + "%, " + n + "%) "), (S || s !== Ti || o !== Ti || u !== Ti) && (x += u !== Ti || S ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + kr), l !== Pr && (x += "rotate(" + l + kr), f !== Pr && (x += "rotateY(" + f + kr), d !== Pr && (x += "rotateX(" + d + kr), (h !== Pr || c !== Pr) && (x += "skew(" + h + ", " + c + kr), (p !== 1 || _ !== 1) && (x += "scale(" + p + ", " + _ + kr), w.style[ue] = x || "translate(0, 0)"
    },
    sl = function(e, r) {
        var t = r || this,
            i = t.xPercent,
            n = t.yPercent,
            s = t.x,
            o = t.y,
            u = t.rotation,
            l = t.skewX,
            f = t.skewY,
            d = t.scaleX,
            h = t.scaleY,
            c = t.target,
            p = t.xOrigin,
            _ = t.yOrigin,
            m = t.xOffset,
            y = t.yOffset,
            w = t.forceCSS,
            b = parseFloat(s),
            x = parseFloat(o),
            S, C, T, k, P;
        u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= ii, l *= ii, S = Math.cos(u) * d, C = Math.sin(u) * d, T = Math.sin(u - l) * -h, k = Math.cos(u - l) * h, l && (f *= ii, P = Math.tan(l - f), P = Math.sqrt(1 + P * P), T *= P, k *= P, f && (P = Math.tan(f), P = Math.sqrt(1 + P * P), S *= P, C *= P)), S = pe(S), C = pe(C), T = pe(T), k = pe(k)) : (S = d, k = h, C = T = 0), (b && !~(s + "").indexOf("px") || x && !~(o + "").indexOf("px")) && (b = yr(c, "x", s, "px"), x = yr(c, "y", o, "px")), (p || _ || m || y) && (b = pe(b + p - (p * S + _ * T) + m), x = pe(x + _ - (p * C + _ * k) + y)), (i || n) && (P = c.getBBox(), b = pe(b + i / 100 * P.width), x = pe(x + n / 100 * P.height)), P = "matrix(" + S + "," + C + "," + T + "," + k + "," + b + "," + x + ")", c.setAttribute("transform", P), w && (c.style[ue] = P)
    },
    ol = function(e, r, t, i, n) {
        var s = 360,
            o = Me(n),
            u = parseFloat(n) * (o && ~n.indexOf("rad") ? Cr : 1),
            l = u - i,
            f = i + l + "deg",
            d, h;
        return o && (d = n.split("_")[1], d === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), d === "cw" && l < 0 ? l = (l + s * io) % s - ~~(l / s) * s : d === "ccw" && l > 0 && (l = (l - s * io) % s - ~~(l / s) * s)), e._pt = h = new st(e._pt, r, t, i, l, Uu), h.e = f, h.u = "deg", e._props.push(t), h
    },
    lo = function(e, r) {
        for (var t in r) e[t] = r[t];
        return e
    },
    al = function(e, r, t) {
        var i = lo({}, t._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = t.style,
            o, u, l, f, d, h, c, p;
        i.svg ? (l = t.getAttribute("transform"), t.setAttribute("transform", ""), s[ue] = r, o = qi(t, 1), $i(t, ue), t.setAttribute("transform", l)) : (l = getComputedStyle(t)[ue], s[ue] = r, o = qi(t, 1), s[ue] = l);
        for (u in rr) l = i[u], f = o[u], l !== f && n.indexOf(u) < 0 && (c = Be(l), p = Be(f), d = c !== p ? yr(t, u, l, p) : parseFloat(l), h = parseFloat(f), e._pt = new st(e._pt, o, u, d, h - d, us), e._pt.u = p || 0, e._props.push(u));
        lo(o, i)
    };
nt("padding,margin,Width,Radius", function(a, e) {
    var r = "Top",
        t = "Right",
        i = "Bottom",
        n = "Left",
        s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function(o) {
            return e < 2 ? a + o : "border" + o + a
        });
    Sn[e > 1 ? "border" + a : a] = function(o, u, l, f, d) {
        var h, c;
        if (arguments.length < 4) return h = s.map(function(p) {
            return Qt(o, p, l)
        }), c = h.join(" "), c.split(h[0]).length === 5 ? h[0] : c;
        h = (f + "").split(" "), c = {}, s.forEach(function(p, _) {
            return c[p] = h[_] = h[_] || h[(_ - 1) / 2 | 0]
        }), o.init(u, c, d)
    }
});
var Ys = {
    name: "css",
    register: fs,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, r, t, i, n) {
        var s = this._props,
            o = e.style,
            u = t.vars.startAt,
            l, f, d, h, c, p, _, m, y, w, b, x, S, C, T, k;
        Ls || fs(), this.styles = this.styles || ya(e), k = this.styles.props, this.tween = t;
        for (_ in r)
            if (_ !== "autoRound" && (f = r[_], !(ht[_] && aa(_, r, t, i, e, n)))) {
                if (c = typeof f, p = Sn[_], c === "function" && (f = f.call(t, i, e, n), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = Vi(f)), p) p(this, e, _, f, t) && (T = 1);
                else if (_.substr(0, 2) === "--") l = (getComputedStyle(e).getPropertyValue(_) + "").trim(), f += "", pr.lastIndex = 0, pr.test(l) || (m = Be(l), y = Be(f)), y ? m !== y && (l = yr(e, _, l, y) + y) : m && (f += m), this.add(o, "setProperty", l, f, i, n, 0, 0, _), s.push(_), k.push(_, 0, o[_]);
                else if (c !== "undefined") {
                    if (u && _ in u ? (l = typeof u[_] == "function" ? u[_].call(t, i, e, n) : u[_], Me(l) && ~l.indexOf("random(") && (l = Vi(l)), Be(l + "") || (l += gt.units[_] || Be(Qt(e, _)) || ""), (l + "").charAt(1) === "=" && (l = Qt(e, _))) : l = Qt(e, _), h = parseFloat(l), w = c === "string" && f.charAt(1) === "=" && f.substr(0, 2), w && (f = f.substr(2)), d = parseFloat(f), _ in Ut && (_ === "autoAlpha" && (h === 1 && Qt(e, "visibility") === "hidden" && d && (h = 0), k.push("visibility", 0, o.visibility), fr(this, o, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), _ !== "scale" && _ !== "transform" && (_ = Ut[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), b = _ in rr, b) {
                        if (this.styles.save(_), x || (S = e._gsap, S.renderTransform && !r.parseTransform || qi(e, r.parseTransform), C = r.smoothOrigin !== !1 && S.smooth, x = this._pt = new st(this._pt, o, ue, 0, 1, S.renderTransform, S, 0, -1), x.dep = 1), _ === "scale") this._pt = new st(this._pt, S, "scaleY", S.scaleY, (w ? ti(S.scaleY, w + d) : d) - S.scaleY || 0, us), this._pt.u = 0, s.push("scaleY", _), _ += "X";
                        else if (_ === "transformOrigin") {
                            k.push(Lt, 0, o[Lt]), f = rl(f), S.svg ? cs(e, f, 0, C, 0, this) : (y = parseFloat(f.split(" ")[2]) || 0, y !== S.zOrigin && fr(this, S, "zOrigin", S.zOrigin, y), fr(this, o, _, Pn(l), Pn(f)));
                            continue
                        } else if (_ === "svgOrigin") {
                            cs(e, f, 1, C, 0, this);
                            continue
                        } else if (_ in ba) {
                            ol(this, S, _, h, w ? ti(h, w + f) : f);
                            continue
                        } else if (_ === "smoothOrigin") {
                            fr(this, S, "smooth", S.smooth, f);
                            continue
                        } else if (_ === "force3D") {
                            S[_] = f;
                            continue
                        } else if (_ === "transform") {
                            al(this, f, e);
                            continue
                        }
                    } else _ in o || (_ = hi(_) || _);
                    if (b || (d || d === 0) && (h || h === 0) && !Vu.test(f) && _ in o) m = (l + "").substr((h + "").length), d || (d = 0), y = Be(f) || (_ in gt.units ? gt.units[_] : m), m !== y && (h = yr(e, _, l, y)), this._pt = new st(this._pt, b ? S : o, _, h, (w ? ti(h, w + d) : d) - h, !b && (y === "px" || _ === "zIndex") && r.autoRound !== !1 ? Wu : us), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = l, this._pt.r = $u);
                    else if (_ in o) tl.call(this, e, _, l, w ? w + f : f);
                    else if (_ in e) this.add(e, _, l || e[_], w ? w + f : f, i, n);
                    else if (_ !== "parseTransform") {
                        Cs(_, f);
                        continue
                    }
                    b || (_ in o ? k.push(_, 0, o[_]) : k.push(_, 1, l || e[_])), s.push(_)
                }
            } T && _a(this)
    },
    render: function(e, r) {
        if (r.tween._time || !Is())
            for (var t = r._pt; t;) t.r(e, t.d), t = t._next;
        else r.styles.revert()
    },
    get: Qt,
    aliases: Ut,
    getSetter: function(e, r, t) {
        var i = Ut[r];
        return i && i.indexOf(",") < 0 && (r = i), r in rr && r !== Lt && (e._gsap.x || Qt(e, "x")) ? t && ro === t ? r === "scale" ? Ku : Hu : (ro = t || {}) && (r === "scale" ? Zu : Qu) : e.style && !Ss(e.style[r]) ? qu : ~r.indexOf("-") ? Gu : Fs(e, r)
    },
    core: {
        _removeProperty: $i,
        _getMatrix: Ns
    }
};
Xe.utils.checkPrefix = hi;
Xe.core.getStyleSaver = ya;
(function(a, e, r, t) {
    var i = nt(a + "," + e + "," + r, function(n) {
        rr[n] = 1
    });
    nt(e, function(n) {
        gt.units[n] = "deg", ba[n] = 1
    }), Ut[i[13]] = a + "," + e, nt(t, function(n) {
        var s = n.split(":");
        Ut[s[1]] = i[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
    gt.units[a] = "px"
});
Xe.registerPlugin(Ys);
var hs = Xe.registerPlugin(Ys) || Xe;
hs.core.Tween;

function kl() {
    document.querySelector("#menu").addEventListener("click", () => {
        t()
    }), document.querySelector("#close").addEventListener("click", () => {
        i()
    }), document.querySelector("#menuBox");
    const a = document.querySelector("#menu"),
        e = document.querySelector("#close"),
        r = document.querySelector(".clip");
    document.querySelector(".links");

    function t() {
        hs.timeline({
            defaults: {
                ease: "power4.out"
            }
        }).to(a, {
            display: "none"
        }).set(e, {
            display: "block"
        }, .1).to(r, {
            clipPath: "circle(100%)",
            backgroundColor: "#f4bf3c",
            duration: .1,
            ease: "sine.out"
        }, "-=0.5").fromTo(".nav-links li a span", {
            y: "100%",
            autoAlpha: .5
        }, {
            y: 0,
            autoAlpha: 1,
            delay: .1,
            duration: .65,
            stagger: {
                amount: .1
            }
        }, "+=0.1").fromTo(".social-media span a", {
            y: "100%",
            autoAlpha: .5
        }, {
            y: 0,
            autoAlpha: 1,
            duration: .65,
            stagger: {
                amount: .1
            }
        }, "-=0.2")
    }

    function i() {
        hs.timeline({}).fromTo(".social-media span a", {
            y: 0,
            autoAlpha: 1
        }, {
            y: "100%",
            autoAlpha: 0,
            duration: .5,
            ease: "sine.out",
            stagger: {
                amount: .1
            }
        }).fromTo(".nav-links li a span", {
            y: 0,
            autoAlpha: 1
        }, {
            y: "100%",
            autoAlpha: 0,
            duration: .5,
            ease: "sine.out",
            stagger: {
                amount: .1
            }
        }, "-=0.3").to(r, {
            clipPath: "circle(0% at 94% 96%)",
            duration: .2,
            ease: "power1.out"
        }, "-=0.6").to(e, {
            display: "none"
        }, "-=.4").set(a, {
            display: "block"
        }, "-=0.05")
    }
}

function fo(a, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t)
    }
}

function ul(a, e, r) {
    return e && fo(a.prototype, e), r && fo(a, r), a
}
/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Re, _s, pt, cr, hr, ni, Pa, Or, Ri, ka, jt, At, Ca, Oa = function() {
        return Re || typeof window < "u" && (Re = window.gsap) && Re.registerPlugin && Re
    },
    Ma = 1,
    jr = [],
    U = [],
    Wt = [],
    Fi = Date.now,
    ds = function(e, r) {
        return r
    },
    ll = function() {
        var e = Ri.core,
            r = e.bridge || {},
            t = e._scrollers,
            i = e._proxies;
        t.push.apply(t, U), i.push.apply(i, Wt), U = t, Wt = i, ds = function(s, o) {
            return r[s](o)
        }
    },
    gr = function(e, r) {
        return ~Wt.indexOf(e) && Wt[Wt.indexOf(e) + 1][r]
    },
    zi = function(e) {
        return !!~ka.indexOf(e)
    },
    et = function(e, r, t, i, n) {
        return e.addEventListener(r, t, {
            passive: !i,
            capture: !!n
        })
    },
    Ke = function(e, r, t, i) {
        return e.removeEventListener(r, t, !!i)
    },
    Zi = "scrollLeft",
    Qi = "scrollTop",
    ps = function() {
        return jt && jt.isPressed || U.cache++
    },
    kn = function(e, r) {
        var t = function i(n) {
            if (n || n === 0) {
                Ma && (pt.history.scrollRestoration = "manual");
                var s = jt && jt.isPressed;
                n = i.v = Math.round(n) || (jt && jt.iOS ? 1 : 0), e(n), i.cacheID = U.cache, s && ds("ss", n)
            } else(r || U.cache !== i.cacheID || ds("ref")) && (i.cacheID = U.cache, i.v = e());
            return i.v + i.offset
        };
        return t.offset = 0, e && t
    },
    Je = {
        s: Zi,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: kn(function(a) {
            return arguments.length ? pt.scrollTo(a, Te.sc()) : pt.pageXOffset || cr[Zi] || hr[Zi] || ni[Zi] || 0
        })
    },
    Te = {
        s: Qi,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Je,
        sc: kn(function(a) {
            return arguments.length ? pt.scrollTo(Je.sc(), a) : pt.pageYOffset || cr[Qi] || hr[Qi] || ni[Qi] || 0
        })
    },
    tt = function(e) {
        return Re.utils.toArray(e)[0] || (typeof e == "string" && Re.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    vr = function(e, r) {
        var t = r.s,
            i = r.sc;
        zi(e) && (e = cr.scrollingElement || hr);
        var n = U.indexOf(e),
            s = i === Te.sc ? 1 : 2;
        !~n && (n = U.push(e) - 1), U[n + s] || e.addEventListener("scroll", ps);
        var o = U[n + s],
            u = o || (U[n + s] = kn(gr(e, t), !0) || (zi(e) ? i : kn(function(l) {
                return arguments.length ? e[t] = l : e[t]
            })));
        return u.target = e, o || (u.smooth = Re.getProperty(e, "scrollBehavior") === "smooth"), u
    },
    gs = function(e, r, t) {
        var i = e,
            n = e,
            s = Fi(),
            o = s,
            u = r || 50,
            l = Math.max(500, u * 3),
            f = function(p, _) {
                var m = Fi();
                _ || m - s > u ? (n = i, i = p, o = s, s = m) : t ? i += p : i = n + (p - n) / (m - o) * (s - o)
            },
            d = function() {
                n = i = t ? 0 : i, o = s = 0
            },
            h = function(p) {
                var _ = o,
                    m = n,
                    y = Fi();
                return (p || p === 0) && p !== i && f(p), s === o || y - o > l ? 0 : (i + (t ? m : -m)) / ((t ? y : s) - _) * 1e3
            };
        return {
            update: f,
            reset: d,
            getVelocity: h
        }
    },
    bi = function(e, r) {
        return r && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    co = function(e) {
        var r = Math.max.apply(Math, e),
            t = Math.min.apply(Math, e);
        return Math.abs(r) >= Math.abs(t) ? r : t
    },
    Da = function() {
        Ri = Re.core.globals().ScrollTrigger, Ri && Ri.core && ll()
    },
    Ea = function(e) {
        return Re = e || Oa(), Re && typeof document < "u" && document.body && (pt = window, cr = document, hr = cr.documentElement, ni = cr.body, ka = [pt, cr, hr, ni], Re.utils.clamp, Ca = Re.core.context || function() {}, Or = "onpointerenter" in ni ? "pointer" : "mouse", Pa = ve.isTouch = pt.matchMedia && pt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in pt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, At = ve.eventTypes = ("ontouchstart" in hr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in hr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return Ma = 0
        }, 500), Da(), _s = 1), _s
    };
Je.op = Te;
U.cache = 0;
var ve = function() {
    function a(r) {
        this.init(r)
    }
    var e = a.prototype;
    return e.init = function(t) {
        _s || Ea(Re) || console.warn("Please gsap.registerPlugin(Observer)"), Ri || Da();
        var i = t.tolerance,
            n = t.dragMinimum,
            s = t.type,
            o = t.target,
            u = t.lineHeight,
            l = t.debounce,
            f = t.preventDefault,
            d = t.onStop,
            h = t.onStopDelay,
            c = t.ignore,
            p = t.wheelSpeed,
            _ = t.event,
            m = t.onDragStart,
            y = t.onDragEnd,
            w = t.onDrag,
            b = t.onPress,
            x = t.onRelease,
            S = t.onRight,
            C = t.onLeft,
            T = t.onUp,
            k = t.onDown,
            P = t.onChangeX,
            M = t.onChangeY,
            F = t.onChange,
            D = t.onToggleX,
            Z = t.onToggleY,
            Y = t.onHover,
            B = t.onHoverEnd,
            q = t.onMove,
            z = t.ignoreCheck,
            G = t.isNormalizer,
            J = t.onGestureStart,
            g = t.onGestureEnd,
            te = t.onWheel,
            Ve = t.onEnable,
            Ot = t.onDisable,
            le = t.onClick,
            Fe = t.scrollSpeed,
            re = t.capture,
            ze = t.allowClicks,
            Ue = t.lockAxis,
            di = t.onLockAxis;
        this.target = o = tt(o) || hr, this.vars = t, c && (c = Re.utils.toArray(c)), i = i || 1e-9, n = n || 0, p = p || 1, Fe = Fe || 1, s = s || "wheel,touch,pointer", l = l !== !1, u || (u = parseFloat(pt.getComputedStyle(ni).lineHeight) || 22);
        var ot, yt, $, be, at, It, $e, v = this,
            Gt = 0,
            ie = 0,
            ir = vr(o, Je),
            nr = vr(o, Te),
            Vr = ir(),
            We = nr(),
            pi = ~s.indexOf("touch") && !~s.indexOf("pointer") && At[0] === "pointerdown",
            sr = zi(o),
            he = o.ownerDocument || cr,
            ut = [0, 0, 0],
            qe = [0, 0, 0],
            gi = 0,
            Ge = function() {
                return gi = Fi()
            },
            Bt = function(R, O) {
                return (v.event = R) && c && ~c.indexOf(R.target) || O && pi && R.pointerType !== "touch" || z && z(R, O)
            },
            mi = function() {
                v._vx.reset(), v._vy.reset(), yt.pause(), d && d(v)
            },
            or = function() {
                var R = v.deltaX = co(ut),
                    O = v.deltaY = co(qe),
                    A = Math.abs(R) >= i,
                    L = Math.abs(O) >= i;
                F && (A || L) && F(v, R, O, ut, qe), A && (S && v.deltaX > 0 && S(v), C && v.deltaX < 0 && C(v), P && P(v), D && v.deltaX < 0 != Gt < 0 && D(v), Gt = v.deltaX, ut[0] = ut[1] = ut[2] = 0), L && (k && v.deltaY > 0 && k(v), T && v.deltaY < 0 && T(v), M && M(v), Z && v.deltaY < 0 != ie < 0 && Z(v), ie = v.deltaY, qe[0] = qe[1] = qe[2] = 0), (be || $) && (q && q(v), $ && (w(v), $ = !1), be = !1), It && !(It = !1) && di && di(v), at && (te(v), at = !1), ot = 0
            },
            Ur = function(R, O, A) {
                ut[A] += R, qe[A] += O, v._vx.update(R), v._vy.update(O), l ? ot || (ot = requestAnimationFrame(or)) : or()
            },
            Tr = function(R, O) {
                Ue && !$e && (v.axis = $e = Math.abs(R) > Math.abs(O) ? "x" : "y", It = !0), $e !== "y" && (ut[2] += R, v._vx.update(R, !0)), $e !== "x" && (qe[2] += O, v._vy.update(O, !0)), l ? ot || (ot = requestAnimationFrame(or)) : or()
            },
            br = function(R) {
                if (!Bt(R, 1)) {
                    R = bi(R, f);
                    var O = R.clientX,
                        A = R.clientY,
                        L = O - v.x,
                        N = A - v.y,
                        we = v.isDragging;
                    v.x = O, v.y = A, (we || Math.abs(v.startX - O) >= n || Math.abs(v.startY - A) >= n) && (w && ($ = !0), we || (v.isDragging = !0), Tr(L, N), we || m && m(v))
                }
            },
            V = v.onPress = function(I) {
                Bt(I, 1) || I && I.button || (v.axis = $e = null, yt.pause(), v.isPressed = !0, I = bi(I), Gt = ie = 0, v.startX = v.x = I.clientX, v.startY = v.y = I.clientY, v._vx.reset(), v._vy.reset(), et(G ? o : he, At[1], br, f, !0), v.deltaX = v.deltaY = 0, b && b(v))
            },
            Ht = v.onRelease = function(I) {
                if (!Bt(I, 1)) {
                    Ke(G ? o : he, At[1], br, !0);
                    var R = !isNaN(v.y - v.startY),
                        O = v.isDragging && (Math.abs(v.x - v.startX) > 3 || Math.abs(v.y - v.startY) > 3),
                        A = bi(I);
                    !O && R && (v._vx.reset(), v._vy.reset(), f && ze && Re.delayedCall(.08, function() {
                        if (Fi() - gi > 300 && !I.defaultPrevented) {
                            if (I.target.click) I.target.click();
                            else if (he.createEvent) {
                                var L = he.createEvent("MouseEvents");
                                L.initMouseEvent("click", !0, !0, pt, 1, A.screenX, A.screenY, A.clientX, A.clientY, !1, !1, !1, !1, 0, null), I.target.dispatchEvent(L)
                            }
                        }
                    })), v.isDragging = v.isGesturing = v.isPressed = !1, d && !G && yt.restart(!0), y && O && y(v), x && x(v, O)
                }
            },
            Mt = function(R) {
                return R.touches && R.touches.length > 1 && (v.isGesturing = !0) && J(R, v.isDragging)
            },
            Dt = function() {
                return (v.isGesturing = !1) || g(v)
            },
            vt = function(R) {
                if (!Bt(R)) {
                    var O = ir(),
                        A = nr();
                    Ur((O - Vr) * Fe, (A - We) * Fe, 1), Vr = O, We = A, d && yt.restart(!0)
                }
            },
            Et = function(R) {
                if (!Bt(R)) {
                    R = bi(R, f), te && (at = !0);
                    var O = (R.deltaMode === 1 ? u : R.deltaMode === 2 ? pt.innerHeight : 1) * p;
                    Ur(R.deltaX * O, R.deltaY * O, 0), d && !G && yt.restart(!0)
                }
            },
            wr = function(R) {
                if (!Bt(R)) {
                    var O = R.clientX,
                        A = R.clientY,
                        L = O - v.x,
                        N = A - v.y;
                    v.x = O, v.y = A, be = !0, (L || N) && Tr(L, N)
                }
            },
            $r = function(R) {
                v.event = R, Y(v)
            },
            Kt = function(R) {
                v.event = R, B(v)
            },
            yi = function(R) {
                return Bt(R) || bi(R, f) && le(v)
            };
        yt = v._dc = Re.delayedCall(h || .25, mi).pause(), v.deltaX = v.deltaY = 0, v._vx = gs(0, 50, !0), v._vy = gs(0, 50, !0), v.scrollX = ir, v.scrollY = nr, v.isDragging = v.isGesturing = v.isPressed = !1, Ca(this), v.enable = function(I) {
            return v.isEnabled || (et(sr ? he : o, "scroll", ps), s.indexOf("scroll") >= 0 && et(sr ? he : o, "scroll", vt, f, re), s.indexOf("wheel") >= 0 && et(o, "wheel", Et, f, re), (s.indexOf("touch") >= 0 && Pa || s.indexOf("pointer") >= 0) && (et(o, At[0], V, f, re), et(he, At[2], Ht), et(he, At[3], Ht), ze && et(o, "click", Ge, !1, !0), le && et(o, "click", yi), J && et(he, "gesturestart", Mt), g && et(he, "gestureend", Dt), Y && et(o, Or + "enter", $r), B && et(o, Or + "leave", Kt), q && et(o, Or + "move", wr)), v.isEnabled = !0, I && I.type && V(I), Ve && Ve(v)), v
        }, v.disable = function() {
            v.isEnabled && (jr.filter(function(I) {
                return I !== v && zi(I.target)
            }).length || Ke(sr ? he : o, "scroll", ps), v.isPressed && (v._vx.reset(), v._vy.reset(), Ke(G ? o : he, At[1], br, !0)), Ke(sr ? he : o, "scroll", vt, re), Ke(o, "wheel", Et, re), Ke(o, At[0], V, re), Ke(he, At[2], Ht), Ke(he, At[3], Ht), Ke(o, "click", Ge, !0), Ke(o, "click", yi), Ke(he, "gesturestart", Mt), Ke(he, "gestureend", Dt), Ke(o, Or + "enter", $r), Ke(o, Or + "leave", Kt), Ke(o, Or + "move", wr), v.isEnabled = v.isPressed = v.isDragging = !1, Ot && Ot(v))
        }, v.kill = v.revert = function() {
            v.disable();
            var I = jr.indexOf(v);
            I >= 0 && jr.splice(I, 1), jt === v && (jt = 0)
        }, jr.push(v), G && zi(o) && (jt = v), v.enable(_)
    }, ul(a, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), a
}();
ve.version = "3.11.5";
ve.create = function(a) {
    return new ve(a)
};
ve.register = Ea;
ve.getAll = function() {
    return jr.slice()
};
ve.getById = function(a) {
    return jr.filter(function(e) {
        return e.vars.id === a
    })[0]
};
Oa() && Re.registerPlugin(ve);
/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var E, Kr, W, ne, Ft, fe, Aa, Cn, On, ei, cn, Ji, Ie, Rn, ms, Ze, ho, _o, Zr, Ra, $n, Fa, ft, za, La, Ia, ar, ys, Xs, Wn, ji = 1,
    Qe = Date.now,
    qn = Qe(),
    kt = 0,
    ki = 0,
    fl = function a() {
        return ki && requestAnimationFrame(a)
    },
    po = function() {
        return Rn = 1
    },
    go = function() {
        return Rn = 0
    },
    Xt = function(e) {
        return e
    },
    Ci = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Ba = function() {
        return typeof window < "u"
    },
    Na = function() {
        return E || Ba() && (E = window.gsap) && E.registerPlugin && E
    },
    Br = function(e) {
        return !!~Aa.indexOf(e)
    },
    Ya = function(e) {
        return gr(e, "getBoundingClientRect") || (Br(e) ? function() {
            return mn.width = W.innerWidth, mn.height = W.innerHeight, mn
        } : function() {
            return Jt(e)
        })
    },
    cl = function(e, r, t) {
        var i = t.d,
            n = t.d2,
            s = t.a;
        return (s = gr(e, "getBoundingClientRect")) ? function() {
            return s()[i]
        } : function() {
            return (r ? W["inner" + n] : e["client" + n]) || 0
        }
    },
    hl = function(e, r) {
        return !r || ~Wt.indexOf(e) ? Ya(e) : function() {
            return mn
        }
    },
    _r = function(e, r) {
        var t = r.s,
            i = r.d2,
            n = r.d,
            s = r.a;
        return Math.max(0, (t = "scroll" + i) && (s = gr(e, t)) ? s() - Ya(e)()[n] : Br(e) ? (Ft[t] || fe[t]) - (W["inner" + i] || Ft["client" + i] || fe["client" + i]) : e[t] - e["offset" + i])
    },
    en = function(e, r) {
        for (var t = 0; t < Zr.length; t += 3)(!r || ~r.indexOf(Zr[t + 1])) && e(Zr[t], Zr[t + 1], Zr[t + 2])
    },
    Rt = function(e) {
        return typeof e == "string"
    },
    je = function(e) {
        return typeof e == "function"
    },
    Oi = function(e) {
        return typeof e == "number"
    },
    hn = function(e) {
        return typeof e == "object"
    },
    wi = function(e, r, t) {
        return e && e.progress(r ? 0 : 1) && t && e.pause()
    },
    Gn = function(e, r) {
        if (e.enabled) {
            var t = r(e);
            t && t.totalTime && (e.callbackAnimation = t)
        }
    },
    Gr = Math.abs,
    Xa = "left",
    Va = "top",
    Vs = "right",
    Us = "bottom",
    Fr = "width",
    zr = "height",
    Li = "Right",
    Ii = "Left",
    Bi = "Top",
    Ni = "Bottom",
    de = "padding",
    bt = "margin",
    _i = "Width",
    $s = "Height",
    Ee = "px",
    zt = function(e) {
        return W.getComputedStyle(e)
    },
    _l = function(e) {
        var r = zt(e).position;
        e.style.position = r === "absolute" || r === "fixed" ? r : "relative"
    },
    mo = function(e, r) {
        for (var t in r) t in e || (e[t] = r[t]);
        return e
    },
    Jt = function(e, r) {
        var t = r && zt(e)[ms] !== "matrix(1, 0, 0, 1, 0, 0)" && E.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            i = e.getBoundingClientRect();
        return t && t.progress(0).kill(), i
    },
    vs = function(e, r) {
        var t = r.d2;
        return e["offset" + t] || e["client" + t] || 0
    },
    Ua = function(e) {
        var r = [],
            t = e.labels,
            i = e.duration(),
            n;
        for (n in t) r.push(t[n] / i);
        return r
    },
    dl = function(e) {
        return function(r) {
            return E.utils.snap(Ua(e), r)
        }
    },
    Ws = function(e) {
        var r = E.utils.snap(e),
            t = Array.isArray(e) && e.slice(0).sort(function(i, n) {
                return i - n
            });
        return t ? function(i, n, s) {
            s === void 0 && (s = .001);
            var o;
            if (!n) return r(i);
            if (n > 0) {
                for (i -= s, o = 0; o < t.length; o++)
                    if (t[o] >= i) return t[o];
                return t[o - 1]
            } else
                for (o = t.length, i += s; o--;)
                    if (t[o] <= i) return t[o];
            return t[0]
        } : function(i, n, s) {
            s === void 0 && (s = .001);
            var o = r(i);
            return !n || Math.abs(o - i) < s || o - i < 0 == n < 0 ? o : r(n < 0 ? i - e : i + e)
        }
    },
    pl = function(e) {
        return function(r, t) {
            return Ws(Ua(e))(r, t.direction)
        }
    },
    tn = function(e, r, t, i) {
        return t.split(",").forEach(function(n) {
            return e(r, n, i)
        })
    },
    Oe = function(e, r, t, i, n) {
        return e.addEventListener(r, t, {
            passive: !i,
            capture: !!n
        })
    },
    Ce = function(e, r, t, i) {
        return e.removeEventListener(r, t, !!i)
    },
    rn = function(e, r, t) {
        t = t && t.wheelHandler, t && (e(r, "wheel", t), e(r, "touchmove", t))
    },
    yo = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    nn = {
        toggleActions: "play",
        anticipatePin: 0
    },
    Mn = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    _n = function(e, r) {
        if (Rt(e)) {
            var t = e.indexOf("="),
                i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (i *= r / 100), e = e.substr(0, t - 1)), e = i + (e in Mn ? Mn[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0)
        }
        return e
    },
    sn = function(e, r, t, i, n, s, o, u) {
        var l = n.startColor,
            f = n.endColor,
            d = n.fontSize,
            h = n.indent,
            c = n.fontWeight,
            p = ne.createElement("div"),
            _ = Br(t) || gr(t, "pinType") === "fixed",
            m = e.indexOf("scroller") !== -1,
            y = _ ? fe : t,
            w = e.indexOf("start") !== -1,
            b = w ? l : f,
            x = "border-color:" + b + ";font-size:" + d + ";color:" + b + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((m || u) && _ ? "fixed;" : "absolute;"), (m || u || !_) && (x += (i === Te ? Vs : Us) + ":" + (s + parseFloat(h)) + "px;"), o && (x += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = w, p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), p.style.cssText = x, p.innerText = r || r === 0 ? e + "-" + r : e, y.children[0] ? y.insertBefore(p, y.children[0]) : y.appendChild(p), p._offset = p["offset" + i.op.d2], dn(p, 0, i, w), p
    },
    dn = function(e, r, t, i) {
        var n = {
                display: "block"
            },
            s = t[i ? "os2" : "p2"],
            o = t[i ? "p2" : "os2"];
        e._isFlipped = i, n[t.a + "Percent"] = i ? -100 : 0, n[t.a] = i ? "1px" : 0, n["border" + s + _i] = 1, n["border" + o + _i] = 0, n[t.p] = r + "px", E.set(e, n)
    },
    X = [],
    xs = {},
    Gi, vo = function() {
        return Qe() - kt > 34 && (Gi || (Gi = requestAnimationFrame(er)))
    },
    Hr = function() {
        (!ft || !ft.isPressed || ft.startX > fe.clientWidth) && (U.cache++, ft ? Gi || (Gi = requestAnimationFrame(er)) : er(), kt || Yr("scrollStart"), kt = Qe())
    },
    Hn = function() {
        Ia = W.innerWidth, La = W.innerHeight
    },
    Mi = function() {
        U.cache++, !Ie && !Fa && !ne.fullscreenElement && !ne.webkitFullscreenElement && (!za || Ia !== W.innerWidth || Math.abs(W.innerHeight - La) > W.innerHeight * .25) && Cn.restart(!0)
    },
    Nr = {},
    gl = [],
    $a = function a() {
        return Ce(K, "scrollEnd", a) || Dr(!0)
    },
    Yr = function(e) {
        return Nr[e] && Nr[e].map(function(r) {
            return r()
        }) || gl
    },
    ct = [],
    Wa = function(e) {
        for (var r = 0; r < ct.length; r += 5)(!e || ct[r + 4] && ct[r + 4].query === e) && (ct[r].style.cssText = ct[r + 1], ct[r].getBBox && ct[r].setAttribute("transform", ct[r + 2] || ""), ct[r + 3].uncache = 1)
    },
    qs = function(e, r) {
        var t;
        for (Ze = 0; Ze < X.length; Ze++) t = X[Ze], t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
        r && Wa(r), r || Yr("revert")
    },
    qa = function(e, r) {
        U.cache++, (r || !_t) && U.forEach(function(t) {
            return je(t) && t.cacheID++ && (t.rec = 0)
        }), Rt(e) && (W.history.scrollRestoration = Xs = e)
    },
    _t, Lr = 0,
    xo, ml = function() {
        if (xo !== Lr) {
            var e = xo = Lr;
            requestAnimationFrame(function() {
                return e === Lr && Dr(!0)
            })
        }
    },
    Dr = function(e, r) {
        if (kt && !e) {
            Oe(K, "scrollEnd", $a);
            return
        }
        _t = K.isRefreshing = !0, U.forEach(function(i) {
            return je(i) && i.cacheID++ && (i.rec = i())
        });
        var t = Yr("refreshInit");
        Ra && K.sort(), r || qs(), U.forEach(function(i) {
            je(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
        }), X.slice(0).forEach(function(i) {
            return i.refresh()
        }), X.forEach(function(i, n) {
            if (i._subPinOffset && i.pin) {
                var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    o = i.pin[s];
                i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh()
            }
        }), X.forEach(function(i) {
            return i.vars.end === "max" && i.setPositions(i.start, Math.max(i.start + 1, _r(i.scroller, i._dir)))
        }), t.forEach(function(i) {
            return i && i.render && i.render(-1)
        }), U.forEach(function(i) {
            je(i) && (i.smooth && requestAnimationFrame(function() {
                return i.target.style.scrollBehavior = "smooth"
            }), i.rec && i(i.rec))
        }), qa(Xs, 1), Cn.pause(), Lr++, _t = 2, er(2), X.forEach(function(i) {
            return je(i.vars.onRefresh) && i.vars.onRefresh(i)
        }), _t = K.isRefreshing = !1, Yr("refresh")
    },
    Ts = 0,
    pn = 1,
    Yi, er = function(e) {
        if (!_t || e === 2) {
            K.isUpdating = !0, Yi && Yi.update(0);
            var r = X.length,
                t = Qe(),
                i = t - qn >= 50,
                n = r && X[0].scroll();
            if (pn = Ts > n ? -1 : 1, _t || (Ts = n), i && (kt && !Rn && t - kt > 200 && (kt = 0, Yr("scrollEnd")), cn = qn, qn = t), pn < 0) {
                for (Ze = r; Ze-- > 0;) X[Ze] && X[Ze].update(0, i);
                pn = 1
            } else
                for (Ze = 0; Ze < r; Ze++) X[Ze] && X[Ze].update(0, i);
            K.isUpdating = !1
        }
        Gi = 0
    },
    bs = [Xa, Va, Us, Vs, bt + Ni, bt + Li, bt + Bi, bt + Ii, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    gn = bs.concat([Fr, zr, "boxSizing", "max" + _i, "max" + $s, "position", bt, de, de + Bi, de + Li, de + Ni, de + Ii]),
    yl = function(e, r, t) {
        si(t);
        var i = e._gsap;
        if (i.spacerIsNative) si(i.spacerState);
        else if (e._gsap.swappedIn) {
            var n = r.parentNode;
            n && (n.insertBefore(e, r), n.removeChild(r))
        }
        e._gsap.swappedIn = !1
    },
    Kn = function(e, r, t, i) {
        if (!e._gsap.swappedIn) {
            for (var n = bs.length, s = r.style, o = e.style, u; n--;) u = bs[n], s[u] = t[u];
            s.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (s.display = "inline-block"), o[Us] = o[Vs] = "auto", s.flexBasis = t.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[Fr] = vs(e, Je) + Ee, s[zr] = vs(e, Te) + Ee, s[de] = o[bt] = o[Va] = o[Xa] = "0", si(i), o[Fr] = o["max" + _i] = t[Fr], o[zr] = o["max" + $s] = t[zr], o[de] = t[de], e.parentNode !== r && (e.parentNode.insertBefore(r, e), r.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    vl = /([A-Z])/g,
    si = function(e) {
        if (e) {
            var r = e.t.style,
                t = e.length,
                i = 0,
                n, s;
            for ((e.t._gsap || E.core.getCache(e.t)).uncache = 1; i < t; i += 2) s = e[i + 1], n = e[i], s ? r[n] = s : r[n] && r.removeProperty(n.replace(vl, "-$1").toLowerCase())
        }
    },
    on = function(e) {
        for (var r = gn.length, t = e.style, i = [], n = 0; n < r; n++) i.push(gn[n], t[gn[n]]);
        return i.t = e, i
    },
    xl = function(e, r, t) {
        for (var i = [], n = e.length, s = t ? 8 : 0, o; s < n; s += 2) o = e[s], i.push(o, o in r ? r[o] : e[s + 1]);
        return i.t = e.t, i
    },
    mn = {
        left: 0,
        top: 0
    },
    To = function(e, r, t, i, n, s, o, u, l, f, d, h, c) {
        je(e) && (e = e(u)), Rt(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? _n("0" + e.substr(3), t) : 0));
        var p = c ? c.time() : 0,
            _, m, y;
        if (c && c.seek(0), Oi(e)) c && (e = E.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, h, e)), o && dn(o, t, i, !0);
        else {
            je(r) && (r = r(u));
            var w = (e || "0").split(" "),
                b, x, S, C;
            y = tt(r) || fe, b = Jt(y) || {}, (!b || !b.left && !b.top) && zt(y).display === "none" && (C = y.style.display, y.style.display = "block", b = Jt(y), C ? y.style.display = C : y.style.removeProperty("display")), x = _n(w[0], b[i.d]), S = _n(w[1] || "0", t), e = b[i.p] - l[i.p] - f + x + n - S, o && dn(o, S, i, t - S < 20 || o._isStart && S > 20), t -= t - S
        }
        if (s) {
            var T = e + t,
                k = s._isStart;
            _ = "scroll" + i.d2, dn(s, T, i, k && T > 20 || !k && (d ? Math.max(fe[_], Ft[_]) : s.parentNode[_]) <= T + 1), d && (l = Jt(o), d && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Ee))
        }
        return c && y && (_ = Jt(y), c.seek(h), m = Jt(y), c._caScrollDist = _[i.p] - m[i.p], e = e / c._caScrollDist * h), c && c.seek(p), c ? e : Math.round(e)
    },
    Tl = /(webkit|moz|length|cssText|inset)/i,
    bo = function(e, r, t, i) {
        if (e.parentNode !== r) {
            var n = e.style,
                s, o;
            if (r === fe) {
                e._stOrig = n.cssText, o = zt(e);
                for (s in o) !+s && !Tl.test(s) && o[s] && typeof n[s] == "string" && s !== "0" && (n[s] = o[s]);
                n.top = t, n.left = i
            } else n.cssText = e._stOrig;
            E.core.getCache(e).uncache = 1, r.appendChild(e)
        }
    },
    Ga = function(e, r, t) {
        var i = r,
            n = i;
        return function(s) {
            var o = Math.round(e());
            return o !== i && o !== n && Math.abs(o - i) > 3 && Math.abs(o - n) > 3 && (s = o, t && t()), n = i, i = s, s
        }
    },
    wo = function(e, r) {
        var t = vr(e, r),
            i = "_scroll" + r.p2,
            n = function s(o, u, l, f, d) {
                var h = s.tween,
                    c = u.onComplete,
                    p = {};
                l = l || t();
                var _ = Ga(t, l, function() {
                    h.kill(), s.tween = 0
                });
                return d = f && d || 0, f = f || o - l, h && h.kill(), u[i] = o, u.modifiers = p, p[i] = function() {
                    return _(l + f * h.ratio + d * h.ratio * h.ratio)
                }, u.onUpdate = function() {
                    U.cache++, er()
                }, u.onComplete = function() {
                    s.tween = 0, c && c.call(h)
                }, h = s.tween = E.to(e, u), h
            };
        return e[i] = t, t.wheelHandler = function() {
            return n.tween && n.tween.kill() && (n.tween = 0)
        }, Oe(e, "wheel", t.wheelHandler), K.isTouch && Oe(e, "touchmove", t.wheelHandler), n
    },
    K = function() {
        function a(r, t) {
            Kr || a.register(E) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(r, t)
        }
        var e = a.prototype;
        return e.init = function(t, i) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ki) {
                this.update = this.refresh = this.kill = Xt;
                return
            }
            t = mo(Rt(t) || Oi(t) || t.nodeType ? {
                trigger: t
            } : t, nn);
            var n = t,
                s = n.onUpdate,
                o = n.toggleClass,
                u = n.id,
                l = n.onToggle,
                f = n.onRefresh,
                d = n.scrub,
                h = n.trigger,
                c = n.pin,
                p = n.pinSpacing,
                _ = n.invalidateOnRefresh,
                m = n.anticipatePin,
                y = n.onScrubComplete,
                w = n.onSnapComplete,
                b = n.once,
                x = n.snap,
                S = n.pinReparent,
                C = n.pinSpacer,
                T = n.containerAnimation,
                k = n.fastScrollEnd,
                P = n.preventOverlaps,
                M = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Je : Te,
                F = !d && d !== 0,
                D = tt(t.scroller || W),
                Z = E.core.getCache(D),
                Y = Br(D),
                B = ("pinType" in t ? t.pinType : gr(D, "pinType") || Y && "fixed") === "fixed",
                q = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                z = F && t.toggleActions.split(" "),
                G = "markers" in t ? t.markers : nn.markers,
                J = Y ? 0 : parseFloat(zt(D)["border" + M.p2 + _i]) || 0,
                g = this,
                te = t.onRefreshInit && function() {
                    return t.onRefreshInit(g)
                },
                Ve = cl(D, Y, M),
                Ot = hl(D, Y),
                le = 0,
                Fe = 0,
                re = vr(D, M),
                ze, Ue, di, ot, yt, $, be, at, It, $e, v, Gt, ie, ir, nr, Vr, We, pi, sr, he, ut, qe, gi, Ge, Bt, mi, or, Ur, Tr, br, V, Ht, Mt, Dt, vt, Et, wr, $r, Kt;
            if (ys(g), g._dir = M, m *= 45, g.scroller = D, g.scroll = T ? T.time.bind(T) : re, ot = re(), g.vars = t, i = i || t.animation, "refreshPriority" in t && (Ra = 1, t.refreshPriority === -9999 && (Yi = g)), Z.tweenScroll = Z.tweenScroll || {
                    top: wo(D, Te),
                    left: wo(D, Je)
                }, g.tweenTo = ze = Z.tweenScroll[M.p], g.scrubDuration = function(O) {
                    Ht = Oi(O) && O, Ht ? V ? V.duration(O) : V = E.to(i, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: Ht,
                        paused: !0,
                        onComplete: function() {
                            return y && y(g)
                        }
                    }) : (V && V.progress(1).kill(), V = 0)
                }, i && (i.vars.lazy = !1, i._initted || i.vars.immediateRender !== !1 && t.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), g.animation = i.pause(), i.scrollTrigger = g, g.scrubDuration(d), V && V.resetTo && V.resetTo("totalProgress", 0), Tr = 0, u || (u = i.vars.id)), X.push(g), x && ((!hn(x) || x.push) && (x = {
                    snapTo: x
                }), "scrollBehavior" in fe.style && E.set(Y ? [fe, Ft] : D, {
                    scrollBehavior: "auto"
                }), U.forEach(function(O) {
                    return je(O) && O.target === (Y ? ne.scrollingElement || Ft : D) && (O.smooth = !1)
                }), di = je(x.snapTo) ? x.snapTo : x.snapTo === "labels" ? dl(i) : x.snapTo === "labelsDirectional" ? pl(i) : x.directional !== !1 ? function(O, A) {
                    return Ws(x.snapTo)(O, Qe() - Fe < 500 ? 0 : A.direction)
                } : E.utils.snap(x.snapTo), Mt = x.duration || {
                    min: .1,
                    max: 2
                }, Mt = hn(Mt) ? ei(Mt.min, Mt.max) : ei(Mt, Mt), Dt = E.delayedCall(x.delay || Ht / 2 || .1, function() {
                    var O = re(),
                        A = Qe() - Fe < 500,
                        L = ze.tween;
                    if ((A || Math.abs(g.getVelocity()) < 10) && !L && !Rn && le !== O) {
                        var N = (O - $) / ie,
                            we = i && !F ? i.totalProgress() : N,
                            Q = A ? 0 : (we - br) / (Qe() - cn) * 1e3 || 0,
                            se = E.utils.clamp(-N, 1 - N, Gr(Q / 2) * Q / .185),
                            De = N + (x.inertia === !1 ? 0 : se),
                            Se = ei(0, 1, di(De, g)),
                            ge = Math.round($ + Se * ie),
                            oe = x,
                            lt = oe.onStart,
                            He = oe.onInterrupt,
                            Pe = oe.onComplete;
                        if (O <= be && O >= $ && ge !== O) {
                            if (L && !L._initted && L.data <= Gr(ge - O)) return;
                            x.inertia === !1 && (se = Se - N), ze(ge, {
                                duration: Mt(Gr(Math.max(Gr(De - we), Gr(Se - we)) * .185 / Q / .05 || 0)),
                                ease: x.ease || "power3",
                                data: Gr(ge - O),
                                onInterrupt: function() {
                                    return Dt.restart(!0) && He && He(g)
                                },
                                onComplete: function() {
                                    g.update(), le = re(), Tr = br = i && !F ? i.totalProgress() : g.progress, w && w(g), Pe && Pe(g)
                                }
                            }, O, se * ie, ge - O - se * ie), lt && lt(g, ze.tween)
                        }
                    } else g.isActive && le !== O && Dt.restart(!0)
                }).pause()), u && (xs[u] = g), h = g.trigger = tt(h || c), Kt = h && h._gsap && h._gsap.stRevert, Kt && (Kt = Kt(g)), c = c === !0 ? h : tt(c), Rt(o) && (o = {
                    targets: h,
                    className: o
                }), c && (p === !1 || p === bt || (p = !p && c.parentNode && c.parentNode.style && zt(c.parentNode).display === "flex" ? !1 : de), g.pin = c, Ue = E.core.getCache(c), Ue.spacer ? ir = Ue.pinState : (C && (C = tt(C), C && !C.nodeType && (C = C.current || C.nativeElement), Ue.spacerIsNative = !!C, C && (Ue.spacerState = on(C))), Ue.spacer = We = C || ne.createElement("div"), We.classList.add("pin-spacer"), u && We.classList.add("pin-spacer-" + u), Ue.pinState = ir = on(c)), t.force3D !== !1 && E.set(c, {
                    force3D: !0
                }), g.spacer = We = Ue.spacer, Ur = zt(c), gi = Ur[p + M.os2], sr = E.getProperty(c), he = E.quickSetter(c, M.a, Ee), Kn(c, We, Ur), Vr = on(c)), G) {
                Gt = hn(G) ? mo(G, yo) : yo, $e = sn("scroller-start", u, D, M, Gt, 0), v = sn("scroller-end", u, D, M, Gt, 0, $e), pi = $e["offset" + M.op.d2];
                var yi = tt(gr(D, "content") || D);
                at = this.markerStart = sn("start", u, yi, M, Gt, pi, 0, T), It = this.markerEnd = sn("end", u, yi, M, Gt, pi, 0, T), T && ($r = E.quickSetter([at, It], M.a, Ee)), !B && !(Wt.length && gr(D, "fixedMarkers") === !0) && (_l(Y ? fe : D), E.set([$e, v], {
                    force3D: !0
                }), Bt = E.quickSetter($e, M.a, Ee), or = E.quickSetter(v, M.a, Ee))
            }
            if (T) {
                var I = T.vars.onUpdate,
                    R = T.vars.onUpdateParams;
                T.eventCallback("onUpdate", function() {
                    g.update(0, 0, 1), I && I.apply(T, R || [])
                })
            }
            g.previous = function() {
                return X[X.indexOf(g) - 1]
            }, g.next = function() {
                return X[X.indexOf(g) + 1]
            }, g.revert = function(O, A) {
                if (!A) return g.kill(!0);
                var L = O !== !1 || !g.enabled,
                    N = Ie;
                L !== g.isReverted && (L && (Et = Math.max(re(), g.scroll.rec || 0), vt = g.progress, wr = i && i.progress()), at && [at, It, $e, v].forEach(function(we) {
                    return we.style.display = L ? "none" : "block"
                }), L && (Ie = g, g.update(L)), c && (!S || !g.isActive) && (L ? yl(c, We, ir) : Kn(c, We, zt(c), Ge)), L || g.update(L), Ie = N, g.isReverted = L)
            }, g.refresh = function(O, A) {
                if (!((Ie || !g.enabled) && !A)) {
                    if (c && O && kt) {
                        Oe(a, "scrollEnd", $a);
                        return
                    }!_t && te && te(g), Ie = g, Fe = Qe(), ze.tween && (ze.tween.kill(), ze.tween = 0), V && V.pause(), _ && i && i.revert({
                        kill: !1
                    }).invalidate(), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
                    for (var L = Ve(), N = Ot(), we = T ? T.duration() : _r(D, M), Q = ie <= .01, se = 0, De = 0, Se = t.end, ge = t.endTrigger || h, oe = t.start || (t.start === 0 || !h ? 0 : c ? "0 0" : "0 100%"), lt = g.pinnedContainer = t.pinnedContainer && tt(t.pinnedContainer), He = h && Math.max(0, X.indexOf(g)) || 0, Pe = He, _e, Le, Wr, Sr, me, ke, Nt, Fn, Gs, vi, Yt; Pe--;) ke = X[Pe], ke.end || ke.refresh(0, 1) || (Ie = g), Nt = ke.pin, Nt && (Nt === h || Nt === c || Nt === lt) && !ke.isReverted && (vi || (vi = []), vi.unshift(ke), ke.revert(!0, !0)), ke !== X[Pe] && (He--, Pe--);
                    for (je(oe) && (oe = oe(g)), $ = To(oe, h, L, M, re(), at, $e, g, N, J, B, we, T) || (c ? -.001 : 0), je(Se) && (Se = Se(g)), Rt(Se) && !Se.indexOf("+=") && (~Se.indexOf(" ") ? Se = (Rt(oe) ? oe.split(" ")[0] : "") + Se : (se = _n(Se.substr(2), L), Se = Rt(oe) ? oe : (T ? E.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, $) : $) + se, ge = h)), be = Math.max($, To(Se || (ge ? "100% 0" : we), ge, L, M, re() + se, It, v, g, N, J, B, we, T)) || -.001, ie = be - $ || ($ -= .01) && .001, se = 0, Pe = He; Pe--;) ke = X[Pe], Nt = ke.pin, Nt && ke.start - ke._pinPush <= $ && !T && ke.end > 0 && (_e = ke.end - ke.start, (Nt === h && ke.start - ke._pinPush < $ || Nt === lt) && !Oi(oe) && (se += _e * (1 - ke.progress)), Nt === c && (De += _e));
                    if ($ += se, be += se, Q && (vt = E.utils.clamp(0, 1, E.utils.normalize($, be, Et))), g._pinPush = De, at && se && (_e = {}, _e[M.a] = "+=" + se, lt && (_e[M.p] = "-=" + re()), E.set([at, It], _e)), c) _e = zt(c), Sr = M === Te, Wr = re(), ut = parseFloat(sr(M.a)) + De, !we && be > 1 && (Yt = (Y ? ne.scrollingElement || Ft : D).style, Yt = {
                        style: Yt,
                        value: Yt["overflow" + M.a.toUpperCase()]
                    }, Yt.style["overflow" + M.a.toUpperCase()] = "scroll"), Kn(c, We, _e), Vr = on(c), Le = Jt(c, !0), Fn = B && vr(D, Sr ? Je : Te)(), p && (Ge = [p + M.os2, ie + De + Ee], Ge.t = We, Pe = p === de ? vs(c, M) + ie + De : 0, Pe && Ge.push(M.d, Pe + Ee), si(Ge), lt && X.forEach(function(xi) {
                        xi.pin === lt && xi.vars.pinSpacing !== !1 && (xi._subPinOffset = !0)
                    }), B && re(Et)), B && (me = {
                        top: Le.top + (Sr ? Wr - $ : Fn) + Ee,
                        left: Le.left + (Sr ? Fn : Wr - $) + Ee,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, me[Fr] = me["max" + _i] = Math.ceil(Le.width) + Ee, me[zr] = me["max" + $s] = Math.ceil(Le.height) + Ee, me[bt] = me[bt + Bi] = me[bt + Li] = me[bt + Ni] = me[bt + Ii] = "0", me[de] = _e[de], me[de + Bi] = _e[de + Bi], me[de + Li] = _e[de + Li], me[de + Ni] = _e[de + Ni], me[de + Ii] = _e[de + Ii], nr = xl(ir, me, S), _t && re(0)), i ? (Gs = i._initted, $n(1), i.render(i.duration(), !0, !0), qe = sr(M.a) - ut + ie + De, mi = Math.abs(ie - qe) > 1, B && mi && nr.splice(nr.length - 2, 2), i.render(0, !0, !0), Gs || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), $n(0)) : qe = ie, Yt && (Yt.value ? Yt.style["overflow" + M.a.toUpperCase()] = Yt.value : Yt.style.removeProperty("overflow-" + M.a));
                    else if (h && re() && !T)
                        for (Le = h.parentNode; Le && Le !== fe;) Le._pinOffset && ($ -= Le._pinOffset, be -= Le._pinOffset), Le = Le.parentNode;
                    vi && vi.forEach(function(xi) {
                        return xi.revert(!1, !0)
                    }), g.start = $, g.end = be, ot = yt = _t ? Et : re(), !T && !_t && (ot < Et && re(Et), g.scroll.rec = 0), g.revert(!1, !0), Dt && (le = -1, g.isActive && re($ + ie * vt), Dt.restart(!0)), Ie = 0, i && F && (i._initted || wr) && i.progress() !== wr && i.progress(wr, !0).render(i.time(), !0, !0), (Q || vt !== g.progress || T) && (i && !F && i.totalProgress(T && $ < -.001 && !vt ? E.utils.normalize($, be, 0) : vt, !0), g.progress = (ot - $) / ie === vt ? 0 : vt), c && p && (We._pinOffset = Math.round(g.progress * qe)), V && V.invalidate(), f && !_t && f(g)
                }
            }, g.getVelocity = function() {
                return (re() - yt) / (Qe() - cn) * 1e3 || 0
            }, g.endAnimation = function() {
                wi(g.callbackAnimation), i && (V ? V.progress(1) : i.paused() ? F || wi(i, g.direction < 0, 1) : wi(i, i.reversed()))
            }, g.labelToScroll = function(O) {
                return i && i.labels && ($ || g.refresh() || $) + i.labels[O] / i.duration() * ie || 0
            }, g.getTrailing = function(O) {
                var A = X.indexOf(g),
                    L = g.direction > 0 ? X.slice(0, A).reverse() : X.slice(A + 1);
                return (Rt(O) ? L.filter(function(N) {
                    return N.vars.preventOverlaps === O
                }) : L).filter(function(N) {
                    return g.direction > 0 ? N.end <= $ : N.start >= be
                })
            }, g.update = function(O, A, L) {
                if (!(T && !L && !O)) {
                    var N = _t === !0 ? Et : g.scroll(),
                        we = O ? 0 : (N - $) / ie,
                        Q = we < 0 ? 0 : we > 1 ? 1 : we || 0,
                        se = g.progress,
                        De, Se, ge, oe, lt, He, Pe, _e;
                    if (A && (yt = ot, ot = T ? re() : N, x && (br = Tr, Tr = i && !F ? i.totalProgress() : Q)), m && !Q && c && !Ie && !ji && kt && $ < N + (N - yt) / (Qe() - cn) * m && (Q = 1e-4), Q !== se && g.enabled) {
                        if (De = g.isActive = !!Q && Q < 1, Se = !!se && se < 1, He = De !== Se, lt = He || !!Q != !!se, g.direction = Q > se ? 1 : -1, g.progress = Q, lt && !Ie && (ge = Q && !se ? 0 : Q === 1 ? 1 : se === 1 ? 2 : 3, F && (oe = !He && z[ge + 1] !== "none" && z[ge + 1] || z[ge], _e = i && (oe === "complete" || oe === "reset" || oe in i))), P && (He || _e) && (_e || d || !i) && (je(P) ? P(g) : g.getTrailing(P).forEach(function(me) {
                                return me.endAnimation()
                            })), F || (V && !Ie && !ji ? (V._dp._time - V._start !== V._time && V.render(V._dp._time - V._start), V.resetTo ? V.resetTo("totalProgress", Q, i._tTime / i._tDur) : (V.vars.totalProgress = Q, V.invalidate().restart())) : i && i.totalProgress(Q, !!Ie)), c) {
                            if (O && p && (We.style[p + M.os2] = gi), !B) he(Ci(ut + qe * Q));
                            else if (lt) {
                                if (Pe = !O && Q > se && be + 1 > N && N + 1 >= _r(D, M), S)
                                    if (!O && (De || Pe)) {
                                        var Le = Jt(c, !0),
                                            Wr = N - $;
                                        bo(c, fe, Le.top + (M === Te ? Wr : 0) + Ee, Le.left + (M === Te ? 0 : Wr) + Ee)
                                    } else bo(c, We);
                                si(De || Pe ? nr : Vr), mi && Q < 1 && De || he(ut + (Q === 1 && !Pe ? qe : 0))
                            }
                        }
                        x && !ze.tween && !Ie && !ji && Dt.restart(!0), o && (He || b && Q && (Q < 1 || !Wn)) && On(o.targets).forEach(function(me) {
                            return me.classList[De || b ? "add" : "remove"](o.className)
                        }), s && !F && !O && s(g), lt && !Ie ? (F && (_e && (oe === "complete" ? i.pause().totalProgress(1) : oe === "reset" ? i.restart(!0).pause() : oe === "restart" ? i.restart(!0) : i[oe]()), s && s(g)), (He || !Wn) && (l && He && Gn(g, l), q[ge] && Gn(g, q[ge]), b && (Q === 1 ? g.kill(!1, 1) : q[ge] = 0), He || (ge = Q === 1 ? 1 : 3, q[ge] && Gn(g, q[ge]))), k && !De && Math.abs(g.getVelocity()) > (Oi(k) ? k : 2500) && (wi(g.callbackAnimation), V ? V.progress(1) : wi(i, oe === "reverse" ? 1 : !Q, 1))) : F && s && !Ie && s(g)
                    }
                    if (or) {
                        var Sr = T ? N / T.duration() * (T._caScrollDist || 0) : N;
                        Bt(Sr + ($e._isFlipped ? 1 : 0)), or(Sr)
                    }
                    $r && $r(-N / T.duration() * (T._caScrollDist || 0))
                }
            }, g.enable = function(O, A) {
                g.enabled || (g.enabled = !0, Oe(D, "resize", Mi), Oe(Y ? ne : D, "scroll", Hr), te && Oe(a, "refreshInit", te), O !== !1 && (g.progress = vt = 0, ot = yt = le = re()), A !== !1 && g.refresh())
            }, g.getTween = function(O) {
                return O && ze ? ze.tween : V
            }, g.setPositions = function(O, A) {
                c && (ut += O - $, qe += A - O - ie, p === de && g.adjustPinSpacing(A - O - ie)), g.start = $ = O, g.end = be = A, ie = A - O, g.update()
            }, g.adjustPinSpacing = function(O) {
                if (Ge && O) {
                    var A = Ge.indexOf(M.d) + 1;
                    Ge[A] = parseFloat(Ge[A]) + O + Ee, Ge[1] = parseFloat(Ge[1]) + O + Ee, si(Ge)
                }
            }, g.disable = function(O, A) {
                if (g.enabled && (O !== !1 && g.revert(!0, !0), g.enabled = g.isActive = !1, A || V && V.pause(), Et = 0, Ue && (Ue.uncache = 1), te && Ce(a, "refreshInit", te), Dt && (Dt.pause(), ze.tween && ze.tween.kill() && (ze.tween = 0)), !Y)) {
                    for (var L = X.length; L--;)
                        if (X[L].scroller === D && X[L] !== g) return;
                    Ce(D, "resize", Mi), Ce(D, "scroll", Hr)
                }
            }, g.kill = function(O, A) {
                g.disable(O, A), V && !A && V.kill(), u && delete xs[u];
                var L = X.indexOf(g);
                L >= 0 && X.splice(L, 1), L === Ze && pn > 0 && Ze--, L = 0, X.forEach(function(N) {
                    return N.scroller === g.scroller && (L = 1)
                }), L || _t || (g.scroll.rec = 0), i && (i.scrollTrigger = null, O && i.revert({
                    kill: !1
                }), A || i.kill()), at && [at, It, $e, v].forEach(function(N) {
                    return N.parentNode && N.parentNode.removeChild(N)
                }), Yi === g && (Yi = 0), c && (Ue && (Ue.uncache = 1), L = 0, X.forEach(function(N) {
                    return N.pin === c && L++
                }), L || (Ue.spacer = 0)), t.onKill && t.onKill(g)
            }, g.enable(!1, !1), Kt && Kt(g), !i || !i.add || ie ? g.refresh() : E.delayedCall(.01, function() {
                return $ || be || g.refresh()
            }) && (ie = .01) && ($ = be = 0), c && ml()
        }, a.register = function(t) {
            return Kr || (E = t || Na(), Ba() && window.document && a.enable(), Kr = ki), Kr
        }, a.defaults = function(t) {
            if (t)
                for (var i in t) nn[i] = t[i];
            return nn
        }, a.disable = function(t, i) {
            ki = 0, X.forEach(function(s) {
                return s[i ? "kill" : "disable"](t)
            }), Ce(W, "wheel", Hr), Ce(ne, "scroll", Hr), clearInterval(Ji), Ce(ne, "touchcancel", Xt), Ce(fe, "touchstart", Xt), tn(Ce, ne, "pointerdown,touchstart,mousedown", po), tn(Ce, ne, "pointerup,touchend,mouseup", go), Cn.kill(), en(Ce);
            for (var n = 0; n < U.length; n += 3) rn(Ce, U[n], U[n + 1]), rn(Ce, U[n], U[n + 2])
        }, a.enable = function() {
            if (W = window, ne = document, Ft = ne.documentElement, fe = ne.body, E && (On = E.utils.toArray, ei = E.utils.clamp, ys = E.core.context || Xt, $n = E.core.suppressOverwrites || Xt, Xs = W.history.scrollRestoration || "auto", Ts = W.pageYOffset, E.core.globals("ScrollTrigger", a), fe)) {
                ki = 1, fl(), ve.register(E), a.isTouch = ve.isTouch, ar = ve.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Oe(W, "wheel", Hr), Aa = [W, ne, Ft, fe], E.matchMedia ? (a.matchMedia = function(u) {
                    var l = E.matchMedia(),
                        f;
                    for (f in u) l.add(f, u[f]);
                    return l
                }, E.addEventListener("matchMediaInit", function() {
                    return qs()
                }), E.addEventListener("matchMediaRevert", function() {
                    return Wa()
                }), E.addEventListener("matchMedia", function() {
                    Dr(0, 1), Yr("matchMedia")
                }), E.matchMedia("(orientation: portrait)", function() {
                    return Hn(), Hn
                })) : console.warn("Requires GSAP 3.11.0 or later"), Hn(), Oe(ne, "scroll", Hr);
                var t = fe.style,
                    i = t.borderTopStyle,
                    n = E.core.Animation.prototype,
                    s, o;
                for (n.revert || Object.defineProperty(n, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), t.borderTopStyle = "solid", s = Jt(fe), Te.m = Math.round(s.top + Te.sc()) || 0, Je.m = Math.round(s.left + Je.sc()) || 0, i ? t.borderTopStyle = i : t.removeProperty("border-top-style"), Ji = setInterval(vo, 250), E.delayedCall(.5, function() {
                        return ji = 0
                    }), Oe(ne, "touchcancel", Xt), Oe(fe, "touchstart", Xt), tn(Oe, ne, "pointerdown,touchstart,mousedown", po), tn(Oe, ne, "pointerup,touchend,mouseup", go), ms = E.utils.checkPrefix("transform"), gn.push(ms), Kr = Qe(), Cn = E.delayedCall(.2, Dr).pause(), Zr = [ne, "visibilitychange", function() {
                        var u = W.innerWidth,
                            l = W.innerHeight;
                        ne.hidden ? (ho = u, _o = l) : (ho !== u || _o !== l) && Mi()
                    }, ne, "DOMContentLoaded", Dr, W, "load", Dr, W, "resize", Mi], en(Oe), X.forEach(function(u) {
                        return u.enable(0, 1)
                    }), o = 0; o < U.length; o += 3) rn(Ce, U[o], U[o + 1]), rn(Ce, U[o], U[o + 2])
            }
        }, a.config = function(t) {
            "limitCallbacks" in t && (Wn = !!t.limitCallbacks);
            var i = t.syncInterval;
            i && clearInterval(Ji) || (Ji = i) && setInterval(vo, i), "ignoreMobileResize" in t && (za = a.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (en(Ce) || en(Oe, t.autoRefreshEvents || "none"), Fa = (t.autoRefreshEvents + "").indexOf("resize") === -1)
        }, a.scrollerProxy = function(t, i) {
            var n = tt(t),
                s = U.indexOf(n),
                o = Br(n);
            ~s && U.splice(s, o ? 6 : 2), i && (o ? Wt.unshift(W, i, fe, i, Ft, i) : Wt.unshift(n, i))
        }, a.clearMatchMedia = function(t) {
            X.forEach(function(i) {
                return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0)
            })
        }, a.isInViewport = function(t, i, n) {
            var s = (Rt(t) ? tt(t) : t).getBoundingClientRect(),
                o = s[n ? Fr : zr] * i || 0;
            return n ? s.right - o > 0 && s.left + o < W.innerWidth : s.bottom - o > 0 && s.top + o < W.innerHeight
        }, a.positionInViewport = function(t, i, n) {
            Rt(t) && (t = tt(t));
            var s = t.getBoundingClientRect(),
                o = s[n ? Fr : zr],
                u = i == null ? o / 2 : i in Mn ? Mn[i] * o : ~i.indexOf("%") ? parseFloat(i) * o / 100 : parseFloat(i) || 0;
            return n ? (s.left + u) / W.innerWidth : (s.top + u) / W.innerHeight
        }, a.killAll = function(t) {
            if (X.slice(0).forEach(function(n) {
                    return n.vars.id !== "ScrollSmoother" && n.kill()
                }), t !== !0) {
                var i = Nr.killAll || [];
                Nr = {}, i.forEach(function(n) {
                    return n()
                })
            }
        }, a
    }();
K.version = "3.11.5";
K.saveStyles = function(a) {
    return a ? On(a).forEach(function(e) {
        if (e && e.style) {
            var r = ct.indexOf(e);
            r >= 0 && ct.splice(r, 5), ct.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), E.core.getCache(e), ys())
        }
    }) : ct
};
K.revert = function(a, e) {
    return qs(!a, e)
};
K.create = function(a, e) {
    return new K(a, e)
};
K.refresh = function(a) {
    return a ? Mi() : (Kr || K.register()) && Dr(!0)
};
K.update = function(a) {
    return ++U.cache && er(a === !0 ? 2 : 0)
};
K.clearScrollMemory = qa;
K.maxScroll = function(a, e) {
    return _r(a, e ? Je : Te)
};
K.getScrollFunc = function(a, e) {
    return vr(tt(a), e ? Je : Te)
};
K.getById = function(a) {
    return xs[a]
};
K.getAll = function() {
    return X.filter(function(a) {
        return a.vars.id !== "ScrollSmoother"
    })
};
K.isScrolling = function() {
    return !!kt
};
K.snapDirectional = Ws;
K.addEventListener = function(a, e) {
    var r = Nr[a] || (Nr[a] = []);
    ~r.indexOf(e) || r.push(e)
};
K.removeEventListener = function(a, e) {
    var r = Nr[a],
        t = r && r.indexOf(e);
    t >= 0 && r.splice(t, 1)
};
K.batch = function(a, e) {
    var r = [],
        t = {},
        i = e.interval || .016,
        n = e.batchMax || 1e9,
        s = function(l, f) {
            var d = [],
                h = [],
                c = E.delayedCall(i, function() {
                    f(d, h), d = [], h = []
                }).pause();
            return function(p) {
                d.length || c.restart(!0), d.push(p.trigger), h.push(p), n <= d.length && c.progress(1)
            }
        },
        o;
    for (o in e) t[o] = o.substr(0, 2) === "on" && je(e[o]) && o !== "onRefreshInit" ? s(o, e[o]) : e[o];
    return je(n) && (n = n(), Oe(K, "refresh", function() {
        return n = e.batchMax()
    })), On(a).forEach(function(u) {
        var l = {};
        for (o in t) l[o] = t[o];
        l.trigger = u, r.push(K.create(l))
    }), r
};
var So = function(e, r, t, i) {
        return r > i ? e(i) : r < 0 && e(0), t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1
    },
    Zn = function a(e, r) {
        r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (ve.isTouch ? " pinch-zoom" : "") : "none", e === Ft && a(fe, r)
    },
    an = {
        auto: 1,
        scroll: 1
    },
    bl = function(e) {
        var r = e.event,
            t = e.target,
            i = e.axis,
            n = (r.changedTouches ? r.changedTouches[0] : r).target,
            s = n._gsap || E.core.getCache(n),
            o = Qe(),
            u;
        if (!s._isScrollT || o - s._isScrollT > 2e3) {
            for (; n && n !== fe && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(an[(u = zt(n)).overflowY] || an[u.overflowX]));) n = n.parentNode;
            s._isScroll = n && n !== t && !Br(n) && (an[(u = zt(n)).overflowY] || an[u.overflowX]), s._isScrollT = o
        }(s._isScroll || i === "x") && (r.stopPropagation(), r._gsapAllow = !0)
    },
    Ha = function(e, r, t, i) {
        return ve.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: r,
            onWheel: i = i && bl,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function() {
                return t && Oe(ne, ve.eventTypes[0], ko, !1, !0)
            },
            onDisable: function() {
                return Ce(ne, ve.eventTypes[0], ko, !0)
            }
        })
    },
    wl = /(input|label|select|textarea)/i,
    Po, ko = function(e) {
        var r = wl.test(e.target.tagName);
        (r || Po) && (e._gsapAllow = !0, Po = r)
    },
    Sl = function(e) {
        hn(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var r = e,
            t = r.normalizeScrollX,
            i = r.momentum,
            n = r.allowNestedScroll,
            s = r.onRelease,
            o, u, l = tt(e.target) || Ft,
            f = E.core.globals().ScrollSmoother,
            d = f && f.get(),
            h = ar && (e.content && tt(e.content) || d && e.content !== !1 && !d.smooth() && d.content()),
            c = vr(l, Te),
            p = vr(l, Je),
            _ = 1,
            m = (ve.isTouch && W.visualViewport ? W.visualViewport.scale * W.visualViewport.width : W.outerWidth) / W.innerWidth,
            y = 0,
            w = je(i) ? function() {
                return i(o)
            } : function() {
                return i || 2.8
            },
            b, x, S = Ha(l, e.type, !0, n),
            C = function() {
                return x = !1
            },
            T = Xt,
            k = Xt,
            P = function() {
                u = _r(l, Te), k = ei(ar ? 1 : 0, u), t && (T = ei(0, _r(l, Je))), b = Lr
            },
            M = function() {
                h._gsap.y = Ci(parseFloat(h._gsap.y) + c.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0
            },
            F = function() {
                if (x) {
                    requestAnimationFrame(C);
                    var G = Ci(o.deltaY / 2),
                        J = k(c.v - G);
                    if (h && J !== c.v + c.offset) {
                        c.offset = J - c.v;
                        var g = Ci((parseFloat(h && h._gsap.y) || 0) - c.offset);
                        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + g + ", 0, 1)", h._gsap.y = g + "px", c.cacheID = U.cache, er()
                    }
                    return !0
                }
                c.offset && M(), x = !0
            },
            D, Z, Y, B, q = function() {
                P(), D.isActive() && D.vars.scrollY > u && (c() > u ? D.progress(1) && c(u) : D.resetTo("scrollY", u))
            };
        return h && E.set(h, {
            y: "+=0"
        }), e.ignoreCheck = function(z) {
            return ar && z.type === "touchmove" && F() || _ > 1.05 && z.type !== "touchstart" || o.isGesturing || z.touches && z.touches.length > 1
        }, e.onPress = function() {
            x = !1;
            var z = _;
            _ = Ci((W.visualViewport && W.visualViewport.scale || 1) / m), D.pause(), z !== _ && Zn(l, _ > 1.01 ? !0 : t ? !1 : "x"), Z = p(), Y = c(), P(), b = Lr
        }, e.onRelease = e.onGestureStart = function(z, G) {
            if (c.offset && M(), !G) B.restart(!0);
            else {
                U.cache++;
                var J = w(),
                    g, te;
                t && (g = p(), te = g + J * .05 * -z.velocityX / .227, J *= So(p, g, te, _r(l, Je)), D.vars.scrollX = T(te)), g = c(), te = g + J * .05 * -z.velocityY / .227, J *= So(c, g, te, _r(l, Te)), D.vars.scrollY = k(te), D.invalidate().duration(J).play(.01), (ar && D.vars.scrollY >= u || g >= u - 1) && E.to({}, {
                    onUpdate: q,
                    duration: J
                })
            }
            s && s(z)
        }, e.onWheel = function() {
            D._ts && D.pause(), Qe() - y > 1e3 && (b = 0, y = Qe())
        }, e.onChange = function(z, G, J, g, te) {
            if (Lr !== b && P(), G && t && p(T(g[2] === G ? Z + (z.startX - z.x) : p() + G - g[1])), J) {
                c.offset && M();
                var Ve = te[2] === J,
                    Ot = Ve ? Y + z.startY - z.y : c() + J - te[1],
                    le = k(Ot);
                Ve && Ot !== le && (Y += le - Ot), c(le)
            }(J || G) && er()
        }, e.onEnable = function() {
            Zn(l, t ? !1 : "x"), K.addEventListener("refresh", q), Oe(W, "resize", q), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = p.smooth = !1), S.enable()
        }, e.onDisable = function() {
            Zn(l, !0), Ce(W, "resize", q), K.removeEventListener("refresh", q), S.kill()
        }, e.lockAxis = e.lockAxis !== !1, o = new ve(e), o.iOS = ar, ar && !c() && c(1), ar && E.ticker.add(Xt), B = o._dc, D = E.to(o, {
            ease: "power4",
            paused: !0,
            scrollX: t ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Ga(c, c(), function() {
                    return D.pause()
                })
            },
            onUpdate: er,
            onComplete: B.vars.onComplete
        }), o
    };
K.sort = function(a) {
    return X.sort(a || function(e, r) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
    })
};
K.observe = function(a) {
    return new ve(a)
};
K.normalizeScroll = function(a) {
    if (typeof a > "u") return ft;
    if (a === !0 && ft) return ft.enable();
    if (a === !1) return ft && ft.kill();
    var e = a instanceof ve ? a : Sl(a);
    return ft && ft.target === e.target && ft.kill(), Br(e.target) && (ft = e), e
};
K.core = {
    _getVelocityProp: gs,
    _inputObserver: Ha,
    _scrollers: U,
    _proxies: Wt,
    bridge: {
        ss: function() {
            kt || Yr("scrollStart"), kt = Qe()
        },
        ref: function() {
            return Ie
        }
    }
};
Na() && E.registerPlugin(K);
var Pl = Xe.registerPlugin(Ys) || Xe;
Pl.core.Tween;
export {
    K as S, Pl as g, kl as o
};