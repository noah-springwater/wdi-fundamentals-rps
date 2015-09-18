////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var getPlayerMove = move || getInput();
    return getPlayerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var getComputerMove = move || randomPlay();
    return getComputerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove === computerMove) {
      console.log("It's a tie. Play again!")
      winner = tie;
    }
    else if(playerMove === 'rock' && computerMove === 'paper') {
      console.log("Tough luck. Computer Wins.");
      winner = 'computer';
    }
    else if(playerMove === 'rock' && computerMove === 'scissors') {
      console.log("Nice job. Player Wins!");
      winner = 'player';
    }
    else if(playerMove === 'paper' && computerMove === 'rock') {
      console.log("Nice job. Player Wins!");
      winner = 'player';
    }
    else if(playerMove === 'paper' && computerMove === 'scissors') {
      console.log("Tough luck. Computer Wins.");
      winner = 'computer';
    }
    else if(playerMove === 'scissors' && computerMove === 'rock') {
      console.log("Tough luck. Compuer Wins.");
      winner = 'computer';
    }
    else if(playerMove === 'scissors' && computerMove === 'paper') {

    }
    else {
      winner = null;
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

