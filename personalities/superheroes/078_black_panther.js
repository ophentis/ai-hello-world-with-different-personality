// T'Challa - Black Panther - King of Wakanda
// "Wakanda Forever"

class King {
  constructor() {
    this.nation = "Wakanda";
    this.motto = "Wakanda Forever";
    this.heart = "vibranium";
    this.throne = true;
    this.ancestors = "watching";
  }

  greetTheWorld() {
    // A king greets with dignity. With purpose.
    // Not to show off, but to share responsibility.

    console.log("Hello, World!");

    // Wakanda has hidden for so long.
    // Perhaps it is time to share our light.
  }

  hearsTheAncestors() {
    // My father speaks to me.
    // My ancestors guide me.
    // They ask: "What will you do with your power?"

    const wakandaForever = {
      technology: "unmatched",
      strength: "unbreakable",
      purpose: "protect those who cannot protect themselves"
    };

    console.log(`This is Wakanda's way: ${wakandaForever.purpose}`);
  }

  declareMotto() {
    // Not just words. A covenant.
    // With my people. With my ancestors. With the world.

    console.log("WAKANDA FOREVER.");

    // The panther watches. The king leads.
    // And we are ONE.
  }
}

const tchalla = new King();
tchalla.greetTheWorld();
tchalla.hearsTheAncestors();
tchalla.declareMotto();
