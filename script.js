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

let userChoice = prompt("Rock, paper, scissors, shoot!");
let compChoice = getComputerChoice();

function playRound(userChoice, compChoice){
    let comp = compChoice.toLowerCase();
    let playerSelect = userChoice.toLowerCase();
    if (playerSelect == comp) {
        return "Draw!";
    } else if (comp == "scissors"){
        return(playerSelect == "rock")?"You win!":"You lose!" 
    } else if (comp == "paper"){
        return(playerSelect == "scissors")?"You win!":"You lose!" 
    }  else if (comp == "rock"){
        return(playerSelect == "paper")?"You win!":"You lose!" 
    } else {
        return "Choose something!"
    }
};
    console.log(playRound(userChoice, compChoice));


