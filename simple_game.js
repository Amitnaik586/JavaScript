/* Small number guessing Game */
const prompt = require("prompt-sync")();

let game_number = 25;

let guess = prompt("guess the number:");
console.log(guess);

while (guess != game_number) {
  guess = prompt("you entered wwrong number try again");
}

console.log("congratualaion you entred right number");
