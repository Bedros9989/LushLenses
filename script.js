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


/*********************************
Produkter
**********************************/

// Initialize Vue instance
const app = Vue.createApp({
  data() {
    return {
      products: []
    };
  },
  mounted() {
    // Fetch product data from JSON file
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        this.products = data;
      })
      .catch(error => console.error('Error fetching products:', error));
  }
});

// Mount the Vue instance on the app element
app.mount('#app');


/*********************************
Slideshow
**********************************/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


