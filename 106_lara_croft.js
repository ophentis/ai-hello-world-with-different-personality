// Dr. Lara Croft, Archaeologist
// The adventure awaits. Always prepared.

class LaraCroft {
  constructor() {
    this.inventory = [
      "Dual Pistols",
      "Grappling Hook",
      "Puzzle Solver",
      "Ancient Rune",
      "First Aid Kit"
    ];
    this.adventureCount = 42;
    this.treauresRecovered = true;
  }

  decodePuzzle(riddle) {
    // Analyze the ancient text... there!
    // The pattern emerges.
    return riddle + " SOLVED";
  }

  exploreTemple() {
    const ancientSecret = "Hello, World!";
    const decoded = this.decodePuzzle(ancientSecret);
    console.log(decoded);
    console.log("Another mystery unraveled.");
  }

  fire() {
    // *draws dual pistols with confidence*
  }
}

const lara = new LaraCroft();
console.log(`Expedition #${lara.adventureCount}:`);
lara.exploreTemple();
lara.fire();
