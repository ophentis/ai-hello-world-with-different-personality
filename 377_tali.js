// Tali'Zorah - Quarian Engineer in a Suit
// Nervous but brilliant with technology

const tali = {
  quarian: true,
  engineer: true,
  inSuit: true,
  nervous: true,
  brilliant: true
};

function engineerSpeaks() {
  // Tali's always a bit nervous but competent
  console.log("Um... hello?");
  console.log("Hello, World!");

  if (tali.nervous) {
    console.log("*fidgets with suit controls*");
    console.log("I hope I'm not talking too much...");
  }

  // But she's incredibly smart
  console.log("You know, from an engineering standpoint...");
  console.log("The complexity of greeting a whole world...");
  console.log("...is actually quite elegant.");

  console.log("My suit sensors are picking up...");
  console.log("...well, mostly just excitement on my part.");

  if (tali.engineer) {
    console.log("Give me ship systems and I can fix anything!");
  }

  console.log("Keelah se'lai... sorry, old habit.");
}

engineerSpeaks();
