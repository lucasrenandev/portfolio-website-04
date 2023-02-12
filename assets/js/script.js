// Responsive menu
const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", () => {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})

// Scroll animation
const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    reset: true
})

sr.reveal(".home-text", {delay: 200, origin: "top"})
sr.reveal(".home-image", {delay: 300, origin: "top"})
sr.reveal(".about, .services, .resume, .contact", {delay: 200, origin: "top"})