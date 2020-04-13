let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//At the start of each new round, this function will generate a new secret target number
const generateTarget = () => {
  let secretNumber = Math.floor(Math.random() * 9);
   return secretNumber;
  
};

//This function will determine which guess is closer to the guessed number
const compareGuesses(humanGuess, computerGuess, secretNumber) = () => {
  if (humanGuess=++secretNumber || humanGuess=--secretNumber) {
	return true;
} else if (computerGuess=++secretNumber || humanGuess=--secretNumber) {
  return false;
} else if (computerGuess === humanGuess) {
  return true;
}
};

//This function updates the score of both players
const updateScore() = ("") => {
  if (true) {
    ++humanScore;
  } else {
    ++computerScore
  };
};

//This last function will update the round number after each round
const advancedRound = () => {
  ++currentRoundNumber
};
