
let randomnumber = Math.ceil(Math.random() * 100)
let gameresult = document.getElementById("gameResult");
let userinput = document.getElementById("userInput");

function checkGuess() {
    let guessednumber = parseInt(userinput.value);
    if(guessednumber > randomnumber) {
        gameresult.textContent="Too High! Try Again.";
        gameresult.style.backgroundColor = "#1e217c";

    }
    else if(guessednumber < randomnumber) {
        gameresult.textContent="Too Low! Try Again.";
        gameresult.style.backgroundColor = "#1e217c";
    }
    else if(guessednumber === randomnumber) {
        gameresult.textContent="Congratulations! You got it right.";
        gameresult.style.backgroundColor = "green";
    }
    else {
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";
    }
}