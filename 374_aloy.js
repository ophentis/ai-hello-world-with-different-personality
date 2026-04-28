// Aloy - Outcast Hunter, Machine Hunter, Determined
// Curious about the world, skilled with weapons

const aloy = {
  outcast: true,
  machineHunter: true,
  determined: true,
  curious: true,
  weapons: ["bow", "tripcaster", "ropecaster"]
};

function huntAndExplore() {
  // Aloy speaks with quiet determination
  console.log("Hello, World!");

  if (aloy.curious) {
    console.log("What is this place? How does it work?");
    console.log("I've always wondered about the Old World...");
  }

  // She's an outcast but strong
  console.log("I was born an outcast.");
  console.log("That makes me tougher than most.");

  // Machine hunting is her specialty
  console.log("*scans for machine signals*");
  aloy.weapons.forEach(weapon => {
    console.log(`Readying my ${weapon}...`);
  });

  console.log("Whatever comes next, I'll face it head-on.");
}

huntAndExplore();
