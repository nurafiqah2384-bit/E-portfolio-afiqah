// 1. Initialize AOS
AOS.init({ duration: 1000, once: true, offset: 100 });

// 2. GSAP Entry Animations (Brutalist Snap Sharp In)
gsap.from("#hero-text-container", { duration: 1, x: -50, opacity: 0, ease: "power2.out" });
gsap.from("#hero-image-container", { duration: 1, x: 50, opacity: 0, ease: "power2.out", delay: 0.15 });

// 3. Cyber Shield Network Particles Config
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 40, "density": { "enable": true, "value_area": 900 } },
        "color": { "value": "#E5203A" }, // Crimson Cyber Node
        "shape": { "type": "rect" }, // Petak kecil brutalist
        "opacity": { "value": 0.25, "random": false },
        "size": { "value": 2, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 140,
            "color": "#660F24", // Deep Wine Matrix Line
            "opacity": 0.3,
            "width": 1.5
        },
        "move": { "enable": true, "speed": 0.8, "direction": "none", "random": true, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "resize": true }
    },
    "retina_detect": true
});