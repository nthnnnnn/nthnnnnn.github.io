import {
    g as ke,
    S as Ke
} from "./all-ed396580.js";
/*!
 * CSSRulePlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var W, Ce, re, ue, Ye = function() {
        return typeof window < "u"
    },
    Qe = function() {
        return W || Ye() && (W = window.gsap) && W.registerPlugin && W
    },
    Re = function() {
        return Ce || (Xe(), ue || console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")), Ce
    },
    Xe = function(i) {
        W = i || Qe(), Ye() && (re = document), W && (ue = W.plugins.css, ue && (Ce = 1))
    },
    Ct = {
        version: "3.11.5",
        name: "cssRule",
        init: function(i, t, s, n, a) {
            if (!Re() || typeof i.cssText > "u") return !1;
            var l = i._gsProxy = i._gsProxy || re.createElement("div");
            this.ss = i, this.style = l.style, l.style.cssText = i.cssText, ue.prototype.init.call(this, l, t, s, n, a)
        },
        render: function(i, t) {
            for (var s = t._pt, n = t.style, a = t.ss, l; s;) s.r(i, s.d), s = s._next;
            for (l = n.length; --l > -1;) a[n[l]] = n[n[l]]
        },
        getRule: function(i) {
            Re();
            var t = re.all ? "rules" : "cssRules",
                s = re.styleSheets,
                n = s.length,
                a = i.charAt(0) === ":",
                l, o, c, u;
            for (i = (a ? "" : ",") + i.split("::").join(":").toLowerCase() + ",", a && (u = []); n--;) {
                try {
                    if (o = s[n][t], !o) continue;
                    l = o.length
                } catch (g) {
                    console.warn(g);
                    continue
                }
                for (; --l > -1;)
                    if (c = o[l], c.selectorText && ("," + c.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(i) !== -1)
                        if (a) u.push(c.style);
                        else return c.style
            }
            return u
        },
        register: Xe
    };
Qe() && W.registerPlugin(Ct);

function m(e, i, t) {
    return (i = St(i)) in e ? Object.defineProperty(e, i, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = t, e
}

function At(e, i) {
    if (typeof e != "object" || e === null) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var s = t.call(e, i || "default");
        if (typeof s != "object") return s;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (i === "string" ? String : Number)(e)
}

function St(e) {
    var i = At(e, "string");
    return typeof i == "symbol" ? i : String(i)
}

function Et(e, i) {
    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
}

function He(e, i) {
    for (var t = 0; t < i.length; t++) {
        var s = i[t];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
    }
}

function Pt(e, i, t) {
    return i && He(e.prototype, i), t && He(e, t), e
}

function Mt(e, i, t) {
    return i in e ? Object.defineProperty(e, i, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = t, e
}

function qe(e, i) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        i && (s = s.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })), t.push.apply(t, s)
    }
    return t
}

function De(e) {
    for (var i = 1; i < arguments.length; i++) {
        var t = arguments[i] != null ? arguments[i] : {};
        i % 2 ? qe(Object(t), !0).forEach(function(s) {
            Mt(e, s, t[s])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qe(Object(t)).forEach(function(s) {
            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
        })
    }
    return e
}
var Ve = {
    addCSS: !0,
    thumbWidth: 15,
    watch: !0
};

function Nt(e, i) {
    return function() {
        return Array.from(document.querySelectorAll(i)).includes(this)
    }.call(e, i)
}

function xt(e, i) {
    if (e && i) {
        var t = new Event(i, {
            bubbles: !0
        });
        e.dispatchEvent(t)
    }
}
var ie = function(e) {
        return e != null ? e.constructor : null
    },
    Le = function(e, i) {
        return !!(e && i && e instanceof i)
    },
    Je = function(e) {
        return e == null
    },
    Ge = function(e) {
        return ie(e) === Object
    },
    Lt = function(e) {
        return ie(e) === Number && !Number.isNaN(e)
    },
    Ze = function(e) {
        return ie(e) === String
    },
    It = function(e) {
        return ie(e) === Boolean
    },
    $t = function(e) {
        return ie(e) === Function
    },
    et = function(e) {
        return Array.isArray(e)
    },
    tt = function(e) {
        return Le(e, NodeList)
    },
    _t = function(e) {
        return Le(e, Element)
    },
    Ot = function(e) {
        return Le(e, Event)
    },
    jt = function(e) {
        return Je(e) || (Ze(e) || et(e) || tt(e)) && !e.length || Ge(e) && !Object.keys(e).length
    },
    O = {
        nullOrUndefined: Je,
        object: Ge,
        number: Lt,
        string: Ze,
        boolean: It,
        function: $t,
        array: et,
        nodeList: tt,
        element: _t,
        event: Ot,
        empty: jt
    };

function Rt(e) {
    var i = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return i ? Math.max(0, (i[1] ? i[1].length : 0) - (i[2] ? +i[2] : 0)) : 0
}

function Ht(e, i) {
    if (1 > i) {
        var t = Rt(i);
        return parseFloat(e.toFixed(t))
    }
    return Math.round(e / i) * i
}
var qt = function() {
    function e(i, t) {
        Et(this, e), O.element(i) ? this.element = i : O.string(i) && (this.element = document.querySelector(i)), O.element(this.element) && O.empty(this.element.rangeTouch) && (this.config = De({}, Ve, {}, t), this.init())
    }
    return Pt(e, [{
        key: "init",
        value: function() {
            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
        }
    }, {
        key: "destroy",
        value: function() {
            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
        }
    }, {
        key: "listeners",
        value: function(i) {
            var t = this,
                s = i ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(n) {
                t.element[s](n, function(a) {
                    return t.set(a)
                }, !1)
            })
        }
    }, {
        key: "get",
        value: function(i) {
            if (!e.enabled || !O.event(i)) return null;
            var t, s = i.target,
                n = i.changedTouches[0],
                a = parseFloat(s.getAttribute("min")) || 0,
                l = parseFloat(s.getAttribute("max")) || 100,
                o = parseFloat(s.getAttribute("step")) || 1,
                c = s.getBoundingClientRect(),
                u = 100 / c.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (t = 100 / c.width * (n.clientX - c.left)) ? t = 0 : 100 < t && (t = 100), 50 > t ? t -= (100 - 2 * t) * u : 50 < t && (t += 2 * (t - 50) * u), a + Ht(t / 100 * (l - a), o)
        }
    }, {
        key: "set",
        value: function(i) {
            e.enabled && O.event(i) && !i.target.disabled && (i.preventDefault(), i.target.value = this.get(i), xt(i.target, i.type === "touchend" ? "change" : "input"))
        }
    }], [{
        key: "setup",
        value: function(i) {
            var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                s = null;
            if (O.empty(i) || O.string(i) ? s = Array.from(document.querySelectorAll(O.string(i) ? i : 'input[type="range"]')) : O.element(i) ? s = [i] : O.nodeList(i) ? s = Array.from(i) : O.array(i) && (s = i.filter(O.element)), O.empty(s)) return null;
            var n = De({}, Ve, {}, t);
            if (O.string(i) && n.watch) {
                var a = new MutationObserver(function(l) {
                    Array.from(l).forEach(function(o) {
                        Array.from(o.addedNodes).forEach(function(c) {
                            O.element(c) && Nt(c, i) && new e(c, n)
                        })
                    })
                });
                a.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }
            return s.map(function(l) {
                return new e(l, t)
            })
        }
    }, {
        key: "enabled",
        get: function() {
            return "ontouchstart" in document.documentElement
        }
    }]), e
}();
const se = e => e != null ? e.constructor : null,
    U = (e, i) => !!(e && i && e instanceof i),
    Ie = e => e == null,
    it = e => se(e) === Object,
    Dt = e => se(e) === Number && !Number.isNaN(e),
    ge = e => se(e) === String,
    Vt = e => se(e) === Boolean,
    st = e => typeof e == "function",
    nt = e => Array.isArray(e),
    Ft = e => U(e, WeakMap),
    at = e => U(e, NodeList),
    Ut = e => se(e) === Text,
    Bt = e => U(e, Event),
    Wt = e => U(e, KeyboardEvent),
    zt = e => U(e, window.TextTrackCue) || U(e, window.VTTCue),
    Kt = e => U(e, TextTrack) || !Ie(e) && ge(e.kind),
    Yt = e => U(e, Promise) && st(e.then),
    Qt = e => e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.style == "object" && typeof e.ownerDocument == "object",
    rt = e => Ie(e) || (ge(e) || nt(e) || at(e)) && !e.length || it(e) && !Object.keys(e).length,
    Xt = e => {
        if (U(e, window.URL)) return !0;
        if (!ge(e)) return !1;
        let i = e;
        e.startsWith("http://") && e.startsWith("https://") || (i = `http://${e}`);
        try {
            return !rt(new URL(i).hostname)
        } catch {
            return !1
        }
    };
var r = {
    nullOrUndefined: Ie,
    object: it,
    number: Dt,
    string: ge,
    boolean: Vt,
    function: st,
    array: nt,
    weakMap: Ft,
    nodeList: at,
    element: Qt,
    textNode: Ut,
    event: Bt,
    keyboardEvent: Wt,
    cue: zt,
    track: Kt,
    promise: Yt,
    url: Xt,
    empty: rt
};
const Ae = (() => {
    const e = document.createElement("span"),
        i = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        },
        t = Object.keys(i).find(s => e.style[s] !== void 0);
    return !!r.string(t) && i[t]
})();

function lt(e, i) {
    setTimeout(() => {
        try {
            e.hidden = !0, e.offsetHeight, e.hidden = !1
        } catch {}
    }, i)
}
const Jt = !!window.document.documentMode,
    Gt = /Edge/g.test(navigator.userAgent),
    Zt = "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent),
    ei = /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
    ti = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1,
    ii = /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
var _ = {
    isIE: Jt,
    isEdge: Gt,
    isWebKit: Zt,
    isIPhone: ei,
    isIPadOS: ti,
    isIos: ii
};

function si(e) {
    return JSON.parse(JSON.stringify(e))
}

function ot(e, i) {
    return i.split(".").reduce((t, s) => t && t[s], e)
}

function N(e = {}, ...i) {
    if (!i.length) return e;
    const t = i.shift();
    return r.object(t) ? (Object.keys(t).forEach(s => {
        r.object(t[s]) ? (Object.keys(e).includes(s) || Object.assign(e, {
            [s]: {}
        }), N(e[s], t[s])) : Object.assign(e, {
            [s]: t[s]
        })
    }), N(e, ...i)) : e
}

function ct(e, i) {
    const t = e.length ? e : [e];
    Array.from(t).reverse().forEach((s, n) => {
        const a = n > 0 ? i.cloneNode(!0) : i,
            l = s.parentNode,
            o = s.nextSibling;
        a.appendChild(s), o ? l.insertBefore(a, o) : l.appendChild(a)
    })
}

function Se(e, i) {
    r.element(e) && !r.empty(i) && Object.entries(i).filter(([, t]) => !r.nullOrUndefined(t)).forEach(([t, s]) => e.setAttribute(t, s))
}

function y(e, i, t) {
    const s = document.createElement(e);
    return r.object(i) && Se(s, i), r.string(t) && (s.innerText = t), s
}

function ni(e, i) {
    r.element(e) && r.element(i) && i.parentNode.insertBefore(e, i.nextSibling)
}

function Fe(e, i, t, s) {
    r.element(i) && i.appendChild(y(e, t, s))
}

function F(e) {
    r.nodeList(e) || r.array(e) ? Array.from(e).forEach(F) : r.element(e) && r.element(e.parentNode) && e.parentNode.removeChild(e)
}

function le(e) {
    if (!r.element(e)) return;
    let {
        length: i
    } = e.childNodes;
    for (; i > 0;) e.removeChild(e.lastChild), i -= 1
}

function he(e, i) {
    return r.element(i) && r.element(i.parentNode) && r.element(e) ? (i.parentNode.replaceChild(e, i), e) : null
}

function D(e, i) {
    if (!r.string(e) || r.empty(e)) return {};
    const t = {},
        s = N({}, i);
    return e.split(",").forEach(n => {
        const a = n.trim(),
            l = a.replace(".", ""),
            o = a.replace(/[[\]]/g, "").split("="),
            [c] = o,
            u = o.length > 1 ? o[1].replace(/["']/g, "") : "";
        switch (a.charAt(0)) {
            case ".":
                r.string(s.class) ? t.class = `${s.class} ${l}` : t.class = l;
                break;
            case "#":
                t.id = a.replace("#", "");
                break;
            case "[":
                t[c] = u
        }
    }), N(s, t)
}

function K(e, i) {
    if (!r.element(e)) return;
    let t = i;
    r.boolean(t) || (t = !e.hidden), e.hidden = t
}

function E(e, i, t) {
    if (r.nodeList(e)) return Array.from(e).map(s => E(s, i, t));
    if (r.element(e)) {
        let s = "toggle";
        return t !== void 0 && (s = t ? "add" : "remove"), e.classList[s](i), e.classList.contains(i)
    }
    return !1
}

function de(e, i) {
    return r.element(e) && e.classList.contains(i)
}

function Y(e, i) {
    const {
        prototype: t
    } = Element;
    return (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || function() {
        return Array.from(document.querySelectorAll(i)).includes(this)
    }).call(e, i)
}

function ai(e, i) {
    const {
        prototype: t
    } = Element;
    return (t.closest || function() {
        let s = this;
        do {
            if (Y.matches(s, i)) return s;
            s = s.parentElement || s.parentNode
        } while (s !== null && s.nodeType === 1);
        return null
    }).call(e, i)
}

function Z(e) {
    return this.elements.container.querySelectorAll(e)
}

function I(e) {
    return this.elements.container.querySelector(e)
}

function be(e = null, i = !1) {
    r.element(e) && e.focus({
        preventScroll: !0,
        focusVisible: i
    })
}
const Ue = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
    },
    x = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check(e, i) {
            const t = x[e] || i !== "html5";
            return {
                api: t,
                ui: t && x.rangeInput
            }
        },
        pip: !(_.isIPhone || !r.function(y("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || y("video").disablePictureInPicture)),
        airplay: r.function(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime(e) {
            if (r.empty(e)) return !1;
            const [i] = e.split("/");
            let t = e;
            if (!this.isHTML5 || i !== this.type) return !1;
            Object.keys(Ue).includes(t) && (t += `; codecs="${Ue[e]}"`);
            try {
                return !!(t && this.media.canPlayType(t).replace(/no/, ""))
            } catch {
                return !1
            }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (() => {
            const e = document.createElement("input");
            return e.type = "range", e.type === "range"
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: Ae !== !1,
        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
    },
    ri = (() => {
        let e = !1;
        try {
            const i = Object.defineProperty({}, "passive", {
                get: () => (e = !0, null)
            });
            window.addEventListener("test", null, i), window.removeEventListener("test", null, i)
        } catch {}
        return e
    })();

function ee(e, i, t, s = !1, n = !0, a = !1) {
    if (!e || !("addEventListener" in e) || r.empty(i) || !r.function(t)) return;
    const l = i.split(" ");
    let o = a;
    ri && (o = {
        passive: n,
        capture: a
    }), l.forEach(c => {
        this && this.eventListeners && s && this.eventListeners.push({
            element: e,
            type: c,
            callback: t,
            options: o
        }), e[s ? "addEventListener" : "removeEventListener"](c, t, o)
    })
}

function C(e, i = "", t, s = !0, n = !1) {
    ee.call(this, e, i, t, !0, s, n)
}

function fe(e, i = "", t, s = !0, n = !1) {
    ee.call(this, e, i, t, !1, s, n)
}

function $e(e, i = "", t, s = !0, n = !1) {
    const a = (...l) => {
        fe(e, i, a, s, n), t.apply(this, l)
    };
    ee.call(this, e, i, a, !0, s, n)
}

function b(e, i = "", t = !1, s = {}) {
    if (!r.element(e) || r.empty(i)) return;
    const n = new CustomEvent(i, {
        bubbles: t,
        detail: {
            ...s,
            plyr: this
        }
    });
    e.dispatchEvent(n)
}

function li() {
    this && this.eventListeners && (this.eventListeners.forEach(e => {
        const {
            element: i,
            type: t,
            callback: s,
            options: n
        } = e;
        i.removeEventListener(t, s, n)
    }), this.eventListeners = [])
}

function oi() {
    return new Promise(e => this.ready ? setTimeout(e, 0) : C.call(this, this.elements.container, "ready", e)).then(() => {})
}

function V(e) {
    r.promise(e) && e.then(null, () => {})
}

function Ee(e) {
    return r.array(e) ? e.filter((i, t) => e.indexOf(i) === t) : e
}

function ut(e, i) {
    return r.array(e) && e.length ? e.reduce((t, s) => Math.abs(s - i) < Math.abs(t - i) ? s : t) : null
}

function ht(e) {
    return !(!window || !window.CSS) && window.CSS.supports(e)
}
const Be = [
    [1, 1],
    [4, 3],
    [3, 4],
    [5, 4],
    [4, 5],
    [3, 2],
    [2, 3],
    [16, 10],
    [10, 16],
    [16, 9],
    [9, 16],
    [21, 9],
    [9, 21],
    [32, 9],
    [9, 32]
].reduce((e, [i, t]) => ({
    ...e,
    [i / t]: [i, t]
}), {});

function dt(e) {
    return r.array(e) || r.string(e) && e.includes(":") ? (r.array(e) ? e : e.split(":")).map(Number).every(r.number) : !1
}

function me(e) {
    if (!r.array(e) || !e.every(r.number)) return null;
    const [i, t] = e, s = (a, l) => l === 0 ? a : s(l, a % l), n = s(i, t);
    return [i / n, t / n]
}

function _e(e) {
    const i = s => dt(s) ? s.split(":").map(Number) : null;
    let t = i(e);
    if (t === null && (t = i(this.config.ratio)), t === null && !r.empty(this.embed) && r.array(this.embed.ratio) && ({
            ratio: t
        } = this.embed), t === null && this.isHTML5) {
        const {
            videoWidth: s,
            videoHeight: n
        } = this.media;
        t = [s, n]
    }
    return me(t)
}

function Q(e) {
    if (!this.isVideo) return {};
    const {
        wrapper: i
    } = this.elements, t = _e.call(this, e);
    if (!r.array(t)) return {};
    const [s, n] = me(t), a = 100 / s * n;
    if (ht(`aspect-ratio: ${s}/${n}`) ? i.style.aspectRatio = `${s}/${n}` : i.style.paddingBottom = `${a}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
        const l = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
            o = (l - a) / (l / 50);
        this.fullscreen.active ? i.style.paddingBottom = null : this.media.style.transform = `translateY(-${o}%)`
    } else this.isHTML5 && i.classList.add(this.config.classNames.videoFixedRatio);
    return {
        padding: a,
        ratio: t
    }
}

function mt(e, i, t = .05) {
    const s = e / i,
        n = ut(Object.keys(Be), s);
    return Math.abs(n - s) <= t ? Be[n] : [e, i]
}

function ci() {
    return [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)]
}
const z = {
    getSources() {
        return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(e => {
            const i = e.getAttribute("type");
            return !!r.empty(i) || x.mime.call(this, i)
        }) : []
    },
    getQualityOptions() {
        return this.config.quality.forced ? this.config.quality.options : z.getSources.call(this).map(e => Number(e.getAttribute("size"))).filter(Boolean)
    },
    setup() {
        if (!this.isHTML5) return;
        const e = this;
        e.options.speed = e.config.speed.options, r.empty(this.config.ratio) || Q.call(e), Object.defineProperty(e.media, "quality", {
            get() {
                const i = z.getSources.call(e).find(t => t.getAttribute("src") === e.source);
                return i && Number(i.getAttribute("size"))
            },
            set(i) {
                if (e.quality !== i) {
                    if (e.config.quality.forced && r.function(e.config.quality.onChange)) e.config.quality.onChange(i);
                    else {
                        const t = z.getSources.call(e).find(c => Number(c.getAttribute("size")) === i);
                        if (!t) return;
                        const {
                            currentTime: s,
                            paused: n,
                            preload: a,
                            readyState: l,
                            playbackRate: o
                        } = e.media;
                        e.media.src = t.getAttribute("src"), (a !== "none" || l) && (e.once("loadedmetadata", () => {
                            e.speed = o, e.currentTime = s, n || V(e.play())
                        }), e.media.load())
                    }
                    b.call(e, e.media, "qualitychange", !1, {
                        quality: i
                    })
                }
            }
        })
    },
    cancelRequests() {
        this.isHTML5 && (F(z.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
    }
};

function ui(e) {
    return `${e}-${Math.floor(1e4*Math.random())}`
}

function Pe(e, ...i) {
    return r.empty(e) ? e : e.toString().replace(/{(\d+)}/g, (t, s) => i[s].toString())
}

function hi(e, i) {
    return e === 0 || i === 0 || Number.isNaN(e) || Number.isNaN(i) ? 0 : (e / i * 100).toFixed(2)
}
const G = (e = "", i = "", t = "") => e.replace(new RegExp(i.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), t.toString()),
    pt = (e = "") => e.toString().replace(/\w\S*/g, i => i.charAt(0).toUpperCase() + i.slice(1).toLowerCase());

function di(e = "") {
    let i = e.toString();
    return i = G(i, "-", " "), i = G(i, "_", " "), i = pt(i), G(i, " ", "")
}

function mi(e = "") {
    let i = e.toString();
    return i = di(i), i.charAt(0).toLowerCase() + i.slice(1)
}

function pi(e) {
    const i = document.createDocumentFragment(),
        t = document.createElement("div");
    return i.appendChild(t), t.innerHTML = e, i.firstChild.innerText
}

function gi(e) {
    const i = document.createElement("div");
    return i.appendChild(e), i.innerHTML
}
const We = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube"
    },
    $ = {
        get(e = "", i = {}) {
            if (r.empty(e) || r.empty(i)) return "";
            let t = ot(i.i18n, e);
            if (r.empty(t)) return Object.keys(We).includes(e) ? We[e] : "";
            const s = {
                "{seektime}": i.seekTime,
                "{title}": i.title
            };
            return Object.entries(s).forEach(([n, a]) => {
                t = G(t, n, a)
            }), t
        }
    };
class te {
    constructor(i) {
        m(this, "get", t => {
            if (!te.supported || !this.enabled) return null;
            const s = window.localStorage.getItem(this.key);
            if (r.empty(s)) return null;
            const n = JSON.parse(s);
            return r.string(t) && t.length ? n[t] : n
        }), m(this, "set", t => {
            if (!te.supported || !this.enabled || !r.object(t)) return;
            let s = this.get();
            r.empty(s) && (s = {}), N(s, t);
            try {
                window.localStorage.setItem(this.key, JSON.stringify(s))
            } catch {}
        }), this.enabled = i.config.storage.enabled, this.key = i.config.storage.key
    }
    static get supported() {
        try {
            if (!("localStorage" in window)) return !1;
            const i = "___test";
            return window.localStorage.setItem(i, i), window.localStorage.removeItem(i), !0
        } catch {
            return !1
        }
    }
}

function ne(e, i = "text") {
    return new Promise((t, s) => {
        try {
            const n = new XMLHttpRequest;
            if (!("withCredentials" in n)) return;
            n.addEventListener("load", () => {
                if (i === "text") try {
                    t(JSON.parse(n.responseText))
                } catch {
                    t(n.responseText)
                } else t(n.response)
            }), n.addEventListener("error", () => {
                throw new Error(n.status)
            }), n.open("GET", e, !0), n.responseType = i, n.send()
        } catch (n) {
            s(n)
        }
    })
}

function gt(e, i) {
    if (!r.string(e)) return;
    const t = "cache",
        s = r.string(i);
    let n = !1;
    const a = () => document.getElementById(i) !== null,
        l = (o, c) => {
            o.innerHTML = c, s && a() || document.body.insertAdjacentElement("afterbegin", o)
        };
    if (!s || !a()) {
        const o = te.supported,
            c = document.createElement("div");
        if (c.setAttribute("hidden", ""), s && c.setAttribute("id", i), o) {
            const u = window.localStorage.getItem(`${t}-${i}`);
            if (n = u !== null, n) {
                const g = JSON.parse(u);
                l(c, g.content)
            }
        }
        ne(e).then(u => {
            if (!r.empty(u)) {
                if (o) try {
                    window.localStorage.setItem(`${t}-${i}`, JSON.stringify({
                        content: u
                    }))
                } catch {}
                l(c, u)
            }
        }).catch(() => {})
    }
}
const ft = e => Math.trunc(e / 60 / 60 % 60, 10),
    fi = e => Math.trunc(e / 60 % 60, 10),
    yi = e => Math.trunc(e % 60, 10);

function ye(e = 0, i = !1, t = !1) {
    if (!r.number(e)) return ye(void 0, i, t);
    const s = o => `0${o}`.slice(-2);
    let n = ft(e);
    const a = fi(e),
        l = yi(e);
    return n = i || n > 0 ? `${n}:` : "", `${t&&e>0?"-":""}${n}${s(a)}:${s(l)}`
}
const h = {
    getIconUrl() {
        const e = new URL(this.config.iconUrl, window.location),
            i = window.location.host ? window.location.host : window.top.location.host,
            t = e.host !== i || _.isIE && !window.svg4everybody;
        return {
            url: this.config.iconUrl,
            cors: t
        }
    },
    findElements() {
        try {
            return this.elements.controls = I.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                play: Z.call(this, this.config.selectors.buttons.play),
                pause: I.call(this, this.config.selectors.buttons.pause),
                restart: I.call(this, this.config.selectors.buttons.restart),
                rewind: I.call(this, this.config.selectors.buttons.rewind),
                fastForward: I.call(this, this.config.selectors.buttons.fastForward),
                mute: I.call(this, this.config.selectors.buttons.mute),
                pip: I.call(this, this.config.selectors.buttons.pip),
                airplay: I.call(this, this.config.selectors.buttons.airplay),
                settings: I.call(this, this.config.selectors.buttons.settings),
                captions: I.call(this, this.config.selectors.buttons.captions),
                fullscreen: I.call(this, this.config.selectors.buttons.fullscreen)
            }, this.elements.progress = I.call(this, this.config.selectors.progress), this.elements.inputs = {
                seek: I.call(this, this.config.selectors.inputs.seek),
                volume: I.call(this, this.config.selectors.inputs.volume)
            }, this.elements.display = {
                buffer: I.call(this, this.config.selectors.display.buffer),
                currentTime: I.call(this, this.config.selectors.display.currentTime),
                duration: I.call(this, this.config.selectors.display.duration)
            }, r.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0
        } catch (e) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
        }
    },
    createIcon(e, i) {
        const t = "http://www.w3.org/2000/svg",
            s = h.getIconUrl.call(this),
            n = `${s.cors?"":s.url}#${this.config.iconPrefix}`,
            a = document.createElementNS(t, "svg");
        Se(a, N(i, {
            "aria-hidden": "true",
            focusable: "false"
        }));
        const l = document.createElementNS(t, "use"),
            o = `${n}-${e}`;
        return "href" in l && l.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(l), a
    },
    createLabel(e, i = {}) {
        const t = $.get(e, this.config);
        return y("span", {
            ...i,
            class: [i.class, this.config.classNames.hidden].filter(Boolean).join(" ")
        }, t)
    },
    createBadge(e) {
        if (r.empty(e)) return null;
        const i = y("span", {
            class: this.config.classNames.menu.value
        });
        return i.appendChild(y("span", {
            class: this.config.classNames.menu.badge
        }, e)), i
    },
    createButton(e, i) {
        const t = N({}, i);
        let s = mi(e);
        const n = {
            element: "button",
            toggle: !1,
            label: null,
            icon: null,
            labelPressed: null,
            iconPressed: null
        };
        switch (["element", "icon", "label"].forEach(l => {
                Object.keys(t).includes(l) && (n[l] = t[l], delete t[l])
            }), n.element !== "button" || Object.keys(t).includes("type") || (t.type = "button"), Object.keys(t).includes("class") ? t.class.split(" ").some(l => l === this.config.classNames.control) || N(t, {
                class: `${t.class} ${this.config.classNames.control}`
            }) : t.class = this.config.classNames.control, e) {
            case "play":
                n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                break;
            case "mute":
                n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                break;
            case "captions":
                n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
                break;
            case "fullscreen":
                n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
                break;
            case "play-large":
                t.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
                break;
            default:
                r.empty(n.label) && (n.label = s), r.empty(n.icon) && (n.icon = e)
        }
        const a = y(n.element);
        return n.toggle ? (a.appendChild(h.createIcon.call(this, n.iconPressed, {
            class: "icon--pressed"
        })), a.appendChild(h.createIcon.call(this, n.icon, {
            class: "icon--not-pressed"
        })), a.appendChild(h.createLabel.call(this, n.labelPressed, {
            class: "label--pressed"
        })), a.appendChild(h.createLabel.call(this, n.label, {
            class: "label--not-pressed"
        }))) : (a.appendChild(h.createIcon.call(this, n.icon)), a.appendChild(h.createLabel.call(this, n.label))), N(t, D(this.config.selectors.buttons[s], t)), Se(a, t), s === "play" ? (r.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a
    },
    createRange(e, i) {
        const t = y("input", N(D(this.config.selectors.inputs[e]), {
            type: "range",
            min: 0,
            max: 100,
            step: .01,
            value: 0,
            autocomplete: "off",
            role: "slider",
            "aria-label": $.get(e, this.config),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0
        }, i));
        return this.elements.inputs[e] = t, h.updateRangeFill.call(this, t), qt.setup(t), t
    },
    createProgress(e, i) {
        const t = y("progress", N(D(this.config.selectors.display[e]), {
            min: 0,
            max: 100,
            value: 0,
            role: "progressbar",
            "aria-hidden": !0
        }, i));
        if (e !== "volume") {
            t.appendChild(y("span", null, "0"));
            const s = {
                    played: "played",
                    buffer: "buffered"
                } [e],
                n = s ? $.get(s, this.config) : "";
            t.innerText = `% ${n.toLowerCase()}`
        }
        return this.elements.display[e] = t, t
    },
    createTime(e, i) {
        const t = D(this.config.selectors.display[e], i),
            s = y("div", N(t, {
                class: `${t.class?t.class:""} ${this.config.classNames.display.time} `.trim(),
                "aria-label": $.get(e, this.config),
                role: "timer"
            }), "00:00");
        return this.elements.display[e] = s, s
    },
    bindMenuItemShortcuts(e, i) {
        C.call(this, e, "keydown keyup", t => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(t.key) || (t.preventDefault(), t.stopPropagation(), t.type === "keydown")) return;
            const s = Y(e, '[role="menuitemradio"]');
            if (!s && [" ", "ArrowRight"].includes(t.key)) h.showMenuPanel.call(this, i, !0);
            else {
                let n;
                t.key !== " " && (t.key === "ArrowDown" || s && t.key === "ArrowRight" ? (n = e.nextElementSibling, r.element(n) || (n = e.parentNode.firstElementChild)) : (n = e.previousElementSibling, r.element(n) || (n = e.parentNode.lastElementChild)), be.call(this, n, !0))
            }
        }, !1), C.call(this, e, "keyup", t => {
            t.key === "Return" && h.focusFirstMenuItem.call(this, null, !0)
        })
    },
    createMenuItem({
        value: e,
        list: i,
        type: t,
        title: s,
        badge: n = null,
        checked: a = !1
    }) {
        const l = D(this.config.selectors.inputs[t]),
            o = y("button", N(l, {
                type: "button",
                role: "menuitemradio",
                class: `${this.config.classNames.control} ${l.class?l.class:""}`.trim(),
                "aria-checked": a,
                value: e
            })),
            c = y("span");
        c.innerHTML = s, r.element(n) && c.appendChild(n), o.appendChild(c), Object.defineProperty(o, "checked", {
            enumerable: !0,
            get: () => o.getAttribute("aria-checked") === "true",
            set(u) {
                u && Array.from(o.parentNode.children).filter(g => Y(g, '[role="menuitemradio"]')).forEach(g => g.setAttribute("aria-checked", "false")), o.setAttribute("aria-checked", u ? "true" : "false")
            }
        }), this.listeners.bind(o, "click keyup", u => {
            if (!r.keyboardEvent(u) || u.key === " ") {
                switch (u.preventDefault(), u.stopPropagation(), o.checked = !0, t) {
                    case "language":
                        this.currentTrack = Number(e);
                        break;
                    case "quality":
                        this.quality = e;
                        break;
                    case "speed":
                        this.speed = parseFloat(e)
                }
                h.showMenuPanel.call(this, "home", r.keyboardEvent(u))
            }
        }, t, !1), h.bindMenuItemShortcuts.call(this, o, t), i.appendChild(o)
    },
    formatTime(e = 0, i = !1) {
        return r.number(e) ? ye(e, ft(this.duration) > 0, i) : e
    },
    updateTimeDisplay(e = null, i = 0, t = !1) {
        r.element(e) && r.number(i) && (e.innerText = h.formatTime(i, t))
    },
    updateVolume() {
        this.supported.ui && (r.element(this.elements.inputs.volume) && h.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), r.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || this.volume === 0))
    },
    setRange(e, i = 0) {
        r.element(e) && (e.value = i, h.updateRangeFill.call(this, e))
    },
    updateProgress(e) {
        if (!this.supported.ui || !r.event(e)) return;
        let i = 0;
        const t = (s, n) => {
            const a = r.number(n) ? n : 0,
                l = r.element(s) ? s : this.elements.display.buffer;
            if (r.element(l)) {
                l.value = a;
                const o = l.getElementsByTagName("span")[0];
                r.element(o) && (o.childNodes[0].nodeValue = a)
            }
        };
        if (e) switch (e.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
                i = hi(this.currentTime, this.duration), e.type === "timeupdate" && h.setRange.call(this, this.elements.inputs.seek, i);
                break;
            case "playing":
            case "progress":
                t(this.elements.display.buffer, 100 * this.buffered)
        }
    },
    updateRangeFill(e) {
        const i = r.event(e) ? e.target : e;
        if (r.element(i) && i.getAttribute("type") === "range") {
            if (Y(i, this.config.selectors.inputs.seek)) {
                i.setAttribute("aria-valuenow", this.currentTime);
                const t = h.formatTime(this.currentTime),
                    s = h.formatTime(this.duration),
                    n = $.get("seekLabel", this.config);
                i.setAttribute("aria-valuetext", n.replace("{currentTime}", t).replace("{duration}", s))
            } else if (Y(i, this.config.selectors.inputs.volume)) {
                const t = 100 * i.value;
                i.setAttribute("aria-valuenow", t), i.setAttribute("aria-valuetext", `${t.toFixed(1)}%`)
            } else i.setAttribute("aria-valuenow", i.value);
            (_.isWebKit || _.isIPadOS) && i.style.setProperty("--value", i.value / i.max * 100 + "%")
        }
    },
    updateSeekTooltip(e) {
        var i, t;
        if (!this.config.tooltips.seek || !r.element(this.elements.inputs.seek) || !r.element(this.elements.display.seekTooltip) || this.duration === 0) return;
        const s = this.elements.display.seekTooltip,
            n = `${this.config.classNames.tooltip}--visible`,
            a = g => E(s, n, g);
        if (this.touch) return void a(!1);
        let l = 0;
        const o = this.elements.progress.getBoundingClientRect();
        if (r.event(e)) l = 100 / o.width * (e.pageX - o.left);
        else {
            if (!de(s, n)) return;
            l = parseFloat(s.style.left, 10)
        }
        l < 0 ? l = 0 : l > 100 && (l = 100);
        const c = this.duration / 100 * l;
        s.innerText = h.formatTime(c);
        const u = (i = this.config.markers) === null || i === void 0 || (t = i.points) === null || t === void 0 ? void 0 : t.find(({
            time: g
        }) => g === Math.round(c));
        u && s.insertAdjacentHTML("afterbegin", `${u.label}<br>`), s.style.left = `${l}%`, r.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && a(e.type === "mouseenter")
    },
    timeUpdate(e) {
        const i = !r.element(this.elements.display.duration) && this.config.invertTime;
        h.updateTimeDisplay.call(this, this.elements.display.currentTime, i ? this.duration - this.currentTime : this.currentTime, i), e && e.type === "timeupdate" && this.media.seeking || h.updateProgress.call(this, e)
    },
    durationUpdate() {
        if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
        if (this.duration >= 2 ** 32) return K(this.elements.display.currentTime, !0), void K(this.elements.progress, !0);
        r.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
        const e = r.element(this.elements.display.duration);
        !e && this.config.displayDuration && this.paused && h.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && h.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && h.setMarkers.call(this), h.updateSeekTooltip.call(this)
    },
    toggleMenuButton(e, i) {
        K(this.elements.settings.buttons[e], !i)
    },
    updateSetting(e, i, t) {
        const s = this.elements.settings.panels[e];
        let n = null,
            a = i;
        if (e === "captions") n = this.currentTrack;
        else {
            if (n = r.empty(t) ? this[e] : t, r.empty(n) && (n = this.config[e].default), !r.empty(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
            if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ${e}`)
        }
        if (r.element(a) || (a = s && s.querySelector('[role="menu"]')), !r.element(a)) return;
        this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = h.getLabel.call(this, e, n);
        const l = a && a.querySelector(`[value="${n}"]`);
        r.element(l) && (l.checked = !0)
    },
    getLabel(e, i) {
        switch (e) {
            case "speed":
                return i === 1 ? $.get("normal", this.config) : `${i}&times;`;
            case "quality":
                if (r.number(i)) {
                    const t = $.get(`qualityLabel.${i}`, this.config);
                    return t.length ? t : `${i}p`
                }
                return pt(i);
            case "captions":
                return S.getLabel.call(this);
            default:
                return null
        }
    },
    setQualityMenu(e) {
        if (!r.element(this.elements.settings.panels.quality)) return;
        const i = "quality",
            t = this.elements.settings.panels.quality.querySelector('[role="menu"]');
        r.array(e) && (this.options.quality = Ee(e).filter(a => this.config.quality.options.includes(a)));
        const s = !r.empty(this.options.quality) && this.options.quality.length > 1;
        if (h.toggleMenuButton.call(this, i, s), le(t), h.checkMenu.call(this), !s) return;
        const n = a => {
            const l = $.get(`qualityBadge.${a}`, this.config);
            return l.length ? h.createBadge.call(this, l) : null
        };
        this.options.quality.sort((a, l) => {
            const o = this.config.quality.options;
            return o.indexOf(a) > o.indexOf(l) ? 1 : -1
        }).forEach(a => {
            h.createMenuItem.call(this, {
                value: a,
                list: t,
                type: i,
                title: h.getLabel.call(this, "quality", a),
                badge: n(a)
            })
        }), h.updateSetting.call(this, i, t)
    },
    setCaptionsMenu() {
        if (!r.element(this.elements.settings.panels.captions)) return;
        const e = "captions",
            i = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
            t = S.getTracks.call(this),
            s = !!t.length;
        if (h.toggleMenuButton.call(this, e, s), le(i), h.checkMenu.call(this), !s) return;
        const n = t.map((a, l) => ({
            value: l,
            checked: this.captions.toggled && this.currentTrack === l,
            title: S.getLabel.call(this, a),
            badge: a.language && h.createBadge.call(this, a.language.toUpperCase()),
            list: i,
            type: "language"
        }));
        n.unshift({
            value: -1,
            checked: !this.captions.toggled,
            title: $.get("disabled", this.config),
            list: i,
            type: "language"
        }), n.forEach(h.createMenuItem.bind(this)), h.updateSetting.call(this, e, i)
    },
    setSpeedMenu() {
        if (!r.element(this.elements.settings.panels.speed)) return;
        const e = "speed",
            i = this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(s => s >= this.minimumSpeed && s <= this.maximumSpeed);
        const t = !r.empty(this.options.speed) && this.options.speed.length > 1;
        h.toggleMenuButton.call(this, e, t), le(i), h.checkMenu.call(this), t && (this.options.speed.forEach(s => {
            h.createMenuItem.call(this, {
                value: s,
                list: i,
                type: e,
                title: h.getLabel.call(this, "speed", s)
            })
        }), h.updateSetting.call(this, e, i))
    },
    checkMenu() {
        const {
            buttons: e
        } = this.elements.settings, i = !r.empty(e) && Object.values(e).some(t => !t.hidden);
        K(this.elements.settings.menu, !i)
    },
    focusFirstMenuItem(e, i = !1) {
        if (this.elements.settings.popup.hidden) return;
        let t = e;
        r.element(t) || (t = Object.values(this.elements.settings.panels).find(n => !n.hidden));
        const s = t.querySelector('[role^="menuitem"]');
        be.call(this, s, i)
    },
    toggleMenu(e) {
        const {
            popup: i
        } = this.elements.settings, t = this.elements.buttons.settings;
        if (!r.element(i) || !r.element(t)) return;
        const {
            hidden: s
        } = i;
        let n = s;
        if (r.boolean(e)) n = e;
        else if (r.keyboardEvent(e) && e.key === "Escape") n = !1;
        else if (r.event(e)) {
            const a = r.function(e.composedPath) ? e.composedPath()[0] : e.target,
                l = i.contains(a);
            if (l || !l && e.target !== t && n) return
        }
        t.setAttribute("aria-expanded", n), K(i, !n), E(this.elements.container, this.config.classNames.menu.open, n), n && r.keyboardEvent(e) ? h.focusFirstMenuItem.call(this, null, !0) : n || s || be.call(this, t, r.keyboardEvent(e))
    },
    getMenuSize(e) {
        const i = e.cloneNode(!0);
        i.style.position = "absolute", i.style.opacity = 0, i.removeAttribute("hidden"), e.parentNode.appendChild(i);
        const t = i.scrollWidth,
            s = i.scrollHeight;
        return F(i), {
            width: t,
            height: s
        }
    },
    showMenuPanel(e = "", i = !1) {
        const t = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
        if (!r.element(t)) return;
        const s = t.parentNode,
            n = Array.from(s.children).find(a => !a.hidden);
        if (x.transitions && !x.reducedMotion) {
            s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
            const a = h.getMenuSize.call(this, t),
                l = o => {
                    o.target === s && ["width", "height"].includes(o.propertyName) && (s.style.width = "", s.style.height = "", fe.call(this, s, Ae, l))
                };
            C.call(this, s, Ae, l), s.style.width = `${a.width}px`, s.style.height = `${a.height}px`
        }
        K(n, !0), K(t, !1), h.focusFirstMenuItem.call(this, t, i)
    },
    setDownloadUrl() {
        const e = this.elements.buttons.download;
        r.element(e) && e.setAttribute("href", this.download)
    },
    create(e) {
        const {
            bindMenuItemShortcuts: i,
            createButton: t,
            createProgress: s,
            createRange: n,
            createTime: a,
            setQualityMenu: l,
            setSpeedMenu: o,
            showMenuPanel: c
        } = h;
        this.elements.controls = null, r.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(t.call(this, "play-large"));
        const u = y("div", D(this.config.selectors.controls.wrapper));
        this.elements.controls = u;
        const g = {
            class: "plyr__controls__item"
        };
        return Ee(r.array(this.config.controls) ? this.config.controls : []).forEach(f => {
            if (f === "restart" && u.appendChild(t.call(this, "restart", g)), f === "rewind" && u.appendChild(t.call(this, "rewind", g)), f === "play" && u.appendChild(t.call(this, "play", g)), f === "fast-forward" && u.appendChild(t.call(this, "fast-forward", g)), f === "progress") {
                const d = y("div", {
                        class: `${g.class} plyr__progress__container`
                    }),
                    v = y("div", D(this.config.selectors.progress));
                if (v.appendChild(n.call(this, "seek", {
                        id: `plyr-seek-${e.id}`
                    })), v.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
                    const T = y("span", {
                        class: this.config.classNames.tooltip
                    }, "00:00");
                    v.appendChild(T), this.elements.display.seekTooltip = T
                }
                this.elements.progress = v, d.appendChild(this.elements.progress), u.appendChild(d)
            }
            if (f === "current-time" && u.appendChild(a.call(this, "currentTime", g)), f === "duration" && u.appendChild(a.call(this, "duration", g)), f === "mute" || f === "volume") {
                let {
                    volume: d
                } = this.elements;
                if (r.element(d) && u.contains(d) || (d = y("div", N({}, g, {
                        class: `${g.class} plyr__volume`.trim()
                    })), this.elements.volume = d, u.appendChild(d)), f === "mute" && d.appendChild(t.call(this, "mute")), f === "volume" && !_.isIos && !_.isIPadOS) {
                    const v = {
                        max: 1,
                        step: .05,
                        value: this.config.volume
                    };
                    d.appendChild(n.call(this, "volume", N(v, {
                        id: `plyr-volume-${e.id}`
                    })))
                }
            }
            if (f === "captions" && u.appendChild(t.call(this, "captions", g)), f === "settings" && !r.empty(this.config.settings)) {
                const d = y("div", N({}, g, {
                    class: `${g.class} plyr__menu`.trim(),
                    hidden: ""
                }));
                d.appendChild(t.call(this, "settings", {
                    "aria-haspopup": !0,
                    "aria-controls": `plyr-settings-${e.id}`,
                    "aria-expanded": !1
                }));
                const v = y("div", {
                        class: "plyr__menu__container",
                        id: `plyr-settings-${e.id}`,
                        hidden: ""
                    }),
                    T = y("div"),
                    k = y("div", {
                        id: `plyr-settings-${e.id}-home`
                    }),
                    M = y("div", {
                        role: "menu"
                    });
                k.appendChild(M), T.appendChild(k), this.elements.settings.panels.home = k, this.config.settings.forEach(w => {
                    const p = y("button", N(D(this.config.selectors.buttons.settings), {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: ""
                    }));
                    i.call(this, p, w), C.call(this, p, "click", () => {
                        c.call(this, w, !1)
                    });
                    const A = y("span", null, $.get(w, this.config)),
                        L = y("span", {
                            class: this.config.classNames.menu.value
                        });
                    L.innerHTML = e[w], A.appendChild(L), p.appendChild(A), M.appendChild(p);
                    const j = y("div", {
                            id: `plyr-settings-${e.id}-${w}`,
                            hidden: ""
                        }),
                        R = y("button", {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                        });
                    R.appendChild(y("span", {
                        "aria-hidden": !0
                    }, $.get(w, this.config))), R.appendChild(y("span", {
                        class: this.config.classNames.hidden
                    }, $.get("menuBack", this.config))), C.call(this, j, "keydown", q => {
                        q.key === "ArrowLeft" && (q.preventDefault(), q.stopPropagation(), c.call(this, "home", !0))
                    }, !1), C.call(this, R, "click", () => {
                        c.call(this, "home", !1)
                    }), j.appendChild(R), j.appendChild(y("div", {
                        role: "menu"
                    })), T.appendChild(j), this.elements.settings.buttons[w] = p, this.elements.settings.panels[w] = j
                }), v.appendChild(T), d.appendChild(v), u.appendChild(d), this.elements.settings.popup = v, this.elements.settings.menu = d
            }
            if (f === "pip" && x.pip && u.appendChild(t.call(this, "pip", g)), f === "airplay" && x.airplay && u.appendChild(t.call(this, "airplay", g)), f === "download") {
                const d = N({}, g, {
                    element: "a",
                    href: this.download,
                    target: "_blank"
                });
                this.isHTML5 && (d.download = "");
                const {
                    download: v
                } = this.config.urls;
                !r.url(v) && this.isEmbed && N(d, {
                    icon: `logo-${this.provider}`,
                    label: this.provider
                }), u.appendChild(t.call(this, "download", d))
            }
            f === "fullscreen" && u.appendChild(t.call(this, "fullscreen", g))
        }), this.isHTML5 && l.call(this, z.getQualityOptions.call(this)), o.call(this), u
    },
    inject() {
        if (this.config.loadSprite) {
            const n = h.getIconUrl.call(this);
            n.cors && gt(n.url, "sprite-plyr")
        }
        this.id = Math.floor(1e4 * Math.random());
        let e = null;
        this.elements.controls = null;
        const i = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title
        };
        let t = !0;
        r.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, i)), this.config.controls || (this.config.controls = []), r.element(this.config.controls) || r.string(this.config.controls) ? e = this.config.controls : (e = h.create.call(this, {
            id: this.id,
            seektime: this.config.seekTime,
            speed: this.speed,
            quality: this.quality,
            captions: S.getLabel.call(this)
        }), t = !1);
        let s;
        if (t && r.string(this.config.controls) && (e = (n => {
                let a = n;
                return Object.entries(i).forEach(([l, o]) => {
                    a = G(a, `{${l}}`, o)
                }), a
            })(e)), r.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), r.element(s) || (s = this.elements.container), s[r.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), r.element(this.elements.controls) || h.findElements.call(this), !r.empty(this.elements.buttons)) {
            const n = a => {
                const l = this.config.classNames.controlPressed;
                a.setAttribute("aria-pressed", "false"), Object.defineProperty(a, "pressed", {
                    configurable: !0,
                    enumerable: !0,
                    get: () => de(a, l),
                    set(o = !1) {
                        E(a, l, o), a.setAttribute("aria-pressed", o ? "true" : "false")
                    }
                })
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach(a => {
                r.array(a) || r.nodeList(a) ? Array.from(a).filter(Boolean).forEach(n) : n(a)
            })
        }
        if (_.isEdge && lt(s), this.config.tooltips.controls) {
            const {
                classNames: n,
                selectors: a
            } = this.config, l = `${a.controls.wrapper} ${a.labels} .${n.hidden}`, o = Z.call(this, l);
            Array.from(o).forEach(c => {
                E(c, this.config.classNames.hidden, !1), E(c, this.config.classNames.tooltip, !0)
            })
        }
    },
    setMediaMetadata() {
        try {
            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                title: this.config.mediaMetadata.title,
                artist: this.config.mediaMetadata.artist,
                album: this.config.mediaMetadata.album,
                artwork: this.config.mediaMetadata.artwork
            }))
        } catch {}
    },
    setMarkers() {
        var e, i;
        if (!this.duration || this.elements.markers) return;
        const t = (e = this.config.markers) === null || e === void 0 || (i = e.points) === null || i === void 0 ? void 0 : i.filter(({
            time: c
        }) => c > 0 && c < this.duration);
        if (t == null || !t.length) return;
        const s = document.createDocumentFragment(),
            n = document.createDocumentFragment();
        let a = null;
        const l = `${this.config.classNames.tooltip}--visible`,
            o = c => E(a, l, c);
        t.forEach(c => {
            const u = y("span", {
                    class: this.config.classNames.marker
                }, ""),
                g = c.time / this.duration * 100 + "%";
            a && (u.addEventListener("mouseenter", () => {
                c.label || (a.style.left = g, a.innerHTML = c.label, o(!0))
            }), u.addEventListener("mouseleave", () => {
                o(!1)
            })), u.addEventListener("click", () => {
                this.currentTime = c.time
            }), u.style.left = g, n.appendChild(u)
        }), s.appendChild(n), this.config.tooltips.seek || (a = y("span", {
            class: this.config.classNames.tooltip
        }, ""), s.appendChild(a)), this.elements.markers = {
            points: n,
            tip: a
        }, this.elements.progress.appendChild(s)
    }
};

function yt(e, i = !0) {
    let t = e;
    if (i) {
        const s = document.createElement("a");
        s.href = t, t = s.href
    }
    try {
        return new URL(t)
    } catch {
        return null
    }
}

function bt(e) {
    const i = new URLSearchParams;
    return r.object(e) && Object.entries(e).forEach(([t, s]) => {
        i.set(t, s)
    }), i
}
const S = {
        setup() {
            if (!this.supported.ui) return;
            if (!this.isVideo || this.isYouTube || this.isHTML5 && !x.textTracks) return void(r.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && h.setCaptionsMenu.call(this));
            if (r.element(this.elements.captions) || (this.elements.captions = y("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), ni(this.elements.captions, this.elements.wrapper)), _.isIE && window.URL) {
                const s = this.media.querySelectorAll("track");
                Array.from(s).forEach(n => {
                    const a = n.getAttribute("src"),
                        l = yt(a);
                    l !== null && l.hostname !== window.location.href.hostname && ["http:", "https:"].includes(l.protocol) && ne(a, "blob").then(o => {
                        n.setAttribute("src", window.URL.createObjectURL(o))
                    }).catch(() => {
                        F(n)
                    })
                })
            }
            const e = Ee((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(s => s.split("-")[0]));
            let i = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
            i === "auto" && ([i] = e);
            let t = this.storage.get("captions");
            if (r.boolean(t) || ({
                    active: t
                } = this.config.captions), Object.assign(this.captions, {
                    toggled: !1,
                    active: t,
                    language: i,
                    languages: e
                }), this.isHTML5) {
                const s = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                C.call(this, this.media.textTracks, s, S.update.bind(this))
            }
            setTimeout(S.update.bind(this), 0)
        },
        update() {
            const e = S.getTracks.call(this, !0),
                {
                    active: i,
                    language: t,
                    meta: s,
                    currentTrackNode: n
                } = this.captions,
                a = !!e.find(l => l.language === t);
            this.isHTML5 && this.isVideo && e.filter(l => !s.get(l)).forEach(l => {
                this.debug.log("Track added", l), s.set(l, {
                    default: l.mode === "showing"
                }), l.mode === "showing" && (l.mode = "hidden"), C.call(this, l, "cuechange", () => S.updateCues.call(this))
            }), (a && this.language !== t || !e.includes(n)) && (S.setLanguage.call(this, t), S.toggle.call(this, i && a)), this.elements && E(this.elements.container, this.config.classNames.captions.enabled, !r.empty(e)), r.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && h.setCaptionsMenu.call(this)
        },
        toggle(e, i = !0) {
            if (!this.supported.ui) return;
            const {
                toggled: t
            } = this.captions, s = this.config.classNames.captions.active, n = r.nullOrUndefined(e) ? !t : e;
            if (n !== t) {
                if (i || (this.captions.active = n, this.storage.set({
                        captions: n
                    })), !this.language && n && !i) {
                    const a = S.getTracks.call(this),
                        l = S.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                    return this.captions.language = l.language, void S.set.call(this, a.indexOf(l))
                }
                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), E(this.elements.container, s, n), this.captions.toggled = n, h.updateSetting.call(this, "captions"), b.call(this, this.media, n ? "captionsenabled" : "captionsdisabled")
            }
            setTimeout(() => {
                n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
            })
        },
        set(e, i = !0) {
            const t = S.getTracks.call(this);
            if (e !== -1)
                if (r.number(e))
                    if (e in t) {
                        if (this.captions.currentTrack !== e) {
                            this.captions.currentTrack = e;
                            const s = t[e],
                                {
                                    language: n
                                } = s || {};
                            this.captions.currentTrackNode = s, h.updateSetting.call(this, "captions"), i || (this.captions.language = n, this.storage.set({
                                language: n
                            })), this.isVimeo && this.embed.enableTextTrack(n), b.call(this, this.media, "languagechange")
                        }
                        S.toggle.call(this, !0, i), this.isHTML5 && this.isVideo && S.updateCues.call(this)
                    } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
            else S.toggle.call(this, !1, i)
        },
        setLanguage(e, i = !0) {
            if (!r.string(e)) return void this.debug.warn("Invalid language argument", e);
            const t = e.toLowerCase();
            this.captions.language = t;
            const s = S.getTracks.call(this),
                n = S.findTrack.call(this, [t]);
            S.set.call(this, s.indexOf(n), i)
        },
        getTracks(e = !1) {
            return Array.from((this.media || {}).textTracks || []).filter(i => !this.isHTML5 || e || this.captions.meta.has(i)).filter(i => ["captions", "subtitles"].includes(i.kind))
        },
        findTrack(e, i = !1) {
            const t = S.getTracks.call(this),
                s = l => Number((this.captions.meta.get(l) || {}).default),
                n = Array.from(t).sort((l, o) => s(o) - s(l));
            let a;
            return e.every(l => (a = n.find(o => o.language === l), !a)), a || (i ? n[0] : void 0)
        },
        getCurrentTrack() {
            return S.getTracks.call(this)[this.currentTrack]
        },
        getLabel(e) {
            let i = e;
            return !r.track(i) && x.textTracks && this.captions.toggled && (i = S.getCurrentTrack.call(this)), r.track(i) ? r.empty(i.label) ? r.empty(i.language) ? $.get("enabled", this.config) : e.language.toUpperCase() : i.label : $.get("disabled", this.config)
        },
        updateCues(e) {
            if (!this.supported.ui) return;
            if (!r.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
            if (!r.nullOrUndefined(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
            let i = e;
            if (!i) {
                const s = S.getCurrentTrack.call(this);
                i = Array.from((s || {}).activeCues || []).map(n => n.getCueAsHTML()).map(gi)
            }
            const t = i.map(s => s.trim()).join(`
`);
            if (t !== this.elements.captions.innerHTML) {
                le(this.elements.captions);
                const s = y("span", D(this.config.selectors.caption));
                s.innerHTML = t, this.elements.captions.appendChild(s), b.call(this, this.media, "cuechange")
            }
        }
    },
    vt = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
            default: 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
            forced: !1,
            onChange: null
        },
        loop: {
            active: !1
        },
        speed: {
            selected: 1,
            options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
        },
        keyboard: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        captions: {
            active: !1,
            language: "auto",
            update: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
        settings: ["captions", "quality", "speed"],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
                2160: "4K",
                1440: "HD",
                1080: "HD",
                720: "HD",
                576: "SD",
                480: "SD"
            }
        },
        urls: {
            download: null,
            vimeo: {
                sdk: "https://player.vimeo.com/api/player.js",
                iframe: "https://player.vimeo.com/video/{0}?{1}",
                api: "https://vimeo.com/api/oembed.json?url={0}"
            },
            youtube: {
                sdk: "https://www.youtube.com/iframe_api",
                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
            },
            googleIMA: {
                sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
        },
        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
        selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                fastForward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                download: '[data-plyr="download"]',
                fullscreen: '[data-plyr="fullscreen"]',
                pip: '[data-plyr="pip"]',
                airplay: '[data-plyr="airplay"]',
                settings: '[data-plyr="settings"]',
                loop: '[data-plyr="loop"]'
            },
            inputs: {
                seek: '[data-plyr="seek"]',
                volume: '[data-plyr="volume"]',
                speed: '[data-plyr="speed"]',
                language: '[data-plyr="language"]',
                quality: '[data-plyr="quality"]'
            },
            display: {
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration",
                buffer: ".plyr__progress__buffer",
                loop: ".plyr__progress__loop",
                volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption"
        },
        classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            marker: "plyr__progress__marker",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
                time: "plyr__time"
            },
            menu: {
                value: "plyr__menu__value",
                badge: "plyr__badge",
                open: "plyr--menu-open"
            },
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                fallback: "plyr--fullscreen-fallback"
            },
            pip: {
                supported: "plyr--pip-supported",
                active: "plyr--pip-active"
            },
            airplay: {
                supported: "plyr--airplay-supported",
                active: "plyr--airplay-active"
            },
            previewThumbnails: {
                thumbContainer: "plyr__preview-thumb",
                thumbContainerShown: "plyr__preview-thumb--is-shown",
                imageContainer: "plyr__preview-thumb__image-container",
                timeContainer: "plyr__preview-thumb__time-container",
                scrubbingContainer: "plyr__preview-scrubbing",
                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
            }
        },
        attributes: {
            embed: {
                provider: "data-plyr-provider",
                id: "data-plyr-embed-id",
                hash: "data-plyr-embed-hash"
            }
        },
        ads: {
            enabled: !1,
            publisherId: "",
            tagUrl: ""
        },
        previewThumbnails: {
            enabled: !1,
            src: ""
        },
        vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            speed: !0,
            transparent: !1,
            customControls: !0,
            referrerPolicy: null,
            premium: !1
        },
        youtube: {
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            customControls: !0,
            noCookie: !1
        },
        mediaMetadata: {
            title: "",
            artist: "",
            album: "",
            artwork: []
        },
        markers: {
            enabled: !1,
            points: []
        }
    },
    ve = {
        active: "picture-in-picture",
        inactive: "inline"
    },
    B = {
        html5: "html5",
        youtube: "youtube",
        vimeo: "vimeo"
    },
    we = {
        audio: "audio",
        video: "video"
    };

function bi(e) {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? B.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? B.vimeo : null
}
const Te = () => {};
class vi {
    constructor(i = !1) {
        this.enabled = window.console && i, this.enabled && this.log("Debugging enabled")
    }
    get log() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : Te
    }
    get warn() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : Te
    }
    get error() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : Te
    }
}
class H {
    constructor(i) {
        m(this, "onChange", () => {
            if (!this.supported) return;
            const t = this.player.elements.buttons.fullscreen;
            r.element(t) && (t.pressed = this.active);
            const s = this.target === this.player.media ? this.target : this.player.elements.container;
            b.call(this.player, s, this.active ? "enterfullscreen" : "exitfullscreen", !0)
        }), m(this, "toggleFallback", (t = !1) => {
            if (t ? this.scrollPosition = {
                    x: window.scrollX ?? 0,
                    y: window.scrollY ?? 0
                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", E(this.target, this.player.config.classNames.fullscreen.fallback, t), _.isIos) {
                let s = document.head.querySelector('meta[name="viewport"]');
                const n = "viewport-fit=cover";
                s || (s = document.createElement("meta"), s.setAttribute("name", "viewport"));
                const a = r.string(s.content) && s.content.includes(n);
                t ? (this.cleanupViewport = !a, a || (s.content += `,${n}`)) : this.cleanupViewport && (s.content = s.content.split(",").filter(l => l.trim() !== n).join(","))
            }
            this.onChange()
        }), m(this, "trapFocus", t => {
            if (_.isIos || _.isIPadOS || !this.active || t.key !== "Tab") return;
            const s = document.activeElement,
                n = Z.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                [a] = n,
                l = n[n.length - 1];
            s !== l || t.shiftKey ? s === a && t.shiftKey && (l.focus(), t.preventDefault()) : (a.focus(), t.preventDefault())
        }), m(this, "update", () => {
            if (this.supported) {
                let t;
                t = this.forceFallback ? "Fallback (forced)" : H.nativeSupported ? "Native" : "Fallback", this.player.debug.log(`${t} fullscreen enabled`)
            } else this.player.debug.log("Fullscreen not supported and fallback disabled");
            E(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported)
        }), m(this, "enter", () => {
            this.supported && (_.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !H.nativeSupported || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? r.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                navigationUI: "hide"
            }))
        }), m(this, "exit", () => {
            if (this.supported)
                if (_.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), V(this.player.play());
                else if (!H.nativeSupported || this.forceFallback) this.toggleFallback(!1);
            else if (this.prefix) {
                if (!r.empty(this.prefix)) {
                    const t = this.prefix === "moz" ? "Cancel" : "Exit";
                    document[`${this.prefix}${t}${this.property}`]()
                }
            } else(document.cancelFullScreen || document.exitFullscreen).call(document)
        }), m(this, "toggle", () => {
            this.active ? this.exit() : this.enter()
        }), this.player = i, this.prefix = H.prefix, this.property = H.property, this.scrollPosition = {
            x: 0,
            y: 0
        }, this.forceFallback = i.config.fullscreen.fallback === "force", this.player.elements.fullscreen = i.config.fullscreen.container && ai(this.player.elements.container, i.config.fullscreen.container), C.call(this.player, document, this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
            this.onChange()
        }), C.call(this.player, this.player.elements.container, "dblclick", t => {
            r.element(this.player.elements.controls) && this.player.elements.controls.contains(t.target) || this.player.listeners.proxy(t, this.toggle, "fullscreen")
        }), C.call(this, this.player.elements.container, "keydown", t => this.trapFocus(t)), this.update()
    }
    static get nativeSupported() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
    }
    get useNative() {
        return H.nativeSupported && !this.forceFallback
    }
    static get prefix() {
        if (r.function(document.exitFullscreen)) return "";
        let i = "";
        return ["webkit", "moz", "ms"].some(t => !(!r.function(document[`${t}ExitFullscreen`]) && !r.function(document[`${t}CancelFullScreen`])) && (i = t, !0)), i
    }
    static get property() {
        return this.prefix === "moz" ? "FullScreen" : "Fullscreen"
    }
    get supported() {
        return [this.player.config.fullscreen.enabled, this.player.isVideo, H.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || H.nativeSupported || !_.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean)
    }
    get active() {
        if (!this.supported) return !1;
        if (!H.nativeSupported || this.forceFallback) return de(this.target, this.player.config.classNames.fullscreen.fallback);
        const i = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
        return i && i.shadowRoot ? i === this.target.getRootNode().host : i === this.target
    }
    get target() {
        return _.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container
    }
}

function oe(e, i = 1) {
    return new Promise((t, s) => {
        const n = new Image,
            a = () => {
                delete n.onload, delete n.onerror, (n.naturalWidth >= i ? t : s)(n)
            };
        Object.assign(n, {
            onload: a,
            onerror: a,
            src: e
        })
    })
}
const P = {
    addStyleHook() {
        E(this.elements.container, this.config.selectors.container.replace(".", ""), !0), E(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
    },
    toggleNativeControls(e = !1) {
        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
    },
    build() {
        if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void P.toggleNativeControls.call(this, !0);
        r.element(this.elements.controls) || (h.inject.call(this), this.listeners.controls()), P.toggleNativeControls.call(this), this.isHTML5 && S.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, h.updateVolume.call(this), h.timeUpdate.call(this), h.durationUpdate.call(this), P.checkPlaying.call(this), E(this.elements.container, this.config.classNames.pip.supported, x.pip && this.isHTML5 && this.isVideo), E(this.elements.container, this.config.classNames.airplay.supported, x.airplay && this.isHTML5), E(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(() => {
            b.call(this, this.media, "ready")
        }, 0), P.setTitle.call(this), this.poster && P.setPoster.call(this, this.poster, !1).catch(() => {}), this.config.duration && h.durationUpdate.call(this), this.config.mediaMetadata && h.setMediaMetadata.call(this)
    },
    setTitle() {
        let e = $.get("play", this.config);
        if (r.string(this.config.title) && !r.empty(this.config.title) && (e += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach(i => {
                i.setAttribute("aria-label", e)
            }), this.isEmbed) {
            const i = I.call(this, "iframe");
            if (!r.element(i)) return;
            const t = r.empty(this.config.title) ? "video" : this.config.title,
                s = $.get("frameTitle", this.config);
            i.setAttribute("title", s.replace("{title}", t))
        }
    },
    togglePoster(e) {
        E(this.elements.container, this.config.classNames.posterEnabled, e)
    },
    setPoster(e, i = !0) {
        return i && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), oi.call(this).then(() => oe(e)).catch(t => {
            throw e === this.poster && P.togglePoster.call(this, !1), t
        }).then(() => {
            if (e !== this.poster) throw new Error("setPoster cancelled by later call to setPoster")
        }).then(() => (Object.assign(this.elements.poster.style, {
            backgroundImage: `url('${e}')`,
            backgroundSize: ""
        }), P.togglePoster.call(this, !0), e)))
    },
    checkPlaying(e) {
        E(this.elements.container, this.config.classNames.playing, this.playing), E(this.elements.container, this.config.classNames.paused, this.paused), E(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(i => {
            Object.assign(i, {
                pressed: this.playing
            }), i.setAttribute("aria-label", $.get(this.playing ? "pause" : "play", this.config))
        }), r.event(e) && e.type === "timeupdate" || P.toggleControls.call(this)
    },
    checkLoading(e) {
        this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            E(this.elements.container, this.config.classNames.loading, this.loading), P.toggleControls.call(this)
        }, this.loading ? 250 : 0)
    },
    toggleControls(e) {
        const {
            controls: i
        } = this.elements;
        if (i && this.config.hideControls) {
            const t = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(!!(e || this.loading || this.paused || i.pressed || i.hover || t))
        }
    },
    migrateStyles() {
        Object.values({
            ...this.media.style
        }).filter(e => !r.empty(e) && r.string(e) && e.startsWith("--plyr")).forEach(e => {
            this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e)
        }), r.empty(this.media.style) && this.media.removeAttribute("style")
    }
};
class wi {
    constructor(i) {
        m(this, "firstTouch", () => {
            const {
                player: t
            } = this, {
                elements: s
            } = t;
            t.touch = !0, E(s.container, t.config.classNames.isTouch, !0)
        }), m(this, "global", (t = !0) => {
            const {
                player: s
            } = this;
            s.config.keyboard.global && ee.call(s, window, "keydown keyup", this.handleKey, t, !1), ee.call(s, document.body, "click", this.toggleMenu, t), $e.call(s, document.body, "touchstart", this.firstTouch)
        }), m(this, "container", () => {
            const {
                player: t
            } = this, {
                config: s,
                elements: n,
                timers: a
            } = t;
            !s.keyboard.global && s.keyboard.focused && C.call(t, n.container, "keydown keyup", this.handleKey, !1), C.call(t, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", c => {
                const {
                    controls: u
                } = n;
                u && c.type === "enterfullscreen" && (u.pressed = !1, u.hover = !1);
                let g = 0;
                ["touchstart", "touchmove", "mousemove"].includes(c.type) && (P.toggleControls.call(t, !0), g = t.touch ? 3e3 : 2e3), clearTimeout(a.controls), a.controls = setTimeout(() => P.toggleControls.call(t, !1), g)
            });
            const l = () => {
                    if (!t.isVimeo || t.config.vimeo.premium) return;
                    const c = n.wrapper,
                        {
                            active: u
                        } = t.fullscreen,
                        [g, f] = _e.call(t),
                        d = ht(`aspect-ratio: ${g} / ${f}`);
                    if (!u) return void(d ? (c.style.width = null, c.style.height = null) : (c.style.maxWidth = null, c.style.margin = null));
                    const [v, T] = ci(), k = v / T > g / f;
                    d ? (c.style.width = k ? "auto" : "100%", c.style.height = k ? "100%" : "auto") : (c.style.maxWidth = k ? T / f * g + "px" : null, c.style.margin = k ? "0 auto" : null)
                },
                o = () => {
                    clearTimeout(a.resized), a.resized = setTimeout(l, 50)
                };
            C.call(t, n.container, "enterfullscreen exitfullscreen", c => {
                const {
                    target: u
                } = t.fullscreen;
                u === n.container && (!t.isEmbed && r.empty(t.config.ratio) || (l(), (c.type === "enterfullscreen" ? C : fe).call(t, window, "resize", o)))
            })
        }), m(this, "media", () => {
            const {
                player: t
            } = this, {
                elements: s
            } = t;
            if (C.call(t, t.media, "timeupdate seeking seeked", a => h.timeUpdate.call(t, a)), C.call(t, t.media, "durationchange loadeddata loadedmetadata", a => h.durationUpdate.call(t, a)), C.call(t, t.media, "ended", () => {
                    t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
                }), C.call(t, t.media, "progress playing seeking seeked", a => h.updateProgress.call(t, a)), C.call(t, t.media, "volumechange", a => h.updateVolume.call(t, a)), C.call(t, t.media, "playing play pause ended emptied timeupdate", a => P.checkPlaying.call(t, a)), C.call(t, t.media, "waiting canplay seeked playing", a => P.checkLoading.call(t, a)), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                const a = I.call(t, `.${t.config.classNames.video}`);
                if (!r.element(a)) return;
                C.call(t, s.container, "click", l => {
                    ([s.container, a].includes(l.target) || a.contains(l.target)) && (t.touch && t.config.hideControls || (t.ended ? (this.proxy(l, t.restart, "restart"), this.proxy(l, () => {
                        V(t.play())
                    }, "play")) : this.proxy(l, () => {
                        V(t.togglePlay())
                    }, "play")))
                })
            }
            t.supported.ui && t.config.disableContextMenu && C.call(t, s.wrapper, "contextmenu", a => {
                a.preventDefault()
            }, !1), C.call(t, t.media, "volumechange", () => {
                t.storage.set({
                    volume: t.volume,
                    muted: t.muted
                })
            }), C.call(t, t.media, "ratechange", () => {
                h.updateSetting.call(t, "speed"), t.storage.set({
                    speed: t.speed
                })
            }), C.call(t, t.media, "qualitychange", a => {
                h.updateSetting.call(t, "quality", null, a.detail.quality)
            }), C.call(t, t.media, "ready qualitychange", () => {
                h.setDownloadUrl.call(t)
            });
            const n = t.config.events.concat(["keyup", "keydown"]).join(" ");
            C.call(t, t.media, n, a => {
                let {
                    detail: l = {}
                } = a;
                a.type === "error" && (l = t.media.error), b.call(t, s.container, a.type, !0, l)
            })
        }), m(this, "proxy", (t, s, n) => {
            const {
                player: a
            } = this, l = a.config.listeners[n];
            let o = !0;
            r.function(l) && (o = l.call(a, t)), o !== !1 && r.function(s) && s.call(a, t)
        }), m(this, "bind", (t, s, n, a, l = !0) => {
            const {
                player: o
            } = this, c = o.config.listeners[a], u = r.function(c);
            C.call(o, t, s, g => this.proxy(g, n, a), l && !u)
        }), m(this, "controls", () => {
            const {
                player: t
            } = this, {
                elements: s
            } = t, n = _.isIE ? "change" : "input";
            if (s.buttons.play && Array.from(s.buttons.play).forEach(a => {
                    this.bind(a, "click", () => {
                        V(t.togglePlay())
                    }, "play")
                }), this.bind(s.buttons.restart, "click", t.restart, "restart"), this.bind(s.buttons.rewind, "click", () => {
                    t.lastSeekTime = Date.now(), t.rewind()
                }, "rewind"), this.bind(s.buttons.fastForward, "click", () => {
                    t.lastSeekTime = Date.now(), t.forward()
                }, "fastForward"), this.bind(s.buttons.mute, "click", () => {
                    t.muted = !t.muted
                }, "mute"), this.bind(s.buttons.captions, "click", () => t.toggleCaptions()), this.bind(s.buttons.download, "click", () => {
                    b.call(t, t.media, "download")
                }, "download"), this.bind(s.buttons.fullscreen, "click", () => {
                    t.fullscreen.toggle()
                }, "fullscreen"), this.bind(s.buttons.pip, "click", () => {
                    t.pip = "toggle"
                }, "pip"), this.bind(s.buttons.airplay, "click", t.airplay, "airplay"), this.bind(s.buttons.settings, "click", a => {
                    a.stopPropagation(), a.preventDefault(), h.toggleMenu.call(t, a)
                }, null, !1), this.bind(s.buttons.settings, "keyup", a => {
                    [" ", "Enter"].includes(a.key) && (a.key !== "Enter" ? (a.preventDefault(), a.stopPropagation(), h.toggleMenu.call(t, a)) : h.focusFirstMenuItem.call(t, null, !0))
                }, null, !1), this.bind(s.settings.menu, "keydown", a => {
                    a.key === "Escape" && h.toggleMenu.call(t, a)
                }), this.bind(s.inputs.seek, "mousedown mousemove", a => {
                    const l = s.progress.getBoundingClientRect(),
                        o = 100 / l.width * (a.pageX - l.left);
                    a.currentTarget.setAttribute("seek-value", o)
                }), this.bind(s.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", a => {
                    const l = a.currentTarget,
                        o = "play-on-seeked";
                    if (r.keyboardEvent(a) && !["ArrowLeft", "ArrowRight"].includes(a.key)) return;
                    t.lastSeekTime = Date.now();
                    const c = l.hasAttribute(o),
                        u = ["mouseup", "touchend", "keyup"].includes(a.type);
                    c && u ? (l.removeAttribute(o), V(t.play())) : !u && t.playing && (l.setAttribute(o, ""), t.pause())
                }), _.isIos) {
                const a = Z.call(t, 'input[type="range"]');
                Array.from(a).forEach(l => this.bind(l, n, o => lt(o.target)))
            }
            this.bind(s.inputs.seek, n, a => {
                const l = a.currentTarget;
                let o = l.getAttribute("seek-value");
                r.empty(o) && (o = l.value), l.removeAttribute("seek-value"), t.currentTime = o / l.max * t.duration
            }, "seek"), this.bind(s.progress, "mouseenter mouseleave mousemove", a => h.updateSeekTooltip.call(t, a)), this.bind(s.progress, "mousemove touchmove", a => {
                const {
                    previewThumbnails: l
                } = t;
                l && l.loaded && l.startMove(a)
            }), this.bind(s.progress, "mouseleave touchend click", () => {
                const {
                    previewThumbnails: a
                } = t;
                a && a.loaded && a.endMove(!1, !0)
            }), this.bind(s.progress, "mousedown touchstart", a => {
                const {
                    previewThumbnails: l
                } = t;
                l && l.loaded && l.startScrubbing(a)
            }), this.bind(s.progress, "mouseup touchend", a => {
                const {
                    previewThumbnails: l
                } = t;
                l && l.loaded && l.endScrubbing(a)
            }), _.isWebKit && Array.from(Z.call(t, 'input[type="range"]')).forEach(a => {
                this.bind(a, "input", l => h.updateRangeFill.call(t, l.target))
            }), t.config.toggleInvert && !r.element(s.display.duration) && this.bind(s.display.currentTime, "click", () => {
                t.currentTime !== 0 && (t.config.invertTime = !t.config.invertTime, h.timeUpdate.call(t))
            }), this.bind(s.inputs.volume, n, a => {
                t.volume = a.target.value
            }, "volume"), this.bind(s.controls, "mouseenter mouseleave", a => {
                s.controls.hover = !t.touch && a.type === "mouseenter"
            }), s.fullscreen && Array.from(s.fullscreen.children).filter(a => !a.contains(s.container)).forEach(a => {
                this.bind(a, "mouseenter mouseleave", l => {
                    s.controls && (s.controls.hover = !t.touch && l.type === "mouseenter")
                })
            }), this.bind(s.controls, "mousedown mouseup touchstart touchend touchcancel", a => {
                s.controls.pressed = ["mousedown", "touchstart"].includes(a.type)
            }), this.bind(s.controls, "focusin", () => {
                const {
                    config: a,
                    timers: l
                } = t;
                E(s.controls, a.classNames.noTransition, !0), P.toggleControls.call(t, !0), setTimeout(() => {
                    E(s.controls, a.classNames.noTransition, !1)
                }, 0);
                const o = this.touch ? 3e3 : 4e3;
                clearTimeout(l.controls), l.controls = setTimeout(() => P.toggleControls.call(t, !1), o)
            }), this.bind(s.inputs.volume, "wheel", a => {
                const l = a.webkitDirectionInvertedFromDevice,
                    [o, c] = [a.deltaX, -a.deltaY].map(f => l ? -f : f),
                    u = Math.sign(Math.abs(o) > Math.abs(c) ? o : c);
                t.increaseVolume(u / 50);
                const {
                    volume: g
                } = t.media;
                (u === 1 && g < 1 || u === -1 && g > 0) && a.preventDefault()
            }, "volume", !1)
        }), this.player = i, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this)
    }
    handleKey(i) {
        const {
            player: t
        } = this, {
            elements: s
        } = t, {
            key: n,
            type: a,
            altKey: l,
            ctrlKey: o,
            metaKey: c,
            shiftKey: u
        } = i, g = a === "keydown", f = g && n === this.lastKey;
        if (!(l || o || c || u) && n) {
            if (g) {
                const v = document.activeElement;
                if (r.element(v)) {
                    const {
                        editable: T
                    } = t.config.selectors, {
                        seek: k
                    } = s.inputs;
                    if (v !== k && Y(v, T) || i.key === " " && Y(v, 'button, [role^="menuitem"]')) return
                }
                switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(n) && (i.preventDefault(), i.stopPropagation()), n) {
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        f || (d = parseInt(n, 10), t.currentTime = t.duration / 10 * d);
                        break;
                    case " ":
                    case "k":
                        f || V(t.togglePlay());
                        break;
                    case "ArrowUp":
                        t.increaseVolume(.1);
                        break;
                    case "ArrowDown":
                        t.decreaseVolume(.1);
                        break;
                    case "m":
                        f || (t.muted = !t.muted);
                        break;
                    case "ArrowRight":
                        t.forward();
                        break;
                    case "ArrowLeft":
                        t.rewind();
                        break;
                    case "f":
                        t.fullscreen.toggle();
                        break;
                    case "c":
                        f || t.toggleCaptions();
                        break;
                    case "l":
                        t.loop = !t.loop
                }
                n === "Escape" && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = n
            } else this.lastKey = null;
            var d
        }
    }
    toggleMenu(i) {
        h.toggleMenu.call(this.player, i)
    }
}

function Ti(e, i) {
    return e(i = {
        exports: {}
    }, i.exports), i.exports
}
var ki = Ti(function(e, i) {
    e.exports = function() {
        var t = function() {},
            s = {},
            n = {},
            a = {};

        function l(d, v) {
            d = d.push ? d : [d];
            var T, k, M, w = [],
                p = d.length,
                A = p;
            for (T = function(L, j) {
                    j.length && w.push(L), --A || v(w)
                }; p--;) k = d[p], (M = n[k]) ? T(k, M) : (a[k] = a[k] || []).push(T)
        }

        function o(d, v) {
            if (d) {
                var T = a[d];
                if (n[d] = v, T)
                    for (; T.length;) T[0](d, v), T.splice(0, 1)
            }
        }

        function c(d, v) {
            d.call && (d = {
                success: d
            }), v.length ? (d.error || t)(v) : (d.success || t)(d)
        }

        function u(d, v, T, k) {
            var M, w, p = document,
                A = T.async,
                L = (T.numRetries || 0) + 1,
                j = T.before || t,
                R = d.replace(/[\?|#].*$/, ""),
                q = d.replace(/^(css|img)!/, "");
            k = k || 0, /(^css!|\.css$)/.test(R) ? ((w = p.createElement("link")).rel = "stylesheet", w.href = q, (M = "hideFocus" in w) && w.relList && (M = 0, w.rel = "preload", w.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(R) ? (w = p.createElement("img")).src = q : ((w = p.createElement("script")).src = d, w.async = A === void 0 || A), w.onload = w.onerror = w.onbeforeload = function(je) {
                var ae = je.type[0];
                if (M) try {
                    w.sheet.cssText.length || (ae = "e")
                } catch (kt) {
                    kt.code != 18 && (ae = "e")
                }
                if (ae == "e") {
                    if ((k += 1) < L) return u(d, v, T, k)
                } else if (w.rel == "preload" && w.as == "style") return w.rel = "stylesheet";
                v(d, ae, je.defaultPrevented)
            }, j(d, w) !== !1 && p.head.appendChild(w)
        }

        function g(d, v, T) {
            var k, M, w = (d = d.push ? d : [d]).length,
                p = w,
                A = [];
            for (k = function(L, j, R) {
                    if (j == "e" && A.push(L), j == "b") {
                        if (!R) return;
                        A.push(L)
                    }--w || v(A)
                }, M = 0; M < p; M++) u(d[M], k, T)
        }

        function f(d, v, T) {
            var k, M;
            if (v && v.trim && (k = v), M = (k ? T : v) || {}, k) {
                if (k in s) throw "LoadJS";
                s[k] = !0
            }

            function w(p, A) {
                g(d, function(L) {
                    c(M, L), p && c({
                        success: p,
                        error: A
                    }, L), o(k, L)
                }, M)
            }
            if (M.returnPromise) return new Promise(w);
            w()
        }
        return f.ready = function(d, v) {
            return l(d, function(T) {
                c(v, T)
            }), f
        }, f.done = function(d) {
            o(d, [])
        }, f.reset = function() {
            s = {}, n = {}, a = {}
        }, f.isDefined = function(d) {
            return d in s
        }, f
    }()
});

function Oe(e) {
    return new Promise((i, t) => {
        ki(e, {
            success: i,
            error: t
        })
    })
}

function Ci(e) {
    return r.empty(e) ? null : r.number(Number(e)) ? e : e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e
}

function Ai(e) {
    const i = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
    return i && i.length === 5 ? i[4] : null
}

function X(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, b.call(this, this.media, e ? "play" : "pause"))
}
const Me = {
    setup() {
        const e = this;
        E(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Q.call(e), r.object(window.Vimeo) ? Me.ready.call(e) : Oe(e.config.urls.vimeo.sdk).then(() => {
            Me.ready.call(e)
        }).catch(i => {
            e.debug.warn("Vimeo SDK (player.js) failed to load", i)
        })
    },
    ready() {
        const e = this,
            i = e.config.vimeo,
            {
                premium: t,
                referrerPolicy: s,
                ...n
            } = i;
        let a = e.media.getAttribute("src"),
            l = "";
        r.empty(a) ? (a = e.media.getAttribute(e.config.attributes.embed.id), l = e.media.getAttribute(e.config.attributes.embed.hash)) : l = Ai(a);
        const o = l ? {
            h: l
        } : {};
        t && Object.assign(n, {
            controls: !1,
            sidedock: !1
        });
        const c = bt({
                loop: e.config.loop.active,
                autoplay: e.autoplay,
                muted: e.muted,
                gesture: "media",
                playsinline: e.config.playsinline,
                ...o,
                ...n
            }),
            u = Ci(a),
            g = y("iframe"),
            f = Pe(e.config.urls.vimeo.iframe, u, c);
        if (g.setAttribute("src", f), g.setAttribute("allowfullscreen", ""), g.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), r.empty(s) || g.setAttribute("referrerPolicy", s), t || !i.customControls) g.setAttribute("data-poster", e.poster), e.media = he(g, e.media);
        else {
            const p = y("div", {
                class: e.config.classNames.embedContainer,
                "data-poster": e.poster
            });
            p.appendChild(g), e.media = he(p, e.media)
        }
        i.customControls || ne(Pe(e.config.urls.vimeo.api, f)).then(p => {
            !r.empty(p) && p.thumbnail_url && P.setPoster.call(e, p.thumbnail_url).catch(() => {})
        }), e.embed = new window.Vimeo.Player(g, {
            autopause: e.config.autopause,
            muted: e.muted
        }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = () => (X.call(e, !0), e.embed.play()), e.media.pause = () => (X.call(e, !1), e.embed.pause()), e.media.stop = () => {
            e.pause(), e.currentTime = 0
        };
        let {
            currentTime: d
        } = e.media;
        Object.defineProperty(e.media, "currentTime", {
            get: () => d,
            set(p) {
                const {
                    embed: A,
                    media: L,
                    paused: j,
                    volume: R
                } = e, q = j && !A.hasPlayed;
                L.seeking = !0, b.call(e, L, "seeking"), Promise.resolve(q && A.setVolume(0)).then(() => A.setCurrentTime(p)).then(() => q && A.pause()).then(() => q && A.setVolume(R)).catch(() => {})
            }
        });
        let v = e.config.speed.selected;
        Object.defineProperty(e.media, "playbackRate", {
            get: () => v,
            set(p) {
                e.embed.setPlaybackRate(p).then(() => {
                    v = p, b.call(e, e.media, "ratechange")
                }).catch(() => {
                    e.options.speed = [1]
                })
            }
        });
        let {
            volume: T
        } = e.config;
        Object.defineProperty(e.media, "volume", {
            get: () => T,
            set(p) {
                e.embed.setVolume(p).then(() => {
                    T = p, b.call(e, e.media, "volumechange")
                })
            }
        });
        let {
            muted: k
        } = e.config;
        Object.defineProperty(e.media, "muted", {
            get: () => k,
            set(p) {
                const A = !!r.boolean(p) && p;
                e.embed.setMuted(!!A || e.config.muted).then(() => {
                    k = A, b.call(e, e.media, "volumechange")
                })
            }
        });
        let M, {
            loop: w
        } = e.config;
        Object.defineProperty(e.media, "loop", {
            get: () => w,
            set(p) {
                const A = r.boolean(p) ? p : e.config.loop.active;
                e.embed.setLoop(A).then(() => {
                    w = A
                })
            }
        }), e.embed.getVideoUrl().then(p => {
            M = p, h.setDownloadUrl.call(e)
        }).catch(p => {
            this.debug.warn(p)
        }), Object.defineProperty(e.media, "currentSrc", {
            get: () => M
        }), Object.defineProperty(e.media, "ended", {
            get: () => e.currentTime === e.duration
        }), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(p => {
            const [A, L] = p;
            e.embed.ratio = mt(A, L), Q.call(this)
        }), e.embed.setAutopause(e.config.autopause).then(p => {
            e.config.autopause = p
        }), e.embed.getVideoTitle().then(p => {
            e.config.title = p, P.setTitle.call(this)
        }), e.embed.getCurrentTime().then(p => {
            d = p, b.call(e, e.media, "timeupdate")
        }), e.embed.getDuration().then(p => {
            e.media.duration = p, b.call(e, e.media, "durationchange")
        }), e.embed.getTextTracks().then(p => {
            e.media.textTracks = p, S.setup.call(e)
        }), e.embed.on("cuechange", ({
            cues: p = []
        }) => {
            const A = p.map(L => pi(L.text));
            S.updateCues.call(e, A)
        }), e.embed.on("loaded", () => {
            e.embed.getPaused().then(p => {
                X.call(e, !p), p || b.call(e, e.media, "playing")
            }), r.element(e.embed.element) && e.supported.ui && e.embed.element.setAttribute("tabindex", -1)
        }), e.embed.on("bufferstart", () => {
            b.call(e, e.media, "waiting")
        }), e.embed.on("bufferend", () => {
            b.call(e, e.media, "playing")
        }), e.embed.on("play", () => {
            X.call(e, !0), b.call(e, e.media, "playing")
        }), e.embed.on("pause", () => {
            X.call(e, !1)
        }), e.embed.on("timeupdate", p => {
            e.media.seeking = !1, d = p.seconds, b.call(e, e.media, "timeupdate")
        }), e.embed.on("progress", p => {
            e.media.buffered = p.percent, b.call(e, e.media, "progress"), parseInt(p.percent, 10) === 1 && b.call(e, e.media, "canplaythrough"), e.embed.getDuration().then(A => {
                A !== e.media.duration && (e.media.duration = A, b.call(e, e.media, "durationchange"))
            })
        }), e.embed.on("seeked", () => {
            e.media.seeking = !1, b.call(e, e.media, "seeked")
        }), e.embed.on("ended", () => {
            e.media.paused = !0, b.call(e, e.media, "ended")
        }), e.embed.on("error", p => {
            e.media.error = p, b.call(e, e.media, "error")
        }), i.customControls && setTimeout(() => P.build.call(e), 0)
    }
};

function Si(e) {
    return r.empty(e) ? null : e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e
}

function J(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, b.call(this, this.media, e ? "play" : "pause"))
}

function Ei(e) {
    return e.noCookie ? "https://www.youtube-nocookie.com" : window.location.protocol === "http:" ? "http://www.youtube.com" : void 0
}
const ce = {
        setup() {
            if (E(this.elements.wrapper, this.config.classNames.embed, !0), r.object(window.YT) && r.function(window.YT.Player)) ce.ready.call(this);
            else {
                const e = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = () => {
                    r.function(e) && e(), ce.ready.call(this)
                }, Oe(this.config.urls.youtube.sdk).catch(i => {
                    this.debug.warn("YouTube API failed to load", i)
                })
            }
        },
        getTitle(e) {
            ne(Pe(this.config.urls.youtube.api, e)).then(i => {
                if (r.object(i)) {
                    const {
                        title: t,
                        height: s,
                        width: n
                    } = i;
                    this.config.title = t, P.setTitle.call(this), this.embed.ratio = mt(n, s)
                }
                Q.call(this)
            }).catch(() => {
                Q.call(this)
            })
        },
        ready() {
            const e = this,
                i = e.config.youtube,
                t = e.media && e.media.getAttribute("id");
            if (!r.empty(t) && t.startsWith("youtube-")) return;
            let s = e.media.getAttribute("src");
            r.empty(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
            const n = Si(s),
                a = y("div", {
                    id: ui(e.provider),
                    "data-poster": i.customControls ? e.poster : void 0
                });
            if (e.media = he(a, e.media), i.customControls) {
                const l = o => `https://i.ytimg.com/vi/${n}/${o}default.jpg`;
                oe(l("maxres"), 121).catch(() => oe(l("sd"), 121)).catch(() => oe(l("hq"))).then(o => P.setPoster.call(e, o.src)).then(o => {
                    o.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                }).catch(() => {})
            }
            e.embed = new window.YT.Player(e.media, {
                videoId: n,
                host: Ei(i),
                playerVars: N({}, {
                    autoplay: e.config.autoplay ? 1 : 0,
                    hl: e.config.hl,
                    controls: e.supported.ui && i.customControls ? 0 : 1,
                    disablekb: 1,
                    playsinline: e.config.playsinline && !e.config.fullscreen.iosNative ? 1 : 0,
                    cc_load_policy: e.captions.active ? 1 : 0,
                    cc_lang_pref: e.config.captions.language,
                    widget_referrer: window ? window.location.href : null
                }, i),
                events: {
                    onError(l) {
                        if (!e.media.error) {
                            const o = l.data,
                                c = {
                                    2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                    5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                    100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                    101: "The owner of the requested video does not allow it to be played in embedded players.",
                                    150: "The owner of the requested video does not allow it to be played in embedded players."
                                } [o] || "An unknown error occurred";
                            e.media.error = {
                                code: o,
                                message: c
                            }, b.call(e, e.media, "error")
                        }
                    },
                    onPlaybackRateChange(l) {
                        const o = l.target;
                        e.media.playbackRate = o.getPlaybackRate(), b.call(e, e.media, "ratechange")
                    },
                    onReady(l) {
                        if (r.function(e.media.play)) return;
                        const o = l.target;
                        ce.getTitle.call(e, n), e.media.play = () => {
                            J.call(e, !0), o.playVideo()
                        }, e.media.pause = () => {
                            J.call(e, !1), o.pauseVideo()
                        }, e.media.stop = () => {
                            o.stopVideo()
                        }, e.media.duration = o.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                            get: () => Number(o.getCurrentTime()),
                            set(f) {
                                e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, b.call(e, e.media, "seeking"), o.seekTo(f)
                            }
                        }), Object.defineProperty(e.media, "playbackRate", {
                            get: () => o.getPlaybackRate(),
                            set(f) {
                                o.setPlaybackRate(f)
                            }
                        });
                        let {
                            volume: c
                        } = e.config;
                        Object.defineProperty(e.media, "volume", {
                            get: () => c,
                            set(f) {
                                c = f, o.setVolume(100 * c), b.call(e, e.media, "volumechange")
                            }
                        });
                        let {
                            muted: u
                        } = e.config;
                        Object.defineProperty(e.media, "muted", {
                            get: () => u,
                            set(f) {
                                const d = r.boolean(f) ? f : u;
                                u = d, o[d ? "mute" : "unMute"](), o.setVolume(100 * c), b.call(e, e.media, "volumechange")
                            }
                        }), Object.defineProperty(e.media, "currentSrc", {
                            get: () => o.getVideoUrl()
                        }), Object.defineProperty(e.media, "ended", {
                            get: () => e.currentTime === e.duration
                        });
                        const g = o.getAvailablePlaybackRates();
                        e.options.speed = g.filter(f => e.config.speed.options.includes(f)), e.supported.ui && i.customControls && e.media.setAttribute("tabindex", -1), b.call(e, e.media, "timeupdate"), b.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(() => {
                            e.media.buffered = o.getVideoLoadedFraction(), (e.media.lastBuffered === null || e.media.lastBuffered < e.media.buffered) && b.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, e.media.buffered === 1 && (clearInterval(e.timers.buffering), b.call(e, e.media, "canplaythrough"))
                        }, 200), i.customControls && setTimeout(() => P.build.call(e), 50)
                    },
                    onStateChange(l) {
                        const o = l.target;
                        switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(l.data) && (e.media.seeking = !1, b.call(e, e.media, "seeked")), l.data) {
                            case -1:
                                b.call(e, e.media, "timeupdate"), e.media.buffered = o.getVideoLoadedFraction(), b.call(e, e.media, "progress");
                                break;
                            case 0:
                                J.call(e, !1), e.media.loop ? (o.stopVideo(), o.playVideo()) : b.call(e, e.media, "ended");
                                break;
                            case 1:
                                i.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (J.call(e, !0), b.call(e, e.media, "playing"), e.timers.playing = setInterval(() => {
                                    b.call(e, e.media, "timeupdate")
                                }, 50), e.media.duration !== o.getDuration() && (e.media.duration = o.getDuration(), b.call(e, e.media, "durationchange")));
                                break;
                            case 2:
                                e.muted || e.embed.unMute(), J.call(e, !1);
                                break;
                            case 3:
                                b.call(e, e.media, "waiting")
                        }
                        b.call(e, e.elements.container, "statechange", !1, {
                            code: l.data
                        })
                    }
                }
            })
        }
    },
    wt = {
        setup() {
            this.media ? (E(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), E(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && E(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = y("div", {
                class: this.config.classNames.video
            }), ct(this.media, this.elements.wrapper), this.elements.poster = y("div", {
                class: this.config.classNames.poster
            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? z.setup.call(this) : this.isYouTube ? ce.setup.call(this) : this.isVimeo && Me.setup.call(this)) : this.debug.warn("No media element found!")
        }
    };
class Pi {
    constructor(i) {
        m(this, "load", () => {
            this.enabled && (r.object(window.google) && r.object(window.google.ima) ? this.ready() : Oe(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready()
            }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"))
            }))
        }), m(this, "ready", () => {
            var t;
            this.enabled || ((t = this).manager && t.manager.destroy(), t.elements.displayContainer && t.elements.displayContainer.destroy(), t.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()")
            }), this.listeners(), this.setupIMA()
        }), m(this, "setupIMA", () => {
            this.elements.container = y("div", {
                class: this.player.config.classNames.ads
            }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, t => this.onAdsManagerLoaded(t), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, t => this.onAdError(t), !1), this.requestAds()
        }), m(this, "requestAds", () => {
            const {
                container: t
            } = this.player.elements;
            try {
                const s = new google.ima.AdsRequest;
                s.adTagUrl = this.tagUrl, s.linearAdSlotWidth = t.offsetWidth, s.linearAdSlotHeight = t.offsetHeight, s.nonLinearAdSlotWidth = t.offsetWidth, s.nonLinearAdSlotHeight = t.offsetHeight, s.forceNonLinearFullSlot = !1, s.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(s)
            } catch (s) {
                this.onAdError(s)
            }
        }), m(this, "pollCountdown", (t = !1) => {
            if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
            this.countdownTimer = setInterval(() => {
                const s = ye(Math.max(this.manager.getRemainingTime(), 0)),
                    n = `${$.get("advertisement",this.player.config)} - ${s}`;
                this.elements.container.setAttribute("data-badge-text", n)
            }, 100)
        }), m(this, "onAdsManagerLoaded", t => {
            if (!this.enabled) return;
            const s = new google.ima.AdsRenderingSettings;
            s.restoreCustomPlaybackStateOnAdBreakComplete = !0, s.enablePreloading = !0, this.manager = t.getAdsManager(this.player, s), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, n => this.onAdError(n)), Object.keys(google.ima.AdEvent.Type).forEach(n => {
                this.manager.addEventListener(google.ima.AdEvent.Type[n], a => this.onAdEvent(a))
            }), this.trigger("loaded")
        }), m(this, "addCuePoints", () => {
            r.empty(this.cuePoints) || this.cuePoints.forEach(t => {
                if (t !== 0 && t !== -1 && t < this.player.duration) {
                    const s = this.player.elements.progress;
                    if (r.element(s)) {
                        const n = 100 / this.player.duration * t,
                            a = y("span", {
                                class: this.player.config.classNames.cues
                            });
                        a.style.left = `${n.toString()}%`, s.appendChild(a)
                    }
                }
            })
        }), m(this, "onAdEvent", t => {
            const {
                container: s
            } = this.player.elements, n = t.getAd(), a = t.getAdData();
            switch ((l => {
                    b.call(this.player, this.player.media, `ads${l.replace(/_/g,"").toLowerCase()}`)
                })(t.type), t.type) {
                case google.ima.AdEvent.Type.LOADED:
                    this.trigger("loaded"), this.pollCountdown(!0), n.isLinear() || (n.width = s.offsetWidth, n.height = s.offsetHeight);
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    this.manager.setVolume(this.player.volume);
                    break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    this.player.ended ? this.loadAds() : this.loader.contentComplete();
                    break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                    this.pauseContent();
                    break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                    this.pollCountdown(), this.resumeContent();
                    break;
                case google.ima.AdEvent.Type.LOG:
                    a.adError && this.player.debug.warn(`Non-fatal ad error: ${a.adError.getMessage()}`)
            }
        }), m(this, "onAdError", t => {
            this.cancel(), this.player.debug.warn("Ads error", t)
        }), m(this, "listeners", () => {
            const {
                container: t
            } = this.player.elements;
            let s;
            this.player.on("canplay", () => {
                this.addCuePoints()
            }), this.player.on("ended", () => {
                this.loader.contentComplete()
            }), this.player.on("timeupdate", () => {
                s = this.player.currentTime
            }), this.player.on("seeked", () => {
                const n = this.player.currentTime;
                r.empty(this.cuePoints) || this.cuePoints.forEach((a, l) => {
                    s < a && a < n && (this.manager.discardAdBreak(), this.cuePoints.splice(l, 1))
                })
            }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
            })
        }), m(this, "play", () => {
            const {
                container: t
            } = this.player.elements;
            this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                    this.initialized || (this.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0
                } catch (s) {
                    this.onAdError(s)
                }
            }).catch(() => {})
        }), m(this, "resumeContent", () => {
            this.elements.container.style.zIndex = "", this.playing = !1, V(this.player.media.play())
        }), m(this, "pauseContent", () => {
            this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
        }), m(this, "cancel", () => {
            this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
        }), m(this, "loadAds", () => {
            this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise(t => {
                    this.on("loaded", t), this.player.debug.log(this.manager)
                }), this.initialized = !1, this.requestAds()
            }).catch(() => {})
        }), m(this, "trigger", (t, ...s) => {
            const n = this.events[t];
            r.array(n) && n.forEach(a => {
                r.function(a) && a.apply(this, s)
            })
        }), m(this, "on", (t, s) => (r.array(this.events[t]) || (this.events[t] = []), this.events[t].push(s), this)), m(this, "startSafetyTimer", (t, s) => {
            this.player.debug.log(`Safety timer invoked from: ${s}`), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()")
            }, t)
        }), m(this, "clearSafetyTimer", t => {
            r.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${t}`), clearTimeout(this.safetyTimer), this.safetyTimer = null)
        }), this.player = i, this.config = i.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
            container: null,
            displayContainer: null
        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((t, s) => {
            this.on("loaded", t), this.on("error", s)
        }), this.load()
    }
    get enabled() {
        const {
            config: i
        } = this;
        return this.player.isHTML5 && this.player.isVideo && i.enabled && (!r.empty(i.publisherId) || r.url(i.tagUrl))
    }
    get tagUrl() {
        const {
            config: i
        } = this;
        return r.url(i.tagUrl) ? i.tagUrl : `https://go.aniview.com/api/adserver6/vast/?${bt({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:i.publisherId})}`
    }
}

function Tt(e = 0, i = 0, t = 255) {
    return Math.min(Math.max(e, i), t)
}
const Mi = e => {
        const i = [];
        return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(t => {
            const s = {};
            t.split(/\r\n|\n|\r/).forEach(n => {
                if (r.number(s.startTime)) {
                    if (!r.empty(n.trim()) && r.empty(s.text)) {
                        const a = n.trim().split("#xywh=");
                        [s.text] = a, a[1] && ([s.x, s.y, s.w, s.h] = a[1].split(","))
                    }
                } else {
                    const a = n.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                    a && (s.startTime = 60 * Number(a[1] || 0) * 60 + 60 * Number(a[2]) + Number(a[3]) + +`0.${a[4]}`, s.endTime = 60 * Number(a[6] || 0) * 60 + 60 * Number(a[7]) + Number(a[8]) + +`0.${a[9]}`)
                }
            }), s.text && i.push(s)
        }), i
    },
    ze = (e, i) => {
        const t = {};
        return e > i.width / i.height ? (t.width = i.width, t.height = 1 / e * i.width) : (t.height = i.height, t.width = e * i.height), t
    };
class Ne {
    constructor(i) {
        m(this, "load", () => {
            this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = !0)
            })
        }), m(this, "getThumbnails", () => new Promise(t => {
            const {
                src: s
            } = this.player.config.previewThumbnails;
            if (r.empty(s)) throw new Error("Missing previewThumbnails.src config attribute");
            const n = () => {
                this.thumbnails.sort((a, l) => a.height - l.height), this.player.debug.log("Preview thumbnails", this.thumbnails), t()
            };
            if (r.function(s)) s(a => {
                this.thumbnails = a, n()
            });
            else {
                const a = (r.string(s) ? [s] : s).map(l => this.getThumbnail(l));
                Promise.all(a).then(n)
            }
        })), m(this, "getThumbnail", t => new Promise(s => {
            ne(t).then(n => {
                const a = {
                    frames: Mi(n),
                    height: null,
                    urlPrefix: ""
                };
                a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = t.substring(0, t.lastIndexOf("/") + 1));
                const l = new Image;
                l.onload = () => {
                    a.height = l.naturalHeight, a.width = l.naturalWidth, this.thumbnails.push(a), s()
                }, l.src = a.urlPrefix + a.frames[0].text
            })
        })), m(this, "startMove", t => {
            if (this.loaded && r.event(t) && ["touchmove", "mousemove"].includes(t.type) && this.player.media.duration) {
                if (t.type === "touchmove") this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                    var s, n;
                    const a = this.player.elements.progress.getBoundingClientRect(),
                        l = 100 / a.width * (t.pageX - a.left);
                    this.seekTime = this.player.media.duration * (l / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = t.pageX, this.elements.thumb.time.innerText = ye(this.seekTime);
                    const o = (s = this.player.config.markers) === null || s === void 0 || (n = s.points) === null || n === void 0 ? void 0 : n.find(({
                        time: c
                    }) => c === Math.round(this.seekTime));
                    o && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${o.label}<br>`)
                }
                this.showImageAtCurrentTime()
            }
        }), m(this, "endMove", () => {
            this.toggleThumbContainer(!1, !0)
        }), m(this, "startScrubbing", t => {
            (r.nullOrUndefined(t.button) || t.button === !1 || t.button === 0) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
        }), m(this, "endScrubbing", () => {
            this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : $e.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(!1)
            })
        }), m(this, "listeners", () => {
            this.player.on("play", () => {
                this.toggleThumbContainer(!1, !0)
            }), this.player.on("seeked", () => {
                this.toggleThumbContainer(!1)
            }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime
            })
        }), m(this, "render", () => {
            this.elements.thumb.container = y("div", {
                class: this.player.config.classNames.previewThumbnails.thumbContainer
            }), this.elements.thumb.imageContainer = y("div", {
                class: this.player.config.classNames.previewThumbnails.imageContainer
            }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
            const t = y("div", {
                class: this.player.config.classNames.previewThumbnails.timeContainer
            });
            this.elements.thumb.time = y("span", {}, "00:00"), t.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(t), r.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = y("div", {
                class: this.player.config.classNames.previewThumbnails.scrubbingContainer
            }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
        }), m(this, "destroy", () => {
            this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
        }), m(this, "showImageAtCurrentTime", () => {
            this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
            const t = this.thumbnails[0].frames.findIndex(a => this.seekTime >= a.startTime && this.seekTime <= a.endTime),
                s = t >= 0;
            let n = 0;
            this.mouseDown || this.toggleThumbContainer(s), s && (this.thumbnails.forEach((a, l) => {
                this.loadedImages.includes(a.frames[t].text) && (n = l)
            }), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(n)))
        }), m(this, "loadImage", (t = 0) => {
            const s = this.showingThumb,
                n = this.thumbnails[t],
                {
                    urlPrefix: a
                } = n,
                l = n.frames[s],
                o = n.frames[s].text,
                c = a + o;
            if (this.currentImageElement && this.currentImageElement.dataset.filename === o) this.showImage(this.currentImageElement, l, t, s, o, !1), this.currentImageElement.dataset.index = s, this.removeOldImages(this.currentImageElement);
            else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const u = new Image;
                u.src = c, u.dataset.index = s, u.dataset.filename = o, this.showingThumbFilename = o, this.player.debug.log(`Loading image: ${c}`), u.onload = () => this.showImage(u, l, t, s, o, !0), this.loadingImage = u, this.removeOldImages(u)
            }
        }), m(this, "showImage", (t, s, n, a, l, o = !0) => {
            this.player.debug.log(`Showing thumb: ${l}. num: ${a}. qual: ${n}. newimg: ${o}`), this.setImageSizeAndOffset(t, s), o && (this.currentImageContainer.appendChild(t), this.currentImageElement = t, this.loadedImages.includes(l) || this.loadedImages.push(l)), this.preloadNearby(a, !0).then(this.preloadNearby(a, !1)).then(this.getHigherQuality(n, t, s, l))
        }), m(this, "removeOldImages", t => {
            Array.from(this.currentImageContainer.children).forEach(s => {
                if (s.tagName.toLowerCase() !== "img") return;
                const n = this.usingSprites ? 500 : 1e3;
                if (s.dataset.index !== t.dataset.index && !s.dataset.deleting) {
                    s.dataset.deleting = !0;
                    const {
                        currentImageContainer: a
                    } = this;
                    setTimeout(() => {
                        a.removeChild(s), this.player.debug.log(`Removing thumb: ${s.dataset.filename}`)
                    }, n)
                }
            })
        }), m(this, "preloadNearby", (t, s = !0) => new Promise(n => {
            setTimeout(() => {
                const a = this.thumbnails[0].frames[t].text;
                if (this.showingThumbFilename === a) {
                    let l;
                    l = s ? this.thumbnails[0].frames.slice(t) : this.thumbnails[0].frames.slice(0, t).reverse();
                    let o = !1;
                    l.forEach(c => {
                        const u = c.text;
                        if (u !== a && !this.loadedImages.includes(u)) {
                            o = !0, this.player.debug.log(`Preloading thumb filename: ${u}`);
                            const {
                                urlPrefix: g
                            } = this.thumbnails[0], f = g + u, d = new Image;
                            d.src = f, d.onload = () => {
                                this.player.debug.log(`Preloaded thumb filename: ${u}`), this.loadedImages.includes(u) || this.loadedImages.push(u), n()
                            }
                        }
                    }), o || n()
                }
            }, 300)
        })), m(this, "getHigherQuality", (t, s, n, a) => {
            if (t < this.thumbnails.length - 1) {
                let l = s.naturalHeight;
                this.usingSprites && (l = n.h), l < this.thumbContainerHeight && setTimeout(() => {
                    this.showingThumbFilename === a && (this.player.debug.log(`Showing higher quality thumb for: ${a}`), this.loadImage(t + 1))
                }, 300)
            }
        }), m(this, "toggleThumbContainer", (t = !1, s = !1) => {
            const n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
            this.elements.thumb.container.classList.toggle(n, t), !t && s && (this.showingThumb = null, this.showingThumbFilename = null)
        }), m(this, "toggleScrubbingContainer", (t = !1) => {
            const s = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
            this.elements.scrubbing.container.classList.toggle(s, t), t || (this.showingThumb = null, this.showingThumbFilename = null)
        }), m(this, "determineContainerAutoSizing", () => {
            (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
        }), m(this, "setThumbContainerSizeAndPos", () => {
            const {
                imageContainer: t
            } = this.elements.thumb;
            if (this.sizeSpecifiedInCSS) {
                if (t.clientHeight > 20 && t.clientWidth < 20) {
                    const s = Math.floor(t.clientHeight * this.thumbAspectRatio);
                    t.style.width = `${s}px`
                } else if (t.clientHeight < 20 && t.clientWidth > 20) {
                    const s = Math.floor(t.clientWidth / this.thumbAspectRatio);
                    t.style.height = `${s}px`
                }
            } else {
                const s = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                t.style.height = `${this.thumbContainerHeight}px`, t.style.width = `${s}px`
            }
            this.setThumbContainerPos()
        }), m(this, "setThumbContainerPos", () => {
            const t = this.player.elements.progress.getBoundingClientRect(),
                s = this.player.elements.container.getBoundingClientRect(),
                {
                    container: n
                } = this.elements.thumb,
                a = s.left - t.left + 10,
                l = s.right - t.left - n.clientWidth - 10,
                o = this.mousePosX - t.left - n.clientWidth / 2,
                c = Tt(o, a, l);
            n.style.left = `${c}px`, n.style.setProperty("--preview-arrow-offset", o - c + "px")
        }), m(this, "setScrubbingContainerSize", () => {
            const {
                width: t,
                height: s
            } = ze(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight
            });
            this.elements.scrubbing.container.style.width = `${t}px`, this.elements.scrubbing.container.style.height = `${s}px`
        }), m(this, "setImageSizeAndOffset", (t, s) => {
            if (!this.usingSprites) return;
            const n = this.thumbContainerHeight / s.h;
            t.style.height = t.naturalHeight * n + "px", t.style.width = t.naturalWidth * n + "px", t.style.left = `-${s.x*n}px`, t.style.top = `-${s.y*n}px`
        }), this.player = i, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
            thumb: {},
            scrubbing: {}
        }, this.load()
    }
    get enabled() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
    }
    get currentImageContainer() {
        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
    }
    get usingSprites() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w")
    }
    get thumbAspectRatio() {
        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
    }
    get thumbContainerHeight() {
        if (this.mouseDown) {
            const {
                height: i
            } = ze(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight
            });
            return i
        }
        return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
    }
    get currentImageElement() {
        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
    }
    set currentImageElement(i) {
        this.mouseDown ? this.currentScrubbingImageElement = i : this.currentThumbnailImageElement = i
    }
}
const xe = {
    insertElements(e, i) {
        r.string(i) ? Fe(e, this.media, {
            src: i
        }) : r.array(i) && i.forEach(t => {
            Fe(e, this.media, t)
        })
    },
    change(e) {
        ot(e, "sources.length") ? (z.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], F(this.media), this.media = null, r.element(this.elements.container) && this.elements.container.removeAttribute("class");
            const {
                sources: i,
                type: t
            } = e, [{
                provider: s = B.html5,
                src: n
            }] = i, a = s === "html5" ? t : "div", l = s === "html5" ? {} : {
                src: n
            };
            Object.assign(this, {
                provider: s,
                type: t,
                supported: x.check(t, s, this.config.playsinline),
                media: y(a, l)
            }), this.elements.container.appendChild(this.media), r.boolean(e.autoplay) && (this.config.autoplay = e.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), r.empty(e.poster) || (this.poster = e.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), P.addStyleHook.call(this), this.isHTML5 && xe.insertElements.call(this, "source", i), this.config.title = e.title, wt.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && xe.insertElements.call(this, "track", e.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && P.build.call(this), this.isHTML5 && this.media.load(), r.empty(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new Ne(this))), this.fullscreen.update()
        }, !0)) : this.debug.warn("Invalid source format")
    }
};
class pe {
    constructor(i, t) {
        if (m(this, "play", () => r.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => V(this.media.play())), this.media.play()) : null), m(this, "pause", () => this.playing && r.function(this.media.pause) ? this.media.pause() : null), m(this, "togglePlay", o => (r.boolean(o) ? o : !this.playing) ? this.play() : this.pause()), m(this, "stop", () => {
                this.isHTML5 ? (this.pause(), this.restart()) : r.function(this.media.stop) && this.media.stop()
            }), m(this, "restart", () => {
                this.currentTime = 0
            }), m(this, "rewind", o => {
                this.currentTime -= r.number(o) ? o : this.config.seekTime
            }), m(this, "forward", o => {
                this.currentTime += r.number(o) ? o : this.config.seekTime
            }), m(this, "increaseVolume", o => {
                const c = this.media.muted ? 0 : this.volume;
                this.volume = c + (r.number(o) ? o : 0)
            }), m(this, "decreaseVolume", o => {
                this.increaseVolume(-o)
            }), m(this, "airplay", () => {
                x.airplay && this.media.webkitShowPlaybackTargetPicker()
            }), m(this, "toggleControls", o => {
                if (this.supported.ui && !this.isAudio) {
                    const c = de(this.elements.container, this.config.classNames.hideControls),
                        u = o === void 0 ? void 0 : !o,
                        g = E(this.elements.container, this.config.classNames.hideControls, u);
                    if (g && r.array(this.config.controls) && this.config.controls.includes("settings") && !r.empty(this.config.settings) && h.toggleMenu.call(this, !1), g !== c) {
                        const f = g ? "controlshidden" : "controlsshown";
                        b.call(this, this.media, f)
                    }
                    return !g
                }
                return !1
            }), m(this, "on", (o, c) => {
                C.call(this, this.elements.container, o, c)
            }), m(this, "once", (o, c) => {
                $e.call(this, this.elements.container, o, c)
            }), m(this, "off", (o, c) => {
                fe(this.elements.container, o, c)
            }), m(this, "destroy", (o, c = !1) => {
                if (!this.ready) return;
                const u = () => {
                    document.body.style.overflow = "", this.embed = null, c ? (Object.keys(this.elements).length && (F(this.elements.buttons.play), F(this.elements.captions), F(this.elements.controls), F(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), r.function(o) && o()) : (li.call(this), z.cancelRequests.call(this), he(this.elements.original, this.elements.container), b.call(this, this.elements.original, "destroyed", !0), r.function(o) && o.call(this.elements.original), this.ready = !1, setTimeout(() => {
                        this.elements = null, this.media = null
                    }, 200))
                };
                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (P.toggleNativeControls.call(this, !0), u()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), this.embed !== null && r.function(this.embed.destroy) && this.embed.destroy(), u()) : this.isVimeo && (this.embed !== null && this.embed.unload().then(u), setTimeout(u, 200))
            }), m(this, "supports", o => x.mime.call(this, o)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = x.touch, this.media = i, r.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || r.nodeList(this.media) || r.array(this.media)) && (this.media = this.media[0]), this.config = N({}, vt, pe.defaults, t || {}, (() => {
                try {
                    return JSON.parse(this.media.getAttribute("data-plyr-config"))
                } catch {
                    return {}
                }
            })()), this.elements = {
                container: null,
                fullscreen: null,
                captions: null,
                buttons: {},
                display: {},
                progress: {},
                inputs: {},
                settings: {
                    popup: null,
                    menu: null,
                    panels: {},
                    buttons: {}
                }
            }, this.captions = {
                active: null,
                currentTrack: -1,
                meta: new WeakMap
            }, this.fullscreen = {
                active: !1
            }, this.options = {
                speed: [],
                quality: []
            }, this.debug = new vi(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", x), r.nullOrUndefined(this.media) || !r.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
        if (this.media.plyr) return void this.debug.warn("Target already setup");
        if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
        if (!x.check().api) return void this.debug.error("Setup failed: no support");
        const s = this.media.cloneNode(!0);
        s.autoplay = !1, this.elements.original = s;
        const n = this.media.tagName.toLowerCase();
        let a = null,
            l = null;
        switch (n) {
            case "div":
                if (a = this.media.querySelector("iframe"), r.element(a)) {
                    if (l = yt(a.getAttribute("src")), this.provider = bi(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                        const o = ["1", "true"];
                        o.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), o.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = o.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                    }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (r.empty(this.provider) || !Object.values(B).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = we.video;
                break;
            case "video":
            case "audio":
                this.type = n, this.provider = B.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                break;
            default:
                return void this.debug.error("Setup failed: unsupported type")
        }
        this.supported = x.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new wi(this), this.storage = new te(this), this.media.plyr = this, r.element(this.elements.container) || (this.elements.container = y("div"), ct(this.media, this.elements.container)), P.migrateStyles.call(this), P.addStyleHook.call(this), wt.setup.call(this), this.config.debug && C.call(this, this.elements.container, this.config.events.join(" "), o => {
            this.debug.log(`event: ${o.type}`)
        }), this.fullscreen = new H(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && P.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Pi(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => V(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Ne(this))) : this.debug.error("Setup failed: no support")
    }
    get isHTML5() {
        return this.provider === B.html5
    }
    get isEmbed() {
        return this.isYouTube || this.isVimeo
    }
    get isYouTube() {
        return this.provider === B.youtube
    }
    get isVimeo() {
        return this.provider === B.vimeo
    }
    get isVideo() {
        return this.type === we.video
    }
    get isAudio() {
        return this.type === we.audio
    }
    get playing() {
        return !!(this.ready && !this.paused && !this.ended)
    }
    get paused() {
        return !!this.media.paused
    }
    get stopped() {
        return !!(this.paused && this.currentTime === 0)
    }
    get ended() {
        return !!this.media.ended
    }
    set currentTime(i) {
        if (!this.duration) return;
        const t = r.number(i) && i > 0;
        this.media.currentTime = t ? Math.min(i, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`)
    }
    get currentTime() {
        return Number(this.media.currentTime)
    }
    get buffered() {
        const {
            buffered: i
        } = this.media;
        return r.number(i) ? i : i && i.length && this.duration > 0 ? i.end(0) / this.duration : 0
    }
    get seeking() {
        return !!this.media.seeking
    }
    get duration() {
        const i = parseFloat(this.config.duration),
            t = (this.media || {}).duration,
            s = r.number(t) && t !== 1 / 0 ? t : 0;
        return i || s
    }
    set volume(i) {
        let t = i;
        r.string(t) && (t = Number(t)), r.number(t) || (t = this.storage.get("volume")), r.number(t) || ({
            volume: t
        } = this.config), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !r.empty(i) && this.muted && t > 0 && (this.muted = !1)
    }
    get volume() {
        return Number(this.media.volume)
    }
    set muted(i) {
        let t = i;
        r.boolean(t) || (t = this.storage.get("muted")), r.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
    }
    get muted() {
        return !!this.media.muted
    }
    get hasAudio() {
        return !this.isHTML5 || !!this.isAudio || !!this.media.mozHasAudio || !!this.media.webkitAudioDecodedByteCount || !!(this.media.audioTracks && this.media.audioTracks.length)
    }
    set speed(i) {
        let t = null;
        r.number(i) && (t = i), r.number(t) || (t = this.storage.get("speed")), r.number(t) || (t = this.config.speed.selected);
        const {
            minimumSpeed: s,
            maximumSpeed: n
        } = this;
        t = Tt(t, s, n), this.config.speed.selected = t, setTimeout(() => {
            this.media && (this.media.playbackRate = t)
        }, 0)
    }
    get speed() {
        return Number(this.media.playbackRate)
    }
    get minimumSpeed() {
        return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
    }
    get maximumSpeed() {
        return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
    }
    set quality(i) {
        const t = this.config.quality,
            s = this.options.quality;
        if (!s.length) return;
        let n = [!r.empty(i) && Number(i), this.storage.get("quality"), t.selected, t.default].find(r.number),
            a = !0;
        if (!s.includes(n)) {
            const l = ut(s, n);
            this.debug.warn(`Unsupported quality option: ${n}, using ${l} instead`), n = l, a = !1
        }
        t.selected = n, this.media.quality = n, a && this.storage.set({
            quality: n
        })
    }
    get quality() {
        return this.media.quality
    }
    set loop(i) {
        const t = r.boolean(i) ? i : this.config.loop.active;
        this.config.loop.active = t, this.media.loop = t
    }
    get loop() {
        return !!this.media.loop
    }
    set source(i) {
        xe.change.call(this, i)
    }
    get source() {
        return this.media.currentSrc
    }
    get download() {
        const {
            download: i
        } = this.config.urls;
        return r.url(i) ? i : this.source
    }
    set download(i) {
        r.url(i) && (this.config.urls.download = i, h.setDownloadUrl.call(this))
    }
    set poster(i) {
        this.isVideo ? P.setPoster.call(this, i, !1).catch(() => {}) : this.debug.warn("Poster can only be set for video")
    }
    get poster() {
        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
    }
    get ratio() {
        if (!this.isVideo) return null;
        const i = me(_e.call(this));
        return r.array(i) ? i.join(":") : i
    }
    set ratio(i) {
        this.isVideo ? r.string(i) && dt(i) ? (this.config.ratio = me(i), Q.call(this)) : this.debug.error(`Invalid aspect ratio specified (${i})`) : this.debug.warn("Aspect ratio can only be set for video")
    }
    set autoplay(i) {
        this.config.autoplay = r.boolean(i) ? i : this.config.autoplay
    }
    get autoplay() {
        return !!this.config.autoplay
    }
    toggleCaptions(i) {
        S.toggle.call(this, i, !1)
    }
    set currentTrack(i) {
        S.set.call(this, i, !1), S.setup.call(this)
    }
    get currentTrack() {
        const {
            toggled: i,
            currentTrack: t
        } = this.captions;
        return i ? t : -1
    }
    set language(i) {
        S.setLanguage.call(this, i, !1)
    }
    get language() {
        return (S.getCurrentTrack.call(this) || {}).language
    }
    set pip(i) {
        if (!x.pip) return;
        const t = r.boolean(i) ? i : !this.pip;
        r.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? ve.active : ve.inactive), r.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
    }
    get pip() {
        return x.pip ? r.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === ve.active : null
    }
    setPreviewThumbnails(i) {
        this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, i), this.config.previewThumbnails.enabled && (this.previewThumbnails = new Ne(this))
    }
    static supported(i, t) {
        return x.check(i, t)
    }
    static loadSprite(i, t) {
        return gt(i, t)
    }
    static setup(i, t = {}) {
        let s = null;
        return r.string(i) ? s = Array.from(document.querySelectorAll(i)) : r.nodeList(i) ? s = Array.from(i) : r.array(i) && (s = i.filter(r.element)), r.empty(s) ? null : s.map(n => new pe(n, t))
    }
}
pe.defaults = si(vt);
ke.registerPlugin(Ke);

function xi() {
    const e = document.querySelector(".test");
    document.querySelector("body");

    function i(s) {
        const n = s === 1;
        return ke.to(e, {
            duration: .2,
            visibility: () => n ? "hidden" : "visible",
            y: () => n ? 10 : 0,
            ease: "power1.out"
        })
    }

    function t(s) {
        const n = s === 1;
        return ke.to(e, {
            duration: .2,
            visibility: () => n ? "visible" : "hidden",
            y: () => n ? 0 : 10,
            ease: "power1.out"
        })
    }
    Ke.create({
        target: "body",
        start: 50,
        end: "bottom bottom+=10",
        onEnter: ({
            direction: s
        }) => i(s),
        onLeaveBack: ({
            direction: s
        }) => i(s),
        onLeave: ({
            direction: s
        }) => t(s),
        onEnterBack: ({
            direction: s
        }) => t(s)
    })
}
export {
    Ct as C, pe as P, xi as r
};