document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-icon");

    hamburger.addEventListener("click", toggleMenu);
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
