const img = document.querySelector(".welcome__img");
const welcome = document.querySelector(".welcome");
const bird2 = document.querySelector(".bird2-container");
const bird = document.querySelector(".bird");
const birdsWrapper = document.querySelector(".birds-wrapper");
const gallery = document.querySelector(".gallery");

const playMusic = () => {
  let audio = new Audio("/images/water.mp3");
  bird2.classList.add("fly-in2");
  bird.classList.add("fly-in");
  birdsWrapper.classList.add("bird-wrapper-clicked");
  welcome.classList.add("remove");
  gallery.classList.add("gallery-show-up");
  audio.play();
};

const letsGo = () => {
  welcome.classList.add("clicked");
  img.classList.add("unclickable");
  playMusic();
};

img.addEventListener("click", letsGo);
