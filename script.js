document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Hiệu ứng fade-in cho các phần tử
    gsap.utils.toArray(".fade-in").forEach((element) => {
        gsap.fromTo(
            element,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: element, start: "top 85%" } }
        );
    });

    // Hiệu ứng parallax cho background
    gsap.to("#parallax-container", {
        y: "20%",
        scrollTrigger: {
            scrub: true
        }
    });

    // Hiệu ứng chuyển động
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("parallax-container").appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xff477e });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 10;

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});
