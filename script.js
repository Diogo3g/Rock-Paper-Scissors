function getComputerChoice() {
   let num = Math.floor(Math.random() * 3) + 1;
   if (num === 1){
    return "rock";
   } else if (num === 2) {
    return "paper";
   } else if (num === 3) {
    return "scissors";
   } else {
    return "Something went wrong";
   }
};

let compChoice = getComputerChoice();

function playRound(userChoice, compChoice){
    let comp = compChoice;
    let playerSelect = userChoice.toLowerCase();
    if (playerSelect == comp) {
        return `${comp}, It's a tie`;
    } else if (comp ==="scissors"){
        return(playerSelect === "rock")?`You win ${playerSelect} beats ${comp}!`:`You lose  ${comp} beats ${playerSelect}!`;
    } else if (comp === "paper"){
        return(playerSelect === "scissors")?`You win ${playerSelect} beats ${comp}!`:`You lose ${comp} beats ${playerSelect}!`;
    }  else if (comp === "rock"){
        return(playerSelect === "paper")?`You win ${playerSelect} beats ${comp}!`:`You lose ${comp} beats ${playerSelect}!` 
    } else {
        return `${playerSelect} isn't used to play Rock Paper Scissors!`
    }
};
let scorePlayer = 0;
let compScore = 0;
function game(){
    for(let i = 0; i < 5; i++){
        const userChoice = prompt("Rock, paper, scissors, shoot!");
        const compChoice = getComputerChoice();
        console.log(playRound(userChoice, compChoice)); 
    }
    console.log("Game Over");
};
game();


