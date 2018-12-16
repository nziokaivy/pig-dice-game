//business logic
//game object
var game = {
totalScore: 0,
currentScore: 0,
currentPlayer: 1,
player1: 0,
player2: 0,

//random number function when rolling dice
rollDice: function() {
  var dice = Math.floor(Math.random() * 6);
  if (dice === 1) {
    this.currentScore = 0;
    this.changeTurn();
  } else {
    this.currentScore += dice;
  }
  return dice;
},
}
