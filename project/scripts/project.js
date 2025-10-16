/* JavaScript for Responsive Navigation Menu */
const hamburgerButton = document.getElementById("menu");
const navMenu = document.querySelector("body header nav ul");
hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburgerButton.classList.toggle("open");
});
/*Use localStorage to keep track of the number of reviews completed by the user client by adding a counter 
to the form submission review.html page. Every time that page is loaded successfully upon form submission, 
add one to the counter.*/
let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
/*Uncaught TypeError: Cannot set properties of null (setting 'textContent')*/
document.getElementById("review-count").textContent = reviewCount;
//end of review count function

