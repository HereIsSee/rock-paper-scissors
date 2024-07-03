const Rock = document.querySelector("#Rock");
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissors");

let counterForHuman = 0;
let counterForRobot = 0;
let numberOfRounds = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function PlayRound(human, robot) {
  let result = "none";
  if (human === robot) {
    result = "tie";
  } else if (human === "Rock" && robot === "Scissors") {
    result = "win";
  } else if (human === "Rock" && robot === "Paper") {
    result = "lose";
  } else if (human === "Paper" && robot === "Scissors") {
    result = "lose";
  } else if (human === "Paper" && robot === "Rock") {
    result = "win";
  } else if (human === "Scissors" && robot === "Rock") {
    result = "lose";
  } else if (human === "Scissors" && robot === "Paper") {
    result = "win";
  }
  return result;
}

function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Result: ${result}`;
}
function addResult(winner){
    const ResultBoar = document.querySelector("#result");
    const newWin = document.createElement("div");
    const newScore = document.createElement("div");    
    if(winner === "win"){
        newWin.textContent = "You won!";
        ResultBoar.appendChild(newWin);
        counterForHuman+=1;
    } 
    else if(winner === "lose"){
        newWin.textContent = "You lost!";
        ResultBoar.appendChild(newWin);
        counterForRobot+=1;
    } else if (winner === "tie"){
        newWin.textContent = "It's a tie!";
        ResultBoar.appendChild(newWin);
        
    }
    else{
        //console.log("Wrong input!");
        //i-=1;
    }
    newScore.textContent = "Score: " + counterForHuman + " " + counterForRobot;
    ResultBoar.appendChild(newScore);
    
}
// function addResult(result) {
//   if (result === "win") {
//     counterForHuman++;
//   } else if (result === "lose") {
//     counterForRobot++;
//   }
//   displayResult(`Human: ${counterForHuman}, Robot: ${counterForRobot}`);
// }

function waitForButtonClick() {
  return new Promise((resolve) => {
    Rock.addEventListener("click", () => resolve("Rock"), { once: true });
    Paper.addEventListener("click", () => resolve("Paper"), { once: true });
    Scissors.addEventListener("click", () => resolve("Scissors"), { once: true });
  });
}

async function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = await waitForButtonClick();
    const computerChoice = getComputerChoice();
    const result = PlayRound(humanChoice, computerChoice);
    addResult(result);
  }
  displayResult(`Game Over! Final Score - Human: ${counterForHuman}, Robot: ${counterForRobot}`);
}

playGame();
