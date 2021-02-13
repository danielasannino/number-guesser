let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

let userGuess = 0;
let computerGuess = 0;
let targetNum = generateTarget();

const getAbsoluteDistance = (guess, target) => {
    Math.abs(target - guess);
};

const compareGuesses = (userGuess, computerGuess, targetNum) => {
    getAbsoluteDistance(userGuess, targetNum) <= getAbsoluteDistance(computerGuess, targetNum) ? true : false;
};

let winner = compareGuesses(userGuess, computerGuess, targetNum) ? 'human' : 'computer';

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => {
    return currentRoundNumber++;
};