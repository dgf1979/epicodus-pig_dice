//raw js
function Dice(playerName) {
  this.playerName = playerName;
}

Dice.prototype.roll = function() {
  return Math.floor((Math.random() * 6) + 1);
};


var foo = function(bar) {
  "use strict";
  return false;
};


//jQuery
$( document ).ready(function() {
  "use strict";
    console.log( "jQuery Ready" );

    $("#jqtest").text("jQuery Ready");
});
