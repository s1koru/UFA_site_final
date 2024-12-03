document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav a");

    function onScroll() {
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // немного смещения для точности
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
});
