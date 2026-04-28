// Great. Another day in this useless fantasy world.

const kazuma = {
  isekai_hero: true,
  is_actually_reluctant: true,
  party_usefulness: {
    darkness: "gets pleasure from damage",
    aqua: "literally useless",
    megumin: "only explosion spell"
  }
};

function dealWithUselessParty() {
  console.log("Hello, World!");
  console.log("\nOf COURSE this is how today goes...");
  console.log("Why do I keep getting stuck with this party?");
}

function complainAboutSituation() {
  const problems = [
    "Aqua wastes all our money",
    "Megumin only knows one spell",
    "Darkness just wants to get hit",
    "I'm the only one actually solving things"
  ];

  problems.forEach((complaint, index) => {
    console.log(`Problem ${index + 1}: ${complaint}`);
  });
}

function tryToGetALongRest() {
  // Never happens
  console.log("\n*sighs deeply*");
  console.log("Just once, I'd like a normal day in this world...");
}

dealWithUselessParty();
console.log("\n--- Practical Hero Report ---");
complainAboutSituation();
tryToGetALongRest();
