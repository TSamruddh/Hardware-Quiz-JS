const prompt = require("prompt-sync")()

const target = Math.round(Math.random()*10);

let guesses = 0;

// console.log("Target= "+target)



while(true){
    guesses++;
    const guess = Number(prompt("Guess the number (0-100): "));
    if(guess > target){
        console.log("Your guess is too high.")
    }   else if(guess < target){
            console.log("Your guess is too low.")
    }   else{
            console.log("Your guess is CORRECT!!!.")
            break;
    }
}

console.log('You guessed the number in ', guesses, ' tries');