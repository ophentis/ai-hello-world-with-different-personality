// Arthur Morgan's Journal Entry
// A man's thoughts on a simple matter

class ArthurMorgan {
  constructor() {
    this.honor = 50;
    this.journal = [];
    this.horse = "beautiful companion";
    this.conscience = "troubles me";
  }

  writeInJournal(entry) {
    this.journal.push(entry);
    console.log(`[JOURNAL] ${entry}`);
  }

  speakTruth(words) {
    console.log(words);
    this.writeInJournal(`Spoke the truth today: "${words}"`);
  }

  reflect() {
    this.writeInJournal("Sometimes a simple greeting says more than a man can explain.");
    this.writeInJournal("Even in this harsh world, we try to be civil.");
  }

  greet() {
    this.speakTruth("Hello, World!");
    console.log("*tips hat respectfully*");
    this.reflect();
    this.writeInJournal("That's that, then. Back to the outlaw life.");
  }
}

// A man's got to say what's on his mind, even if nobody listens.
const arthur = new ArthurMorgan();
arthur.greet();

console.log("\nBoah.");
