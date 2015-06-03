describe("Dice", function() {
  "use strict";

  describe("#roll", function() {
    it("returns a random number from one to six", function() {
      var specDice = new Dice("Drew");
      expect(typeof (specDice.roll())).to.equal("number");
    });
  });


});
