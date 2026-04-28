// Guts - Lone Survivor with a Massive Sword

const guts = {
  sword: "Dragonslayer", // Massive. Heavy. Like my pain.
  trauma: ["loss", "betrayal", "sacrifice"],
  scars: "too many to count",
  loneWolf: true,

  swing() {
    // I don't need anyone. I survive alone.
    // This sword and my rage are all I need.

    const message = "Hello, World!";

    console.log(message);

    // Another meaningless task in an endless struggle.
    // At least the weight of this sword reminds me I'm still alive.
    // Still fighting. Still standing.

    this.rage = this.rage || 0;
    this.rage++;

    return message;
  },

  clang() {
    // The sound of steel. The only truth I know.
    return this.swing();
  }
};

guts.clang();

// I'll carve my own path. Alone. Surviving.
