// LeBron James - The King, Versatile, Business Mogul, Chosen One
// "I'm coming back to the league" - from THE DECISION

class LeBronEmpire {
  constructor() {
    this.title = "King James";
    this.legacy = [];
    this.portfolio = ["SpringHill", "Uninterrupted", "MoreVersatile"];
    this.business_revenue = "1B+";
    this.chosen = true;
  }

  sayMessage() {
    return "Hello, World!";
  }

  versatility() {
    // Point guard. Shooting guard. Small forward. Power forward. Center.
    // I can play every position. Offensively. Defensively. Everywhere.
    return [
      "playmaking",
      "scoring",
      "defense",
      "leadership",
      "empire building"
    ];
  }

  buildLegacy() {
    const message = this.sayMessage();
    console.log(message);

    // Off court? I'm building businesses worth billions.
    // On court? I'm a king among kings.
    // I am the chosen one.
  }
}

const king = new LeBronEmpire();
king.buildLegacy();
