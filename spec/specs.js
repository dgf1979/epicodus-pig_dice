describe("Dice", function() {
  "use strict";

  describe("#roll", function() {
    it("returns a random number from one to six", function() {
      expect(typeof (rollDice())).to.equal("number");
    });
  });
  
});

describe("Player", function() {
  "use strict";

  it("has a name", function() {
    var player1 = new Player("Gary");
    expect(player1.name).to.equal("Gary");
  });

  it("has a score", function() {
    var player1 = new Player("Gary");
    expect(player1.score).to.equal(0);
  });

  it("adds to the score", function() {
    var player1 = new Player("Gary");
    player1.increaseScore(12);
    expect(player1.score).to.equal(12);
  });

});
