/* JavaScript for Responsive Navigation Menu */
const hamburgerButton = document.getElementById("menu");
const navMenu = document.querySelector("body header nav ul");
hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburgerButton.classList.toggle("open");
});
