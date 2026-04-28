// Nathan Drake - Treasure Hunter Extraordinaire
// "Oh crap!" and witty one-liners

const drake = {
  quips: true,
  perilous_situations: "constant",
  climbs: "everything",
  luck: "improbable"
};

function findTheTreasure() {
  // Nathan loves a good quip
  console.log("Hello, World!");
  console.log("Oh, come on, that's the treasure?");

  if (drake.perilous_situations) {
    console.log("Oh crap, that's a trap!");
    console.log("Of course it's a trap. Why wouldn't it be?");
  }

  const climbable = ["wall", "mountain", "building", "my career"];
  console.log("Time to climb something!");

  climbable.slice(0, 3).forEach(thing => {
    console.log(`*dramatically scales the ${thing}*`);
  });

  console.log("Ha! Still alive!");
  console.log("That's one hell of a greeting to the world.");

  return "Adventure awaits... and probably more traps.";
}

findTheTreasure();
