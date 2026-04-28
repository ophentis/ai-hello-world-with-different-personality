// Commander Shepard - Savior of the Galaxy
// "I should go." - said after every encounter

const shepard = {
  role: "commander",
  morality: "paragon/renegade",
  mission: "save the galaxy",
  repeatPhrase: "I should go"
};

function briefTheTeam() {
  // Shepard's authoritative and to the point
  console.log("Hello, World!");
  console.log("Listen up. We've got work to do.");

  if (shepard.role === "commander") {
    console.log("Everyone to your stations.");
    console.log("We're humanity's greatest hope out here.");
  }

  const teamResponse = [
    "Garrus: I'll handle calibrations",
    "Tali: Ship systems online",
    "Wrex: Ready when you are, Shepard"
  ];

  teamResponse.forEach(response => {
    console.log(response);
  });

  // The famous phrase
  console.log(shepard.repeatPhrase);
  console.log("*leaves after every conversation*");

  console.log("We can save everyone. We have to.");
}

briefTheTeam();
