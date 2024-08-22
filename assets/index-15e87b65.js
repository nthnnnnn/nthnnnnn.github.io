import "./modulepreload-polyfill-3cfb730f.js";
import {
    g as yt,
    S as An,
    o as eo
} from "./all-ed396580.js";
import {
    t as to
} from "./textReveal-4fca16d5.js";
const Nr = document.createElement("template");
Nr.innerHTML = `
  <style>
    :host {
      display: inline-block;
      box-sizing: border-box;
    }
    :host * {
      box-sizing: inherit;
    }

    :host {
      position: relative;
      overflow: hidden;
    }

    :host .background,
    :host .overlay {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    :host .background {
      object-position: center center;
      object-fit: cover;
    }

    :host .overlay {
      background-color: var(--overlay-color, transparent);
    }

    /* Fix for Safari that puts inline videos on top by default */
    :host .background { z-index: 48; }
    :host .overlay { z-index: 49; }
    :host .content { position: relative; z-index: 50; }
  </style>
  <div class="overlay"></div>
  <div class="content">
    <slot>You need to put some content here</slot>
  </div>
`;
class Lr extends HTMLElement {
    constructor() {
        super(), this.attachShadow({
            mode: "open"
        }), this.shadowRoot.appendChild(Nr.content.cloneNode(!0))
    }
    connectedCallback() {
        const c = this.getAttribute("webm"),
            g = this.getAttribute("mp4"),
            y = this.getAttribute("poster"),
            b = this.getAttribute("fallback"),
            C = this.getAttribute("srcset"),
            N = this.getAttribute("sizes"),
            P = this.getAttribute("breakpoint"),
            x = this.shadowRoot.querySelector(".overlay");
        let U = !1,
            j;
        if (window.matchMedia("(prefers-reduced-motion: no-preference)") && (c || g) && (P === null || window.matchMedia(`(min-width: ${P})`).matches)) {
            const I = L => {
                    if (j = document.createElement("video"), j.classList.add("background"), j.setAttribute("playsinline", ""), j.setAttribute("no-controls", ""), j.muted = !0, j.setAttribute("loop", ""), "autoplay" in L && L.autoplay ? (j.setAttribute("autoplay", ""), j.setAttribute("preload", "auto")) : j.setAttribute("preload", "none"), y && j.setAttribute("poster", y), c) {
                        const Z = document.createElement("source");
                        Z.setAttribute("src", c), Z.setAttribute("type", "video/webm"), j.appendChild(Z)
                    }
                    if (g) {
                        const Z = document.createElement("source");
                        Z.setAttribute("src", g), Z.setAttribute("type", "video/mp4"), j.appendChild(Z)
                    }
                    this.shadowRoot.insertBefore(j, x), U = !0
                },
                Q = window.matchMedia("(prefers-reduced-motion)"),
                fe = window.matchMedia("(prefers-reduced-motion: no-preference)"),
                q = () => {
                    fe.matches ? U ? j.play() : I({
                        autoplay: !0
                    }) : U ? j.pause() : I({
                        autoplay: !1
                    })
                };
            q(), Q.addEventListener("change", q)
        } else if (C) {
            const I = document.createElement("img");
            I.classList.add("background"), b && I.setAttribute("src", b), I.setAttribute("srcset", C), N && I.setAttribute("sizes", N), this.shadowRoot.insertBefore(I, x)
        }
    }
}
window.ResponsiveVideoBackground = Lr;
typeof window < "u" && "customElements" in window && window.customElements.get("responsive-video-background") === void 0 && window.customElements.define("responsive-video-background", Lr);
var jr = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    },
    kn = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
    },
    no = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
    Yt = {
        CSS: {},
        springs: {}
    };

function Be(s, c, g) {
    return Math.min(Math.max(s, c), g)
}

function Ot(s, c) {
    return s.indexOf(c) > -1
}

function Cn(s, c) {
    return s.apply(null, c)
}
var B = {
    arr: function(s) {
        return Array.isArray(s)
    },
    obj: function(s) {
        return Ot(Object.prototype.toString.call(s), "Object")
    },
    pth: function(s) {
        return B.obj(s) && s.hasOwnProperty("totalLength")
    },
    svg: function(s) {
        return s instanceof SVGElement
    },
    inp: function(s) {
        return s instanceof HTMLInputElement
    },
    dom: function(s) {
        return s.nodeType || B.svg(s)
    },
    str: function(s) {
        return typeof s == "string"
    },
    fnc: function(s) {
        return typeof s == "function"
    },
    und: function(s) {
        return typeof s > "u"
    },
    nil: function(s) {
        return B.und(s) || s === null
    },
    hex: function(s) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(s)
    },
    rgb: function(s) {
        return /^rgb/.test(s)
    },
    hsl: function(s) {
        return /^hsl/.test(s)
    },
    col: function(s) {
        return B.hex(s) || B.rgb(s) || B.hsl(s)
    },
    key: function(s) {
        return !jr.hasOwnProperty(s) && !kn.hasOwnProperty(s) && s !== "targets" && s !== "keyframes"
    }
};

function Or(s) {
    var c = /\(([^)]+)\)/.exec(s);
    return c ? c[1].split(",").map(function(g) {
        return parseFloat(g)
    }) : []
}

function Pr(s, c) {
    var g = Or(s),
        y = Be(B.und(g[0]) ? 1 : g[0], .1, 100),
        b = Be(B.und(g[1]) ? 100 : g[1], .1, 100),
        C = Be(B.und(g[2]) ? 10 : g[2], .1, 100),
        N = Be(B.und(g[3]) ? 0 : g[3], .1, 100),
        P = Math.sqrt(b / y),
        x = C / (2 * Math.sqrt(b * y)),
        U = x < 1 ? P * Math.sqrt(1 - x * x) : 0,
        j = 1,
        I = x < 1 ? (x * P + -N) / U : -N + P;

    function Q(q) {
        var L = c ? c * q / 1e3 : q;
        return x < 1 ? L = Math.exp(-L * x * P) * (j * Math.cos(U * L) + I * Math.sin(U * L)) : L = (j + I * L) * Math.exp(-L * P), q === 0 || q === 1 ? q : 1 - L
    }

    function fe() {
        var q = Yt.springs[s];
        if (q) return q;
        for (var L = 1 / 6, Z = 0, R = 0;;)
            if (Z += L, Q(Z) === 1) {
                if (R++, R >= 16) break
            } else R = 0;
        var X = Z * L * 1e3;
        return Yt.springs[s] = X, X
    }
    return c ? Q : fe
}

function ro(s) {
    return s === void 0 && (s = 10),
        function(c) {
            return Math.ceil(Be(c, 1e-6, 1) * s) * (1 / s)
        }
}
var io = function() {
        var s = 11,
            c = 1 / (s - 1);

        function g(j, I) {
            return 1 - 3 * I + 3 * j
        }

        function y(j, I) {
            return 3 * I - 6 * j
        }

        function b(j) {
            return 3 * j
        }

        function C(j, I, Q) {
            return ((g(I, Q) * j + y(I, Q)) * j + b(I)) * j
        }

        function N(j, I, Q) {
            return 3 * g(I, Q) * j * j + 2 * y(I, Q) * j + b(I)
        }

        function P(j, I, Q, fe, q) {
            var L, Z, R = 0;
            do Z = I + (Q - I) / 2, L = C(Z, fe, q) - j, L > 0 ? Q = Z : I = Z; while (Math.abs(L) > 1e-7 && ++R < 10);
            return Z
        }

        function x(j, I, Q, fe) {
            for (var q = 0; q < 4; ++q) {
                var L = N(I, Q, fe);
                if (L === 0) return I;
                var Z = C(I, Q, fe) - j;
                I -= Z / L
            }
            return I
        }

        function U(j, I, Q, fe) {
            if (!(0 <= j && j <= 1 && 0 <= Q && Q <= 1)) return;
            var q = new Float32Array(s);
            if (j !== I || Q !== fe)
                for (var L = 0; L < s; ++L) q[L] = C(L * c, j, Q);

            function Z(R) {
                for (var X = 0, Y = 1, oe = s - 1; Y !== oe && q[Y] <= R; ++Y) X += c;
                --Y;
                var Pe = (R - q[Y]) / (q[Y + 1] - q[Y]),
                    i = X + Pe * c,
                    Me = N(i, j, Q);
                return Me >= .001 ? x(R, i, j, Q) : Me === 0 ? i : P(R, X, X + c, j, Q)
            }
            return function(R) {
                return j === I && Q === fe || R === 0 || R === 1 ? R : C(Z(R), I, fe)
            }
        }
        return U
    }(),
    Mr = function() {
        var s = {
                linear: function() {
                    return function(y) {
                        return y
                    }
                }
            },
            c = {
                Sine: function() {
                    return function(y) {
                        return 1 - Math.cos(y * Math.PI / 2)
                    }
                },
                Circ: function() {
                    return function(y) {
                        return 1 - Math.sqrt(1 - y * y)
                    }
                },
                Back: function() {
                    return function(y) {
                        return y * y * (3 * y - 2)
                    }
                },
                Bounce: function() {
                    return function(y) {
                        for (var b, C = 4; y < ((b = Math.pow(2, --C)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - C) - 7.5625 * Math.pow((b * 3 - 2) / 22 - y, 2)
                    }
                },
                Elastic: function(y, b) {
                    y === void 0 && (y = 1), b === void 0 && (b = .5);
                    var C = Be(y, 1, 10),
                        N = Be(b, .1, 2);
                    return function(P) {
                        return P === 0 || P === 1 ? P : -C * Math.pow(2, 10 * (P - 1)) * Math.sin((P - 1 - N / (Math.PI * 2) * Math.asin(1 / C)) * (Math.PI * 2) / N)
                    }
                }
            },
            g = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
        return g.forEach(function(y, b) {
            c[y] = function() {
                return function(C) {
                    return Math.pow(C, b + 2)
                }
            }
        }), Object.keys(c).forEach(function(y) {
            var b = c[y];
            s["easeIn" + y] = b, s["easeOut" + y] = function(C, N) {
                return function(P) {
                    return 1 - b(C, N)(1 - P)
                }
            }, s["easeInOut" + y] = function(C, N) {
                return function(P) {
                    return P < .5 ? b(C, N)(P * 2) / 2 : 1 - b(C, N)(P * -2 + 2) / 2
                }
            }, s["easeOutIn" + y] = function(C, N) {
                return function(P) {
                    return P < .5 ? (1 - b(C, N)(1 - P * 2)) / 2 : (b(C, N)(P * 2 - 1) + 1) / 2
                }
            }
        }), s
    }();

function Dn(s, c) {
    if (B.fnc(s)) return s;
    var g = s.split("(")[0],
        y = Mr[g],
        b = Or(s);
    switch (g) {
        case "spring":
            return Pr(s, c);
        case "cubicBezier":
            return Cn(io, b);
        case "steps":
            return Cn(ro, b);
        default:
            return Cn(y, b)
    }
}

function qr(s) {
    try {
        var c = document.querySelectorAll(s);
        return c
    } catch {
        return
    }
}

function Qt(s, c) {
    for (var g = s.length, y = arguments.length >= 2 ? arguments[1] : void 0, b = [], C = 0; C < g; C++)
        if (C in s) {
            var N = s[C];
            c.call(y, N, C, s) && b.push(N)
        } return b
}

function Gt(s) {
    return s.reduce(function(c, g) {
        return c.concat(B.arr(g) ? Gt(g) : g)
    }, [])
}

function Sr(s) {
    return B.arr(s) ? s : (B.str(s) && (s = qr(s) || s), s instanceof NodeList || s instanceof HTMLCollection ? [].slice.call(s) : [s])
}

function Nn(s, c) {
    return s.some(function(g) {
        return g === c
    })
}

function Ln(s) {
    var c = {};
    for (var g in s) c[g] = s[g];
    return c
}

function Sn(s, c) {
    var g = Ln(s);
    for (var y in s) g[y] = c.hasOwnProperty(y) ? c[y] : s[y];
    return g
}

function Xt(s, c) {
    var g = Ln(s);
    for (var y in c) g[y] = B.und(s[y]) ? c[y] : s[y];
    return g
}

function oo(s) {
    var c = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(s);
    return c ? "rgba(" + c[1] + ",1)" : s
}

function ao(s) {
    var c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        g = s.replace(c, function(P, x, U, j) {
            return x + x + U + U + j + j
        }),
        y = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g),
        b = parseInt(y[1], 16),
        C = parseInt(y[2], 16),
        N = parseInt(y[3], 16);
    return "rgba(" + b + "," + C + "," + N + ",1)"
}

function uo(s) {
    var c = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(s) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(s),
        g = parseInt(c[1], 10) / 360,
        y = parseInt(c[2], 10) / 100,
        b = parseInt(c[3], 10) / 100,
        C = c[4] || 1;

    function N(Q, fe, q) {
        return q < 0 && (q += 1), q > 1 && (q -= 1), q < 1 / 6 ? Q + (fe - Q) * 6 * q : q < 1 / 2 ? fe : q < 2 / 3 ? Q + (fe - Q) * (2 / 3 - q) * 6 : Q
    }
    var P, x, U;
    if (y == 0) P = x = U = b;
    else {
        var j = b < .5 ? b * (1 + y) : b + y - b * y,
            I = 2 * b - j;
        P = N(I, j, g + 1 / 3), x = N(I, j, g), U = N(I, j, g - 1 / 3)
    }
    return "rgba(" + P * 255 + "," + x * 255 + "," + U * 255 + "," + C + ")"
}

function so(s) {
    if (B.rgb(s)) return oo(s);
    if (B.hex(s)) return ao(s);
    if (B.hsl(s)) return uo(s)
}

function Ye(s) {
    var c = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(s);
    if (c) return c[1]
}

function fo(s) {
    if (Ot(s, "translate") || s === "perspective") return "px";
    if (Ot(s, "rotate") || Ot(s, "skew")) return "deg"
}

function En(s, c) {
    return B.fnc(s) ? s(c.target, c.id, c.total) : s
}

function _e(s, c) {
    return s.getAttribute(c)
}

function jn(s, c, g) {
    var y = Ye(c);
    if (Nn([g, "deg", "rad", "turn"], y)) return c;
    var b = Yt.CSS[c + g];
    if (!B.und(b)) return b;
    var C = 100,
        N = document.createElement(s.tagName),
        P = s.parentNode && s.parentNode !== document ? s.parentNode : document.body;
    P.appendChild(N), N.style.position = "absolute", N.style.width = C + g;
    var x = C / N.offsetWidth;
    P.removeChild(N);
    var U = x * parseFloat(c);
    return Yt.CSS[c + g] = U, U
}

function Ir(s, c, g) {
    if (c in s.style) {
        var y = c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            b = s.style[c] || getComputedStyle(s).getPropertyValue(y) || "0";
        return g ? jn(s, b, g) : b
    }
}

function On(s, c) {
    if (B.dom(s) && !B.inp(s) && (!B.nil(_e(s, c)) || B.svg(s) && s[c])) return "attribute";
    if (B.dom(s) && Nn(no, c)) return "transform";
    if (B.dom(s) && c !== "transform" && Ir(s, c)) return "css";
    if (s[c] != null) return "object"
}

function Hr(s) {
    if (B.dom(s)) {
        for (var c = s.style.transform || "", g = /(\w+)\(([^)]*)\)/g, y = new Map, b; b = g.exec(c);) y.set(b[1], b[2]);
        return y
    }
}

function co(s, c, g, y) {
    var b = Ot(c, "scale") ? 1 : 0 + fo(c),
        C = Hr(s).get(c) || b;
    return g && (g.transforms.list.set(c, C), g.transforms.last = c), y ? jn(s, C, y) : C
}

function Pn(s, c, g, y) {
    switch (On(s, c)) {
        case "transform":
            return co(s, c, y, g);
        case "css":
            return Ir(s, c, g);
        case "attribute":
            return _e(s, c);
        default:
            return s[c] || 0
    }
}

function Mn(s, c) {
    var g = /^(\*=|\+=|-=)/.exec(s);
    if (!g) return s;
    var y = Ye(s) || 0,
        b = parseFloat(c),
        C = parseFloat(s.replace(g[0], ""));
    switch (g[0][0]) {
        case "+":
            return b + C + y;
        case "-":
            return b - C + y;
        case "*":
            return b * C + y
    }
}

function Rr(s, c) {
    if (B.col(s)) return so(s);
    if (/\s/g.test(s)) return s;
    var g = Ye(s),
        y = g ? s.substr(0, s.length - g.length) : s;
    return c ? y + c : y
}

function qn(s, c) {
    return Math.sqrt(Math.pow(c.x - s.x, 2) + Math.pow(c.y - s.y, 2))
}

function lo(s) {
    return Math.PI * 2 * _e(s, "r")
}

function po(s) {
    return _e(s, "width") * 2 + _e(s, "height") * 2
}

function ho(s) {
    return qn({
        x: _e(s, "x1"),
        y: _e(s, "y1")
    }, {
        x: _e(s, "x2"),
        y: _e(s, "y2")
    })
}

function Fr(s) {
    for (var c = s.points, g = 0, y, b = 0; b < c.numberOfItems; b++) {
        var C = c.getItem(b);
        b > 0 && (g += qn(y, C)), y = C
    }
    return g
}

function go(s) {
    var c = s.points;
    return Fr(s) + qn(c.getItem(c.numberOfItems - 1), c.getItem(0))
}

function Br(s) {
    if (s.getTotalLength) return s.getTotalLength();
    switch (s.tagName.toLowerCase()) {
        case "circle":
            return lo(s);
        case "rect":
            return po(s);
        case "line":
            return ho(s);
        case "polyline":
            return Fr(s);
        case "polygon":
            return go(s)
    }
}

function vo(s) {
    var c = Br(s);
    return s.setAttribute("stroke-dasharray", c), c
}

function yo(s) {
    for (var c = s.parentNode; B.svg(c) && B.svg(c.parentNode);) c = c.parentNode;
    return c
}

function _r(s, c) {
    var g = c || {},
        y = g.el || yo(s),
        b = y.getBoundingClientRect(),
        C = _e(y, "viewBox"),
        N = b.width,
        P = b.height,
        x = g.viewBox || (C ? C.split(" ") : [0, 0, N, P]);
    return {
        el: y,
        viewBox: x,
        x: x[0] / 1,
        y: x[1] / 1,
        w: N,
        h: P,
        vW: x[2],
        vH: x[3]
    }
}

function mo(s, c) {
    var g = B.str(s) ? qr(s)[0] : s,
        y = c || 100;
    return function(b) {
        return {
            property: b,
            el: g,
            svg: _r(g),
            totalLength: Br(g) * (y / 100)
        }
    }
}

function bo(s, c, g) {
    function y(j) {
        j === void 0 && (j = 0);
        var I = c + j >= 1 ? c + j : 0;
        return s.el.getPointAtLength(I)
    }
    var b = _r(s.el, s.svg),
        C = y(),
        N = y(-1),
        P = y(1),
        x = g ? 1 : b.w / b.vW,
        U = g ? 1 : b.h / b.vH;
    switch (s.property) {
        case "x":
            return (C.x - b.x) * x;
        case "y":
            return (C.y - b.y) * U;
        case "angle":
            return Math.atan2(P.y - N.y, P.x - N.x) * 180 / Math.PI
    }
}

function Er(s, c) {
    var g = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        y = Rr(B.pth(s) ? s.totalLength : s, c) + "";
    return {
        original: y,
        numbers: y.match(g) ? y.match(g).map(Number) : [0],
        strings: B.str(s) || c ? y.split(g) : []
    }
}

function In(s) {
    var c = s ? Gt(B.arr(s) ? s.map(Sr) : Sr(s)) : [];
    return Qt(c, function(g, y, b) {
        return b.indexOf(g) === y
    })
}

function Wr(s) {
    var c = In(s);
    return c.map(function(g, y) {
        return {
            target: g,
            id: y,
            total: c.length,
            transforms: {
                list: Hr(g)
            }
        }
    })
}

function xo(s, c) {
    var g = Ln(c);
    if (/^spring/.test(g.easing) && (g.duration = Pr(g.easing)), B.arr(s)) {
        var y = s.length,
            b = y === 2 && !B.obj(s[0]);
        b ? s = {
            value: s
        } : B.fnc(c.duration) || (g.duration = c.duration / y)
    }
    var C = B.arr(s) ? s : [s];
    return C.map(function(N, P) {
        var x = B.obj(N) && !B.pth(N) ? N : {
            value: N
        };
        return B.und(x.delay) && (x.delay = P ? 0 : c.delay), B.und(x.endDelay) && (x.endDelay = P === C.length - 1 ? c.endDelay : 0), x
    }).map(function(N) {
        return Xt(N, g)
    })
}

function To(s) {
    for (var c = Qt(Gt(s.map(function(C) {
            return Object.keys(C)
        })), function(C) {
            return B.key(C)
        }).reduce(function(C, N) {
            return C.indexOf(N) < 0 && C.push(N), C
        }, []), g = {}, y = function(C) {
            var N = c[C];
            g[N] = s.map(function(P) {
                var x = {};
                for (var U in P) B.key(U) ? U == N && (x.value = P[U]) : x[U] = P[U];
                return x
            })
        }, b = 0; b < c.length; b++) y(b);
    return g
}

function wo(s, c) {
    var g = [],
        y = c.keyframes;
    y && (c = Xt(To(y), c));
    for (var b in c) B.key(b) && g.push({
        name: b,
        tweens: xo(c[b], s)
    });
    return g
}

function Co(s, c) {
    var g = {};
    for (var y in s) {
        var b = En(s[y], c);
        B.arr(b) && (b = b.map(function(C) {
            return En(C, c)
        }), b.length === 1 && (b = b[0])), g[y] = b
    }
    return g.duration = parseFloat(g.duration), g.delay = parseFloat(g.delay), g
}

function So(s, c) {
    var g;
    return s.tweens.map(function(y) {
        var b = Co(y, c),
            C = b.value,
            N = B.arr(C) ? C[1] : C,
            P = Ye(N),
            x = Pn(c.target, s.name, P, c),
            U = g ? g.to.original : x,
            j = B.arr(C) ? C[0] : U,
            I = Ye(j) || Ye(x),
            Q = P || I;
        return B.und(N) && (N = U), b.from = Er(j, Q), b.to = Er(Mn(N, j), Q), b.start = g ? g.end : 0, b.end = b.start + b.delay + b.duration + b.endDelay, b.easing = Dn(b.easing, b.duration), b.isPath = B.pth(C), b.isPathTargetInsideSVG = b.isPath && B.svg(c.target), b.isColor = B.col(b.from.original), b.isColor && (b.round = 1), g = b, b
    })
}
var $r = {
    css: function(s, c, g) {
        return s.style[c] = g
    },
    attribute: function(s, c, g) {
        return s.setAttribute(c, g)
    },
    object: function(s, c, g) {
        return s[c] = g
    },
    transform: function(s, c, g, y, b) {
        if (y.list.set(c, g), c === y.last || b) {
            var C = "";
            y.list.forEach(function(N, P) {
                C += P + "(" + N + ") "
            }), s.style.transform = C
        }
    }
};

function zr(s, c) {
    var g = Wr(s);
    g.forEach(function(y) {
        for (var b in c) {
            var C = En(c[b], y),
                N = y.target,
                P = Ye(C),
                x = Pn(N, b, P, y),
                U = P || Ye(x),
                j = Mn(Rr(C, U), x),
                I = On(N, b);
            $r[I](N, b, j, y.transforms, !0)
        }
    })
}

function Eo(s, c) {
    var g = On(s.target, c.name);
    if (g) {
        var y = So(c, s),
            b = y[y.length - 1];
        return {
            type: g,
            property: c.name,
            animatable: s,
            tweens: y,
            duration: b.end,
            delay: y[0].delay,
            endDelay: b.endDelay
        }
    }
}

function Ao(s, c) {
    return Qt(Gt(s.map(function(g) {
        return c.map(function(y) {
            return Eo(g, y)
        })
    })), function(g) {
        return !B.und(g)
    })
}

function Vr(s, c) {
    var g = s.length,
        y = function(C) {
            return C.timelineOffset ? C.timelineOffset : 0
        },
        b = {};
    return b.duration = g ? Math.max.apply(Math, s.map(function(C) {
        return y(C) + C.duration
    })) : c.duration, b.delay = g ? Math.min.apply(Math, s.map(function(C) {
        return y(C) + C.delay
    })) : c.delay, b.endDelay = g ? b.duration - Math.max.apply(Math, s.map(function(C) {
        return y(C) + C.duration - C.endDelay
    })) : c.endDelay, b
}
var Ar = 0;

function ko(s) {
    var c = Sn(jr, s),
        g = Sn(kn, s),
        y = wo(g, s),
        b = Wr(s.targets),
        C = Ao(b, y),
        N = Vr(C, g),
        P = Ar;
    return Ar++, Xt(c, {
        id: P,
        children: [],
        animatables: b,
        animations: C,
        duration: N.duration,
        delay: N.delay,
        endDelay: N.endDelay
    })
}
var Re = [],
    Ur = function() {
        var s;

        function c() {
            !s && (!kr() || !ce.suspendWhenDocumentHidden) && Re.length > 0 && (s = requestAnimationFrame(g))
        }

        function g(b) {
            for (var C = Re.length, N = 0; N < C;) {
                var P = Re[N];
                P.paused ? (Re.splice(N, 1), C--) : (P.tick(b), N++)
            }
            s = N > 0 ? requestAnimationFrame(g) : void 0
        }

        function y() {
            ce.suspendWhenDocumentHidden && (kr() ? s = cancelAnimationFrame(s) : (Re.forEach(function(b) {
                return b._onDocumentVisibility()
            }), Ur()))
        }
        return typeof document < "u" && document.addEventListener("visibilitychange", y), c
    }();

function kr() {
    return !!document && document.hidden
}

function ce(s) {
    s === void 0 && (s = {});
    var c = 0,
        g = 0,
        y = 0,
        b, C = 0,
        N = null;

    function P(X) {
        var Y = window.Promise && new Promise(function(oe) {
            return N = oe
        });
        return X.finished = Y, Y
    }
    var x = ko(s);
    P(x);

    function U() {
        var X = x.direction;
        X !== "alternate" && (x.direction = X !== "normal" ? "normal" : "reverse"), x.reversed = !x.reversed, b.forEach(function(Y) {
            return Y.reversed = x.reversed
        })
    }

    function j(X) {
        return x.reversed ? x.duration - X : X
    }

    function I() {
        c = 0, g = j(x.currentTime) * (1 / ce.speed)
    }

    function Q(X, Y) {
        Y && Y.seek(X - Y.timelineOffset)
    }

    function fe(X) {
        if (x.reversePlayback)
            for (var oe = C; oe--;) Q(X, b[oe]);
        else
            for (var Y = 0; Y < C; Y++) Q(X, b[Y])
    }

    function q(X) {
        for (var Y = 0, oe = x.animations, Pe = oe.length; Y < Pe;) {
            var i = oe[Y],
                Me = i.animatable,
                we = i.tweens,
                Ce = we.length - 1,
                ue = we[Ce];
            Ce && (ue = Qt(we, function(Jt) {
                return X < Jt.end
            })[0] || ue);
            for (var We = Be(X - ue.start - ue.delay, 0, ue.duration) / ue.duration, he = isNaN(We) ? 1 : ue.easing(We), ve = ue.to.strings, Ke = ue.round, ft = [], Kt = ue.to.numbers.length, Qe = void 0, Je = 0; Je < Kt; Je++) {
                var Ze = void 0,
                    mt = ue.to.numbers[Je],
                    Se = ue.from.numbers[Je] || 0;
                ue.isPath ? Ze = bo(ue.value, he * mt, ue.isPathTargetInsideSVG) : Ze = Se + he * (mt - Se), Ke && (ue.isColor && Je > 2 || (Ze = Math.round(Ze * Ke) / Ke)), ft.push(Ze)
            }
            var Pt = ve.length;
            if (!Pt) Qe = ft[0];
            else {
                Qe = ve[0];
                for (var Ne = 0; Ne < Pt; Ne++) {
                    ve[Ne];
                    var et = ve[Ne + 1],
                        ct = ft[Ne];
                    isNaN(ct) || (et ? Qe += ct + et : Qe += ct + " ")
                }
            }
            $r[i.type](Me.target, i.property, Qe, Me.transforms), i.currentValue = Qe, Y++
        }
    }

    function L(X) {
        x[X] && !x.passThrough && x[X](x)
    }

    function Z() {
        x.remaining && x.remaining !== !0 && x.remaining--
    }

    function R(X) {
        var Y = x.duration,
            oe = x.delay,
            Pe = Y - x.endDelay,
            i = j(X);
        x.progress = Be(i / Y * 100, 0, 100), x.reversePlayback = i < x.currentTime, b && fe(i), !x.began && x.currentTime > 0 && (x.began = !0, L("begin")), !x.loopBegan && x.currentTime > 0 && (x.loopBegan = !0, L("loopBegin")), i <= oe && x.currentTime !== 0 && q(0), (i >= Pe && x.currentTime !== Y || !Y) && q(Y), i > oe && i < Pe ? (x.changeBegan || (x.changeBegan = !0, x.changeCompleted = !1, L("changeBegin")), L("change"), q(i)) : x.changeBegan && (x.changeCompleted = !0, x.changeBegan = !1, L("changeComplete")), x.currentTime = Be(i, 0, Y), x.began && L("update"), X >= Y && (g = 0, Z(), x.remaining ? (c = y, L("loopComplete"), x.loopBegan = !1, x.direction === "alternate" && U()) : (x.paused = !0, x.completed || (x.completed = !0, L("loopComplete"), L("complete"), !x.passThrough && "Promise" in window && (N(), P(x)))))
    }
    return x.reset = function() {
        var X = x.direction;
        x.passThrough = !1, x.currentTime = 0, x.progress = 0, x.paused = !0, x.began = !1, x.loopBegan = !1, x.changeBegan = !1, x.completed = !1, x.changeCompleted = !1, x.reversePlayback = !1, x.reversed = X === "reverse", x.remaining = x.loop, b = x.children, C = b.length;
        for (var Y = C; Y--;) x.children[Y].reset();
        (x.reversed && x.loop !== !0 || X === "alternate" && x.loop === 1) && x.remaining++, q(x.reversed ? x.duration : 0)
    }, x._onDocumentVisibility = I, x.set = function(X, Y) {
        return zr(X, Y), x
    }, x.tick = function(X) {
        y = X, c || (c = y), R((y + (g - c)) * ce.speed)
    }, x.seek = function(X) {
        R(j(X))
    }, x.pause = function() {
        x.paused = !0, I()
    }, x.play = function() {
        x.paused && (x.completed && x.reset(), x.paused = !1, Re.push(x), I(), Ur())
    }, x.reverse = function() {
        U(), x.completed = !x.reversed, I()
    }, x.restart = function() {
        x.reset(), x.play()
    }, x.remove = function(X) {
        var Y = In(X);
        Yr(Y, x)
    }, x.reset(), x.autoplay && x.play(), x
}

function Dr(s, c) {
    for (var g = c.length; g--;) Nn(s, c[g].animatable.target) && c.splice(g, 1)
}

function Yr(s, c) {
    var g = c.animations,
        y = c.children;
    Dr(s, g);
    for (var b = y.length; b--;) {
        var C = y[b],
            N = C.animations;
        Dr(s, N), !N.length && !C.children.length && y.splice(b, 1)
    }!g.length && !y.length && c.pause()
}

function Do(s) {
    for (var c = In(s), g = Re.length; g--;) {
        var y = Re[g];
        Yr(c, y)
    }
}

function No(s, c) {
    c === void 0 && (c = {});
    var g = c.direction || "normal",
        y = c.easing ? Dn(c.easing) : null,
        b = c.grid,
        C = c.axis,
        N = c.from || 0,
        P = N === "first",
        x = N === "center",
        U = N === "last",
        j = B.arr(s),
        I = parseFloat(j ? s[0] : s),
        Q = j ? parseFloat(s[1]) : 0,
        fe = Ye(j ? s[1] : s) || 0,
        q = c.start || 0 + (j ? I : 0),
        L = [],
        Z = 0;
    return function(R, X, Y) {
        if (P && (N = 0), x && (N = (Y - 1) / 2), U && (N = Y - 1), !L.length) {
            for (var oe = 0; oe < Y; oe++) {
                if (!b) L.push(Math.abs(N - oe));
                else {
                    var Pe = x ? (b[0] - 1) / 2 : N % b[0],
                        i = x ? (b[1] - 1) / 2 : Math.floor(N / b[0]),
                        Me = oe % b[0],
                        we = Math.floor(oe / b[0]),
                        Ce = Pe - Me,
                        ue = i - we,
                        We = Math.sqrt(Ce * Ce + ue * ue);
                    C === "x" && (We = -Ce), C === "y" && (We = -ue), L.push(We)
                }
                Z = Math.max.apply(Math, L)
            }
            y && (L = L.map(function(ve) {
                return y(ve / Z) * Z
            })), g === "reverse" && (L = L.map(function(ve) {
                return C ? ve < 0 ? ve * -1 : -ve : Math.abs(Z - ve)
            }))
        }
        var he = j ? (Q - I) / Z : I;
        return q + he * (Math.round(L[X] * 100) / 100) + fe
    }
}

function Lo(s) {
    s === void 0 && (s = {});
    var c = ce(s);
    return c.duration = 0, c.add = function(g, y) {
        var b = Re.indexOf(c),
            C = c.children;
        b > -1 && Re.splice(b, 1);

        function N(Q) {
            Q.passThrough = !0
        }
        for (var P = 0; P < C.length; P++) N(C[P]);
        var x = Xt(g, Sn(kn, s));
        x.targets = x.targets || s.targets;
        var U = c.duration;
        x.autoplay = !1, x.direction = c.direction, x.timelineOffset = B.und(y) ? U : Mn(y, U), N(c), c.seek(x.timelineOffset);
        var j = ce(x);
        N(j), C.push(j);
        var I = Vr(C, s);
        return c.delay = I.delay, c.endDelay = I.endDelay, c.duration = I.duration, c.seek(0), c.reset(), c.autoplay && c.play(), c
    }, c
}
ce.version = "3.2.1";
ce.speed = 1;
ce.suspendWhenDocumentHidden = !0;
ce.running = Re;
ce.remove = Do;
ce.get = Pn;
ce.set = zr;
ce.convertPx = jn;
ce.path = mo;
ce.setDashoffset = vo;
ce.stagger = No;
ce.timeline = Lo;
ce.easing = Dn;
ce.penner = Mr;
ce.random = function(s, c) {
    return Math.floor(Math.random() * (c - s + 1)) + s
};
var jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Oo(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s
}
var Qr = {
    exports: {}
};
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */
(function(s) {
    (function(c, g) {
        s.exports = c.document ? g(c, !0) : function(y) {
            if (!y.document) throw new Error("jQuery requires a window with a document");
            return g(y)
        }
    })(typeof window < "u" ? window : jo, function(c, g) {
        var y = [],
            b = Object.getPrototypeOf,
            C = y.slice,
            N = y.flat ? function(e) {
                return y.flat.call(e)
            } : function(e) {
                return y.concat.apply([], e)
            },
            P = y.push,
            x = y.indexOf,
            U = {},
            j = U.toString,
            I = U.hasOwnProperty,
            Q = I.toString,
            fe = Q.call(Object),
            q = {},
            L = function(t) {
                return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function"
            },
            Z = function(t) {
                return t != null && t === t.window
            },
            R = c.document,
            X = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function Y(e, t, n) {
            n = n || R;
            var r, o, a = n.createElement("script");
            if (a.text = e, t)
                for (r in X) o = t[r] || t.getAttribute && t.getAttribute(r), o && a.setAttribute(r, o);
            n.head.appendChild(a).parentNode.removeChild(a)
        }

        function oe(e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? U[j.call(e)] || "object" : typeof e
        }
        var Pe = "3.6.4",
            i = function(e, t) {
                return new i.fn.init(e, t)
            };
        i.fn = i.prototype = {
            jquery: Pe,
            constructor: i,
            length: 0,
            toArray: function() {
                return C.call(this)
            },
            get: function(e) {
                return e == null ? C.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = i.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return i.each(this, e)
            },
            map: function(e) {
                return this.pushStack(i.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(C.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(i.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(i.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: P,
            sort: y.sort,
            splice: y.splice
        }, i.extend = i.fn.extend = function() {
            var e, t, n, r, o, a, u = arguments[0] || {},
                p = 1,
                l = arguments.length,
                m = !1;
            for (typeof u == "boolean" && (m = u, u = arguments[p] || {}, p++), typeof u != "object" && !L(u) && (u = {}), p === l && (u = this, p--); p < l; p++)
                if ((e = arguments[p]) != null)
                    for (t in e) r = e[t], !(t === "__proto__" || u === r) && (m && r && (i.isPlainObject(r) || (o = Array.isArray(r))) ? (n = u[t], o && !Array.isArray(n) ? a = [] : !o && !i.isPlainObject(n) ? a = {} : a = n, o = !1, u[t] = i.extend(m, a, r)) : r !== void 0 && (u[t] = r));
            return u
        }, i.extend({
            expando: "jQuery" + (Pe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !e || j.call(e) !== "[object Object]" ? !1 : (t = b(e), t ? (n = I.call(t, "constructor") && t.constructor, typeof n == "function" && Q.call(n) === fe) : !0)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                Y(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (Me(e))
                    for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return e != null && (Me(Object(e)) ? i.merge(n, typeof e == "string" ? [e] : e) : P.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return t == null ? -1 : x.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r, o = [], a = 0, u = e.length, p = !n; a < u; a++) r = !t(e[a], a), r !== p && o.push(e[a]);
                return o
            },
            map: function(e, t, n) {
                var r, o, a = 0,
                    u = [];
                if (Me(e))
                    for (r = e.length; a < r; a++) o = t(e[a], a, n), o != null && u.push(o);
                else
                    for (a in e) o = t(e[a], a, n), o != null && u.push(o);
                return N(u)
            },
            guid: 1,
            support: q
        }), typeof Symbol == "function" && (i.fn[Symbol.iterator] = y[Symbol.iterator]), i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            U["[object " + t + "]"] = t.toLowerCase()
        });

        function Me(e) {
            var t = !!e && "length" in e && e.length,
                n = oe(e);
            return L(e) || Z(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
        }
        var we = function(e) {
            var t, n, r, o, a, u, p, l, m, w, k, T, S, F, K, H, de, le, Ee, ne = "sizzle" + 1 * new Date,
                G = e.document,
                xe = 0,
                ee = 0,
                se = $t(),
                kt = $t(),
                Bt = $t(),
                Ae = $t(),
                it = function(f, d) {
                    return f === d && (k = !0), 0
                },
                ot = {}.hasOwnProperty,
                Te = [],
                Ge = Te.pop,
                je = Te.push,
                Xe = Te.push,
                gr = Te.slice,
                at = function(f, d) {
                    for (var h = 0, E = f.length; h < E; h++)
                        if (f[h] === d) return h;
                    return -1
                },
                gn = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                te = "[\\x20\\t\\r\\n\\f]",
                ut = "(?:\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                vr = "\\[" + te + "*(" + ut + ")(?:" + te + "*([*^$|!~]?=)" + te + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + ut + "))|)" + te + "*\\]",
                vn = ":(" + ut + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + vr + ")*)|.*)\\)|)",
                Bi = new RegExp(te + "+", "g"),
                _t = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                _i = new RegExp("^" + te + "*," + te + "*"),
                yr = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                Wi = new RegExp(te + "|>"),
                $i = new RegExp(vn),
                zi = new RegExp("^" + ut + "$"),
                Wt = {
                    ID: new RegExp("^#(" + ut + ")"),
                    CLASS: new RegExp("^\\.(" + ut + ")"),
                    TAG: new RegExp("^(" + ut + "|[*])"),
                    ATTR: new RegExp("^" + vr),
                    PSEUDO: new RegExp("^" + vn),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + gn + ")$", "i"),
                    needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
                },
                Vi = /HTML$/i,
                Ui = /^(?:input|select|textarea|button)$/i,
                Yi = /^h\d$/i,
                Dt = /^[^{]+\{\s*\[native \w/,
                Qi = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yn = /[+~]/,
                Ve = new RegExp("\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])", "g"),
                Ue = function(f, d) {
                    var h = "0x" + f.slice(1) - 65536;
                    return d || (h < 0 ? String.fromCharCode(h + 65536) : String.fromCharCode(h >> 10 | 55296, h & 1023 | 56320))
                },
                mr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                br = function(f, d) {
                    return d ? f === "\0" ? "�" : f.slice(0, -1) + "\\" + f.charCodeAt(f.length - 1).toString(16) + " " : "\\" + f
                },
                xr = function() {
                    T()
                },
                Gi = Vt(function(f) {
                    return f.disabled === !0 && f.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Xe.apply(Te = gr.call(G.childNodes), G.childNodes), Te[G.childNodes.length].nodeType
            } catch {
                Xe = {
                    apply: Te.length ? function(d, h) {
                        je.apply(d, gr.call(h))
                    } : function(d, h) {
                        for (var E = d.length, v = 0; d[E++] = h[v++];);
                        d.length = E - 1
                    }
                }
            }

            function re(f, d, h, E) {
                var v, A, D, O, M, $, _, V = d && d.ownerDocument,
                    J = d ? d.nodeType : 9;
                if (h = h || [], typeof f != "string" || !f || J !== 1 && J !== 9 && J !== 11) return h;
                if (!E && (T(d), d = d || S, K)) {
                    if (J !== 11 && (M = Qi.exec(f)))
                        if (v = M[1]) {
                            if (J === 9)
                                if (D = d.getElementById(v)) {
                                    if (D.id === v) return h.push(D), h
                                } else return h;
                            else if (V && (D = V.getElementById(v)) && Ee(d, D) && D.id === v) return h.push(D), h
                        } else {
                            if (M[2]) return Xe.apply(h, d.getElementsByTagName(f)), h;
                            if ((v = M[3]) && n.getElementsByClassName && d.getElementsByClassName) return Xe.apply(h, d.getElementsByClassName(v)), h
                        } if (n.qsa && !Ae[f + " "] && (!H || !H.test(f)) && (J !== 1 || d.nodeName.toLowerCase() !== "object")) {
                        if (_ = f, V = d, J === 1 && (Wi.test(f) || yr.test(f))) {
                            for (V = yn.test(f) && bn(d.parentNode) || d, (V !== d || !n.scope) && ((O = d.getAttribute("id")) ? O = O.replace(mr, br) : d.setAttribute("id", O = ne)), $ = u(f), A = $.length; A--;) $[A] = (O ? "#" + O : ":scope") + " " + zt($[A]);
                            _ = $.join(",")
                        }
                        try {
                            return Xe.apply(h, V.querySelectorAll(_)), h
                        } catch {
                            Ae(f, !0)
                        } finally {
                            O === ne && d.removeAttribute("id")
                        }
                    }
                }
                return l(f.replace(_t, "$1"), d, h, E)
            }

            function $t() {
                var f = [];

                function d(h, E) {
                    return f.push(h + " ") > r.cacheLength && delete d[f.shift()], d[h + " "] = E
                }
                return d
            }

            function Ie(f) {
                return f[ne] = !0, f
            }

            function Oe(f) {
                var d = S.createElement("fieldset");
                try {
                    return !!f(d)
                } catch {
                    return !1
                } finally {
                    d.parentNode && d.parentNode.removeChild(d), d = null
                }
            }

            function mn(f, d) {
                for (var h = f.split("|"), E = h.length; E--;) r.attrHandle[h[E]] = d
            }

            function Tr(f, d) {
                var h = d && f,
                    E = h && f.nodeType === 1 && d.nodeType === 1 && f.sourceIndex - d.sourceIndex;
                if (E) return E;
                if (h) {
                    for (; h = h.nextSibling;)
                        if (h === d) return -1
                }
                return f ? 1 : -1
            }

            function Xi(f) {
                return function(d) {
                    var h = d.nodeName.toLowerCase();
                    return h === "input" && d.type === f
                }
            }

            function Ki(f) {
                return function(d) {
                    var h = d.nodeName.toLowerCase();
                    return (h === "input" || h === "button") && d.type === f
                }
            }

            function wr(f) {
                return function(d) {
                    return "form" in d ? d.parentNode && d.disabled === !1 ? "label" in d ? "label" in d.parentNode ? d.parentNode.disabled === f : d.disabled === f : d.isDisabled === f || d.isDisabled !== !f && Gi(d) === f : d.disabled === f : "label" in d ? d.disabled === f : !1
                }
            }

            function st(f) {
                return Ie(function(d) {
                    return d = +d, Ie(function(h, E) {
                        for (var v, A = f([], h.length, d), D = A.length; D--;) h[v = A[D]] && (h[v] = !(E[v] = h[v]))
                    })
                })
            }

            function bn(f) {
                return f && typeof f.getElementsByTagName < "u" && f
            }
            n = re.support = {}, a = re.isXML = function(f) {
                var d = f && f.namespaceURI,
                    h = f && (f.ownerDocument || f).documentElement;
                return !Vi.test(d || h && h.nodeName || "HTML")
            }, T = re.setDocument = function(f) {
                var d, h, E = f ? f.ownerDocument || f : G;
                return E == S || E.nodeType !== 9 || !E.documentElement || (S = E, F = S.documentElement, K = !a(S), G != S && (h = S.defaultView) && h.top !== h && (h.addEventListener ? h.addEventListener("unload", xr, !1) : h.attachEvent && h.attachEvent("onunload", xr)), n.scope = Oe(function(v) {
                    return F.appendChild(v).appendChild(S.createElement("div")), typeof v.querySelectorAll < "u" && !v.querySelectorAll(":scope fieldset div").length
                }), n.cssHas = Oe(function() {
                    try {
                        return S.querySelector(":has(*,:jqfake)"), !1
                    } catch {
                        return !0
                    }
                }), n.attributes = Oe(function(v) {
                    return v.className = "i", !v.getAttribute("className")
                }), n.getElementsByTagName = Oe(function(v) {
                    return v.appendChild(S.createComment("")), !v.getElementsByTagName("*").length
                }), n.getElementsByClassName = Dt.test(S.getElementsByClassName), n.getById = Oe(function(v) {
                    return F.appendChild(v).id = ne, !S.getElementsByName || !S.getElementsByName(ne).length
                }), n.getById ? (r.filter.ID = function(v) {
                    var A = v.replace(Ve, Ue);
                    return function(D) {
                        return D.getAttribute("id") === A
                    }
                }, r.find.ID = function(v, A) {
                    if (typeof A.getElementById < "u" && K) {
                        var D = A.getElementById(v);
                        return D ? [D] : []
                    }
                }) : (r.filter.ID = function(v) {
                    var A = v.replace(Ve, Ue);
                    return function(D) {
                        var O = typeof D.getAttributeNode < "u" && D.getAttributeNode("id");
                        return O && O.value === A
                    }
                }, r.find.ID = function(v, A) {
                    if (typeof A.getElementById < "u" && K) {
                        var D, O, M, $ = A.getElementById(v);
                        if ($) {
                            if (D = $.getAttributeNode("id"), D && D.value === v) return [$];
                            for (M = A.getElementsByName(v), O = 0; $ = M[O++];)
                                if (D = $.getAttributeNode("id"), D && D.value === v) return [$]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(v, A) {
                    if (typeof A.getElementsByTagName < "u") return A.getElementsByTagName(v);
                    if (n.qsa) return A.querySelectorAll(v)
                } : function(v, A) {
                    var D, O = [],
                        M = 0,
                        $ = A.getElementsByTagName(v);
                    if (v === "*") {
                        for (; D = $[M++];) D.nodeType === 1 && O.push(D);
                        return O
                    }
                    return $
                }, r.find.CLASS = n.getElementsByClassName && function(v, A) {
                    if (typeof A.getElementsByClassName < "u" && K) return A.getElementsByClassName(v)
                }, de = [], H = [], (n.qsa = Dt.test(S.querySelectorAll)) && (Oe(function(v) {
                    var A;
                    F.appendChild(v).innerHTML = "<a id='" + ne + "'></a><select id='" + ne + "-\r\\' msallowcapture=''><option selected=''></option></select>", v.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + te + `*(?:''|"")`), v.querySelectorAll("[selected]").length || H.push("\\[" + te + "*(?:value|" + gn + ")"), v.querySelectorAll("[id~=" + ne + "-]").length || H.push("~="), A = S.createElement("input"), A.setAttribute("name", ""), v.appendChild(A), v.querySelectorAll("[name='']").length || H.push("\\[" + te + "*name" + te + "*=" + te + `*(?:''|"")`), v.querySelectorAll(":checked").length || H.push(":checked"), v.querySelectorAll("a#" + ne + "+*").length || H.push(".#.+[+~]"), v.querySelectorAll("\\\f"), H.push("[\\r\\n\\f]")
                }), Oe(function(v) {
                    v.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var A = S.createElement("input");
                    A.setAttribute("type", "hidden"), v.appendChild(A).setAttribute("name", "D"), v.querySelectorAll("[name=d]").length && H.push("name" + te + "*[*^$|!~]?="), v.querySelectorAll(":enabled").length !== 2 && H.push(":enabled", ":disabled"), F.appendChild(v).disabled = !0, v.querySelectorAll(":disabled").length !== 2 && H.push(":enabled", ":disabled"), v.querySelectorAll("*,:x"), H.push(",.*:")
                })), (n.matchesSelector = Dt.test(le = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && Oe(function(v) {
                    n.disconnectedMatch = le.call(v, "*"), le.call(v, "[s!='']:x"), de.push("!=", vn)
                }), n.cssHas || H.push(":has"), H = H.length && new RegExp(H.join("|")), de = de.length && new RegExp(de.join("|")), d = Dt.test(F.compareDocumentPosition), Ee = d || Dt.test(F.contains) ? function(v, A) {
                    var D = v.nodeType === 9 && v.documentElement || v,
                        O = A && A.parentNode;
                    return v === O || !!(O && O.nodeType === 1 && (D.contains ? D.contains(O) : v.compareDocumentPosition && v.compareDocumentPosition(O) & 16))
                } : function(v, A) {
                    if (A) {
                        for (; A = A.parentNode;)
                            if (A === v) return !0
                    }
                    return !1
                }, it = d ? function(v, A) {
                    if (v === A) return k = !0, 0;
                    var D = !v.compareDocumentPosition - !A.compareDocumentPosition;
                    return D || (D = (v.ownerDocument || v) == (A.ownerDocument || A) ? v.compareDocumentPosition(A) : 1, D & 1 || !n.sortDetached && A.compareDocumentPosition(v) === D ? v == S || v.ownerDocument == G && Ee(G, v) ? -1 : A == S || A.ownerDocument == G && Ee(G, A) ? 1 : w ? at(w, v) - at(w, A) : 0 : D & 4 ? -1 : 1)
                } : function(v, A) {
                    if (v === A) return k = !0, 0;
                    var D, O = 0,
                        M = v.parentNode,
                        $ = A.parentNode,
                        _ = [v],
                        V = [A];
                    if (!M || !$) return v == S ? -1 : A == S ? 1 : M ? -1 : $ ? 1 : w ? at(w, v) - at(w, A) : 0;
                    if (M === $) return Tr(v, A);
                    for (D = v; D = D.parentNode;) _.unshift(D);
                    for (D = A; D = D.parentNode;) V.unshift(D);
                    for (; _[O] === V[O];) O++;
                    return O ? Tr(_[O], V[O]) : _[O] == G ? -1 : V[O] == G ? 1 : 0
                }), S
            }, re.matches = function(f, d) {
                return re(f, null, null, d)
            }, re.matchesSelector = function(f, d) {
                if (T(f), n.matchesSelector && K && !Ae[d + " "] && (!de || !de.test(d)) && (!H || !H.test(d))) try {
                    var h = le.call(f, d);
                    if (h || n.disconnectedMatch || f.document && f.document.nodeType !== 11) return h
                } catch {
                    Ae(d, !0)
                }
                return re(d, S, null, [f]).length > 0
            }, re.contains = function(f, d) {
                return (f.ownerDocument || f) != S && T(f), Ee(f, d)
            }, re.attr = function(f, d) {
                (f.ownerDocument || f) != S && T(f);
                var h = r.attrHandle[d.toLowerCase()],
                    E = h && ot.call(r.attrHandle, d.toLowerCase()) ? h(f, d, !K) : void 0;
                return E !== void 0 ? E : n.attributes || !K ? f.getAttribute(d) : (E = f.getAttributeNode(d)) && E.specified ? E.value : null
            }, re.escape = function(f) {
                return (f + "").replace(mr, br)
            }, re.error = function(f) {
                throw new Error("Syntax error, unrecognized expression: " + f)
            }, re.uniqueSort = function(f) {
                var d, h = [],
                    E = 0,
                    v = 0;
                if (k = !n.detectDuplicates, w = !n.sortStable && f.slice(0), f.sort(it), k) {
                    for (; d = f[v++];) d === f[v] && (E = h.push(v));
                    for (; E--;) f.splice(h[E], 1)
                }
                return w = null, f
            }, o = re.getText = function(f) {
                var d, h = "",
                    E = 0,
                    v = f.nodeType;
                if (v) {
                    if (v === 1 || v === 9 || v === 11) {
                        if (typeof f.textContent == "string") return f.textContent;
                        for (f = f.firstChild; f; f = f.nextSibling) h += o(f)
                    } else if (v === 3 || v === 4) return f.nodeValue
                } else
                    for (; d = f[E++];) h += o(d);
                return h
            }, r = re.selectors = {
                cacheLength: 50,
                createPseudo: Ie,
                match: Wt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(f) {
                        return f[1] = f[1].replace(Ve, Ue), f[3] = (f[3] || f[4] || f[5] || "").replace(Ve, Ue), f[2] === "~=" && (f[3] = " " + f[3] + " "), f.slice(0, 4)
                    },
                    CHILD: function(f) {
                        return f[1] = f[1].toLowerCase(), f[1].slice(0, 3) === "nth" ? (f[3] || re.error(f[0]), f[4] = +(f[4] ? f[5] + (f[6] || 1) : 2 * (f[3] === "even" || f[3] === "odd")), f[5] = +(f[7] + f[8] || f[3] === "odd")) : f[3] && re.error(f[0]), f
                    },
                    PSEUDO: function(f) {
                        var d, h = !f[6] && f[2];
                        return Wt.CHILD.test(f[0]) ? null : (f[3] ? f[2] = f[4] || f[5] || "" : h && $i.test(h) && (d = u(h, !0)) && (d = h.indexOf(")", h.length - d) - h.length) && (f[0] = f[0].slice(0, d), f[2] = h.slice(0, d)), f.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(f) {
                        var d = f.replace(Ve, Ue).toLowerCase();
                        return f === "*" ? function() {
                            return !0
                        } : function(h) {
                            return h.nodeName && h.nodeName.toLowerCase() === d
                        }
                    },
                    CLASS: function(f) {
                        var d = se[f + " "];
                        return d || (d = new RegExp("(^|" + te + ")" + f + "(" + te + "|$)")) && se(f, function(h) {
                            return d.test(typeof h.className == "string" && h.className || typeof h.getAttribute < "u" && h.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(f, d, h) {
                        return function(E) {
                            var v = re.attr(E, f);
                            return v == null ? d === "!=" : d ? (v += "", d === "=" ? v === h : d === "!=" ? v !== h : d === "^=" ? h && v.indexOf(h) === 0 : d === "*=" ? h && v.indexOf(h) > -1 : d === "$=" ? h && v.slice(-h.length) === h : d === "~=" ? (" " + v.replace(Bi, " ") + " ").indexOf(h) > -1 : d === "|=" ? v === h || v.slice(0, h.length + 1) === h + "-" : !1) : !0
                        }
                    },
                    CHILD: function(f, d, h, E, v) {
                        var A = f.slice(0, 3) !== "nth",
                            D = f.slice(-4) !== "last",
                            O = d === "of-type";
                        return E === 1 && v === 0 ? function(M) {
                            return !!M.parentNode
                        } : function(M, $, _) {
                            var V, J, ie, z, pe, ge, ke = A !== D ? "nextSibling" : "previousSibling",
                                ae = M.parentNode,
                                Nt = O && M.nodeName.toLowerCase(),
                                Lt = !_ && !O,
                                De = !1;
                            if (ae) {
                                if (A) {
                                    for (; ke;) {
                                        for (z = M; z = z[ke];)
                                            if (O ? z.nodeName.toLowerCase() === Nt : z.nodeType === 1) return !1;
                                        ge = ke = f === "only" && !ge && "nextSibling"
                                    }
                                    return !0
                                }
                                if (ge = [D ? ae.firstChild : ae.lastChild], D && Lt) {
                                    for (z = ae, ie = z[ne] || (z[ne] = {}), J = ie[z.uniqueID] || (ie[z.uniqueID] = {}), V = J[f] || [], pe = V[0] === xe && V[1], De = pe && V[2], z = pe && ae.childNodes[pe]; z = ++pe && z && z[ke] || (De = pe = 0) || ge.pop();)
                                        if (z.nodeType === 1 && ++De && z === M) {
                                            J[f] = [xe, pe, De];
                                            break
                                        }
                                } else if (Lt && (z = M, ie = z[ne] || (z[ne] = {}), J = ie[z.uniqueID] || (ie[z.uniqueID] = {}), V = J[f] || [], pe = V[0] === xe && V[1], De = pe), De === !1)
                                    for (;
                                        (z = ++pe && z && z[ke] || (De = pe = 0) || ge.pop()) && !((O ? z.nodeName.toLowerCase() === Nt : z.nodeType === 1) && ++De && (Lt && (ie = z[ne] || (z[ne] = {}), J = ie[z.uniqueID] || (ie[z.uniqueID] = {}), J[f] = [xe, De]), z === M)););
                                return De -= v, De === E || De % E === 0 && De / E >= 0
                            }
                        }
                    },
                    PSEUDO: function(f, d) {
                        var h, E = r.pseudos[f] || r.setFilters[f.toLowerCase()] || re.error("unsupported pseudo: " + f);
                        return E[ne] ? E(d) : E.length > 1 ? (h = [f, f, "", d], r.setFilters.hasOwnProperty(f.toLowerCase()) ? Ie(function(v, A) {
                            for (var D, O = E(v, d), M = O.length; M--;) D = at(v, O[M]), v[D] = !(A[D] = O[M])
                        }) : function(v) {
                            return E(v, 0, h)
                        }) : E
                    }
                },
                pseudos: {
                    not: Ie(function(f) {
                        var d = [],
                            h = [],
                            E = p(f.replace(_t, "$1"));
                        return E[ne] ? Ie(function(v, A, D, O) {
                            for (var M, $ = E(v, null, O, []), _ = v.length; _--;)(M = $[_]) && (v[_] = !(A[_] = M))
                        }) : function(v, A, D) {
                            return d[0] = v, E(d, null, D, h), d[0] = null, !h.pop()
                        }
                    }),
                    has: Ie(function(f) {
                        return function(d) {
                            return re(f, d).length > 0
                        }
                    }),
                    contains: Ie(function(f) {
                        return f = f.replace(Ve, Ue),
                            function(d) {
                                return (d.textContent || o(d)).indexOf(f) > -1
                            }
                    }),
                    lang: Ie(function(f) {
                        return zi.test(f || "") || re.error("unsupported lang: " + f), f = f.replace(Ve, Ue).toLowerCase(),
                            function(d) {
                                var h;
                                do
                                    if (h = K ? d.lang : d.getAttribute("xml:lang") || d.getAttribute("lang")) return h = h.toLowerCase(), h === f || h.indexOf(f + "-") === 0; while ((d = d.parentNode) && d.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(f) {
                        var d = e.location && e.location.hash;
                        return d && d.slice(1) === f.id
                    },
                    root: function(f) {
                        return f === F
                    },
                    focus: function(f) {
                        return f === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(f.type || f.href || ~f.tabIndex)
                    },
                    enabled: wr(!1),
                    disabled: wr(!0),
                    checked: function(f) {
                        var d = f.nodeName.toLowerCase();
                        return d === "input" && !!f.checked || d === "option" && !!f.selected
                    },
                    selected: function(f) {
                        return f.parentNode && f.parentNode.selectedIndex, f.selected === !0
                    },
                    empty: function(f) {
                        for (f = f.firstChild; f; f = f.nextSibling)
                            if (f.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(f) {
                        return !r.pseudos.empty(f)
                    },
                    header: function(f) {
                        return Yi.test(f.nodeName)
                    },
                    input: function(f) {
                        return Ui.test(f.nodeName)
                    },
                    button: function(f) {
                        var d = f.nodeName.toLowerCase();
                        return d === "input" && f.type === "button" || d === "button"
                    },
                    text: function(f) {
                        var d;
                        return f.nodeName.toLowerCase() === "input" && f.type === "text" && ((d = f.getAttribute("type")) == null || d.toLowerCase() === "text")
                    },
                    first: st(function() {
                        return [0]
                    }),
                    last: st(function(f, d) {
                        return [d - 1]
                    }),
                    eq: st(function(f, d, h) {
                        return [h < 0 ? h + d : h]
                    }),
                    even: st(function(f, d) {
                        for (var h = 0; h < d; h += 2) f.push(h);
                        return f
                    }),
                    odd: st(function(f, d) {
                        for (var h = 1; h < d; h += 2) f.push(h);
                        return f
                    }),
                    lt: st(function(f, d, h) {
                        for (var E = h < 0 ? h + d : h > d ? d : h; --E >= 0;) f.push(E);
                        return f
                    }),
                    gt: st(function(f, d, h) {
                        for (var E = h < 0 ? h + d : h; ++E < d;) f.push(E);
                        return f
                    })
                }
            }, r.pseudos.nth = r.pseudos.eq;
            for (t in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = Xi(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = Ki(t);

            function Cr() {}
            Cr.prototype = r.filters = r.pseudos, r.setFilters = new Cr, u = re.tokenize = function(f, d) {
                var h, E, v, A, D, O, M, $ = kt[f + " "];
                if ($) return d ? 0 : $.slice(0);
                for (D = f, O = [], M = r.preFilter; D;) {
                    (!h || (E = _i.exec(D))) && (E && (D = D.slice(E[0].length) || D), O.push(v = [])), h = !1, (E = yr.exec(D)) && (h = E.shift(), v.push({
                        value: h,
                        type: E[0].replace(_t, " ")
                    }), D = D.slice(h.length));
                    for (A in r.filter)(E = Wt[A].exec(D)) && (!M[A] || (E = M[A](E))) && (h = E.shift(), v.push({
                        value: h,
                        type: A,
                        matches: E
                    }), D = D.slice(h.length));
                    if (!h) break
                }
                return d ? D.length : D ? re.error(f) : kt(f, O).slice(0)
            };

            function zt(f) {
                for (var d = 0, h = f.length, E = ""; d < h; d++) E += f[d].value;
                return E
            }

            function Vt(f, d, h) {
                var E = d.dir,
                    v = d.next,
                    A = v || E,
                    D = h && A === "parentNode",
                    O = ee++;
                return d.first ? function(M, $, _) {
                    for (; M = M[E];)
                        if (M.nodeType === 1 || D) return f(M, $, _);
                    return !1
                } : function(M, $, _) {
                    var V, J, ie, z = [xe, O];
                    if (_) {
                        for (; M = M[E];)
                            if ((M.nodeType === 1 || D) && f(M, $, _)) return !0
                    } else
                        for (; M = M[E];)
                            if (M.nodeType === 1 || D)
                                if (ie = M[ne] || (M[ne] = {}), J = ie[M.uniqueID] || (ie[M.uniqueID] = {}), v && v === M.nodeName.toLowerCase()) M = M[E] || M;
                                else {
                                    if ((V = J[A]) && V[0] === xe && V[1] === O) return z[2] = V[2];
                                    if (J[A] = z, z[2] = f(M, $, _)) return !0
                                } return !1
                }
            }

            function xn(f) {
                return f.length > 1 ? function(d, h, E) {
                    for (var v = f.length; v--;)
                        if (!f[v](d, h, E)) return !1;
                    return !0
                } : f[0]
            }

            function Ji(f, d, h) {
                for (var E = 0, v = d.length; E < v; E++) re(f, d[E], h);
                return h
            }

            function Ut(f, d, h, E, v) {
                for (var A, D = [], O = 0, M = f.length, $ = d != null; O < M; O++)(A = f[O]) && (!h || h(A, E, v)) && (D.push(A), $ && d.push(O));
                return D
            }

            function Tn(f, d, h, E, v, A) {
                return E && !E[ne] && (E = Tn(E)), v && !v[ne] && (v = Tn(v, A)), Ie(function(D, O, M, $) {
                    var _, V, J, ie = [],
                        z = [],
                        pe = O.length,
                        ge = D || Ji(d || "*", M.nodeType ? [M] : M, []),
                        ke = f && (D || !d) ? Ut(ge, ie, f, M, $) : ge,
                        ae = h ? v || (D ? f : pe || E) ? [] : O : ke;
                    if (h && h(ke, ae, M, $), E)
                        for (_ = Ut(ae, z), E(_, [], M, $), V = _.length; V--;)(J = _[V]) && (ae[z[V]] = !(ke[z[V]] = J));
                    if (D) {
                        if (v || f) {
                            if (v) {
                                for (_ = [], V = ae.length; V--;)(J = ae[V]) && _.push(ke[V] = J);
                                v(null, ae = [], _, $)
                            }
                            for (V = ae.length; V--;)(J = ae[V]) && (_ = v ? at(D, J) : ie[V]) > -1 && (D[_] = !(O[_] = J))
                        }
                    } else ae = Ut(ae === O ? ae.splice(pe, ae.length) : ae), v ? v(null, O, ae, $) : Xe.apply(O, ae)
                })
            }

            function wn(f) {
                for (var d, h, E, v = f.length, A = r.relative[f[0].type], D = A || r.relative[" "], O = A ? 1 : 0, M = Vt(function(V) {
                        return V === d
                    }, D, !0), $ = Vt(function(V) {
                        return at(d, V) > -1
                    }, D, !0), _ = [function(V, J, ie) {
                        var z = !A && (ie || J !== m) || ((d = J).nodeType ? M(V, J, ie) : $(V, J, ie));
                        return d = null, z
                    }]; O < v; O++)
                    if (h = r.relative[f[O].type]) _ = [Vt(xn(_), h)];
                    else {
                        if (h = r.filter[f[O].type].apply(null, f[O].matches), h[ne]) {
                            for (E = ++O; E < v && !r.relative[f[E].type]; E++);
                            return Tn(O > 1 && xn(_), O > 1 && zt(f.slice(0, O - 1).concat({
                                value: f[O - 2].type === " " ? "*" : ""
                            })).replace(_t, "$1"), h, O < E && wn(f.slice(O, E)), E < v && wn(f = f.slice(E)), E < v && zt(f))
                        }
                        _.push(h)
                    } return xn(_)
            }

            function Zi(f, d) {
                var h = d.length > 0,
                    E = f.length > 0,
                    v = function(A, D, O, M, $) {
                        var _, V, J, ie = 0,
                            z = "0",
                            pe = A && [],
                            ge = [],
                            ke = m,
                            ae = A || E && r.find.TAG("*", $),
                            Nt = xe += ke == null ? 1 : Math.random() || .1,
                            Lt = ae.length;
                        for ($ && (m = D == S || D || $); z !== Lt && (_ = ae[z]) != null; z++) {
                            if (E && _) {
                                for (V = 0, !D && _.ownerDocument != S && (T(_), O = !K); J = f[V++];)
                                    if (J(_, D || S, O)) {
                                        M.push(_);
                                        break
                                    } $ && (xe = Nt)
                            }
                            h && ((_ = !J && _) && ie--, A && pe.push(_))
                        }
                        if (ie += z, h && z !== ie) {
                            for (V = 0; J = d[V++];) J(pe, ge, D, O);
                            if (A) {
                                if (ie > 0)
                                    for (; z--;) pe[z] || ge[z] || (ge[z] = Ge.call(M));
                                ge = Ut(ge)
                            }
                            Xe.apply(M, ge), $ && !A && ge.length > 0 && ie + d.length > 1 && re.uniqueSort(M)
                        }
                        return $ && (xe = Nt, m = ke), pe
                    };
                return h ? Ie(v) : v
            }
            return p = re.compile = function(f, d) {
                var h, E = [],
                    v = [],
                    A = Bt[f + " "];
                if (!A) {
                    for (d || (d = u(f)), h = d.length; h--;) A = wn(d[h]), A[ne] ? E.push(A) : v.push(A);
                    A = Bt(f, Zi(v, E)), A.selector = f
                }
                return A
            }, l = re.select = function(f, d, h, E) {
                var v, A, D, O, M, $ = typeof f == "function" && f,
                    _ = !E && u(f = $.selector || f);
                if (h = h || [], _.length === 1) {
                    if (A = _[0] = _[0].slice(0), A.length > 2 && (D = A[0]).type === "ID" && d.nodeType === 9 && K && r.relative[A[1].type]) {
                        if (d = (r.find.ID(D.matches[0].replace(Ve, Ue), d) || [])[0], d) $ && (d = d.parentNode);
                        else return h;
                        f = f.slice(A.shift().value.length)
                    }
                    for (v = Wt.needsContext.test(f) ? 0 : A.length; v-- && (D = A[v], !r.relative[O = D.type]);)
                        if ((M = r.find[O]) && (E = M(D.matches[0].replace(Ve, Ue), yn.test(A[0].type) && bn(d.parentNode) || d))) {
                            if (A.splice(v, 1), f = E.length && zt(A), !f) return Xe.apply(h, E), h;
                            break
                        }
                }
                return ($ || p(f, _))(E, d, !K, h, !d || yn.test(f) && bn(d.parentNode) || d), h
            }, n.sortStable = ne.split("").sort(it).join("") === ne, n.detectDuplicates = !!k, T(), n.sortDetached = Oe(function(f) {
                return f.compareDocumentPosition(S.createElement("fieldset")) & 1
            }), Oe(function(f) {
                return f.innerHTML = "<a href='#'></a>", f.firstChild.getAttribute("href") === "#"
            }) || mn("type|href|height|width", function(f, d, h) {
                if (!h) return f.getAttribute(d, d.toLowerCase() === "type" ? 1 : 2)
            }), (!n.attributes || !Oe(function(f) {
                return f.innerHTML = "<input/>", f.firstChild.setAttribute("value", ""), f.firstChild.getAttribute("value") === ""
            })) && mn("value", function(f, d, h) {
                if (!h && f.nodeName.toLowerCase() === "input") return f.defaultValue
            }), Oe(function(f) {
                return f.getAttribute("disabled") == null
            }) || mn(gn, function(f, d, h) {
                var E;
                if (!h) return f[d] === !0 ? d.toLowerCase() : (E = f.getAttributeNode(d)) && E.specified ? E.value : null
            }), re
        }(c);
        i.find = we, i.expr = we.selectors, i.expr[":"] = i.expr.pseudos, i.uniqueSort = i.unique = we.uniqueSort, i.text = we.getText, i.isXMLDoc = we.isXML, i.contains = we.contains, i.escapeSelector = we.escape;
        var Ce = function(e, t, n) {
                for (var r = [], o = n !== void 0;
                    (e = e[t]) && e.nodeType !== 9;)
                    if (e.nodeType === 1) {
                        if (o && i(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            ue = function(e, t) {
                for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n
            },
            We = i.expr.match.needsContext;

        function he(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var ve = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function Ke(e, t, n) {
            return L(t) ? i.grep(e, function(r, o) {
                return !!t.call(r, o, r) !== n
            }) : t.nodeType ? i.grep(e, function(r) {
                return r === t !== n
            }) : typeof t != "string" ? i.grep(e, function(r) {
                return x.call(t, r) > -1 !== n
            }) : i.filter(t, e, n)
        }
        i.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? i.find.matchesSelector(r, e) ? [r] : [] : i.find.matches(e, i.grep(t, function(o) {
                return o.nodeType === 1
            }))
        }, i.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    o = this;
                if (typeof e != "string") return this.pushStack(i(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (i.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, o[t], n);
                return r > 1 ? i.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(Ke(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(Ke(this, e || [], !0))
            },
            is: function(e) {
                return !!Ke(this, typeof e == "string" && We.test(e) ? i(e) : e || [], !1).length
            }
        });
        var ft, Kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Qe = i.fn.init = function(e, t, n) {
                var r, o;
                if (!e) return this;
                if (n = n || ft, typeof e == "string")
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = Kt.exec(e), r && (r[1] || !t))
                        if (r[1]) {
                            if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : R, !0)), ve.test(r[1]) && i.isPlainObject(t))
                                for (r in t) L(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        } else return o = R.getElementById(r[2]), o && (this[0] = o, this.length = 1), this;
                else return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                else {
                    if (e.nodeType) return this[0] = e, this.length = 1, this;
                    if (L(e)) return n.ready !== void 0 ? n.ready(e) : e(i)
                }
                return i.makeArray(e, this)
            };
        Qe.prototype = i.fn, ft = i(R);
        var Je = /^(?:parents|prev(?:Until|All))/,
            Ze = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        i.fn.extend({
            has: function(e) {
                var t = i(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var r = 0; r < n; r++)
                        if (i.contains(this, t[r])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    o = this.length,
                    a = [],
                    u = typeof e != "string" && i(e);
                if (!We.test(e)) {
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (u ? u.index(n) > -1 : n.nodeType === 1 && i.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                }
                return this.pushStack(a.length > 1 ? i.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? typeof e == "string" ? x.call(i(e), this[0]) : x.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function mt(e, t) {
            for (;
                (e = e[t]) && e.nodeType !== 1;);
            return e
        }
        i.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return Ce(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Ce(e, "parentNode", n)
            },
            next: function(e) {
                return mt(e, "nextSibling")
            },
            prev: function(e) {
                return mt(e, "previousSibling")
            },
            nextAll: function(e) {
                return Ce(e, "nextSibling")
            },
            prevAll: function(e) {
                return Ce(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Ce(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Ce(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ue((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ue(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument != null && b(e.contentDocument) ? e.contentDocument : (he(e, "template") && (e = e.content || e), i.merge([], e.childNodes))
            }
        }, function(e, t) {
            i.fn[e] = function(n, r) {
                var o = i.map(this, t, n);
                return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (o = i.filter(r, o)), this.length > 1 && (Ze[e] || i.uniqueSort(o), Je.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var Se = /[^\x20\t\r\n\f]+/g;

        function Pt(e) {
            var t = {};
            return i.each(e.match(Se) || [], function(n, r) {
                t[r] = !0
            }), t
        }
        i.Callbacks = function(e) {
            e = typeof e == "string" ? Pt(e) : i.extend({}, e);
            var t, n, r, o, a = [],
                u = [],
                p = -1,
                l = function() {
                    for (o = o || e.once, r = t = !0; u.length; p = -1)
                        for (n = u.shift(); ++p < a.length;) a[p].apply(n[0], n[1]) === !1 && e.stopOnFalse && (p = a.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (n ? a = [] : a = "")
                },
                m = {
                    add: function() {
                        return a && (n && !t && (p = a.length - 1, u.push(n)), function w(k) {
                            i.each(k, function(T, S) {
                                L(S) ? (!e.unique || !m.has(S)) && a.push(S) : S && S.length && oe(S) !== "string" && w(S)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function() {
                        return i.each(arguments, function(w, k) {
                            for (var T;
                                (T = i.inArray(k, a, T)) > -1;) a.splice(T, 1), T <= p && p--
                        }), this
                    },
                    has: function(w) {
                        return w ? i.inArray(w, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return o = u = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return o = u = [], !n && !t && (a = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(w, k) {
                        return o || (k = k || [], k = [w, k.slice ? k.slice() : k], u.push(k), t || l()), this
                    },
                    fire: function() {
                        return m.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return m
        };

        function Ne(e) {
            return e
        }

        function et(e) {
            throw e
        }

        function ct(e, t, n, r) {
            var o;
            try {
                e && L(o = e.promise) ? o.call(e).done(t).fail(n) : e && L(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (a) {
                n.apply(void 0, [a])
            }
        }
        i.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                        ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(a) {
                            return r.then(null, a)
                        },
                        pipe: function() {
                            var a = arguments;
                            return i.Deferred(function(u) {
                                i.each(t, function(p, l) {
                                    var m = L(a[l[4]]) && a[l[4]];
                                    o[l[1]](function() {
                                        var w = m && m.apply(this, arguments);
                                        w && L(w.promise) ? w.promise().progress(u.notify).done(u.resolve).fail(u.reject) : u[l[0] + "With"](this, m ? [w] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        then: function(a, u, p) {
                            var l = 0;

                            function m(w, k, T, S) {
                                return function() {
                                    var F = this,
                                        K = arguments,
                                        H = function() {
                                            var le, Ee;
                                            if (!(w < l)) {
                                                if (le = T.apply(F, K), le === k.promise()) throw new TypeError("Thenable self-resolution");
                                                Ee = le && (typeof le == "object" || typeof le == "function") && le.then, L(Ee) ? S ? Ee.call(le, m(l, k, Ne, S), m(l, k, et, S)) : (l++, Ee.call(le, m(l, k, Ne, S), m(l, k, et, S), m(l, k, Ne, k.notifyWith))) : (T !== Ne && (F = void 0, K = [le]), (S || k.resolveWith)(F, K))
                                            }
                                        },
                                        de = S ? H : function() {
                                            try {
                                                H()
                                            } catch (le) {
                                                i.Deferred.exceptionHook && i.Deferred.exceptionHook(le, de.stackTrace), w + 1 >= l && (T !== et && (F = void 0, K = [le]), k.rejectWith(F, K))
                                            }
                                        };
                                    w ? de() : (i.Deferred.getStackHook && (de.stackTrace = i.Deferred.getStackHook()), c.setTimeout(de))
                                }
                            }
                            return i.Deferred(function(w) {
                                t[0][3].add(m(0, w, L(p) ? p : Ne, w.notifyWith)), t[1][3].add(m(0, w, L(a) ? a : Ne)), t[2][3].add(m(0, w, L(u) ? u : et))
                            }).promise()
                        },
                        promise: function(a) {
                            return a != null ? i.extend(a, r) : r
                        }
                    },
                    o = {};
                return i.each(t, function(a, u) {
                    var p = u[2],
                        l = u[5];
                    r[u[1]] = p.add, l && p.add(function() {
                        n = l
                    }, t[3 - a][2].disable, t[3 - a][3].disable, t[0][2].lock, t[0][3].lock), p.add(u[3].fire), o[u[0]] = function() {
                        return o[u[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[u[0] + "With"] = p.fireWith
                }), r.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = C.call(arguments),
                    a = i.Deferred(),
                    u = function(p) {
                        return function(l) {
                            r[p] = this, o[p] = arguments.length > 1 ? C.call(arguments) : l, --t || a.resolveWith(r, o)
                        }
                    };
                if (t <= 1 && (ct(e, a.done(u(n)).resolve, a.reject, !t), a.state() === "pending" || L(o[n] && o[n].then))) return a.then();
                for (; n--;) ct(o[n], u(n), a.reject);
                return a.promise()
            }
        });
        var Jt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        i.Deferred.exceptionHook = function(e, t) {
            c.console && c.console.warn && e && Jt.test(e.name) && c.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, i.readyException = function(e) {
            c.setTimeout(function() {
                throw e
            })
        };
        var Zt = i.Deferred();
        i.fn.ready = function(e) {
            return Zt.then(e).catch(function(t) {
                i.readyException(t)
            }), this
        }, i.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (e === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, !(e !== !0 && --i.readyWait > 0) && Zt.resolveWith(R, [i]))
            }
        }), i.ready.then = Zt.then;

        function Mt() {
            R.removeEventListener("DOMContentLoaded", Mt), c.removeEventListener("load", Mt), i.ready()
        }
        R.readyState === "complete" || R.readyState !== "loading" && !R.documentElement.doScroll ? c.setTimeout(i.ready) : (R.addEventListener("DOMContentLoaded", Mt), c.addEventListener("load", Mt));
        var $e = function(e, t, n, r, o, a, u) {
                var p = 0,
                    l = e.length,
                    m = n == null;
                if (oe(n) === "object") {
                    o = !0;
                    for (p in n) $e(e, t, p, n[p], !0, a, u)
                } else if (r !== void 0 && (o = !0, L(r) || (u = !0), m && (u ? (t.call(e, r), t = null) : (m = t, t = function(w, k, T) {
                        return m.call(i(w), T)
                    })), t))
                    for (; p < l; p++) t(e[p], n, u ? r : r.call(e[p], p, t(e[p], n)));
                return o ? e : m ? t.call(e) : l ? t(e[0], n) : a
            },
            Gr = /^-ms-/,
            Xr = /-([a-z])/g;

        function Kr(e, t) {
            return t.toUpperCase()
        }

        function Fe(e) {
            return e.replace(Gr, "ms-").replace(Xr, Kr)
        }
        var bt = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function xt() {
            this.expando = i.expando + xt.uid++
        }
        xt.uid = 1, xt.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, bt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if (typeof t == "string") o[Fe(t)] = n;
                else
                    for (r in t) o[Fe(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][Fe(t)]
            },
            access: function(e, t, n) {
                return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (r !== void 0) {
                    if (t !== void 0)
                        for (Array.isArray(t) ? t = t.map(Fe) : (t = Fe(t), t = t in r ? [t] : t.match(Se) || []), n = t.length; n--;) delete r[t[n]];
                    (t === void 0 || i.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== void 0 && !i.isEmptyObject(t)
            }
        };
        var W = new xt,
            ye = new xt,
            Jr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Zr = /[A-Z]/g;

        function ei(e) {
            return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Jr.test(e) ? JSON.parse(e) : e
        }

        function Hn(e, t, n) {
            var r;
            if (n === void 0 && e.nodeType === 1)
                if (r = "data-" + t.replace(Zr, "-$&").toLowerCase(), n = e.getAttribute(r), typeof n == "string") {
                    try {
                        n = ei(n)
                    } catch {}
                    ye.set(e, t, n)
                } else n = void 0;
            return n
        }
        i.extend({
            hasData: function(e) {
                return ye.hasData(e) || W.hasData(e)
            },
            data: function(e, t, n) {
                return ye.access(e, t, n)
            },
            removeData: function(e, t) {
                ye.remove(e, t)
            },
            _data: function(e, t, n) {
                return W.access(e, t, n)
            },
            _removeData: function(e, t) {
                W.remove(e, t)
            }
        }), i.fn.extend({
            data: function(e, t) {
                var n, r, o, a = this[0],
                    u = a && a.attributes;
                if (e === void 0) {
                    if (this.length && (o = ye.get(a), a.nodeType === 1 && !W.get(a, "hasDataAttrs"))) {
                        for (n = u.length; n--;) u[n] && (r = u[n].name, r.indexOf("data-") === 0 && (r = Fe(r.slice(5)), Hn(a, r, o[r])));
                        W.set(a, "hasDataAttrs", !0)
                    }
                    return o
                }
                return typeof e == "object" ? this.each(function() {
                    ye.set(this, e)
                }) : $e(this, function(p) {
                    var l;
                    if (a && p === void 0) return l = ye.get(a, e), l !== void 0 || (l = Hn(a, e), l !== void 0) ? l : void 0;
                    this.each(function() {
                        ye.set(this, e, p)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ye.remove(this, e)
                })
            }
        }), i.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = W.get(e, t), n && (!r || Array.isArray(n) ? r = W.access(e, t, i.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = i.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    a = i._queueHooks(e, t),
                    u = function() {
                        i.dequeue(e, t)
                    };
                o === "inprogress" && (o = n.shift(), r--), o && (t === "fx" && n.unshift("inprogress"), delete a.stop, o.call(e, u, a)), !r && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return W.get(e, n) || W.access(e, n, {
                    empty: i.Callbacks("once memory").add(function() {
                        W.remove(e, [t + "queue", n])
                    })
                })
            }
        }), i.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? i.queue(this[0], e) : t === void 0 ? this : this.each(function() {
                    var r = i.queue(this, e, t);
                    i._queueHooks(this, e), e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    i.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = i.Deferred(),
                    a = this,
                    u = this.length,
                    p = function() {
                        --r || o.resolveWith(a, [a])
                    };
                for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; u--;) n = W.get(a[u], e + "queueHooks"), n && n.empty && (r++, n.empty.add(p));
                return p(), o.promise(t)
            }
        });
        var Rn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Tt = new RegExp("^(?:([+-])=|)(" + Rn + ")([a-z%]*)$", "i"),
            ze = ["Top", "Right", "Bottom", "Left"],
            tt = R.documentElement,
            lt = function(e) {
                return i.contains(e.ownerDocument, e)
            },
            ti = {
                composed: !0
            };
        tt.getRootNode && (lt = function(e) {
            return i.contains(e.ownerDocument, e) || e.getRootNode(ti) === e.ownerDocument
        });
        var qt = function(e, t) {
            return e = t || e, e.style.display === "none" || e.style.display === "" && lt(e) && i.css(e, "display") === "none"
        };

        function Fn(e, t, n, r) {
            var o, a, u = 20,
                p = r ? function() {
                    return r.cur()
                } : function() {
                    return i.css(e, t, "")
                },
                l = p(),
                m = n && n[3] || (i.cssNumber[t] ? "" : "px"),
                w = e.nodeType && (i.cssNumber[t] || m !== "px" && +l) && Tt.exec(i.css(e, t));
            if (w && w[3] !== m) {
                for (l = l / 2, m = m || w[3], w = +l || 1; u--;) i.style(e, t, w + m), (1 - a) * (1 - (a = p() / l || .5)) <= 0 && (u = 0), w = w / a;
                w = w * 2, i.style(e, t, w + m), n = n || []
            }
            return n && (w = +w || +l || 0, o = n[1] ? w + (n[1] + 1) * n[2] : +n[2], r && (r.unit = m, r.start = w, r.end = o)), o
        }
        var Bn = {};

        function ni(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                o = Bn[r];
            return o || (t = n.body.appendChild(n.createElement(r)), o = i.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), Bn[r] = o, o)
        }

        function dt(e, t) {
            for (var n, r, o = [], a = 0, u = e.length; a < u; a++) r = e[a], r.style && (n = r.style.display, t ? (n === "none" && (o[a] = W.get(r, "display") || null, o[a] || (r.style.display = "")), r.style.display === "" && qt(r) && (o[a] = ni(r))) : n !== "none" && (o[a] = "none", W.set(r, "display", n)));
            for (a = 0; a < u; a++) o[a] != null && (e[a].style.display = o[a]);
            return e
        }
        i.fn.extend({
            show: function() {
                return dt(this, !0)
            },
            hide: function() {
                return dt(this)
            },
            toggle: function(e) {
                return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                    qt(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        var wt = /^(?:checkbox|radio)$/i,
            _n = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Wn = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var e = R.createDocumentFragment(),
                t = e.appendChild(R.createElement("div")),
                n = R.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", q.option = !!t.lastChild
        })();
        var Le = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td, q.option || (Le.optgroup = Le.option = [1, "<select multiple='multiple'>", "</select>"]);

        function me(e, t) {
            var n;
            return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && he(e, t) ? i.merge([e], n) : n
        }

        function en(e, t) {
            for (var n = 0, r = e.length; n < r; n++) W.set(e[n], "globalEval", !t || W.get(t[n], "globalEval"))
        }
        var ri = /<|&#?\w+;/;

        function $n(e, t, n, r, o) {
            for (var a, u, p, l, m, w, k = t.createDocumentFragment(), T = [], S = 0, F = e.length; S < F; S++)
                if (a = e[S], a || a === 0)
                    if (oe(a) === "object") i.merge(T, a.nodeType ? [a] : a);
                    else if (!ri.test(a)) T.push(t.createTextNode(a));
            else {
                for (u = u || k.appendChild(t.createElement("div")), p = (_n.exec(a) || ["", ""])[1].toLowerCase(), l = Le[p] || Le._default, u.innerHTML = l[1] + i.htmlPrefilter(a) + l[2], w = l[0]; w--;) u = u.lastChild;
                i.merge(T, u.childNodes), u = k.firstChild, u.textContent = ""
            }
            for (k.textContent = "", S = 0; a = T[S++];) {
                if (r && i.inArray(a, r) > -1) {
                    o && o.push(a);
                    continue
                }
                if (m = lt(a), u = me(k.appendChild(a), "script"), m && en(u), n)
                    for (w = 0; a = u[w++];) Wn.test(a.type || "") && n.push(a)
            }
            return k
        }
        var zn = /^([^.]*)(?:\.(.+)|)/;

        function pt() {
            return !0
        }

        function ht() {
            return !1
        }

        function ii(e, t) {
            return e === oi() == (t === "focus")
        }

        function oi() {
            try {
                return R.activeElement
            } catch {}
        }

        function tn(e, t, n, r, o, a) {
            var u, p;
            if (typeof t == "object") {
                typeof n != "string" && (r = r || n, n = void 0);
                for (p in t) tn(e, p, n, r, t[p], a);
                return e
            }
            if (r == null && o == null ? (o = n, r = n = void 0) : o == null && (typeof n == "string" ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1) o = ht;
            else if (!o) return e;
            return a === 1 && (u = o, o = function(l) {
                return i().off(l), u.apply(this, arguments)
            }, o.guid = u.guid || (u.guid = i.guid++)), e.each(function() {
                i.event.add(this, t, o, r, n)
            })
        }
        i.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var a, u, p, l, m, w, k, T, S, F, K, H = W.get(e);
                if (bt(e))
                    for (n.handler && (a = n, n = a.handler, o = a.selector), o && i.find.matchesSelector(tt, o), n.guid || (n.guid = i.guid++), (l = H.events) || (l = H.events = Object.create(null)), (u = H.handle) || (u = H.handle = function(de) {
                            return typeof i < "u" && i.event.triggered !== de.type ? i.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Se) || [""], m = t.length; m--;) p = zn.exec(t[m]) || [], S = K = p[1], F = (p[2] || "").split(".").sort(), S && (k = i.event.special[S] || {}, S = (o ? k.delegateType : k.bindType) || S, k = i.event.special[S] || {}, w = i.extend({
                        type: S,
                        origType: K,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && i.expr.match.needsContext.test(o),
                        namespace: F.join(".")
                    }, a), (T = l[S]) || (T = l[S] = [], T.delegateCount = 0, (!k.setup || k.setup.call(e, r, F, u) === !1) && e.addEventListener && e.addEventListener(S, u)), k.add && (k.add.call(e, w), w.handler.guid || (w.handler.guid = n.guid)), o ? T.splice(T.delegateCount++, 0, w) : T.push(w), i.event.global[S] = !0)
            },
            remove: function(e, t, n, r, o) {
                var a, u, p, l, m, w, k, T, S, F, K, H = W.hasData(e) && W.get(e);
                if (!(!H || !(l = H.events))) {
                    for (t = (t || "").match(Se) || [""], m = t.length; m--;) {
                        if (p = zn.exec(t[m]) || [], S = K = p[1], F = (p[2] || "").split(".").sort(), !S) {
                            for (S in l) i.event.remove(e, S + t[m], n, r, !0);
                            continue
                        }
                        for (k = i.event.special[S] || {}, S = (r ? k.delegateType : k.bindType) || S, T = l[S] || [], p = p[2] && new RegExp("(^|\\.)" + F.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = a = T.length; a--;) w = T[a], (o || K === w.origType) && (!n || n.guid === w.guid) && (!p || p.test(w.namespace)) && (!r || r === w.selector || r === "**" && w.selector) && (T.splice(a, 1), w.selector && T.delegateCount--, k.remove && k.remove.call(e, w));
                        u && !T.length && ((!k.teardown || k.teardown.call(e, F, H.handle) === !1) && i.removeEvent(e, S, H.handle), delete l[S])
                    }
                    i.isEmptyObject(l) && W.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, a, u, p = new Array(arguments.length),
                    l = i.event.fix(e),
                    m = (W.get(this, "events") || Object.create(null))[l.type] || [],
                    w = i.event.special[l.type] || {};
                for (p[0] = l, t = 1; t < arguments.length; t++) p[t] = arguments[t];
                if (l.delegateTarget = this, !(w.preDispatch && w.preDispatch.call(this, l) === !1)) {
                    for (u = i.event.handlers.call(this, l, m), t = 0;
                        (o = u[t++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = o.elem, n = 0;
                            (a = o.handlers[n++]) && !l.isImmediatePropagationStopped();)(!l.rnamespace || a.namespace === !1 || l.rnamespace.test(a.namespace)) && (l.handleObj = a, l.data = a.data, r = ((i.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, p), r !== void 0 && (l.result = r) === !1 && (l.preventDefault(), l.stopPropagation()));
                    return w.postDispatch && w.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, a, u, p = [],
                    l = t.delegateCount,
                    m = e.target;
                if (l && m.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; m !== this; m = m.parentNode || this)
                        if (m.nodeType === 1 && !(e.type === "click" && m.disabled === !0)) {
                            for (a = [], u = {}, n = 0; n < l; n++) r = t[n], o = r.selector + " ", u[o] === void 0 && (u[o] = r.needsContext ? i(o, this).index(m) > -1 : i.find(o, this, null, [m]).length), u[o] && a.push(r);
                            a.length && p.push({
                                elem: m,
                                handlers: a
                            })
                        }
                }
                return m = this, l < t.length && p.push({
                    elem: m,
                    handlers: t.slice(l)
                }), p
            },
            addProp: function(e, t) {
                Object.defineProperty(i.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: L(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(n) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: n
                        })
                    }
                })
            },
            fix: function(e) {
                return e[i.expando] ? e : new i.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return wt.test(t.type) && t.click && he(t, "input") && It(t, "click", pt), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return wt.test(t.type) && t.click && he(t, "input") && It(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return wt.test(t.type) && t.click && he(t, "input") && W.get(t, "click") || he(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        };

        function It(e, t, n) {
            if (!n) {
                W.get(e, t) === void 0 && i.event.add(e, t, pt);
                return
            }
            W.set(e, t, !1), i.event.add(e, t, {
                namespace: !1,
                handler: function(r) {
                    var o, a, u = W.get(this, t);
                    if (r.isTrigger & 1 && this[t]) {
                        if (u.length)(i.event.special[t] || {}).delegateType && r.stopPropagation();
                        else if (u = C.call(arguments), W.set(this, t, u), o = n(this, t), this[t](), a = W.get(this, t), u !== a || o ? W.set(this, t, !1) : a = {}, u !== a) return r.stopImmediatePropagation(), r.preventDefault(), a && a.value
                    } else u.length && (W.set(this, t, {
                        value: i.event.trigger(i.extend(u[0], i.Event.prototype), u.slice(1), this)
                    }), r.stopImmediatePropagation())
                }
            })
        }
        i.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, i.Event = function(e, t) {
            if (!(this instanceof i.Event)) return new i.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? pt : ht, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && i.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[i.expando] = !0
        }, i.Event.prototype = {
            constructor: i.Event,
            isDefaultPrevented: ht,
            isPropagationStopped: ht,
            isImmediatePropagationStopped: ht,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = pt, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = pt, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = pt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, i.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, i.event.addProp), i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            i.event.special[e] = {
                setup: function() {
                    return It(this, e, ii), !1
                },
                trigger: function() {
                    return It(this, e), !0
                },
                _default: function(n) {
                    return W.get(n.target, e)
                },
                delegateType: t
            }
        }), i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            i.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var r, o = this,
                        a = n.relatedTarget,
                        u = n.handleObj;
                    return (!a || a !== o && !i.contains(o, a)) && (n.type = u.origType, r = u.handler.apply(this, arguments), n.type = t), r
                }
            }
        }), i.fn.extend({
            on: function(e, t, n, r) {
                return tn(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return tn(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, i(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if (typeof e == "object") {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = ht), this.each(function() {
                    i.event.remove(this, e, n, t)
                })
            }
        });
        var ai = /<script|<style|<link/i,
            ui = /checked\s*(?:[^=]|=\s*.checked.)/i,
            si = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

        function Vn(e, t) {
            return he(e, "table") && he(t.nodeType !== 11 ? t : t.firstChild, "tr") && i(e).children("tbody")[0] || e
        }

        function fi(e) {
            return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
        }

        function ci(e) {
            return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Un(e, t) {
            var n, r, o, a, u, p, l;
            if (t.nodeType === 1) {
                if (W.hasData(e) && (a = W.get(e), l = a.events, l)) {
                    W.remove(t, "handle events");
                    for (o in l)
                        for (n = 0, r = l[o].length; n < r; n++) i.event.add(t, o, l[o][n])
                }
                ye.hasData(e) && (u = ye.access(e), p = i.extend({}, u), ye.set(t, p))
            }
        }

        function li(e, t) {
            var n = t.nodeName.toLowerCase();
            n === "input" && wt.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue)
        }

        function gt(e, t, n, r) {
            t = N(t);
            var o, a, u, p, l, m, w = 0,
                k = e.length,
                T = k - 1,
                S = t[0],
                F = L(S);
            if (F || k > 1 && typeof S == "string" && !q.checkClone && ui.test(S)) return e.each(function(K) {
                var H = e.eq(K);
                F && (t[0] = S.call(this, K, H.html())), gt(H, t, n, r)
            });
            if (k && (o = $n(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, o.childNodes.length === 1 && (o = a), a || r)) {
                for (u = i.map(me(o, "script"), fi), p = u.length; w < k; w++) l = o, w !== T && (l = i.clone(l, !0, !0), p && i.merge(u, me(l, "script"))), n.call(e[w], l, w);
                if (p)
                    for (m = u[u.length - 1].ownerDocument, i.map(u, ci), w = 0; w < p; w++) l = u[w], Wn.test(l.type || "") && !W.access(l, "globalEval") && i.contains(m, l) && (l.src && (l.type || "").toLowerCase() !== "module" ? i._evalUrl && !l.noModule && i._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, m) : Y(l.textContent.replace(si, ""), l, m))
            }
            return e
        }

        function Yn(e, t, n) {
            for (var r, o = t ? i.filter(t, e) : e, a = 0;
                (r = o[a]) != null; a++) !n && r.nodeType === 1 && i.cleanData(me(r)), r.parentNode && (n && lt(r) && en(me(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        i.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, o, a, u, p = e.cloneNode(!0),
                    l = lt(e);
                if (!q.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !i.isXMLDoc(e))
                    for (u = me(p), a = me(e), r = 0, o = a.length; r < o; r++) li(a[r], u[r]);
                if (t)
                    if (n)
                        for (a = a || me(e), u = u || me(p), r = 0, o = a.length; r < o; r++) Un(a[r], u[r]);
                    else Un(e, p);
                return u = me(p, "script"), u.length > 0 && en(u, !l && me(e, "script")), p
            },
            cleanData: function(e) {
                for (var t, n, r, o = i.event.special, a = 0;
                    (n = e[a]) !== void 0; a++)
                    if (bt(n)) {
                        if (t = n[W.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
                            n[W.expando] = void 0
                        }
                        n[ye.expando] && (n[ye.expando] = void 0)
                    }
            }
        }), i.fn.extend({
            detach: function(e) {
                return Yn(this, e, !0)
            },
            remove: function(e) {
                return Yn(this, e)
            },
            text: function(e) {
                return $e(this, function(t) {
                    return t === void 0 ? i.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return gt(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Vn(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return gt(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Vn(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return gt(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return gt(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0;
                    (e = this[t]) != null; t++) e.nodeType === 1 && (i.cleanData(me(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = e ?? !1, t = t ?? e, this.map(function() {
                    return i.clone(this, e, t)
                })
            },
            html: function(e) {
                return $e(this, function(t) {
                    var n = this[0] || {},
                        r = 0,
                        o = this.length;
                    if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                    if (typeof t == "string" && !ai.test(t) && !Le[(_n.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = i.htmlPrefilter(t);
                        try {
                            for (; r < o; r++) n = this[r] || {}, n.nodeType === 1 && (i.cleanData(me(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch {}
                    }
                    n && this.empty().append(t)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return gt(this, arguments, function(t) {
                    var n = this.parentNode;
                    i.inArray(this, e) < 0 && (i.cleanData(me(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            i.fn[e] = function(n) {
                for (var r, o = [], a = i(n), u = a.length - 1, p = 0; p <= u; p++) r = p === u ? this : this.clone(!0), i(a[p])[t](r), P.apply(o, r.get());
                return this.pushStack(o)
            }
        });
        var nn = new RegExp("^(" + Rn + ")(?!px)[a-z%]+$", "i"),
            rn = /^--/,
            Ht = function(e) {
                var t = e.ownerDocument.defaultView;
                return (!t || !t.opener) && (t = c), t.getComputedStyle(e)
            },
            Qn = function(e, t, n) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.call(e);
                for (o in t) e.style[o] = a[o];
                return r
            },
            di = new RegExp(ze.join("|"), "i"),
            Gn = "[\\x20\\t\\r\\n\\f]",
            pi = new RegExp("^" + Gn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Gn + "+$", "g");
        (function() {
            function e() {
                if (m) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", m.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", tt.appendChild(l).appendChild(m);
                    var w = c.getComputedStyle(m);
                    n = w.top !== "1%", p = t(w.marginLeft) === 12, m.style.right = "60%", a = t(w.right) === 36, r = t(w.width) === 36, m.style.position = "absolute", o = t(m.offsetWidth / 3) === 12, tt.removeChild(l), m = null
                }
            }

            function t(w) {
                return Math.round(parseFloat(w))
            }
            var n, r, o, a, u, p, l = R.createElement("div"),
                m = R.createElement("div");
            m.style && (m.style.backgroundClip = "content-box", m.cloneNode(!0).style.backgroundClip = "", q.clearCloneStyle = m.style.backgroundClip === "content-box", i.extend(q, {
                boxSizingReliable: function() {
                    return e(), r
                },
                pixelBoxStyles: function() {
                    return e(), a
                },
                pixelPosition: function() {
                    return e(), n
                },
                reliableMarginLeft: function() {
                    return e(), p
                },
                scrollboxSize: function() {
                    return e(), o
                },
                reliableTrDimensions: function() {
                    var w, k, T, S;
                    return u == null && (w = R.createElement("table"), k = R.createElement("tr"), T = R.createElement("div"), w.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", k.style.cssText = "border:1px solid", k.style.height = "1px", T.style.height = "9px", T.style.display = "block", tt.appendChild(w).appendChild(k).appendChild(T), S = c.getComputedStyle(k), u = parseInt(S.height, 10) + parseInt(S.borderTopWidth, 10) + parseInt(S.borderBottomWidth, 10) === k.offsetHeight, tt.removeChild(w)), u
                }
            }))
        })();

        function Ct(e, t, n) {
            var r, o, a, u, p = rn.test(t),
                l = e.style;
            return n = n || Ht(e), n && (u = n.getPropertyValue(t) || n[t], p && u && (u = u.replace(pi, "$1") || void 0), u === "" && !lt(e) && (u = i.style(e, t)), !q.pixelBoxStyles() && nn.test(u) && di.test(t) && (r = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = n.width, l.width = r, l.minWidth = o, l.maxWidth = a)), u !== void 0 ? u + "" : u
        }

        function Xn(e, t) {
            return {
                get: function() {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
        var Kn = ["Webkit", "Moz", "ms"],
            Jn = R.createElement("div").style,
            Zn = {};

        function hi(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Kn.length; n--;)
                if (e = Kn[n] + t, e in Jn) return e
        }

        function on(e) {
            var t = i.cssProps[e] || Zn[e];
            return t || (e in Jn ? e : Zn[e] = hi(e) || e)
        }
        var gi = /^(none|table(?!-c[ea]).+)/,
            vi = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            er = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function tr(e, t, n) {
            var r = Tt.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function an(e, t, n, r, o, a) {
            var u = t === "width" ? 1 : 0,
                p = 0,
                l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; u < 4; u += 2) n === "margin" && (l += i.css(e, n + ze[u], !0, o)), r ? (n === "content" && (l -= i.css(e, "padding" + ze[u], !0, o)), n !== "margin" && (l -= i.css(e, "border" + ze[u] + "Width", !0, o))) : (l += i.css(e, "padding" + ze[u], !0, o), n !== "padding" ? l += i.css(e, "border" + ze[u] + "Width", !0, o) : p += i.css(e, "border" + ze[u] + "Width", !0, o));
            return !r && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - p - .5)) || 0), l
        }

        function nr(e, t, n) {
            var r = Ht(e),
                o = !q.boxSizingReliable() || n,
                a = o && i.css(e, "boxSizing", !1, r) === "border-box",
                u = a,
                p = Ct(e, t, r),
                l = "offset" + t[0].toUpperCase() + t.slice(1);
            if (nn.test(p)) {
                if (!n) return p;
                p = "auto"
            }
            return (!q.boxSizingReliable() && a || !q.reliableTrDimensions() && he(e, "tr") || p === "auto" || !parseFloat(p) && i.css(e, "display", !1, r) === "inline") && e.getClientRects().length && (a = i.css(e, "boxSizing", !1, r) === "border-box", u = l in e, u && (p = e[l])), p = parseFloat(p) || 0, p + an(e, t, n || (a ? "border" : "content"), u, r, p) + "px"
        }
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Ct(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                    var o, a, u, p = Fe(t),
                        l = rn.test(t),
                        m = e.style;
                    if (l || (t = on(p)), u = i.cssHooks[t] || i.cssHooks[p], n !== void 0) {
                        if (a = typeof n, a === "string" && (o = Tt.exec(n)) && o[1] && (n = Fn(e, t, o), a = "number"), n == null || n !== n) return;
                        a === "number" && !l && (n += o && o[3] || (i.cssNumber[p] ? "" : "px")), !q.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (m[t] = "inherit"), (!u || !("set" in u) || (n = u.set(e, n, r)) !== void 0) && (l ? m.setProperty(t, n) : m[t] = n)
                    } else return u && "get" in u && (o = u.get(e, !1, r)) !== void 0 ? o : m[t]
                }
            },
            css: function(e, t, n, r) {
                var o, a, u, p = Fe(t),
                    l = rn.test(t);
                return l || (t = on(p)), u = i.cssHooks[t] || i.cssHooks[p], u && "get" in u && (o = u.get(e, !0, n)), o === void 0 && (o = Ct(e, t, r)), o === "normal" && t in er && (o = er[t]), n === "" || n ? (a = parseFloat(o), n === !0 || isFinite(a) ? a || 0 : o) : o
            }
        }), i.each(["height", "width"], function(e, t) {
            i.cssHooks[t] = {
                get: function(n, r, o) {
                    if (r) return gi.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? Qn(n, vi, function() {
                        return nr(n, t, o)
                    }) : nr(n, t, o)
                },
                set: function(n, r, o) {
                    var a, u = Ht(n),
                        p = !q.scrollboxSize() && u.position === "absolute",
                        l = p || o,
                        m = l && i.css(n, "boxSizing", !1, u) === "border-box",
                        w = o ? an(n, t, o, m, u) : 0;
                    return m && p && (w -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(u[t]) - an(n, t, "border", !1, u) - .5)), w && (a = Tt.exec(r)) && (a[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), tr(n, r, w)
                }
            }
        }), i.cssHooks.marginLeft = Xn(q.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Ct(e, "marginLeft")) || e.getBoundingClientRect().left - Qn(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            i.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, a = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++) o[e + ze[r] + t] = a[r] || a[r - 2] || a[0];
                    return o
                }
            }, e !== "margin" && (i.cssHooks[e + t].set = tr)
        }), i.fn.extend({
            css: function(e, t) {
                return $e(this, function(n, r, o) {
                    var a, u, p = {},
                        l = 0;
                    if (Array.isArray(r)) {
                        for (a = Ht(n), u = r.length; l < u; l++) p[r[l]] = i.css(n, r[l], !1, a);
                        return p
                    }
                    return o !== void 0 ? i.style(n, r, o) : i.css(n, r)
                }, e, t, arguments.length > 1)
            }
        });

        function be(e, t, n, r, o) {
            return new be.prototype.init(e, t, n, r, o)
        }
        i.Tween = be, be.prototype = {
            constructor: be,
            init: function(e, t, n, r, o, a) {
                this.elem = e, this.prop = n, this.easing = o || i.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (i.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = be.propHooks[this.prop];
                return e && e.get ? e.get(this) : be.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = be.propHooks[this.prop];
                return this.options.duration ? this.pos = t = i.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : be.propHooks._default.set(this), this
            }
        }, be.prototype.init.prototype = be.prototype, be.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = i.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t)
                },
                set: function(e) {
                    i.fx.step[e.prop] ? i.fx.step[e.prop](e) : e.elem.nodeType === 1 && (i.cssHooks[e.prop] || e.elem.style[on(e.prop)] != null) ? i.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, be.propHooks.scrollTop = be.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, i.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, i.fx = be.prototype.init, i.fx.step = {};
        var vt, Rt, yi = /^(?:toggle|show|hide)$/,
            mi = /queueHooks$/;

        function un() {
            Rt && (R.hidden === !1 && c.requestAnimationFrame ? c.requestAnimationFrame(un) : c.setTimeout(un, i.fx.interval), i.fx.tick())
        }

        function rr() {
            return c.setTimeout(function() {
                vt = void 0
            }), vt = Date.now()
        }

        function Ft(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = ze[r], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function ir(e, t, n) {
            for (var r, o = (qe.tweeners[t] || []).concat(qe.tweeners["*"]), a = 0, u = o.length; a < u; a++)
                if (r = o[a].call(n, t, e)) return r
        }

        function bi(e, t, n) {
            var r, o, a, u, p, l, m, w, k = "width" in t || "height" in t,
                T = this,
                S = {},
                F = e.style,
                K = e.nodeType && qt(e),
                H = W.get(e, "fxshow");
            n.queue || (u = i._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, p = u.empty.fire, u.empty.fire = function() {
                u.unqueued || p()
            }), u.unqueued++, T.always(function() {
                T.always(function() {
                    u.unqueued--, i.queue(e, "fx").length || u.empty.fire()
                })
            }));
            for (r in t)
                if (o = t[r], yi.test(o)) {
                    if (delete t[r], a = a || o === "toggle", o === (K ? "hide" : "show"))
                        if (o === "show" && H && H[r] !== void 0) K = !0;
                        else continue;
                    S[r] = H && H[r] || i.style(e, r)
                } if (l = !i.isEmptyObject(t), !(!l && i.isEmptyObject(S))) {
                k && e.nodeType === 1 && (n.overflow = [F.overflow, F.overflowX, F.overflowY], m = H && H.display, m == null && (m = W.get(e, "display")), w = i.css(e, "display"), w === "none" && (m ? w = m : (dt([e], !0), m = e.style.display || m, w = i.css(e, "display"), dt([e]))), (w === "inline" || w === "inline-block" && m != null) && i.css(e, "float") === "none" && (l || (T.done(function() {
                    F.display = m
                }), m == null && (w = F.display, m = w === "none" ? "" : w)), F.display = "inline-block")), n.overflow && (F.overflow = "hidden", T.always(function() {
                    F.overflow = n.overflow[0], F.overflowX = n.overflow[1], F.overflowY = n.overflow[2]
                })), l = !1;
                for (r in S) l || (H ? "hidden" in H && (K = H.hidden) : H = W.access(e, "fxshow", {
                    display: m
                }), a && (H.hidden = !K), K && dt([e], !0), T.done(function() {
                    K || dt([e]), W.remove(e, "fxshow");
                    for (r in S) i.style(e, r, S[r])
                })), l = ir(K ? H[r] : 0, r, T), r in H || (H[r] = l.start, K && (l.end = l.start, l.start = 0))
            }
        }

        function xi(e, t) {
            var n, r, o, a, u;
            for (n in e)
                if (r = Fe(n), o = t[r], a = e[n], Array.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), u = i.cssHooks[r], u && "expand" in u) {
                    a = u.expand(a), delete e[r];
                    for (n in a) n in e || (e[n] = a[n], t[n] = o)
                } else t[r] = o
        }

        function qe(e, t, n) {
            var r, o, a = 0,
                u = qe.prefilters.length,
                p = i.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var k = vt || rr(), T = Math.max(0, m.startTime + m.duration - k), S = T / m.duration || 0, F = 1 - S, K = 0, H = m.tweens.length; K < H; K++) m.tweens[K].run(F);
                    return p.notifyWith(e, [m, F, T]), F < 1 && H ? T : (H || p.notifyWith(e, [m, 1, 0]), p.resolveWith(e, [m]), !1)
                },
                m = p.promise({
                    elem: e,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {},
                        easing: i.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: vt || rr(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(k, T) {
                        var S = i.Tween(e, m.opts, k, T, m.opts.specialEasing[k] || m.opts.easing);
                        return m.tweens.push(S), S
                    },
                    stop: function(k) {
                        var T = 0,
                            S = k ? m.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; T < S; T++) m.tweens[T].run(1);
                        return k ? (p.notifyWith(e, [m, 1, 0]), p.resolveWith(e, [m, k])) : p.rejectWith(e, [m, k]), this
                    }
                }),
                w = m.props;
            for (xi(w, m.opts.specialEasing); a < u; a++)
                if (r = qe.prefilters[a].call(m, e, w, m.opts), r) return L(r.stop) && (i._queueHooks(m.elem, m.opts.queue).stop = r.stop.bind(r)), r;
            return i.map(w, ir, m), L(m.opts.start) && m.opts.start.call(e, m), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always), i.fx.timer(i.extend(l, {
                elem: e,
                anim: m,
                queue: m.opts.queue
            })), m
        }
        i.Animation = i.extend(qe, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return Fn(n.elem, e, Tt.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    L(e) ? (t = e, e = ["*"]) : e = e.match(Se);
                    for (var n, r = 0, o = e.length; r < o; r++) n = e[r], qe.tweeners[n] = qe.tweeners[n] || [], qe.tweeners[n].unshift(t)
                },
                prefilters: [bi],
                prefilter: function(e, t) {
                    t ? qe.prefilters.unshift(e) : qe.prefilters.push(e)
                }
            }), i.speed = function(e, t, n) {
                var r = e && typeof e == "object" ? i.extend({}, e) : {
                    complete: n || !n && t || L(e) && e,
                    duration: e,
                    easing: n && t || t && !L(t) && t
                };
                return i.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in i.fx.speeds ? r.duration = i.fx.speeds[r.duration] : r.duration = i.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    L(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue)
                }, r
            }, i.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(qt).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = i.isEmptyObject(e),
                        a = i.speed(t, n, r),
                        u = function() {
                            var p = qe(this, i.extend({}, e), a);
                            (o || W.get(this, "finish")) && p.stop(!0)
                        };
                    return u.finish = u, o || a.queue === !1 ? this.each(u) : this.queue(a.queue, u)
                },
                stop: function(e, t, n) {
                    var r = function(o) {
                        var a = o.stop;
                        delete o.stop, a(n)
                    };
                    return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                        var o = !0,
                            a = e != null && e + "queueHooks",
                            u = i.timers,
                            p = W.get(this);
                        if (a) p[a] && p[a].stop && r(p[a]);
                        else
                            for (a in p) p[a] && p[a].stop && mi.test(a) && r(p[a]);
                        for (a = u.length; a--;) u[a].elem === this && (e == null || u[a].queue === e) && (u[a].anim.stop(n), o = !1, u.splice(a, 1));
                        (o || !n) && i.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = W.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            a = i.timers,
                            u = r ? r.length : 0;
                        for (n.finish = !0, i.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; t < u; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), i.each(["toggle", "show", "hide"], function(e, t) {
                var n = i.fn[t];
                i.fn[t] = function(r, o, a) {
                    return r == null || typeof r == "boolean" ? n.apply(this, arguments) : this.animate(Ft(t, !0), r, o, a)
                }
            }), i.each({
                slideDown: Ft("show"),
                slideUp: Ft("hide"),
                slideToggle: Ft("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                i.fn[e] = function(n, r, o) {
                    return this.animate(t, n, r, o)
                }
            }), i.timers = [], i.fx.tick = function() {
                var e, t = 0,
                    n = i.timers;
                for (vt = Date.now(); t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
                n.length || i.fx.stop(), vt = void 0
            }, i.fx.timer = function(e) {
                i.timers.push(e), i.fx.start()
            }, i.fx.interval = 13, i.fx.start = function() {
                Rt || (Rt = !0, un())
            }, i.fx.stop = function() {
                Rt = null
            }, i.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, i.fn.delay = function(e, t) {
                return e = i.fx && i.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, r) {
                    var o = c.setTimeout(n, e);
                    r.stop = function() {
                        c.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = R.createElement("input"),
                    t = R.createElement("select"),
                    n = t.appendChild(R.createElement("option"));
                e.type = "checkbox", q.checkOn = e.value !== "", q.optSelected = n.selected, e = R.createElement("input"), e.value = "t", e.type = "radio", q.radioValue = e.value === "t"
            }();
        var or, St = i.expr.attrHandle;
        i.fn.extend({
            attr: function(e, t) {
                return $e(this, i.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    i.removeAttr(this, e)
                })
            }
        }), i.extend({
            attr: function(e, t, n) {
                var r, o, a = e.nodeType;
                if (!(a === 3 || a === 8 || a === 2)) {
                    if (typeof e.getAttribute > "u") return i.prop(e, t, n);
                    if ((a !== 1 || !i.isXMLDoc(e)) && (o = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? or : void 0)), n !== void 0) {
                        if (n === null) {
                            i.removeAttr(e, t);
                            return
                        }
                        return o && "set" in o && (r = o.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n)
                    }
                    return o && "get" in o && (r = o.get(e, t)) !== null ? r : (r = i.find.attr(e, t), r ?? void 0)
                }
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!q.radioValue && t === "radio" && he(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    o = t && t.match(Se);
                if (o && e.nodeType === 1)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), or = {
            set: function(e, t, n) {
                return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, i.each(i.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = St[t] || i.find.attr;
            St[t] = function(r, o, a) {
                var u, p, l = o.toLowerCase();
                return a || (p = St[l], St[l] = u, u = n(r, o, a) != null ? l : null, St[l] = p), u
            }
        });
        var Ti = /^(?:input|select|textarea|button)$/i,
            wi = /^(?:a|area)$/i;
        i.fn.extend({
            prop: function(e, t) {
                return $e(this, i.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[i.propFix[e] || e]
                })
            }
        }), i.extend({
            prop: function(e, t, n) {
                var r, o, a = e.nodeType;
                if (!(a === 3 || a === 8 || a === 2)) return (a !== 1 || !i.isXMLDoc(e)) && (t = i.propFix[t] || t, o = i.propHooks[t]), n !== void 0 ? o && "set" in o && (r = o.set(e, n, t)) !== void 0 ? r : e[t] = n : o && "get" in o && (r = o.get(e, t)) !== null ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = i.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ti.test(e.nodeName) || wi.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), q.optSelected || (i.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });

        function nt(e) {
            var t = e.match(Se) || [];
            return t.join(" ")
        }

        function rt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function sn(e) {
            return Array.isArray(e) ? e : typeof e == "string" ? e.match(Se) || [] : []
        }
        i.fn.extend({
            addClass: function(e) {
                var t, n, r, o, a, u;
                return L(e) ? this.each(function(p) {
                    i(this).addClass(e.call(this, p, rt(this)))
                }) : (t = sn(e), t.length ? this.each(function() {
                    if (r = rt(this), n = this.nodeType === 1 && " " + nt(r) + " ", n) {
                        for (a = 0; a < t.length; a++) o = t[a], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        u = nt(n), r !== u && this.setAttribute("class", u)
                    }
                }) : this)
            },
            removeClass: function(e) {
                var t, n, r, o, a, u;
                return L(e) ? this.each(function(p) {
                    i(this).removeClass(e.call(this, p, rt(this)))
                }) : arguments.length ? (t = sn(e), t.length ? this.each(function() {
                    if (r = rt(this), n = this.nodeType === 1 && " " + nt(r) + " ", n) {
                        for (a = 0; a < t.length; a++)
                            for (o = t[a]; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        u = nt(n), r !== u && this.setAttribute("class", u)
                    }
                }) : this) : this.attr("class", "")
            },
            toggleClass: function(e, t) {
                var n, r, o, a, u = typeof e,
                    p = u === "string" || Array.isArray(e);
                return L(e) ? this.each(function(l) {
                    i(this).toggleClass(e.call(this, l, rt(this), t), t)
                }) : typeof t == "boolean" && p ? t ? this.addClass(e) : this.removeClass(e) : (n = sn(e), this.each(function() {
                    if (p)
                        for (a = i(this), o = 0; o < n.length; o++) r = n[o], a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
                    else(e === void 0 || u === "boolean") && (r = rt(this), r && W.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || e === !1 ? "" : W.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (n.nodeType === 1 && (" " + nt(rt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Ci = /\r/g;
        i.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = L(e), this.each(function(a) {
                    var u;
                    this.nodeType === 1 && (r ? u = e.call(this, a, i(this).val()) : u = e, u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = i.map(u, function(p) {
                        return p == null ? "" : p + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, u, "value") === void 0) && (this.value = u))
                })) : o ? (t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (n = t.get(o, "value")) !== void 0 ? n : (n = o.value, typeof n == "string" ? n.replace(Ci, "") : n ?? "")) : void 0
            }
        }), i.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = i.find.attr(e, "value");
                        return t ?? nt(i.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options,
                            a = e.selectedIndex,
                            u = e.type === "select-one",
                            p = u ? null : [],
                            l = u ? a + 1 : o.length;
                        for (a < 0 ? r = l : r = u ? a : 0; r < l; r++)
                            if (n = o[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !he(n.parentNode, "optgroup"))) {
                                if (t = i(n).val(), u) return t;
                                p.push(t)
                            } return p
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, a = i.makeArray(t), u = o.length; u--;) r = o[u], (r.selected = i.inArray(i.valHooks.option.get(r), a) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = i.inArray(i(e).val(), t) > -1
                }
            }, q.checkOn || (i.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            })
        }), q.focusin = "onfocusin" in c;
        var ar = /^(?:focusinfocus|focusoutblur)$/,
            ur = function(e) {
                e.stopPropagation()
            };
        i.extend(i.event, {
            trigger: function(e, t, n, r) {
                var o, a, u, p, l, m, w, k, T = [n || R],
                    S = I.call(e, "type") ? e.type : e,
                    F = I.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = k = u = n = n || R, !(n.nodeType === 3 || n.nodeType === 8) && !ar.test(S + i.event.triggered) && (S.indexOf(".") > -1 && (F = S.split("."), S = F.shift(), F.sort()), l = S.indexOf(":") < 0 && "on" + S, e = e[i.expando] ? e : new i.Event(S, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = F.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + F.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : i.makeArray(t, [e]), w = i.event.special[S] || {}, !(!r && w.trigger && w.trigger.apply(n, t) === !1))) {
                    if (!r && !w.noBubble && !Z(n)) {
                        for (p = w.delegateType || S, ar.test(p + S) || (a = a.parentNode); a; a = a.parentNode) T.push(a), u = a;
                        u === (n.ownerDocument || R) && T.push(u.defaultView || u.parentWindow || c)
                    }
                    for (o = 0;
                        (a = T[o++]) && !e.isPropagationStopped();) k = a, e.type = o > 1 ? p : w.bindType || S, m = (W.get(a, "events") || Object.create(null))[e.type] && W.get(a, "handle"), m && m.apply(a, t), m = l && a[l], m && m.apply && bt(a) && (e.result = m.apply(a, t), e.result === !1 && e.preventDefault());
                    return e.type = S, !r && !e.isDefaultPrevented() && (!w._default || w._default.apply(T.pop(), t) === !1) && bt(n) && l && L(n[S]) && !Z(n) && (u = n[l], u && (n[l] = null), i.event.triggered = S, e.isPropagationStopped() && k.addEventListener(S, ur), n[S](), e.isPropagationStopped() && k.removeEventListener(S, ur), i.event.triggered = void 0, u && (n[l] = u)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = i.extend(new i.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                i.event.trigger(r, null, t)
            }
        }), i.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    i.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return i.event.trigger(e, t, n, !0)
            }
        }), q.focusin || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(r) {
                i.event.simulate(t, r.target, i.event.fix(r))
            };
            i.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this,
                        o = W.access(r, t);
                    o || r.addEventListener(e, n, !0), W.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this,
                        o = W.access(r, t) - 1;
                    o ? W.access(r, t, o) : (r.removeEventListener(e, n, !0), W.remove(r, t))
                }
            }
        });
        var Et = c.location,
            sr = {
                guid: Date.now()
            },
            fn = /\?/;
        i.parseXML = function(e) {
            var t, n;
            if (!e || typeof e != "string") return null;
            try {
                t = new c.DOMParser().parseFromString(e, "text/xml")
            } catch {}
            return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && i.error("Invalid XML: " + (n ? i.map(n.childNodes, function(r) {
                return r.textContent
            }).join(`
`) : e)), t
        };
        var Si = /\[\]$/,
            fr = /\r?\n/g,
            Ei = /^(?:submit|button|image|reset|file)$/i,
            Ai = /^(?:input|select|textarea|keygen)/i;

        function cn(e, t, n, r) {
            var o;
            if (Array.isArray(t)) i.each(t, function(a, u) {
                n || Si.test(e) ? r(e, u) : cn(e + "[" + (typeof u == "object" && u != null ? a : "") + "]", u, n, r)
            });
            else if (!n && oe(t) === "object")
                for (o in t) cn(e + "[" + o + "]", t[o], n, r);
            else r(e, t)
        }
        i.param = function(e, t) {
            var n, r = [],
                o = function(a, u) {
                    var p = L(u) ? u() : u;
                    r[r.length] = encodeURIComponent(a) + "=" + encodeURIComponent(p ?? "")
                };
            if (e == null) return "";
            if (Array.isArray(e) || e.jquery && !i.isPlainObject(e)) i.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) cn(n, e[n], t, o);
            return r.join("&")
        }, i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = i.prop(this, "elements");
                    return e ? i.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !i(this).is(":disabled") && Ai.test(this.nodeName) && !Ei.test(e) && (this.checked || !wt.test(e))
                }).map(function(e, t) {
                    var n = i(this).val();
                    return n == null ? null : Array.isArray(n) ? i.map(n, function(r) {
                        return {
                            name: t.name,
                            value: r.replace(fr, `\r
`)
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(fr, `\r
`)
                    }
                }).get()
            }
        });
        var ki = /%20/g,
            Di = /#.*$/,
            Ni = /([?&])_=[^&]*/,
            Li = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            ji = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Oi = /^(?:GET|HEAD)$/,
            Pi = /^\/\//,
            cr = {},
            ln = {},
            lr = "*/".concat("*"),
            dn = R.createElement("a");
        dn.href = Et.href;

        function dr(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, o = 0,
                    a = t.toLowerCase().match(Se) || [];
                if (L(n))
                    for (; r = a[o++];) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function pr(e, t, n, r) {
            var o = {},
                a = e === ln;

            function u(p) {
                var l;
                return o[p] = !0, i.each(e[p] || [], function(m, w) {
                    var k = w(t, n, r);
                    if (typeof k == "string" && !a && !o[k]) return t.dataTypes.unshift(k), u(k), !1;
                    if (a) return !(l = k)
                }), l
            }
            return u(t.dataTypes[0]) || !o["*"] && u("*")
        }

        function pn(e, t) {
            var n, r, o = i.ajaxSettings.flatOptions || {};
            for (n in t) t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && i.extend(!0, e, r), e
        }

        function Mi(e, t, n) {
            for (var r, o, a, u, p = e.contents, l = e.dataTypes; l[0] === "*";) l.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) {
                for (o in p)
                    if (p[o] && p[o].test(r)) {
                        l.unshift(o);
                        break
                    }
            }
            if (l[0] in n) a = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        a = o;
                        break
                    }
                    u || (u = o)
                }
                a = a || u
            }
            if (a) return a !== l[0] && l.unshift(a), n[a]
        }

        function qi(e, t, n, r) {
            var o, a, u, p, l, m = {},
                w = e.dataTypes.slice();
            if (w[1])
                for (u in e.converters) m[u.toLowerCase()] = e.converters[u];
            for (a = w.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = w.shift(), a) {
                    if (a === "*") a = l;
                    else if (l !== "*" && l !== a) {
                        if (u = m[l + " " + a] || m["* " + a], !u) {
                            for (o in m)
                                if (p = o.split(" "), p[1] === a && (u = m[l + " " + p[0]] || m["* " + p[0]], u)) {
                                    u === !0 ? u = m[o] : m[o] !== !0 && (a = p[0], w.unshift(p[1]));
                                    break
                                }
                        }
                        if (u !== !0)
                            if (u && e.throws) t = u(t);
                            else try {
                                t = u(t)
                            } catch (k) {
                                return {
                                    state: "parsererror",
                                    error: u ? k : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                } return {
                state: "success",
                data: t
            }
        }
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal: ji.test(Et.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": lr,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? pn(pn(e, i.ajaxSettings), t) : pn(i.ajaxSettings, e)
            },
            ajaxPrefilter: dr(cr),
            ajaxTransport: dr(ln),
            ajax: function(e, t) {
                typeof e == "object" && (t = e, e = void 0), t = t || {};
                var n, r, o, a, u, p, l, m, w, k, T = i.ajaxSetup({}, t),
                    S = T.context || T,
                    F = T.context && (S.nodeType || S.jquery) ? i(S) : i.event,
                    K = i.Deferred(),
                    H = i.Callbacks("once memory"),
                    de = T.statusCode || {},
                    le = {},
                    Ee = {},
                    ne = "canceled",
                    G = {
                        readyState: 0,
                        getResponseHeader: function(ee) {
                            var se;
                            if (l) {
                                if (!a)
                                    for (a = {}; se = Li.exec(o);) a[se[1].toLowerCase() + " "] = (a[se[1].toLowerCase() + " "] || []).concat(se[2]);
                                se = a[ee.toLowerCase() + " "]
                            }
                            return se == null ? null : se.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return l ? o : null
                        },
                        setRequestHeader: function(ee, se) {
                            return l == null && (ee = Ee[ee.toLowerCase()] = Ee[ee.toLowerCase()] || ee, le[ee] = se), this
                        },
                        overrideMimeType: function(ee) {
                            return l == null && (T.mimeType = ee), this
                        },
                        statusCode: function(ee) {
                            var se;
                            if (ee)
                                if (l) G.always(ee[G.status]);
                                else
                                    for (se in ee) de[se] = [de[se], ee[se]];
                            return this
                        },
                        abort: function(ee) {
                            var se = ee || ne;
                            return n && n.abort(se), xe(0, se), this
                        }
                    };
                if (K.promise(G), T.url = ((e || T.url || Et.href) + "").replace(Pi, Et.protocol + "//"), T.type = t.method || t.type || T.method || T.type, T.dataTypes = (T.dataType || "*").toLowerCase().match(Se) || [""], T.crossDomain == null) {
                    p = R.createElement("a");
                    try {
                        p.href = T.url, p.href = p.href, T.crossDomain = dn.protocol + "//" + dn.host != p.protocol + "//" + p.host
                    } catch {
                        T.crossDomain = !0
                    }
                }
                if (T.data && T.processData && typeof T.data != "string" && (T.data = i.param(T.data, T.traditional)), pr(cr, T, t, G), l) return G;
                m = i.event && T.global, m && i.active++ === 0 && i.event.trigger("ajaxStart"), T.type = T.type.toUpperCase(), T.hasContent = !Oi.test(T.type), r = T.url.replace(Di, ""), T.hasContent ? T.data && T.processData && (T.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (T.data = T.data.replace(ki, "+")) : (k = T.url.slice(r.length), T.data && (T.processData || typeof T.data == "string") && (r += (fn.test(r) ? "&" : "?") + T.data, delete T.data), T.cache === !1 && (r = r.replace(Ni, "$1"), k = (fn.test(r) ? "&" : "?") + "_=" + sr.guid++ + k), T.url = r + k), T.ifModified && (i.lastModified[r] && G.setRequestHeader("If-Modified-Since", i.lastModified[r]), i.etag[r] && G.setRequestHeader("If-None-Match", i.etag[r])), (T.data && T.hasContent && T.contentType !== !1 || t.contentType) && G.setRequestHeader("Content-Type", T.contentType), G.setRequestHeader("Accept", T.dataTypes[0] && T.accepts[T.dataTypes[0]] ? T.accepts[T.dataTypes[0]] + (T.dataTypes[0] !== "*" ? ", " + lr + "; q=0.01" : "") : T.accepts["*"]);
                for (w in T.headers) G.setRequestHeader(w, T.headers[w]);
                if (T.beforeSend && (T.beforeSend.call(S, G, T) === !1 || l)) return G.abort();
                if (ne = "abort", H.add(T.complete), G.done(T.success), G.fail(T.error), n = pr(ln, T, t, G), !n) xe(-1, "No Transport");
                else {
                    if (G.readyState = 1, m && F.trigger("ajaxSend", [G, T]), l) return G;
                    T.async && T.timeout > 0 && (u = c.setTimeout(function() {
                        G.abort("timeout")
                    }, T.timeout));
                    try {
                        l = !1, n.send(le, xe)
                    } catch (ee) {
                        if (l) throw ee;
                        xe(-1, ee)
                    }
                }

                function xe(ee, se, kt, Bt) {
                    var Ae, it, ot, Te, Ge, je = se;
                    l || (l = !0, u && c.clearTimeout(u), n = void 0, o = Bt || "", G.readyState = ee > 0 ? 4 : 0, Ae = ee >= 200 && ee < 300 || ee === 304, kt && (Te = Mi(T, G, kt)), !Ae && i.inArray("script", T.dataTypes) > -1 && i.inArray("json", T.dataTypes) < 0 && (T.converters["text script"] = function() {}), Te = qi(T, Te, G, Ae), Ae ? (T.ifModified && (Ge = G.getResponseHeader("Last-Modified"), Ge && (i.lastModified[r] = Ge), Ge = G.getResponseHeader("etag"), Ge && (i.etag[r] = Ge)), ee === 204 || T.type === "HEAD" ? je = "nocontent" : ee === 304 ? je = "notmodified" : (je = Te.state, it = Te.data, ot = Te.error, Ae = !ot)) : (ot = je, (ee || !je) && (je = "error", ee < 0 && (ee = 0))), G.status = ee, G.statusText = (se || je) + "", Ae ? K.resolveWith(S, [it, je, G]) : K.rejectWith(S, [G, je, ot]), G.statusCode(de), de = void 0, m && F.trigger(Ae ? "ajaxSuccess" : "ajaxError", [G, T, Ae ? it : ot]), H.fireWith(S, [G, je]), m && (F.trigger("ajaxComplete", [G, T]), --i.active || i.event.trigger("ajaxStop")))
                }
                return G
            },
            getJSON: function(e, t, n) {
                return i.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return i.get(e, void 0, t, "script")
            }
        }), i.each(["get", "post"], function(e, t) {
            i[t] = function(n, r, o, a) {
                return L(r) && (a = a || o, o = r, r = void 0), i.ajax(i.extend({
                    url: n,
                    type: t,
                    dataType: a,
                    data: r,
                    success: o
                }, i.isPlainObject(n) && n))
            }
        }), i.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers) t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "")
        }), i._evalUrl = function(e, t, n) {
            return i.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(r) {
                    i.globalEval(r, t, n)
                }
            })
        }, i.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (L(e) && (e = e.call(this[0])), t = i(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this
            },
            wrapInner: function(e) {
                return L(e) ? this.each(function(t) {
                    i(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = i(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = L(e);
                return this.each(function(n) {
                    i(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    i(this).replaceWith(this.childNodes)
                }), this
            }
        }), i.expr.pseudos.hidden = function(e) {
            return !i.expr.pseudos.visible(e)
        }, i.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, i.ajaxSettings.xhr = function() {
            try {
                return new c.XMLHttpRequest
            } catch {}
        };
        var Ii = {
                0: 200,
                1223: 204
            },
            At = i.ajaxSettings.xhr();
        q.cors = !!At && "withCredentials" in At, q.ajax = At = !!At, i.ajaxTransport(function(e) {
            var t, n;
            if (q.cors || At && !e.crossDomain) return {
                send: function(r, o) {
                    var a, u = e.xhr();
                    if (u.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) u[a] = e.xhrFields[a];
                    e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r) u.setRequestHeader(a, r[a]);
                    t = function(p) {
                        return function() {
                            t && (t = n = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, p === "abort" ? u.abort() : p === "error" ? typeof u.status != "number" ? o(0, "error") : o(u.status, u.statusText) : o(Ii[u.status] || u.status, u.statusText, (u.responseType || "text") !== "text" || typeof u.responseText != "string" ? {
                                binary: u.response
                            } : {
                                text: u.responseText
                            }, u.getAllResponseHeaders()))
                        }
                    }, u.onload = t(), n = u.onerror = u.ontimeout = t("error"), u.onabort !== void 0 ? u.onabort = n : u.onreadystatechange = function() {
                        u.readyState === 4 && c.setTimeout(function() {
                            t && n()
                        })
                    }, t = t("abort");
                    try {
                        u.send(e.hasContent && e.data || null)
                    } catch (p) {
                        if (t) throw p
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), i.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return i.globalEval(e), e
                }
            }
        }), i.ajaxPrefilter("script", function(e) {
            e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), i.ajaxTransport("script", function(e) {
            if (e.crossDomain || e.scriptAttrs) {
                var t, n;
                return {
                    send: function(r, o) {
                        t = i("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(a) {
                            t.remove(), n = null, a && o(a.type === "error" ? 404 : 200, a.type)
                        }), R.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var hr = [],
            hn = /(=)\?(?=&|$)|\?\?/;
        i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = hr.pop() || i.expando + "_" + sr.guid++;
                return this[e] = !0, e
            }
        }), i.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, o, a, u = e.jsonp !== !1 && (hn.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && hn.test(e.data) && "data");
            if (u || e.dataTypes[0] === "jsonp") return r = e.jsonpCallback = L(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(hn, "$1" + r) : e.jsonp !== !1 && (e.url += (fn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return a || i.error(r + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = c[r], c[r] = function() {
                a = arguments
            }, n.always(function() {
                o === void 0 ? i(c).removeProp(r) : c[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, hr.push(r)), a && L(o) && o(a[0]), a = o = void 0
            }), "script"
        }), q.createHTMLDocument = function() {
            var e = R.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2
        }(), i.parseHTML = function(e, t, n) {
            if (typeof e != "string") return [];
            typeof t == "boolean" && (n = t, t = !1);
            var r, o, a;
            return t || (q.createHTMLDocument ? (t = R.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = R.location.href, t.head.appendChild(r)) : t = R), o = ve.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = $n([e], t, a), a && a.length && i(a).remove(), i.merge([], o.childNodes))
        }, i.fn.load = function(e, t, n) {
            var r, o, a, u = this,
                p = e.indexOf(" ");
            return p > -1 && (r = nt(e.slice(p)), e = e.slice(0, p)), L(t) ? (n = t, t = void 0) : t && typeof t == "object" && (o = "POST"), u.length > 0 && i.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(l) {
                a = arguments, u.html(r ? i("<div>").append(i.parseHTML(l)).find(r) : l)
            }).always(n && function(l, m) {
                u.each(function() {
                    n.apply(this, a || [l.responseText, m, l])
                })
            }), this
        }, i.expr.pseudos.animated = function(e) {
            return i.grep(i.timers, function(t) {
                return e === t.elem
            }).length
        }, i.offset = {
            setOffset: function(e, t, n) {
                var r, o, a, u, p, l, m, w = i.css(e, "position"),
                    k = i(e),
                    T = {};
                w === "static" && (e.style.position = "relative"), p = k.offset(), a = i.css(e, "top"), l = i.css(e, "left"), m = (w === "absolute" || w === "fixed") && (a + l).indexOf("auto") > -1, m ? (r = k.position(), u = r.top, o = r.left) : (u = parseFloat(a) || 0, o = parseFloat(l) || 0), L(t) && (t = t.call(e, n, i.extend({}, p))), t.top != null && (T.top = t.top - p.top + u), t.left != null && (T.left = t.left - p.left + o), "using" in t ? t.using.call(e, T) : k.css(T)
            }
        }, i.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === void 0 ? this : this.each(function(o) {
                    i.offset.setOffset(this, e, o)
                });
                var t, n, r = this[0];
                if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if (i.css(r, "position") === "fixed") t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && i.css(e, "position") === "static";) e = e.parentNode;
                        e && e !== r && e.nodeType === 1 && (o = i(e).offset(), o.top += i.css(e, "borderTopWidth", !0), o.left += i.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - i.css(r, "marginTop", !0),
                        left: t.left - o.left - i.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && i.css(e, "position") === "static";) e = e.offsetParent;
                    return e || tt
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = t === "pageYOffset";
            i.fn[e] = function(r) {
                return $e(this, function(o, a, u) {
                    var p;
                    if (Z(o) ? p = o : o.nodeType === 9 && (p = o.defaultView), u === void 0) return p ? p[t] : o[a];
                    p ? p.scrollTo(n ? p.pageXOffset : u, n ? u : p.pageYOffset) : o[a] = u
                }, e, r, arguments.length)
            }
        }), i.each(["top", "left"], function(e, t) {
            i.cssHooks[t] = Xn(q.pixelPosition, function(n, r) {
                if (r) return r = Ct(n, t), nn.test(r) ? i(n).position()[t] + "px" : r
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            i.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                i.fn[r] = function(o, a) {
                    var u = arguments.length && (n || typeof o != "boolean"),
                        p = n || (o === !0 || a === !0 ? "margin" : "border");
                    return $e(this, function(l, m, w) {
                        var k;
                        return Z(l) ? r.indexOf("outer") === 0 ? l["inner" + e] : l.document.documentElement["client" + e] : l.nodeType === 9 ? (k = l.documentElement, Math.max(l.body["scroll" + e], k["scroll" + e], l.body["offset" + e], k["offset" + e], k["client" + e])) : w === void 0 ? i.css(l, m, p) : i.style(l, m, w, p)
                    }, t, u ? o : void 0, u)
                }
            })
        }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            i.fn[t] = function(n, r) {
                return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t)
            }
        });
        var Hi = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        i.proxy = function(e, t) {
            var n, r, o;
            if (typeof t == "string" && (n = e[t], t = e, e = n), !!L(e)) return r = C.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(C.call(arguments)))
            }, o.guid = e.guid = e.guid || i.guid++, o
        }, i.holdReady = function(e) {
            e ? i.readyWait++ : i.ready(!0)
        }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = he, i.isFunction = L, i.isWindow = Z, i.camelCase = Fe, i.type = oe, i.now = Date.now, i.isNumeric = function(e) {
            var t = i.type(e);
            return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
        }, i.trim = function(e) {
            return e == null ? "" : (e + "").replace(Hi, "$1")
        };
        var Ri = c.jQuery,
            Fi = c.$;
        return i.noConflict = function(e) {
            return c.$ === i && (c.$ = Fi), e && c.jQuery === i && (c.jQuery = Ri), i
        }, typeof g > "u" && (c.jQuery = c.$ = i), i
    })
})(Qr);
var Po = Qr.exports;
const jt = Oo(Po);

function Mo() {
    var s = 0,
        c = 0,
        g = ["PROFESSIONAL", "PASSIONATE", "AMATEUR"],
        y = ["VIDEO EDITOR", "FILM MAKER", "GAMER"];

    function b() {
        jt(".tricks").each(function() {
            jt(this).html(jt(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"))
        }), C()
    }

    function C() {
        ce.timeline({
            loop: !1
        }).add({
            targets: ".ab-hero_head .letter",
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: function(N, P) {
                return 300 + 30 * P
            }
        }).add({
            targets: ".ab-hero_head .letter",
            translateY: [0, -100],
            opacity: [1, 0],
            easing: "easeOutExpo",
            duration: 1200,
            delay: function(N, P) {
                return 100 + 30 * P
            },
            complete: function(N) {
                jt(".top-text").text(g[s]), jt(".btm-text").text(y[c]), s++, s >= g.length && (s = 0), c++, c >= y.length && (c = 0), b()
            }
        })
    }
    setTimeout(() => {
        b()
    }, -1)
}
yt.registerPlugin(An);

function qo() {
    function s(c) {
        const g = c === 1;
        yt.timeline({}).set("#wavingHand", {
            rotate: -20
        }).to("#wavingHand", {
            rotate: 0,
            transformOrigin: "bottom right",
            duration: 1.5,
            delay: 0,
            ease: "elastic.out(1, 0.5)"
        }).addLabel("scrollTitle").to(".about__title", {
            x: () => g ? `-=${document.querySelector("#stop").clientWidth-20}` : 0,
            duration: 1.5,
            delay: .2,
            ease: "ease.inOut"
        }, "scrollTitle-=1.2")
    }
    An.create({
        start: () => `+=${document.querySelector(".about__title").offsetHeight+20}`,
        end: () => `+=${document.querySelector(".about__title").offsetHeight+200}`,
        toggleActions: "restart none reset reset",
        toggleClass: {
            target: ".about__title",
            once: !0
        },
        onEnter: ({
            direction: c
        }) => s(c),
        onLeaveBack: ({
            direction: c
        }) => s(c)
    })
}
yt.registerPlugin(An);
const He = s => document.querySelector(s);

function Io() {
    const s = He(".loader"),
        c = He(".container"),
        g = He(".overlay-text1"),
        y = He(".overlay-text2"),
        b = He(".overlay-text3"),
        C = He(".overlay-text4"),
        N = He(".m-overlay-text1"),
        P = He(".m-overlay-text2"),
        x = He(".m-overlay-text3"),
        U = He(".m-overlay-text4"),
        j = yt.timeline({
            onComplete: () => He("body").classList.remove("isloading")
        });
    j.set(c, {
        autoAlpha: 1
    }).from(".letters", 1.8, {
        y: 800,
        ease: "power4.inOut",
        delay: .1,
        skewY: 14,
        duration: .2,
        stagger: {
            amount: .7
        }
    });
    const I = yt.timeline({});
    I.to(".letters", {
        y: -800,
        ease: "power1.in",
        delay: .2,
        skewY: -14,
        duration: .3,
        stagger: {
            amount: .7
        }
    }, 0).to([s, c], {
        yPercent: -100,
        ease: "power2.out"
    }, "-=0.4").from("#landing-video-content", {
        duration: 1.2,
        y: 500,
        scale: 0,
        autoAlpha: .4,
        transformOrigin: "bottom center",
        ease: "sine.out"
    }, .5).fromTo([g, y, N, P], {
        y: "100%",
        skewY: 14,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: .5,
        ease: "power1.out",
        stagger: {
            amount: .1
        }
    }, "-=0.6").fromTo([b, C, x, U], {
        y: "100%",
        skewY: 14,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: .5,
        ease: "power1.out",
        stagger: {
            amount: .1
        }
    }, "-=0.3"), yt.timeline().add(j).add(I)
}

function Ho() {
    Io()
}
window.addEventListener("load", function() {
    Ho()
});
qo();
Mo();
to();
eo();
