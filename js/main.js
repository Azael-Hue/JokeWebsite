window.onload = function () {
    let randomJokeButton = document.querySelector("#get-random-joke");
    randomJokeButton.onclick = getJoke;
};
function getJoke() {
    let randomJokeURL = "https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode";
    fetch(randomJokeURL)
        .then((response) => response.json())
        .then((jsonData) => {
        console.log(jsonData);
    });
}
function handleResponse(response) {
    return response.json();
}
function handleData(jsonData) {
    console.log(jsonData);
}
