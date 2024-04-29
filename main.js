let hamburger = document.getElementById("hamburger");
let navMenu = document.getElementById("nav__menu");
let closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show");
})

// Close Nav Links
navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(e => {
    e.addEventListener("click", () => {
        navMenu.classList.remove("show");
    })
})