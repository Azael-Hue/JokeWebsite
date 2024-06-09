window.onload = function() {
    let randomJokeButton = document.querySelector("#get-random-joke") as HTMLButtonElement;
    randomJokeButton.onclick = getJoke;
}

function getJoke() {
    // let randomJokeURL = "https://v2.jokeapi.dev/joke/Any?type=single&safe-mode";
    // Only rettrieve safe programming jokes
    let randomJokeURL = "https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode";

    fetch(randomJokeURL)
        .then( (response) => response.json() ) // Obtain response and return json data
        .then(
            (jsonData) => {
                console.log(jsonData);
            }
        );

    //  // Same fetch as above avoid lambda expressions
    //  fetch(randomJokeURL)
    //     .then(handleResponse)
    //     .then(handleData);
}

function handleResponse(response) {
    return response.json();
}

function handleData(jsonData) {
    console.log(jsonData);
}