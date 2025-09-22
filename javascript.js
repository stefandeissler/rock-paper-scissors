function getComputerChoice() {
    // Declare local function variables
    let computerChoice = "";
    let randomNumber = 0;

    // Randomly choose 0, 1, or 2 as random number
    randomNumber = Math.floor(Math.random() * 3);

    // Convert random number into computer's choice
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

    // Return result of selection process
    return computerChoice;
}

function getHumanChoice() {
    // Declare local function variable
    let humanChoice = "";

    // Prompt user to choose between options
    humanChoice = prompt("Rock, paper, or scissors? Select an option: ")

    // Return chosen option
    return humanChoice;
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        // Declare result variable winner
        let winner = "";
        
        // Convert humanChoice string to lower case
        humanChoice = humanChoice.toLowerCase();

        // Show computer's choice and player's choice
        console.log("Computer's choice: " + computerChoice);
        console.log("Your choice: " + humanChoice);
        console.log("");

        // Show result (win, loss or draw)
        if (humanChoice === computerChoice) {
            console.log("It's a draw. No one gets a point.")
            winner = "none";
        } else {
            switch (humanChoice) {
                case "rock":
                    if (computerChoice === "paper") {
                        console.log("Paper beats rock. You lose!");
                        winner = "computer";
                    } else {    // computerChoice === "scissors"
                        console.log("Rock beats scissors. You win!");
                        winner = "player";
                    };
                    break;
                case "paper":
                    if (computerChoice === "rock") {
                        console.log("Paper beats rock. You win!");
                        winner = "player";
                    } else {    // computerChoice === "scissors"
                        console.log("Scissors beat paper. You lose!");
                        winner = "computer";
                    };
                    break;
                case "scissors":
                    if (computerChoice === "rock") {
                        console.log("Rock beats scissors. You lose!");
                        winner = "computer";
                    } else {    // computerChoice === "paper"
                        console.log("Scissors beat paper. You win!");
                        winner = "player";
                    };
                    break;
            }
        }

        // Return: computer, player, or none
        return winner;
    }

    // Declare global score variables
    let humanScore = 0;
    let computerScore = 0;

    // Declare variable for round winner
    let winnerRound = "";

    // Play five rounds
    for (let i = 1; i <= 5; i++) {
        winnerRound = playRound(getComputerChoice(), getHumanChoice());
        
        // Increment scores
        switch (winnerRound) {
            case "computer":
                computerScore += 1;
                break;
            case "player":
                humanScore += 1;
                break;

        // Show scores
        console.log("");
        console.log("The current scores are:");
        console.log("Computer: " + computerScore);
        console.log("Player: " + humanScore);
        console.log("");
        }
    }

    // Declare overall winner
    if (humanScore === computerScore) {
        console.log("The Game is over. It has resulted in a draw.");
    } else {
        if (humanScore > computerScore) {
            console.log("The Game is over. You won!");
            } else {
                console.log("The Game is over. You lost!");
            }
    }
}