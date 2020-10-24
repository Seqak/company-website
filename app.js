const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const tlTwo = gsap.timeline({defaults: {ease: 'SlowMo.out'}});

tl.to(".g-sap", {x: "0%", duration: 1, opacity:1});

tl.to(".g-sap-btn", {y: "0%", duration: 0.3, opacity:1})

tlTwo.to("#about-title", {y: "0%", duration: 0.5, opacity:1})

tlTwo.to(".about-content", {x: "0%", duration: 0.5, opacity:1})

tlTwo.to(".header-img", {x: "0%", duration: 1, opacity:1})
