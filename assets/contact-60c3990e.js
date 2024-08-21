import "./modulepreload-polyfill-3cfb730f.js";
var s = document.getElementById("btn"),
    l = new ClipboardJS(s);
l.on("success", () => {
    alert("Email Id is copied!!")
});
l.on("error", function(e) {
    console.info("Action:", e.action), console.info("Text:", e.text), console.info("Trigger:", e.trigger)
});
window.onload = function() {
    const e = document.querySelectorAll(".input-field");
    e.forEach(o => o.value = ""), document.getElementById("contact-form").addEventListener("submit", function(o) {
        o.preventDefault();
        const n = document.getElementById("name"),
            t = document.getElementById("email"),
            r = document.getElementById("description");
        if (n.value === "") return alert("Please enter your name."), n.focus(), !1;

        function i(a) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(a)
        }
        if (t.value === "") return alert("Please enter a valid email address."), t.focus(), !1;
        if (!i(t.value)) return alert(t.value + " is NOT a valid email address"), t.focus(), !1;
        if (r.value === "") return alert("Please enter your project description."), r.focus(), !1;
        this.contact_number.value = Math.random() * 1e5 | 0, emailjs.sendForm("service_2kt5ntl", "template_fmh4xt4", this).then(function() {
            alert(n.value + " your message has been submitted"), e.forEach(a => a.value = "")
        }, function(a) {
            alert(n.value + " YOUR MESSAGE HAS NOT BEEN SUBMITTED. WHY DONT YOU TRY TO COPY THE EMAIL ID FROM BELOW.")
        })
    })
};