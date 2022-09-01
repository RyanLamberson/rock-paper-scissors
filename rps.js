function getComputerChoice ()
{
    temp = Math.floor(Math.random()*10);
    choice = temp % 3;
    switch (choice) {
        case 0:
            console.log("Computer chooses Rock");
            return 0;
        case 1:
            console.log("Computer chooses Paper");
            return 1;
        case 2:
            console.log("Computer chooses Scissors");
            return 2;
        
    }
}
function getPlayerChoice()
{
    inputText = prompt("Rock, paper, scissors, SHOOT!", "???")
    if (inputText.toUpperCase().localeCompare("ROCK")==0)
    {
        return 0;
    }
    else if (inputText.toUpperCase().localeCompare("SCISSORS")==0)
    {
        return 2;
    }
    else if (inputText.toUpperCase().localeCompare("PAPER")==0)
    {
        return 1;
    }
    else
    {
        return 4;
    }
}

function playRound(playerChoice)
{
    result = -2;
    while (playerChoice==4)
    {
        playerChoice=getPlayerChoice();
    }
    computerChoice=getComputerChoice();
    if (playerChoice==computerChoice)
    {
        result =0;
    } 
    else if (playerChoice==0 && computerChoice==1)
    {
        result= -1;
    }
    else if (playerChoice==0 && computerChoice==2)
    {
        result= 1;
    } 
    else if (playerChoice==1 && computerChoice==0)
    {
        result= 1;
    }
    else if (playerChoice==1 && computerChoice==2)
    {
        result= -1;
    }
    else if (playerChoice==2 && computerChoice==0)
    {
        result= -1;
    }
    else if (playerChoice==2 && computerChoice==1)
    {
        result= 1;
    }

    if (result==-1)
    {
        console.log("Computer wins this round.");
    }    
    else if (result==1)
    {
        console.log("Player wins this round.");
    }
    else if (result==0)
    {
        console.log("Tie round.")
    }
    else
    {
        console.log("Error: " + playerChoice + " : "+computerChoice);
    }
    return result;
}
function game()
{
    score =0;
    for (let i = 0; i < 5; i++)
    {
        score = score + playRound(getPlayerChoice());
    }
    if (score > 0)
    {
        console.log("Player wins!");
    }
    else if (score==0)
    {
        console.log("Tie!");
    }
    else
    {
        console.log("Computer wins!");
    }

    return "Final Score: " + score;
}
console.log(game());