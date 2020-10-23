const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to(".g-sap", {x: "0%", duration: 1});

tl.to(".g-sap-btn", {y: "0%", duration: 0.3})
