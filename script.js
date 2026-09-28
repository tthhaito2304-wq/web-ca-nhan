document.addEventListener("DOMContentLoaded", function () {
    const yearNode = document.getElementById("year");
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    const revealItems = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    const heroVisual = document.querySelector(".hero-visual");
    if (heroVisual) {
        window.addEventListener("pointermove", (event) => {
            const x = (event.clientX / window.innerWidth - 0.5) * 12;
            const y = (event.clientY / window.innerHeight - 0.5) * 12;
            heroVisual.style.transform = `translate(${x * 1.2}px, ${y * 1.2}px)`;
        });
    }
});
