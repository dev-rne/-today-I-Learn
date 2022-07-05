const body = document.querySelector("body");

const imgNum = 3;

function getRandom() {
  const number = Math.ceil(Math.random() * imgNum);
  return number;
}

function paintImg(imgNum) {
  const img = new Image();
  img.src = `/assets/${imgNum}.jpg`;
  img.classList.add("bgImg");
  body.appendChild(img);
}

function init() {
  const randomNum = getRandom();
  paintImg(randomNum);
}

init();
