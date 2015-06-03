var player1 = new Player("Player1");
var player2 = new Player("Player2");

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
  console.log("rolled a " + number);

  switch(number) {
    case 1:
        addDot("32px","32px", jqDiceDiv);
        break;
    case 2:
        addDot("19px","19px", jqDiceDiv);
        addDot("38px","38px", jqDiceDiv);
        break;
    case 3:
        addDot("12px","12px", jqDiceDiv);
        addDot("32px","32px", jqDiceDiv);
        addDot("52px","52px", jqDiceDiv);
        break;
    case 4:
        addDot("12px","12px", jqDiceDiv);
        addDot("12px","60px", jqDiceDiv);
        addDot("60px","12px", jqDiceDiv);
        addDot("60px","60px", jqDiceDiv);
        break;
    case 5:
        addDot("12px","12px", jqDiceDiv);
        addDot("12px","60px", jqDiceDiv);
        addDot("60px","12px", jqDiceDiv);
        addDot("60px","60px", jqDiceDiv);
        addDot("32px","32px", jqDiceDiv);
        break;
    case 6:
        addDot("12px","12px", jqDiceDiv);
        addDot("12px","32px", jqDiceDiv);
        addDot("12px","60px", jqDiceDiv);
        addDot("60px","12px", jqDiceDiv);
        addDot("60px","32px", jqDiceDiv);
        addDot("60px","60px", jqDiceDiv);
        break;
  }
}

//add a dot to a dice at the specified position
addDot = function(x, y, dice) {
  dice.append("<div class='dots'></div>");
  dice.children(".dots:last").css({ top: y, left: x });
  // $("div.dots:last").css({ top: y, left: x });
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

    var currentPlayerScore;
    if (this.id === "player1dice") {
      currentPlayerScore = $("div#player1turnScore");
    } else {
      currentPlayerScore = $("div#player2turnScore");
    }

    if (rollResult === 1) {
      currentPlayerScore.text(0);
    } else {
      currentPlayerScore.text(parseInt(currentPlayerScore.text()) + rollResult);
    }

    dotDice(rollResult, $(this));
  });

  // $("div#player2dice").click(function() {
  //   var rollResult = rollDice();
  //   dotDice(rollResult, $(this));
  //   var score = $("div#player2turnScore").text();
  //   $("div#player2turnScore").text(parseInt(score) + rollResult);
  // });

  //handles clicking play on new game modal form
  $("form#newGame").submit(function(event) {
    event.preventDefault();
    // get names from form
    player1 = new Player($("input#player1").val());
    player2 = new Player($("input#player2").val());
    // set names on screen
    $("span#player1name").text(player1.name);
    $("span#player2name").text(player2.name);
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
