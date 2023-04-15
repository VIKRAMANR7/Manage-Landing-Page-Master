var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  // loopedSlides: 3,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const hamburgerMenu = document.querySelector(".hamburger");
const displayMenu = document.querySelector(".main-nav");
const closeMenu = document.querySelector(".close-menu");
const container = document.querySelector(".container");
hamburgerMenu.addEventListener("click", function () {
  displayMenu.style.display = "flex";
  hamburgerMenu.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function () {
  displayMenu.style.display = "none";
  hamburgerMenu.style.display = "block";
  closeMenu.style.display = "none";
});
