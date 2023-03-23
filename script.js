function getComputerChoice() {
   let num = Math.floor(Math.random() * 3) + 1;
   if (num === 1){
    return "Rock";
   } else if (num === 2) {
    return "Paper";
   } else if (num === 3) {
    return "Scissors";
   } else {
    return "Something went wrong";
   }
};

console.log(getComputerChoice());

let userChoice = "paper"
let compChoice = getComputerChoice();

function playRound(userChoice, compChoice){
    let comp = compChoice.toLowerCase();
    let playerSelect = userChoice.toLowerCase();
    if (playerSelect === "rock" && comp === "scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelect === "rock" && comp === "paper"){
        return "You Lose! Paper beats Rock!";
    } else if (playerSelect === "rock" && comp === "rock"){
        return "It's a draw, rock";
    } else if (playerSelect === "paper" && comp === "rock"){ 
        return "You win! Paper beats Rock!";
    } else if (playerSelect === "paper" && comp === "scissors"){ 
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelect === "paper" && comp === "paper"){
        return "It's a draw, paper";
    } else if (playerSelect === "scissors" && comp === "paper"){ 
        return "You win! Scissors beats Paper!";
    } else if (playerSelect === "scissors" && comp === "rock"){ 
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelect === "scissors" && comp === "scissors"){
        return "It's a draw, scissors";
    } else {
        return "Something went wrong";
    }
}

console.log(playRound(userChoice, compChoice));
