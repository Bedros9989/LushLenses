/*********************************
Headern
**********************************/

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuContainer = document.querySelector("#menu");
  let isMenuVisible = false; // Flag to track menu visibility

  // Toggle the menu on hamburger click
  hamburger.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
    isMenuVisible = !isMenuVisible; // Update the flag
  });

  // Listen for scroll events
  window.addEventListener("scroll", () => {
    // Check if the menu is visible and the user has scrolled down
    if (isMenuVisible && window.scrollY > 50) {
      menuContainer.classList.remove("active"); // Hide the menu
      isMenuVisible = false; // Update the flag
    }
  });
});








