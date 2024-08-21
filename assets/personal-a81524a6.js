import "./modulepreload-polyfill-3cfb730f.js";
import {
    P as l,
    C as t,
    r as s
} from "./revealnav-2a10b75f.js";
import {
    g as o,
    S as r,
    o as i
} from "./all-ed396580.js";
import {
    t as g
} from "./textReveal-4fca16d5.js";

function u() {
    const e = ["play"];
    l.setup(".js-player", {
        controls: e
    })
}
o.registerPlugin(r);
o.registerPlugin(t);
u();
g();
i();
s();
console.clear();
window.addEventListener("load", function() {
    console.clear()
});
let a = document.querySelector("#revealrem"),
    n = document.querySelector("#revealslow");
const m = t.getRule(".rem-name::after"),
    c = t.getRule(".slow-name::after");

function d() {
    o.timeline({
        defaults: {
            ease: "power4.out"
        }
    }).from(a, {
        y: "105%"
    }).fromTo(m, {
        transform: "translateX(-101%)"
    }, {
        transform: "translateX(0%)",
        duration: .2,
        zIndex: -1
    }).fromTo(".arrow-r", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "sine.out"
    })
}

function f() {
    o.timeline({
        defaults: {
            ease: "power4.out"
        }
    }).from(n, {
        y: "105%"
    }).fromTo(c, {
        transform: "translateX(-101%)"
    }, {
        transform: "translateX(0%)",
        duration: .2,
        zIndex: -1
    }).fromTo(".arrow-sd", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "sine.out"
    })
}
r.create({
    trigger: a,
    start: "top 99%",
    toggleActions: "restart none none reset",
    onEnter: () => d()
});
r.create({
    trigger: n,
    start: "top 99%",
    toggleActions: "restart none none reset",
    onEnter: () => f()
});
window.addEventListener("load", () => {
    document.querySelector("body").classList.remove("isloading")
});