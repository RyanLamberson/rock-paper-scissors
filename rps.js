let playerScore = 0;
let computerScore =0;
let totalScore =0;
let roundCount =0;
let pChoice = document.querySelector("#pChoice");
let cChoice = document.querySelector("#cChoice");

console.log(roundCount);
function getComputerChoice ()
{
    temp = Math.floor(Math.random()*10);
    choice = temp % 3;
    switch (choice) {
        case 0:
            cChoice.textContent = "Computer chooses Rock";
            return 0;
        case 1:
            cChoice.textContent="Computer chooses Paper";
            return 1;
        case 2:
            cChoice.textContent="Computer chooses Scissors";
            return 2;
        
    }
}
function playRound(playerChoice)
{
    result = -2;
    computerChoice=getComputerChoice();
    btn = playerChoice.textContent;
    console.log(btn);
    pcResult = -1;
    roundCount = roundCount+1;
    console.log(roundCount);
    label = document.querySelector("#Results");
    
    if (btn.toUpperCase().localeCompare("ROCK")==0)
    {
        pcResult =0;
        pChoice.textContent = "Player chooses Rock"
        
    }
    else if (btn.toUpperCase().localeCompare("PAPER")==0)
    {
        pcResult= 1;
        pChoice.textContent = "Player chooses Paper"

    
    }
    else if (btn.toUpperCase().localeCompare("SCISSORS")==0)
    {
        pcResult= 2;
        pChoice.textContent = "Player chooses Scissors"

    }

    if (pcResult == computerChoice)
    {
        result= 0;
    }
    else if ((pcResult==0 && computerChoice ==2)||(pcResult==1 && computerChoice==0)||
            (pcResult==2 && computerChoice==1))
    {
        result = 1;
        playerScore++;
        console.log(playerScore);
    }
    else if ((pcResult==0 && computerChoice ==1)||(pcResult==1 && computerChoice==2)||
        (pcResult==2 && computerChoice==0))
    {
        result = -1;
        computerScore--;
    }

    gameEnd = "ERROR";

    totalScore = playerScore + computerScore;
    label.textContent = "Player Score: " + playerScore + " :: Computer Score: " + computerScore;
    if (roundCount == 5)
    {
        if (playerScore > computerScore*-1)
        {
            gameEnd = "Player Wins!";
        }
        else if (playerScore < computerScore*-1)
        {
            gameEnd = "Computer Wins!";
        }
        else
        {
            gameEnd = "Tie Game!";
        }
        label.textContent = label.textContent + " :: " + gameEnd;
        playerScore = 0;
        computerScore =0;
        totalScore =0;
        roundCount =0;
    }
    
}

buttons = document.getElementsByTagName('button');
console.log(buttons);
let buttonArray = Array.from(buttons);
console.log(buttonArray);
buttonArray.forEach((button)=>{button.addEventListener('click', 
    function() {playRound(button);})});
