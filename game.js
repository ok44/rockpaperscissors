function computerPlay() {
    const rnum = Math.floor((Math.random() * 3) + 1); 
    const choice = ['filler','Rock','Paper','Scissors']
    return choice[rnum]
}
function playerPlay() {
    let choice = prompt("Rock, Paper, Scissors?")
    console.log(choice)
    if ( choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'scissors' || choice.toLowerCase() == 'paper') {
        return choice
    }
    else {
        console.log('Input is incorrect. Refresh and try again.')
        
    }  
}
let computerScore = 0;
let playerScore = 0;

function playRound() {
    let computerSelection = computerPlay().toLowerCase();
    let playerSelection = playerPlay().toLowerCase();
    console.log("I chose "+computerSelection);
    console.log("You chose "+playerSelection);

    if (playerSelection == 'rock') {
        if (computerSelection =='rock') {
            console.log("It\'s a draw!")
        }
        else if (computerSelection =='paper') {
            console.log("You lose!")
            computerScore += 1
        }
        else {
            console.log("You win!")
            playerScore += 1

        }

    }

    else if (playerSelection == 'paper') {
        if (computerSelection =='rock') {
            console.log("You lose!")
            computerScore += 1
        }
        else if (computerSelection =='paper') {
            console.log("It\'s a draw!")
        }
        else {
            console.log("You win!")
            playerScore += 1
        }

    }

    else if (playerSelection = 'scissors') {
        if (computerSelection =='rock') {
            console.log("You lose!")
            computerScore += 1
        }
        else if (computerSelection =='paper') {
            console.log("You win!")
            playerScore += 1
        }
        else {
            console.log("It\'s a draw!")
        }
    }
}

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()

}

game()
console.log('The final scores are in...')

if (computerScore > playerScore) {
    console.log(`You lose :( The score was ${computerScore} to ${playerScore}`)

}
else if (playerScore > computerScore) {
    console.log(`You win! :) The score was ${playerScore} to ${computerScore}`)

}
else {
    console.log("It is a draw. Thanks for playing!")
}

