// program data:
var number = 4;
var gameStatus = false;

//prompt the user for the number of guesses they would like
var numberOfGuesses = prompt("How many guesses would you like: ")

//check for user input, if no input set numberOfGuesses to default state
if (numberOfGuesses == '') {
    //default number of guess attempts
    numberOfGuesses = 5;
}
alert("You will have " + numberOfGuesses + " chances to guess the number");

//for loop to determine number of attemps the player has left
for (guess = 0; guess < numberOfGuesses; guess++) 
{
    // prompt user for their guess 
    var userGuess = prompt("Please guess a number: ");

    // if correct: let the user know they won
    if (userGuess == number) {
        document.write("Correct! You guessed the number.");
        gameStatus = true;
        break;
    }
    // if incorrect: let the user know
    else {
        alert("Sorry you did not guess correctly. \nTries remaining " + (numberOfGuesses - guess));
    }
}
if (!gameStatus)
{
    document.write("Sorry, you ran out of tries. Game over.");
}
