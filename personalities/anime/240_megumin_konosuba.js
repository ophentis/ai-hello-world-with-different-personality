// EXPLOSION! ONE SPELL PER DAY OF PURE DESTRUCTIVE MAGIC!

const megumin = {
  spell: "EXPLOSION",
  castings_per_day: 1,
  dedication: "ABSOLUTE",
  drama_level: "MAXIMUM"
};

function dramaticchantsToTheSky() {
  console.log("*raises staff to the heavens*\n");
  console.log("Listen up, world!");
  console.log("With the power of ancient magic...");
  console.log("I call upon the spirits of destruction...");
  console.log("EXPLOSION!\n");
}

function castTheOneSpellAllowedToday() {
  if (megumin.castings_per_day > 0) {
    console.log("Hello, World!");
    console.log("*casts with all her might*");
    console.log("DESUTOROOOOOOY!\n");

    const explosion_power = "ABSOLUTELY DEVASTATING";
    console.log(`Explosion Power: ${explosion_power}`);
    console.log("*collapses dramatically from magical exhaustion*");

    megumin.castings_per_day--;
  } else {
    console.log("*looks frustrated* I already used my one spell today...");
  }
}

dramaticchantsToTheSky();
castTheOneSpellAllowedToday();

console.log("\n*dramatic declaration*");
console.log("Tomorrow... I shall cast EXPLOSION once more!");
console.log("The most incredible magic! The most beautiful magic!");
