const prompt = require("prompt-sync")()

console.log("Welcome to the Computer Hardware Quiz!")

let correctAnswers = 0;
let totalQuestions = 3;

const answer1 = prompt("What is the brain of the computer? ");
const correctAnswer1 = "CPU";

if(answer1.toUpperCase()  === correctAnswer1){
    console.log("You got it correct, Bravo!")
    correctAnswers++;
}else{
    console.log("Wrong Answer, oops!")
}

const answer2 = prompt("What is better 3090 or 4050 ");
const correctAnswer2 = "3090";

if(answer2.toUpperCase()  === correctAnswer2){
    console.log("You got it correct, Bravo!")
    correctAnswers++;
}else{
    console.log("Wrong Answer, oops!")
}

const answer3 = prompt("How much Ram is good, 8gb or 16gb? ");
const correctAnswer3 = "16gb";
const correctAnswer4 = "16";

if(answer3.toLowerCase()  === correctAnswer3 || correctAnswer4){
    console.log("You got it correct, Bravo!")
    correctAnswers++;
}else{
    console.log("Wrong Answer, oops!")
}

const percent = Math.round(correctAnswers / totalQuestions * 100);

console.log(`You got ${correctAnswers} correct!`)
console.log(`You scored ${percent}%`)

