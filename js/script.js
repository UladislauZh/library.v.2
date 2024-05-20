/*const burger = document.querySelector(".innerHead");
const lines = document.querySelectorAll(".textHead");

function toggleBurger() {
  lines.forEach((line) => line.classList.toggle("active"));
}

burger.addEventListener("click", toggleBurger);
*/
const burger = document.querySelector(".burger");
const head = document.querySelector(".innerHead");

burger.addEventListener("click", () => {
  head.classList.toggle("menu-open");
});

let currentIndex = 0;
const slides1 = document.querySelectorAll(".slide");
const slideInterval = 3000;

/*slider*/

const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
};

window.addEventListener("load", () => {
  slide();
});
