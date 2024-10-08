import "./modulepreload-polyfill-3cfb730f.js";
import {
    C as t,
    r as d,
    P as f
} from "./revealnav-2a10b75f.js";
import {
    g as e,
    S as o,
    o as m
} from "./all-ed396580.js";
e.registerPlugin(o);
e.registerPlugin(t);
m();
d();
const p = ["play"];
f.setup(".js-player-w", {
    controls: p
});
let n = document.querySelector(".lapolo__section");
e.to(".lapolo__section", {
    x: () => -(n.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
        trigger: ".lapolo",
        invalidateOnRefresh: !0,
        pin: ".lapolo",
        scrub: 1,
        end: () => "+=" + n.offsetWidth
    }
});
let a = document.querySelector(".hex__section");
e.to(".hex__section", {
    x: () => -(a.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
        trigger: ".hex",
        invalidateOnRefresh: !0,
        pin: ".hex",
        scrub: 1,
        end: () => "+=" + a.offsetWidth
    }
});
let l = document.querySelector(".wedding__section");
e.to(".wedding__section", {
    x: () => -(l.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
        trigger: ".wedding",
        invalidateOnRefresh: !0,
        pin: ".wedding",
        scrub: 1,
        end: () => "+=" + l.offsetWidth
    }
});
console.clear();
window.addEventListener("load", function() {
    console.clear()
});
let s = document.querySelector(".revealshow"),
    i = document.querySelector("#revealla"),
    u = document.querySelector("#revealhex"),
    g = document.querySelector("#revealttk"),
    c = document.querySelector("#revealfran");
const h = t.getRule(".showreel__title::after"),
    T = t.getRule(".lapolo-name::after"),
    x = t.getRule(".hex-name::after"),
    w = t.getRule(".ttk-name::after"),
    y = t.getRule(".fran-name::after");

function A() {
    e.timeline({
        defaults: {
            ease: "power4.out"
        }
    }).fromTo(s, {
        y: "105%",
        autoAlpha: 0
    }, {
        y: 0,
        autoAlpha: 1
    }).fromTo(h, {
        transform: "translateX(-101%)"
    }, {
        transform: "translateX(0%)",
        duration: .2,
        zIndex: -1
    }).fromTo("#arrow", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "sine.out"
    })
}

function S() {
    e.timeline({
        defaults: {
            ease: "power4.out"
        }
    }).from(i, {
        y: "105%"
    }).fromTo(T, {
        transform: "translateX(-101%)"
    }, {
        transform: "translateX(0%)",
        duration: .2,
        zIndex: -1
    }).fromTo(".arrow-2", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "sine.out"
    })
}

function v() {
    e.timeline({
        defaults: {
            ease: "power4.out"
        }
    }).from(u, {
        y: "105%"
    }).fromTo(x, {
        transform: "translateX(-101%)"
    }, {
        transform: "translateX(0%)",
        duration: .2,
        zIndex: -1
    }).fromTo(".arrow-3", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "sine.out"
    })
}

function _() {
    e.timeline({
        defaults: {
            ease: "power4.out"
        }
    }).from(g, {
        y: "105%"
    }).fromTo(w, {
        transform: "translateX(-101%)"
    }, {
        transform: "translateX(0%)",
        duration: .2,
        zIndex: -1
    }).fromTo(".arrow-4", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "sine.out"
    })
}

function E() {
    e.timeline({
        defaults: {
            ease: "power4.out"
        }
    }).from(c, {
        y: "105%"
    }).fromTo(y, {
        transform: "translateX(-101%)"
    }, {
        transform: "translateX(0%)",
        duration: .2,
        zIndex: -1
    }).fromTo(".arrow-5", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "sine.out"
    })
}
o.create({
    trigger: s,
    start: "top 99%",
    toggleActions: "restart none none reset",
    onEnter: () => A()
});
o.create({
    trigger: i,
    start: "top 99%",
    toggleActions: "restart none none reset",
    onEnter: () => S()
});
o.create({
    trigger: u,
    start: "top 95%",
    toggleActions: "restart none none reset",
    onEnter: () => v()
});
o.create({
    trigger: g,
    start: "top 95%",
    toggleActions: "restart none none reset",
    onEnter: () => _()
});
o.create({
    trigger: c,
    start: "top 95%",
    toggleActions: "restart none none reset",
    onEnter: () => E()
});
window.addEventListener("load", function() {
    document.querySelector("body").classList.remove("isloading")
});