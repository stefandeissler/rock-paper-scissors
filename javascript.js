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
        case 1:
            computerChoice = "paper";
        case 2:
            computerChoice = "scissors";
    }

    // Return result of selection process
    return computerChoice;
}