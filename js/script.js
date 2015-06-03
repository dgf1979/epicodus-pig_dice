
function Player(name) {
  this.name = name;
  this.score = 0;
}

Player.prototype.increaseScore = function(amount) {
  this.score += amount;
}

var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
};


var foo = function(bar) {
  "use strict";
  return false;
};


var dotDice = function(number, jqDiceDiv) {
  jqDiceDiv.empty();

  switch(number) {
    case 1:
        addDot("32px","32px", jqDiceDiv);
        break;
    case 2:
        addDot("20px","20px", jqDiceDiv);
        addDot("44px","30px", jqDiceDiv);
        break;
    case 3:
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        break;
    case 4:
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        break;
    case 5:
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        break;
    case 6:
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        addDot("8px","8px", jqDiceDiv);
        break;
  }
}

//add a dot to a dice at the specified position
addDot = function(x, y, dice) {
  dice.append("<div class='dots'></div>");
  $("div.dots:last").css({ top: y, left: x });
}

//jQuery
$( document ).ready(function() {
  "use strict";

  // show player names form to start new game
  $("div#modalOverlay").show();

  // starts dice at random position
  $("div.dice").each(function() {
    var rollResult = rollDice();
    dotDice(rollResult, $(this));
  });

  //set total and turn scores to 0 to start
  $("span#player1totalScore").text(0);
  $("div#player1turnScore").text(0);
  $("span#player2totalScore").text(0);
  $("div#player2turnScore").text(0);

  // handles clicking on the dice to roll and update scores
  $("div.dice").click(function() {
    var rollResult = rollDice();
    dotDice(rollResult, $(this));

    if(this.id === "player1dice") {
      var score = $("div#player1turnScore").text();
      $("div#player1turnScore").text(parseInt(score) + rollResult);
    } else {
      var score = $("div#player2turnScore").text();
      $("div#player2turnScore").text(parseInt(score) + rollResult);
    }
  });

  //handles clicking play on new game modal form
  $("form#newGame").submit(function(event) {
    event.preventDefault();
    // set names from form
    $("span#player1name").text($("input#player1").val());
    $("span#player2name").text($("input#player2").val());
    // dismiss overlay
    $("div#modalOverlay").hide();
  });


  // handles clicking 'hold' to end turn and add score to total score
  $("span.holdButton").click(function() {
    if (this.id === "player1hold") {

    } else {

    }

  });




});
