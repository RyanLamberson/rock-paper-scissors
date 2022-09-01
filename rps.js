function getComputerChoice ()
{
    temp = Math.floor(Math.random()*10);
    choice = temp % 3;
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        
    }
}
function getPlayerChoice()
{
    inputText = prompt("Rock, paper, scissors, SHOOT!", "???")
    if (inputText.toUpperCase().localeCompare("ROCK")==0)
    {
        return "Rock";
    }
    else if (inputText.toUpperCase().localeCompare("SCISSORS")==0)
    {
        return "Scissors";
    }
    else if (inputText.toUpperCase().localeCompare("PAPER")==0)
    {
        return "Paper";
    }
    else
    {
        return "Invalid";
    }
}

console.log(getPlayerChoice());


