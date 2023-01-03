const hamburger = document.querySelector(".toggle");
const nav = document.querySelectorAll(".mobile-menu-list__item");
const hero = document.querySelector(".hero");
const overlay = document.querySelector(".overlay");
const blink = document.querySelector(".blink");

const mobileMenu = () => {
  hamburger.classList.toggle("active");

  nav.forEach((el) => {
    el.classList.toggle("active");
  });
  overlay.classList.toggle("active");
  blink.classList.toggle("active");
};
hamburger.addEventListener("click", mobileMenu);

const mobileLink = document.querySelectorAll(".mobile-menu-list__link");
const mobileMenuItem = document.querySelectorAll(".mobile-menu-list__item");

const close = () => {
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
  mobileMenuItem.forEach((el) => {
    el.classList.remove("active");
  });
  blink.classList.remove("active");
};

mobileLink.forEach((link) => {
  link.addEventListener("click", close);
});

