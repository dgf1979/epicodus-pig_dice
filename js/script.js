//raw js
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
