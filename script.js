document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero h1, .hero p, .btn", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3
    });

    gsap.utils.toArray(".fade-in").forEach((element) => {
        gsap.fromTo(element,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none reverse" } }
        );
    });
});

// Interactive Sakura Tree
function dropPetals() {
    for (let i = 0; i < 5; i++) {
        createSakura();
    }
}
