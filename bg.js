const body = document.querySelector("body");
const IMG_NUMBER = 4;

function showImage(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandomNumber() {
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init() {
    const randomNumber = genRandomNumber();
    showImage(randomNumber);
}

init();