//business logic
//game object

var game = {
  totalScore: 0,
  currentScore: 0,
  player1,
  player2,
  currentPlayer = 0;

}

var

  function roll() {
  var random = Math.floor(Math.random()*6)+1;
    document.getElementById("player1currentdieroll").value = random;
    document.getElementById("player2currentdieroll").value = random;
  }

  function rollDice() {
    roll();
    if (random != 1) {
      this.currentScore += random;
      document.getElementById("player1currentscore").value = this.currentScore;
      return roll;
    } else {
    this.currentScore = 0;
    document.getElementById("rolled1").innerHTML = "sorry you rolled 1!";
    currentPlayer.changeTurn();
    }
  }

  function changeTurn() {
    if (this.currentPlayer === 1) {
      this.player1 += this.currentScore;
      this.currentPlayer = 2;
    } else {
      this.player2 += this.currentScore;
      this.currentPlayer = 1;
    }
  }

  function hold() {
    this.changeTurn();
    this.totalScore += this.currentScore;
    this.currentScore = 0;
  }

  //function for checking winner
  function winner() {
    if (this.totalScore >= 30) {
      document.getElementById("playerwin").innerHTML = this.playerName + "is the winner!"
    }
  }

//user interface
$(document).ready(function() {
  $(".container").hide();
  $("#start").click(function() {
    $(".container").show();
    $("#player2currentdieroll,#player1win,#player2win,#rolled2").hide();
  })
})
