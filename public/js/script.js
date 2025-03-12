// JavaScript for Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
