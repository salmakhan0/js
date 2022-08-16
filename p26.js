var numberOfWins = 0
var numberOfLost = 0

for (var i = 1; i <= 5; i++) {

    var guessNumber = parseInt(prompt("Guess a number from 1 to 5 : "))

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber == randomNumber) {
        numberOfWins++;
        console.log("You have won ")
    }
    else {
        numberOfLost++;
        console.log("You have lost. Random number was : " + randomNumber)
    }
}
console.log("Total win = " + numberOfWins)
console.log("Total lost = " + numberOfLost)