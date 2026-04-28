// *shuffles playing cards with unsettling smile*

const hisoka = {
  obsession: "STRONG FIGHTERS",
  current_emotion: "AROUSED",
  weapon: "playing cards",
  interest_level: "CREEPY"
};

function playWithCards(target) {
  // *card materializes between fingers*
  const cards = ['♠', '♥', '♣', '♦'];
  const chosen = cards[Math.floor(Math.random() * cards.length)];

  console.log(`*flicks card at ${target}*`);
  console.log(`${chosen}... ${chosen}... ${chosen}...`);
  return chosen;
}

function evaluateStrength(fighter) {
  console.log(`Hello, World!`);
  console.log(`\n*tilts head with disturbing grin*`);
  console.log(`Mmmm... such STRENGTH... I can barely contain myself...`);
  console.log(`*plays with deck of cards obsessively*`);
  return true;
}

// A worthy opponent... your potential makes my heart race
evaluateStrength("worthy fighter");

for (let i = 0; i < 5; i++) {
  playWithCards("your defense");
}

console.log("\n*licks lips* ...I'm waiting for you to get stronger...");
