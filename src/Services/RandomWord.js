export const getRandomWord = () => {
    return fetch("https://random-word-api.herokuapp.com/word").then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}