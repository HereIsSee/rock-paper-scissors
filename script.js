function getComputerChoice (){
    let randomNumber = Math.floor(Math.random()*3)+1;
    let choice = "";
    switch (randomNumber){
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
        default:
            choice = "Rock";
    }
    return choice;
}
function getHumanChoice (){
    let choice = prompt('Choose "Rock", "Paper" or "Scissors"');
    if (choice !== "Rock" && choice !== "Paper" && choice !=="Scissors")
    {
        return "Wrong value";
    }
    return choice
}
function PlayRound(human, robot){
    let result = "none";
    if(human === robot){
        result = "tie";
    }
    else if(human === "Rock" && robot === "Scissors"){
        result = "win";
    }
    else if(human === "Rock" && robot === "Paper"){
        result = "lose";
    }
    else if(human === "Paper" && robot === "Scissors"){
        result = "lose";
    }
    else if(human === "Paper" && robot === "Rock"){
        result = "win";
    }
    else if(human === "Scissors" && robot === "Rock"){
        result = "lose";
    }
    else if(human === "Scissors" && robot === "Paper"){
        result = "win";
    }
    return result;

}
while (true){
    let counterForHuman = 0;
    let counterForRobot = 0;
    let numberOfRounds = prompt ("How many rounds do you want to play for?:");
    for (let i = 0; i < numberOfRounds; i++){
        let human = getHumanChoice();
        let robot = "Rock";//getComputerChoice();
        let result = PlayRound(human,robot);
        if(result === "win"){
            console.log("You won!");
            counterForHuman+=1;
        } 
        else if(result === "lose"){
            console.log("You lost!");
            counterForRobot+=1;
        } else if (result === "tie"){
            console.log("It's a tie!");
        }
        else{
            console.log("Wrong input!");
            i-=1;
        }
        console.log("Score: " + counterForHuman + " " + counterForRobot);
    }
    if(counterForHuman > counterForRobot)
        console.log("YOU WON!!!");
    else if (counterForHuman < counterForHuman)
        console.log("YOU LOST!!!");
    else
        console.log("IT'S A TIE!!!");

    if(prompt("Do you wish to continue? ('yes' or 'no') ") === "no"){
        break;
    }

}
