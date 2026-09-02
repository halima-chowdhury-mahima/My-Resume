// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// Input: Navigation links inside .nav-links
// Output: Smooth navigation with active link state
// Returns: Nothing

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        // Update active navigation link
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");
    });
});