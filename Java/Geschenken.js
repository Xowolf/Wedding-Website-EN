const Dropdown = document.querySelector(".Dropdown");
const navMenu = document.querySelector(".nav-menu");

Dropdown.addEventListener("click", () => {
    Dropdown.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        Dropdown.classList.remove("active");
        navMenu.classList.remove("active");
    }))