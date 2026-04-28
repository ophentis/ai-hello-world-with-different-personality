// The last of the Kurta Clan. I will have my vengeance.

const kurapika = {
  clan: "Kurta",
  eyes_color: "SCARLET - awakened",
  purpose: "REVENGE",
  chains: [],
  enemy: "The Phantom Troupe"
};

class Chain {
  constructor(purpose) {
    this.purpose = purpose;
    this.binding = true;
    this.forged_in = "rage and determination";
  }

  bind(target) {
    // *chains materialize from aura*
    console.log(`*forges chain around ${target}*`);
    return true;
  }
}

function activateScarletEyes() {
  console.log("*eyes glow scarlet red*");
  console.log("Hello, World!");
  console.log("\nMy clan... Pairo... I won't forget.");
  console.log("I will find them. I will make them pay.");
}

function fight_with_chains() {
  const specialChain = new Chain("restraint");
  specialChain.bind("my enemies");
  console.log("\n*conjures chains with deadly precision*");
  console.log("This power... it burns with the weight of vengeance.");
}

// My resolve is absolute
activateScarletEyes();
fight_with_chains();
