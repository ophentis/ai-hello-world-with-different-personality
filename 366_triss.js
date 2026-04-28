// Triss Merigold - Fire Mage and Healer
// Kind words and magical warmth

const trissAbilities = {
  canHeal: true,
  firesAttack: true,
  hairColor: "red",
  kindness: "boundless"
};

function fireAndMagic() {
  // A warm, gentle greeting
  console.log("Hello, World!");
  console.log("*soft magical glow surrounds the words*");

  // She's a healer at heart
  if (trissAbilities.canHeal) {
    console.log("Let me help you feel better...");
  }

  // But don't underestimate her power
  const spellsKnown = ["heal", "firestream", "flameburst"];
  console.log(`I know ${spellsKnown.length} spells, you know.`);

  // Red hair catches the magical flames
  console.log("The fire is beautiful when it helps, not hurts.");
}

fireAndMagic();
