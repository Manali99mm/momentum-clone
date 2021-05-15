const body = document.querySelector("body");
const client_id = config.UNSPLASH_ID;
const URL = `https://api.unsplash.com/search/photos?query=landscape&per_page=50&client_id=${client_id}`;

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.results.length)
        const randomNum = getRandomNumber(data.results.length);

        body.style.backgroundImage = `url(${data.results[randomNum].urls.full})`;
    })

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
