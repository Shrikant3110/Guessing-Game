let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrg = document.getElementById('wrg');
let guess = document.getElementById('Guess');
let numGuessesElement = document.getElementById('numGuesses');

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click", () => {
    guessNumber();
});

function guessNumber() {
    if (input.value < 1 || input.value> 100 || isNaN(input.value)) {
        wrg.innerHTML = "Enter a number between 1 and 100";
    } else {
        numGuesses++;
        numGuessesElement.innerHTML = numGuesses;
        if (input.value > answer) {
            wrg.innerHTML = "You guessed too high";
        } else if (input.value < answer) {
            wrg.innerHTML = "You guessed too low";
        } else {
            wrg.innerHTML = "Congratulations! You guessed the correct number";
        }
        input.value = "";
    }
}
