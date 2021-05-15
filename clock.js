const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("#clock");

function getCurrentTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    // const seconds = date.getSeconds();
    clockTitle.innerHTML = `${(hours < 10) ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
}

init();
