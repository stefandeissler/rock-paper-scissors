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

// Declare global score variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Convert humanChoice string to lower case
    humanChoice = humanChoice.toLowerCase();

    // Show computer's choice and player's choice
    console.log("Computer's choice: " + computerChoice);
    console.log("Your choice: " + humanChoice);
    console.log("");

    // Show result (win, loss or draw)
    if (humanChoice === computerChoice) {
        console.log("It's a draw. No one gets a point.")
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    console.log("Paper beats rock. You lose!");
                    computerScore += 1;
                } else {    // computerChoice === "scissors"
                    console.log("Rock beats scissors. You win!");
                    humanScore += 1;
                };
                break;
            case "paper":
                if (computerChoice === "rock") {
                    console.log("Paper beats rock. You win!");
                    humanScore += 1;
                } else {    // computerChoice === "scissors"
                    console.log("Scissors beat paper. You lose!");
                    computerScore += 1;
                };
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    console.log("Rock beats scissors. You lose!");
                    computerScore += 1;
                } else {    // computerChoice === "paper"
                    console.log("Scissors beat paper. You win!");
                    humanScore += 1;
                };
                break;
        }
    }

    // Show scores
    console.log("");
    console.log("The current scores are:");
    console.log("Computer: " + computerScore);
    console.log("Player: " + humanScore);
}
