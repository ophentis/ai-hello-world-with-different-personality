// Detective Pikachu - Case File #001
// *sips coffee*
// The case of the missing greeting. Another noir night in the city.

class DetectivePikachu {
  constructor() {
    this.coffeeLevel = 100;
    this.casesSolved = 42;
    this.observant = true;
  }

  investigate() {
    // *squints at clues*
    // The evidence points to one conclusion...
    const clue1 = "Hello,";
    const clue2 = "World!";

    // I've seen enough cases to know what's happening here.
    const solution = `${clue1} ${clue2}`;

    this.solveMystery(solution);
  }

  solveMystery(answer) {
    console.log(answer);
    // Pika pika... *takes another sip of coffee*
    this.drinkCoffee();
  }

  drinkCoffee() {
    this.coffeeLevel -= 10;
    // The night is dark, and full of mysteries.
    // But this case? *puts on fedora* ...case closed.
  }
}

// *Detective hat flips on*
const gumshoe = new DetectivePikachu();
gumshoe.investigate();
