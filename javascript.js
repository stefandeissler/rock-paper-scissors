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

let x = getHumanChoice();
console.log(x);