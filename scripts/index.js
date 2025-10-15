/* JavaScript for Responsive Navigation Menu */
/*When the the user clicks on the hamburger button, the navigation menu will 
toggle open and close */
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("menu");
  const navMenu = document.querySelector("body header nav ul");
  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
  });
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;
  document.getElementById("lastModified").textContent = document.lastModified;
});
