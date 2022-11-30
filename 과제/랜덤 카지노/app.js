const main = document.querySelector("#main-input");
const guess = document.querySelector("#guess");
const result = document.querySelector("#result");

function handleSubmit(e) {
    e.preventDefault();
    const guessInput = guess.querySelector("input");
    if(guessInput.value === "" && mainInput ==="") {
        return;        
    }
    const mainNumber = main.value;
    const random = Math.ceil(Math.random() * mainNumber);
    const userGuess = parseInt(guessInput.value, 10);
    const resultSpan = result.querySelector("span");
    resultSpan.innerHTML = `
    You chose: ${userGuess},
    the machine chose: ${random}.<br />
    <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
    `;
}

guess.addEventListener("submit", handleSubmit);
