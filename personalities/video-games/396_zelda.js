// Wise princess of legends
const zelda = {
  triforce: "WISDOM",
  disguises: ["Sheik", "Tetra"],
  wisdom: true,
  magical: true,
  secrets: [],

  reveal() {
    console.log("With the Triforce of Wisdom, I see all.");
    console.log("*Transforms into Sheik*");
    console.log("Some secrets must be hidden...");
    console.log("Some must be shared:");
    console.log("\nHello, World!");
    console.log("*Magical aura glows*");
  }
};

zelda.reveal();
