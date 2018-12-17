var game = {
  totalScore: 0,
  currentScore: 0,
  player1,
  player2,
  currentPlayer = 0;
}

function roll() {
  var random = Math.floor(Math.random() * 6) + 1;
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
  }
}


$(document).ready(function() {
  $(".container").hide();
  $("#start").click(function() {
    $(".container").show();
    $("#player2currentdieroll,#player1win,#player2win,#rolled2").hide();
  })
})
