const img = document.querySelector(".welcome__img");
const welcome = document.querySelector(".welcome");

const playMusic = () => {
  let audio = new Audio("/images/water.mp3");
  audio.play();
};

const letsGo = () => {
  welcome.classList.add("clicked");
  img.classList.add("unclickable");
  playMusic();
};

img.addEventListener("click", letsGo);
