import {
    g as r,
    S as e
} from "./all-ed396580.js";
r.registerPlugin(e);

function g() {
    document.querySelectorAll(".reveal-text1").forEach(t => {
        r.from(t, {
            scrollTrigger: {
                trigger: t,
                start: "top 95%",
                id: "about-text",
                toggleActions: "restart none none reset"
            },
            y: "105%",
            duration: .7,
            delay: .2,
            ease: "power4.out"
        })
    })
}
export {
    g as t
};