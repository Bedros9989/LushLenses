// Koden kommer att köras när dokumentets DOM-träd (webbsidans representation) har blivit helt laddat.

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuContainer = document.querySelector("#menu");
  let isMenuVisible = false; 

    hamburger.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
    isMenuVisible = true;
  });


  window.addEventListener("scroll", () => {
    if (isMenuVisible && window.scrollY > 50) {
      menuContainer.classList.remove("active"); 
      isMenuVisible = false; 
    }
  });
});








