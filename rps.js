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
console.log(getComputerChoice());